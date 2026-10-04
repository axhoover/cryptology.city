---
type: reduction
status: draft
title: "Function secret sharing (FSS) ⇒ DPF"
aliases: []
id: red-function-secret-sharing-fss-to-dpf-bgi15
kind: implication
hypotheses: [function-secret-sharing]
conclusion: dpf
class: fully-black-box
model: standard
source:
  - "[[BGI15 - Function Secret Sharing|BGI15]]"
security-loss: ""
rationale:
  class: "The DPF is the FSS scheme restricted to point functions, and the reduction passes any DPF adversary unchanged to the FSS hiding game; both use their objects only as oracles."
---

# Function secret sharing (FSS) ⇒ DPF

## Statement

A [[distributed-point-function|DPF]] is two-party [[distributed-point-function#function-secret-sharing-fss|function secret sharing]] for the class of point functions: a two-party FSS scheme for a class $\calF$ containing every point function $f_{\alpha,\beta}$ — $f_{\alpha,\beta}(\alpha) = \beta$ and $f_{\alpha,\beta}(x) = 0$ for $x \ne \alpha$ — is, restricted to those functions, a DPF — [[BGI15 - Function Secret Sharing|BGI15]].

## Sketch

Run the FSS key generation on $f_{\alpha,\beta}$. Correctness (the shares sum to $f_{\alpha,\beta}(x)$) and hiding are the FSS properties restricted to point functions.
