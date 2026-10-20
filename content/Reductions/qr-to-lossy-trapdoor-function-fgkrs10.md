---
type: reduction
status: draft
title: "QR ⇒ Lossy TDF (Freeman–Goldreich–Kiltz–Rosen–Segev)"
aliases: []
id: red-qr-to-lossy-trapdoor-function-fgkrs10
kind: implication
hypotheses: [qr]
conclusion: lossy-trapdoor-function
class: fully-black-box
model: standard
source:
  - "[[FGKRS10 - More Constructions of Lossy and Correlation-Secure Trapdoor Functions|FGKRS10]]"
security-loss: "a factor t = ω(log λ) from the hybrid over the t copies"
rationale:
  class: "The functions use only the Blum-integer sampler and arithmetic modulo it, and the mode-indistinguishability reduction embeds a QR challenge as the index element of one copy and runs any distinguisher only as an oracle."
---

# QR ⇒ Lossy TDF (Freeman–Goldreich–Kiltz–Rosen–Segev)

## Statement

If [[quadratic-residuosity|QR]] is hard for Blum integers, [[trapdoor-permutation#lossy-trapdoor-functions|lossy trapdoor functions]] exist. From modular squaring modulo a Blum integer $N$, FGKRS10 build a collection of $(n, \log_2(4/3))$-lossy trapdoor functions on $\bits^n$, inverted in the injective mode with the factorization of $N$; the injective and lossy indices differ only in one element of $\J_N$, a non-residue in the injective mode and a quadratic residue in the lossy mode, so QR makes the modes indistinguishable — [[FGKRS10 - More Constructions of Lossy and Correlation-Secure Trapdoor Functions|FGKRS10]]. The product of $t$ independent copies is $(tn, t \log_2(4/3))$-lossy, so for $t = \omega(\log \secpar)$ it is a lossy trapdoor function — standard.

## Sketch

In the injective mode the product of injective functions is injective; in the lossy mode each copy has at most $2^{n - \log_2(4/3)}$ images, so the product has at most $2^{tn - t \log_2(4/3)}$. A hybrid that switches the copies' indices one at a time reduces mode distinguishing for the product to QR — standard.

## Notes

- The underlying squaring-based function on $\ZZ_N^*$ loses one bit, but its domain depends on $N$; the domain extension to $\bits^n$ costs lossiness, leaving $\log_2(4/3)$ bits — [[FGKRS10 - More Constructions of Lossy and Correlation-Secure Trapdoor Functions|FGKRS10]].
- Lossy trapdoor permutations from QR with improved lossiness are given by [[AKPS19 - Lossy Trapdoor Permutations with Improved Lossiness|AKPS19]].
