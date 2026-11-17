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
security-loss: "none: the DPF hiding game is the FSS hiding game restricted to point functions"
rationale:
  class: "The DPF is the FSS scheme restricted to point functions, and the reduction passes any DPF adversary unchanged to the FSS hiding game; both use their objects only as oracles."
---

# Function secret sharing (FSS) ⇒ DPF

## Statement

A [[distributed-point-function|DPF]] is two-party [[distributed-point-function#function-secret-sharing-fss|function secret sharing]] for the class of point functions: a two-party FSS scheme for a class $\calF$ containing, for a finite abelian group $\GG$ with $|\GG| \ge 2$ and every $n \in \NN$, every point function $f_{\alpha,\beta} : \bits^n \to \GG$ ($f_{\alpha,\beta}(\alpha) = \beta$ and $f_{\alpha,\beta}(x) = 0$ for $x \ne \alpha$), described by $(\alpha, \beta)$, is, restricted to those functions, a DPF with range $\GG$ — [[BGI15 - Function Secret Sharing|BGI15]].

## Sketch

Run the FSS key generation on $f_{\alpha,\beta}$. Correctness (the shares sum to $f_{\alpha,\beta}(x)$) and hiding are the FSS properties restricted to point functions, and since $\calF$ describes $f_{\alpha,\beta}$ by $(\alpha, \beta)$, FSS keys of length $p(\secpar, |\hat f|)$ with $|\hat f_{\alpha,\beta}| = O(n + \log |\GG|)$ are DPF keys of length polynomial in $\secpar$, $n$ and $\log |\GG|$, for one polynomial independent of $n$.
