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
  length-flexible-additively-homomorphic-encryption: "#length-flexible-additively-homomorphic-encryption"
  leveled-fully-homomorphic-encryption: "#leveled-fully-homomorphic-encryption"
  multiplicatively-homomorphic-encryption: "#multiplicatively-homomorphic-encryption"
  strongly-homomorphic-encryption: "#strongly-homomorphic-encryption"
  compact-fhe: "#compact-fhe"
  circular-secure-fhe: "#circular-secure-fhe"
  approximate-homomorphic-encryption: "#approximate-homomorphic-encryption"
  approximate-he-ind-cpa-d: "#ind-cpa-d-security"
  circuit-private-he-nc1: "#circuit-private-he-for-nc1"
  secret-key-xor-homomorphic-encryption: "#private-key-homomorphic-encryption"
---

# Homomorphic encryption

A _homomorphic encryption (HE)_ scheme for a class $\calF$ of functions is a public-key encryption scheme with a public evaluation algorithm that, given $f \in \calF$ and encryptions of $m_1, \ldots, m_k$, outputs a ciphertext that decrypts to $f(m_1, \ldots, m_k)$. It is _fully homomorphic (FHE)_ when $\calF$ contains every polynomial-size circuit.

## Syntax

A homomorphic encryption scheme with message space $\calM$ and function class $\calF$, each $f \in \calF$ a circuit $f : \calM^k \to \calM$ for some arity $k$, is a tuple of efficient algorithms $\HE = (\KeyGen, \Enc, \Dec, \Eval)$:

- $\KeyGen(1^\secpar) \to (\pk, \sk)$, a randomized algorithm outputting a public key, which includes any evaluation key, and a secret key,
- $\Enc(\pk, m) \to c$, a randomized algorithm encrypting a message $m \in \calM$,
- $\Dec(\sk, c) \to m$, a deterministic algorithm,
- $\Eval(\pk, f, c_1, \ldots, c_k) \to c$, a possibly randomized algorithm that takes a circuit $f \in \calF$ of arity $k$ and $k$ ciphertexts and outputs a ciphertext.

## Properties

### Correctness

$\HE$ is **correct** if $(\KeyGen, \Enc, \Dec)$ is a $(1 - \negl(\secpar))$-[[public-key-encryption#correctness|correct]] PKE scheme and for all $f \in \calF$ of arity $k$ and all $m_1, \ldots, m_k \in \calM$,

$$
\Pr\!\left[\Dec(\sk, \Eval(\pk, f, c_1, \ldots, c_k)) = f(m_1, \ldots, m_k)\right] \ge 1 - \negl(\secpar),
$$

over $(\pk, \sk) \gets \KeyGen(1^\secpar)$, $c_i \gets \Enc(\pk, m_i)$ and the coins of $\Eval$. The definition concerns $\Eval$ on fresh ciphertexts, which suffices when $\calF$ is closed under composition.

### Security

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cpa}}_{\HE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pk, \sk) \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $(m_0, m_1, \stA) \gets \calA(1^\secpar, \pk)$
\Comment{$m_0, m_1 \in \calM$, $|m_0| = |m_1|$}
\State $c^* \gets \Enc(\pk, m_b)$
\State $b' \gets \calA(c^*, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An HE scheme $\HE$ is **IND-CPA-secure** if for all admissible efficient $\calA$,

