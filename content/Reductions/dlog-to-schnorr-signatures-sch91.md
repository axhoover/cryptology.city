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
security-loss: "Reset Lemma: a passive impersonator with success $\\varepsilon$ yields a DLOG solver with success at least $(\\varepsilon - 1/|C|)^2$, $C$ the challenge space — BP02."
---

# DLOG ⇒ Schnorr identification protocol

[[discrete-logarithm|DLOG]] implies security of the [[digital-signature#schnorr-signatures|Schnorr identification protocol]] against passive impersonation.

## Statement

The [[digital-signature#schnorr-signatures|Schnorr identification protocol]] is a three-move sigma protocol for knowledge of $x = \log_g h$: the prover sends $a = g^r$, receives a random challenge $e$, and replies $z = r + ex$; the verifier accepts iff $g^z = a h^e$. It is special sound and perfectly honest-verifier zero-knowledge unconditionally, and secure against impersonation under passive attack if [[discrete-logarithm|DLOG]] is hard — [[Sch91 - Efficient signature generation by smart cards|Sch91]].

## Sketch

Rewinding an impersonator to two accepting transcripts $(a, e, z)$, $(a, e', z')$ with $e \neq e'$ yields $x = (z - z')/(e - e')$; eavesdropped transcripts are simulated by sampling $z, e$ uniformly and setting $a = g^z h^{-e}$, which reproduces the honest distribution exactly.

## Notes

`class: fully-black-box`: One fixed protocol using only the group operation; the reduction runs the impersonator only as an oracle, rewinding it to two accepting transcripts with a common commitment.

- Security against active and concurrent impersonation under the [[discrete-logarithm#one-more-discrete-logarithm|one-more discrete logarithm]] assumption — [[BP02 - GQ and Schnorr Identification Schemes Proofs of Security against Impersonation under Active and Concurrent Attacks|BP02]]
