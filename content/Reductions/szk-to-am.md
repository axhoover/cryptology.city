---
type: reduction
status: draft
title: "SZK ⊆ AM"
aliases: []
id: red-szk-to-am
kind: inclusion
hypotheses: [szk]
conclusion: am
class: free
model: standard
source:
  - "[[AH91 - Statistical zero-knowledge languages can be recognized in two rounds|AH91]]"
security-loss: ""
---

# SZK ⊆ AM

[[statistical-zero-knowledge|SZK]] is contained in [[arthur-merlin|AM]].

## Statement

$\classSZK \subseteq \classAM$: every promise problem with an honest-verifier [[statistical-zero-knowledge|statistical zero-knowledge]] proof system has a two-message public-coin [[arthur-merlin|Arthur–Merlin]] proof — [[AH91 - Statistical zero-knowledge languages can be recognized in two rounds|AH91]].

## Notes

`class: free`: Unconditional containment between complexity classes; the reduction-class axis does not apply.

- The $\classSZK$-completeness of Statistical Difference gives a simpler, unified proof of this bound and of $\classSZK \subseteq \classcoAM$ — [[SV03 - A Complete Problem for Statistical Zero Knowledge|SV03]]
