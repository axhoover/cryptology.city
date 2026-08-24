---
type: barrier
status: draft
title: "No reduction from Fiat-Shamir + GKR to SNARK"
aliases: []
id: bar-fiat-shamir-and-gkr-to-snark-krs25
hypotheses: [fiat-shamir, gkr-protocol]
conclusion: snark
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]]"
  - "[[GKR15 - Delegating Computation Interactive Proofs for Muggles|GKR15]]"
---

# No reduction from Fiat-Shamir + GKR to SNARK

A reduction of class `unstated` from [[fiat-shamir-heuristic|Fiat-Shamir]] together with [[gkr-protocol|GKR]] to [[succinct-argument|SNARK]] would imply a contradiction.

## Statement

Migrated verbatim from [[random-oracle-model]] § Known Results:

> - **Fiat-Shamir fails for the GKR protocol** — Khovratovich, Rothblum, and Soukhanov showed that the [[fiat-shamir-heuristic|Fiat-Shamir]] transform fails for the GKR succinct interactive argument — a standard, widely-studied protocol, not a contrived one [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]]. They exhibit families of circuits for which the non-interactive GKR argument proves false statements.

Migrated verbatim from [[fiat-shamir-heuristic]]:

> ### Natural Protocols (KRS25)
>
> Prior counterexamples to Fiat-Shamir were contrived — protocols specifically engineered to fail. Khovratovich, Rothblum, and Soukhanov gave the first counterexample for a _standard, widely-studied_ protocol [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]]. They showed that the Fiat-Shamir transform applied to the GKR succinct interactive argument (from [[GKR15 - Delegating Computation Interactive Proofs for Muggles|GKR15]]) allows an efficient prover to prove _false_ statements for explicit families of circuits. This raises serious questions about the security of deployed non-interactive succinct arguments based on Fiat-Shamir.

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- DUPLICATED at content/Glossary/fiat-shamir-heuristic.md:38 with a longer, differently-worded version. Neither page links the other.
- A concrete attack/counterexample rather than a reduction barrier; Q = contradiction only in the sense that soundness fails.
- The fiat-shamir-heuristic.md copy adds an editorial closing sentence ('This raises serious questions about the security of deployed non-interactive succinct arguments') that the ROM copy omits — an unsourced editorial judgment.
- Duplicate of content/Glossary/random-oracle-model.md:23.
- Closes with an editorial sentence ('This raises serious questions about the security of deployed non-interactive succinct arguments based on Fiat-Shamir') that is an unsourced judgment, not a result.
