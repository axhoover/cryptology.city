---
type: reduction
status: draft
title: Claw-free permutations ⇒ CRHF (Damgård)
aliases: []
id: red-claw-free-permutations-to-crhf-dam87
kind: implication
hypotheses: [claw-free-permutations]
conclusion: crhf
class: fully-black-box
model: standard
source:
  - "[[Dam87 - Collision Free Hash Functions and Public Key Signature Schemes|Dam87]]"
security-loss: "none: every collision yields a claw"
rationale:
  class: "The hash evaluates the two permutations only as oracles, and one fixed reduction extracts a claw from any collision, running the collision finder once as an oracle."
---

# Claw-free permutations ⇒ CRHF (Damgård)

## Statement

Let $(f_0, f_1)$ be a [[trapdoor-permutation#claw-free-permutations|claw-free pair]] of permutations of $\calD$, let $x_0 \in \calD$ be fixed, and let $\langle m \rangle = b_1 \cdots b_t$ be a prefix-free encoding of messages. Then

$$
\hash_{f_0, f_1, x_0}(m) := f_{b_1}(f_{b_2}(\cdots f_{b_t}(x_0) \cdots))
$$

is collision resistant — [[Dam87 - Collision Free Hash Functions and Public Key Signature Schemes|Dam87]]. Every fixed-length encoding is prefix-free, so on messages of a fixed length $n(\secpar)$ exceeding the bit length of elements of $\calD$, encoded as themselves, $\hash_{f_0, f_1, x_0} : \bits^{n} \to \calD$ is a compressing [[hash-function#collision-resistance|collision-resistant hash function]] family.

## Sketch

Let $m \ne m'$ collide, with encodings $b_1 \cdots b_t$ and $b'_1 \cdots b'_{t'}$. Each $f_b$ is injective, so the two evaluations still agree after the longest common prefix of the encodings. Prefix-freeness leaves two non-empty remainders whose first bits differ, and the reduction computes the corresponding inner values $u, v$ forward from $x_0$, obtaining a claw $f_0(u) = f_1(v)$ — [[Dam87 - Collision Free Hash Functions and Public Key Signature Schemes|Dam87]].

## Notes

- Efficiency: one evaluation of a permutation per encoded message bit; with [[factoring-blum-integers-to-claw-free-permutations-gmr88|GMR88's factoring-based pair]], one modular squaring, and for $f_1$ a multiplication by $4$, per bit — standard.
