---
type: reduction
status: draft
title: "DCR ⇒ Highly lossy TDF (Freeman–Goldreich–Kiltz–Rosen–Segev)"
aliases: []
id: red-dcr-to-highly-lossy-trapdoor-function-fgkrs10
kind: implication
hypotheses: [dcr]
conclusion: highly-lossy-trapdoor-function
class: fully-black-box
model: standard
source:
  - "[[FGKRS10 - More Constructions of Lossy and Correlation-Secure Trapdoor Functions|FGKRS10]]"
security-loss: ""
rationale:
  class: "The functions use only the modulus sampler and arithmetic modulo a power of the modulus, and the mode-indistinguishability reduction forwards a residuosity challenge as the index element to any distinguisher, used only as an oracle."
---

# DCR ⇒ Highly lossy TDF (Freeman–Goldreich–Kiltz–Rosen–Segev)

## Statement

If [[decisional-composite-residuosity|DCR]] is hard, [[trapdoor-permutation#highly-lossy-trapdoor-functions|highly lossy trapdoor functions]] exist, with essentially any required amount of lossiness — [[FGKRS10 - More Constructions of Lossy and Correlation-Secure Trapdoor Functions|FGKRS10]]. The function index is $(N, c)$ with $c$ a random Damgård–Jurik encryption modulo $N^{s+1}$ of $1$ in the injective mode and of $0$ in the lossy mode, and the factorization of $N$ is the trapdoor — [[FGKRS10 - More Constructions of Lossy and Correlation-Secure Trapdoor Functions|FGKRS10]]. The two modes are indistinguishable by semantic security of Damgård–Jurik encryption, which follows from DCR — [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]].

## Sketch

Fix a constant $s \ge 3$ and let $f(x) := c^x \bmod N^{s+1}$ on $x \in \bits^n$ with $n = s(|N| - 1)$, so that $x < N^s$. For $c = (1+N)\,u^{N^s}$, $f(x) = (1+N)^x (u^x)^{N^s}$ is a Damgård–Jurik encryption of $x$, which decryption with the factorization recovers. For $c = u^{N^s}$, every image is an $N^s$-th power, and there are $\varphi(N) < 2^{|N|}$ of them, so the residual leakage is at most $|N| \le (1 + o(1))\, n/s < n/2$ — standard.

## Notes

- Efficiency: the index is $N$ and one element of $\ZZ_{N^{s+1}}$, and an evaluation is one exponentiation modulo $N^{s+1}$ with an $n$-bit exponent, against $n^2 + n$ group elements for the [[ddh-to-lossy-trapdoor-function-pw08|DDH-based matrix construction]] — standard; FGKRS10 present their functions as more efficient than that matrix-based approach — [[FGKRS10 - More Constructions of Lossy and Correlation-Secure Trapdoor Functions|FGKRS10]].
- Highly lossy trapdoor functions give [[lossy-trapdoor-function-to-crhf-pw08|collision-resistant hashing]], and lossy ones [[lossy-trapdoor-functions-to-pke|IND-CCA2-secure PKE]] — [[PW08 - Lossy trapdoor functions and their applications|PW08]].
- Lossy trapdoor permutations with improved lossiness from DCR, QR and Φ-hiding are given by [[AKPS19 - Lossy Trapdoor Permutations with Improved Lossiness|AKPS19]].
