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
  bootstrappable-somewhat-homomorphic-encryption: "#bootstrappable-she"
  circular-secure-bootstrappable-she: "#circular-secure-bootstrappable-she"
  additively-homomorphic-encryption: "#additively-homomorphic-encryption"
  leveled-fully-homomorphic-encryption: "#leveled-fully-homomorphic-encryption"
  multiplicatively-homomorphic-encryption: "#multiplicatively-homomorphic-encryption"
  strongly-homomorphic-encryption: "#strongly-homomorphic-encryption"
  compact-fhe: "#compact-fhe"
---

# Homomorphic encryption

A _homomorphic encryption (HE)_ scheme allows computation on encrypted data: given $\Enc(m_1)$ and $\Enc(m_2)$, one can produce $\Enc(f(m_1, m_2))$ for $f$ in some function class $\calF$, without decrypting. A _fully homomorphic encryption (FHE)_ scheme supports arbitrary polynomial-time functions. The first FHE construction was given by Gentry — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

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

A homomorphic encryption scheme is **IND-CPA secure** if the standard [[public-key-encryption|PKE]] semantic security game is satisfied: no efficient adversary can distinguish $\Enc(\pk, m_0)$ from $\Enc(\pk, m_1)$ for any $m_0, m_1$. (IND-CCA2 security is incompatible with non-trivial homomorphism: $\calA$ applies $\Eval$ to the challenge ciphertext and queries the decryption oracle on the result — folklore. IND-CCA1-secure FHE is known, e.g. from [[learning-with-errors|LWE]] in the [[random-oracle-model|ROM]] — [[CRRV17 - Chosen-Ciphertext Secure Fully Homomorphic Encryption|CRRV17]].)

# Variations

## Partially homomorphic encryption (PHE)

Supports homomorphism over a restricted class: only additions or only multiplications, but not both.

### Additively homomorphic encryption

An IND-CPA-secure scheme is **additively homomorphic** if its message space is a group $(\ZZ_M, +)$, with $M$ determined by $\pk$, its ciphertexts lie in a set $\calC_\pk$ of strings of a fixed length $\ell(\secpar)$ that contains every encryption, decryption is perfectly correct, and $\Eval(\pk, +, c_1, c_2) \in \calC_\pk$ decrypts to $\Dec(\sk, c_1) + \Dec(\sk, c_2)$ for all $c_1, c_2 \in \calC_\pk$. The constructions of [[additively-homomorphic-encryption-to-cpir-ste98|PIR]] — [[Ste98 - A New Efficient All-Or-Nothing Disclosure of Secrets Protocol|Ste98]] — and of [[additively-homomorphic-encryption-to-crhf-iko05|collision-resistant hashing]] — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]] — from such schemes use the fixed ciphertext length. Examples are Paillier's scheme from [[decisional-composite-residuosity|DCR]] — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]] — and Goldwasser–Micali over $\ZZ_2$ — [[GM84 - Probabilistic encryption|GM84]].

### Multiplicatively homomorphic encryption

Supports only multiplications, e.g. ElGamal — [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]], IND-CPA under [[decisional-diffie-hellman|DDH]] — [[TY98 - On the Security of ElGamal Based Encryption|TY98]]. Unpadded RSA is multiplicatively homomorphic but deterministic, hence not IND-CPA secure — standard.

## Somewhat homomorphic encryption (SHE)

