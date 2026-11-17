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

Let $\PRF = (\KeyGen, \Eval)$ be a [[pseudorandom-function|PRF]] with key space $\calK = \bits^{\kappa(\secpar)}$ and domain $\calD = \bits^{n(\secpar)}$ for polynomials $\kappa$ and $n$, and $\Pi$ a protocol that securely computes the functionality $f_\PRF(k, x) = (\bot, \Eval(k, x))$ with abort against a malicious adversary corrupting one party, which exists when [[secure-multi-party-computation#two-party-computation-2pc|2PC]] is achieved. Then $(\PRF, \Pi)$ is an [[oblivious-prf|OPRF]] with [[oblivious-prf#malicious-security|malicious security]] — folklore.

## Sketch

$\Eval$ is efficient and its inputs have fixed polynomial lengths, so $f_\PRF$ is a polynomial-time functionality and has a protocol. An input that the simulator substitutes for a corrupted party in the ideal execution of $f_\PRF$ is a string of length $\kappa$ or $n$, so it lies in $\calK$ or $\calD$ as the [[oblivious-prf#malicious-security|malicious OPRF]]'s ideal execution requires, and malicious security of the OPRF is security with abort of that protocol for $f_\PRF$, together with pseudorandomness of $\PRF$, which is the hypothesis — standard.

## Notes

- The construction needs the key space and domain to contain every string of their lengths: a corrupted party may hand the trusted party of the 2PC ideal execution any string of the input length, while the malicious OPRF's ideal execution admits only $k' \in \calK$ and $x' \in \calD$. For a PRF with $\Eval(k', x) = x$ for some $k' \notin \calK$, a corrupted server that inputs $k'$ makes the client output $x$ — folklore.
- Every PRF whose domain contains $\bits^{n(\secpar)}$ for a polynomial $n$ gives one of this form: re-keying by the coins of $\KeyGen$, $\Eval'(r, x) := \Eval(\KeyGen(1^\secpar; r), x)$ for $r \in \bits^{t(\secpar)}$ with $t$ the number of coins $\KeyGen$ uses, leaves the [[pseudorandom-function#security|PRF game]] unchanged and gives key space $\bits^{t(\secpar)}$, and restricting the domain to $\bits^{n(\secpar)}$, e.g. $\bits^\secpar$ for $\calD = \bits^*$, preserves pseudorandomness — folklore.
- A [[secure-multi-party-computation#semi-honest-two-party-computation|semi-honest 2PC]] protocol run on $f_\PRF$ in place of $\Pi$ gives a [[oblivious-prf#semi-honest-security|semi-honest secure OPRF]] ([[semi-honest-two-party-computation-and-prf-to-oprf|semi-honest 2PC + PRF ⇒ OPRF]]) — folklore.
