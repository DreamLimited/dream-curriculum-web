# dream-curriculum-web

_Last verified: 2026-11-10._

Public training portal for the **Dream Pursuit Doctrine**, a concept-first
curriculum for winning federal business (doctrine, modules, literacy, case
library, study plans, course ladder). It is a static [VitePress](https://vitepress.dev)
site published at **https://learn.dreamhive.org**.

The teaching content is authored in the sibling repo `DreamLimited/dream-curriculum`
and copied into `docs/` by `scripts/gen-content.sh` (it reads a local checkout of
that repo, so run it only on a machine that has it). The version of the published
content is in `docs/VERSION`. Read `docs/CLAUDE.md` and `docs/AGENTS.md` before
editing any lesson: the doctrine layer is stack-agnostic by rule.

## Run it

```sh
npm ci
npm run docs:dev       # live preview of docs/
npm run docs:build     # generates the downloads manifest and library page, then builds docs/.vitepress/dist
npm run docs:preview   # serve the built site
```

Node 22 LTS is what CI uses. There is no application code and no container image.

## How it deploys

GitHub Pages is the only hosting plane. There is no Kubernetes deploy, no Harbor
image and no `orbital.yaml`.

1. GitLab `main` (git.developerdojo.org) is the source of truth.
2. The GitHub mirror runs `.github/workflows/pages.yml` on every push to `main`:
   `npm ci`, `npm run docs:build`, then `actions/deploy-pages`. The `gh-pages`
   branch is kept in sync by `git-mirror-reconciler`.
3. The custom domain `learn.dreamhive.org` points at GitHub Pages.

GitLab CI (`.gitlab-ci.yml`) is source assurance only: the launch-sequence
`validate-only` pipeline plus a `build` job that proves `npm run docs:build`
compiles, so broken frontmatter or Markdown fails the MR instead of shipping.
Changes to `.github/workflows/` are not exercised by GitLab CI; they only run on
the mirror after merge.

Dependencies are kept current by Renovate (`renovate.json`, shared preset
`FocusApiary/dot-github:renovate-default`).

## Ownership

Owner seat: dream (escalation project `dream-hub/ops`). Group milestone for
repo hygiene: "Dream repos: dependency and CI hygiene 2026-Q4".
