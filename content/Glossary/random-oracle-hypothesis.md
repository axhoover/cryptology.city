---
type: glossary
status: stub
aliases:
  - ROH
  - Random Oracle Hypothesis
title: Random Oracle Hypothesis
id: random-oracle-hypothesis
unlisted: true
---

# Random Oracle Hypothesis

The (refuted) conjecture, attributed to Bennett and Gill, that complexity-class relationships holding for almost all relativized worlds also hold unrelativized.

## Refutation

For almost all oracles $A$, $\classIP^A \neq \classPSPACE^A$; in fact $\classcoNP^A \not\subseteq \classIP^A$ — [[CCG+94 - The random oracle hypothesis is false|CCG+94]]. Since [[interactive-proof-systems|IP]] $=$ [[polynomial-space|PSPACE]] — [[Sha90 - IP = PSPACE|Sha90]] — the Random Oracle Hypothesis is false. The results extend to multi-prover proof systems, while the variant class $\mathbf{IPP}$ satisfies $\mathbf{IPP}^A = \classPSPACE^A$ for every oracle $A$ — [[CCG+94 - The random oracle hypothesis is false|CCG+94]].
