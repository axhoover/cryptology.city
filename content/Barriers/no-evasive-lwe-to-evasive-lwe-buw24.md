---
type: barrier
status: draft
title: "No reduction from Evasive LWE to Evasive LWE"
aliases: []
id: bar-evasive-lwe-to-evasive-lwe-buw24
hypotheses: [private-coin-evasive-lwe]
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
---

# No reduction from Evasive LWE to Evasive LWE

A reduction of class `unstated` from [[learning-with-errors#evasive-lwe|Evasive LWE]] to [[learning-with-errors#evasive-lwe|Evasive LWE]] would imply a contradiction.

## Statement

Migrated verbatim from [[learning-with-errors]] § Evasive LWE:

> The assumption comes in public-coin and private-coin variants. Private-coin variants have known counterexamples — [[BUW24 - Evasive LWE Assumptions Definitions Classes and Counterexamples|BUW24]], [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]]. A _circular_ variant of evasive LWE was proposed for ABE for unbounded-depth circuits, but has also been shown vulnerable to zeroizing attacks — [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]].

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- One paragraph packs three claims (public-coin vs private-coin split; private-coin counterexamples; circular-variant zeroizing attack). Recorded separately.
- Two citations are attached to one claim without saying which counterexample comes from which paper.
