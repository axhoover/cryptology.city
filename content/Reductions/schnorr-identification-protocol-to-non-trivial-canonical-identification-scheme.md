---
type: reduction
status: draft
title: Schnorr identification protocol ⇒ Non-trivial canonical ID
aliases: []
id: red-schnorr-identification-protocol-to-non-trivial-canonical-identification-scheme
kind: implication
hypotheses: [schnorr-identification-protocol]
conclusion: non-trivial-canonical-identification-scheme
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity construction; the reduction forwards any passive impersonator unchanged."
---

# Schnorr identification protocol ⇒ Non-trivial canonical ID

## Statement

If the [[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]] is secure against impersonation under passive attack, it is a [[identification-scheme#non-trivial-canonical-identification-schemes|non-trivial canonical identification scheme]] secure against impersonation under passive attack, with the same advantage. It is canonical: the prover sends $a = g^r$, the verifier replies with a uniform $e \in C$, and acceptance is the deterministic check $g^z = a h^e$. It is perfectly correct, since $g^{r + ex} = g^r (g^x)^e = a h^e$ — standard. It is non-trivial, since $a$ is uniform in the group of prime order $p$, so its min-entropy is $\log p \ge \log |C| = \omega(\log \secpar)$ for a challenge space $C \subseteq \ZZ_p$ with $1/|C|$ negligible — standard. It is secure against impersonation under passive attack with the same advantage, since the scheme and the passive game are unchanged — standard.
