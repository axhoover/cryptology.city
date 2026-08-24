---
type: primitive
status: stub
aliases:
  - HE
  - FHE
  - Homomorphic encryption
  - Fully homomorphic encryption
title: Homomorphic encryption
id: he
variants:
  somewhat-homomorphic-encryption: "#somewhat-homomorphic-encryption-she"
  additively-homomorphic-encryption: "#partially-homomorphic-encryption-phe"
  leveled-fully-homomorphic-encryption: "#leveled-fully-homomorphic-encryption"
  linearly-homomorphic-pke: "#partially-homomorphic-encryption-phe"
  multiplicatively-homomorphic-encryption: "#partially-homomorphic-encryption-phe"
---

# Homomorphic encryption

A _homomorphic encryption (HE)_ scheme allows computation on encrypted data: given $\Enc(m_1)$ and $\Enc(m_2)$, one can produce $\Enc(f(m_1, m_2))$ for some function class $f$, without decrypting. A _fully homomorphic encryption (FHE)_ scheme supports arbitrary polynomial-time functions. The first FHE construction was given by Gentry — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

## Syntax

A _homomorphic encryption scheme_ is a tuple of efficient algorithms $\mathsf{HE} = (\KeyGen, \Enc, \Dec, \Eval)$ with respect to message space $\calM$ and a supported function class $\calF$:

- $\KeyGen(1^\secpar) \to (\pk, \sk),$ outputs a public key and secret key,
- $\Enc(\pk, m) \to c,$ encrypts a message $m \in \calM$ under the public key,
- $\Dec(\sk, c) \to m,$ decrypts a ciphertext under the secret key,
- $\Eval(\pk, f, c_1, \ldots, c_k) \to c,$ homomorphically evaluates $f \in \calF$ on ciphertexts, producing $c$ such that $\Dec(\sk, c) = f(m_1, \ldots, m_k)$.

## Properties

### Correctness

For all $m_1, \ldots, m_k \in \calM$ and all $f \in \calF$, decryption of the evaluated ciphertext returns the correct output:
$$\Pr\!\left[\Dec(\sk, \Eval(\pk, f, \Enc(\pk, m_1), \ldots, \Enc(\pk, m_k))) = f(m_1, \ldots, m_k)\right] \ge 1 - \negl(\secpar).$$

### Security

A homomorphic encryption scheme is **IND-CPA secure** if the standard [[public-key-encryption|PKE]] semantic security game is satisfied: no efficient adversary can distinguish $\Enc(\pk, m_0)$ from $\Enc(\pk, m_1)$ for any $m_0, m_1$. (CCA security is incompatible with homomorphism.)

# Variations

## Partially homomorphic encryption (PHE)

Supports homomorphism over a restricted class: only additions (e.g., Paillier from [[decisional-composite-residuosity|DCR]]) or only multiplications (e.g., unpadded RSA), but not both.

## Somewhat homomorphic encryption (SHE)

Supports both additions and multiplications, but only up to a bounded number (bounded by the _multiplicative depth_ of the circuit).

## Leveled fully homomorphic encryption

Supports all polynomial-size circuits of a-priori bounded depth (set at key generation time), without bootstrapping. First efficient construction from [[learning-with-errors|LWE]] — [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]].

## Fully homomorphic encryption (FHE)

Supports arbitrary polynomial-time computation via **bootstrapping**: a special homomorphic evaluation of the decryption circuit that refreshes the noise in a ciphertext. First construction based on ideal lattices — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

## Compact FHE

An FHE scheme is **compact** if the ciphertext and the evaluation circuit's output have bounded size, independent of the circuit being evaluated. Gentry's original FHE is compact.

# Other results

- [[circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09|Circular security + Somewhat homomorphic encryption (SHE) ⇒ HE]]
- [[lwe-to-leveled-fully-homomorphic-encryption-bgv12|LWE ⇒ Leveled fully homomorphic encryption]]
- [[lwe-to-depir-lmw23|LWE ⇒ DEPIR]]
- [[dcr-to-partially-homomorphic-encryption-phe-pai99|DCR ⇒ Partially homomorphic encryption (PHE)]]
- [[rsa-to-partially-homomorphic-encryption-phe-rsa78|RSA ⇒ Partially homomorphic encryption (PHE)]]
- [[he-to-re-bl13|HE ⇒ RE]]
- [[no-he-to-szk-bl13|No reduction from HE to SZK]]
- Circular security: FHE schemes often need to encrypt their own secret key; the assumption that this is secure is called _circular security_ and is not implied by standard assumptions

<!-- BEGIN GENERATED participates-in 601301307e28 -->
## Participates in

**Builds on Homomorphic encryption**

- [[dkg-and-he-to-tpke|DKG + HE ⇒ TPKE]]
- [[he-to-mpc-with-preprocessing-spdz-etc|HE ⇒ MPC with preprocessing (SPDZ, etc.)]]
- [[he-to-re-bl13|HE ⇒ RE]]

**Produces Homomorphic encryption**

- [[circular-security-and-lwe-to-he|Circular security + LWE ⇒ HE]]
- [[circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09|Circular security + Somewhat homomorphic encryption (SHE) ⇒ HE]]
- [[d-th-composite-residuosity-to-he|$d$-th Composite Residuosity ⇒ HE]]
- [[dcr-to-he-pai99|DCR ⇒ HE]]
- [[qr-to-he-gm84|QR ⇒ HE]]
- [[somewhat-homomorphic-encryption-she-to-he-gen09|Somewhat homomorphic encryption (SHE) ⇒ HE]]

**Barriers**

- [[no-he-to-cca-security|No reduction from HE to CCA Security]]
- [[no-he-to-szk-bl13|No reduction from HE to SZK]]
<!-- END GENERATED participates-in -->
