const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');

const { scaffoldProject } = require('../lib/scaffold');

const templateRoot = path.resolve(__dirname, '..');

test('scaffoldProject copies the scaffold template without package internals', () => {
  const targetDir = fs.mkdtempSync(path.join(os.tmpdir(), 'basic-scaffolding-'));

  scaffoldProject({ templateRoot, targetDir });

  assert.ok(fs.existsSync(path.join(targetDir, 'AGENTS.md')));
  assert.ok(fs.existsSync(path.join(targetDir, '01_harness', 'RULES.md')));
  assert.ok(fs.existsSync(path.join(targetDir, '.codex', 'commands', 'spec-drive-run.md')));
  assert.ok(fs.existsSync(path.join(targetDir, 'shared', 'skills', 'write-spec', 'SKILL.md')));
  assert.ok(fs.existsSync(path.join(targetDir, '04_outputs', '.keep')));

  assert.ok(!fs.existsSync(path.join(targetDir, 'package.json')));
  assert.ok(!fs.existsSync(path.join(targetDir, 'bin')));
  assert.ok(!fs.existsSync(path.join(targetDir, 'lib')));
  assert.ok(!fs.existsSync(path.join(targetDir, '04_outputs', 'spec-driving')));
});

test('scaffoldProject rejects non-empty directories without force', () => {
  const targetDir = fs.mkdtempSync(path.join(os.tmpdir(), 'basic-scaffolding-'));
  fs.writeFileSync(path.join(targetDir, 'existing.txt'), 'keep');

  assert.throws(() => {
    scaffoldProject({ templateRoot, targetDir });
  }, /Target directory is not empty/);
});

test('scaffoldProject allows non-empty directories with force', () => {
  const targetDir = fs.mkdtempSync(path.join(os.tmpdir(), 'basic-scaffolding-'));
  fs.writeFileSync(path.join(targetDir, 'existing.txt'), 'keep');

  scaffoldProject({ templateRoot, targetDir, force: true });

  assert.ok(fs.existsSync(path.join(targetDir, 'existing.txt')));
  assert.ok(fs.existsSync(path.join(targetDir, 'AGENTS.md')));
});
