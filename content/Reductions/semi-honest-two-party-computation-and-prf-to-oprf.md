---
type: reduction
status: draft
title: "Semi-honest 2PC + PRF ⇒ OPRF"
aliases: []
id: red-semi-honest-two-party-computation-and-prf-to-oprf
kind: implication
hypotheses: [semi-honest-two-party-computation, prf]
conclusion: oprf
class: free
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The protocol is the general protocol run on a circuit computing the PRF, so it uses the PRF's code."
---

# Semi-honest 2PC + PRF ⇒ OPRF

## Statement

Let $\PRF = (\KeyGen, \Eval)$ be a [[pseudorandom-function|PRF]] with key space $\calK \subseteq \bits^{\kappa(\secpar)}$ and domain $\calD \subseteq \bits^{n(\secpar)}$ for polynomials $\kappa$ and $n$, and $\Pi$ a protocol that securely computes the functionality $f_\PRF(k, x) = (\bot, \Eval(k, x))$ against semi-honest adversaries, which exists when [[secure-multi-party-computation#semi-honest-two-party-computation|semi-honest 2PC]] is achieved. Then $(\PRF, \Pi)$ is a [[oblivious-prf#semi-honest-security|semi-honest secure]] [[oblivious-prf|OPRF]] — folklore.

## Sketch

$\Eval$ is efficient and its inputs have fixed polynomial lengths, so $f_\PRF$ is a polynomial-time functionality and has a protocol; for each corrupted party, the OPRF's semi-honest security game is the semi-honest 2PC game for $f_\PRF$, and pseudorandomness is the hypothesis on $\PRF$ — standard.

## Notes

- Every PRF gives one of this form: re-keying by the coins of $\KeyGen$, $\Eval'(r, x) := \Eval(\KeyGen(1^\secpar; r), x)$ for $r \in \bits^{t(\secpar)}$ with $t$ the number of coins $\KeyGen$ uses, leaves the [[pseudorandom-function#security|PRF game]] unchanged and gives key space $\bits^{t(\secpar)}$, and restricting the domain to $\calD \cap \bits^{n(\secpar)}$ for a polynomial $n$ preserves pseudorandomness — folklore.
- With $\calK = \bits^{\kappa(\secpar)}$, $\calD = \bits^{n(\secpar)}$ and $\Pi$ secure with abort against a malicious adversary corrupting one party ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]), the same construction gives an [[oblivious-prf#malicious-security|OPRF with malicious security]] ([[two-party-computation-and-prf-to-malicious-oprf|2PC + PRF ⇒ malicious OPRF]]) — folklore.
- Conversely, an [[oblivious-prf#oprf-with-a-group-range|OPRF with a group range]] gives semi-honest [[oblivious-transfer|OT]] ([[oprf-to-ot|OPRF ⇒ OT]]) — folklore — and semi-honest OT gives semi-honest secure computation of every functionality ([[ot-to-semi-honest-security-gmw87|semi-honest OT ⇒ semi-honest MPC]]) — [[GMW87 - How to play ANY mental game|GMW87]], [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]].
