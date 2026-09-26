---
type: reduction
status: draft
title: "NTRU ⇒ PKE"
aliases: []
id: red-ntru-to-pke-hps98
kind: implication
hypotheses: [ntru]
conclusion: pke
class: unstated
model: standard
source:
  - "[[HPS98 - NTRU a ring-based public key cryptosystem|HPS98]]"
security-loss: ""
---

# NTRU ⇒ PKE

[[ntru|NTRU]] implies [[public-key-encryption|PKE]] only heuristically.

## Statement

[[HPS98 - NTRU a ring-based public key cryptosystem|HPS98]] build [[public-key-encryption|PKE]] over $R = \ZZ[x]/(x^n - 1)$: the public key is $h = g \cdot f^{-1} \bmod q$ for short secret $f, g$, and $m$ encrypts to $c = p \cdot r \cdot h + m \bmod q$ for short random $r$. HPS98 give no reduction: key recovery from $h$ is the [[ntru|NTRU]] problem, message recovery is a separate closest-vector problem, and the unpadded scheme is not IND-CPA, since $g(1) = 0$ forces $h(1) = 0$ and hence $c(1) \equiv m(1) \pmod q$.

## Sketch

Decryption computes $f \cdot c = p \cdot r \cdot g + f \cdot m \bmod q$, which for suitable parameters holds exactly over $R$ because every factor is short; reducing modulo $p$ leaves $f \cdot m$, and multiplying by $f^{-1} \bmod p$ recovers $m$.

## Notes

`class: unstated`: HPS98 give no security reduction, so no class applies.

- With discrete-Gaussian secret keys the public key is statistically close to uniform and the modified NTRUEncrypt is IND-CPA under [[learning-with-errors#ring-lwe|Ring LWE]] — [[SS11 - Making NTRU as secure as worst-case problems over ideal lattices|SS11]]
