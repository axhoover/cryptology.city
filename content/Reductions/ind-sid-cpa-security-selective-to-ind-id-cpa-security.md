---
type: reduction
status: draft
title: "Sub-exponential IND-sID-CPA Security ⇒ IND-ID-CPA Security"
aliases: []
id: red-ind-sid-cpa-security-selective-to-ind-id-cpa-security
kind: implication
hypotheses: [subexp-ind-sid-cpa]
conclusion: ind-id-cpa
class: fully-black-box
model: standard
source:
  - "[[BB04 - Efficient Selective-ID Secure Identity Based Encryption Without Random Oracles|BB04b]]"
security-loss: "multiplicative $|\\calI|$"
rationale:
  class: "The construction is the identity map on IBE schemes, and the reduction runs the adaptive adversary once as an oracle on a guessed challenge identity, aborting on a wrong guess."
---

# Sub-exponential IND-sID-CPA Security ⇒ IND-ID-CPA Security

## Statement

For an [[identity-based-encryption|IBE]] scheme with identity space $\calI$, every efficient adaptive ([[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA]]) adversary with advantage $\delta$ yields a selective ([[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA]]) adversary of similar size with advantage $\delta / |\calI|$ (complexity leveraging) — [[BB04 - Efficient Selective-ID Secure Identity Based Encryption Without Random Oracles|BB04b]]. Hence a [[identity-based-encryption#sub-exponential-ind-sid-cpa-security|sub-exponentially IND-sID-CPA-secure]] IBE, with constant $\epsilon > 0$, yields an IND-ID-CPA-secure IBE: run it at security parameter $\secpar' = \lceil \secpar^{2/\epsilon} \rceil$ with identities restricted to $\bits^{\secpar}$, padded to $\secpar'$ bits. A polynomial-size adaptive adversary with advantage $\delta$ gives a selective adversary of size below $2^{\secpar'^{\epsilon}}$ for large $\secpar$, with advantage $\delta / 2^{\secpar} \le 2^{-\secpar'^{\epsilon}} \le 2^{-\secpar^2}$, so $\delta \le 2^{\secpar - \secpar^2}$ — folklore. A merely negligible selective advantage does not suffice, since the identity space has at least $2^{\secpar}$ elements.

## Sketch

The reduction samples $\mathit{id}' \getsr \calI$, commits to it as its selective challenge identity and runs the adaptive adversary, forwarding extraction queries and aborting with a random bit if the adversary queries $\mathit{id}'$ or challenges on another identity. The guess is independent of the adversary's view, so it equals the adversary's challenge identity with probability $1/|\calI|$, and then an admissible adversary never triggers an abort; the reduction's advantage is the adversary's divided by $|\calI|$.

## Notes

- The HIBE analogue loses the number $|\Sigma^{\le d}|$ of identity vectors ([[subexp-selective-hibe-to-adaptive-hibe|Sub-exponentially selective HIBE ⇒ adaptive HIBE]]) — folklore.
