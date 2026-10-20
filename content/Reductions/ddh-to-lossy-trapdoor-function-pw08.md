---
type: reduction
status: draft
title: DDH ⇒ Highly lossy TDF (Peikert–Waters)
aliases: []
id: red-ddh-to-lossy-trapdoor-function-pw08
kind: implication
hypotheses: [ddh]
conclusion: highly-lossy-trapdoor-function
class: fully-black-box
model: standard
source:
  - "[[PW08 - Lossy trapdoor functions and their applications|PW08]]"
security-loss: "a factor polynomial in n, from a hybrid over the entries of the encrypted matrix"
rationale:
  class: "The function uses only the group operations, and the mode-indistinguishability reduction runs any distinguisher only as an oracle on matrices built from its DDH challenges."
---

# DDH ⇒ Highly lossy TDF (Peikert–Waters)

## Statement

If [[decisional-diffie-hellman|DDH]] holds in a group $\GG = \langle g \rangle$ of prime order $p$, then [[trapdoor-permutation#lossy-trapdoor-functions|lossy trapdoor functions]] on $\bits^n$ exist whose lossy mode has at most $p$ images, so the residual leakage is at most $\log p$; for $n \ge c \log p$ with a constant $c > 2$ it is at most $n / c$, so the functions are [[trapdoor-permutation#highly-lossy-trapdoor-functions|highly lossy]] — [[PW08 - Lossy trapdoor functions and their applications|PW08]].

## Sketch

The index is an entrywise ElGamal encryption of a matrix $M \in \bits^{n \times n}$ with randomness $r_i$ per row and secret key $s_j$ per column: $(g^{r_i})_i$ and $(g^{r_i s_j + M_{ij}})_{i,j}$. For $x \in \bits^n$, $f(x) := \bigl(g^{\langle r, x \rangle}, (g^{\langle r, x \rangle s_j + (x^{\top} M)_j})_j\bigr)$ is computed from the index by multiplying entries. With $M = I$ the trapdoor $(s_j)_j$ recovers each $g^{x_j}$, hence $x$; with $M = 0$ the output depends on $x$ only through $\langle r, x \rangle \in \ZZ_p$. The two indices are indistinguishable under DDH by a hybrid over the matrix entries — [[PW08 - Lossy trapdoor functions and their applications|PW08]].

## Notes

- Efficiency: the index has $n^2 + n$ group elements, an output has $n + 1$, and an evaluation costs about $n^2$ group multiplications — standard.
- Lossy trapdoor functions give [[lossy-trapdoor-functions-to-pke|IND-CCA2-secure PKE]], [[lossy-trapdoor-function-to-injective-trapdoor-function-pw08|injective trapdoor functions]] and [[lossy-trapdoor-function-to-ot-pw08|OT]], and highly lossy ones give [[lossy-trapdoor-function-to-crhf-pw08|collision-resistant hashing]] — [[PW08 - Lossy trapdoor functions and their applications|PW08]].
