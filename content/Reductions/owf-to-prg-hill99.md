---
type: reduction
status: draft
title: OWF ⇒ PRG
aliases: []
id: red-owf-to-prg-hill99
kind: implication
hypotheses: [owf]
conclusion: prg
class: fully-black-box
model: standard
source:
  - "[[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]"
security-loss: ""
rationale:
  class: "The construction calls the one-way function only as an oracle, and one fixed reduction inverts it given oracle access to any PRG distinguisher (hybrid argument plus Goldreich–Levin decoding); HRV10 treat HILL as the reference fully-black-box construction."
---

# OWF ⇒ PRG

## Statement

Every unkeyed [[hash-function#preimage-resistance-one-wayness|one-way function]] $f$ yields a [[pseudorandom-generator|PRG]] — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]. The construction extracts, by universal hashing, the computational entropy that the [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]] hard-core predicate adds to the output of $f$.

## Sketch

Hashing $x$ down to about $\log |f^{-1}(f(x))|$ bits and appending the hard-core bit gives a false-entropy generator: its output has more computational than real entropy. Concatenating many independent copies turns that gap into a min-entropy gap, and universal hashing then extracts more pseudorandom bits than the seed holds, by the leftover hash lemma — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]].

## Notes

- For a one-way permutation $f$, $G(x, r) = (f(x), r, \langle x, r \rangle)$ already stretches by one bit — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]].
- Seed length $\tilde{O}(n^4)$ via next-block pseudoentropy, with a generator that is non-adaptive in $f$ and parallelizable — [[HRV10 - Efficiency Improvements in Constructing Pseudorandom Generators from One-Way Functions|HRV10]].
- Seed length $\tilde{O}(n^3)$ and a single hashing step, from a characterization of pseudoentropy by KL-hardness of sampling — [[VZ12 - Characterizing Pseudoentropy and Simplifying Pseudorandom Generator Constructions|VZ12]].
- Every black-box construction of a PRG from a one-way function on $n$ bits calls it $\Omega(n / \log n)$ times, even when the function is regular, for which $O(n / \log n)$ calls suffice — [[HS12 - Constructing a Pseudorandom Generator Requires an Almost Linear Number of Calls|HS12]].
- Conversely, every PRG is a one-way function ([[prg-to-hash-function|PRG ⇒ OWF]]), so OWF $\Leftrightarrow$ PRG — folklore.
