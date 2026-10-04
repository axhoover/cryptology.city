---
type: reduction
status: draft
title: "QR ⇒ PKE"
aliases: []
id: red-qr-to-pke-gm84
kind: implication
hypotheses: [qr]
conclusion: pke
class: fully-black-box
model: standard
source:
  - "[[GM84 - Probabilistic encryption|GM84]]"
security-loss: ""
rationale:
  class: "GM84 state no reduction notion; the construction uses only the modulus generator, and one fixed reduction sets the public non-residue to the QR challenge and runs the IND-CPA adversary once as an oracle."
---

# QR ⇒ PKE

## Statement

If [[quadratic-residuosity|QR]] is hard, the Goldwasser–Micali scheme is an IND-CPA-secure [[public-key-encryption|PKE]] for one-bit messages: $\pk = (N, y)$ with $N = pq$ and $y \in \J_N \setminus \QR_N$, $\sk = (p, q)$; $\Enc(\pk, \beta) = y^\beta r^2 \bmod N$ for $r \getsr \ZZ_N^*$; $\Dec$ outputs $0$ iff the ciphertext lies in $\QR_N$, decided with $(p, q)$. Encryptions of $0$ are uniform in $\QR_N$ and encryptions of $1$ uniform in $\J_N \setminus \QR_N$, so IND-CPA security is equivalent to QR — [[GM84 - Probabilistic encryption|GM84]].

## Sketch

The reduction sets $y$ to the QR challenge $a$: if $a \notin \QR_N$ it simulates the real scheme exactly, and if $a \in \QR_N$ encryptions of $0$ and $1$ are identically distributed, so the IND-CPA advantage decides the residuosity of $a$. Conversely a QR decider decrypts.

## Notes

- GM84 introduce semantic security, and this scheme is the first PKE proved to achieve it — [[GM84 - Probabilistic encryption|GM84]].
