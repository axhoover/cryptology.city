---
type: reduction
status: draft
title: "LWE at sub-exponential and polynomial ratios ⇒ Bootstrappable SHE (BV11)"
aliases: []
id: red-subexponential-modulus-lwe-and-polynomial-ratio-lwe-to-bootstrappable-somewhat-homomorphic-encryption-bv11
kind: implication
hypotheses: [subexponential-modulus-lwe, polynomial-ratio-lwe]
conclusion: bootstrappable-somewhat-homomorphic-encryption
class: unstated
model: standard
source:
  - "[[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]]"
security-loss: "additive: at most twice the sum of one LWE advantage per secret key, $L + 1$ in dimension $n$ modulo $q$ for $L$ levels and one in dimension $k$ modulo $p$, plus a leftover-hash term for the challenge"
---

# LWE at sub-exponential and polynomial ratios ⇒ Bootstrappable SHE (BV11)

## Statement

If [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]] is hard, with modulus $q = 2^{n^{\varepsilon}}$ and polynomial noise, and [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]] is hard in the smaller dimension $k$ that dimension–modulus reduction switches to, there is a [[homomorphic-encryption#bootstrappable-she|bootstrappable]] somewhat homomorphic encryption scheme, hence [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled FHE]] — [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]].

## Sketch

The scheme is LWE encryption under a chain of independent secret keys $\mathbf{s}_0, \dots, \mathbf{s}_L$, one per multiplicative level. The product of two ciphertexts under $\mathbf{s}_{\ell-1}$ decrypts by a quadratic polynomial in $\mathbf{s}_{\ell-1}$, which re-linearization turns into a ciphertext under $\mathbf{s}_\ell$ using the evaluation key, encryptions under $\mathbf{s}_\ell$ of the products $\mathbf{s}_{\ell-1}[i]\,\mathbf{s}_{\ell-1}[j]$; dimension–modulus reduction finally switches, with encryptions of $\mathbf{s}_L$ under a key $\hat{\mathbf{s}}$ of dimension $k$ modulo $p = \poly(k)$, to ciphertexts whose decryption circuit has depth $O(\log k)$, within the scheme's depth once $k$ is a small enough polynomial in $n$. Each key is encrypted only under the next, so a hybrid replacing these encryptions by uniform, from those under $\hat{\mathbf{s}}$ down to those under $\mathbf{s}_1$, leaves $\mathbf{s}_0$ only in the public key and the challenge, and reduces IND-CPA security to LWE in dimension $k$ modulo $p$ (the first step) and in dimension $n$ modulo $q$ (the rest), without any circular-security assumption.

## Notes

- If the scheme is also [[homomorphic-encryption#circular-secure-bootstrappable-she|circular secure]], IND-CPA-secure given encryptions of its own secret-key bits, bootstrapping yields [[homomorphic-encryption#compact-fhe|compact FHE]] for circuits of arbitrary depth — [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]]. That circular security is an assumption about the scheme itself; whether LWE implies it is open.
- The passage from a bootstrappable scheme to leveled FHE, and with circular security to FHE, is Gentry's bootstrapping theorem ([[circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09|Circular-secure bootstrappable SHE ⇒ Compact FHE]]) — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].
- Dimension-modulus reduction shrinks the decryption circuit until the scheme is bootstrappable, replacing the squashing step of [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]] — [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]].
- The short ciphertexts give a [[single-server-private-information-retrieval|single-server PIR]] protocol with communication $\secpar \cdot \polylog(\secpar) + \log N$ bits per single-bit query for an $N$-bit database, in the public-key model and for security against $2^{\secpar}$-time attacks — [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]].
- Leveled FHE for any a-priori polynomial depth follows without bootstrapping, via modulus switching, from LWE with a modulus-to-noise ratio exponential in the depth — [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]].
- The approximate-eigenvector method gives leveled FHE from LWE, with a ratio again growing exponentially in the depth, and no evaluation key: homomorphic addition and multiplication are matrix addition and multiplication — [[GSW13 - Homomorphic Encryption from Learning with Errors Conceptually-Simpler, Asymptotically-Faster, Attribute-Based|GSW13]].
