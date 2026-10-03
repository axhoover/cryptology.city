---
type: glossary
status: draft
aliases:
  - ROM
  - Random oracle
  - Random Oracle Model
title: Random Oracle Model
id: rom
---

# Random Oracle Model

The _Random Oracle Model (ROM)_ is a heuristic commonly used in cryptography to prove security of systems, which are either difficult or impossible to prove secure otherwise. In this model, all parties are given access to an oracle, which is instantiated as a random and independent function. Then, proofs argue with high probability over the choice of a random oracle, schemes remain secure.

The ROM is related to the _Random Oracle Hypothesis_ (attributed to Bennett and Gill), which conjectured that complexity-class relationships holding for almost all relativized worlds also hold unrelativized. The hypothesis was disproved by [[CCG+94 - The random oracle hypothesis is false|CCG+94]].

# Known Results

- [[random-oracle-hypothesis#refutation|The refutation of the ROH]]

- **[[fiat-shamir-heuristic|Fiat-Shamir]] is uninstantiable in the standard model** — Goldwasser and Kalai constructed a 3-round public-coin protocol whose Fiat-Shamir transform is existentially forgeable under every concrete hash function, even though it is secure in the ROM [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]. This shows the random oracle cannot always be replaced by a concrete function.

- [[no-fiat-shamir-and-gkr-to-snark-krs25|No fixed-construction reduction from Fiat-Shamir + GKR to SNARK]]

- [[rom-to-oihf-bh26|ROM ⇒ OIHF]]
- [[oihf-to-ot-bh26|OIHF ⇒ OT]]
- [[no-oihf-to-ot-bh26|No fully-black-box reduction from OIHF to OT]]

<!-- BEGIN GENERATED participates-in 37ba533c36de -->

## Participates in

**Builds on Random Oracle Model**

- [[rom-to-merkle-puzzles-mer78|ROM ⇒ Merkle puzzles]]
- [[rom-to-oihf-bh26|ROM ⇒ OIHF]]

**Barriers**

- [[no-rom-to-ke-hmo-19|No reduction from ROM to KE]]

**Proved in the Random Oracle Model**

- [[bdh-to-ibe-bf01|BDH ⇒ IBE (random oracle model)]]
- [[co-cdh-to-ds|co-CDH ⇒ DS]]
- [[dkg-and-he-to-tpke|DCR ⇒ TPKE]]
- [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]]
- [[dlog-to-pcs|DLOG ⇒ PCS]]
- [[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]]
- [[fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91|Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)]]
- [[hash-function-to-pcs-bbhr18|CRHF ⇒ PCS]]
- [[hash-function-to-snark-bbhr18|CRHF ⇒ STARK]]
- [[id-and-rom-to-ds|ID ⇒ DS]]
- [[ind-cpa-kem-to-ind-cca-security|IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)]]
- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ DS]]
- [[module-lwe-to-kem|Module LWE ⇒ IND-CCA KEM]]
- [[ntru-to-ds|NTRU + NTRU-SIS ⇒ DS]]
- [[ntru-to-kem|NTRU ⇒ IND-CCA KEM]]
- [[pcs-to-snark|Extractable PCS ⇒ SNARK]]
- [[rsa-to-ind-cca-pke-oaep-fops01|RSA ⇒ IND-CCA PKE (RSA-OAEP)]]
- [[rsa-to-ind-cca-security|RSA ⇒ IND-CCA KEM]]
- [[sis-to-ds|SIS ⇒ DS]]
- [[sparse-learning-parity-with-noise-to-pseudorandom-correlation-generators-pcg|Sparse Learning Parity with Noise ⇒ Pseudorandom correlation generators (PCG)]]

<!-- END GENERATED participates-in -->
