---
type: reduction
status: draft
title: "Type 3 pairing ⇒ DS (Pointcheval–Sanders)"
aliases:
  - Pointcheval–Sanders signature
  - PS signature
id: red-type-3-pairing-to-ds-ps16
kind: implication
hypotheses: [type-3-pairing]
conclusion: ds
class: free
model: generic-group
source:
  - "[[PS16 - Short Randomizable Signatures|PS16]]"
security-loss: ""
rationale:
  class: "PS16 bound the advantage of every generic forger, so the result holds for all algorithms in the model rather than through a reduction to a hardness assumption."
  model: "The proof applies only to adversaries that are generic in the Type 3 bilinear group; no random oracle is used."
---

# Type 3 pairing ⇒ DS (Pointcheval–Sanders)

## Statement

Let $e : \GG_1 \times \GG_2 \to \GG_T$ be a [[pairings#type-3|Type 3 pairing]] of prime order $p$ and $\tilde g$ a generator of $\GG_2$. Pointcheval–Sanders [[digital-signature|signatures]] on $m = (m_1, \ldots, m_r) \in \ZZ_p^r$ have $\sk = (x, y_1, \ldots, y_r)$ and $\vk = (\tilde g, \tilde X = \tilde g^x, \tilde Y_1 = \tilde g^{y_1}, \ldots, \tilde Y_r = \tilde g^{y_r})$. $\Sign$ outputs $\sigma = (h, h^{x + \sum_j y_j m_j})$ for $h \getsr \GG_1 \setminus \{1\}$, and $\Vrfy$ accepts iff $\sigma_1 \ne 1$ and $e(\sigma_1, \tilde X \prod_j \tilde Y_j^{m_j}) = e(\sigma_2, \tilde g)$. The scheme is [[digital-signature#existential-unforgeability|EUF-CMA]] against adversaries that are generic in the bilinear group, without random oracles — [[PS16 - Short Randomizable Signatures|PS16]].

## Notes

- Efficiency: a signature is two elements of $\GG_1$ whatever $r$, and verification costs two pairings. Signatures re-randomize publicly as $(\sigma_1^t, \sigma_2^t)$ — [[PS16 - Short Randomizable Signatures|PS16]].
- The scheme needs a Type 3 pairing: with an efficiently computable $\psi : \GG_2 \to \GG_1$, the pair $(\psi(\tilde g), \psi(\tilde X) \prod_j \psi(\tilde Y_j)^{m_j})$ verifies on every message — standard.
- PS16 prove EUF-CMA from an interactive assumption that holds in the generic group model, and that assumption, like the LRSW assumption behind [[type-1-pairing-and-lrsw-to-ds-cl04|Camenisch–Lysyanskaya signatures]], essentially states EUF-CMA security; a slight modification of the scheme is secure under simple variants of the SDH assumption — [[PS18 - Reassessing Security of Randomizable Signatures|PS18]].
