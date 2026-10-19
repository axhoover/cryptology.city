---
type: reduction
status: draft
title: Weak OWF ⇒ OWF (Yao)
aliases:
  - Hardness amplification of one-way functions
id: red-weak-owf-to-owf-yao82a
kind: implication
hypotheses: [weak-owf]
conclusion: owf
class: fully-black-box
model: standard
source:
  - "[[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]]"
security-loss: "polynomial: the input grows from n to n²p(n) bits, and the inverter for f makes polynomially many calls to the inverter for F"
rationale:
  class: "F evaluates f only as an oracle on independent blocks, and one fixed reduction inverts f by planting its challenge in a random block of the input of any inverter for F, which it runs only as an oracle."
---

# Weak OWF ⇒ OWF (Yao)

## Statement

Let $f$ be a [[hash-function#weak-one-wayness|weak one-way function]] on $\bits^n$: there is a polynomial $p$ such that every efficient inverter fails on a uniform $x \getsr \bits^n$ with probability at least $1/p(n)$, for all sufficiently large $n$. Then the direct product

$$
F(x_1, \ldots, x_t) := (f(x_1), \ldots, f(x_t)), \qquad t := n \cdot p(n),
$$

on independent uniform blocks $x_i \getsr \bits^n$, is a [[hash-function#preimage-resistance-one-wayness|one-way function]] — [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]].

## Sketch

The inverter for $f$ plants its challenge $y$ at a uniform position $i \in [t]$ among $t-1$ honestly sampled blocks $f(x_j)$, runs an inverter $\calA$ for $F$ that succeeds with probability $\varepsilon$, and outputs the $i$-th block of a successful answer, repeating $O(tn/\varepsilon)$ times. Call $y$ good if one trial succeeds with probability at least $\varepsilon/(2t)$: if more than a $1/(2p)$ fraction of inputs map to bad $y$, then all $t$ blocks of a uniform input to $F$ are good with probability at most $(1 - 1/(2p))^{t} \le e^{-n/2}$, and a union bound over the bad block bounds $\calA$'s success elsewhere by $\varepsilon/2$, so $\varepsilon \le 2e^{-n/2}$. Otherwise the repeated trials invert $f$ on all but a $1/(2p) + e^{-n}$ fraction of inputs, contradicting weak one-wayness — [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]].

## Notes

- Every one-way function is weakly one-way, so either kind exists iff the other does — folklore.
- The amplification is not security preserving: the security of $F$ on $N$-bit inputs rests on that of $f$ on $n$-bit inputs with $N = n^2 p(n)$. For a weak one-way permutation, iterating the permutation along a random walk on an expander graph replaces the independent blocks and keeps the input length linear in $n$ — [[GILVZ90 - Security Preserving Amplification of Hardness|GILVZ90]].
