---
type: reduction
status: draft
title: "CRHF ⇒ Arbitrary-length CRHF (Merkle–Damgård)"
aliases:
  - Merkle–Damgård construction
  - Merkle-Damgård construction
id: red-crhf-to-arbitrary-length-crhf
kind: implication
hypotheses: [crhf]
conclusion: arbitrary-length-crhf
class: fully-black-box
model: standard
source:
  - "[[Rog06 - Formalizing Human Ignorance|Rog06]]"
security-loss: "none on collisions shorter than 2^b: the collision finder succeeds whenever the adversary does, after at most (|x| + |x'|)/b + 4 compression-function calls"
rationale:
  class: "The iteration calls the compression function only as an oracle, and the collision finder runs any adversary once as an oracle and then evaluates the iteration on its two outputs."
---

# CRHF ⇒ Arbitrary-length CRHF (Merkle–Damgård)

## Statement

Let $h(k, \cdot) : \bits^{b+m} \to \bits^m$ be a [[hash-function#collision-resistance|collision-resistant]] family with $b = b(\secpar) \le \poly(\secpar)$. For $x \in \bits^*$ let $\mathrm{pad}(x) := 0^r \,\|\, \langle |x| \bmod 2^b \rangle_b$, where $r \ge 0$ is least such that $b$ divides $|x| + r$ and $\langle \cdot \rangle_b$ is the $b$-bit binary encoding, and write $x \,\|\, \mathrm{pad}(x) = x_1 \cdots x_\ell$ with each $x_i \in \bits^b$. Merkle–Damgård iteration with initial value $0^m$ is the family with the key generation of $h$ and

$$
\hash(k, x) := y_\ell, \qquad y_0 := 0^m, \quad y_i := h(k, x_i \,\|\, y_{i-1}) \text{ for } 1 \le i \le \ell.
$$

There is a collision finder $\calC$ that, for every key $k$ and every adversary $\calA$, runs $\calA(1^\secpar, k)$ once, evaluates $\hash(k, \cdot)$ on its two outputs with at most $(|x| + |x'|)/b + 4$ calls to $h(k, \cdot)$, and outputs a collision of $h(k, \cdot)$ whenever $\calA$ outputs a collision $(x, x')$ of $\hash(k, \cdot)$ with $|x|, |x'| < 2^b$ — [[Rog06 - Formalizing Human Ignorance|Rog06]] (Theorem 4, stated for an unkeyed compression function; for a keyed family the same $\calC$ runs on each key). If $b(\secpar) = \omega(\log \secpar)$, every efficient $\calA$ outputs strings shorter than $2^{b(\secpar)}$ for all large $\secpar$, so $\Adv^{\mathrm{cr}}_{\hash,\calA}(\secpar) \le \Adv^{\mathrm{cr}}_{h,\calC}(\secpar)$ and $\hash$ is an [[hash-function#arbitrary-length-collision-resistance|arbitrary-length CRHF]].

Any CRHF is first brought to $b(\secpar) \ge \secpar$: fixing all but $m + 1$ input bits gives a collision-resistant $h_1(k, \cdot) : \bits^{m+1} \to \bits^m$, and $h'(k, y \,\|\, z) := y_\secpar$, with $y_0 := y \in \bits^m$, $z = z_1 \cdots z_\secpar \in \bits^\secpar$ and $y_i := h_1(k, z_i \,\|\, y_{i-1})$, compresses $\bits^{m+\secpar}$ to $\bits^m$; a collision of $h'(k, \cdot)$ yields one of $h_1(k, \cdot)$ at the last step at which the two computations differ in their input — standard. So every CRHF yields an arbitrary-length CRHF.

## Sketch

If $|x| \ne |x'|$, the last blocks encode different lengths, both below $2^b$, so the last calls to $h$ have distinct inputs and equal outputs. If $|x| = |x'|$, then $\ell = \ell'$, and the padded strings differ because $x \ne x'$; at the last index $i$ at which the inputs $x_i \,\|\, y_{i-1}$ and $x'_i \,\|\, y'_{i-1}$ differ, $y_i = y'_i$, for $i = \ell$ by the collision and for $i < \ell$ because the inputs at $i + 1$ agree — [[Rog06 - Formalizing Human Ignorance|Rog06]].

## Notes

- The length block is needed: with zero padding alone, $x$ and $x \,\|\, 0$ pad to the same string whenever $|x|$ is not a multiple of $b$, a collision of the iteration — standard.
- The converse is immediate: the restriction of an arbitrary-length CRHF to $\bits^{m+1}$ is a CRHF ([[arbitrary-length-crhf-to-crhf|Arbitrary-length CRHF ⇒ CRHF]]) — folklore.
- The iterated family is length-extendable: $\hash(k, x \,\|\, \mathrm{pad}(x) \,\|\, z)$ is computed from $k$, $\hash(k, x)$, $|x|$ and $z$, by continuing the chain from $y_\ell = \hash(k, x)$ — standard.
