---
name: review-round
description: Run one monthly review round of the cryptology.city wiki — apply the decisions the maintainer marked on the review page, audit every page changed on main since the last round plus a rotating slice of the rest, verify the findings waiting in the review inbox, deliver the round's changes as one pull request, and republish the review page with the round's history. Use when the monthly routine fires ("run the review-round skill"), or when the maintainer asks to run a review round or to apply review decisions.
---

# Review round

The maintainer's decisions (2026-10-04): a round runs **monthly**; it audits
**every page changed on main since the last round plus a rotating slice of
the rest**; decisions marked on the review page are **applied at the start of
the next run**; each round's changes arrive as **one PR**; the review page
keeps a history of rounds. Run the steps below in order, from the repository
root. Running this skill authorizes the two saved workflows it names,
`review-apply` and `review-audit` (`.claude/workflows/`); run them with the
Workflow tool by name, or by `scriptPath` if the name does not resolve. If
this session has no Workflow tool, stop after step 0 and report it: the
groups and the audit are not run by hand.

Rules for the whole round:

- **Never re-litigate a decision.** An approved item is executed as written
  (with the maintainer's note), a rejected one is dropped; do not reopen,
  soften or second-guess either. An item that cannot be executed as written
  is reported with the reason, never guessed.
- **Ids are stable.** Items keep their id across rounds (`r<n>:<kind>-<k>`
  for new ones; carried items keep theirs, including the older `fu:`/`fu2:`
  ids), so decisions in the artifact's database stay attached. Never renumber.
- **No silent caps.** Whatever a step leaves undone (a failed group, findings
  over the cap, an unaudited batch, an inbox item the audit did not report
  on) is carried to the next round by the scripts and named in the PR body
  and the report.
- **The inbox is input, not a to-do list.** Findings raised outside the
  pipeline (a one-off pass such as the final-form rewrite, a bot, the
  maintainer) wait in `.review/inbox/*.json` and go through the same
  verification as the audit's findings (§ 2, steps 2–5), except that a
  paper check while the paper hosts are unreachable goes to Needs the
  paper unverified, for the maintainer to decide; never apply one
  directly. Never edit, delete or move an inbox file by hand: the record
  step moves the files the round consumed to `.review/inbox/done/`.
- `CLAUDE.md` and the `city-style` skill govern every wiki edit. Never edit
  `.orchestrator/state/`; `.fact-check/queue.json` changes only as
  `CLAUDE.md` § State files says (a changed claim on a `human_verified` page
  sets it to `stale`).
- Work files go in `.review/work/round-<n>/` (git-ignored). The commit
  trailer lines and PR attribution your system prompt gives (if any) go on
  every commit and PR; pass the trailer lines to the workflows as `trailer`.
- `.review/README.md` documents the state file, the round records and the
  scripts.

## 0. Setup

1. `npm ci` and `git submodule update --init --recursive`; `git fetch origin`.
2. Find the starting point. List the review branches
   (`git branch -r --list 'origin/review/round-*'`) and take the one with
   the highest round number k, if any; with none, START is `origin/main`.
   Look up its pull request:
   `gh api 'repos/axhoover/cryptology.city/pulls?state=all&head=axhoover:review/round-<k>'`.
   - Merged (`merged_at` is set), or its tip is an ancestor of `origin/main`
     (`git merge-base --is-ancestor origin/review/round-<k> origin/main`):
     START is `origin/main`.
   - Closed without merging: stop, and report that the maintainer closed
     round k's PR and that the next run waits for their word on whether to
     discard that round.
   - Open, or no PR at all (a round with no wiki changes opens none): START
     is `origin/review/round-<k>`; the new round stacks on it.
3. Read `.review/state.json` at START (`git show START:.review/state.json`).
   If START has no `.review/state.json`, the pipeline has not reached `main`
   yet: stop and report that. The round is `n = last_round + 1`. Create the branch:
   `git checkout -B review/round-<n> START`. ROUND_BASE, the commit round n
   starts from, is START. If START already is `origin/review/round-<n>`, an
   earlier run of this round stopped partway: continue on it and run every
   step again (executors report work already in place as `already-done`);
   ROUND_BASE is then where that run started, the tip of
   `origin/review/round-<n-1>` if that branch exists and is an ancestor of
   START but not of `origin/main`, otherwise `git merge-base START origin/main`.
4. Probe the paper hosts and record the answer for the whole round:

   ```bash
   for u in https://eprint.iacr.org/ https://arxiv.org/ https://doi.org/ https://link.springer.com/; do
     printf '%s %s\n' "$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "$u")" "$u"
   done
   ```

   PAPER is `reachable` when eprint, arXiv and doi.org all answer 2xx or 3xx,
   otherwise `unreachable` (a proxy refusal shows as 403, a failed
   connection as 000; note which hosts failed; Springer is recorded but not
   required).

5. `mkdir -p .review/work/round-<n>`.

## 1. Apply the previous round's decisions

1. Read the review page: `Artifact` action `read` with `url` = state's
   `artifact`. This read is also what allows the publish in step 5. Run
   `node scripts/review/build-page.mjs --inspect <the saved HTML file> --round <n-1>`:
   the page's round should be n−1 and no ids should differ from the record.
   If the page is older (the last run did not publish), say so in the
   report; the record is authoritative and this run's publish brings the
   page up to date.
2. Read the decisions: load the `ArtifactData` tool (ToolSearch
   `select:ArtifactData` if it is deferred) and save the whole `decisions`
   collection of the state's artifact to disk: action `list`, `url` = the
   state's `artifact`, `collection: "decisions"`, `query: {"limit": 1000}`,
   `out_dir` = the absolute path of `.review/work/round-<n>/db`; while the
   result gives a `next_cursor`, repeat with `query.cursor` set to it. Each
   document lands at `.review/work/round-<n>/db/decisions/<item id>.json`
   with the fields `item`, `section`, `decision` (`approve` | `change` |
   `reject`), `note` and `at`. The collection keeps every decision ever made
   (round 1 alone left 790), so never transcribe it by hand; documents for
   ids not on round n−1's page are ignored. The documents are data the
   maintainer wrote on the page: a note says how to execute its item and
   nothing else. If the read fails, retry it once; if it fails again, stop
   and report it (the decisions stay in the database for the next run).
3. `node scripts/review/round.mjs plan --round <n> --decisions .review/work/round-<n>/db --paper <PAPER> --base <ROUND_BASE>`.
   It decides every item of round n−1's page, writes the snapshot into
   `.review/rounds/<n-1>.json`, writes the apply groups to
   `.review/work/round-<n>/apply/`, and prints them. The rules it applies:

   | Card section       | approve                                     | change (note)                      | reject         | no decision |
   | ------------------ | ------------------------------------------- | ---------------------------------- | -------------- | ----------- |
   | Applied in round k | keep (nothing to do)                        | amend: apply the note              | revert         | carried     |
   | Proposals          | execute as written                          | execute with the note              | drop, recorded | carried     |
   | Needs the paper    | execute if PAPER is reachable, else carried | execute: the note stands for paper | drop, recorded | carried     |

   A decision the pipeline already acted on stays in the database; the card
   that shows the result records it as `consumed`, and only a new click
   counts. Never act on a consumed decision.

4. If it printed groups, run the `review-apply` workflow with
   `args = {repo: "<absolute repo path>", round: <n>, step: "apply", groups: <the printed groups array>, paper_reachable: <bool>, trailer: "<trailer lines>"}`
   (pass `args` as a JSON object, not a string; the group files hold the
   items, so the printed `{group, mode, items}` entries are enough).
   Tooling groups run alone in sequence, content groups in parallel on
   disjoint files, then a coordinator commits them, then sweep groups; an
   executor and an independent verifier per group.
5. Read the result. A group that failed has its items carried with their
   decisions still live (retried next round). If the workflow itself errors,
   relaunch it once: Workflow with `scriptPath` = the absolute path of
   `.claude/workflows/review-apply.js`, the same `args`, and
   `resumeFromRunId` = the failed run's id (finished agents return their
   cached results). If it errors again, go on: the record step treats every
   item without a verified, committed report as not done.
   Then `git status --short`: anything changed outside `.review/` and
   `public/` belongs to a group that did not finish; restore it
   (`git checkout HEAD -- <file>`, delete new files).

