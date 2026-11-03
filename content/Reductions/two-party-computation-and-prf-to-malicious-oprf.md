---
type: reduction
status: draft
title: "2PC + PRF ⇒ Malicious OPRF"
aliases: []
id: red-two-party-computation-and-prf-to-malicious-oprf
kind: implication
hypotheses: [two-party-computation, prf]
conclusion: malicious-oprf
class: free
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The protocol is the general protocol run on a circuit computing the PRF, so it uses the PRF's code."
---

# 2PC + PRF ⇒ Malicious OPRF

## Statement

Let $\PRF = (\KeyGen, \Eval)$ be a [[pseudorandom-function|PRF]] and $\Pi$ a protocol that securely computes the functionality $f_\PRF(k, x) = (\bot, \Eval(k, x))$ with abort against a malicious adversary corrupting one party, which exists when [[secure-multi-party-computation#two-party-computation-2pc|2PC]] is achieved. Then $(\PRF, \Pi)$ is an [[oblivious-prf|OPRF]] with [[oblivious-prf#malicious-security|malicious security]] — folklore.

## Sketch

$\Eval$ is efficient, so $f_\PRF$ is computed by a polynomial-size circuit and has a protocol; malicious security of the OPRF is security with abort of that protocol for $f_\PRF$, together with pseudorandomness of $\PRF$, which is the hypothesis — standard.

## Notes

- A [[secure-multi-party-computation#semi-honest-two-party-computation|semi-honest 2PC]] protocol run on $f_\PRF$ in place of $\Pi$ gives a [[oblivious-prf#semi-honest-security|semi-honest secure OPRF]] ([[semi-honest-two-party-computation-and-prf-to-oprf|semi-honest 2PC + PRF ⇒ OPRF]]) — folklore.
