---
type: glossary
status: stub
aliases:
  - Falsifiable assumption
  - Falsifiable assumptions
title: Falsifiable assumptions
id: falsifiable-assumption
variants:
  bounded-round-assumption: "#bounded-round-assumptions"
  non-interactive-assumption: "#non-interactive-assumptions"
---

# Falsifiable assumptions

An assumption is falsifiable if a violation of it can be witnessed by a polynomial-time game between a challenger and an adversary, so that a counterexample can be efficiently recognized; KEA-style knowledge assumptions are not.

TODO: syntax and security definition.

## Bounded-round assumptions

An $r(\cdot)$-round intractability assumption is a pair $(C, t)$ of a challenger $C$ and a threshold $t(\secpar)$. The challenger may be computationally unbounded, and it interacts with the adversary in at most $r(\secpar)$ rounds, for a polynomial $r$ fixed in advance. The assumption holds if every efficient adversary makes $C$ output $1$ with probability at most $t(\secpar) + \negl(\secpar)$. A bounded-round assumption is an $r$-round assumption for some polynomial $r$ — [[Pas11 - Limits of Provable Security from Standard Assumptions|Pas11]], who calls them polynomial-round intractability assumptions. Search and decision assumptions such as [[discrete-logarithm|DLOG]] and [[decisional-diffie-hellman|DDH]] are 2-round, with thresholds $0$ and $1/2$ — standard. [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] is not bounded-round: its adversary may make any polynomial number of discrete-logarithm queries, so no polynomial bounds the number of rounds in advance — standard. The challenger need not be efficient, so bounded-round assumptions are not a special case of falsifiable ones, whose challenger is efficient.

## Non-interactive assumptions

A **non-interactive assumption** is a pair $(\calI, \calV)$ of efficient algorithms. The instance generator $\calI(1^\secpar)$ outputs an instance $X$ together with private verification information $\omega$, and the verifier $\calV(X, \omega, y)$ accepts or rejects an answer $y$. The assumption holds if for all efficient $\calA$, given the instance and no oracle, $\Pr[\calV(X, \omega, \calA(1^\secpar, X)) = 1]$ is negligible — standard. [[discrete-logarithm|DLOG]], [[computational-diffie-hellman|CDH]] and [[q-strong-diffie-hellman|q-SDH]] are non-interactive; [[lrsw-assumption|LRSW]] and [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] are not, since their adversaries query an oracle — standard. The challenger of a non-interactive assumption runs $\calI$ and $\calV$, so every non-interactive assumption is falsifiable — standard.

<!-- BEGIN GENERATED participates-in bd1f40115fb5 -->

## Participates in

**Barriers**

- [[no-bounded-round-assumption-to-concurrent-schnorr-identification-pas11|No fully-black-box reduction from bounded-round assumptions to Schnorr identification under concurrent attack]] (via [[falsifiable-assumptions#bounded-round-assumptions|Bounded-round assumptions]])
- [[no-bounded-round-assumption-to-omdl-pas11|No fully-black-box reduction from bounded-round assumptions to OMDL]] (via [[falsifiable-assumptions#bounded-round-assumptions|Bounded-round assumptions]])
- [[no-falsifiable-assumption-to-snark-gro16|No fully-black-box reduction from Falsifiable assumption to SNARK]]
- [[no-tight-non-interactive-assumption-to-boneh-lynn-shacham-signature-cor02|No tight simple reduction from non-interactive assumptions to BLS signatures]] (via [[falsifiable-assumptions#non-interactive-assumptions|Non-interactive assumptions]]) — circumvented by [[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]]
- [[no-non-interactive-assumption-to-short-structure-preserving-signature-ago11|No algebraic reduction from non-interactive assumptions to optimally short structure-preserving signatures]] (via [[falsifiable-assumptions#non-interactive-assumptions|Non-interactive assumptions]])
- [[no-tight-non-interactive-assumption-to-waters-signature-hjk12|No tight simple reduction from non-interactive assumptions to Waters signatures]] (via [[falsifiable-assumptions#non-interactive-assumptions|Non-interactive assumptions]])

<!-- END GENERATED participates-in -->