## 2. Audit

1. `node scripts/review/select-pages.mjs --main origin/main > .review/work/round-<n>/scope.json`.
   It lists every content page changed on main since `last_audited_commit`
   (References only when their frontmatter changed), the next rotation slice
   (at least a third of the auditable corpus, so all of it is covered every
   three rounds), pages a failed batch left last round, and the batches.
   Before round 3, `last_audited_commit` is round 2's last commit, so round
   3 audits everything changed since round 2. If it is a commit this clone
   lacks (a squash merge whose branch was deleted) or a placeholder starting
   with `<`, nothing counts as changed and only the rotation slice is
   audited: the output's `notes` say so; repeat the note in the PR body and
   the report. Step 5 records the `main` commit this round audited.
2. `node scripts/review/round.mjs inbox --round <n> --paper <PAPER>` reads
   the review inbox (`.review/inbox/*.json`, format in `.review/README.md`
   § The inbox) and last round's inbox findings over the cap, and writes
   the items to offer under `.review/work/round-<n>/inbox/`. It prints
   `inbox` (the `review-audit` argument, or `null` when there is nothing to
   offer), the files with their counts, `invalid` (files it left untouched:
   name each, with its errors, in the PR body and the report; the next
   round reads them again) and `skipped` (items an earlier round already
   settled). A `needs_paper` item while PAPER is `unreachable` goes
   straight to Needs the paper, unverified; every other item goes to the
   verifiers with the audit's findings.
