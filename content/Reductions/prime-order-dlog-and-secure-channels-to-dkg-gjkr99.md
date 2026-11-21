---
type: reduction
status: draft
title: "DLOG + secure channels ⇒ DKG (GJKR)"
aliases: []
id: red-prime-order-dlog-and-secure-channels-to-distributed-key-generation-gjkr99
kind: implication
hypotheses: [prime-order-dlog, secure-channels]
conclusion: distributed-key-generation
class: unstated
model: crs
source:
  - "[[GJKR99 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR99]]"
  - "[[GJKR07 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR07]]"
security-loss: ""
rationale:
  model: "Every party acts as a dealer, so the public $h$ with $\\log_g h$ unknown to all parties must come from a trusted setup rather than from any participant."
---

# DLOG + secure channels ⇒ DKG (GJKR)

## Statement

Let $\GrGen(1^\secpar)$ output a group $\GG = \langle g \rangle$ of prime order $q$, and let $h \in \GG$ be public with $\log_g h$ known to no party. The parties $P_1, \ldots, P_n$ communicate synchronously over pairwise [[interactive-protocol#secure-channels|secure channels]] and a [[interactive-protocol#broadcast-channel|broadcast channel]]. In GJKR's protocol, every $P_i$ shares a random $z_i \in \ZZ_q$ with Pedersen's [[secret-sharing#verifiable-secret-sharing-vss|verifiable secret sharing]] under $(g, h)$, the set $Q$ of qualified dealers is fixed, and only then does each dealer in $Q$ broadcast $g^{a_{ik}}$ for the coefficients $a_{ik}$ of its sharing polynomial; the $z_i$ of a dealer whose broadcast values are inconsistent with its shares is reconstructed from its Pedersen shares. If [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] is hard in $\GG$, this protocol is a secure [[distributed-key-generation|DKG]], correct and secret, against a static malicious adversary corrupting any $t < n/2$ of the parties — [[GJKR99 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR99]], [[GJKR07 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR07]].
