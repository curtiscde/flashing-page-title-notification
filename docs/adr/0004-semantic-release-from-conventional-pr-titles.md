# Release with semantic-release from conventional PR titles

Versions are no longer bumped by hand. PRs are squash-merged with the PR title as the commit message, a check requires that title to be a conventional commit, and on every merge to `main` semantic-release derives the version (`fix` → patch, `feat` → minor, breaking → major, anything else → no release), publishes via npm Trusted Publishing, and commits the version and `CHANGELOG.md` straight back to `main`. Dependabot uses `chore(deps):` because every dependency is a dev dependency: a vulnerability fix in tooling changes nothing users install, so it shouldn't publish an identical version.

semantic-release runs through `npx` with exact versions pinned in the workflow, not from `devDependencies`: its tree (including a bundled npm) carries audit findings with no fix available, which would otherwise sit in our lockfile.

## Considered Options

- **Bump `version` by hand in PRs** (3.1.0–3.2.0): rejected — easy to forget, and the PR author has to classify the change anyway.
- **release-please (release PR)**: rejected — batches releases behind an extra PR to merge; for a package whose only releasable changes are user-facing `feat`/`fix`, releasing on merge is what we want.
- **semantic-release in `devDependencies`**: rejected — reintroduces unfixable high-severity `npm audit` findings.
