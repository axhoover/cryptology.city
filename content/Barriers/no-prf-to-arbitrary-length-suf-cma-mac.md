---
type: barrier
status: draft
title: "No fixed-construction reduction from length-preserving PRF to arbitrary-length SUF-CMA MAC (plain CBC-MAC)"
aliases: []
id: bar-prf-to-arbitrary-length-suf-cma-mac
hypotheses: [length-preserving-prf]
conclusion: arbitrary-length-suf-cma-mac
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [length-preserving-prf]
circumvented-by: [red-prf-to-arbitrary-length-suf-cma-mac-br05]
source: folklore
rationale:
  strength: "The forgery applies to CBC-MAC over a given length-preserving PRF, so the barrier assumes one exists; without one, the implication for this construction holds vacuously."
  class: "The forgery refutes only plain CBC-MAC on messages of varying length; other constructions of an arbitrary-length MAC from a length-preserving PRF are not ruled out."
---

# No fixed-construction reduction from length-preserving PRF to arbitrary-length SUF-CMA MAC (plain CBC-MAC)

## Statement

Let $\PRF = (\KeyGen, \Eval)$ be a [[pseudorandom-function#length-preserving-prfs|length-preserving PRF]], with domain and range $\bits^n$ for a polynomially bounded $n = n(\secpar) = \omega(\log \secpar)$ computable from $1^\secpar$ in polynomial time, and write $F_k := \Eval(k, \cdot)$. Plain CBC-MAC, with initial value $0^n$ and no encoding of the message length, is

$$
\mathrm{CBC}_k(x_1 \cdots x_m) := y_m, \qquad y_0 := 0^n, \quad y_i := F_k(y_{i-1} \oplus x_i),
$$

for blocks $x_i \in \bits^n$. With canonical verification it is not UF-CMA-secure on any message space containing $\bits^n$ and $\bits^{2n}$: for $x \in \bits^n$ with tag $t = \mathrm{CBC}_k(x) = F_k(x)$, the two-block message $x \,\|\, (x \oplus t)$ has tag $F_k(t \oplus x \oplus t) = t$, so the forger that queries $x$ and outputs $(x \,\|\, (x \oplus t), t)$ wins with probability $1$, for every keyed function on $\bits^n$ in place of $F$ — folklore. In particular, on $\bits^*$, after any padding to whole blocks that leaves each string of length a positive multiple of $n$ unchanged, CBC-MAC is not an [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|arbitrary-length SUF-CMA MAC]], so if a length-preserving PRF exists, this construction is no reduction from a length-preserving PRF to an arbitrary-length SUF-CMA MAC.

## Notes

- On messages of a fixed number $\ell$ of blocks, CBC-MAC is a PRF and a UF-CMA-secure MAC ([[prf-to-mac-bkr94|Length-preserving PRF ⇒ MAC (CBC-MAC)]]) — [[BKR94 - The Security of Cipher Block Chaining|BKR94]].
- The forgery appears in [[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]], which treats it as well known. A two-query variant: for $b \in \bits^n$ with tag $t = F_k(b)$, the tag $t' = F_k(t)$ of the one-block message $t$ is also the tag $F_k(F_k(b) \oplus 0^n)$ of the unqueried message $b \,\|\, 0^n$ — [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]].
- Applying $F$ under a second key to the CBC-MAC output, or under a third key after $10^j$ padding when the message length is not a positive multiple of $n$, gives ECBC, an arbitrary-length SUF-CMA MAC from a length-preserving PRF ([[prf-to-arbitrary-length-suf-cma-mac-br05|Length-preserving PRF ⇒ arbitrary-length SUF-CMA MAC (ECBC)]]); XCBC gets the same from a [[pseudorandom-permutation#prps-on-bit-strings|PRP on bit strings]] with domain $\bits^n$ under one block-cipher key and two $n$-bit keys ([[prp-to-arbitrary-length-suf-cma-mac-br05|PRP on bit strings ⇒ arbitrary-length SUF-CMA MAC (XCBC)]]) — [[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]].
