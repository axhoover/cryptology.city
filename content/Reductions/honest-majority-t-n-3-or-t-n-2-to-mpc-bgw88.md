---
type: reduction
status: draft
title: "Honest majority ($t < n/3$ or $t < n/2$) ⇒ MPC"
aliases: []
id: red-honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88
kind: implication
hypotheses: [honest-majority-t-lt-n-over-3]
conclusion: mpc
class: unstated
model: standard
source:
  - "[[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]"
security-loss: ""
---

# Honest majority ($t < n/3$ or $t < n/2$) ⇒ MPC

[[secure-multi-party-computation#honest-majority-t-n3-or-t-n2|Honest majority ($t < n/3$ or $t < n/2$)]] implies [[secure-multi-party-computation|MPC]].

## Statement

Migrated verbatim from [[secure-multi-party-computation]]:

> When fewer than a threshold fraction of parties are corrupt, information-theoretic (unconditional) security is achievable. For $t < n/3$, perfect security against malicious adversaries is achievable; for $t < n/2$, statistical security is achievable with broadcast — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]].

Migrated verbatim from [[secure-multi-party-computation]] § Other results:

> - MPC with perfect security for any function when fewer than $n/3$ parties are corrupt (no cryptographic assumptions) — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The hypothesis is a corruption-threshold setting ('t < n/3'), not a cryptographic object; 'honest-majority-t-lt-n-over-3' is a flagged non-slug identifier.
- This paragraph packs TWO distinct unconditional results (t<n/3 perfect, t<n/2 statistical + broadcast); split into two records — this is the first.
- Conclusion is really 'perfectly-secure MPC against malicious adversaries', a security-level qualifier the flat slug loses.
- Duplicate of the claim already made at line 43 (## Honest majority) — the same result appears twice on the page.
- Hypothesis set is empty of cryptographic objects: this is an unconditional result whose only hypothesis is the corruption threshold. A hyperedge model needs a way to express 'no hypotheses, setting = t<n/3'.