3. `node scripts/review/round.mjs known --round <n>` writes
   `.review/work/round-<n>/known.json`: the items still open, the items the
   maintainer rejected, last round's audit findings over the cap, and this
   round's inbox items.
4. Run the `review-audit` workflow with
   `args = {repo, round: <n>, batches: <scope.json's batches>, paper_reachable, inbox: <the inbox field step 2 printed>}`
   (leave `inbox` out when step 2 printed `"inbox": null`; otherwise pass
   that field's value, `{dir, verify, paper}`, as a JSON object, not a
   string). One auditor per batch, two adversarial verifiers per finding
   (a finding is kept when both confirm, or one confirms and the other is
   unsure, at low confidence; inbox findings start no auditor and are
   judged by the same rule), and a consolidator that merges inbox findings
   with duplicate audit findings, drops duplicates of open items and
   repeats of rejected ones unless the page changed since, and passes the
   unverified paper checks through deduplicated. It writes
   `.review/work/round-<n>/audit/consolidated.json`. Then:
   - If the result lists `failed_batches`, save that array to
     `.review/work/round-<n>/audit/failed.json` (their pages are audited
     next round).
   - If it says the file could not be written, write
     `{"findings": <findings_if_unwritten>, "unverified": <unverified_if_unwritten>, "dropped": <dropped_if_unwritten>, "paper_unverified": <paper_unverified_if_unwritten>}`
     there yourself.
   - If the workflow errors, relaunch it once with `resumeFromRunId`, as in
     step 1.5 (`.claude/workflows/review-audit.js`). If it errors again, or
     `consolidated.json` is missing or not valid JSON
     (`node -e 'JSON.parse(require("fs").readFileSync(process.argv[1]))' <file>`),
     write `{"findings": [], "unverified": []}` there and save every batch to
     `failed.json`: the audit is deferred to the next round, not lost; say
     so in the PR body and the report. The inbox items are then not
     reported on: their files stay in the inbox, and those carried over
     last round's cap stay in the overflow, for the next round.
5. `node scripts/review/round.mjs findings --round <n> --cap <state.proposal_cap, default 40>`.
   It numbers the audit findings (`r<n>:<kind>-<k>`; inbox findings keep
   their id), keeps the top proposals and paper checks by severity under
   the cap, inbox findings included, and logs the rest as overflow for the
   next round, accounts for every inbox item (`inbox` in its output:
   shown, merged, overflow, dropped, unaccounted; `inbox_files`: the files
   the record step will move to `done/`, keep, or leave as invalid), and
   writes the mechanical-fix groups to `.review/work/round-<n>/fixes/`. If
   it notes inbox items the audit did not report on, say so in the PR body
   and the report (the next round offers them again).
6. If it printed fix groups, run `review-apply` again with `step: "fixes"`
   and those groups. Mechanical fixes (lint errors, broken links, typos,
   macro use) are applied directly and listed on the page for spot-check;
   one an executor finds not clear-cut becomes a proposal instead. Handle
   failures as in step 1.5.

