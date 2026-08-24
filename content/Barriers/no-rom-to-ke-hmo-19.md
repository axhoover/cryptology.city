---
type: barrier
status: stub
title: "No reduction from ROM to KE"
aliases: []
id: bar-rom-to-ke-hmo-19
hypotheses: [rom]
conclusion: ke
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[HMO+19 - On the Communication Complexity of Key-Agreement Protocols|HMO+19]]"
  - "[[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]]"
  - "[[IR89 - Limits on the provable consequences of one-way permutations|IR89]]"
---

# No reduction from ROM to KE

A reduction of class `unstated` from [[random-oracle-model|ROM]] to [[key-exchange|KE]] would imply a contradiction.

## Statement

Migrated verbatim from [[black-box-separations]] § Other Notable Separations:

> - **Communication complexity of KA in the ROM** — [[HMO+19 - On the Communication Complexity of Key-Agreement Protocols|HMO+19]] studies the communication lower bounds for KA in the random oracle model, complementing the query complexity picture established by IR89 and BM09.

Migrated verbatim from [[key-exchange]] § Other results:

> - Any KE protocol from a random oracle requires $\Omega(n)$ queries; Merkle puzzles achieve $O(n^2)$ security and are optimal — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]]

Migrated verbatim from [[black-box-separations]]:

> **Barak–Mahmoody strengthening.** [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]] tightened the query complexity of the eavesdropper from $O(\ell^6)$ to the optimal $O(\ell^2)$, matching the quadratic gap achieved by Merkle's Puzzles [[Mer78]]. This shows that Merkle's Puzzles are _query-complexity optimal_: no random-oracle KA protocol can achieve a better-than-quadratic query gap between the honest parties and the eavesdropper. Together, IR89 and BM09 give a complete picture of the complexity of key agreement in the random oracle model.

Migrated verbatim from [[key-exchange]] § Other results:

> - Communication complexity lower bounds for information-theoretic key agreement — [[HMO+19 - On the Communication Complexity of Key-Agreement Protocols|HMO+19]]

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- VAGUE: 'studies the communication lower bounds for KA in the random oracle model' states no result — no bound, no direction, nothing to type. It is a pointer, not a claim.
- KA is unlinked; content/Primitives/key-exchange.md exists.
- SUSPECT MATH: the bullet garbles BM09. The result is that any KE protocol in the ROM in which the honest parties make n queries can be broken by an eavesdropper making O(n^2) queries, matching Merkle puzzles. 'Any KE protocol from a random oracle requires Omega(n) queries' states no meaningful lower bound, and 'Merkle puzzles achieve O(n^2) security' confuses honest cost with adversarial cost. Report only; do not fix.
- The quantity n is never defined on this line.
- Contains a dead wikilink `[[Mer78]]` — no reference page exists (already tracked in TODO_SUMMARY.md:20 and flagged bot_flagged in .fact-check/queue.json for this file). The same dead link appears in content/References/BM09 - ... .md:19.
- 'tightened the query complexity of the eavesdropper from O(l^6) to the optimal O(l^2)' — the l^6 figure is IR89's attack complexity, but the reference page for BM09 (line 19) describes it as improving an 'Omega(n^6)-query lower bound', which is a different (and incorrect) characterisation. The wiki states both versions and they disagree.
- 'Together, IR89 and BM09 give a complete picture of the complexity of key agreement in the random oracle model' is a closing recap of the sort CLAUDE.md forbids, and it is also false given the same page cites HMO+19 (line 83) as an open strand on communication complexity.
- This is a quantitative attack/optimality result, not a reduction-class barrier. In the target model Q is 'contradiction' only after fixing a security threshold (better-than-quadratic query gap), which the text does not state as a formal hypothesis.
- States only that the paper 'studies' communication lower bounds — no claim, no quantifier, no bound. Nothing to extract.
- Does not record the actual result: Omega(l) bits of communication are needed for secrecy against ~l^2-query eavesdroppers, and only under the two structural restrictions listed in the abstract (content/References/HMO+19 ... .md:22). Those restrictions are exactly what makes this CONDITIONAL rather than unconditional.
- Filed under '## Other Notable Separations' but it is a communication lower bound, not a separation.
- SUSPECTED MATH ERROR: calls it 'information-theoretic key agreement'. HMO+19 is about key agreement in the RANDOM ORACLE MODEL with query-bounded parties, which is not the information-theoretic KA setting (Maurer/Wyner-style). The model is misnamed.
- No bound and no quantifier stated; same 'studies lower bounds' non-claim as the glossary copy.
- SUSPECTED MATH ERROR: 'Any KE protocol from a random oracle requires Omega(n) queries' is not a BM09 result and is not meaningful as written (n is undefined here; BM09's n is the honest parties' query budget, so the honest parties trivially make n queries). BM09's theorem is an UPPER bound on the ATTACKER: any n-query protocol is broken by an O(n^2)-query eavesdropper.
- SUSPECTED MATH ERROR: 'Merkle puzzles achieve O(n^2) security' inverts the quantity — Merkle's Puzzles give a quadratic GAP (honest n, attacker Omega(n^2)); 'O(n^2) security' with a big-O is an upper bound on security, i.e. the opposite of what is meant.
- Two claims (a lower bound and an optimality claim) crammed into one bullet with a semicolon.
