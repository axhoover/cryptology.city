---
type: reduction
status: draft
title: "QR ⇒ PKE"
aliases: []
id: red-qr-to-pke-gm84
kind: implication
hypotheses: [qr]
conclusion: pke
class: unstated
model: standard
source:
  - "[[GM84 - Probabilistic encryption|GM84]]"
security-loss: ""
---

# QR ⇒ PKE

[[quadratic-residuosity|QR]] implies [[public-key-encryption|PKE]].

## Statement

[[quadratic-residuosity|QR]] implies IND-CPA-secure [[public-key-encryption|PKE]] via the Goldwasser–Micali scheme, the first PKE with a proof of semantic security: $\pk = (N, y)$ with $N = pq$ and $y \in \J_N \setminus \QR_N$, $\sk = (p, q)$; $\Enc(\pk, b) = y^b r^2 \bmod N$ for $r \getsr \ZZ_N^*$; $\Dec$ outputs $0$ iff the ciphertext lies in $\QR_N$, decided with $(p, q)$. Encryptions of $0$ are uniform in $\QR_N$ and encryptions of $1$ uniform in $\J_N \setminus \QR_N$, so IND-CPA security is equivalent to QR — [[GM84 - Probabilistic encryption|GM84]].

## Sketch

The reduction sets $y$ to the QR challenge $a$: if $a \notin \QR_N$ it simulates the real scheme exactly, and if $a \in \QR_N$ encryptions of $0$ and $1$ are identically distributed, so the IND-CPA advantage decides the residuosity of $a$. Conversely a QR decider decrypts.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