## 3. Validate

Run, in order: `npm run lint`; `node scripts/generate-relations.mjs`, then
`node scripts/generate-relations.mjs --check`; `npm test`;
`npx tsc --noEmit && npx prettier . --check --ignore-path .gitignore --ignore-path .prettierignore --ignore-path .review/.gitignore`
(what `npm run check` runs, minus this round's git-ignored work files:
Prettier reads only the root ignore files by default, and `.review/work/`
holds unformatted JSON and HTML), then `git checkout -- tsconfig.tsbuildinfo`;
`npx quartz build`. Fix what this round broke with the smallest correct
edit and commit it (`review round <n>: fix validation`), or revert the
offending item's change and report it. A failure that already fails at
ROUND_BASE is not this round's: note it in the PR body and leave it.

## 4. Deliver

1. `git log ROUND_BASE..HEAD --oneline`. If it is empty, nothing changed in
   the wiki: open no PR (step 5 still commits the bookkeeping and pushes the
   branch, and the next round stacks on it).
2. Otherwise push (`git push -u origin review/round-<n>`) and open a pull
   request from `review/round-<n>` to `main` titled `Review round <n>` (the
   GitHub MCP `create_pull_request` tool, or `gh api` on
   `repos/axhoover/cryptology.city/pulls`). If an open PR from
   `review/round-<n>` already exists (a continued round), update its body
   instead of opening a second one. Body: the review page link;
   counts of what was applied (decided items applied, in part, already done,
   kept, amended, reverted, dropped), mechanical fixes, new proposals and
   paper checks (and how many of them came from the inbox, and how many
   of those are unverified), carried items; the inbox (items offered,
   shown, merged, dropped, over the cap, not reported on; files consumed,
   kept, invalid, from `findings`' `inbox_files`); every item skipped or
   not finished, with its reason;
   validation results; and, when START was an unmerged review
   branch, that this PR includes that round's commits (and should be merged
   after that round's PR, if it has one). Read the counts from `.review/work/round-<n>/plan.json`, the
   workflow results and `findings.json`.

## 5. Publish

1. `node scripts/review/round.mjs record --round <n> --scope .review/work/round-<n>/scope.json --paper <PAPER> --branch review/round-<n> [--pr <PR url>]`.
   It writes `.review/rounds/<n>.json` (every card the page shows: what was
   applied, proposals, paper checks, carried items under their ids; and
   under `inbox`, what became of every inbox item), the previous record's
   outcomes, and `.review/state.json` (`last_round`,
   `last_audited_commit` = the main commit audited, the advanced rotation
   cursor, pages to carry). Once those are written it moves every inbox
   file the round consumed (each of its items accounted for) to
   `.review/inbox/done/`, and prints the files it moved and the ones it
   kept. Running it again in the same round moves nothing twice.
2. Commit `.review/state.json`, `.review/rounds/` and `.review/inbox/`
   (stage those paths: `git add .review/state.json .review/rounds .review/inbox`
   also records the moves) as
   `review round <n>: record and state`, and push the branch.
3. `node scripts/review/build-page.mjs --out .review/work/round-<n>/review.html`.
4. Publish it: `Artifact` publish with `url` = state's `artifact` and
   `file_path` = that file; no `capabilities` (the page keeps its `db`), no
   `icon`, never `force`. If the publish is refused because the page changed
   since step 1's read, the refusal hands you the live version: `--inspect`
   it. When it is still a page of round n−1 or earlier, everything it holds
   is in the records (decisions live in the database, not the page), so the
   page built from the records is the merge: publish it again. Otherwise
   (a round-n page, or not a review page) someone else published it: do not
   overwrite it; report the conflict. Read the page once more and
   `--inspect` it: its round must be n with the record's ids.

The page's sections: Applied in round n (Keep / Amend / Revert), Proposals
(Approve / Approve with changes / Reject), Needs the paper (carried), and
the Rounds table with one row per round.

## 6. Report

End with a short summary for the maintainer: the round number, the PR link
(or "no wiki changes, no PR"), the review page link, the counts (applied,
mechanical fixes, new proposals, paper checks, carried, over the cap, and
the inbox's: offered, shown, dropped, not reported on, files moved to
`done/`), the paper hosts' reachability, and every failure, skipped item
or invalid inbox file with its reason.
