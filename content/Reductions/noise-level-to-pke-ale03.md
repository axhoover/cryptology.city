---
type: reduction
status: draft
title: "Noise Level ⇒ PKE"
aliases: []
id: red-noise-level-to-pke-ale03
kind: implication
hypotheses: [lpn-mid-noise]
conclusion: pke
class: fully-black-box
model: standard
source:
  - "[[Ale03 - More on average case vs approximation complexity|Ale03]]"
security-loss: ""
---

# Noise Level ⇒ PKE

Mid-noise [[learning-parity-with-noise#noise-level|LPN]] implies IND-CPA-secure [[public-key-encryption|PKE]].

## Statement

Hardness of decisional [[learning-parity-with-noise#noise-level|mid-noise LPN]] at noise rate $\varepsilon = \Theta(1/\sqrt{k})$ (the $\gamma = 1/2$ case of $\varepsilon = 1/k^{\gamma}$) implies IND-CPA-secure [[public-key-encryption|PKE]] — [[Ale03 - More on average case vs approximation complexity|Ale03]]. Hardness at any lower noise rate, including the low-noise regime $\varepsilon = \log^{c}(k)/k$, suffices: adding independent noise maps its samples to rate-$\Theta(1/\sqrt{k})$ samples ([[noise-level-to-noise-level|noise monotonicity]]) — folklore.

## Sketch

Public keys and ciphertexts are noisy codewords of a public random linear code (equivalently, their syndromes) with noise vectors of weight $\Theta(\sqrt{m})$; the secret key is the public key's noise vector $\mathbf{e}$. By duality the receiver obtains $\langle \mathbf{e}, \tilde{\mathbf{e}} \rangle + \beta$ from a ciphertext with noise $\tilde{\mathbf{e}}$ encrypting the bit $\beta$; two independent weight-$\Theta(\sqrt{m})$ vectors in $\FF_2^m$ overlap in $O(1)$ positions in expectation, so the inner product is biased toward $0$ and $\beta$ is recovered with constant advantage, which standard amplification boosts. Security is two decisional-LPN hybrids, replacing the public key and then the ciphertext by uniform strings.

## Notes

`class: fully-black-box`: One fixed construction that uses LPN samples only as data, and two fixed hybrid reductions (public key to uniform, then ciphertext to uniform), each running the IND-CPA adversary once, as an oracle, to distinguish LPN samples from uniform.
