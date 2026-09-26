---
type: reduction
status: draft
title: "Ring LWE ⇒ NTRU"
aliases: []
id: red-ring-lwe-to-ntru-ss11
kind: implication
hypotheses: [ring-lwe]
conclusion: ntru
class: unstated
model: standard
source:
  - "[[SS11 - Making NTRU as secure as worst-case problems over ideal lattices|SS11]]"
security-loss: ""
---

# Ring LWE ⇒ NTRU

[[learning-with-errors#ring-lwe|Ring LWE]] implies IND-CPA security of an [[ntru|NTRU]] encryption variant with discrete-Gaussian secret keys.

## Statement

Let $R = \ZZ[x]/(x^n+1)$ with $n$ a power of two and $q$ a prime modulo which $x^n+1$ splits into linear factors. If the NTRU secrets $f, g$ are sampled from a discrete Gaussian over $R$ of parameter $\sigma \ge \poly(n) \cdot q^{1/2+\varepsilon}$, then the public key $h = p\,g\,f^{-1} \bmod q$ is statistically close to uniform over $R_q^\times$, and the resulting NTRUEncrypt variant is IND-CPA secure if [[learning-with-errors#ring-lwe|Ring-LWE]] over $R_q$ is hard — [[SS11 - Making NTRU as secure as worst-case problems over ideal lattices|SS11]]. The theorem concerns the encryption scheme, not the [[ntru|NTRU]] key-recovery problem, and does not cover the sparse ternary keys of deployed NTRU.

## Sketch

Above the smoothing parameter of the relevant lattice the ratio $g f^{-1}$ of two discrete Gaussians is statistically close to uniform on $R_q^\times$, so $h$ may be replaced by $p a$ for the first component $a$ of a Ring-LWE sample $(a, as+e)$; then $p(as+e) + M$ is exactly an encryption of $M$, so an IND-CPA adversary against the modified scheme distinguishes $(a, as+e)$ from uniform.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
