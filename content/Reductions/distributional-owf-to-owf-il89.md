---
type: reduction
status: draft
title: Distributional OWF ⇒ OWF (Impagliazzo–Luby)
aliases: []
id: red-distributional-owf-to-owf-il89
kind: implication
hypotheses: [distributional-owf]
conclusion: owf
class: fully-black-box
model: standard
source:
  - "[[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]]"
security-loss: "polynomial: the one-way function's input length is polynomial in n and p(n), and the distributional inverter for f calls an inverter for it a number of times polynomial in n, p(n) and the inverse of its success probability"
rationale:
  class: "The one-way function evaluates f only as an oracle, on an input it also hashes with a pairwise-independent function, and one fixed reduction turns any inverter for it, run only as an oracle, into a distributional inverter for f."
---

# Distributional OWF ⇒ OWF (Impagliazzo–Luby)

## Statement

If a [[hash-function#distributional-one-wayness|distributionally one-way function]] exists, then a [[hash-function#preimage-resistance-one-wayness|one-way function]] exists — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]]. Contrapositively, if no one-way function exists, then for every polynomial-time computable $f$ and every polynomial $p$ there is an efficient $\calA$ such that, for infinitely many $n$,

$$
\Delta\big((x, f(x)),\, (\calA(f(x)), f(x))\big) < 1/p(n), \qquad x \getsr \bits^n,
$$

with $\Delta$ the statistical distance — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].

## Notes

- The one-way function appends to $f(x)$ a pairwise-independent hash of $x$, truncated to a length that is part of its input. An inverter for it that succeeds with probability close to $1$ yields a distributional inverter for $f$, so it is [[hash-function#weak-one-wayness|weakly one-way]], and [[weak-owf-to-owf-yao82a|Yao's amplification]] makes it one-way — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]], [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]].
- The converse holds with the same function: [[owf-to-distributional-owf|every one-way function is distributionally one-way]] — folklore.
- IL89 apply the contrapositive to functions built from a scheme's algorithms to show that [[ske-to-owf-il89|secure symmetric-key encryption]], [[com-to-owf-il89|commitment schemes]] and [[identification-scheme-to-owf-il89|identification schemes]] imply one-way functions — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].
