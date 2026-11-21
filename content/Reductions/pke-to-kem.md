---
type: reduction
status: draft
title: "PKE ⇒ KEM"
aliases: []
id: red-pke-to-kem
kind: implication
hypotheses: [pke-cpa-security]
conclusion: ind-cpa-kem
class: fully-black-box
model: standard
source: folklore
security-loss: "tight when $\\calM \\supseteq \\calK$; a factor $\\ell(\\secpar)$ on the IND-CPA advantage for bitwise encapsulation"
rationale:
  class: "Encapsulation and decapsulation call the PKE algorithms only as oracles, and one fixed reduction runs any IND-CPA KEM adversary as an oracle, embedding its CPA challenge in the encapsulation, at a uniformly chosen bit position for bitwise encapsulation."
---

# PKE ⇒ KEM

## Statement

Let $\PKE = (\KeyGen, \Enc, \Dec)$ be a [[public-key-encryption|PKE]] scheme with message space $\calM$, and let $\calK = \bits^{\ell(\secpar)}$ with $\secpar \le \ell(\secpar) \le \poly(\secpar)$. When $\calM \supseteq \calK$, define a [[key-encapsulation-mechanism|KEM]] by letting $\Encap(\pk)$ sample $k \getsr \calK$ and output $(\Enc(\pk, k), k)$, and let $\Decap(\sk, c)$ compute $m \gets \Dec(\sk, c)$ and output $m$ if $m \in \calK$ and $\bot$ otherwise, so that decapsulation of any ciphertext lies in $\calK \cup \{\bot\}$ even when $\calM \supsetneq \calK$. Otherwise fix two distinct equal-length messages $m_0, m_1 \in \calM$: $\Encap(\pk)$ samples $k \getsr \calK$ and encrypts it bit by bit, outputting $((\Enc(\pk, m_{k_1}), \ldots, \Enc(\pk, m_{k_\ell})), k)$, and $\Decap$ outputs $\bot$ unless $c$ is an $\ell$-tuple, and otherwise sets the $i$-th key bit to $0$ iff the $i$-th component decrypts to $m_0$. If $\PKE$ is $(1-\varepsilon)$-correct, the KEM is $(1-\varepsilon)$-correct when $\calM \supseteq \calK$ and $(1-\ell\varepsilon)$-correct for bitwise encapsulation, by a union bound over the components. If $\PKE$ is [[public-key-encryption#cpa-security|IND-CPA-secure]], the KEM is [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA-secure]], for bitwise encapsulation by a hybrid over the $\ell$ bits — standard. If $\calM \supseteq \calK$ and $\PKE$ is [[public-key-encryption#cca-security|IND-CCA-secure]], the KEM is [[key-encapsulation-mechanism#ind-cca-security|IND-CCA-secure]]. When $\calM \supseteq \calK$, every KEM adversary yields a PKE adversary with the same advantage and the same number of decryption queries — folklore.

## Sketch

When $\calM \supseteq \calK$, the reduction picks independent $k_0, k_1 \getsr \calK$, submits them as its PKE challenge pair, hands the KEM adversary $(\pk, c^*, k_0)$, and answers each decapsulation query $c \ne c^*$ by querying its decryption oracle on $c$ and returning the answer if it lies in $\calK$, which membership in $\bits^{\ell(\secpar)}$ tests publicly, and $\bot$ otherwise; when $c^*$ encrypts $k_1$, the shown key $k_0$ is independent of $c^*$, which is the KEM's random-key world. The IND-CPA case is the same reduction with no decryption oracle. For bitwise encapsulation, the $j$-th hybrid encrypts the first $j$ bits of an independent uniform key in place of those of the shown key, and adjacent hybrids differ in one CPA challenge on $(m_0, m_1)$.

## Notes

- Bitwise encapsulation is not IND-CCA-secure: $c^*$ with its first component replaced by a fresh encryption of $m_0$ differs from $c^*$ except with negligible probability, and its decapsulation returns the last $\ell - 1$ bits of the real key — standard.
- KEMs and the KEM/DEM hybrid framework are formalized in [[CS03 - Design and Analysis of Practical Public-Key Encryption Schemes Secure against Adaptive Chosen Ciphertext Attack|CS03]].
