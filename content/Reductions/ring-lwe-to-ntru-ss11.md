---
type: reduction
status: draft
title: "Ring LWE ⇒ PKE (NTRUEncrypt with Gaussian keys)"
aliases: []
id: red-ring-lwe-to-ntru-ss11
kind: implication
hypotheses: [ring-lwe]
conclusion: pke
class: unstated
model: standard
source:
  - "[[SS11 - Making NTRU as secure as worst-case problems over ideal lattices|SS11]]"
security-loss: ""
---

# Ring LWE ⇒ PKE (NTRUEncrypt with Gaussian keys)

## Statement

Let $R = \ZZ[x]/(x^n+1)$ with $n$ a power of two, and $q$ a prime modulo which $x^n+1$ splits into linear factors. If the NTRU secrets are $g$ and $f = p f' + 1$, with $f'$ and $g$ sampled from a discrete Gaussian over $R$ of parameter $\sigma \ge \poly(n) \cdot q^{1/2+\varepsilon}$, conditioned on $f$ and $g$ being invertible modulo $q$, then the public key $h = p\,g\,f^{-1} \bmod q$ is statistically close to uniform over $R_q^\times$, and the resulting NTRUEncrypt variant is an IND-CPA-secure [[public-key-encryption|PKE]] if [[learning-with-errors#ring-lwe|Ring LWE]] over $R_q$ is hard — [[SS11 - Making NTRU as secure as worst-case problems over ideal lattices|SS11]].

## Sketch

Above the smoothing parameter of the relevant lattice the ratio $g f^{-1}$ is statistically close to uniform on $R_q^\times$, so $h$ may be replaced by $p a$ for the first component $a$ of a Ring LWE sample $(a, as+e)$; then $p(as+e) + M$ is exactly an encryption of $M$, so an IND-CPA adversary against the modified scheme distinguishes $(a, as+e)$ from uniform.

## Notes

- The theorem concerns the encryption scheme: SS11 do not reduce Ring LWE to the [[ntru|NTRU]] key-recovery problem, and the result does not cover the sparse ternary keys of deployed NTRU — [[SS11 - Making NTRU as secure as worst-case problems over ideal lattices|SS11]].
