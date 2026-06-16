#!/usr/bin/env node

const path = require('node:path');
const { runCli } = require('../lib/scaffold');

runCli({
  argv: process.argv.slice(2),
  templateRoot: path.resolve(__dirname, '..'),
  commandName: 'create-basic-scaffolding'
}).then((exitCode) => {
  process.exitCode = exitCode;
}).catch((error) => {
  process.stderr.write(`Unexpected error: ${error.message}\n`);
  process.exitCode = 1;
});
