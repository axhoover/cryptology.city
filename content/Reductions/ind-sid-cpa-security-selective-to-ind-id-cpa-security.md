---
type: reduction
status: draft
title: "IND-sID-CPA Security (Selective) ⇒ IND-ID-CPA Security"
aliases: []
id: red-ind-sid-cpa-security-selective-to-ind-id-cpa-security
kind: implication
hypotheses: [ind-sid-cpa]
conclusion: ind-id-cpa
class: fully-black-box
model: standard
source:
  - "[[BB04 - Efficient Selective-ID Secure Identity Based Encryption Without Random Oracles|BB04]]"
security-loss: "multiplicative factor $|\\calI|$; for super-polynomial identity spaces this requires sub-exponentially hard selective security"
---

# IND-sID-CPA Security (Selective) ⇒ IND-ID-CPA Security

[[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA Security (Selective)]] implies [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA Security]], with a multiplicative security loss of $|\calI|$ (complexity leveraging).

## Statement

Every [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA-secure]] [[identity-based-encryption|IBE]] scheme with identity space $\calI$ is [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] with a multiplicative loss of $|\calI|$: the reduction guesses the challenge identity in advance and aborts on a wrong guess. For super-polynomial $|\calI|$ the loss is super-polynomial, so the implication requires sub-exponential selective security (complexity leveraging) [[BB04 - Efficient Selective-ID Secure Identity Based Encryption Without Random Oracles|BB04]].

## Sketch

The reduction samples $\mathit{id}' \getsr \calI$, commits to it as its selective challenge identity and runs the adaptive adversary, forwarding all queries; with probability $1/|\calI|$ the adversary's challenge identity is $\mathit{id}'$ and the reduction's advantage equals the adversary's.

## Notes

`class: fully-black-box`: The construction is the identity map on IBE schemes; the reduction samples a guess for the adaptive adversary's challenge identity, runs the adversary once as an oracle, and aborts on a wrong guess. Fixed construction, fixed black-box reduction.
