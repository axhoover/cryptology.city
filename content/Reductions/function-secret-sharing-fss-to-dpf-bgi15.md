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
---

# Function secret sharing (FSS) ⇒ DPF

[[distributed-point-function#function-secret-sharing-fss|Function secret sharing (FSS)]] implies [[distributed-point-function|DPF]].

## Statement

A [[distributed-point-function|DPF]] is two-party [[distributed-point-function#function-secret-sharing-fss|function secret sharing]] for the class of point functions: an FSS scheme for a class $\calF$ containing every point function $f_{\alpha,\beta}$ — $f_{\alpha,\beta}(\alpha) = \beta$ and $f_{\alpha,\beta}(x) = 0$ for $x \ne \alpha$ — is, restricted to those functions, a DPF — [[BGI15 - Function Secret Sharing|BGI15]].

## Sketch

Run the FSS key generation on $f_{\alpha,\beta}$; correctness (the shares sum to $f_{\alpha,\beta}(x)$) and key hiding are the FSS properties restricted to point functions.

## Notes

`class: fully-black-box`: The construction is the FSS scheme restricted to point functions, and the reduction passes any DPF adversary through unchanged as an FSS adversary; both use their objects only as oracles.

- A tensoring operation that simplifies FSS constructions, and a two-party DPF with keys about $4\times$ shorter than BGI15's — [[BGI16 - Function Secret Sharing Improvements and Extensions|BGI16]]
- `function-secret-sharing` has no page; FSS, the more general object, is defined only in the DPF page's Variations section.
