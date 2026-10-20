---
type: reduction
status: draft
title: FHE ⇒ cPIR
aliases: []
id: red-he-to-cpir
kind: implication
hypotheses: [he]
conclusion: cpir
class: fully-black-box
model: standard
source: folklore
security-loss: "a factor log n, from a hybrid over the encrypted index bits"
rationale:
  class: "The server evaluates the selection circuit through the scheme's evaluation algorithm, used only as an oracle, and the privacy reduction runs any server distinguisher only as an oracle on queries built from its encryption challenges."
---

# FHE ⇒ cPIR

## Statement

A compact [[homomorphic-encryption|fully homomorphic encryption]] scheme yields a one-round [[single-server-private-information-retrieval|single-server PIR]] scheme with communication $\poly(\secpar, \log n)$: the client sends encryptions of the $\log n$ bits of its index $i$, and the server homomorphically evaluates the selection function $i \mapsto D[i]$ and returns one ciphertext — folklore.

## Notes

- Efficiency: communication is polylogarithmic in $n$, while the server evaluates a circuit of size $\Theta(n)$ homomorphically, which dominates the cost — folklore. An LWE-based instantiation has communication $\secpar \cdot \polylog(\secpar) + \log n$ bits for a single-bit database entry — [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]].
- Linear homomorphism already suffices for communication $O(n^{\varepsilon})$: [[additively-homomorphic-encryption-to-cpir-ste98|additively homomorphic encryption ⇒ cPIR]] — [[Ste98 - A New Efficient All-Or-Nothing Disclosure of Secrets Protocol|Ste98]].
