---
type: reduction
status: draft
title: "Mid-noise LPN ⇒ IND-CCA PKE"
aliases: []
id: red-lpn-mid-noise-to-pke-cca2-security-kmp14
kind: implication
hypotheses: [lpn-mid-noise]
conclusion: pke-cca2-security
class: fully-black-box
model: standard
source:
  - "[[KMP14 - Simple Chosen-Ciphertext Security from Low-Noise LPN|KMP14]]"
security-loss: ""
rationale:
  class: "One fixed scheme uses LPN samples only as data, and the security reduction answers decryption queries with a trapdoor while running the CCA adversary only as an oracle."
---

# Mid-noise LPN ⇒ IND-CCA PKE

## Statement

If decisional [[learning-parity-with-noise#mid-noise-lpn|LPN]] is hard at noise rate $\Theta(1/\sqrt{k})$, the $\gamma = 1/2$ case of mid-noise LPN, with polynomially many samples, then [[public-key-encryption#cca-security|IND-CCA-secure PKE]] exists — [[KMP14 - Simple Chosen-Ciphertext Security from Low-Noise LPN|KMP14]]. The scheme adapts the gadget trapdoor of [[MP12 - Trapdoors for Lattices Simpler Tighter Faster Smaller|MP12]] to LPN with a double-trapdoor mechanism, and its proof switches trapdoors by a computational variant of the leftover hash lemma — [[KMP14 - Simple Chosen-Ciphertext Security from Low-Noise LPN|KMP14]]. Hardness at any lower noise rate, including the [[learning-parity-with-noise#low-noise-lpn|low-noise regime]], suffices ([[noise-level-to-noise-level|Low-noise LPN ⇒ Mid-noise LPN]]) — folklore.

## Notes

- The first IND-CCA-secure PKE from LPN is [[DMN12 - IND-CCA Secure Cryptography Based on a Variant of the LPN Problem|DMN12]], under a variant of the LPN problem; KMP14's scheme is simpler and more efficient — [[KMP14 - Simple Chosen-Ciphertext Security from Low-Noise LPN|KMP14]].
- At the same noise rate, IND-CPA-secure PKE goes back to [[noise-level-to-pke-ale03|Alekhnovich]] — [[Ale03 - More on average case vs approximation complexity|Ale03]]; from constant-noise LPN, IND-CCA PKE is known under sub-exponential hardness ([[subexponential-lpn-to-pke-yz16|Subexponential LPN ⇒ IND-CCA PKE]]) — [[YZ16 - Cryptography with Auxiliary Input and Trapdoor from Constant-Noise LPN|YZ16]].
