# Spec-Driving Flow

Reusable workflow for turning chaotic client or project material into validated,
stage-gated pre-sales artifacts.

This flow extends the root harness. It does not replace `01_harness/TASKFLOW.md`,
does not use `00_inbox/` as its run container, and does not create client-specific
business artifacts until a run is explicitly initialized.

## Source of Truth

- Orchestrator rules: `references/orchestrator-contract.md`
- Stage rules: `references/stage-contract.md`
- Review gate: `references/review-contract.md`
- Command behavior: `references/command-contract.md`
- Artifact templates: `templates/`
- State schemas: `schemas/`

## Run Location

Runs live under:

```text
04_outputs/spec-driving/<case_id>/
```

Each run is intended to be tracked in git, including raw input, state, logs,
reviews, and artifacts.

## Run Layout

```text
<run>/
  run_config.yaml
  raw/
  context/
    00_intake_context_pack.md
  artifacts/
    01_problem_audit_v1.md
    02_mvp_scope_decision_v1.md
    03_technical_presales_blueprint_v1.md
    04_commercial_proposal_v1.md
    06_execution_plan_v1.md
    _iterations/
  reviews/
  handoffs/
    export_index.md
  state/
    run_state.json
    artifact_manifest.json
  logs/
```

## Stage Sequence

| Stage | Required | Artifact |
| --- | --- | --- |
| 00 | yes | `context/00_intake_context_pack.md` |
| 01 | yes | `artifacts/01_problem_audit_v1.md` |
| 02 | yes | `artifacts/02_mvp_scope_decision_v1.md` |
| 03 | yes | `artifacts/03_technical_presales_blueprint_v1.md` |
| 04 | yes | `artifacts/04_commercial_proposal_v1.md` |
| 06 | optional | `artifacts/06_execution_plan_v1.md` |

Stage 05 is intentionally absent. ROI, cost, and value material belong inside
Stage 04.

## Gates

Every stage must have review evidence before the orchestrator advances. The
specialized reviewer may return `PASS`, `FAIL`, `BLOCKED`, or `SKIPPED`.

- `PASS` advances only with explicit checklist evidence.
- `FAIL` routes the artifact back to the same stage for revision.
- `BLOCKED` stops the run and records blocking questions.
- `SKIPPED` is allowed only for Stage 06.
- Human override is explicit and recorded; it never deletes failed reviews.

## Forbidden Business Artifacts

The flow must not create independent top-level business artifacts named:

- `05_roi_operational_estimate`
- `07_backlog`
- `08_milestones`
- `09_repo_structure`
- `final_manifest`

Backlog, milestone, repository structure, QA, and delivery planning may appear
only as sections inside `06_execution_plan_v1.md` when Stage 06 is enabled.
