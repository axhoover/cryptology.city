---
type: glossary
status: draft
aliases:
  - ROM
  - Random oracle
  - Random Oracle Model
  - RO
title: Random Oracle Model
id: rom
variants:
  qrom: "#quantum-random-oracle-model"
---

# Random Oracle Model

The _Random Oracle Model (ROM)_ is a heuristic commonly used in cryptography to prove security of systems, which are either difficult or impossible to prove secure otherwise. In this model, all parties are given access to an oracle, which is instantiated as a random and independent function. Then, proofs argue with high probability over the choice of a random oracle, schemes remain secure.

The ROM is related to the _Random Oracle Hypothesis_ (attributed to Bennett and Gill), which conjectured that complexity-class relationships holding for almost all relativized worlds also hold unrelativized. The hypothesis was disproved by [[CCG+94 - The random oracle hypothesis is false|CCG+94]].

## Quantum random oracle model

In the _quantum random oracle model (QROM)_, every party gets a uniformly random function $H : \bits^* \to \bits^\secpar$; quantum algorithms, the adversary included, may query it in superposition through the unitary $\lvert x, y \rangle \mapsto \lvert x, y \oplus H(x) \rangle$, while honest parties query it classically — [[BDF+11 - Random Oracles in a Quantum World|BDF+11]]. A proof in the classical ROM need not carry over: some scheme is secure against adversaries with classical oracle access and insecure against superposition queries — [[BDF+11 - Random Oracles in a Quantum World|BDF+11]].

# Known Results

- [[random-oracle-hypothesis#refutation|The refutation of the ROH]]

- **[[fiat-shamir-heuristic|Fiat-Shamir]] is uninstantiable in the standard model** — Goldwasser and Kalai constructed a 3-round public-coin protocol whose Fiat-Shamir transform is existentially forgeable under every concrete hash function, even though it is secure in the ROM [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]. This shows the random oracle cannot always be replaced by a concrete function.

- [[no-fiat-shamir-and-gkr-to-snark-krs25|No fixed-construction reduction from Fiat-Shamir + GKR to SNARK]]

- [[rom-to-oihf-bh26|ROM ⇒ OIHF]]
- [[oihf-to-ot-bh26|OIHF ⇒ OT]]
- [[no-oihf-to-ot-bh26|No fully-black-box reduction from OIHF to OT]]

<!-- BEGIN GENERATED participates-in 016449ec7426 -->

## Participates in

**Builds on Random Oracle Model**

- [[qrom-to-zk-snark-cms19|QROM ⇒ zk-SNARK (Micali's construction in the QROM)]] (via [[random-oracle-model#quantum-random-oracle-model|Quantum random oracle model]])
- [[rom-to-merkle-puzzles-mer78|ROM ⇒ Merkle puzzles]]
- [[rom-to-oihf-bh26|ROM ⇒ OIHF]]
- [[rom-to-snark-mic00|ROM ⇒ SNARK (Micali's CS proofs)]]

**Barriers**

- [[no-rom-to-ke-hmo-19|No reduction from ROM to KE]]

**Proved in the Random Oracle Model**

- [[bdh-to-ibe-bf01|BDH ⇒ IBE (random oracle model)]]
- [[bilinear-pairing-and-q-dlog-to-universal-snark-gwc19|Bilinear pairing + q-DLOG ⇒ Universal SNARK (PLONK)]]
- [[ggm-to-abe-bsw07|Bilinear pairing ⇒ CP-ABE]]
- [[co-cdh-to-ds|co-CDH ⇒ DS]]
- [[dkg-and-he-to-tpke|DCR ⇒ TPKE]]
- [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]]
- [[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]]
- [[dlog-to-pcs|DLOG ⇒ PCS]]
- [[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]]
- [[fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91|Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)]]
- [[hash-function-to-pcs-bbhr18|CRHF ⇒ PCS]]
- [[hash-function-to-snark-bbhr18|CRHF ⇒ STARK]]
- [[id-and-rom-to-ds|ID ⇒ DS]]
- [[ind-cpa-kem-to-ind-cca-security|IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)]]
- [[lwe-to-ibe-gpv08|LWE ⇒ IBE (Gentry–Peikert–Vaikuntanathan, random oracle model)]]
- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ DS]]
- [[module-lwe-to-kem|Module LWE ⇒ IND-CCA KEM]]
- [[ntru-to-ds|NTRU + NTRU-SIS ⇒ DS]]
- [[ntru-to-kem|NTRU ⇒ IND-CCA KEM]]
- [[ot-to-ot-extension-iknp03|OT ⇒ OT extension (IKNP)]]
- [[pcs-to-snark|Extractable PCS ⇒ SNARK]]
- [[rsa-to-ind-cca-pke-oaep-fops01|RSA ⇒ IND-CCA PKE (RSA-OAEP)]]
- [[rsa-to-ind-cca-security|RSA ⇒ IND-CCA KEM]]
- [[sis-to-ds|SIS ⇒ DS]]
- [[sparse-learning-parity-with-noise-to-pseudorandom-correlation-generators-pcg|Sparse Learning Parity with Noise ⇒ Pseudorandom correlation generators (PCG)]]
- [[succinct-state-restoration-iop-to-transparent-succinct-argument-bcs16|Succinct state-restoration-sound IOP ⇒ STARK (BCS transform)]]
- [[tdp-to-ds-br93|TDP ⇒ DS (full-domain hash, random oracle model)]]

<!-- END GENERATED participates-in -->
