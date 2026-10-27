---
type: reduction
status: draft
title: HVCZK = CZK
aliases: []
id: red-honest-verifier-czk-to-czk-vad06
kind: equivalence
hypotheses: [honest-verifier-czk]
conclusion: czk
class: free
model: standard
source:
  - "[[Vad06 - An Unconditional Study of Computational Zero Knowledge|Vad06]]"
security-loss: ""
---

# HVCZK = CZK

## Statement

Every language with an interactive proof that is [[computational-zero-knowledge#honest-verifier-czk|computational zero-knowledge against the honest verifier]] has a [[computational-zero-knowledge|computational zero-knowledge]] proof against every efficient verifier, so $\mathbf{HVCZK} = \classCZK$, unconditionally — [[Vad06 - An Unconditional Study of Computational Zero Knowledge|Vad06]]. The inclusion $\classCZK \subseteq \mathbf{HVCZK}$ holds by definition.

## Notes

- The equality concerns the class and need not preserve round complexity — [[Vad06 - An Unconditional Study of Computational Zero Knowledge|Vad06]]. The companion equality of black-box and general simulators in Vad06 is therefore consistent with the round-restricted black-box bounds, such as [[bb-zk-three-message-to-bpp-gk96|Three-message black-box ZK ⊆ BPP]] — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]].
- Vad06 also show that public-coin CZK equals CZK, that CZK is closed under union, and that every problem in CZK decomposes into a problem in SZK together with a set of instances from which a one-way function can be built — [[Vad06 - An Unconditional Study of Computational Zero Knowledge|Vad06]].
- The statistical analogue is [[honest-verifier-szk-to-szk-gsv98|HVSZK = SZK]] — [[GSV98 - Honest-Verifier Statistical Zero-Knowledge Equals General Statistical Zero-Knowledge|GSV98]].
