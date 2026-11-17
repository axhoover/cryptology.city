---
type: reduction
status: draft
title: Okamoto identification protocol ⇒ Non-trivial canonical ID
aliases: []
id: red-okamoto-identification-protocol-to-non-trivial-canonical-identification-scheme
kind: implication
hypotheses: [okamoto-identification-protocol]
conclusion: non-trivial-canonical-identification-scheme
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity construction; the reduction runs any passive impersonator as an oracle, producing its transcripts by playing the honest verifier in sequential prover sessions."
---

# Okamoto identification protocol ⇒ Non-trivial canonical ID

## Statement

If the [[identification-scheme#okamoto-identification-protocol|Okamoto identification protocol]] is secure against impersonation under active attack, it is a [[identification-scheme#non-trivial-canonical-identification-schemes|non-trivial canonical identification scheme]] secure against impersonation under passive attack, with the same advantage. It is canonical: the prover sends $A = g_1^{r_1} g_2^{r_2}$, the verifier replies with a uniform $e \in C$, and acceptance is the deterministic check $g_1^{z_1} g_2^{z_2} = A X^e$. It is perfectly correct, since $g_1^{r_1 + e x_1} g_2^{r_2 + e x_2} = A X^e$ — standard. It is non-trivial, since $A$ is uniform in the group of prime order $p$ already for uniform $r_1$, so its min-entropy is $\log p \ge \log |C| = \omega(\log \secpar)$ for a challenge space $C \subseteq \ZZ_p$ with $1/|C|$ negligible — standard. It is secure against impersonation under passive attack with the same advantage, since [[identification-scheme#impersonation-under-active-and-concurrent-attack|active security]] implies passive security — standard.

## Sketch

An active attacker simulates the passive attacker's transcript oracle by running prover sessions one at a time as the honest verifier, with uniform challenges, and then forwards the impersonation phase unchanged.
