---
type: reduction
status: draft
title: "DCR ⇒ HE"
aliases: []
id: red-dcr-to-he-pai99
kind: implication
hypotheses: [dcr]
conclusion: he
class: fully-black-box
model: standard
source:
  - "[[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]"
security-loss: "tight: one call to the CPA adversary"
---

# DCR ⇒ HE

[[decisional-composite-residuosity|DCR]] implies the additive fragment of [[homomorphic-encryption|HE]].

## Statement

[[decisional-composite-residuosity|DCR]] implies [[homomorphic-encryption#partially-homomorphic-encryption-phe|additively homomorphic encryption]]: the Paillier cryptosystem encrypts $m \in \ZZ_n$ as $c = g^m r^n \bmod n^2$ for $r \getsr \ZZ_n^*$, so $\Enc(\pk, m_1) \cdot \Enc(\pk, m_2) \bmod n^2$ decrypts to $m_1 + m_2 \bmod n$, and it is semantically secure iff DCR is hard — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]].

## Sketch

An encryption of $0$ is a uniform $n$-th residue in $\ZZ_{n^2}^*$, which DCR makes indistinguishable from a uniform element of $\ZZ_{n^2}^*$; an encryption of $m$ is $g^m$ times an encryption of $0$, so replacing the residue by a uniform element makes the ciphertext independent of $m$.

## Notes

`class: fully-black-box`: One fixed construction (Paillier over $\ZZ_{n^2}^*$) and one fixed reduction: given a DCR challenge $c^*$, the reduction sets the challenge ciphertext to $g^{m_b} \cdot c^*$ and runs any CPA adversary once as an oracle. This is the RTV04 fully-black-box shape.

- Generalisation to modulus $n^{s+1}$ with plaintext space $\ZZ_{n^s}$, the simplification $g = 1+n$, and a threshold variant — [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]]
- Threshold decryption for Paillier — [[FPS00 - Sharing Decryption in the Context of Voting or Lotteries|FPS00]]
- The conclusion node `he` (alias FHE) is coarser than the actual conclusion, additively homomorphic PKE, which [[dcr-to-partially-homomorphic-encryption-phe-pai99|DCR ⇒ PHE]] records; DCR is not known to imply FHE.
