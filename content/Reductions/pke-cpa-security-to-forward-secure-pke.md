---
type: reduction
status: draft
title: "CPA-secure PKE ⇔ Forward-secure PKE"
aliases: []
id: red-pke-cpa-security-to-forward-secure-pke
kind: equivalence
hypotheses: [pke-cpa-security]
conclusion: forward-secure-pke
class: fully-black-box
model: standard
source: folklore
security-loss: "a factor T from guessing the challenge period, from PKE to forward-secure PKE; none in the other direction"
rationale:
  class: "Both constructions call the given scheme's algorithms only as oracles, and both reductions run the adversary only as an oracle."
---

# CPA-secure PKE ⇔ Forward-secure PKE

## Statement

[[public-key-encryption#cpa-security|CPA-secure]] [[public-key-encryption|public-key encryption]] exists if and only if, for every polynomially bounded $T = T(\secpar) \ge 2$, [[forward-secure-public-key-encryption|forward-secure public-key encryption]] with $T$ periods exists — folklore. From a PKE scheme $(\KeyGen, \Enc, \Dec)$: the key-evolving $\KeyGen(1^\secpar, T)$ samples independent key pairs $(\sk^{(t)}, \pk^{(t)}) \gets \KeyGen(1^\secpar)$ for $t \in [T]$ and outputs $\pk = (\pk^{(1)}, \ldots, \pk^{(T)})$ and $\sk_1 = (\sk^{(1)}, \ldots, \sk^{(T)})$; $\mathsf{Update}$ deletes the first remaining key, so that $\sk_i = (\sk^{(i)}, \ldots, \sk^{(T)})$; period $i$ encrypts under $\pk^{(i)}$ and decrypts with $\sk^{(i)}$. Conversely, the period-$1$ algorithms $\KeyGen(1^\secpar, T)$, $\Enc(\pk, 1, \cdot)$ and $\Dec(\sk_1, 1, \cdot)$ of a forward-secure scheme with $T \ge 2$ periods form a CPA-secure PKE scheme.

## Sketch

A forward-security adversary with challenge period $j$ gives a CPA adversary: sample a guess $j^* \getsr [T]$, embed the challenge public key as $\pk^{(j^*)}$, forward the challenge query, and answer the break-in query for period $i > j^*$ with $\sk_i$, which contains no key of index $j^*$; on a break-in for a period $i \le j^*$ or a challenge for a period other than $j^*$, output a uniform bit. The guess is right ($j^* = j$, and then $i > j^*$ by admissibility) with probability $1/T$, independently of the adversary's view, so the CPA advantage is the forward-security advantage divided by $T$. Conversely, a CPA adversary's challenge is posed for period $1$ and the reduction breaks in during period $2$.

## Notes

- The public key of this construction grows linearly in $T$. The constructions of [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]] have keys and ciphertexts of size polynomial in $\log T$ and $\secpar$ ([[hibe-selective-security-to-forward-secure-pke-chk03|Selectively secure HIBE ⇒ Forward-secure PKE (Canetti–Halevi–Katz)]], [[dbdh-to-forward-secure-pke-chk03|DBDH ⇒ Forward-secure PKE (Canetti–Halevi–Katz)]]).
