---
type: reduction
status: draft
title: "DLOG ⇒ Schnorr signatures (tight, AGM)"
aliases: []
id: red-prime-order-dlog-to-schnorr-signature-fps20
kind: implication
hypotheses: [prime-order-dlog]
conclusion: schnorr-signature
class: unstated
model: algebraic-group
source:
  - "[[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]]"
security-loss: "tight: the DLOG solver has essentially the forger's running time and advantage"
rationale:
  model: "FPS20 prove the theorem for algebraic forgers, with the hash modeled as a programmable random oracle."
---

# DLOG ⇒ Schnorr signatures (tight, AGM)

## Statement

In the [[algebraic-group-model|algebraic group model]], with the hash modeled as a [[random-oracle-model|random oracle]], EUF-CMA security of [[digital-signature#schnorr-signatures|Schnorr signatures]] reduces tightly to [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] in the group: every algebraic forger yields a DLOG solver with essentially the same running time and advantage, and the reduction runs the forger once, without rewinding — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]].

## Sketch

The reduction embeds the DLOG instance as $\pk$ and answers signing queries with the HVZK simulator, programming $H$. An algebraic forger outputs, with each group element it outputs or queries to $H$, a representation over the elements it has received; substituting $R_i = g^{s_i}\pk^{-c_i}$ for the simulated commitments turns it into $R^* = g^{a}\pk^{b}$, fixed before $c^* = H(R^* \| m^*)$ is sampled. A valid forgery $g^{s^*} = R^*\pk^{c^*}$ then gives $\log_g \pk = (s^* - a)/(b + c^*) \bmod p$ unless $c^* = -b$, which happens with probability $1/p$ per hash query.

## Notes

- The theorem covers only algebraic forgers, whereas the lower bounds for algebraic reductions in the random-oracle model ([[no-tight-prime-order-dlog-to-schnorr-signature-seu12|Seu12]]) and for generic reductions ([[no-tight-prime-order-dlog-to-schnorr-signature-fjs19|FJS19]]) concern reductions that work for every forger, so they do not apply — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]].
- Without the algebraic group model, the forking-lemma reduction from DLOG loses a factor about $q_H$ in the time-to-success ratio ([[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]]) — [[PS96 - Security Proofs for Signature Schemes|PS96]].
- Hardness in the algebraic group model need not transfer to the generic group model under the standard formalizations ([[no-agm-to-ggm-kz22|No reduction from AGM to GGM]]) — [[KZ22 - An Analysis of the Algebraic Group Model|KZ22]].
