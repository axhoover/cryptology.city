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

In the _Random Oracle Model (ROM)_, every party, the adversary included, has oracle access to one function $H : \bits^* \to \bits^{\secpar}$ sampled uniformly at random, and a scheme is secure in the ROM if for all efficient $\calA$ the advantage of $\calA$, with probability taken over the choice of $H$ and the coins of the game, is negligible — [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]]. Any polynomial output length $\ell(\secpar)$, and any constant or polynomial number of independent oracles, follow by domain separation, e.g. $H_i(x) := H(i \| x \| 1) \| \cdots \| H(i \| x \| \lceil \ell / \secpar \rceil)$ truncated to $\ell$ bits, with $i$ and the block index encoded in $\secpar$ bits each — standard.

When the ROM is the only hypothesis of a result ($\{\mathrm{ROM}\} \Rightarrow X$, or a barrier whose only hypothesis is the ROM), the adversary is computationally unbounded and limited only in its oracle queries: a notion stated for efficient adversaries is read for adversaries making $\poly(\secpar)$ queries to $H$, parallel time in a sequential notion is counted in rounds of queries, and a notion that fixes its own query count ([[merkle-puzzles|Merkle puzzles]]) keeps it — standard. On a result proved in the ROM from computational hypotheses, adversaries are efficient algorithms with oracle access to $H$, as in [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]].

