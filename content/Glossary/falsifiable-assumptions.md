---
type: glossary
status: draft
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

An assumption is falsifiable if it is a game between an efficient challenger and an adversary at whose end the challenger decides whether the adversary won, so that an adversary breaking the assumption can be recognized efficiently — [[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]], after [[Nao03 - On Cryptographic Assumptions and Challenges|Nao03]]. Knowledge assumptions such as [[knowledge-of-exponent|KEA]] are not falsifiable — [[Nao03 - On Cryptographic Assumptions and Challenges|Nao03]].

## Definition

[[Nao03 - On Cryptographic Assumptions and Challenges|Nao03]] classifies assumptions by the complexity of falsifying them, should they be false: an assumption is falsifiable when a party able to break it can demonstrate the break by solving efficiently generated challenges whose solutions can be checked efficiently. [[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]] formalize falsifiability as an interactive game, a notion they describe as similar in spirit to Naor's.

A **falsifiable assumption** is a pair $(\calC, c)$ of an interactive challenger $\calC$ that runs in time polynomial in $\secpar$ and a constant $c \in [0, 1)$, the threshold. The challenger interacts with the adversary and outputs a bit, $1$ meaning that the adversary won — [[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{fals}}_{\calC,\calA}(\secpar)$}
\begin{algorithmic}
\State $d \gets$ the output of $\calC$ in $\langle \calA(1^\secpar), \calC(1^\secpar) \rangle$
\Comment{$\calC$ runs in time $\poly(\secpar)$ and outputs $d \in \bits$}
\Return $d$
\end{algorithmic}
\end{algorithm}
```

The assumption $(\calC, c)$ **holds** if for all efficient $\calA$ there is a negligible function $\varepsilon$ such that $\Pr\!\left[\Game^{\mathrm{fals}}_{\calC,\calA}(\secpar) = 1\right] \le c + \varepsilon(\secpar)$ — [[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]].

Search assumptions such as [[hash-function#preimage-resistance-one-wayness|one-wayness]], [[discrete-logarithm|DLOG]] and [[computational-diffie-hellman|CDH]] are falsifiable with threshold $0$: the challenger samples an instance together with any private information it needs to check an answer (the exponents of a CDH instance; for one-wayness and DLOG the instance itself suffices) and checks the adversary's answer — standard. Decision assumptions such as [[decisional-diffie-hellman|DDH]] and [[learning-with-errors|LWE]] with a fixed polynomial number of samples are falsifiable with threshold $1/2$: the challenger samples a hidden bit, sends a real or a random instance accordingly, and checks the adversary's guess — standard.

[[knowledge-of-exponent|KEA]] is not falsifiable: it states that for every adversary there exists an extractor, and no efficient challenger can certify that a given adversary has none — [[Nao03 - On Cryptographic Assumptions and Challenges|Nao03]]. Adaptive soundness of a [[succinct-argument|SNARG]] for an $\classNP$-complete language is not, as stated, a falsifiable assumption: the challenger would have to check that the adversary's statement is false, which is as hard as deciding the language — [[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]].

## Bounded-round assumptions

An $r(\cdot)$-round intractability assumption is a pair $(C, t)$ of a challenger $C$ and a threshold $t(\secpar)$. The challenger may be computationally unbounded, and it interacts with the adversary in at most $r(\secpar)$ rounds, for a polynomial $r$ fixed in advance. The assumption holds if every efficient adversary makes $C$ output $1$ with probability at most $t(\secpar) + \negl(\secpar)$. A bounded-round assumption is an $r$-round assumption for some polynomial $r$ — [[Pas11 - Limits of Provable Security from Standard Assumptions|Pas11]], who calls them polynomial-round intractability assumptions. Search and decision assumptions such as [[discrete-logarithm|DLOG]] and [[decisional-diffie-hellman|DDH]] are 2-round, with thresholds $0$ and $1/2$ — standard. [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] is not bounded-round: its adversary may make any polynomial number of discrete-logarithm queries, so no polynomial bounds the number of rounds in advance — standard. The challenger need not be efficient, so bounded-round assumptions are not a special case of falsifiable ones, whose challenger is efficient — standard.

## Non-interactive assumptions

A **non-interactive assumption** is a pair $(\calI, \calV)$ of efficient algorithms. The instance generator $\calI(1^\secpar)$ outputs an instance $X$ together with private verification information $\omega$, and the verifier $\calV(X, \omega, y)$ accepts or rejects an answer $y$. The assumption holds if for all efficient $\calA$, given the instance and no oracle, $\Pr[\calV(X, \omega, \calA(1^\secpar, X)) = 1]$ is negligible — standard. [[discrete-logarithm|DLOG]], [[computational-diffie-hellman|CDH]] and [[q-strong-diffie-hellman|q-SDH]] are non-interactive; [[lrsw-assumption|LRSW]] and [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] are not, since their adversaries query an oracle — standard. The challenger of a non-interactive assumption runs $\calI$ and $\calV$, so every non-interactive assumption is falsifiable — standard.

# Other results

- Let $L$ be an $\classNP$ language with a sub-exponentially hard subset-membership problem. If a reduction that uses the cheating prover only as an oracle proves the adaptive soundness of a [[succinct-argument|SNARG]] for $L$ from a falsifiable assumption, then the assumption is false; the separation covers designated-verifier SNARGs and SNARGs whose proofs are only sublinear in the statement and witness length ([[no-falsifiable-assumption-to-snark-gro16|No fully-black-box reduction from Falsifiable assumption to SNARK]]). The proof uses that the challenger is efficient: an efficient prover whose outputs are indistinguishable from those of an inefficient cheating prover makes the reduction win the assumption's game with nearly the same probability — [[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]].

<!-- BEGIN GENERATED participates-in 8540edafdc28 -->

## Participates in

**Barriers**

- [[no-bounded-round-assumption-to-concurrent-schnorr-identification-pas11|No fully-black-box reduction from bounded-round assumptions to Schnorr identification under concurrent attack]] (via [[falsifiable-assumptions#bounded-round-assumptions|Bounded-round assumptions]])
- [[no-bounded-round-assumption-to-omdl-pas11|No fully-black-box reduction from bounded-round assumptions to OMDL]] (via [[falsifiable-assumptions#bounded-round-assumptions|Bounded-round assumptions]])
- [[no-falsifiable-assumption-to-snark-gro16|No fully-black-box reduction from Falsifiable assumption to SNARK]]
- [[no-tight-non-interactive-assumption-to-boneh-lynn-shacham-signature-cor02|No tight simple reduction from non-interactive assumptions to BLS signatures]] (via [[falsifiable-assumptions#non-interactive-assumptions|Non-interactive assumptions]]) — circumvented by [[co-cdh-to-ds|co-CDH ⇒ BLS signatures]], [[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]]
- [[no-non-interactive-assumption-to-short-structure-preserving-signature-ago11|No algebraic reduction from non-interactive assumptions to optimally short structure-preserving signatures]] (via [[falsifiable-assumptions#non-interactive-assumptions|Non-interactive assumptions]])
- [[no-tight-non-interactive-assumption-to-waters-signature-hjk12|No tight simple reduction from non-interactive assumptions to Waters signatures]] (via [[falsifiable-assumptions#non-interactive-assumptions|Non-interactive assumptions]]) — circumvented by [[type-1-pairing-and-cdh-to-ds-wat05|Type 1 pairing + CDH ⇒ Waters signatures]]

<!-- END GENERATED participates-in -->
