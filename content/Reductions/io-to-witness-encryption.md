---
type: reduction
status: draft
title: iO ⇒ Witness encryption
aliases: []
id: red-io-to-witness-encryption
kind: implication
hypotheses: [io]
conclusion: witness-encryption
class: fully-black-box
model: standard
source: folklore
security-loss: "none: the reduction forwards the adversary's guess"
rationale:
  class: "Encryption obfuscates a fixed circuit through the obfuscator, used as an oracle, and the reduction runs any adversary against the witness encryption once as an oracle."
---

# iO ⇒ Witness encryption

## Statement

[[indistinguishability-obfuscation|iO]] yields [[witness-encryption|witness encryption]] for every $\classNP$ relation $\calR$: $\Enc(1^\secpar, x, m)$ outputs an obfuscation of the circuit $C_{x,m}(w) := m$ if $(x, w) \in \calR$ and $\bot$ otherwise, and $\Dec(c, w)$ runs the obfuscated circuit on $w$ — folklore.

## Sketch

For $x \notin L$, both $C_{x,0}$ and $C_{x,1}$ output $\bot$ on every input, so they are functionally equivalent circuits of the same size, and iO makes their obfuscations indistinguishable.

## Notes

- The first witness encryption scheme is built directly from multilinear maps: [[multilinear-maps-to-witness-encryption-ggsw13|MMap ⇒ WE]] — [[GGSW13 - Witness encryption and its applications|GGSW13]].
