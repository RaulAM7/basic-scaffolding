# npm package conversion

## What changed

- Added npm package metadata in `package.json`
- Added CLI entrypoint in `bin/create-basic-scaffolding.js`
- Added scaffold copy logic in `lib/scaffold.js`
- Added focused tests in `test/scaffold.test.js`
- Updated `README.md` with npm usage and version behavior
- Updated `01_harness/STACK.md` and `03_specs/decisions.md`

## Verified acceptance criteria

- `package.json` exists and is valid enough for `npm test` and `npm pack --dry-run`
- The CLI scaffolds the workspace into a target directory
- Generated workspaces do not include package internals such as `package.json`, `bin/`, or `lib/`
- Focused automated tests exist and pass
- README documents usage and version behavior
- Stack metadata reflects the new Node.js package
- Packaging was validated with npm tooling

## Verification run

- `npm test` -> pass
- `npm pack --dry-run --json` -> pass
- `node bin/create-basic-scaffolding.js --help` -> pass
- `node bin/create-basic-scaffolding.js --version` -> pass
- `node bin/create-basic-scaffolding.js <tmp-dir>` -> pass

## Facts verified on 2026-06-16

- `basic-scaffolding` returned `404 Not Found` in npm registry lookup
- `create-basic-scaffolding` returned `404 Not Found` in npm registry lookup

## Unresolved unknowns

- Final permanent package name or npm scope
- Whether future releases should include migration tooling for already generated workspaces
- License choice before public publication

## Risks

- Name availability can change between now and publish time
- Existing generated workspaces remain snapshots and will not auto-update

## Next step

- Publish with an intentional package name and explicit versioning policy:
  - fixed version pin for reproducibility
  - `@latest` only when you want new scaffold changes automatically at creation time
