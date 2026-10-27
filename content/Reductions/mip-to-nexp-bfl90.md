---
type: reduction
status: draft
title: MIP = NEXP
aliases: []
id: red-mip-to-nexp-bfl90
kind: equivalence
hypotheses: [mip]
conclusion: nexp
class: free
model: standard
source:
  - "[[BFL90 - Non-Deterministic Exponential Time Has Two-Prover Interactive Protocols|BFL90]]"
  - "[[FRS88 - On the Power of Multi-Prover Interactive Protocols|FRS88]]"
security-loss: ""
---

# MIP = NEXP

## Statement

The class of languages with [[multi-prover-interactive-proofs|multi-prover interactive proofs]] equals [[nondeterministic-exponential-time|NEXP]]; two provers and polynomially many rounds suffice. $\mathbf{NEXP} \subseteq \mathbf{MIP}$ — [[BFL90 - Non-Deterministic Exponential Time Has Two-Prover Interactive Protocols|BFL90]] — and $\mathbf{MIP} \subseteq \mathbf{NEXP}$, since a multi-prover proof system is equivalent to a probabilistic verifier with oracle access to a fixed proof, which an exponential-time nondeterministic machine can guess — [[FRS88 - On the Power of Multi-Prover Interactive Protocols|FRS88]].

## Sketch

For $\mathbf{NEXP} \subseteq \mathbf{MIP}$, BFL90 reduce to an oracle-3SAT instance, arithmetize it as a low-degree polynomial identity over a large field, and check the identity by a sum-check protocol with one prover. The second prover is queried at a random point to force the first to answer according to a single multilinear function, which a multilinearity test checks — [[BFL90 - Non-Deterministic Exponential Time Has Two-Prover Interactive Protocols|BFL90]].

## Notes

- The single-prover analogue is [[pspace-to-ip-sha90|IP = PSPACE]] — [[Sha90 - IP = PSPACE|Sha90]]; scaling NEXP ⊆ MIP down to $\classNP$ led to the PCP theorem, [[pcp-to-np-alm-92|PCP = NP]] — standard.
- With entangled provers the class grows: $\mathbf{NEEXP} \subseteq \mathbf{MIP}^*$ — [[NW19 - NEEXP is Contained in MIP-star|NW19]] — and $\mathbf{MIP}^* = \mathbf{RE}$ — [[JNVWY20 - MIP-star = RE|JNVWY20]]; see [[no-mip-to-multi-prover-extensions|MIP* versus MIP]].
