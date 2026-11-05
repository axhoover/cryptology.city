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

In the _Random Oracle Model (ROM)_, every party, the adversary included, has oracle access to one function $H : \bits^* \to \bits^{\ell(\secpar)}$ sampled uniformly at random, and a scheme is secure in the ROM if for all efficient $\calA$ the advantage of $\calA$, with probability taken over the choice of $H$ and the coins of the game, is negligible — [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]]. Replacing $H$ by a concrete hash function and taking the ROM proof as evidence of security for the resulting scheme is the design paradigm of [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]]; [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] call it the _random-oracle methodology_ and show that it can fail.

The ROM is related to the [[random-oracle-hypothesis|Random Oracle Hypothesis]] of [[BG81 - Relative to a random oracle A, P^A != NP^A != co-NP^A with probability 1|BG81]], which conjectured that complexity-class relationships holding for almost all relativized worlds also hold unrelativized. The hypothesis is false; one counterexample, not the first, is $\classIP^A \neq \classPSPACE^A$ for almost all oracles $A$ — [[CCG+94 - The random oracle hypothesis is false|CCG+94]].

## Quantum random oracle model

In the _quantum random oracle model (QROM)_, every party gets a uniformly random function $H : \bits^* \to \bits^\secpar$; quantum algorithms, the adversary included, may query it in superposition through the unitary $\lvert x, y \rangle \mapsto \lvert x, y \oplus H(x) \rangle$, while honest parties query it classically — [[BDF+11 - Random Oracles in a Quantum World|BDF+11]]. A proof in the classical ROM need not carry over: some scheme is secure against quantum adversaries with classical oracle access and insecure against quantum adversaries making superposition queries — [[BDF+11 - Random Oracles in a Quantum World|BDF+11]].

# Known Results

