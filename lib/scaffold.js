const fs = require('node:fs');
const path = require('node:path');

const TEMPLATE_ENTRIES = Object.freeze([
  '.claude',
  '.codex',
  '00_inbox/README.md',
  '01_harness',
  '02_context',
  '03_specs',
  '04_outputs/.keep',
  '05_scratch/.keep',
  'AGENTS.md',
  'CLAUDE.md',
  'README.md',
  'runners',
  'shared'
]);

function parseArgs(argv) {
  const options = {
    force: false,
    help: false,
    version: false,
    targetDir: '.'
  };
  const positional = [];

  for (const arg of argv) {
    if (arg === '--force' || arg === '-f') {
      options.force = true;
      continue;
    }
    if (arg === '--help' || arg === '-h') {
      options.help = true;
      continue;
    }
    if (arg === '--version' || arg === '-v') {
      options.version = true;
      continue;
    }
    if (arg.startsWith('-')) {
      throw new Error(`Unknown option: ${arg}`);
    }
    positional.push(arg);
  }

  if (positional.length > 1) {
    throw new Error('Expected at most one target directory.');
  }

  if (positional[0]) {
    options.targetDir = positional[0];
  }

  return options;
}

function ensureTargetDir(targetDir, force) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    return;
  }

  const stats = fs.statSync(targetDir);
  if (!stats.isDirectory()) {
    throw new Error(`Target path is not a directory: ${targetDir}`);
  }

  const contents = fs.readdirSync(targetDir);
  if (contents.length > 0 && !force) {
    throw new Error(`Target directory is not empty: ${targetDir}. Use --force to overwrite files.`);
  }
}

function copyEntry(templateRoot, targetDir, entry) {
  const source = path.join(templateRoot, entry);
  const destination = path.join(targetDir, entry);

  if (!fs.existsSync(source)) {
    throw new Error(`Template entry is missing: ${entry}`);
  }

  const stats = fs.statSync(source);
  if (stats.isDirectory()) {
    fs.cpSync(source, destination, {
      recursive: true,
      force: true
    });
    return;
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

function scaffoldProject({ templateRoot, targetDir, force = false }) {
  ensureTargetDir(targetDir, force);

  for (const entry of TEMPLATE_ENTRIES) {
    copyEntry(templateRoot, targetDir, entry);
  }

  return {
    targetDir,
    copiedEntries: TEMPLATE_ENTRIES.length
  };
}

function readPackageVersion(templateRoot) {
  const packageJsonPath = path.join(templateRoot, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  return packageJson.version;
}

function formatHelp(commandName) {
  return [
    'Create a new basic-scaffolding workspace.',
    '',
    `Usage: ${commandName} [target-dir] [--force]`,
    '',
    'Examples:',
    `  ${commandName} my-workspace`,
    `  ${commandName} . --force`,
    '',
    'Flags:',
    '  -f, --force    Allow copying into a non-empty directory',
    '  -h, --help     Show help',
    '  -v, --version  Show package version'
  ].join('\n');
}

async function runCli({
  argv = process.argv.slice(2),
  templateRoot = path.resolve(__dirname, '..'),
  stdout = process.stdout,
  stderr = process.stderr,
  commandName = 'create-basic-scaffolding'
}) {
  try {
    const options = parseArgs(argv);

    if (options.help) {
      stdout.write(`${formatHelp(commandName)}\n`);
      return 0;
    }

    if (options.version) {
      stdout.write(`${readPackageVersion(templateRoot)}\n`);
      return 0;
    }

    const targetDir = path.resolve(process.cwd(), options.targetDir);
    const result = scaffoldProject({
      templateRoot,
      targetDir,
      force: options.force
    });

    stdout.write(`Scaffold created in ${result.targetDir}\n`);
    return 0;
  } catch (error) {
    stderr.write(`Error: ${error.message}\n`);
    return 1;
  }
}

module.exports = {
  TEMPLATE_ENTRIES,
  formatHelp,
  parseArgs,
  readPackageVersion,
  runCli,
  scaffoldProject
};
