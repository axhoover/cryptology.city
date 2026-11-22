---
type: reduction
status: draft
title: "Module LWE ⇒ IND-CCA KEM"
aliases: []
id: red-module-lwe-to-kem
kind: implication
hypotheses: [module-lwe]
conclusion: ind-cca-kem
class: unstated
model: rom
source:
  - "[[BDK+18 - CRYSTALS-Kyber A CCA-Secure Module-Lattice-Based KEM|BDK+18]]"
  - "[[AAB+24 - Formally Verifying Kyber Episode V Machine-Checked IND-CCA Security and Correctness of ML-KEM in EasyCrypt|AAB+24]]"
security-loss: ""
rationale:
  class: "The IND-CCA proof goes through the Fujisaki–Okamoto transform in the random-oracle model, and no source places it in the RTV04 taxonomy."
  model: "The IND-CCA conclusion rests on a Fujisaki–Okamoto transform with implicit rejection, proved in the random-oracle model, and BDK+18 also treat the quantum random-oracle model."
---

# Module LWE ⇒ IND-CCA KEM

## Statement

Kyber is a [[key-encapsulation-mechanism|KEM]] over module lattices: a variant of the Fujisaki–Okamoto transform turns a CPA-secure public-key encryption scheme into a CCA-secure KEM, whose security is based on the hardness of [[learning-with-errors#module-lwe|Module LWE]] in the random-oracle and quantum random-oracle models — [[BDK+18 - CRYSTALS-Kyber A CCA-Secure Module-Lattice-Based KEM|BDK+18]]. ML-KEM, specified in FIPS 203 and derived from the round-three Kyber submission, applies a Fujisaki–Okamoto transform with implicit rejection to the encryption scheme K-PKE over $R_q = \ZZ_q[X]/(X^{256}+1)$, $q = 3329$, at module rank $k \in \{2, 3, 4\}$ ([[key-encapsulation-mechanism#ML-KEM|algorithms and parameter sets]]) — [[NIST24 - Module-Lattice-Based Key-Encapsulation Mechanism Standard|NIST24]] (Sections 1.1, 3.2, 6 and 8). Its correctness and [[key-encapsulation-mechanism#ind-cca-security|IND-CCA security]] in the [[random-oracle-model|random-oracle model]] are machine-checked in EasyCrypt, with concrete bounds down to a variant of Module LWE — [[AAB+24 - Formally Verifying Kyber Episode V Machine-Checked IND-CCA Security and Correctness of ML-KEM in EasyCrypt|AAB+24]].

K-PKE's secrets, like its errors, are drawn from the centered binomial distribution $D_\eta(R_q)$, not uniformly. Its key $(\mathbf{A}, \mathbf{t})$, with $\mathbf{t} = \mathbf{A}\mathbf{s} + \mathbf{e}$ for $\mathbf{A} \in R_q^{k \times k}$ expanded from a seed and $\mathbf{s}, \mathbf{e} \gets D_{\eta_1}(R_q)^k$, is a rank-$k$ Module LWE instance with $k$ samples. The ciphertext before compression, less the message encoding, is $(\mathbf{A}^\top \mathbf{y} + \mathbf{e}_1, \mathbf{t}^\top \mathbf{y} + e_2)$ for $\mathbf{y} \gets D_{\eta_1}(R_q)^k$ and $(\mathbf{e}_1, e_2) \gets D_{\eta_2}(R_q)^{k+1}$, a rank-$k$ instance with $k + 1$ samples and matrix $(\mathbf{A} \mid \mathbf{t})^\top$ — [[NIST24 - Module-Lattice-Based Key-Encapsulation Mechanism Standard|NIST24]] (Algorithms 13 and 14). For uniform $\mathbf{A}$ and fresh coins, decision Module LWE with binomial secrets at these two instances gives IND-CPA security of K-PKE — standard. AAB+24's proof combines the correctness and IND-CPA security of K-PKE, following BDK+18, with a Fujisaki–Okamoto transform with implicit rejection in the random-oracle model, formalized following [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] closely but not exactly — [[AAB+24 - Formally Verifying Kyber Episode V Machine-Checked IND-CCA Security and Correctness of ML-KEM in EasyCrypt|AAB+24]]. HHK17's transformations tolerate a base scheme with decryption errors — [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]].

## Sketch

Replace $\mathbf{t}$ by a uniform vector, using the instance with $k$ samples; then replace $(\mathbf{u}, v - \mathrm{Decompress}_1(m))$ by a uniform pair, using the instance with $k+1$ samples, uniform matrix $(\mathbf{A} \mid \mathbf{t})^\top \in R_q^{(k+1) \times k}$, secret $\mathbf{y}$ and error $(\mathbf{e}_1, e_2)$, after which the challenge ciphertext is independent of the message. For K-PKE with $\mathbf{A}$ uniform and its small elements sampled with fresh coins, an IND-CPA adversary $\calA$ thus gives distinguishers $\calD_1$ and $\calD_2$ that run $\calA$ once on the embedded instance and output $[b' = b]$, with $\Adv^{\mathrm{cpa}}_{\mathrm{K\text{-}PKE},\calA} \le 2\varepsilon_1 + 2\varepsilon_2$ for $\varepsilon_i$ the advantage of $\calD_i$ — standard.

## Notes

- ML-KEM's transform takes the shared key and the encryption coins as $(K, r) = G(m \,\|\, H(\pk))$; unlike round-three Kyber's, it does not hash the ciphertext into the shared key — [[NIST24 - Module-Lattice-Based Key-Encapsulation Mechanism Standard|NIST24]] (Algorithm 17 and Appendix C).
- FIPS 203 lists decapsulation failure rates of $2^{-138.8}$, $2^{-164.8}$ and $2^{-174.8}$ for ML-KEM-512, ML-KEM-768 and ML-KEM-1024, computed with the hash functions and the XOF modelled as uniformly random functions, and refers for the details to Theorem 1 of [[BDK+18 - CRYSTALS-Kyber A CCA-Secure Module-Lattice-Based KEM|BDK+18]] — [[NIST24 - Module-Lattice-Based Key-Encapsulation Mechanism Standard|NIST24]] (Section 3.2 and Table 1).