Supports both additions and multiplications, but only up to a bounded number (bounded by the _multiplicative depth_ of the circuit), and is compact: there is a polynomial $p$ such that every ciphertext output by $\Eval$ on $f \in \calF$ has length at most $p(\secpar)$, independent of $f$ — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]. Without compactness the notion is trivial (see [[#Compact FHE]]).

### Bootstrappable SHE

An SHE scheme is **bootstrappable** if it compactly evaluates its own decryption circuit augmented by one NAND gate: for all ciphertexts $c_1, c_2$ output by $\Enc$ or $\Eval$, the circuit $\sk \mapsto \lnot\left(\Dec(\sk, c_1) \land \Dec(\sk, c_2)\right)$ lies in $\calF$, and $\Eval$ on it outputs a ciphertext of length at most the compactness bound $p(\secpar)$ — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

#### Circular-secure bootstrappable SHE

A bootstrappable SHE scheme is **circular secure** if it remains IND-CPA-secure when its public key is published together with encryptions, under that key, of the bits of its own secret key — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]. This is [[circular-security|circular security]] of the scheme itself; circular security of some other scheme does not give it.

## Leveled fully homomorphic encryption

Supports all polynomial-size circuits of depth at most $L$, where $L$ is fixed at key generation, and evaluated ciphertexts have length bounded by a polynomial in $\secpar$ and $L$, independent of the circuit's size — [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]]. Leveled FHE from [[learning-with-errors|LWE]] — [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]]; without bootstrapping — [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]].

## Fully homomorphic encryption (FHE)

Supports arbitrary polynomial-time computation via **bootstrapping**: a special homomorphic evaluation of the decryption circuit that refreshes the noise in a ciphertext. First construction based on ideal lattices — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

## Compact FHE

An FHE scheme, IND-CPA-secure and supporting every polynomial-size circuit, is **compact** if there is a polynomial $p$ such that every ciphertext output by $\Eval$ has length at most $p(\secpar)$, independent of the evaluated function $f$ — [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]]. Gentry's original FHE is compact. Without compactness the notion is trivial: from any IND-CPA-secure PKE, let $\Eval$ return $f$ together with its input ciphertexts and let decryption decrypt the inputs and evaluate $f$ — standard.

## Strongly homomorphic encryption

A bit-encryption scheme is **strongly homomorphic** for a boolean function $f : \bits^k \to \bits$ that is not constant, not a projection or its negation, and not an AND or an OR, if its evaluator for $f$ is distribution-preserving: for all $m_1, \ldots, m_k \in \bits$, the output of $\Eval(\pk, f, c_1, \ldots, c_k)$ on fresh encryptions $c_i \gets \Enc(\pk, m_i)$ is statistically close to a fresh encryption $\Enc(\pk, f(m_1, \ldots, m_k))$ — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]].

# Other results

