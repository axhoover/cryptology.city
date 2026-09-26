---
type: complexity-class
status: draft
aliases:
  - SZK
  - Statistical zero-knowledge
title: Statistical zero-knowledge
id: szk
---

# Statistical zero-knowledge

The class of decision problems for which a "yes" answer can be verified by a *statistical zero-knowledge proof protocol*. In such an interactive proof (see [[interactive-proof-systems|IP]]), we have a probabilistic polynomial-time verifier, and a prover who has unbounded computational resources. By exchanging messages with the prover, the verifier must become convinced (with high probability) that the answer is "yes," *without learning anything else about the problem* (statistically).

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:S#szk).

## Known relationships

- Graph non-isomorphism is in SZK — the verifier can check statistical distance between two distributions via the prover
- SZK is closed under complement — Okamoto (STOC 1996); simpler proof in [[SV03 - A Complete Problem for Statistical Zero Knowledge|SV03]]
- SZK ⊆ [[arthur-merlin|AM]] ∩ [[co-arthur-merlin|coAM]] — [[AH91 - Statistical zero-knowledge languages can be recognized in two rounds|AH91]] (AM), [[For87 - The Complexity of Perfect Zero-Knowledge|For87]] (coAM); in particular SZK does not contain NP-complete problems unless PH collapses — Boppana, Håstad, and Zachos (IPL 1987)
- Average-case-hard SZK implies [[hash-function|OWFs]]: if some language in SZK is hard on average over an efficiently samplable distribution, then one-way functions exist — [[Ost91 - One-way functions, hard on average problems, and statistical zero-knowledge proofs|Ost91]]
  - From worst-case hardness alone (SZK ⊄ BPP), auxiliary-input one-way functions exist — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]]
- The complete problem for SZK is the **Statistical Difference (SD)** problem: given two circuits sampling distributions $D_0$ and $D_1$, decide whether $\|D_0 - D_1\|_{\mathrm{TV}} \geq 2/3$ or $\leq 1/3$

<!-- BEGIN GENERATED participates-in 181673040be5 -->

## Participates in

**Builds on Statistical zero-knowledge**

- [[szk-to-am|SZK ⊆ AM]]
- [[szk-to-coam|SZK ⊆ coAM]]
- [[szk-to-czk|SZK ⊆ CZK]]
- [[szk-to-ip|SZK ⊆ IP]]
- [[szk-to-qszk|SZK ⊆ QSZK]]

**Produces Statistical zero-knowledge**

- [[ip-to-szk-bgg-90|IP ⊆ SZK]]

**Barriers**

- [[no-he-to-szk-bl13|No reduction from HE to SZK]]

<!-- END GENERATED participates-in -->
