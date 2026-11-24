---
type: reduction
status: draft
title: "RSA ⇒ IND-CCA PKE (RSA-OAEP)"
aliases: []
id: red-rsa-to-ind-cca-pke-oaep-fops01
kind: implication
hypotheses: [rsa]
conclusion: pke-cca2-security
class: unstated
model: rom
source:
  - "[[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]]"
security-loss: "quadratic: for an IND-CCA adversary with advantage $\\varepsilon$ and running time $T$, the RSA inverter succeeds with probability about $\\varepsilon^2/4$ in time about $T^2$"
rationale:
  model: "The proof models the two hash functions G and H of the OAEP padding as random oracles."
  security-loss: "The inverter applies the adversary twice, which squares its success probability."
---

# RSA ⇒ IND-CCA PKE (RSA-OAEP)

## Statement

Let $\Gen$ generate a [[trapdoor-permutation#trapdoor-permutations-over-bit-strings|trapdoor permutation over bit strings]] $(f, \td) \gets \Gen(1^\secpar)$ with domain $\bits^k$, $k = k(\secpar)$, and let $k_0, k_1 \ge 1$ be functions of $\secpar$ with $n := k - k_0 - k_1 \ge 1$. OAEP over $f$, relative to oracles $G : \bits^{k_0} \to \bits^{k - k_0}$ and $H : \bits^{k - k_0} \to \bits^{k_0}$, has public key $f$, secret key $\td$, message space $\bits^n$ and the encryption and decryption below, which pad $m$ with $k_1$ zero bits, mask the result with $G$ of a uniform seed $r$, mask $r$ with $H$ of the masked block, and reject a ciphertext whose padding bits are not zero — [[BR94 - Optimal Asymmetric Encryption|BR94]] (Section 6).

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\Enc^{G,H}(f, m)$}
\begin{algorithmic}
\State $r \getsr \bits^{k_0}$
\State $s \gets (m \| 0^{k_1}) \oplus G(r)$; $t \gets r \oplus H(s)$
\Return $\Eval(f, s \| t)$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Dec^{G,H}(\td, c)$}
\begin{algorithmic}
\State $s \| t \gets \Invert(\td, c)$
\Comment{$|s| = k - k_0$ and $|t| = k_0$}
\State $r \gets t \oplus H(s)$; $m \| z \gets s \oplus G(r)$
\Comment{$|m| = n$ and $|z| = k_1$}
\If{$z = 0^{k_1}$}
\Return $m$
\EndIf
\Return $\bot$
\end{algorithmic}
\end{algorithm}
```

OAEP is perfectly correct: $\Invert$ returns $s \| t$, so $\Dec$ recomputes $t \oplus H(s) = r$ and $s \oplus G(r) = m \| 0^{k_1}$ — standard. RSA-OAEP takes $f$ to be the RSA function $x \mapsto x^e \bmod N$ of the [[rsa-assumption|RSA assumption]], for a modulus $N$ of $k$ bits, with $s \| t$ read as an integer; since a $k$-bit string can exceed $N$, [[BR94 - Optimal Asymmetric Encryption|BR94]] (Section 7) resample $r$ until $s \| t$ lies in $\ZZ_N^*$.

In the [[random-oracle-model|random oracle model]], with $G$ and $H$ uniformly random functions that the adversary may also query, and with $k_0, k_1 = \omega(\log \secpar)$, OAEP over $f$ is [[public-key-encryption#cca-security|IND-CCA2-secure]] if $f$ is partial-domain one-way, meaning that recovering the part $s$ of a uniform preimage $s \| t$ is hard: for all efficient $\calA$,

$$
\Pr\!\left[\calA(1^\secpar, f, \Eval(f, s \| t)) = s : (f, \td) \gets \Gen(1^\secpar),\ s \getsr \bits^{k - k_0},\ t \getsr \bits^{k_0}\right]
$$

is negligible — [[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]]; [[MKJR16 - PKCS 1 RSA Cryptography Specifications Version 2.2|MKJR16]] (Section 7.1) states this hypothesis as hardness of partially inverting the primitive. For the RSA function, partial-domain one-wayness is equivalent to one-wayness when $s$ is a sufficiently large part of the preimage: lattice reduction turns an algorithm that computes such a part into an RSA inverter that runs it twice. So under the RSA assumption RSA-OAEP is IND-CCA2-secure in the random oracle model, with a reduction that is not tight — [[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]]; [[MKJR16 - PKCS 1 RSA Cryptography Specifications Version 2.2|MKJR16]] (Section 7.1) credits the lattice step to FOPS01.

## Notes

- The seed length must be superlogarithmic: for $k_0 = O(\log \secpar)$, the adversary that recomputes $\Enc^{G,H}(f, m_0)$ under each of the $2^{k_0} \le \poly(\secpar)$ seeds and outputs $b' = 0$ exactly when one of them equals the challenge ciphertext wins the IND-CPA game with probability 1, since by perfect correctness no encryption of $m_0$ equals an encryption of $m_1 \ne m_0$ — standard.
- The equivalence needs a long $s$: the inverter that outputs a uniform $s' \getsr \bits^{k - k_0}$ succeeds with probability exactly $2^{-(k - k_0)}$, which is at least $\secpar^{-c}$ when $k - k_0 \le c \log_2 \secpar$, so for $k - k_0 = O(\log \secpar)$ no permutation is partial-domain one-way and the equivalence fails whenever RSA is one-way — standard.
- For an IND-CCA adversary with advantage $\varepsilon$ and running time $T$, the RSA inverter succeeds with probability about $\varepsilon^2/4$ in time about $T^2$, since it applies the adversary twice — [[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]], with the bounds as [[MKJR16 - PKCS 1 RSA Cryptography Specifications Version 2.2|MKJR16]] (Section 7.1) states them. For RSAES-OAEP of PKCS #1 v2.2, whose encoded message begins with eight fixed zero bits that the variant analysed by FOPS01 lacks, the success probability is about $\varepsilon^2/2^{18}$ — [[MKJR16 - PKCS 1 RSA Cryptography Specifications Version 2.2|MKJR16]] (Section 7.1).
- RSAES-OAEP encodes a message $M$ for an $\ell$-octet modulus as $\mathtt{00} \| \mathit{maskedSeed} \| \mathit{maskedDB}$, with data block $\mathit{lHash} \| \mathit{PS} \| \mathtt{01} \| M$ in place of $m \| 0^{k_1}$, where $\mathit{lHash}$ is the hash of a label and $\mathit{PS}$ is a string of zero octets — [[MKJR16 - PKCS 1 RSA Cryptography Specifications Version 2.2|MKJR16]] (Section 7.1.1). The leading zero octet keeps the encoding below $2^{8(\ell - 1)} \le N$, so no resampling is needed — standard.
- [[BR94 - Optimal Asymmetric Encryption|BR94]] prove OAEP over every trapdoor permutation semantically secure (Theorem 6.1) and plaintext-aware (Theorem 6.2) in the random oracle model. That notion of plaintext awareness implies security against non-adaptive chosen-ciphertext attack but not IND-CCA2 security — [[MKJR16 - PKCS 1 RSA Cryptography Specifications Version 2.2|MKJR16]] (Section 7.1).
- For a general trapdoor permutation the IND-CCA2 claim has no relativizing proof: relative to an oracle, some trapdoor permutation makes OAEP fail IND-CCA2 security in the random oracle model ([[no-bit-string-tdp-and-rom-to-pke-cca2-security-oaep-sho01a|No relativizing reduction from TDP over bit strings + ROM to CCA-secure PKE (OAEP)]]) — [[Sho01a - OAEP Reconsidered|Sho01a]]. The security of RSA-OAEP rests on algebraic properties of the RSA function rather than on the security of general OAEP — [[Sho01a - OAEP Reconsidered|Sho01a]].
