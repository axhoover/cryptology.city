---
type: reduction
status: draft
title: Highly lossy TDF ⇒ CRHF
aliases: []
id: red-lossy-trapdoor-function-to-crhf-pw08
kind: implication
hypotheses: [highly-lossy-trapdoor-function]
conclusion: crhf
class: fully-black-box
model: standard
source:
  - "[[PW08 - Lossy trapdoor functions and their applications|PW08]]"
security-loss: "additive: a collision finder with success ε distinguishes the modes with advantage at least about ε − 2^{2r−κn}"
rationale:
  class: "The hash composes the lossy function, used only as an oracle, with a universal hash, and the reduction distinguishes the modes by running any collision finder once as an oracle."
---

# Highly lossy TDF ⇒ CRHF

## Statement

Let $f$ be an $(n, k)$-[[trapdoor-permutation#highly-lossy-trapdoor-functions|highly lossy trapdoor function]], with residual leakage $r = n - k \le \rho n$ for a constant $\rho < 1/2$, and let $\calH$ be a universal family of functions to $\bits^{\kappa n}$ for a constant $\kappa$ with $2\rho < \kappa < 1$. Then $H_{s, h}(x) := h(f_s(x))$, for a function index $s$ of either mode and $h \getsr \calH$, is a [[hash-function#collision-resistance|collision-resistant hash function]] from $\bits^n$ to $\bits^{\kappa n}$ — [[PW08 - Lossy trapdoor functions and their applications|PW08]].

## Sketch

A collision $x \ne x'$ of $H_{s,h}$ is _inner_ if $f_s(x) = f_s(x')$ and _outer_ otherwise. For an injective index every collision is outer. For a lossy index, $f_s$ has at most $2^r$ images, so $h$ collides on two distinct images with probability at most $2^{2r - \kappa n}$, which is negligible since $\kappa > 2\rho$; except with that probability every collision is inner. Success of a collision finder is efficiently checkable, so it is about the same in both modes, and reporting whether its collision is inner distinguishes the modes — [[PW08 - Lossy trapdoor functions and their applications|PW08]].

## Notes

- The universal hash is what compresses: $f_s$ alone maps $\bits^n$ to a larger range, $n + 1$ group elements for [[ddh-to-lossy-trapdoor-function-pw08|the DDH construction]], and is injective in the injective mode — [[PW08 - Lossy trapdoor functions and their applications|PW08]].