- [[circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09|Circular-secure bootstrappable SHE ⇒ Compact FHE]]
- [[lwe-to-leveled-fully-homomorphic-encryption-bgv12|LWE ⇒ Leveled fully homomorphic encryption]]
- [[lwe-to-depir-lmw23|Ring-LWE ⇒ Unkeyed DEPIR]]
- [[dcr-to-partially-homomorphic-encryption-phe-pai99|DCR ⇒ Additively homomorphic encryption]]
- [[ddh-to-partially-homomorphic-encryption-phe-elgamal85|DDH ⇒ Multiplicatively homomorphic encryption]]
- [[he-to-re-bl13|Strongly homomorphic encryption ⇒ RE]]
- [[no-he-to-szk-bl13|No reduction from NP to compact FHE]]
- Circular security: bootstrapped FHE publishes an encryption of its own secret key — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]; security in this setting is _[[circular-security|circular security]]_. IND-CPA security does not imply it in general — [[KW16 - Circular Security Separations for Arbitrary Length Cycles from LWE|KW16]], [[AP16 - Three's Compromised Too Circular Insecurity for Any Cycle Length from (Ring-)LWE|AP16]] — and whether [[learning-with-errors|LWE]] implies it for the LWE-based FHE schemes is open.
- Single-hop FHE with IV-CCA security (strictly stronger than CCA1) in the standard model from circular-secure [[learning-with-errors|LWE]] — [[YYS25 - Fully Homomorphic Encryption with Chosen-Ciphertext Security from LWE|YYS25]]

<!-- BEGIN GENERATED participates-in cd969c294385 -->

## Participates in

**Builds on Homomorphic encryption**

- [[additively-homomorphic-encryption-to-cpir-ste98|Additively homomorphic encryption ⇒ cPIR]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[additively-homomorphic-encryption-to-crhf-iko05|Additively homomorphic encryption ⇒ CRHF]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[additively-homomorphic-encryption-to-mpc-with-preprocessing-bdoz11|Additively homomorphic encryption ⇒ MPC with preprocessing (BDOZ)]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[circular-secure-bootstrappable-she-to-bootstrappable-somewhat-homomorphic-encryption|Circular-secure bootstrappable SHE ⇒ Bootstrappable SHE]] (via [[homomorphic-encryption#circular-secure-bootstrappable-she|Circular-secure bootstrappable SHE]])
- [[circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09|Circular-secure bootstrappable SHE ⇒ Compact FHE]] (via [[homomorphic-encryption#circular-secure-bootstrappable-she|Circular-secure bootstrappable SHE]])
- [[compact-fhe-to-he|Compact FHE ⇒ HE]] (via [[homomorphic-encryption#compact-fhe|Compact FHE]])
- [[he-to-cpir|FHE ⇒ cPIR]] (via [[homomorphic-encryption#compact-fhe|Compact FHE]])
- [[he-to-mpc-with-preprocessing-spdz-etc|SHE ⇒ MPC with preprocessing (SPDZ)]] (via [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]])
- [[he-to-re-bl13|Strongly homomorphic encryption ⇒ RE]] (via [[homomorphic-encryption#strongly-homomorphic-encryption|Strongly homomorphic encryption]])
- [[mmap-to-io-gghrsw13|MMap + Leveled FHE ⇒ iO]] (via [[homomorphic-encryption#leveled-fully-homomorphic-encryption|Leveled fully homomorphic encryption]])
- [[partially-homomorphic-encryption-phe-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|Additively homomorphic encryption + Sparse LPN ⇒ SHE]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[somewhat-homomorphic-encryption-she-to-he-gen09|Bootstrappable SHE ⇒ Leveled FHE]] (via [[homomorphic-encryption#bootstrappable-she|Bootstrappable SHE]])

**Produces Homomorphic encryption**

- [[circular-secure-bootstrappable-she-to-bootstrappable-somewhat-homomorphic-encryption|Circular-secure bootstrappable SHE ⇒ Bootstrappable SHE]] (via [[homomorphic-encryption#bootstrappable-she|Bootstrappable SHE]])
- [[circular-security-and-lwe-to-he|Circular security + LWE ⇒ Compact FHE]] (via [[homomorphic-encryption#compact-fhe|Compact FHE]])
- [[circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09|Circular-secure bootstrappable SHE ⇒ Compact FHE]] (via [[homomorphic-encryption#compact-fhe|Compact FHE]])
- [[compact-fhe-to-he|Compact FHE ⇒ HE]]
- [$d$-th Composite Residuosity ⇒ Additively homomorphic encryption](d-th-composite-residuosity-to-he) (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[dcr-to-partially-homomorphic-encryption-phe-pai99|DCR ⇒ Additively homomorphic encryption]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[ddh-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|DDH + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)]] (via [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]])
- [[ddh-to-partially-homomorphic-encryption-phe-elgamal85|DDH ⇒ Multiplicatively homomorphic encryption]] (via [[homomorphic-encryption#multiplicatively-homomorphic-encryption|Multiplicatively homomorphic encryption]])
- [[lwe-to-leveled-fully-homomorphic-encryption-bgv12|LWE ⇒ Leveled fully homomorphic encryption]] (via [[homomorphic-encryption#leveled-fully-homomorphic-encryption|Leveled fully homomorphic encryption]])
- [[partially-homomorphic-encryption-phe-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|Additively homomorphic encryption + Sparse LPN ⇒ SHE]] (via [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]])
- [[qr-to-he-gm84|QR ⇒ Additively homomorphic encryption]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[somewhat-homomorphic-encryption-she-to-he-gen09|Bootstrappable SHE ⇒ Leveled FHE]] (via [[homomorphic-encryption#leveled-fully-homomorphic-encryption|Leveled fully homomorphic encryption]])

**Barriers**

- [[no-he-to-cca-security|No fixed-construction reduction from HE to IND-CCA2 Security]]
- [[no-he-to-szk-bl13|No reduction from NP to compact FHE]] (via [[homomorphic-encryption#compact-fhe|Compact FHE]])

<!-- END GENERATED participates-in -->