$$
\Adv^{\mathrm{cpa}}_{\HE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cpa}}_{\HE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. This is the [[public-key-encryption#cpa-security|CPA game]] of the underlying PKE scheme: $\Eval$ takes only public inputs, so $\calA$ can run it itself.

No scheme whose class $\calF$ contains a function that is neither constant nor the identity on $\calM$, after fixing its further arguments by fresh encryptions, is IND-CCA2-secure: $\calA$ applies $\Eval$ to the challenge ciphertext and queries the decryption oracle on the result ([[no-he-to-cca-security|No fixed-construction reduction from HE to IND-CCA2 Security]]) — folklore. Chosen-ciphertext notions for HE therefore stop short of IND-CCA2; see [[#IND-CCA1-secure FHE]].

# Variations

## Partially homomorphic encryption (PHE)

Supports homomorphism over a restricted class: only additions or only multiplications, but not both.

### Additively homomorphic encryption

An IND-CPA-secure scheme is **additively homomorphic** if its message space is a group $(\ZZ_M, +)$, with $M$ determined by $\pk$, its ciphertexts lie in a set $\calC_\pk$ of strings of a fixed length $\ell(\secpar)$ that contains every encryption, decryption is perfectly correct, and $\Eval(\pk, +, c_1, c_2) \in \calC_\pk$ decrypts to $\Dec(\sk, c_1) + \Dec(\sk, c_2)$ for all $c_1, c_2 \in \calC_\pk$. The constructions of [[additively-homomorphic-encryption-to-cpir-ste98|PIR]] — [[Ste98 - A New Efficient All-Or-Nothing Disclosure of Secrets Protocol|Ste98]] — and of [[additively-homomorphic-encryption-to-crhf-iko05|collision-resistant hashing]] — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]] — from such schemes use the fixed ciphertext length. Examples are Paillier's scheme from [[decisional-composite-residuosity|DCR]] — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]] — and Goldwasser–Micali over $\ZZ_2$ — [[GM84 - Probabilistic encryption|GM84]].

#### Length-flexible additively homomorphic encryption

An additively homomorphic encryption scheme is **length-flexible** if one key pair serves every length $s \ge 1$, chosen at encryption time: $\pk$ fixes integers $M_1 < M_2 < \cdots$ with $\log M_s = \Theta(s \cdot k)$ for a key-length parameter $k$, and for every $s$ polynomial in $\secpar$ the scheme run at length $s$ is additively homomorphic as above, IND-CPA security included, with message space $\ZZ_{M_s}$ and ciphertexts in $\ZZ_{M_{s+1}}$. A ciphertext at length $s$ is thus a plaintext at length $s + 1$. The Damgård–Jurik generalization of Paillier's scheme, with $M_s = N^s$ for the RSA modulus $N$, has this form, with the block length adjustable after the public key is fixed, and is as secure as Paillier's scheme — [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]]; nested encryption across lengths gives the PIR of [[length-flexible-additively-homomorphic-encryption-to-polylog-cpir-lip05|Lip05]] — [[Lip05 - An Oblivious Transfer Protocol with Log-Squared Communication|Lip05]].

### Multiplicatively homomorphic encryption

Supports only multiplications, e.g. ElGamal — [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]], IND-CPA under [[decisional-diffie-hellman|DDH]] — [[TY98 - On the Security of ElGamal Based Encryption|TY98]]. Unpadded RSA is multiplicatively homomorphic but deterministic, hence not IND-CPA secure — standard.

## Somewhat homomorphic encryption (SHE)

Supports both additions and multiplications, but only up to a bounded number (bounded by the _multiplicative depth_ of the circuit), and is compact: there is a polynomial $p$ such that every ciphertext output by $\Eval$ on $f \in \calF$ has length at most $p(\secpar)$, independent of $f$ — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]. Without compactness the notion is trivial (see [[#Compact FHE]]).

### Bootstrappable SHE

An SHE scheme is **bootstrappable** if it compactly evaluates its own decryption circuit augmented by one NAND gate: for all ciphertexts $c_1, c_2$ output by $\Enc$ or $\Eval$, the circuit $\sk \mapsto \lnot\left(\Dec(\sk, c_1) \land \Dec(\sk, c_2)\right)$ lies in $\calF$, and $\Eval$ on it outputs a ciphertext of length at most the compactness bound $p(\secpar)$ — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

#### Circular-secure bootstrappable SHE

A bootstrappable SHE scheme is **circular secure** if it remains IND-CPA-secure when its public key is published together with encryptions, under that key, of the bits of its own secret key — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]. This is [[circular-security|circular security]] of the scheme itself; circular security of some other scheme does not give it.

## Leveled fully homomorphic encryption

Supports all polynomial-size circuits of depth at most $L$, where $L$ is fixed at key generation, and evaluated ciphertexts have length bounded by a polynomial in $\secpar$ and $L$, independent of the circuit's size, a relaxation of the definition of [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]] and [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]], which require one decryption circuit for every $L$. Leveled FHE follows from [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]], together with polynomial-ratio LWE in a smaller dimension — [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]]; without bootstrapping, at a ratio exponential in the depth — [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]]; and from [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]] — [[BV14 - Lattice-based FHE as secure as PKE|BV14]].

In a scale-invariant scheme the ciphertext noise grows linearly rather than quadratically with each multiplication, the scheme's properties depend only on the ratio of the modulus to the initial noise, one modulus serves the whole evaluation, and security reduces classically to the worst-case hardness of GapSVP with a quasi-polynomial approximation factor — [[Bra12 - Fully Homomorphic Encryption without Modulus Switching from Classical GapSVP|Bra12]]; FV12 port that scheme to Ring-LWE — [[FV12 - Somewhat Practical Fully Homomorphic Encryption|FV12]]. In the approximate-eigenvector scheme there is no evaluation key, and homomorphic addition and multiplication are, for the most part, matrix addition and multiplication — [[GSW13 - Homomorphic Encryption from Learning with Errors Conceptually-Simpler, Asymptotically-Faster, Attribute-Based|GSW13]].

## Fully homomorphic encryption (FHE)

Supports arbitrary polynomial-time computation via **bootstrapping**: a special homomorphic evaluation of the decryption circuit that refreshes the noise in a ciphertext. First construction based on ideal lattices — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

Bootstrapping is the main bottleneck of known schemes; FHEW computes a bit operation and bootstraps its output in about half a second on a personal computer, under worst-case lattice assumptions together with a circular-security assumption — [[DM15 - FHEW Bootstrapping Homomorphic Encryption in Less Than a Second|DM15]]. Replacing the internal product of GSW ciphertexts by an external product between a GSW and an LWE ciphertext brings the same bootstrapping below $0.1$ seconds and its key from 1 GB to 24 MB — [[CGGI16 - Faster Fully Homomorphic Encryption Bootstrapping in Less Than 0.1 Seconds|CGGI16]]; the journal version, TFHE, reports 13 ms on one core with a 16 MB key — [[CGGI20 - TFHE Fast Fully Homomorphic Encryption Over the Torus|CGGI20]]. Asymptotically, for $2^\secpar$ security under conventional lattice assumptions, bootstrapping takes $\tilde O(\secpar)$ homomorphic operations on GSW ciphertexts, optimal up to polylogarithmic factors for schemes that encrypt one bit per ciphertext, with runtime and approximation factor both small polynomials — [[AP14 - Faster Bootstrapping with Polynomial Error|AP14]].

## Compact FHE

An FHE scheme, IND-CPA-secure and supporting every polynomial-size circuit, is **compact** if there is a polynomial $p$ such that every ciphertext output by $\Eval$ has length at most $p(\secpar)$, independent of the evaluated function $f$ — [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]]. Gentry's original FHE is compact. Without compactness the notion is trivial: from any IND-CPA-secure PKE, let $\Eval$ return $f$ together with its input ciphertexts and let decryption decrypt the inputs and evaluate $f$ — standard.

### Circular-secure FHE

A **circular-secure FHE** scheme is a [[#Compact FHE|compact FHE]] scheme that remains IND-CPA-secure when its public key is published together with polynomially many independent encryptions, under that key, of the bits of its own secret key, and that is **perfectly correct**: for every key pair output by $\KeyGen$, $\Dec(\sk, \Enc(\pk, m)) = m$ for every message $m$, and $\Dec(\sk, \Eval(\pk, f, c_1, \ldots, c_k)) = f(\Dec(\sk, c_1), \ldots, \Dec(\sk, c_k))$ for every polynomial-size circuit $f$ and all ciphertexts $c_1, \ldots, c_k$ obtained from encryptions under $\pk$ by repeated application of $\Eval$, with probability 1 over the coins of $\Enc$ and $\Eval$. Under this assumption $\classNP$ has adaptively sound NIZK arguments in the common reference string model ([[circular-secure-fhe-to-nizk-argument-for-np-cch19|Circular-secure FHE ⇒ NIZK argument for NP]]) — [[CCH+19 - Fiat-Shamir from practice to theory|CCH+19]].

## Strongly homomorphic encryption

An IND-CPA-secure public-key bit-encryption scheme is **strongly homomorphic** for a boolean function $f : \bits^k \to \bits$ that is not constant, not a projection or its negation, and not an AND or OR of literals (so not NAND or NOR either), if its evaluator for $f$ is distribution-preserving: for all $m_1, \ldots, m_k \in \bits$, the output of $\Eval(\pk, f, c_1, \ldots, c_k)$ on fresh encryptions $c_i \gets \Enc(\pk, m_i)$ is statistically close to a fresh encryption $\Enc(\pk, f(m_1, \ldots, m_k))$ — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]].

## Approximate homomorphic encryption

An **approximate homomorphic encryption** scheme has the syntax of [[#Syntax|HE]] for the class of arithmetic circuits, built from additions and multiplications, of depth at most $L$, with messages vectors of complex numbers of norm at most $1$, except that $\KeyGen(1^\secpar, 1^L, 1^p)$ also takes a precision $p$ and $\Dec$ may be randomized. It is **correct** if for all such circuits $f$ and messages $m_1, \ldots, m_k$ with $\|f(m_1, \ldots, m_k)\|_\infty \le 1$, the decryption of $\Eval(\pk, f, c_1, \ldots, c_k)$ is within $2^{-p}$ of $f(m_1, \ldots, m_k)$ in $\ell_\infty$-norm except with negligible probability, for fresh encryptions $c_i$. It is **IND-CPA-secure** as in [[#Security]].

The scheme of CKKS17 supports approximate addition and multiplication of encrypted messages together with a rescaling procedure, which truncates a ciphertext to a smaller modulus and rounds the plaintext; the bit length of the ciphertext modulus grows linearly with the depth of the evaluated circuit, and the precision lost is bounded by the depth, at most one bit more than in unencrypted floating-point arithmetic — [[CKKS17 - Homomorphic Encryption for Arithmetic of Approximate Numbers|CKKS17]]. Bootstrapping extends it from a leveled to a fully homomorphic scheme — [[CHKKS18 - Bootstrapping for Approximate Homomorphic Encryption|CHKKS18]].

### IND-CPA-D security

The adversary also sees decryptions of ciphertexts whose plaintexts it already knows: those it had encrypted, and evaluations on them of circuits it chose. Below, the oracles keep a list of triples $(m^0_j, m^1_j, c_j)$; $\calE$ encrypts $m^b$ for a pair $(m^0, m^1)$, $\calH$ evaluates a circuit $f$ on listed ciphertexts and records $f$ applied to both message tracks, and $\calD$ decrypts an entry only when its two tracks agree — [[LM21 - On the Security of Homomorphic Encryption on Approximate Numbers|LM21]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cpa\text{-}d}}_{\HE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pk, \sk) \gets \KeyGen(1^\secpar, 1^L, 1^p)$; $b \getsr \bits$; $j \gets 0$
\State $b' \gets \calA^{\calE, \calH, \calD}(1^\secpar, \pk)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calE(m^0, m^1)$}
\begin{algorithmic}
\State $j \gets j + 1$; $c_j \gets \Enc(\pk, m^b)$
\State $(m^0_j, m^1_j) \gets (m^0, m^1)$
\Return $c_j$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calH(f, j_1, \ldots, j_k)$}
\begin{algorithmic}
\State $j \gets j + 1$; $c_j \gets \Eval(\pk, f, c_{j_1}, \ldots, c_{j_k})$
\State $m^\beta_j \gets f(m^\beta_{j_1}, \ldots, m^\beta_{j_k})$ for $\beta \in \bits$
\Return $c_j$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calD(i)$}
\begin{algorithmic}
\If{$m^0_i \ne m^1_i$}
\Return $\bot$
\Comment{Only ciphertexts whose plaintext $\calA$ knows}
\EndIf
\Return $\Dec(\sk, c_i)$
\end{algorithmic}
\end{algorithm}
```

An approximate HE scheme $\HE$ is **IND-CPA$^{\mathrm{D}}$-secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{cpa\text{-}d}}_{\HE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cpa\text{-}d}}_{\HE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The restriction on $\calD$ is necessary: decrypting an entry whose tracks differ reveals $b$.

For approximate schemes IND-CPA does not capture security against passive adversaries: a passive attack on CKKS, running in expected polynomial time, recovers the secret key with high probability, and was carried out against the HEAAN, SEAL, HElib and PALISADE implementations — [[LM21 - On the Security of Homomorphic Encryption on Approximate Numbers|LM21]]. Adding to the output of decryption noise tailored to the worst-case error growth of the evaluated circuit turns any IND-CPA-secure approximate scheme into an IND-CPA$^{\mathrm{D}}$-secure one ([IND-CPA approximate HE ⇒ IND-CPA$^{\mathrm{D}}$ approximate HE](approximate-homomorphic-encryption-to-approximate-he-ind-cpa-d-lmss22)) — [[LMSS22 - Securing Approximate Homomorphic Encryption Using Differential Privacy|LMSS22]]. For exact schemes the two notions coincide when decryption fails with negligible probability — [[LM21 - On the Security of Homomorphic Encryption on Approximate Numbers|LM21]], as [[CCPSS24 - Attacks Against the IND-CPA-D Security of Exact FHE Schemes|CCPSS24]] point out; implementations of exact schemes that allow a noticeable probability of decryption failure fall to efficient IND-CPA$^{\mathrm{D}}$ distinguishing and key-recovery attacks, among them the default BFV implementation of OpenFHE — [[CCPSS24 - Attacks Against the IND-CPA-D Security of Exact FHE Schemes|CCPSS24]] — and SEAL's and OpenFHE's BFV and BGV — [[CSBB24 - On the Practical CPA-D Security of exact and Threshold FHE Schemes and Libraries|CSBB24]].

## Rate-1 and compressible FHE

The **rate** of a scheme is the ratio of plaintext length to ciphertext length. Combining an FHE scheme with linear decryption and a new high-rate linearly homomorphic encryption scheme gives, from LWE, an FHE scheme of rate $1 - \sigma$ for $\sigma = o(1)$ — [[BDGM19 - Leveraging Linear Decryption Rate-1 Fully-Homomorphic Encryption and Time-Lock Puzzles|BDGM19]]. An additively homomorphic encryption scheme based on (ring) LWE with rate $1 - \varepsilon$ for any $\varepsilon > 0$, into which many FHE ciphertexts, including ones produced by homomorphic evaluation, can be compressed, gives single-server [[single-server-private-information-retrieval|PIR]] of rate $4/9$ whose server performs about $1.5$ multiplications modulo a $50$- to $60$-bit $q$ per database byte — [[GH19 - Compressible FHE with Applications to PIR|GH19]].

## Multi-key FHE

In **multi-key FHE** each party generates its own key pair, possibly from common public parameters, and $\Eval$ takes ciphertexts encrypted under different, unrelated public keys and outputs a ciphertext that decrypts under the secret keys of all parties involved, jointly; each party's encryptions are IND-CPA-secure under its own key. The notion is due to [[LTV12 - On-the-Fly Multiparty Computation on the Cloud via Multikey Fully Homomorphic Encryption|LTV12]], who use it for multiparty computation on the cloud in which users interact only to upload their inputs and to decrypt the output. The LWE-based schemes of [[CM15 - Multi-identity and Multi-key Leveled FHE from Learning with Errors|CM15]] and [[MW16 - Two Round Multiparty Computation via Multi-key FHE|MW16]] are single-hop for keys: all relevant keys must be known at the start of the homomorphic computation; the schemes of PS16b are multi-hop for keys, so the output of a computation under one set of keys can be used in further computation — [[PS16b - Multi-key FHE from LWE, Revisited|PS16b]]. A one-round distributed decryption turns multi-key FHE into two-round MPC ([[subexponential-modulus-lwe-and-nizk-argument-for-np-to-two-round-mpc-mw16|LWE + NIZK ⇒ two-round MPC]]) — [[MW16 - Two Round Multiparty Computation via Multi-key FHE|MW16]].

## Threshold FHE

In **threshold FHE** the secret key is shared among $N$ parties: each holder of a share computes a partial decryption of an evaluated ciphertext, and partial decryptions from an authorized set of parties combine to the plaintext while revealing nothing beyond it. A threshold FHE scheme gives a universal thresholdizer, a tool for turning other cryptographic schemes into threshold ones — [[BGG+18 - Threshold Cryptosystems from Threshold Fully Homomorphic Encryption|BGG+18]].

## Circuit privacy

An HE scheme for $\calF$ is **circuit private** if an evaluated ciphertext reveals nothing about the evaluated function beyond its output and its size: there is an efficient $\Sim$ such that for all $f \in \calF$ and messages $m_1, \ldots, m_k$, the pairs $(\sk, \Eval(\pk, f, c_1, \ldots, c_k))$ and $(\sk, \Sim(1^\secpar, \pk, |f|, f(m_1, \ldots, m_k)))$ are computationally indistinguishable, for $(\pk, \sk) \gets \KeyGen(1^\secpar)$ and $c_i \gets \Enc(\pk, m_i)$. The distinguisher holds the secret key, as the party who decrypts does. The definition assumes honestly generated keys and ciphertexts; maliciously circuit-private FHE keeps the evaluated function hidden for arbitrary keys and ciphertexts, and combines a scheme without circuit privacy with a maliciously circuit-private scheme for a smaller class of circuits, by techniques akin to bootstrapping and conditional disclosure of secrets — [[OPP14 - Maliciously Circuit-Private FHE|OPP14]].

### Circuit-private HE for NC1

A variant of the GSW scheme that evaluates branching programs is circuit private as it stands, which gives circuit-private HE for $\mathsf{NC}^1$ circuits under [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]] ([[polynomial-ratio-lwe-to-circuit-private-he-nc1-bdpmw16|LWE with polynomial ratio ⇒ Circuit-private HE for NC1]]) — [[BdPMW16 - FHE Circuit Privacy Almost for Free|BdPMW16]]. For general circuits, sanitization makes the distribution of a ciphertext canonical, independent of the circuit that produced it, by alternating bootstrapping with public rerandomization; it applies to all lattice-based FHE proposed by 2016 and, unlike flooding the noise, does not degrade the security–efficiency trade-off much — [[DS16 - Sanitization of FHE Ciphertexts|DS16]].

## Private-key homomorphic encryption

A **private-key homomorphic encryption** scheme for addition modulo $2$ is an IND-CPA-secure [[symmetric-key-encryption|symmetric-key]] bit-encryption scheme with a public algorithm $\Eval$ that maps ciphertexts $c_1, \ldots, c_t$ of bits $m_1, \ldots, m_t$ to a ciphertext decrypting to $m_1 \oplus \cdots \oplus m_t$, without the key. It is **compact** if the length of an evaluated ciphertext is independent of the number $t$ of ciphertexts it was computed from — [[Rot11 - Homomorphic Encryption From Private-Key to Public-Key|Rot11]]. Nothing is required of the distribution of evaluated ciphertexts. Every compact scheme of this kind yields [[public-key-encryption|public-key encryption]] ([[secret-key-xor-homomorphic-encryption-to-pke-rot11|Compact private-key XOR-homomorphic encryption ⇒ PKE]]) — [[Rot11 - Homomorphic Encryption From Private-Key to Public-Key|Rot11]].

## IND-CCA1-secure FHE

An HE scheme is **IND-CCA1-secure** if its underlying PKE scheme is [[public-key-encryption#cca1-security|IND-CCA1-secure]]: $\calA$ may query decryption before, but not after, it receives the challenge. Gentry's basic scheme is not: a trivial lunchtime attack recovers its secret key, while a minor modification of the somewhat homomorphic scheme of Smart and Vercauteren is IND-CCA1-secure, indeed PA-1, in the standard model under a lattice-based knowledge assumption — [[LMSV11 - On CCA-Secure Somewhat Homomorphic Encryption|LMSV11]]. A generic transformation turns multi-key identity-based FHE into IND-CCA1-secure FHE; instantiated in the random oracle model, "assuming sub-exponential LWE, there is a leveled CCA1 FHE scheme in the random oracle model which is compact wrt circuit complexity", and a second instantiation uses sub-exponentially secure iO and sub-exponentially secure lossy encryption — [[CRRV17 - Chosen-Ciphertext Secure Fully Homomorphic Encryption|CRRV17]]. Notions strictly between CCA1 and CCA2 are also achievable: one-hop FHE with input-verifiable CCA (IV-CCA) security follows in the standard model from circular-secure LWE, the assumption that FHE with chosen-plaintext security already needs, through the Naor–Yung paradigm with a succinct argument for the validity of FHE ciphertexts built from batch arguments for NP — [[YYS25 - Fully Homomorphic Encryption with Chosen-Ciphertext Security from LWE|YYS25]].

# Other results

- [[circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09|Circular-secure bootstrappable SHE ⇒ Compact FHE]]
- [[lwe-to-leveled-fully-homomorphic-encryption-bgv12|LWE with sub-exponential ratio ⇒ Leveled FHE (BGV12)]]
- [[lwe-to-depir-lmw23|Ring-LWE ⇒ Unkeyed DEPIR]]
- [[dcr-to-partially-homomorphic-encryption-phe-pai99|DCR ⇒ Additively homomorphic encryption]]
- [[ddh-to-partially-homomorphic-encryption-phe-elgamal85|DDH ⇒ Multiplicatively homomorphic encryption]]
- [[he-to-re-bl13|Strongly homomorphic encryption ⇒ Statistically rerandomizable encryption]]
- [[no-he-to-szk-bl13|No reduction from NP to compact FHE]]
- Bootstrapping publishes encryptions of the scheme's own secret-key bits — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]] — and every known FHE scheme from LWE requires the encryption scheme to be [[circular-security|circular secure]] — [[MV24 - SoK Learning with Errors, Circular Security, and Fully Homomorphic Encryption|MV24]]. IND-CPA security does not give circular security by the identity map, for bit encryption ([[no-pke-cpa-security-to-bit-circular-security-rot13|Rot13]]) or for key cycles ([[no-pke-cpa-security-to-k-circular-security-ap16|AP16]], [[no-pke-cpa-security-to-k-circular-security-krw15|KRW15]]).
- [[dcr-to-length-flexible-additively-homomorphic-encryption-dj01|DCR ⇒ Length-flexible additively homomorphic encryption (Damgård–Jurik)]]
- [[polynomial-ratio-lwe-to-circuit-private-he-nc1-bdpmw16|LWE with polynomial ratio ⇒ Circuit-private HE for NC1]]
- [[secret-key-xor-homomorphic-encryption-to-pke-rot11|Compact private-key XOR-homomorphic encryption ⇒ PKE]]
- [[approximate-homomorphic-encryption-to-approximate-he-ind-cpa-d-lmss22|IND-CPA approximate HE ⇒ IND-CPA-D approximate HE (LMSS22)]]

<!-- BEGIN GENERATED participates-in a6f5164fb78f -->

## Participates in

**Builds on Homomorphic encryption**

- [[additively-homomorphic-encryption-to-cpir-ste98|Additively homomorphic encryption ⇒ cPIR]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[additively-homomorphic-encryption-to-crhf-iko05|Additively homomorphic encryption ⇒ CRHF]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[additively-homomorphic-encryption-to-mpc-with-preprocessing-bdoz11|Additively homomorphic encryption ⇒ MPC with preprocessing (BDOZ)]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[approximate-homomorphic-encryption-to-approximate-he-ind-cpa-d-lmss22|IND-CPA approximate HE ⇒ IND-CPA-D approximate HE (LMSS22)]] (via [[homomorphic-encryption#approximate-homomorphic-encryption|Approximate homomorphic encryption]])
- [[bootstrappable-somewhat-homomorphic-encryption-to-somewhat-homomorphic-encryption|Bootstrappable SHE ⇒ SHE]] (via [[homomorphic-encryption#bootstrappable-she|Bootstrappable SHE]])
- [[circular-secure-bootstrappable-she-to-bootstrappable-somewhat-homomorphic-encryption|Circular-secure bootstrappable SHE ⇒ Bootstrappable SHE]] (via [[homomorphic-encryption#circular-secure-bootstrappable-she|Circular-secure bootstrappable SHE]])
- [[circular-secure-fhe-to-compact-fhe|Circular-secure FHE ⇒ Compact FHE]] (via [[homomorphic-encryption#circular-secure-fhe|Circular-secure FHE]])
- [[circular-secure-fhe-to-nizk-argument-for-np-cch19|Circular-secure FHE ⇒ NIZK argument for NP]] (via [[homomorphic-encryption#circular-secure-fhe|Circular-secure FHE]])
- [[circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09|Circular-secure bootstrappable SHE ⇒ Compact FHE]] (via [[homomorphic-encryption#circular-secure-bootstrappable-she|Circular-secure bootstrappable SHE]])
- [[compact-fhe-to-he|Compact FHE ⇒ HE]] (via [[homomorphic-encryption#compact-fhe|Compact FHE]])
- [[he-to-cpir|FHE ⇒ cPIR]] (via [[homomorphic-encryption#compact-fhe|Compact FHE]])
- [[he-to-mpc-with-preprocessing-spdz-etc|SHE + correlated randomness ⇒ MPC with preprocessing (SPDZ)]] (via [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]])
- [[he-to-pke-cpa-security|HE ⇒ IND-CPA PKE]]
- [[he-to-re-bl13|Strongly homomorphic encryption ⇒ Statistically rerandomizable encryption]] (via [[homomorphic-encryption#strongly-homomorphic-encryption|Strongly homomorphic encryption]])
- [[length-flexible-additively-homomorphic-encryption-to-additively-homomorphic-encryption|Length-flexible additively homomorphic encryption ⇒ Additively homomorphic encryption]] (via [[homomorphic-encryption#length-flexible-additively-homomorphic-encryption|Length-flexible additively homomorphic encryption]])
- [[length-flexible-additively-homomorphic-encryption-to-polylog-cpir-lip05|Length-flexible additively homomorphic encryption ⇒ PIR with polylogarithmic communication (Lipmaa)]] (via [[homomorphic-encryption#length-flexible-additively-homomorphic-encryption|Length-flexible additively homomorphic encryption]])
- [[leveled-fully-homomorphic-encryption-to-he|Leveled FHE ⇒ HE]] (via [[homomorphic-encryption#leveled-fully-homomorphic-encryption|Leveled fully homomorphic encryption]])
- [[mmap-to-io-gghrsw13|MMap + Leveled FHE ⇒ iO]] (via [[homomorphic-encryption#leveled-fully-homomorphic-encryption|Leveled fully homomorphic encryption]])
- [[partially-homomorphic-encryption-phe-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|Additively homomorphic encryption + Sparse LPN ⇒ SHE]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[secret-key-xor-homomorphic-encryption-to-pke-rot11|Compact private-key XOR-homomorphic encryption ⇒ PKE]] (via [[homomorphic-encryption#private-key-homomorphic-encryption|Private-key homomorphic encryption]])
- [[somewhat-homomorphic-encryption-she-to-he-gen09|Bootstrappable SHE ⇒ Leveled FHE]] (via [[homomorphic-encryption#bootstrappable-she|Bootstrappable SHE]])
- [[somewhat-homomorphic-encryption-to-he|SHE ⇒ HE]] (via [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]])

**Produces Homomorphic encryption**

- [[approximate-homomorphic-encryption-to-approximate-he-ind-cpa-d-lmss22|IND-CPA approximate HE ⇒ IND-CPA-D approximate HE (LMSS22)]] (via [[homomorphic-encryption#ind-cpa-d-security|IND-CPA-D security]])
- [[bootstrappable-somewhat-homomorphic-encryption-to-somewhat-homomorphic-encryption|Bootstrappable SHE ⇒ SHE]] (via [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]])
- [[circular-secure-bootstrappable-she-to-bootstrappable-somewhat-homomorphic-encryption|Circular-secure bootstrappable SHE ⇒ Bootstrappable SHE]] (via [[homomorphic-encryption#bootstrappable-she|Bootstrappable SHE]])
- [[circular-secure-fhe-to-compact-fhe|Circular-secure FHE ⇒ Compact FHE]] (via [[homomorphic-encryption#compact-fhe|Compact FHE]])
- [[circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09|Circular-secure bootstrappable SHE ⇒ Compact FHE]] (via [[homomorphic-encryption#compact-fhe|Compact FHE]])
- [[compact-fhe-to-he|Compact FHE ⇒ HE]]
- [$d$-th Composite Residuosity ⇒ Additively homomorphic encryption](d-th-composite-residuosity-to-he) (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[dcr-to-length-flexible-additively-homomorphic-encryption-dj01|DCR ⇒ Length-flexible additively homomorphic encryption (Damgård–Jurik)]] (via [[homomorphic-encryption#length-flexible-additively-homomorphic-encryption|Length-flexible additively homomorphic encryption]])
- [[dcr-to-partially-homomorphic-encryption-phe-pai99|DCR ⇒ Additively homomorphic encryption]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[ddh-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|DDH + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)]] (via [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]])
- [[ddh-to-partially-homomorphic-encryption-phe-elgamal85|DDH ⇒ Multiplicatively homomorphic encryption]] (via [[homomorphic-encryption#multiplicatively-homomorphic-encryption|Multiplicatively homomorphic encryption]])
- [[length-flexible-additively-homomorphic-encryption-to-additively-homomorphic-encryption|Length-flexible additively homomorphic encryption ⇒ Additively homomorphic encryption]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[leveled-fully-homomorphic-encryption-to-he|Leveled FHE ⇒ HE]]
- [[lwe-to-leveled-fully-homomorphic-encryption-bgv12|LWE with sub-exponential ratio ⇒ Leveled FHE (BGV12)]] (via [[homomorphic-encryption#leveled-fully-homomorphic-encryption|Leveled fully homomorphic encryption]])
- [[lwe-to-leveled-fully-homomorphic-encryption-bv14|LWE with polynomial ratio ⇒ Leveled FHE (BV14)]] (via [[homomorphic-encryption#leveled-fully-homomorphic-encryption|Leveled fully homomorphic encryption]])
- [[partially-homomorphic-encryption-phe-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|Additively homomorphic encryption + Sparse LPN ⇒ SHE]] (via [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]])
- [[polynomial-ratio-lwe-to-circuit-private-he-nc1-bdpmw16|LWE with polynomial ratio ⇒ Circuit-private HE for NC1]] (via [[homomorphic-encryption#circuit-private-he-for-nc1|Circuit-private HE for NC1]])
- [[qr-to-he-gm84|QR ⇒ Additively homomorphic encryption]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[somewhat-homomorphic-encryption-she-to-he-gen09|Bootstrappable SHE ⇒ Leveled FHE]] (via [[homomorphic-encryption#leveled-fully-homomorphic-encryption|Leveled fully homomorphic encryption]])
- [[somewhat-homomorphic-encryption-to-he|SHE ⇒ HE]]
- [[subexponential-io-and-rerandomizable-encryption-to-he-cltv15|Sub-exponential iO + Rerandomizable encryption ⇒ Compact FHE (CLTV)]] (via [[homomorphic-encryption#compact-fhe|Compact FHE]])
- [[circular-security-and-lwe-to-he|LWE at sub-exponential and polynomial ratios ⇒ Bootstrappable SHE (BV11)]] (via [[homomorphic-encryption#bootstrappable-she|Bootstrappable SHE]])

**Barriers**

- [[no-he-to-cca-security|No fixed-construction reduction from HE to IND-CCA2 Security]]
- [[no-he-to-szk-bl13|No reduction from NP to compact FHE]] (via [[homomorphic-encryption#compact-fhe|Compact FHE]])

<!-- END GENERATED participates-in -->
