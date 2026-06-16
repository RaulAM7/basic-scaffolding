# basic-scaffolding

Agentic Repo Harness v2 workspace.

## npm package

This repo now includes an npm CLI package definition so it can be published as `create-basic-scaffolding`.

### Usage

- `npm create basic-scaffolding@latest my-workspace`
- `npx create-basic-scaffolding@latest my-workspace`
- `npx create-basic-scaffolding@1.0.0 my-workspace`
- `npx create-basic-scaffolding@latest . --force`

### Version behavior

- The command runs the version you install or request explicitly.
- If you publish a new version later, existing installs keep using their installed version until updated.
- A generated workspace is a snapshot of the package version used at creation time. It does not auto-update when this repo changes.

## Start Here

1. Drop all raw material into `00_inbox/`.
2. Use `01_harness/TASKFLOW.md` to run Seed -> Distill -> Spec -> Ship -> QA.
3. Keep one active spec in `03_specs/now/`.
4. Put deliverables in `04_outputs/`.
