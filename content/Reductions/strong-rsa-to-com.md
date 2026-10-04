---
type: reduction
status: draft
title: "Strong RSA ⇒ COM"
aliases: []
id: red-strong-rsa-to-com
kind: implication
hypotheses: [strong-rsa]
conclusion: com
class: fully-black-box
model: standard
source:
  - "[[FO97 - Statistical Zero Knowledge Protocols to Prove Modular Polynomial Relations|FO97]]"
security-loss: ""
rationale:
  class: "The commitment uses the modulus and bases only through group operations, and the binding reduction runs the committer once as an oracle and turns two openings into a nontrivial root of the planted strong-RSA challenge."
---

# Strong RSA ⇒ COM

## Statement

[[rsa-assumption#strong-rsa|Strong RSA]] implies a statistically hiding, computationally binding [[commitment-scheme|commitment scheme]] to integers. For an RSA modulus $n$ and public bases $g \in \langle h \rangle \subseteq \ZZ_n^*$ whose order is hidden from the committer, a commitment to $x \in \ZZ$ is $c = g^x h^r \bmod n$ with $r$ uniform in a range much larger than $\mathrm{ord}(h)$. Hiding is statistical, and two openings of $c$ to distinct integers yield a strong-RSA solution — [[FO97 - Statistical Zero Knowledge Protocols to Prove Modular Polynomial Relations|FO97]]. [[DF02 - A Statistically-Hiding Integer Commitment Scheme Based on Groups with Hidden Order|DF02]] generalize the scheme to any abelian group whose order is hidden from the committer, with binding under the strong root assumption, and fill the gaps in FO97's soundness proofs.

## Sketch

Two openings $(x_1, r_1) \ne (x_2, r_2)$ of one commitment give $g^{x_1 - x_2} = h^{r_2 - r_1}$. The reduction plants the challenge as $h$ and sets $g = h^{\alpha}$ for a random $\alpha$ much larger than the group order; the committer's view fixes $\alpha$ only modulo $\mathrm{ord}(h)$, so $M = \alpha(x_1 - x_2) - (r_2 - r_1)$ is a nonzero multiple of $\mathrm{ord}(h)$ except with negligible probability. For any prime $e \nmid M$, $h^{e^{-1} \bmod M}$ is an $e$-th root of $h$.
