---
type: reduction
status: draft
title: PWPP ⊆ PPP
aliases: []
id: red-pwpp-to-ppp
kind: inclusion
hypotheses: [pwpp]
conclusion: ppp
class: free
model: standard
source: folklore
security-loss: ""
---

# PWPP ⊆ PPP

## Statement

Weak Pigeon reduces to Pigeon, so [[total-function-np#pwpp|PWPP]] $\subseteq$ [[total-function-np#ppp|PPP]] — folklore.

## Sketch

Given $C : \bits^n \to \bits^{n-1}$, let $C'(x) := 1 \| C(x)$, a map $\bits^n \to \bits^n$ that never outputs $0^n$; every Pigeon solution for $C'$ is a collision of $C'$, hence of $C$.
