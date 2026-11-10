---
type: assumption
status: draft
aliases:
  - Circular security
  - Key-cycle security
title: Circular security
id: circular-security
variants:
  circular-security-key-cycles: "#key-cycles-of-every-length"
  bit-circular-security: "#circular-security-of-bit-encryption"
  secret-key-bit-circular-security: "#symmetric-key-bit-encryption"
---

# Circular security

An encryption scheme is _circular secure_ if it stays secure when the adversary also sees encryptions of its secret keys arranged in a cycle: a key encrypted under its own public key, or each key encrypted under the next one's.

## Assumption

Let $\PKE = (\KeyGen, \Enc, \Dec)$ be a public-key encryption scheme with secret keys in $\bits^\ell$. For $k \ge 1$ and key pairs $(\pk_j, \sk_j) \gets \KeyGen(1^\secpar)$, $j \in [k]$, the **$k$-cycle** is $(\Enc(\pk_j, \sk_{j+1}))_{j \in [k]}$ with $\sk_{k+1} := \sk_1$. The scheme, whose message space must contain $\bits^\ell$, is $k$-circular secure if it is IND-CPA-secure and the $k$-cycle is indistinguishable from encryptions of $0^\ell$ to an adversary holding the public keys — standard.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{k\text{-circ}}_{\PKE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pk_j, \sk_j) \gets \KeyGen(1^\secpar)$ for $j \in [k]$; $\sk_{k+1} \gets \sk_1$; $b \getsr \bits$
\State $c_j \gets \Enc(\pk_j, \sk_{j+1})$ for $j \in [k]$ if $b = 0$
\State $c_j \gets \Enc(\pk_j, 0^\ell)$ for $j \in [k]$ if $b = 1$
\State $b' \gets \calA(1^\secpar, \pk_1, \ldots, \pk_k, c_1, \ldots, c_k)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PKE scheme $\PKE$ is **$k$-circular secure** if it is [[public-key-encryption#cpa-security|IND-CPA-secure]] and for all efficient $\calA$,

$$
\Adv^{k\text{-circ}}_{\PKE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{k\text{-circ}}_{\PKE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

## Known Results

- For $k = 1$ and full-key encryption, IND-CPA security does not give circular security for a trivial reason: an IND-CPA-secure scheme can be modified to output its message in the clear when that message is a secret key for the public key, which a correct scheme lets the encryptor test by encrypting and decrypting random messages; in the CPA game no efficient adversary submits a secret key, so the modified scheme stays IND-CPA-secure — folklore. The separations below concern the harder cases of bit encryption and of longer cycles.
- Counterexample schemes, IND-CPA-secure but not circular secure, exist for each key-cycle length from [[indistinguishability-obfuscation|iO]] ([[no-pke-cpa-security-to-k-circular-security-krw15|KRW15]]) and, for each length, from [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]] for constant lengths and from [[learning-with-errors#ring-lwe|ring-LWE]] for polynomial lengths ([[no-pke-cpa-security-to-k-circular-security-ap16|AP16]]), with separations for arbitrary cycle lengths from LWE also in [[KW16 - Circular Security Separations for Arbitrary Length Cycles from LWE|KW16]]; for bit encryption from iO — [[KRW15 - Separations in Circular Security for Arbitrary Length Key Cycles|KRW15]]; for public-key bit encryption under an extension of SXDH to multilinear groups ([[no-pke-cpa-security-to-bit-circular-security-rot13|Rot13]]) and from LWE, via lockable obfuscation — [[GKW17c - Lockable Obfuscation|GKW17c]]; and for symmetric-key bit encryption from LWE ([[no-cpa-security-to-secret-key-bit-circular-security-gkw17a|GKW17a]]).
- For symmetric-key encryption, under one-way functions alone, $n$-weak circular (CPA) security is not implied by CCA security, for any $n$; for public-key encryption, under a number-theoretic assumption, $2$-weak circular security is not implied by CCA security — [[CGH12 - New Definitions and Separations for Circular Security|CGH12]].
- All known constructions of [[homomorphic-encryption|fully homomorphic encryption]] from LWE require the encryption scheme to be circular secure — [[MV24 - SoK Learning with Errors, Circular Security, and Fully Homomorphic Encryption|MV24]]; bootstrapping publishes encryptions of the scheme's own secret-key bits ([[homomorphic-encryption#circular-secure-bootstrappable-she|circular-secure bootstrappable SHE]]) — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

# Variations

## Key cycles of every length

A PKE scheme is **circular secure for key cycles** if it is $k$-circular secure for every polynomial $k = k(\secpar) \ge 2$. Cycles of length $1$ are left out because of the trivial separation above.

## Circular security of bit encryption

An [[public-key-encryption#cpa-security|IND-CPA-secure]] public-key encryption scheme whose message space contains $\bits$ is **circular secure for bit encryption** if the encryptions $(\Enc(\pk, \sk[i]))_{i \in [\ell]}$ of the bits of its own secret key are indistinguishable from $(\Enc(\pk, 0))_{i \in [\ell]}$ to an adversary holding $\pk$. Three seemingly distinct notions of circular security for public-key bit encryption are equivalent; in particular, an adversary that distinguishes the encryptions of the secret-key bits from encryptions of $0$ can be used to recover the secret key — [[Rot13 - On the Circular Security of Bit-Encryption|Rot13]]. It implies the property that bootstrapping asks of a scheme's own key, IND-CPA security given encryptions of its key bits ([[homomorphic-encryption#circular-secure-bootstrappable-she|circular-secure bootstrappable SHE]]), by a hybrid that first replaces the key-bit encryptions by encryptions of $0$ — standard.

## Symmetric-key bit encryption

A [[symmetric-key-encryption#cpa-security|CPA-secure]] symmetric-key bit-encryption scheme with key $k \in \bits^\ell$ is **circular secure** if $(\Enc(k, k[i]))_{i \in [\ell]}$ is indistinguishable from $(\Enc(k, 0))_{i \in [\ell]}$ to an adversary with access to an encryption oracle under $k$.

# Attacks

TODO: attacks on the circular security of specific schemes.

<!-- BEGIN GENERATED participates-in c37f797852ba -->

## Participates in

**Barriers**

- [[no-cpa-security-to-secret-key-bit-circular-security-gkw17a|No fixed-construction reduction from CPA security to circular security of symmetric-key bit encryption]] (via [[circular-security#symmetric-key-bit-encryption|Symmetric-key bit encryption]])
- [[no-pke-cpa-security-to-bit-circular-security-rot13|No fixed-construction reduction from IND-CPA security to circular security of bit encryption]] (via [[circular-security#circular-security-of-bit-encryption|Circular security of bit encryption]])
- [[no-pke-cpa-security-to-k-circular-security-ap16|No fixed-construction reduction from IND-CPA security to circular security for key cycles (LWE)]] (via [[circular-security#key-cycles-of-every-length|Key cycles of every length]])
- [[no-pke-cpa-security-to-k-circular-security-krw15|No fixed-construction reduction from IND-CPA security to circular security for key cycles (iO)]] (via [[circular-security#key-cycles-of-every-length|Key cycles of every length]])

<!-- END GENERATED participates-in -->
