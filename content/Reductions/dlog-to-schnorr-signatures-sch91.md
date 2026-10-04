---
type: reduction
status: draft
title: "DLOG ⇒ Schnorr identification protocol"
aliases: []
id: red-dlog-to-schnorr-signatures-sch91
kind: implication
hypotheses: [dlog]
conclusion: schnorr-identification-protocol
class: fully-black-box
model: standard
source:
  - "[[Sch91 - Efficient signature generation by smart cards|Sch91]]"
security-loss: "DLOG success $\\ge (\\varepsilon - 1/|C|)^2$ for impersonation success $\\varepsilon$"
rationale:
  class: "One fixed protocol uses only the group operation, and the reduction runs the impersonator only as an oracle, rewinding it to two accepting transcripts with a common commitment."
---

# DLOG ⇒ Schnorr identification protocol

## Statement

The [[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]] is a three-move sigma protocol for knowledge of $x = \log_g h$ in a group of prime order $p$: the prover sends $a = g^r$ for $r \getsr \ZZ_p$, receives a uniform challenge $e$ from the challenge space $C$, and replies $z = r + ex \bmod p$; the verifier accepts iff $g^z = a h^e$. It is special sound and perfectly honest-verifier zero-knowledge unconditionally, and secure against impersonation under passive attack if [[discrete-logarithm|DLOG]] is hard — [[Sch91 - Efficient signature generation by smart cards|Sch91]].

## Sketch

Rewinding an impersonator to two accepting transcripts $(a, e, z)$, $(a, e', z')$ with $e \neq e'$ yields $x = (z - z')/(e - e') \bmod p$; eavesdropped transcripts are simulated by sampling $z, e$ uniformly and setting $a = g^z h^{-e}$, which reproduces the honest distribution exactly.

## Notes

- By the Reset Lemma, a passive impersonator with success probability $\varepsilon$ yields a DLOG solver with success probability at least $(\varepsilon - 1/|C|)^2$ — [[BP02 - GQ and Schnorr Identification Schemes Proofs of Security against Impersonation under Active and Concurrent Attacks|BP02]].
- Security against active and concurrent impersonation holds under the [[discrete-logarithm#one-more-discrete-logarithm|one-more discrete logarithm]] assumption — [[BP02 - GQ and Schnorr Identification Schemes Proofs of Security against Impersonation under Active and Concurrent Attacks|BP02]].
