---
type: reduction
status: draft
title: "IND-CPA KEM ⇒ IND-CPA PKE"
aliases: []
id: red-ind-cpa-kem-to-pke-cpa-security
kind: implication
hypotheses: [ind-cpa-kem]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "a factor 2: the IND-CPA advantage is at most twice the KEM IND-CPA advantage"
rationale:
  class: "The construction calls KeyGen, Encap and Decap only as oracles, and the fixed reduction runs any IND-CPA adversary once as an oracle on the KEM challenge."
---

# IND-CPA KEM ⇒ IND-CPA PKE

## Statement

Let $(\KeyGen, \Encap, \Decap)$ be an [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA-secure]] [[key-encapsulation-mechanism|KEM]] with key space $\bits^{\ell(\secpar)}$. The [[public-key-encryption|PKE]] scheme with message space $\bits^{\ell(\secpar)}$ that encrypts $m$ as $(c, k \oplus m)$ for $(c, k) \gets \Encap(\pk)$ and decrypts $(c, d)$ to $\bot$ if $\Decap(\sk, c) = \bot$ or $|d| \neq \ell(\secpar)$, and to $\Decap(\sk, c) \oplus d$ otherwise is [[public-key-encryption#cpa-security|IND-CPA-secure]], and it is $(1-\varepsilon)$-correct when the KEM is — folklore.

## Sketch

The reduction samples $b \getsr \bits$, answers the challenge pair $(m_0, m_1)$ with $(c^*, k \oplus m_b)$ for its KEM challenge $(c^*, k)$, and outputs whether the adversary guesses $b$; when $k$ is uniform, $k \oplus m_b$ is independent of $b$. Decryption fails exactly when $\Decap(\sk, c) \neq k$, whatever $m$ is.

## Notes

- With a one-time IND-CPA SKE scheme in place of the one-time pad, the same argument gives PKE for the SKE scheme's message space ([[ind-cpa-kem-and-ske-to-pke-cpa-security|IND-CPA KEM + SKE ⇒ IND-CPA PKE]]) — folklore.
