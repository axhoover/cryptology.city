---
type: reduction
status: draft
title: "Perfectly correct PKE ⇒ COM"
aliases: []
id: red-pke-to-com
kind: implication
hypotheses: [perfectly-correct-pke-cpa-security]
conclusion: com
class: fully-black-box
model: standard
source: folklore
security-loss: "hiding: tight, the hiding advantage equals the CPA advantage; binding: perfect"
rationale:
  class: "The commitment algorithms call KeyGen, Enc and the message-producing algorithm only as oracles, the hiding reduction runs any commitment distinguisher once as a CPA adversary with the same advantage, and binding is perfect for honestly generated keys."
---

# Perfectly correct PKE ⇒ COM

## Statement

Let $\PKE = (\KeyGen, \Enc, \Dec)$ be a [[public-key-encryption#perfectly-correct-cpa-secure-pke|perfectly correct CPA-secure PKE]] with message space $\calM$, where $\Enc(\pk, m; r)$ takes its coins $r$ from $\bits^{\rho(\secpar, |m|)}$ for a polynomial $\rho$. The following non-interactive scheme is a [[commitment-scheme|commitment scheme]] with message space $\bits$ — folklore:

- $\Gen(1^\secpar)$ runs $(\sk, \pk) \gets \KeyGen(1^\secpar)$, discards $\sk$, runs the efficient algorithm the PKE syntax supplies, on $1^\secpar$, or on $\pk$ when $\calM$ depends on it, to get two distinct messages $m_0, m_1 \in \calM$ of equal length, and outputs $\pp := (\pk, m_0, m_1)$;
- $\Com(\pp, b; r) := (\Enc(\pk, m_b; r), (b, r))$ for $b \in \bits$, with $r \getsr \bits^{\rho(\secpar, |m_0|)}$;
- $\Open(\pp, c, (b, r))$ returns $b$ if $b \in \bits$, $r \in \bits^{\rho(\secpar, |m_0|)}$ and $c = \Enc(\pk, m_b; r)$, and $\bot$ otherwise.

Correctness is perfect, binding is perfect, and hiding reduces tightly to CPA security. The public parameters come from a trusted setup: a receiver that ran $\KeyGen$ itself would know $\sk$ and could decrypt the commitment.

## Sketch

Binding: two accepted openings $(b_0, r_0)$ and $(b_1, r_1)$ of one $c$ have $r_0, r_1 \in \bits^{\rho(\secpar, |m_0|)}$ and $m_{b_0}, m_{b_1} \in \calM$, so perfect correctness, which holds for every key pair in the support of $\KeyGen$ and every coin string, gives $m_{b_0} = \Dec(\sk, c) = m_{b_1}$ for the honestly generated $(\sk, \pk)$, and $b_0 = b_1$ because $m_0 \ne m_1$. Hiding: the CPA adversary computes $m_0, m_1$ from $\pk$ as $\Gen$ does and runs the hiding adversary on $\pp$; a hiding adversary with $b_0 \ne b_1$ is then a CPA adversary on $(m_{b_0}, m_{b_1})$ with the same advantage, and one with $b_0 = b_1$ has advantage $0$, matched by the CPA adversary outputting a uniform bit.

## Notes

- PKE without perfect correctness still yields commitments: PKE implies a [[hash-function#preimage-resistance-one-wayness|one-way function]] [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]], hence a [[pseudorandom-generator|PRG]] [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], hence a two-message statistically binding commitment [[Naor91 - Bit commitment using pseudorandomness|Naor91]].
