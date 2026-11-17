---
type: reduction
status: draft
title: "Weak PRF ⇒ Leakage-resilient stream cipher"
aliases: []
id: red-weak-prf-to-leakage-resilient-stream-cipher-pie09
kind: implication
hypotheses: [key-expanding-weak-prf]
conclusion: leakage-resilient-stream-cipher
class: unstated
model: standard
source:
  - "[[Pie09 - A Leakage-Resilient Mode of Operation|Pie09]]"
security-loss: ""
---

# Weak PRF ⇒ Leakage-resilient stream cipher

## Statement

Let $F : \bits^\kappa \times \bits^n \to \bits^{\kappa + n}$ be a [[pseudorandom-function#key-expanding-weak-prfs|key-expanding weak PRF]]: a weak PRF with $n = \omega(\log \secpar)$ whose $\KeyGen(1^\secpar)$ samples $k \getsr \bits^\kappa$. The stream cipher with initial state $(K_0, K_1, X_0)$, for uniform $K_0, K_1 \in \bits^\kappa$ and $X_0 \in \bits^n$, whose round $i$ computes $(K_{i+1}, X_i) := F(K_{i-1}, X_{i-1})$ and outputs $X_i$, is [$\ell$-leakage-resilient](leakage-resilient-stream-cipher#leakage-resilience) — [[Pie09 - A Leakage-Resilient Mode of Operation|Pie09]]. Round $i$ reads only $(K_{i-1}, X_{i-1})$; the key $K_i$ of the next round is not accessed. The leakage $\ell$ tolerated per round grows with the security of $F$, and is logarithmic in $\secpar$ for a weak PRF secure against all efficient adversaries — [[Pie09 - A Leakage-Resilient Mode of Operation|Pie09]].

## Notes

- The proof rests on the seed-incompressibility of weak PRFs on a domain of size $\secpar^{\omega(1)}$: on random inputs such a weak PRF's outputs stay pseudorandom when bounded information about its key is leaked — [[Pie09 - A Leakage-Resilient Mode of Operation|Pie09]].
- The construction uses a single primitive, in place of the PRG and randomness extractor of [[prg-to-leakage-resilient-stream-cipher-dp08|PRG ⇒ Leakage-resilient stream cipher]] — [[Pie09 - A Leakage-Resilient Mode of Operation|Pie09]], [[DP08 - Leakage-Resilient Cryptography|DP08]].
- The condition $n = \omega(\log \secpar)$ is necessary. In each round $i$, $f_i$ computes $K_{i+1}$ from $(K_{i-1}, X_{i-1})$ and outputs the first bit of the $\bits^n$-part of $F(K_{i+1}, 0^n)$. Once some output $X_{i+1} = 0^n$, which takes about $2^n$ rounds, $\calA$ requests the challenge $X_{i+2}$ and compares its first bit with $\Lambda_i$. For $n = O(\log \secpar)$ this gives advantage about $1/2$ in $\poly(\secpar)$ rounds — standard.
