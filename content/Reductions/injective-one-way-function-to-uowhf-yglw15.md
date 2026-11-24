---
type: reduction
status: draft
title: "Injective OWF ⇒ UOWHF"
aliases: []
id: red-injective-one-way-function-to-uowhf-yglw15
kind: implication
hypotheses: [injective-one-way-function]
conclusion: uowhf
class: unstated
model: standard
source:
  - "[[YGLW15 - (Almost) Optimal Constructions of UOWHFs from 1-to-1, Regular One-Way Functions and Beyond|YGLW15]]"
security-loss: ""
rationale:
  class: "YGLW15 call their constructions black-box, a term that does not fix how the security reduction uses the adversary."
---

# Injective OWF ⇒ UOWHF

## Statement

For every [[injective-one-way-function|injective one-way function]] $f$ on $n$-bit inputs there is a [[hash-function#target-collision-resistance-universal-one-wayness|universal one-way hash function]] family with key and output length $\Theta(n)$ whose evaluation calls $f$ once — [[YGLW15 - (Almost) Optimal Constructions of UOWHFs from 1-to-1, Regular One-Way Functions and Beyond|YGLW15]].

## Notes

- The earlier constructions of [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]] and of De Santis and Yung (EUROCRYPT 1990) need key length $O(n \cdot \omega(\log n))$ — [[YGLW15 - (Almost) Optimal Constructions of UOWHFs from 1-to-1, Regular One-Way Functions and Beyond|YGLW15]]. Naor and Yung build UOWHFs from one-way permutations ([[owp-to-uowhf-ny89|OWP ⇒ UOWHF (Naor–Yung)]]), and De Santis and Yung generalize the construction to regular one-way functions, as credited by [[HHR+20 - Inaccessible Entropy II IE Functions and Universal One-Way Hashing|HHR+20]] (Section 1).
- Any one-way function suffices ([[owf-to-uowhf-rom90|OWF ⇒ UOWHF (Rompel)]]) — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]]; Rompel's construction has output length $\tilde{O}(n^8)$ and key length $\tilde{O}(n^{12})$ for a one-way function on $n$-bit inputs — [[HHR+20 - Inaccessible Entropy II IE Functions and Universal One-Way Hashing|HHR+20]] (Section 1.2).
