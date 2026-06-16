# STACK

Default: docs-first workspace.

Current code introduced:
- Runtime/framework: Node.js CLI package (CommonJS)
- Project layout conventions: `bin/` for entrypoints, `lib/` for package logic, `test/` for Node test runner
- Build/test/dev commands:
  - `npm test`
  - `npm pack --dry-run`
  - `node bin/create-basic-scaffolding.js <target-dir>`
