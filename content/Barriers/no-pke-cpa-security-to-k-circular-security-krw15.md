---
type: barrier
status: draft
title: "No fixed-construction reduction from IND-CPA security to circular security for key cycles (iO)"
aliases: []
id: bar-pke-cpa-security-to-circular-security-key-cycles-krw15
hypotheses: [pke-cpa-security]
conclusion: circular-security-key-cycles
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [io, owf]
source:
  - "[[KRW15 - Separations in Circular Security for Arbitrary Length Key Cycles|KRW15]]"
rationale:
  class: "The counterexamples refute the identity map (IND-CPA security of a scheme implying its own circular security) and do not rule out another construction."
  strength: "The counterexample schemes are built from indistinguishability obfuscation, and iO yields cryptography only together with one-way functions."
---

# No fixed-construction reduction from IND-CPA security to circular security for key cycles (iO)

## Statement

Under [[indistinguishability-obfuscation|iO]], for every $n$ there is an encryption scheme that is [[public-key-encryption#cpa-security|IND-CPA-secure]] but not [$n$-circular secure](circular-security) — [[KRW15 - Separations in Circular Security for Arbitrary Length Key Cycles|KRW15]]. Hence the identity map is no reduction from IND-CPA security to [[circular-security#key-cycles-of-every-length|circular security for key cycles]].

## Notes

- Each counterexample depends on $n$. One scheme that fails $l$-circular security for every cycle length $l$ follows from iO and leveled homomorphic encryption — [[GKW17b - Separating IND-CPA and Circular Security for Unbounded Length Key Cycles|GKW17b]] — and lockable obfuscation, from LWE, turns circular-security separations previously based on iO into constructions from LWE almost immediately — [[GKW17c - Lockable Obfuscation|GKW17c]].
- Cycles of every constant length are separated from plain LWE ([[no-pke-cpa-security-to-k-circular-security-ap16|AP16's barrier]]) — [[AP16 - Three's Compromised Too Circular Insecurity for Any Cycle Length from (Ring-)LWE|AP16]].
