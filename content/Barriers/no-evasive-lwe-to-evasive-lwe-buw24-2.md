---
type: barrier
status: draft
title: "No reduction from Evasive LWE to Evasive LWE"
aliases: []
id: bar-evasive-lwe-to-evasive-lwe-buw24-2
hypotheses: [evasive-lwe-private-coin]
conclusion: evasive-lwe
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[BUW24 - Evasive LWE Assumptions Definitions Classes and Counterexamples|BUW24]]"
  - "[[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]]"
  - "[[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]]"
---

# No reduction from Evasive LWE to Evasive LWE

A reduction of class `unstated` from [[learning-with-errors#evasive-lwe|Evasive LWE]] to [[learning-with-errors#evasive-lwe|Evasive LWE]] would imply a contradiction.

## Statement

Migrated verbatim from [[learning-with-errors]] § Evasive LWE:

> The public-coin restriction — that $\mathrm{aux}$ contains $\mathrm{Samp}$'s coin tosses — prevents obfuscation-based counterexamples where $\mathrm{aux}$ encodes a program with a hidden trapdoor for $\mathbf{P}$ — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]].
>
> The assumption comes in public-coin and private-coin variants. Private-coin variants have known counterexamples — [[BUW24 - Evasive LWE Assumptions Definitions Classes and Counterexamples|BUW24]], [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]]. A _circular_ variant of evasive LWE was proposed for ABE for unbounded-depth circuits, but has also been shown vulnerable to zeroizing attacks — [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]].

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- These are COUNTEREXAMPLES TO AN ASSUMPTION (the assumption is false as stated for private-coin and circular variants), which is a different object from a reduction barrier but shares Q='contradiction'. The data model needs to distinguish 'assumption refuted' from 'reduction ruled out'.
- Three distinct results (private-coin counterexamples; the public-coin restriction that blocks obfuscation-based counterexamples; the circular-variant zeroizing attack) are packed into two sentences with four citations. Which citation supports which claim is only partly recoverable.
- This is the best-sourced barrier-adjacent passage on the wiki — every claim carries a wikilink — and is a good citation-density target for barrier pages.
