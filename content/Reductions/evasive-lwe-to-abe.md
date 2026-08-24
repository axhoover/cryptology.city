---
type: reduction
status: stub
title: "Evasive LWE ⇒ ABE"
aliases: []
id: red-evasive-lwe-to-abe
kind: implication
hypotheses: [circular-evasive-lwe]
conclusion: abe
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Evasive LWE ⇒ ABE

[[learning-with-errors#evasive-lwe|Evasive LWE]] implies [[attribute-based-encryption|ABE]].

## Statement

Migrated verbatim from [[learning-with-errors]] § Evasive LWE:

> The assumption comes in public-coin and private-coin variants. Private-coin variants have known counterexamples — [[BUW24 - Evasive LWE Assumptions Definitions Classes and Counterexamples|BUW24]], [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]]. A _circular_ variant of evasive LWE was proposed for ABE for unbounded-depth circuits, but has also been shown vulnerable to zeroizing attacks — [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]].

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- One paragraph packs three claims (public-coin vs private-coin split; private-coin counterexamples; circular-variant zeroizing attack). Recorded separately.
- The proposal ("A circular variant of evasive LWE was proposed for ABE for unbounded-depth circuits") is uncited; only the attack on it is cited.
- Since the hypothesis is reported broken in the same sentence, this edge is only of historical interest and needs a "refuted" status.
