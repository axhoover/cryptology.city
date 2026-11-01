---
type: barrier
status: draft
title: "No fixed-construction reduction from IND-CPA security to circular security for key cycles (LWE)"
aliases: []
id: bar-pke-cpa-security-to-circular-security-key-cycles-ap16
hypotheses: [pke-cpa-security]
conclusion: circular-security-key-cycles
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [lwe]
source:
  - "[[AP16 - Three's Compromised Too Circular Insecurity for Any Cycle Length from (Ring-)LWE|AP16]]"
rationale:
  class: "The counterexamples refute the identity map (IND-CPA security of a scheme implying its own circular security) and do not rule out another construction."
---

# No fixed-construction reduction from IND-CPA security to circular security for key cycles (LWE)

## Statement

For every constant $k$ there is an [[public-key-encryption#cpa-security|IND-CPA-secure]] public-key encryption scheme that is not $k$-circular secure, under $n$-dimensional [[learning-with-errors|LWE]] for $\poly(n)$ approximation factors, and for every $k = \poly(\secpar)$ one under degree-$n$ [[learning-with-errors#ring-lwe|ring-LWE]] for approximation factors at most $\exp(n^\varepsilon)$; each scheme is also $k'$-circular insecure for $2 \le k' \le k$ — [[AP16 - Three's Compromised Too Circular Insecurity for Any Cycle Length from (Ring-)LWE|AP16]]. Hence, under LWE, the identity map is no reduction from IND-CPA security to [[circular-security#key-cycles-of-every-length|circular security for key cycles]].

## Notes

- From iO, counterexamples exist for every cycle length ([[no-pke-cpa-security-to-k-circular-security-krw15|KRW15's barrier]]) — [[KRW15 - Separations in Circular Security for Arbitrary Length Key Cycles|KRW15]].
