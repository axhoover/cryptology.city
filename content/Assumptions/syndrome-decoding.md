---
type: assumption
status: draft
aliases:
  - SD
  - Syndrome decoding
  - Decoding random linear codes
title: Syndrome decoding
id: syndrome-decoding
variants:
  goppa-code-indistinguishability: "#goppa-code-indistinguishability"
  mceliece-ow-cpa: "#one-wayness-of-mceliece-encryption"
---

# Syndrome decoding

The _syndrome decoding (SD)_ assumption states that, given a uniformly random parity-check matrix $\mathbf{H} \in \FF_2^{(n-k) \times n}$ and the syndrome $\mathbf{H}\mathbf{e}$ of a uniformly random vector $\mathbf{e}$ of Hamming weight $w$, no efficient algorithm finds a weight-$w$ vector with that syndrome.

## Assumption

The assumption is parameterized by a code length $n$, a dimension $k$ (rate $R = k/n$), and an error weight $w$. Write $\mathrm{wt}(\mathbf{e})$ for the Hamming weight and $S_{n,w} := \{\mathbf{e} \in \FF_2^n : \mathrm{wt}(\mathbf{e}) = w\}$. The kernel of $\mathbf{H}$ is a random binary linear code of length $n$ and, except with probability at most $2^{-k}$, dimension $k$; finding $\mathbf{e}$ from $\mathbf{H}\mathbf{e}$ is decoding $\mathbf{c} + \mathbf{e}$ for any codeword $\mathbf{c}$ of that code — standard.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sd}}_{n,k,w,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{H} \getsr \FF_2^{(n-k) \times n}$; $\mathbf{e} \getsr S_{n,w}$
\State $\mathbf{y} := \mathbf{H}\mathbf{e}$
\State $\mathbf{e}' \gets \calA(1^\secpar, \mathbf{H}, \mathbf{y})$
\Return $[\mathbf{e}' \in S_{n,w} \wedge \mathbf{H}\mathbf{e}' = \mathbf{y}]$
\end{algorithmic}
\end{algorithm}
```

**SD is hard** for $(n, k, w)$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{sd}}_{n,k,w,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{sd}}_{n,k,w,\calA}(\secpar) = 1\right]
$$

is negligible. The adversary wins with any weight-$w$ solution. When $\binom{n}{w} < 2^{n-k}$, below the Gilbert–Varshamov bound, the solution is typically unique; above it a typical syndrome has many weight-$w$ preimages — standard. Two regimes are in use: $w$ linear in $n$, and sublinear $w$, as in McEliece encryption below.

## Known Results

### Worst-case hardness

The decision problem — given $\mathbf{H}$, $\mathbf{y}$ and $w$, is there $\mathbf{e}$ with $\mathrm{wt}(\mathbf{e}) \le w$ and $\mathbf{H}\mathbf{e} = \mathbf{y}$ — is NP-complete, as is the problem of computing the weights of a linear code — [[BMvT78 - On the Inherent Intractability of Certain Coding Problems|BMvT78]].

### Relation to LPN

$m$ samples of [[learning-parity-with-noise|LPN]] in dimension $k$ with noise rate $\varepsilon$ are a noisy codeword $\mathbf{A}\mathbf{s} + \mathbf{e}$ of the random code spanned by the columns of $\mathbf{A} \in \FF_2^{m \times k}$. Multiplying by a parity-check matrix $\mathbf{H}$ of that code ($\mathbf{H}\mathbf{A} = \mathbf{0}$) maps it to the syndrome $\mathbf{H}\mathbf{e}$, so search LPN is syndrome decoding with length $m$, dimension $k$, and Bernoulli noise in place of fixed-weight noise. Conditioned on $\mathrm{wt}(\mathbf{e}) = w$, Bernoulli noise is uniform on $S_{m,w}$ — standard.

### Constructions

- If SD is hard at suitable parameters, there is a [[pseudorandom-generator|PRG]] each application of which yields a linear number of output bits in quadratic time ([[syndrome-decoding-to-prg-fs96|SD ⇒ PRG]]) — [[FS96 - An Efficient Pseudo-Random Generator Provably as Secure as Syndrome Decoding|FS96]].
- SD and [[#Goppa code indistinguishability|Goppa code indistinguishability]] together make McEliece encryption one-way ([[syndrome-decoding-and-goppa-code-indistinguishability-to-mceliece-ow-cpa|SD + Goppa code indistinguishability ⇒ One-wayness of McEliece encryption]]) — folklore.
- Padding the plaintext with a random bit string makes McEliece and Niederreiter encryption IND-CPA without random oracles, assuming Goppa code indistinguishability and the pseudorandomness that LPN implies by a result of Katz and Shin — [[NIKM08 - Semantic Security for the McEliece Cryptosystem without Random Oracles|NIKM08]].

# Variations

## Goppa code indistinguishability

A binary Goppa code $\Gamma(L, g)$ is given by a support $L$ of $n$ distinct elements of $\FF_{2^m}$ and an irreducible polynomial $g \in \FF_{2^m}[x]$ of degree $t$; it has dimension $k \ge n - mt$ and an efficient decoder correcting $t$ errors — standard. McEliece key generation samples such a code with generator matrix $\mathbf{G} \in \FF_2^{k \times n}$, an invertible $\mathbf{S} \in \FF_2^{k \times k}$ and an $n \times n$ permutation matrix $\mathbf{P}$, and publishes $\hat{\mathbf{G}} = \mathbf{S}\mathbf{G}\mathbf{P}$ — [[McE78 - A Public-Key Cryptosystem Based on Algebraic Coding Theory|McE78]]. The assumption states that $\hat{\mathbf{G}}$ is indistinguishable from a uniform matrix.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{goppa}}_{n,m,t,\calA}(\secpar)$}
\begin{algorithmic}
\State Sample $\mathbf{G}, \mathbf{S}, \mathbf{P}$ as in McEliece key generation
\State $\hat{\mathbf{G}}_0 := \mathbf{S}\mathbf{G}\mathbf{P}$; $\hat{\mathbf{G}}_1 \getsr \FF_2^{k \times n}$
\State $b \getsr \bits$
\State $b' \gets \calA(1^\secpar, \hat{\mathbf{G}}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

**Goppa codes are indistinguishable** for $(n, m, t)$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{goppa}}_{n,m,t,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{goppa}}_{n,m,t,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. Indistinguishability of permuted binary Goppa codes from random codes is assumed in the security reduction of the CFS signature scheme — [[CFS01 - How to Achieve a McEliece-Based Digital Signature Scheme|CFS01]]. It is false at high rate ([[#Attacks|Attacks]]).

## One-wayness of McEliece encryption

McEliece encryption maps $\mathbf{m} \in \FF_2^k$ to $\mathbf{c} = \mathbf{m}\hat{\mathbf{G}} + \mathbf{e}$ for $\mathbf{e} \getsr S_{n,t}$; the key holder decodes $\mathbf{c}\mathbf{P}^{-1} = (\mathbf{m}\mathbf{S})\mathbf{G} + \mathbf{e}\mathbf{P}^{-1}$ with the Goppa decoder and multiplies by $\mathbf{S}^{-1}$ — [[McE78 - A Public-Key Cryptosystem Based on Algebraic Coding Theory|McE78]]. One-wayness asks to recover a uniform $\mathbf{m}$ from $(\hat{\mathbf{G}}, \mathbf{c})$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{mce\text{-}ow}}_{n,m,t,\calA}(\secpar)$}
\begin{algorithmic}
\State Sample $\mathbf{G}, \mathbf{S}, \mathbf{P}$ as in McEliece key generation; $\hat{\mathbf{G}} := \mathbf{S}\mathbf{G}\mathbf{P}$
\State $\mathbf{m} \getsr \FF_2^k$; $\mathbf{e} \getsr S_{n,t}$
\State $\mathbf{c} := \mathbf{m}\hat{\mathbf{G}} + \mathbf{e}$
\State $\hat{\mathbf{m}} \gets \calA(1^\secpar, \hat{\mathbf{G}}, \mathbf{c})$
\Return $[\hat{\mathbf{m}} = \mathbf{m}]$
\end{algorithmic}
\end{algorithm}
```

**McEliece encryption is one-way** for $(n, m, t)$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{mce\text{-}ow}}_{n,m,t,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{mce\text{-}ow}}_{n,m,t,\calA}(\secpar) = 1\right]
$$

