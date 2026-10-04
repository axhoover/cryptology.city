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
heuristic: true
source:
  - "[[HPS98 - NTRU a ring-based public key cryptosystem|HPS98]]"
security-loss: ""
rationale:
  heuristic: "HPS98 give no security reduction for the scheme, from the NTRU problem or from any other assumption."
---

# NTRU ⇒ PKE

## Statement

[[HPS98 - NTRU a ring-based public key cryptosystem|HPS98]] build [[public-key-encryption|PKE]] over $R = \ZZ[x]/(x^n - 1)$: the public key is $h = g \cdot f^{-1} \bmod q$ for short secret $f, g$, and $m$ encrypts to $c = p \cdot r \cdot h + m \bmod q$ for short random $r$. HPS98 give no security reduction: key recovery from $h$ is the [[ntru|NTRU]] problem, and message recovery is a separate closest-vector problem.

## Sketch

Decryption computes $f \cdot c = p \cdot r \cdot g + f \cdot m \bmod q$, which for suitable parameters holds exactly over $R$ because every factor is short; reducing modulo $p$ leaves $f \cdot m$, and multiplying by $f^{-1} \bmod p$ recovers $m$.

## Notes

- The unpadded scheme is not IND-CPA: HPS98 sample $g$ with equally many coefficients $+1$ and $-1$, so $g(1) = 0$ forces $h(1) = 0$, hence $c(1) \equiv m(1) \pmod q$ — folklore.
- With discrete-Gaussian secret keys over $\ZZ[x]/(x^n+1)$ the public key is statistically close to uniform, and the modified NTRUEncrypt is IND-CPA under [[learning-with-errors#ring-lwe|Ring LWE]] — [[SS11 - Making NTRU as secure as worst-case problems over ideal lattices|SS11]] ([[ring-lwe-to-ntru-ss11|Ring LWE ⇒ PKE (NTRUEncrypt with Gaussian keys)]]).
