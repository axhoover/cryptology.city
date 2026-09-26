---
type: reduction
status: draft
title: "LPN ⇒ PKE"
aliases: []
id: red-lpn-to-pke
kind: implication
hypotheses: [lpn]
conclusion: pke
class: fully-black-box
model: standard
source:
  - "[[Ale03 - More on average case vs approximation complexity|Ale03]]"
security-loss: ""
---

# LPN ⇒ PKE

[[learning-parity-with-noise#noise-level|Mid-noise LPN]] implies [[public-key-encryption|PKE]].

## Statement

[[learning-parity-with-noise#noise-level|Mid-noise LPN]] with noise rate $\varepsilon = \Theta(1/\sqrt{k})$ implies CPA-secure [[public-key-encryption|PKE]] [[Ale03 - More on average case vs approximation complexity|Ale03]].

## Sketch

The public key is an LPN sample $(\mathbf{A}, \mathbf{b} = \mathbf{A}\mathbf{s} + \mathbf{e})$ with $\mathbf{A} \in \FF_2^{m \times k}$, $m = \Theta(k)$, and noise rate $\Theta(1/\sqrt{m})$; the secret key is $\mathbf{s}$. A bit $\beta$ is encrypted as $(\mathbf{r}^{\top}\mathbf{A}, \mathbf{r}^{\top}\mathbf{b} + \beta)$ for a fresh $\mathbf{r}$ of the same sparsity. Decryption subtracts $(\mathbf{r}^{\top}\mathbf{A})\mathbf{s}$, leaving $\mathbf{r}^{\top}\mathbf{e} + \beta$; the inner product of two $\Theta(1/\sqrt{m})$-sparse vectors in $\FF_2^m$ is biased toward $0$, so each ciphertext decrypts correctly with constant advantage and repetition amplifies correctness. Security is two LPN steps: the public key is pseudorandom, and once it is uniform the ciphertext is a sparse combination of uniform rows, pseudorandom by LPN in its dual (syndrome) form.

## Notes

`class: fully-black-box`: The construction uses LPN samples only as data: the public key is one LPN sample and a ciphertext is a sparse combination of its rows. The security proof is two straight-line hybrids (public key to uniform, then ciphertext to uniform), each a fixed reduction that runs any CPA distinguisher once as an oracle to distinguish LPN samples from uniform. RTV04 fully-black-box shape.

- The noise regime is load-bearing; the flat hypothesis `lpn` should be the `lpn-mid-noise` variant.
