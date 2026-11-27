---
type: assumption
status: draft
aliases:
  - RSA
  - RSA assumption
title: RSA Assumption
id: rsa
variants:
  strong-rsa: "#strong-rsa"
  strong-rsa-safe-primes: "#strong-rsa-with-safe-prime-moduli"
  phi-hiding: "#φ-hiding"
  low-exponent-rsa: "#low-exponent-rsa"
  rsa-safe-primes: "#rsa-with-safe-prime-moduli"
  rsa-uniform-primes: "#rsa-with-uniform-prime-moduli"
---

# RSA Assumption

The _RSA assumption_ states that the RSA function $x \mapsto x^e \bmod n$ is hard to invert: given a modulus $n = pq$, a public exponent $e$, and a uniformly random $y \in \ZZ_n^*$, no efficient adversary can find $x$ such that $x^e \equiv y \pmod{n}$ except with negligible probability.

## Assumption

The assumption is parameterized by a group generator $\GrGen$ that, on input $1^\secpar$, outputs an RSA modulus $n = pq$ (the product of two distinct primes) together with a public exponent $e$ coprime to $\phi(n) = (p-1)(q-1)$ and the corresponding private exponent $d \equiv e^{-1} \pmod{\phi(n)}$.

### RSA Problem

In the RSA game, the adversary is given an RSA instance $(n, e, y)$ and must produce the RSA inverse: an $x$ such that $x^e \equiv y \pmod{n}$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{rsa}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(n, e, d) \gets \GrGen(1^\secpar)$
\State $x \getsr \ZZ_n^*$
\State $y \gets x^e \bmod n$
\State $\hat{x} \gets \calA(1^\secpar, n, e, y)$
\Return $[\hat{x}^e \equiv y \pmod{n}]$
\end{algorithmic}
\end{algorithm}
```

**RSA is hard** for $\GrGen$ if for all efficient $\calA$,

$$
\Adv^{\text{rsa}}_{\GrGen,\calA}(\secpar) := \Pr\!\left[\Game^{\text{rsa}}_{\GrGen,\calA}(\secpar) = 1\right]
$$

is negligible. As an object, RSA denotes: for some efficient $\GrGen$ of this syntax, RSA is hard for $\GrGen$.

## Known Results

- [[rsa-to-tdp-rsa78|RSA ⇒ TDP]] — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]
- [[tdp-to-pke|TDP ⇒ PKE]] — [[GM84 - Probabilistic encryption|GM84]], [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]]
- [[rsa-to-claw-free-trapdoor-permutations|RSA ⇒ Claw-free TDP]]: for $(n, e, d) \gets \GrGen(1^\secpar)$ and $y \getsr \ZZ_n^*$, the maps $x \mapsto x^e \bmod n$ and $x \mapsto y \cdot x^e \bmod n$ are a claw-free pair of trapdoor permutations of $\ZZ_n^*$, since a claw $x_0^e \equiv y \cdot x_1^e$ gives $(x_0 x_1^{-1})^e \equiv y \pmod{n}$ — folklore.
- [[fac-to-rsa-rsa78|RSA ⇒ FAC]]: RSA hardness for [[#RSA with uniform-prime moduli|uniform-prime moduli]] implies factoring hardness, since the factors of $n$ give $\phi(n)$ and hence $d$ — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]. Recovering $d$ from $(n, e)$ is deterministic polynomial-time equivalent to [[factoring|factoring]] $n$ when $p, q$ have equal bit length and $ed \le n^2$ — [[May04 - Computing the RSA Secret Key Is Deterministic Polynomial Time Equivalent to Factoring|May04]]. Whether factoring hardness implies RSA hardness is open in the standard model; for small $e$, a straight-line reduction from factoring that makes a logarithmic number of RSA-oracle queries would itself yield a factoring algorithm ([[no-fac-to-low-exponent-rsa-bv98|No straight-line reduction from FAC to low-exponent RSA]]) — [[BV98 - Breaking RSA May Not Be Equivalent to Factoring|BV98]].
- [[rsa-to-fac-dlo24|RSA ⇔ FAC]] in the generic ring model — [[AM09 - Breaking RSA Generically Is Equivalent to Factoring|AM09]], [[DLO24 - Breaking RSA Generically Is Equivalent to Factoring, with Preprocessing|DLO24]]
- [[hardcore-predicate|Hard-core bit]]: predicting the least significant bit of $x$ from $(n, e, x^e \bmod n)$ with non-negligible advantage is probabilistic polynomial-time equivalent to inverting RSA — [[ACGS88 - RSA and Rabin Functions Certain Parts are as Hard as the Whole|ACGS88]].

# Variations

## Strong RSA

The **strong RSA assumption** strengthens the standard assumption by allowing the adversary to choose the exponent $e$ itself (subject to $e > 1$). Formally, the adversary receives $(1^\secpar, n, y)$ for $(n, e, d) \gets \GrGen(1^\secpar)$ and $y \getsr \ZZ_n^*$, and outputs a pair $(\hat{x}, \hat{e})$. **Strong RSA is hard** for $\GrGen$ if for all efficient $\calA$, $\Pr\!\left[\hat{e} > 1 \wedge \hat{x}^{\hat{e}} \equiv y \pmod{n} : (n, e, d) \gets \GrGen(1^\secpar);\ y \getsr \ZZ_n^*;\ (\hat{x}, \hat{e}) \gets \calA(1^\secpar, n, y)\right]$ is negligible. As an object, strong RSA denotes: for some efficient $\GrGen$ of the RSA syntax, strong RSA is hard for $\GrGen$. Introduced by [[BP97 - Collision-Free Accumulators and Fail-Stop Signature Schemes Without Trees|BP97]] and [[FO97 - Statistical Zero Knowledge Protocols to Prove Modular Polynomial Relations|FO97]]. With a [[hash-function#collision-resistance|collision-resistant hash]] it yields EUF-CMA [[digital-signature|signatures]] in the standard model ([[strong-rsa-to-ds|Strong RSA + CRHF ⇒ DS]]) — [[CS99 - Signature Schemes Based on the Strong RSA Assumption|CS99]]; with a division-intractable hash, hash-and-sign signatures — [[GHR99 - Secure Hash-and-Sign Signatures Without the Random Oracle|GHR99]]. It also yields statistically hiding [[commitment-scheme|commitments]] to integers ([[strong-rsa-to-com|Strong RSA ⇒ COM]]) — [[FO97 - Statistical Zero Knowledge Protocols to Prove Modular Polynomial Relations|FO97]], [[DF02 - A Statistically-Hiding Integer Commitment Scheme Based on Groups with Hidden Order|DF02]].

## Strong RSA with safe-prime moduli

Strong RSA for the generator $\GrGen$ that samples distinct uniform $\secpar$-bit primes $p', q'$ subject to the primality of $p = 2p'+1$ and $q = 2q'+1$ and outputs $n = pq$ together with an exponent pair $(e, d)$, as the generator's syntax requires; the strong-RSA adversary does not see $e$. **Strong RSA is hard for safe-prime moduli** if there is a $\PPT$ algorithm whose output on $1^\secpar$ is within negligible statistical distance of this distribution of $n$, and for all efficient $\calA$ the strong-RSA success probability above, with $n$ sampled this way and $y \getsr \ZZ_n^*$, is negligible. Rejection sampling is such an algorithm if $\secpar$-bit Sophie Germain primes have density $1/\poly(\secpar)$, which is unproven — standard.

## Φ-Hiding

The **Φ-hiding assumption** states that, given $n$ and a prime $e \le n^{1/4-\varepsilon}$, it is hard to determine whether $e \mid \phi(n)$ — [[CMS99 - Computationally Private Information Retrieval with Polylogarithmic Communication|CMS99]]; for $e > n^{1/4}$ Coppersmith's method decides it efficiently — [[KOS10 - Instantiability of RSA-OAEP under Chosen-Plaintext Attack|KOS10]]. It underlies the polylogarithmic-communication [[single-server-private-information-retrieval|single-server PIR]] of [[CMS99 - Computationally Private Information Retrieval with Polylogarithmic Communication|CMS99]] ([[hiding-to-cpir|Φ-Hiding ⇒ cPIR]]).

## Low-exponent RSA

For a fixed odd integer $e \ge 3$, such as $e = 3$, independent of $\secpar$, let $\GrGen_e$ sample distinct uniform $\secpar$-bit primes $p, q$ subject to $\gcd(e, (p-1)(q-1)) = 1$ and output $n = pq$, $e$ and $d \equiv e^{-1} \pmod{\phi(n)}$ — [[BV98 - Breaking RSA May Not Be Equivalent to Factoring|BV98]]. The condition says that $p, q \not\equiv 1 \pmod r$ for every prime $r \mid e$. By the prime number theorem for arithmetic progressions, for each such $r$ a fraction $(r-2)/(r-1) - o(1) \ge 1/2 - o(1)$ of $\secpar$-bit primes $p$ satisfy $p \not\equiv 1 \pmod r$, and a fraction $\prod_{r \mid e} (r-2)/(r-1) - o(1)$ satisfy it for every prime $r \mid e$, a positive constant since $e$ is fixed; so rejection sampling runs in expected polynomial time — standard. **Low-exponent RSA is hard for $e$** if RSA is hard for $\GrGen_e$. As an object, low-exponent RSA denotes: there is a fixed odd integer $e \ge 3$ for which RSA is hard for $\GrGen_e$.

## RSA with safe-prime moduli

For an efficient rule $R$ that, on input $1^\secpar$, an integer $\ell$ and the primes $p', q'$, outputs a prime $e > \ell$ with $\gcd(e, \phi(n)) = 1$, let $\GrGen_{R,\ell}$ sample distinct uniform $\secpar$-bit primes $p', q'$ subject to the primality of $p = 2p'+1$ and $q = 2q'+1$, set $n = pq$, compute $e \gets R(1^\secpar, \ell(\secpar), p', q')$, and output $(n, e, d)$ with $d \equiv e^{-1} \pmod{\phi(n)}$. This is the dealer's key distribution in [[threshold-signature#threshold-rsa|Shoup's threshold RSA]] for $\ell$ parties. **RSA is hard for safe-prime moduli and prime exponents greater than the number of parties** if there is such a rule $R$ for which, for every polynomial $\ell = \ell(\secpar)$, RSA is hard for $\GrGen_{R,\ell}$, and a $\PPT$ algorithm whose output on $1^\secpar$ is within negligible statistical distance of the distribution of $(p', q')$ above. Rejection sampling is such an algorithm if $\secpar$-bit Sophie Germain primes have density $1/\poly(\secpar)$, which is unproven — standard.

## RSA with uniform-prime moduli

For an efficient (possibly randomized) rule $R$ that, on input $1^\secpar$ and distinct primes $p, q$, outputs an integer $e > 1$ with $\gcd(e, (p-1)(q-1)) = 1$, let $\GrGen_R$ sample $p, q$ as in the [[factoring|factoring]] game, as independent uniform $\secpar$-bit primes, resampling $q$ while $q = p$. It then outputs $(pq, e, d)$ with $e \gets R(1^\secpar, p, q)$ and $d \equiv e^{-1} \pmod{(p-1)(q-1)}$. Its moduli are within statistical distance $\Pr[p = q]$ of those of the factoring game, and $\Pr[p = q]$, the inverse of the number of $\secpar$-bit primes, is negligible — standard. One such rule outputs a uniform prime in $(pq, 2pq)$, found by rejection sampling in expected polynomial time by the prime number theorem; it exceeds $\phi(pq)$, so it is coprime to it — standard. **RSA is hard for uniform-prime moduli** if there is such a rule $R$ for which RSA is hard for $\GrGen_R$.

# Attacks

- **Factoring**: the factors of $n$ give $d$ ([[fac-to-rsa-rsa78|RSA ⇒ FAC]]), so every factoring algorithm under [[factoring#attacks|Factoring § Attacks]] inverts RSA at the same cost plus polynomial time — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]].
- **Shor's algorithm**: a quantum computer can factor $n$ in polynomial time and thus break RSA entirely — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]
- **Wiener's attack**: if $q < p < 2q$, $1 < e < \phi(n)$ and $d < n^{1/4}/3$, then $d$ is the denominator of a convergent of the continued fraction of $e/n$, so $d$ is computed from $(n, e)$ in polynomial time. Write $ed - k\phi(n) = 1$ with $k \ge 1$. Then $\gcd(k, d) = 1$; $k < d$, since $e < \phi(n)$; and $0 < n - \phi(n) = p + q - 1 < 3\sqrt{n}$, since $(p + q)^2 < 5pq$. So $|e/n - k/d| = \big(k(n - \phi(n)) - 1\big)/(nd) < 3k/(d\sqrt{n}) < 1/(d\,n^{1/4}) < 1/(2d^2)$, using $3k < 3d < n^{1/4}$, and by Legendre's theorem on continued fractions $k/d$ is a convergent of $e/n$. There are $O(\log n)$ convergents, and a convergent $k'/d'$ with $k' \ge 1$ is tested by whether $\phi' = (ed' - 1)/k'$ is an integer and $z^2 - (n - \phi' + 1)z + n$ has two integer roots greater than $1$, which are then $p$ and $q$; the convergent $k/d$ passes, with $\phi' = \phi(n)$ — standard. The attack is due to Wiener, whose polynomial-time algorithm breaks RSA with $p$ and $q$ of the same size and $e < n$ when $d$ has at most one quarter as many bits as $n$ — [[Wie90 - Cryptanalysis of Short RSA Secret Exponents|Wie90]] (as described by [[Duj04 - Continued Fractions and RSA with Small Secret Exponent|Duj04]], Section 2, which states the form above with $e < n$).
- **Boneh–Durfee attack**: lattice reduction computes $d$ from $(n, e)$ when $d < n^{1 - 1/\sqrt{2}} \approx n^{0.292}$, under the heuristic assumption that the polynomials it obtains are algebraically independent — [[BD99 - Cryptanalysis of RSA with Private Key d Less than N^0.292|BD99]].
- **Coppersmith's method**: for a monic $f \in \ZZ[z]$ of degree $\delta$, all $z_0 \in \ZZ$ with $|z_0| < n^{1/\delta}$ and $f(z_0) \equiv 0 \pmod{n}$ are found in time polynomial in $\log n$ and $2^\delta$, so in polynomial time for fixed $\delta$ — [[Cop97 - Small Solutions to Polynomial Equations, and Low Exponent RSA Vulnerabilities|Cop97]]. For $e = 3$ it recovers $x$ from $x^3 \bmod n$ when all of $x$ but a contiguous block of fewer than $\frac{1}{3}\log_2 n$ bits is known (stereotyped messages), and it factors $n$ given the high-order $\frac{1}{4}\log_2 n$ bits of $p$ — [[Cop97 - Small Solutions to Polynomial Equations, and Low Exponent RSA Vulnerabilities|Cop97]].
- **Partial key exposure**: given $(n, e)$ and the $\lceil \frac{1}{4}\log_2 n \rceil$ least significant bits of $d$, all of $d$ is computed in time polynomial in $\log n$ and $e$, hence efficiently when $e \le \poly(\log n)$ — [[BDF98 - An Attack on RSA Given a Small Fraction of the Private Key Bits|BDF98]].
- **Håstad's broadcast attack**: given $x^e \bmod n_i$ for $e$ public keys $(n_i, e)$ with pairwise coprime moduli $n_i > x$, the Chinese Remainder Theorem yields $x^e \bmod \prod_i n_i$, which is $x^e$ over the integers, and its integer $e$-th root is $x$ — standard; [[Has85 - On Using RSA with Low Exponent in a Public Key Network|Has85]] extends the attack to messages that are known polynomial functions of one plaintext, given enough ciphertexts.
- **Attacks on RSA encryption schemes**, not on the RSA problem: textbook RSA encryption $x \mapsto x^e \bmod n$ is deterministic, hence not IND-CPA-secure as a [[public-key-encryption|PKE]] scheme ([[no-rsa-to-pke-cpa-security-textbook-rsa|No fixed-construction reduction from RSA to CPA-secure PKE (textbook RSA)]]), and malleable, since $c \cdot y^e \bmod n$ encrypts $xy \bmod n$ — standard.
- **Bleichenbacher's attack on PKCS #1 v1.5 encryption**: for a modulus $n$ of $\ell$ octets, RSAES-PKCS1-v1_5 encrypts a message $M$ of at most $\ell - 11$ octets as $c = x^e \bmod n$, where $x$ is the integer whose $\ell$-octet big-endian encoding is $\mathtt{00} \| \mathtt{02} \| \mathit{PS} \| \mathtt{00} \| M$ and $\mathit{PS}$ consists of at least eight pseudorandomly generated nonzero octets, and decryption rejects every ciphertext whose decryption does not have this form — [[MKJR16 - PKCS 1 RSA Cryptography Specifications Version 2.2|MKJR16]] (Section 7.2). With $B := 2^{8(\ell - 2)}$, every such $x$ satisfies $2B \le x < 3B$, and $c \cdot s^e \bmod n$ decrypts to $xs \bmod n$; so an oracle that accepts only ciphertexts whose decryption begins with the octets $\mathtt{00} \| \mathtt{02}$, such as one reporting whether decryption succeeds, shows whenever it accepts $c \cdot s^e \bmod n$ that $2B \le xs \bmod n < 3B$, which places $x$ in one of the intervals $[(2B + rn)/s, (3B + rn)/s)$ for an integer $r$ — standard. Bleichenbacher's adaptive chosen-ciphertext attack queries such an oracle on $c \cdot s_i^e \bmod n$ for a sequence of multipliers $s_i$ and intersects the intervals the accepted queries give until one value of $x$ remains, which decrypts $c$ — [[Ble98 - Chosen Ciphertext Attacks Against Protocols Based on the RSA Encryption Standard PKCS 1|Ble98]], as credited by [[Gar26 - A Bleichenbacher bit-by-bit oracle attack from partial message knowledge|Gar26]] (Section 4). For a conforming target ciphertext under a 1024-bit modulus, the original algorithm makes a mean of 215,000 and a median of 163,000 oracle calls, and an improved variant a mean of 49,000 and a median of 14,500 — [[BFK+12 - Efficient Padding Oracle Attacks on Cryptographic Hardware|BFK+12]]. PKCS #1 v2.2 includes RSAES-PKCS1-v1_5 only for compatibility with existing applications, requires new applications to support RSAES-OAEP ([[rsa-to-ind-cca-pke-oaep-fops01|RSA ⇒ IND-CCA PKE (RSA-OAEP)]]), and requires that an opponent cannot distinguish the decoding error conditions of RSAES-PKCS1-v1_5 decryption by error message or timing — [[MKJR16 - PKCS 1 RSA Cryptography Specifications Version 2.2|MKJR16]] (Sections 7 and 7.2.2).

<!-- BEGIN GENERATED participates-in c8e4e948ea91 -->

## Participates in

**Builds on RSA Assumption**

- [[hiding-to-cpir|Φ-Hiding ⇒ cPIR]] (via [[rsa-assumption#φ-hiding|Φ-Hiding]])
- [[low-exponent-rsa-to-rsa|Low-exponent RSA ⇒ RSA]] (via [[rsa-assumption#low-exponent-rsa|Low-exponent RSA]])
- [[phi-hiding-to-ds-kk12|Φ-Hiding ⇒ DS (RSA full-domain hash, tight)]] (via [[rsa-assumption#φ-hiding|Φ-Hiding]])
- [[phi-hiding-to-lossy-trapdoor-function-kos10|Φ-Hiding ⇒ Lossy TDF (Kiltz–O'Neill–Smith)]] (via [[rsa-assumption#φ-hiding|Φ-Hiding]])
- [[rsa-safe-primes-to-rsa|RSA with safe-prime moduli ⇒ RSA]] (via [[rsa-assumption#rsa-with-safe-prime-moduli|RSA with safe-prime moduli]])
- [[rsa-to-bit-string-tdp-rst01|RSA ⇒ TDP over bit strings]]
- [[rsa-to-claw-free-trapdoor-permutations|RSA ⇒ Claw-free TDP]]
- [[rsa-to-ds-pss-br96|RSA ⇒ DS (RSA-PSS, random oracle model)]]
- [[rsa-to-ds-hw09|RSA ⇒ DS (Hohenberger–Waters, short and stateless)]]
- [[rsa-to-fac-dlo24|RSA ⇔ FAC]] (via [[rsa-assumption#rsa-with-uniform-prime-moduli|RSA with uniform-prime moduli]])
- [[fac-to-rsa-rsa78|RSA ⇒ FAC]] (via [[rsa-assumption#rsa-with-uniform-prime-moduli|RSA with uniform-prime moduli]])
- [[rsa-to-ind-cca-pke-oaep-fops01|RSA ⇒ IND-CCA PKE (RSA-OAEP)]]
- [[rsa-to-ind-cca-security|RSA ⇒ IND-CCA KEM]]
- [[rsa-to-pke-rsa78|RSA ⇒ CPA-secure PKE]]
- [[rsa-to-tdp-rsa78|RSA ⇒ TDP]]
- [[rsa-to-threshold-rsa-sho00|RSA (safe-prime moduli) ⇒ Threshold RSA signatures (Shoup)]] (via [[rsa-assumption#rsa-with-safe-prime-moduli|RSA with safe-prime moduli]])
- [[rsa-uniform-primes-to-rsa|RSA with uniform-prime moduli ⇒ RSA]] (via [[rsa-assumption#rsa-with-uniform-prime-moduli|RSA with uniform-prime moduli]])
- [[strong-rsa-safe-primes-to-strong-rsa|Strong RSA (safe-prime moduli) ⇒ Strong RSA]] (via [[rsa-assumption#strong-rsa-with-safe-prime-moduli|Strong RSA with safe-prime moduli]])
- [[strong-rsa-to-accumulator-bp97|Strong RSA ⇒ accumulator]] (via [[rsa-assumption#strong-rsa|Strong RSA]])
- [[strong-rsa-to-com|Strong RSA ⇒ COM]] (via [[rsa-assumption#strong-rsa|Strong RSA]])
- [[strong-rsa-to-ds|Strong RSA + CRHF ⇒ DS]] (via [[rsa-assumption#strong-rsa|Strong RSA]])
- [[strong-rsa-to-dynamic-accumulator-cl02|Strong RSA (safe-prime moduli) ⇒ dynamic accumulator]] (via [[rsa-assumption#strong-rsa-with-safe-prime-moduli|Strong RSA with safe-prime moduli]])
- [[strong-rsa-to-rsa|Strong RSA ⇒ RSA]] (via [[rsa-assumption#strong-rsa|Strong RSA]])

**Produces RSA Assumption**

- [[low-exponent-rsa-to-rsa|Low-exponent RSA ⇒ RSA]]
- [[rsa-safe-primes-to-rsa|RSA with safe-prime moduli ⇒ RSA]]
- [[rsa-uniform-primes-to-rsa|RSA with uniform-prime moduli ⇒ RSA]]
- [[strong-rsa-safe-primes-to-strong-rsa|Strong RSA (safe-prime moduli) ⇒ Strong RSA]] (via [[rsa-assumption#strong-rsa|Strong RSA]])
- [[strong-rsa-to-rsa|Strong RSA ⇒ RSA]]

**Barriers**

- [[no-fac-to-low-exponent-rsa-bv98|No straight-line reduction from FAC to low-exponent RSA]] (via [[rsa-assumption#low-exponent-rsa|Low-exponent RSA]])
- [[no-rsa-to-ds-textbook-rsa|No fixed-construction reduction from RSA to DS (textbook RSA signatures)]] — circumvented by [[rsa-to-ds-pss-br96|RSA ⇒ DS (RSA-PSS, random oracle model)]], [[rsa-to-ds-hw09|RSA ⇒ DS (Hohenberger–Waters, short and stateless)]]
- [[no-rsa-to-pke-cpa-security-textbook-rsa|No fixed-construction reduction from RSA to CPA-secure PKE (textbook RSA)]] — circumvented by [[rsa-to-pke-rsa78|RSA ⇒ CPA-secure PKE]]

<!-- END GENERATED participates-in -->
