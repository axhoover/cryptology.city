---
type: complexity-class
status: draft
aliases:
  - PCP
  - Probabilistically checkable proofs
title: Probabilistically checkable proofs
id: pcp
---

# Probabilistically checkable proofs

$\mathbf{PCP}[r(n), q(n)]$ is the class of languages $L$ with a probabilistic polynomial-time oracle verifier $V$ that, on input $x \in \bits^n$ and oracle access to a proof $\pi$, uses $O(r(n))$ random bits and makes $O(q(n))$ queries to $\pi$, such that if $x \in L$ then $\Pr[V^\pi(x) = 1] = 1$ for some $\pi$, and if $x \notin L$ then $\Pr[V^\pi(x) = 1] \le 1/2$ for every $\pi$ — [[AS92 - Probabilistic Checking of Proofs A New Characterization of NP|AS92]]. PCP denotes $\mathbf{PCP}[\log n, 1]$, logarithmic randomness and a constant number of queries.

## Notable problems

- Every language in $\classNP$, by the PCP theorem: [[pcp-to-np-alm-92|PCP = NP]] — [[ALM+92 - Proof Verification and Hardness of Approximation Problems|ALM+92]].

## Known relationships

- $\mathbf{PCP}[\log n, 1] = \classNP$ — [[ALM+92 - Proof Verification and Hardness of Approximation Problems|ALM+92]], building on [[AS92 - Probabilistic Checking of Proofs A New Characterization of NP|AS92]].
- With polynomial randomness and polynomially many queries the verifier is equivalent to a [[multi-prover-interactive-proofs|multi-prover interactive proof]] — [[FRS88 - On the Power of Multi-Prover Interactive Protocols|FRS88]] — so $\mathbf{PCP}[\poly(n), \poly(n)] = \mathbf{NEXP}$ — [[BFL90 - Non-Deterministic Exponential Time Has Two-Prover Interactive Protocols|BFL90]].
- A PCP is a one-round [[interactive-oracle-proof|interactive oracle proof]] — [[BCS16 - Interactive Oracle Proofs|BCS16]].

<!-- BEGIN GENERATED participates-in 0782e293f6f4 -->

## Participates in

**Builds on Probabilistically checkable proofs**

- [[pcp-to-np-alm-92|PCP = NP]]

**Used via Probabilistically checkable proofs**

- [[crhf-to-interactive-succinct-argument-kil92|CRHF ⇒ Succinct arguments for NP (Kilian)]]
- [[rom-to-snark-mic00|ROM ⇒ SNARK (Micali's CS proofs)]]

<!-- END GENERATED participates-in -->