The oracle $H$ can equivalently be sampled lazily, from a table $T$ that starts empty and is shared by all parties:

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$H(x)$}
\begin{algorithmic}
\If{$T[x] = \bot$}
\State $T[x] \getsr \bits^\secpar$
\EndIf
\Return $T[x]$
\end{algorithmic}
\end{algorithm}
```

Lazy sampling gives every adversary, adaptive or not, the same view as a uniform $H$ fixed in advance, because the values of a uniform $H$ at distinct points are independent and uniform: a first query to $x$ receives a uniform value independent of all earlier answers, and a repeated query the earlier answer — standard. [[GB08 - Lecture Notes on Cryptography|GB08]] (§10.5.8) describe the random oracle as this table-keeping process.

Replacing $H$ by a concrete hash function and taking the ROM proof as evidence of security for the resulting scheme is the design paradigm of [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]]; [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] call it the _random-oracle methodology_ and show that it can fail.

The ROM is related to the [[random-oracle-hypothesis|Random Oracle Hypothesis]] of [[BG81 - Relative to a random oracle A, P^A != NP^A != co-NP^A with probability 1|BG81]], which conjectured that complexity-class relationships holding for almost all relativized worlds also hold unrelativized. The hypothesis is false; one counterexample, not the first, is $\classIP^A \neq \classPSPACE^A$ for almost all oracles $A$ — [[CCG+94 - The random oracle hypothesis is false|CCG+94]].

## Programmability

A reduction or simulator **programs** the random oracle when it answers the adversary's queries to $H$ with values of its choice, for instance to embed a challenge or to make a simulated transcript consistent; the adversary's success probability carries over only while the chosen values are distributed, in its view, as those of a random oracle — standard. In the ROM as defined above the reduction simulates $H$ for the adversary, so it may program it — [[AB13 - Non Observability in the Random Oracle Model|AB13]]. The Pointcheval–Stern proof for [[fiat-shamir-heuristic|Fiat–Shamir]] signatures re-programs the oracle, and if [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] is hard, no single-instance reduction that does not program it proves [[digital-signature#schnorr-signatures|Schnorr signatures]] as hard as the discrete-logarithm problem ([[no-prime-order-dlog-to-schnorr-signature-ff13|No single-instance reduction from DLOG to Schnorr signatures in the non-programmable ROM]]) — [[FF13 - Limitations of the Meta-reduction Technique The Case of Schnorr Signatures|FF13]].

In the **non-programmable random oracle model**, $H$ is a uniformly random function fixed outside the reduction or simulator, which has oracle access to $H$ and answers each of the adversary's queries with the value of $H$; it still sees the queries it forwards. TODO: attribute the non-programmable model to Nielsen ("Separating Random Oracle Proofs from Complexity Theoretic Proofs: The Non-committing Encryption Case", CRYPTO 2002) and the notions of limited programmability to Fischlin, Lehmann, Ristenpart, Shrimpton, Stam and Tessaro ("Random Oracles with(out) Programmability", ASIACRYPT 2010); both are unread.

## Observability

A reduction or extractor **observes** the adversary's oracle queries when it sees each query the adversary makes to $H$. Simulating $H$, as in the ROM, and forwarding queries to an external $H$, as in the non-programmable model, both observe. A **non-observing** reduction does not see the adversary's queries and may still program the answers; under non-observing reductions RSA-PFDH and Schnorr signatures remain secure, while Fischlin's NIZK proof of knowledge has no non-observing online extractor — [[AB13 - Non Observability in the Random Oracle Model|AB13]]. A reduction that neither observes nor programs is a non-observing non-programming reduction — [[AB13 - Non Observability in the Random Oracle Model|AB13]].

## Global random oracle

In a composable setting, a **global random oracle** is a single random oracle to which all parties and all protocols have access, including protocols other than the one under analysis; the ROM gives no security guarantee in the presence of arbitrary protocols that use the same random oracle, while with a global random oracle and no other trusted setup there are commitment, zero-knowledge and general function-evaluation protocols with [[universal-composability-framework|universally composable]] security — [[CJS14 - Practical UC security with a Global Random Oracle|CJS14]]. The global random oracle of CJS14, a functionality of the [[universal-composability-framework#setup-assumptions|Generalized UC framework]], is non-programmable; under alternative definitions of a global random oracle, existing practical realizations of public-key encryption, non-committing encryption, commitments (among them $H(m \,\|\, r)$), Schnorr signatures and hash-and-invert signatures are GUC-secure — [[CDG+18 - The Wonderful World of Global Random Oracles|CDG+18]].

## Quantum random oracle model

In the _quantum random oracle model (QROM)_, every party gets a uniformly random function $H : \bits^* \to \bits^\secpar$; quantum algorithms, the adversary included, may query it in superposition through the unitary $\lvert x, y \rangle \mapsto \lvert x, y \oplus H(x) \rangle$, while honest parties query it classically — [[BDF+11 - Random Oracles in a Quantum World|BDF+11]]. A proof in the classical ROM need not carry over: some scheme is secure against quantum adversaries with classical oracle access and insecure against quantum adversaries making superposition queries — [[BDF+11 - Random Oracles in a Quantum World|BDF+11]]. When the QROM is the only hypothesis of a result, the adversary is a computationally unbounded quantum algorithm limited only in its oracle queries, and a notion stated for efficient adversaries is read for quantum adversaries making $\poly(\secpar)$ superposition queries to $H$ — standard.

# Known Results

- [[random-oracle-hypothesis#refutation|The refutation of the ROH]]

- **The ROM is uninstantiable in general.** A function ensemble is a family $\{f_s : \bits^* \to \bits^{\ell(\secpar)}\}_{s \in \bits^\secpar}$ computable in polynomial time, with $\omega(\log \secpar) \le \ell(\secpar) \le \poly(\secpar)$, and implementing the oracle by it samples $s \getsr \bits^\secpar$ with the keys and publishes $s$ in the public key. There is a signature scheme existentially unforgeable under chosen-message attack in the ROM, with no computational assumption, whose implementation by every function ensemble is existentially forgeable under a key-only attack and totally breakable under a chosen-message attack ([[no-hash-function-to-ds-cgh98|No fixed-construction reduction from Hash function to DS]]) — [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] (arXiv v1, Theorem 4.4). If some public-key encryption scheme is semantically secure in the ROM, some public-key encryption scheme is semantically secure in the ROM and not semantically secure under any implementation, semantic security being that of [[GM84 - Probabilistic encryption|GM84]], in which the message distribution may depend on the public key ([[no-hash-function-to-semantic-security-cgh98|No fixed-construction reduction from Hash function to semantically secure PKE]]); if some scheme is secure under adaptive chosen-ciphertext attack in the ROM, some scheme is secure under that attack in the ROM while every implementation is not semantically secure and a chosen-ciphertext attack recovers its decryption key ([[no-hash-function-to-pke-cca2-security-cgh98|No fixed-construction reduction from Hash function to CCA-secure PKE]]) — [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] (arXiv v1, Theorem 4.6 and footnote 14).

- **Equivalence with the ideal-cipher model** — a random oracle is [[indifferentiability|indifferentiably]] constructible from an [[ideal-cipher-model|ideal cipher]] [[CDMP05 - Merkle-Damgard Revisited How to Construct a Hash Function|CDMP05]], and an ideal cipher from a random oracle by a 14-round Feistel network [[HKT11 - The Equivalence of the Random Oracle Model and the Ideal Cipher Model Revisited|HKT11]]; by the composition theorem of [[MRH04 - Indifferentiability Impossibility Results on Reductions and Applications to the Random Oracle Methodology|MRH04]] the two models are equivalent for single-stage security games, and that theorem covers only single-stage games [[RSS11 - Careful with Composition Limitations of the Indifferentiability Framework|RSS11]].

- [[no-fiat-shamir-and-hash-function-to-ds-gk03|No fixed-construction reduction from Fiat-Shamir + Hash function to DS]]
- [[no-fiat-shamir-to-nizk-gk03|No fixed-construction reduction from Fiat-Shamir to NIZK]]

- [[gkr-protocol#gkr-based-succinct-arguments|Fiat–Shamir and the GKR-based succinct argument]]: for every hash function, a corresponding instantiation of the argument is not adaptively sound after the transform — [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]].

- [[oblivious-interactive-hash-function|OIHFs]] can be constructed from random oracles, and a standard-model OIHF implies [[oblivious-transfer|OT]] by a non-black-box reduction that is not defined for OIHFs using a random oracle — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]].

<!-- BEGIN GENERATED participates-in 5e4145fdf9c2 -->

## Participates in

**Builds on Random Oracle Model**

- [[hash-function-to-pcs-bbhr18|ROM ⇒ PCS (FRI)]]
- [[hash-function-to-snark-bbhr18|ROM ⇒ STARK]]
- [[qrom-to-unclonable-encryption-akl22|QROM ⇒ unclonable-indistinguishable UE]] (via [[random-oracle-model#quantum-random-oracle-model|Quantum random oracle model]])
- [[qrom-to-zk-snark-cms19|QROM ⇒ zk-SNARK (Micali's construction in the QROM)]] (via [[random-oracle-model#quantum-random-oracle-model|Quantum random oracle model]])
- [[rom-to-merkle-puzzles-mer78|ROM ⇒ Merkle puzzles]]
- [[rom-to-prf|ROM ⇒ PRF (secret-prefix hashing)]]
- [[rom-to-snark-mic00|ROM ⇒ SNARK (Micali's CS proofs)]]

**Barriers**

- [[no-bit-string-tdp-and-rom-to-pke-cca2-security-oaep-sho01a|No relativizing reduction from TDP over bit strings + ROM to CCA-secure PKE (OAEP)]] — circumvented by [[rsa-to-ind-cca-pke-oaep-fops01|RSA ⇒ IND-CCA PKE (RSA-OAEP)]]
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
- [[cdh-to-bit-string-key-exchange|CDH ⇒ KE with bit-string keys (hashed Diffie–Hellman)]]
- [[cdh-to-ind-cpa-kem|CDH ⇒ IND-CPA KEM (hashed ElGamal)]]
- [[co-cdh-star-to-multi-signature-bdn18|co-CDH ⇒ BLS multi-signatures with public-key aggregation]]
- [[co-cdh-to-aggregate-signature-bgls03|co-CDH ⇒ Aggregate signatures (BGLS)]]
- [[co-cdh-to-ds|co-CDH ⇒ BLS signatures]]
- [[dkg-and-he-to-tpke|DCR (safe-prime moduli) ⇒ TPKE]]
- [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]]
- [[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]]
- [[dlog-to-pcs|DLOG ⇒ PCS]]
- [[factoring-blum-integers-to-forward-secure-signature-bm99|Factoring ⇒ Forward-secure signature (Bellare–Miner)]]
- [[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]]
- [[id-and-rom-to-ds|ID ⇒ DS]]
- [[ind-cpa-kem-to-ind-cca-security|IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)]]
- [[lwe-to-ibe-gpv08|LWE ⇒ IBE (Gentry–Peikert–Vaikuntanathan, random oracle model)]]
- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ DS]]
- [[module-lwe-to-kem|Module LWE ⇒ IND-CCA KEM]]
- [[ntru-to-kem|NTRU ⇒ IND-CCA KEM]]
- [[omdl-and-ros-to-blind-schnorr-signature-fps20|OMDL + ROS ⇒ Blind Schnorr signatures]]
- [[omdl-to-musig2-nrs21|OMDL ⇒ MuSig2]]
- [[ot-to-ot-extension-iknp03|OT ⇒ OT extension (IKNP)]]
- [[pcs-to-snark|Extractable PCS ⇒ SNARK]]
- [[phi-hiding-to-ds-kk12|Φ-Hiding ⇒ DS (RSA full-domain hash, tight)]]
- [[pke-cpa-security-to-dpke-bbo07|CPA-secure PKE ⇒ D-PKE (Encrypt-with-Hash, random oracle model)]]
- [[pke-cpa-security-to-pke-ow-pca-hhk17|IND-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)]]
- [[pke-ow-cpa-to-pke-ow-pca-hhk17|OW-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)]]
- [[pke-ow-pca-to-ind-cca-kem-hhk17|OW-PCA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto transform U, implicit rejection)]]
- [[prime-order-cdh-to-edl-signature-gj03|Prime-order CDH ⇒ EDL signatures]]
- [[prime-order-ddh-to-katz-wang-signature-kw03|Prime-order DDH ⇒ Katz–Wang signatures]]
- [[prime-order-dlog-to-blind-okamoto-schnorr-signature-ps00|DLOG ⇒ Blind Okamoto–Schnorr signatures]]
- [[prime-order-dlog-to-eddsa-bcjz21|DLOG ⇒ EdDSA]]
- [[prime-order-dlog-to-musig-mpsw19|DLOG ⇒ MuSig]]
- [[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]]
- [[qr-to-ind-id-cpa-coc01|QR ⇒ IBE (Cocks, random oracle model)]]
- [[rsa-to-ind-cca-pke-oaep-fops01|RSA ⇒ IND-CCA PKE (RSA-OAEP)]]
- [[rsa-to-ind-cca-security|RSA ⇒ IND-CCA KEM]]
- [[rsa-to-threshold-rsa-sho00|RSA (safe-prime moduli) ⇒ Threshold RSA signatures (Shoup)]]
- [[fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91|Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)]]
- [[sis-to-ds|SIS ⇒ DS]]
- [[sparse-learning-parity-with-noise-to-pseudorandom-correlation-generators-pcg|Sparse Learning Parity with Noise ⇒ Pseudorandom correlation generators (PCG)]]
- [[succinct-state-restoration-iop-to-transparent-succinct-argument-bcs16|Succinct state-restoration-sound IOP ⇒ STARK (BCS transform)]]
- [[tdp-to-ds-br93|TDP ⇒ DS (full-domain hash, random oracle model)]]
- [[tdp-to-fixed-ring-ring-signature-rst01|TDP over bit strings ⇒ Ring signatures with fixed-ring unforgeability (Rivest–Shamir–Tauman)]]
- [[type-1-pairing-and-cdh-to-multi-signature-kosk-bol03|Type 1 pairing + CDH ⇒ Multi-signatures in the KOSK model (Boldyreva)]]
- [[type-1-pairing-and-cdh-to-multi-signature-pop-ry07|Type 1 pairing + CDH ⇒ Multi-signatures with proofs of possession]]

<!-- END GENERATED participates-in -->
