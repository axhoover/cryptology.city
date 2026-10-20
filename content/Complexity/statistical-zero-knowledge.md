---
type: complexity-class
status: draft
aliases:
  - SZK
  - Statistical zero-knowledge
title: Statistical zero-knowledge
id: szk
variants:
  honest-verifier-szk: "#honest-verifier-szk"
  coszk: "#coszk"
  statistical-difference: "#statistical-difference"
---

# Statistical zero-knowledge

The class of decision problems for which a "yes" answer can be verified by a *statistical zero-knowledge proof protocol*. In such an interactive proof (see [[interactive-proof-systems|IP]]), we have a probabilistic polynomial-time verifier, and a prover who has unbounded computational resources. By exchanging messages with the prover, the verifier must become convinced (with high probability) that the answer is "yes," *without learning anything else about the problem* (statistically).

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:S#szk).

## Known relationships

- Graph non-isomorphism has a perfect zero-knowledge proof, so it lies in SZK — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]
- SZK is closed under complement ([[coszk-to-szk-oka96|SZK = coSZK]]) — [[Oka96 - On Relationships between Statistical Zero-Knowledge Proofs|Oka96]] for honest verifiers, [[GSV98 - Honest-Verifier Statistical Zero-Knowledge Equals General Statistical Zero-Knowledge|GSV98]]; simpler proof in [[SV03 - A Complete Problem for Statistical Zero Knowledge|SV03]]
- SZK ⊆ [[arthur-merlin|AM]] ∩ [[co-arthur-merlin|coAM]] — [[AH91 - Statistical zero-knowledge languages can be recognized in two rounds|AH91]] (AM), [[For87 - The Complexity of Perfect Zero-Knowledge|For87]] (coAM); in particular SZK does not contain NP-complete problems unless PH collapses — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]]
- Average-case-hard SZK implies [[hash-function|OWFs]]: if some language in SZK is hard on average over an efficiently samplable distribution, then one-way functions exist — [[Ost91 - One-way functions, hard on average problems, and statistical zero-knowledge proofs|Ost91]]
  - From worst-case hardness alone (SZK ⊄ BPP), auxiliary-input one-way functions exist — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]]
- [[statistical-difference-to-szk-sv03|Statistical Difference is SZK-complete]] — [[SV03 - A Complete Problem for Statistical Zero Knowledge|SV03]], [[GSV98 - Honest-Verifier Statistical Zero-Knowledge Equals General Statistical Zero-Knowledge|GSV98]]

## Honest-verifier SZK

$\mathbf{HVSZK}$ is the class of problems with an interactive proof that is statistically zero-knowledge against the honest verifier only: the simulator need only reproduce the view of the verifier that follows the protocol — [[GSV98 - Honest-Verifier Statistical Zero-Knowledge Equals General Statistical Zero-Knowledge|GSV98]].

## coSZK

$\mathbf{coSZK}$ is the class of complements of problems in SZK — [[Oka96 - On Relationships between Statistical Zero-Knowledge Proofs|Oka96]].

## Statistical Difference

$\mathrm{SD}^{\alpha,\beta}$ is the promise problem whose instances are pairs of circuits $(C_0, C_1)$ sampling distributions $D_0, D_1$, with yes-instances $\|D_0 - D_1\|_{\mathrm{TV}} \ge \alpha$ and no-instances $\|D_0 - D_1\|_{\mathrm{TV}} \le \beta$. _Statistical Difference_ $\mathrm{SD}$ is $\mathrm{SD}^{2/3,1/3}$. For constants $\alpha^2 > \beta$, polarization reduces $\mathrm{SD}^{\alpha,\beta}$ to it — [[SV03 - A Complete Problem for Statistical Zero Knowledge|SV03]].

<!-- BEGIN GENERATED participates-in 434a7e953be5 -->

## Participates in

**Builds on Statistical zero-knowledge**

- [[coszk-to-szk-oka96|SZK = coSZK]] (via [[statistical-zero-knowledge#coszk|coSZK]])
- [[honest-verifier-szk-to-szk-gsv98|HVSZK = SZK]] (via [[statistical-zero-knowledge#honest-verifier-szk|Honest-verifier SZK]])
- [[statistical-difference-to-szk-sv03|Statistical Difference is SZK-complete]] (via [[statistical-zero-knowledge#statistical-difference|Statistical Difference]])
- [[szk-to-am|SZK ⊆ AM]]
- [[szk-to-coam|SZK ⊆ coAM]]
- [[szk-to-czk|SZK ⊆ CZK]]
- [[szk-to-ip|SZK ⊆ IP]]
- [[szk-to-qszk|SZK ⊆ QSZK]]

**Produces Statistical zero-knowledge**

- [[coszk-to-szk-oka96|SZK = coSZK]]
- [[dlog-to-szk-gk93|DLOG ∈ SZK]]
- [[gapsvp-to-szk-mv03|GapSVP ∈ SZK for γ ≥ √(n/log n)]]
- [[honest-verifier-szk-to-szk-gsv98|HVSZK = SZK]]
- [[qr-to-szk-gmr85|QR ∈ SZK]]
- [[statistical-difference-to-szk-sv03|Statistical Difference is SZK-complete]]

<!-- END GENERATED participates-in -->
