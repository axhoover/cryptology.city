---
type: reduction
status: draft
title: "Mid-noise LPN ⇒ PKE"
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
rationale:
  class: "One fixed construction uses LPN samples only as data, and each of the two hybrid reductions (public key, then ciphertext, to uniform) runs the IND-CPA adversary once as an oracle to distinguish LPN samples from uniform."
---

# Mid-noise LPN ⇒ PKE

## Statement

If decisional [[learning-parity-with-noise#mid-noise-lpn|mid-noise LPN]] is hard at noise rate $\varepsilon = \Theta(1/\sqrt{k})$, the $\gamma = 1/2$ case of $\varepsilon = k^{-\gamma}$, then IND-CPA-secure [[public-key-encryption|PKE]] exists — [[Ale03 - More on average case vs approximation complexity|Ale03]]. Hardness at any lower noise rate, including the [[learning-parity-with-noise#low-noise-lpn|low-noise regime]] $\varepsilon = \log^{c}(k)/k$, suffices, since adding independent noise maps its samples to rate-$\Theta(1/\sqrt{k})$ samples ([[noise-level-to-noise-level|noise monotonicity]]) — folklore.

## Sketch

The public key is a random linear code $C \subseteq \FF_2^m$ and a noisy codeword $\mathbf{c} + \mathbf{e}$, $\mathbf{c} \in C$, whose noise $\mathbf{e}$ of weight $\Theta(\sqrt{m})$ is the secret key; $0$ encrypts to $\mathbf{c}^{\perp} + \tilde{\mathbf{e}}$ for a random $\mathbf{c}^{\perp}$ in the dual of the code spanned by $C$ and $\mathbf{c} + \mathbf{e}$ and a fresh $\tilde{\mathbf{e}}$ of weight $\Theta(\sqrt{m})$, and $1$ encrypts to a uniform vector. Since $\mathbf{e}$ lies in that code, an encryption of $0$ has inner product $\langle \mathbf{e}, \tilde{\mathbf{e}} \rangle$ with $\mathbf{e}$, biased toward $0$ because two independent weight-$\Theta(\sqrt{m})$ vectors in $\FF_2^m$ overlap in $O(1)$ positions in expectation, while an encryption of $1$ has a uniform one, so the bit is recovered with constant advantage, which standard amplification boosts. Security is two decisional-LPN hybrids, replacing the noisy codeword and then the encryption of $0$ by uniform vectors.