is negligible.

The scheme is not IND-CPA: a Goppa code correcting $t$ errors has minimum distance at least $2t + 1$, so $\mathbf{c} + \mathbf{m}_0\hat{\mathbf{G}}$ has weight $t$ if and only if $\mathbf{c}$ encrypts $\mathbf{m}_0$ — standard. Niederreiter's dual scheme publishes a scrambled parity-check matrix $\hat{\mathbf{H}}$ and encrypts a message encoded as $\mathbf{e} \in S_{n,t}$ to $\hat{\mathbf{H}}\mathbf{e}$ — [[Nie86 - Knapsack-Type Cryptosystems and Algebraic Coding Theory|Nie86]]; inverting it on a uniform $\hat{\mathbf{H}}$ is SD — standard.

# Attacks

- **Information-set decoding.** Prange's algorithm picks a random set $I$ of $n - k$ coordinates with $\mathbf{H}_I$ invertible and outputs $\mathbf{H}_I^{-1}\mathbf{y}$ on $I$ and $\mathbf{0}$ elsewhere — [[Pra62 - The Use of Information Sets in Decoding Cyclic Codes|Pra62]]. It succeeds when $\mathbf{e}$ is supported on $I$, with probability $\binom{n-k}{w}/\binom{n}{w}$ per trial — standard. Stern's variant allows a few errors on the complementary information set, split in two halves and matched by a birthday collision — [[Ste88 - A Method for Finding Codewords of Small Weight|Ste88]]. Representation techniques bring information-set decoding to time $2^{0.0494n}$ for half-distance decoding — [[BJMM12 - Decoding Random Binary Linear Codes in 2n20 How 1 + 1 = 0 Improves Information Set Decoding|BJMM12]].
- **Distinguishing high-rate Goppa codes.** There is a polynomial-time distinguisher for alternant and Goppa codes of sufficiently high rate over any field; it distinguishes the public keys of the CFS signature scheme for all parameters considered secure, and some McEliece parameters — [[FGO+13 - A Distinguisher for High-Rate McEliece Cryptosystems|FGO+13]]. It refutes [[#Goppa code indistinguishability|Goppa code indistinguishability]] at those rates only, and is a distinguisher, not a key-recovery or decryption attack — [[FGO+13 - A Distinguisher for High-Rate McEliece Cryptosystems|FGO+13]].

<!-- BEGIN GENERATED participates-in e32eef44848f -->

## Participates in

**Builds on Syndrome decoding**

- [[syndrome-decoding-and-goppa-code-indistinguishability-to-mceliece-ow-cpa|SD + Goppa code indistinguishability ⇒ One-wayness of McEliece encryption]]
- [[syndrome-decoding-to-prg-fs96|SD ⇒ PRG]]

**Produces Syndrome decoding**

- [[syndrome-decoding-and-goppa-code-indistinguishability-to-mceliece-ow-cpa|SD + Goppa code indistinguishability ⇒ One-wayness of McEliece encryption]] (via [[syndrome-decoding#one-wayness-of-mceliece-encryption|One-wayness of McEliece encryption]])

<!-- END GENERATED participates-in -->
