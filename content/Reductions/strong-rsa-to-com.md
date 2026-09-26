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
---

# Strong RSA ⇒ COM

[[rsa-assumption#strong-rsa|Strong RSA]] implies [[commitment-scheme|COM]].

## Statement

[[rsa-assumption#strong-rsa|Strong RSA]] implies a statistically hiding, computationally binding [[commitment-scheme|commitment]] to integers: for an RSA modulus $n$ and public bases $g \in \langle h \rangle \subseteq \ZZ_n^*$ whose order is hidden from the committer, a commitment to $x \in \ZZ$ is $c = g^x h^r \bmod n$ with $r$ uniform in a range much larger than $\mathrm{ord}(h)$; hiding is statistical, and two openings of $c$ to distinct integers yield a strong-RSA solution — [[FO97 - Statistical Zero Knowledge Protocols to Prove Modular Polynomial Relations|FO97]].

## Sketch

Two openings $(x_1, r_1) \ne (x_2, r_2)$ of one commitment give $g^{x_1 - x_2} = h^{r_2 - r_1}$. The reduction sets $g = h^{\alpha}$ for a random $\alpha$ far larger than the group order, so this reads $h^{\alpha(x_1 - x_2) - (r_2 - r_1)} = 1$; the exponent is a nonzero multiple $M$ of $\mathrm{ord}(h)$ except with negligible probability, since the committer's view fixes $\alpha$ only modulo $\mathrm{ord}(h)$. For any prime $e \nmid M$, $h^{e^{-1} \bmod M}$ is an $e$-th root of $h$, a strong-RSA solution for the challenge planted as $h$.

## Notes

`class: fully-black-box`: The commitment algorithms use the modulus and bases only through group operations. The binding reduction runs the adversary once as an oracle: from two openings of one commitment it obtains a nonzero multiple of the hidden group order and computes a nontrivial root of the planted strong-RSA challenge.

- Generalized to any abelian group whose order is hidden from the committer, binding under the strong root assumption, with the gaps in FO97's soundness proofs filled — [[DF02 - A Statistically-Hiding Integer Commitment Scheme Based on Groups with Hidden Order|DF02]]
