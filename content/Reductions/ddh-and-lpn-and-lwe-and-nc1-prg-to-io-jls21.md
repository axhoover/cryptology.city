---
type: reduction
status: draft
title: "Sub-exponential SXDH + LWE + LPN + NC0-PRG ⇒ iO"
aliases: []
id: red-ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21
kind: implication
hypotheses: [jls21-common-prime-assumptions, subexponential-prg-in-nc0]
conclusion: subexponential-io
class: free
model: standard
source:
  - "[[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]]"
security-loss: "requires sub-exponential hardness of SXDH, LWE and LPN over the common prime and sub-exponential security of the NC0 PRG"
rationale:
  class: "The construction builds functional encryption from the hypotheses and applies the FE-to-iO transformation, which runs the FE encryption algorithm inside function keys, so it is not black-box in the hypotheses."
---

# Sub-exponential SXDH + LWE + LPN + NC0-PRG ⇒ iO

## Statement

Let $\tau > 0$ be a constant. If [[decisional-diffie-hellman#sxdh-lwe-and-lpn-over-a-common-prime|SXDH, LWE and LPN are sub-exponentially hard over a common prime]] for a generator of asymmetric bilinear groups of $\secpar$-bit prime order $p$, and a Boolean [[low-complexity-prg#sub-exponential-security|PRG]] in $\mathrm{NC}^0$ with stretch $n^{1+\tau}$ on $n$-bit seeds is sub-exponentially secure, then [[indistinguishability-obfuscation#sub-exponentially-secure-io|sub-exponentially secure]] [[indistinguishability-obfuscation|iO]] for all polynomial-size circuits exists — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]] (arXiv v1, Theorem 5.5). The three problems share the prime $p$, the order of the bilinear group: SXDH in its source groups; [[learning-with-errors|LWE]] over $\ZZ_p$ with secret dimension $k$ and modulus-to-noise ratio at most $2^{k^\varepsilon}$; and [[learning-parity-with-noise|LPN]] over $\ZZ_p$ (the field generalization, not binary LPN) with secret dimension $\ell$, polynomially many samples and error rate $\ell^{-\delta}$, for constants $\varepsilon, \delta \in (0,1)$ and large enough polynomials $k, \ell$ in $\secpar$ — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]].

## Notes

- A Boolean polynomial-stretch PRG in $\mathrm{NC}^0$ is a stronger hypothesis than a [[pseudorandom-generator-in-nc1|pseudorandom generator]] in $\mathrm{NC}^1$, since it is in particular one — folklore.
- The proof is non-uniform. To show that the structured-seed PRG built from LPN and the $\mathrm{NC}^0$ PRG is pseudorandom, it replaces one bit of leakage on the LPN samples and the PRG output by the output of a simulator that the leakage simulation lemma only shows to exist: a circuit of size $O(s \cdot 2^{\ell} \epsilon^{-2})$ for distinguishing circuits of size $s$, $\ell$ bits of leakage and error $\epsilon$. The distinguishers against LPN and the PRG run this circuit, so the proof uses both hypotheses against [[uniform-and-non-uniform-adversaries|non-uniform adversaries]] — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]] (arXiv v1, Theorem 2.1 and the proof of Proposition 4.1).
- Under polynomial hardness of the same assumptions, there is a collusion-resistant, adaptively secure, compact public-key [[functional-encryption|FE]] scheme for all polynomial-size circuits — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]] (arXiv v1, Theorem 5.5).
