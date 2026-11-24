---
type: reduction
status: draft
title: OWF ⇒ UOWHF (Rompel)
aliases: []
id: red-owf-to-uowhf-rom90
kind: implication
hypotheses: [owf]
conclusion: uowhf
class: fully-black-box
model: standard
source:
  - "[[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]]"
security-loss: "polynomial"
rationale:
  class: "The hash family evaluates the one-way function only as an oracle, and the reduction inverts it using any target-collision finder only as an oracle."
---

# OWF ⇒ UOWHF (Rompel)

## Statement

Every [[hash-function#preimage-resistance-one-wayness|one-way function]] yields a [[hash-function#target-collision-resistance-universal-one-wayness|universal one-way hash function]] family compressing by any polynomial number of bits — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].

## Notes

- With [[uowhf-and-ots-to-ds-ny89|UOWHF + one-time signature ⇒ DS]] and [[hash-function-to-hash-based-signatures-lam79|Lamport's one-time signatures]], this gives [[hash-function-to-ds|OWF ⇒ DS]] — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
- Rompel's conference paper has errors in a number of its arguments, and the first complete write-up of his proof is due to Katz and Koo — [[KK05 - On Constructing Universal One-Way Hash Functions from Arbitrary One-Way Functions|KK05]].
- A simpler construction obtains better efficiency and security: $F(x, i)$, the $i$-bit prefix of $f(x)$, is already a weak form of a UOWHF, since given a random $(x, i)$ it is hard to sample $x'$ with almost full entropy among the inputs with $F(x', i) = F(x, i)$, and the rest of the construction amplifies this property — [[HHR+10 - Universal One-Way Hash Functions via Inaccessible Entropy|HHR+10]]. A more efficient variant applies a three-wise independent hash function $g$ to $f(x)$ before truncating, $F(x, g, i) = (g, g(f(x))_{1 \ldots i})$; for a one-way function on $n$-bit inputs it gives output length $\tilde{O}(n^7)$, against $\tilde{O}(n^8)$ for Rompel's construction, and key length $\tilde{O}(n^7)$, against $\tilde{O}(n^{12})$ — [[HHR+20 - Inaccessible Entropy II IE Functions and Universal One-Way Hashing|HHR+20]] (Section 1.2).
- For one-way permutations, one evaluation per bit of compression suffices: [[owp-to-uowhf-ny89|OWP ⇒ UOWHF]] — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]]. For injective one-way functions, one evaluation gives key and output length $\Theta(n)$: [[injective-one-way-function-to-uowhf-yglw15|Injective OWF ⇒ UOWHF]] — [[YGLW15 - (Almost) Optimal Constructions of UOWHFs from 1-to-1, Regular One-Way Functions and Beyond|YGLW15]].
- Collision resistance does not follow from one-wayness by any relativizing construction, even from a one-way permutation: [[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]] — [[Sim98 - Finding Collisions on a One-Way Street Can Secure Hash Functions Be Based on General Assumptions|Sim98]].
