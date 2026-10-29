---
type: reduction
status: draft
title: "Generic bilinear group model ⇒ asymmetric q-SDH"
aliases: []
id: red-generic-bilinear-group-model-to-asymmetric-q-sdh-bb08
kind: implication
hypotheses: [generic-bilinear-group-model]
conclusion: asymmetric-q-sdh
class: free
model: generic-group
source:
  - "[[BB08 - Short Signatures Without Random Oracles and the SDH Assumption in Bilinear Groups|BB08]]"
security-loss: "a generic algorithm that succeeds with constant probability makes $\\Omega(\\sqrt{p/q})$ group-operation and pairing queries, for $q = O(p^{1/3})$"
rationale:
  class: "The hypothesis is a model of computation, and BB08 bound every generic algorithm in it, which is the free class scoped by the model."
  model: "The bound holds only for algorithms that access the three groups and the pairing through generic oracles."
---

# Generic bilinear group model ⇒ asymmetric q-SDH

## Statement

In the [[generic-group-model#generic-bilinear-groups|generic bilinear group model]], the [asymmetric $q$-SDH problem](q-strong-diffie-hellman#asymmetric-q-sdh) is hard in groups of prime order $p$: every generic algorithm that, given $(g_1, g_1^{\tau}, \ldots, g_1^{\tau^q}, g_2, g_2^{\tau})$, outputs $(c, g_1^{1/(\tau + c)})$ with constant probability makes $\Omega(\sqrt{p/q})$ oracle queries, provided $q = O(p^{1/3})$ — [[BB08 - Short Signatures Without Random Oracles and the SDH Assumption in Bilinear Groups|BB08]]. The $q$-SDH assumption was introduced in [[BB04a - Short Signatures Without Random Oracles|BB04a]].

## Notes

- When $p - 1$ has a divisor $d \le q$ with $d \approx p^{1/3}$, Cheon's algorithm recovers $\tau$ from $g_1$, $g_1^{\tau}$ and $g_1^{\tau^d}$ with about $p^{1/3}$ group operations up to a logarithmic factor, which for $q \approx p^{1/3}$ meets the bound — [[Che06 - Security Analysis of the Strong Diffie-Hellman Problem|Che06]].
