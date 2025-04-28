---
sidebar_position: 4
---

# GitHub Rules

## GitHub Branch Ruleset for main:

### General Information

- **Ruleset Name:** `main`
- **Status:** Active
- **Enforcement:** Enabled
- **Bypass List:** _None_ (No roles, teams, or apps are exempt from this
  ruleset)

### Target Branches

- **Applies to:** `main`
- **Branch Targeting:**
  - **Inclusion:** Default (`main`)
  - **Exclusion:** None

### Rules Overview

#### Branch Rules

- **Restrict creations:** Only users with bypass permission can create matching
  refs. NO
- **Restrict updates:** Only users with bypass permission can update matching
  refs. NO
- **Restrict deletions:** Only users with bypass permission can delete matching
  refs. YES

#### Commit & Merge Rules

- **Require linear history:** Prevent merge commits (only allow fast-forward
  merges). YES
- **Require deployments to succeed:** Environments must be successfully deployed
  to before refs can be pushed. NO
- **Require signed commits:** Commits must have verified signatures. NO
- **Require a pull request before merging:** All commits must be made to a
  non-target branch and submitted via pull request. YES
  - **Required approvals:** The number of approving reviews required before
    merging. 1-3 (Adjust to the size of the team)
  - **Dismiss stale approvals:** New commits dismiss previous pull request
    review approvals. YES
  - **Require review from Code Owners:** Pull requests modifying files with
    designated code owners require their approval. YES
  - **Require approval of most recent push:** The most recent reviewable push
    must be approved by someone other than the pusher. YES
  - **Require conversation resolution:** All PR conversations must be resolved
    before merging. YES
  - **Request pull request review from Copilot:** Automatically request review
    from Copilot for new PRs (if the author has access). YES

#### Merge Methods

- **Allowed merge methods:** Any combination of merge commits, squashing, or
  rebasing (at least one enabled). SQUASH

#### Status Checks

- **Require status checks to pass:** Selected status checks must pass before
  merging.
  - **Required status checks:**
    - `Pull Request CI`
- **Require branches to be up to date before merging:** PRs must be tested with
  the latest code (requires at least one status check enabled). YES
- **Do not require status checks on creation:** Allows repo/branch creation even
  if checks would otherwise prohibit it. YES

#### Force Pushes & Code Scanning

- **Block force pushes:** Users with push access cannot force push. YES
- **Require code scanning results:**  
  Tools (e.g., CodeQL) must provide code scanning results for both the commit
  and the reference.
  - **Required tools:**
    - `CodeQL`

## Github PR rules

### Allowed Merge Methods

- **Allow merge commits** Add all commits from the head branch to the base
  branch with a merge commit. NO
- **Allow squash merging** Combine all commits from the head branch into a
  single commit in the base branch. YES Default commit message : **Pull request
  title and commit details**
- **Allow rebase merging** Add all commits from the head branch onto the base
  branch individually. NO

### Branch Update Options

- **Always suggest updating pull request branches Loading** Whenever there are
  new changes available in the base branch, present an “update branch option in
  the pull request. NO

### Auto-Merge Option

- **Allow auto-merge** Waits for merge requirements to be met and then merges
  automatically. YES

### Auto-Delete Option

- **Automatically delete head branches Loading** Deleted branches will still be
  able to be restored. YES
