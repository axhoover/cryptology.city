---
type: reduction
status: draft
title: "Φ-Hiding ⇒ DS (RSA full-domain hash, tight)"
aliases: []
id: red-phi-hiding-to-ds-kk12
kind: implication
hypotheses: [phi-hiding]
conclusion: ds
class: unstated
model: rom
source:
  - "[[KK12 - Optimal Security Proofs for Full Domain Hash, Revisited|KK12]]"
security-loss: "tight: independent of $q_S$ and $q_H$"
---

# Φ-Hiding ⇒ DS (RSA full-domain hash, tight)

## Statement

Let $e$ be a prime public exponent in the Φ-hiding regime $e \le N^{1/4 - \varepsilon}$. If the [[rsa-assumption#φ-hiding|Φ-hiding assumption]] holds, RSA full-domain hash, which signs as $\Sign(d, m) = H(m)^d \bmod N$ with $H : \bits^* \to \ZZ_N^*$ a random oracle, is [[digital-signature#existential-unforgeability|EUF-CMA]] in the random oracle model, by a tight reduction whose loss does not depend on the numbers of signing and hash queries — [[KK12 - Optimal Security Proofs for Full Domain Hash, Revisited|KK12]].

## Notes

- The best known reduction from RSA itself loses a factor about $q_S$ ([[tdp-to-ds-br93|TDP ⇒ DS (full-domain hash)]]) — [[Cor00 - On the Exact Security of Full Domain Hash|Cor00]].
- A loss of about $q_S$ is unavoidable for full-domain hash over certified trapdoor permutations — [[Cor02 - Optimal Security Proofs for PSS and Other Signature Schemes|Cor02]]. The impossibility needs certification and does not cover RSA in the Φ-hiding regime — [[KK12 - Optimal Security Proofs for Full Domain Hash, Revisited|KK12]].
