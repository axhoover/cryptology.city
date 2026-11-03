---
type: reduction
status: draft
title: "Subgroup decision ⇒ SHE (degree 2)"
aliases:
  - BGN cryptosystem
id: red-subgroup-decision-to-somewhat-homomorphic-encryption-bgn05
kind: implication
hypotheses: [subgroup-decision]
conclusion: somewhat-homomorphic-encryption
class: fully-black-box
model: standard
source:
  - "[[BGN05 - Evaluating 2-DNF Formulas on Ciphertexts|BGN05]]"
security-loss: "tight up to a factor 2: one run of the CPA adversary with the subgroup-decision challenge as the public element h"
rationale:
  class: "The scheme uses only the bilinear group generator and group operations, and one fixed reduction sets h to its subgroup-decision challenge and runs the IND-CPA adversary once as an oracle."
---

# Subgroup decision ⇒ SHE (degree 2)

## Statement

If the [[bilinear-map-assumptions#subgroup-decision|subgroup decision assumption]] holds for a composite-order bilinear group generator, the Boneh–Goh–Nissim scheme is an IND-CPA-secure [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption]] scheme of degree $d = 2$: it evaluates any number of additions and one multiplication, and so every 2-DNF formula, on ciphertexts of fixed length, for messages in a range $\{0, \ldots, T\}$ with $T$ polynomial in $\secpar$ — [[BGN05 - Evaluating 2-DNF Formulas on Ciphertexts|BGN05]].

- $\KeyGen$: $(q_1, q_2, \GG, \GG_T, e, g) \gets \GrGen(1^\secpar)$, $N = q_1 q_2$, $u \getsr \GG$, $h = u^{q_2}$, of order $q_1$; $\pk = (N, \GG, \GG_T, e, g, h)$ and $\sk = q_1$.
- $\Enc(\pk, m) = g^m h^r$ for $r \getsr \ZZ_N$.
- $\Dec(\sk, c)$: $c^{q_1} = (g^{q_1})^m$, and $m \le T$ is found by a discrete logarithm to the base $g^{q_1}$ in time $O(\sqrt T)$.
- Addition multiplies ciphertexts and rerandomizes by a power of $h$; multiplication maps $(c_1, c_2) \mapsto e(c_1, c_2) \cdot e(g, h)^r$ into $\GG_T$, where decryption and further additions work the same way with $e(g, g)$ and $e(g, h)$ in place of $g$ and $h$.

## Sketch

Under subgroup decision, $h$ is indistinguishable from a uniform element of $\GG$, which generates $\GG$ except with negligible probability; then $g^m h^r$ is uniform in $\GG$ and independent of $m$. Raising to $q_1$ removes the $h$-component because $h^{q_1} = 1$, and every cross term of $e(c_1, c_2)$ other than $e(g, g)^{m_1 m_2}$ is a power of $e(g, h)$, which has order $q_1$.

## Notes

- Decryption takes time growing with the square root of the plaintext range, so the message space and every evaluated result must be polynomially bounded — [[BGN05 - Evaluating 2-DNF Formulas on Ciphertexts|BGN05]].
- The [[bilinear-map-assumptions#subgroup-decision|subgroup decision assumption]] was introduced for this scheme — [[BGN05 - Evaluating 2-DNF Formulas on Ciphertexts|BGN05]].