- [[random-oracle-hypothesis#refutation|The refutation of the ROH]]

- **The ROM is uninstantiable in general** — there are signature and encryption schemes that are secure in the ROM but insecure under every instantiation of the random oracle by an efficiently computable function family [[CGH98 - The Random Oracle Methodology Revisited|CGH98]].

- **Equivalence with the ideal-cipher model** — a random oracle is [[indifferentiability|indifferentiably]] constructible from an [[ideal-cipher-model|ideal cipher]] [[CDMP05 - Merkle-Damgard Revisited How to Construct a Hash Function|CDMP05]], and an ideal cipher from a random oracle by a 14-round Feistel network [[HKT11 - The Equivalence of the Random Oracle Model and the Ideal Cipher Model Revisited|HKT11]]; by the composition theorem of [[MRH04 - Indifferentiability Impossibility Results on Reductions and Applications to the Random Oracle Methodology|MRH04]] the two models are equivalent for single-stage security games, and that theorem covers only single-stage games [[RSS11 - Careful with Composition Limitations of the Indifferentiability Framework|RSS11]].

- [[no-fiat-shamir-and-hash-function-to-ds-gk03|No fixed-construction reduction from Fiat-Shamir + Hash function to DS]]
- [[no-fiat-shamir-to-nizk-gk03|No fixed-construction reduction from Fiat-Shamir to NIZK]]

- [[no-fiat-shamir-and-gkr-to-snark-krs25|No fixed-construction reduction from Fiat-Shamir + GKR to SNARK]]

- [[rom-to-oihf-bh26|ROM ⇒ OIHF]]
- [[oihf-to-ot-bh26|OIHF ⇒ OT]]
- [[no-oihf-to-ot-bh26|No fully-black-box reduction from OIHF to OT]]

<!-- BEGIN GENERATED participates-in 21b058c92bca -->

## Participates in

**Builds on Random Oracle Model**

- [[qrom-to-unclonable-encryption-akl22|QROM ⇒ unclonable-indistinguishable UE]] (via [[random-oracle-model#quantum-random-oracle-model|Quantum random oracle model]])
- [[qrom-to-zk-snark-cms19|QROM ⇒ zk-SNARK (Micali's construction in the QROM)]] (via [[random-oracle-model#quantum-random-oracle-model|Quantum random oracle model]])
- [[rom-to-merkle-puzzles-mer78|ROM ⇒ Merkle puzzles]]
- [[rom-to-oihf-bh26|ROM ⇒ OIHF]]
- [[rom-to-snark-mic00|ROM ⇒ SNARK (Micali's CS proofs)]]

**Barriers**

- [[no-rom-to-ke-hmo-19|No reduction from ROM to KE]]
- [[no-rom-to-pk-depir-hpy26|No oracle-free-encoding reduction from ROM to public-key DEPIR with a sublinear key]]
- [[no-rom-to-time-lock-puzzle-mmv11|No reduction from ROM to TLP]]
- [[no-rom-to-vdf-gry25|No reduction from ROM to VDF]]

**Proved in the Random Oracle Model**

- [[bdh-to-consistent-peks-bdop04|BDH ⇒ PEKS (random oracle model)]]
- [[bdh-to-ibe-bf01|BDH ⇒ IBE (random oracle model)]]
- [[bilinear-pairing-and-q-dlog-to-universal-snark-gwc19|Bilinear pairing + q-DLOG ⇒ Universal SNARK (PLONK)]]
- [[bilinear-pairing-q-sdh-and-dlin-to-cpa-anonymous-group-signature-bbs04|Bilinear pairing + q-SDH + DLIN ⇒ CPA-anonymous group signatures (Boneh–Boyen–Shacham)]]
- [[ggm-to-abe-bsw07|Bilinear pairing ⇒ CP-ABE]]
- [[co-cdh-star-to-multi-signature-bdn18|co-CDH ⇒ BLS multi-signatures with public-key aggregation]]
- [[co-cdh-to-aggregate-signature-bgls03|co-CDH ⇒ Aggregate signatures (BGLS)]]
- [[co-cdh-to-ds|co-CDH ⇒ BLS signatures]]
- [[dkg-and-he-to-tpke|DCR ⇒ TPKE]]
- [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]]
- [[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]]
- [[dlog-to-pcs|DLOG ⇒ PCS]]
- [[factoring-blum-integers-to-forward-secure-signature-bm99|Factoring ⇒ Forward-secure signature (Bellare–Miner)]]
- [[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]]
- [[hash-function-to-pcs-bbhr18|CRHF ⇒ PCS]]
- [[hash-function-to-snark-bbhr18|CRHF ⇒ STARK]]
- [[id-and-rom-to-ds|ID ⇒ DS]]
- [[ind-cpa-kem-to-ind-cca-security|IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)]]
- [[lwe-to-ibe-gpv08|LWE ⇒ IBE (Gentry–Peikert–Vaikuntanathan, random oracle model)]]
- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ DS]]
- [[module-lwe-to-kem|Module LWE ⇒ IND-CCA KEM]]
- [[ntru-to-ds|NTRU + NTRU-SIS ⇒ DS]]
- [[ntru-to-kem|NTRU ⇒ IND-CCA KEM]]
- [[omdl-and-ros-to-blind-schnorr-signature-fps20|OMDL + ROS ⇒ Blind Schnorr signatures]]
- [[omdl-to-musig2-nrs21|OMDL ⇒ MuSig2]]
- [[ot-to-ot-extension-iknp03|OT ⇒ OT extension (IKNP)]]
- [[pcs-to-snark|Extractable PCS ⇒ SNARK]]
- [[phi-hiding-to-ds-kk12|Φ-Hiding ⇒ DS (RSA full-domain hash, tight)]]
- [[pke-cpa-security-to-dpke-bbo07|CPA-secure PKE ⇒ D-PKE (Encrypt-with-Hash, random oracle model)]]
- [[prime-order-cdh-to-edl-signature-gj03|Prime-order CDH ⇒ EDL signatures]]
- [[prime-order-ddh-to-katz-wang-signature-kw03|Prime-order DDH ⇒ Katz–Wang signatures]]
- [[prime-order-dlog-to-blind-okamoto-schnorr-signature-ps00|DLOG ⇒ Blind Okamoto–Schnorr signatures]]
- [[prime-order-dlog-to-eddsa-bcjz21|DLOG ⇒ EdDSA]]
- [[prime-order-dlog-to-musig-mpsw19|DLOG ⇒ MuSig]]
- [[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]]
- [[qr-to-ind-id-cpa-coc01|QR ⇒ IBE (Cocks, random oracle model)]]
- [[rsa-to-ind-cca-pke-oaep-fops01|RSA ⇒ IND-CCA PKE (RSA-OAEP)]]
- [[rsa-to-ind-cca-security|RSA ⇒ IND-CCA KEM]]
- [[rsa-to-threshold-rsa-sho00|RSA ⇒ Threshold RSA signatures (Shoup)]]
- [[fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91|Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)]]
- [[sis-to-ds|SIS ⇒ DS]]
- [[sparse-learning-parity-with-noise-to-pseudorandom-correlation-generators-pcg|Sparse Learning Parity with Noise ⇒ Pseudorandom correlation generators (PCG)]]
- [[succinct-state-restoration-iop-to-transparent-succinct-argument-bcs16|Succinct state-restoration-sound IOP ⇒ STARK (BCS transform)]]
- [[tdp-to-ds-br93|TDP ⇒ DS (full-domain hash, random oracle model)]]
- [[type-1-pairing-and-cdh-to-multi-signature-kosk-bol03|Type 1 pairing + CDH ⇒ Multi-signatures in the KOSK model (Boldyreva)]]
- [[type-1-pairing-and-cdh-to-multi-signature-pop-ry07|Type 1 pairing + CDH ⇒ Multi-signatures with proofs of possession]]

<!-- END GENERATED participates-in -->
