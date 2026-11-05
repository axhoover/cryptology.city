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
  semi-homomorphic-encryption: "#semi-homomorphic-encryption"
  strongly-homomorphic-encryption: "#strongly-homomorphic-encryption"
  compact-fhe: "#compact-fhe"
  circular-secure-fhe: "#circular-secure-fhe"
  approximate-homomorphic-encryption: "#approximate-homomorphic-encryption"
  statically-approximate-homomorphic-encryption: "#statically-approximate-he"
  approximate-he-ind-cpa-d: "#ind-cpa-d-security"
  circuit-private-he-nc1: "#circuit-private-he-for-nc1"
  secret-key-xor-homomorphic-encryption: "#compact-private-key-homomorphic-encryption"
---

# Homomorphic encryption

A _homomorphic encryption (HE)_ scheme for a class $\calF$ of functions is an IND-CPA-secure [[public-key-encryption|public-key encryption]] scheme with a public evaluation algorithm that, given $f \in \calF$ and encryptions of $m_1, \ldots, m_k$, outputs a ciphertext of length bounded independently of $f$ that decrypts to $f(m_1, \ldots, m_k)$, where $\calF$ contains functions of every polynomial arity that depend on all their arguments. It is _fully homomorphic (FHE)_ when $\calF$ contains every polynomial-size circuit.

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

over $(\pk, \sk) \gets \KeyGen(1^\secpar)$, $c_i \gets \Enc(\pk, m_i)$ and the coins of $\Eval$. The definition concerns $\Eval$ on fresh ciphertexts only (single-hop correctness); it does not require $\Eval$ applied to evaluated ciphertexts to decrypt correctly.

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

is negligible. This is the [[public-key-encryption#cpa-security|CPA game]] of the underlying PKE scheme: $\Eval$ takes only public inputs, so $\calA$ can run it itself. A homomorphic encryption scheme is required to be correct and IND-CPA-secure, and $\Eval$ to be compact for a class $\calF$ that contains, for every polynomial $k$ and all large enough $\secpar$, a $k(\secpar)$-ary function whose value depends on all its arguments: there is a polynomial $p$ with $|\Eval(\pk, f, c_1, \ldots, c_k)| \le p(\secpar)$ for every $f \in \calF$. Without this, every IND-CPA-secure PKE is HE for the projections $(m_1, \ldots, m_k) \mapsto m_1$, with $\Eval(\pk, f, c_1, \ldots, c_k) := c_1$ — standard. Compact fully homomorphic encryption below inherits these requirements, and leveled FHE meets them with its depth bound fixed to $L = \secpar$; additively and multiplicatively homomorphic encryption meet them for sums or products of $k$ messages, computed by iterating the binary $\Eval$, whose outputs stay in $\calC_\pk$, of fixed length; semi-homomorphic and somewhat homomorphic encryption, circuit-private HE for $\mathrm{NC}^1$, approximate, strongly homomorphic and private-key homomorphic encryption are defined separately.

An HE scheme is not IND-CCA2-secure when a binary $f \in \calF$ and inputs $x, w, z, m_0$ with $f(x, w) \ne x$, $f(m_0, z) \ne f(x, z)$, $|m_0| = |x|$ and $|z| = |w|$ can be computed from $\pk$ in polynomial time and the scheme decrypts correctly, except with negligible probability, on fresh and evaluated encryptions of inputs so computed (as under perfect correctness, or when $f$ and the inputs depend on $1^\secpar$ only), as for additively homomorphic encryption and for FHE: $\calA$ applies $\Eval$ for $f$ to the challenge ciphertext and a fresh encryption of $z$ and, unless the result is the challenge ciphertext, queries the decryption oracle on it ([[no-he-to-cca-security|No fixed-construction reduction from HE to IND-CCA2 Security]]) — folklore. Chosen-ciphertext notions for such schemes, FHE included (its class contains the XOR of two bits, with $x = z = 0$ and $w = m_0 = 1$), therefore stop short of IND-CCA2; see [[#IND-CCA1-secure FHE]].

# Variations

## Partially homomorphic encryption (PHE)

Supports homomorphism over a restricted class: only additions or only multiplications, but not both.

### Additively homomorphic encryption

An IND-CPA-secure scheme is **additively homomorphic** if its message space is a group $(\ZZ_M, +)$, with $M \ge 2$ determined by $\pk$, its ciphertexts lie in a set $\calC_\pk$ of strings of a fixed length $\ell(\secpar)$ that contains every encryption, decryption is perfectly correct, and a deterministic $\Eval(\pk, +, c_1, c_2) \in \calC_\pk$ decrypts to $\Dec(\sk, c_1) + \Dec(\sk, c_2)$ for all $c_1, c_2 \in \calC_\pk$. The constructions of [[additively-homomorphic-encryption-to-cpir-ste98|PIR]] — [[Ste98 - A New Efficient All-Or-Nothing Disclosure of Secrets Protocol|Ste98]] — and of [[additively-homomorphic-encryption-to-crhf-iko05|collision-resistant hashing]] — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]] — from such schemes use the fixed ciphertext length. Examples are Paillier's scheme from [[decisional-composite-residuosity|DCR]] — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]] — and Goldwasser–Micali over $\ZZ_2$ — [[GM84 - Probabilistic encryption|GM84]].

#### Length-flexible additively homomorphic encryption

An additively homomorphic encryption scheme is **length-flexible** if one key pair serves every length $s \ge 1$, chosen at encryption time: $\pk$ fixes integers $M_1 < M_2 < \cdots$ with $\log M_s = \Theta(s \cdot k)$ for a key-length parameter $k$, and for every $s$ polynomial in $\secpar$ the scheme run at length $s$ is additively homomorphic as above, IND-CPA security included, with message space $\ZZ_{M_s}$ and ciphertexts in $\ZZ_{M_{s+1}}$. A ciphertext at length $s$ is thus a plaintext at length $s + 1$. The Damgård–Jurik generalization of Paillier's scheme, with $M_s = N^s$ for the RSA modulus $N$, has this form, with the block length adjustable after the public key is fixed, and is as secure as Paillier's scheme — [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]]; nested encryption across lengths gives the PIR of [[length-flexible-additively-homomorphic-encryption-to-polylog-cpir-lip05|Lip05]] — [[Lip05 - An Oblivious Transfer Protocol with Log-Squared Communication|Lip05]].

### Semi-homomorphic encryption

A **semi-homomorphic encryption** scheme modulo $p$, for an integer $p \ge 2$ given to key generation, is an IND-CPA-secure public-key scheme meeting the definition of BDOZ11, a relaxed notion of homomorphic encryption: encryption accepts every integer plaintext $x$ and is additively homomorphic, and decryption is required to return the correct result modulo $p$ only if $x$ is numerically small enough, within bounds the definition fixes — [[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]]. Fresh encryptions of $x \in \{0, \ldots, p - 1\}$ are required to decrypt to $x$ with probability $1 - \negl(\secpar)$, as in [[public-key-encryption#correctness|PKE correctness]]. Unlike [[#Additively homomorphic encryption|additively homomorphic encryption]], it need not decrypt every sum. BDOZ11 give instances based on lattices, subset sum and factoring, and a zero-knowledge proof of plaintext knowledge for any semi-homomorphic scheme, which their [[additively-homomorphic-encryption-to-mpc-with-preprocessing-bdoz11|MPC with preprocessing]] uses — [[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]].

### Multiplicatively homomorphic encryption

An IND-CPA-secure scheme is **multiplicatively homomorphic** if its message space is a group $(\GG, \cdot)$ with $|\GG| \ge 2$, determined by $\pk$, its ciphertexts lie in a set $\calC_\pk$ of strings of a fixed length $\ell(\secpar)$ that contains every encryption, decryption is perfectly correct, and a deterministic $\Eval(\pk, \times, c_1, c_2) \in \calC_\pk$ decrypts to $\Dec(\sk, c_1) \cdot \Dec(\sk, c_2)$ for all $c_1, c_2 \in \calC_\pk$; without the fixed ciphertext length the notion is met by any perfectly correct IND-CPA-secure PKE whose message space is a group, with $\Eval$ returning the pair of its inputs and $\Dec$ multiplying their decryptions — folklore. ElGamal is an example — [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]], IND-CPA under [[decisional-diffie-hellman|DDH]] — [[TY98 - On the Security of ElGamal Based Encryption|TY98]]. Unpadded RSA has this homomorphism but is deterministic, hence not IND-CPA-secure and not multiplicatively homomorphic in this sense — standard.

## Somewhat homomorphic encryption (SHE)

A **somewhat homomorphic** scheme supports additions and multiplications up to a bounded degree: $\KeyGen(1^\secpar, 1^T)$ takes a bound $T$, any polynomial in $\secpar$, and for some $d = d(\secpar) \ge 2$ the class $\calF_T$ contains every sum of at most $T$ products of at most $d$ messages; for every such $T$ the scheme is correct and IND-CPA-secure; and it is compact: there is a polynomial $p$, independent of $T$, such that every ciphertext output by $\Eval$ on $f \in \calF_T$ has length at most $p(\secpar)$. A scheme whose $\KeyGen$ takes no bound meets this by ignoring it. Without compactness the evaluator that returns $f$ with its input ciphertexts meets the definition (see [[#Compact FHE]]). Gentry's bootstrapping starts from a somewhat homomorphic scheme — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

### Bootstrappable SHE

An SHE scheme is **bootstrappable** if it compactly evaluates its own decryption circuit augmented by one NAND gate: for all ciphertexts $c_1, c_2$ output by $\Enc$ or $\Eval$, the circuit $\sk \mapsto \lnot\left(\Dec(\sk, c_1) \land \Dec(\sk, c_2)\right)$ lies in $\calF_T$ for a polynomial $T$ fixed by the scheme, and $\Eval$ on it outputs a ciphertext of length at most the compactness bound $p(\secpar)$ — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

#### Circular-secure bootstrappable SHE

A bootstrappable SHE scheme is **circular secure** if it remains IND-CPA-secure when its public key is published together with encryptions, under that key, of the bits of its own secret key — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]. Its correctness must also hold for every key pair output by $\KeyGen$: for all ciphertexts $c_1, c_2$ output by $\Enc$ or $\Eval$ under $\pk$ and every encryption under $\pk$ of the bits of $\sk$, $\Eval$ on the augmented decryption circuit outputs a ciphertext that decrypts under $\sk$ to $\lnot(\Dec(\sk, c_1) \land \Dec(\sk, c_2))$, as bootstrapping with one key evaluates on key-dependent inputs — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]. The security property is one of the scheme itself, implied by its [[circular-security#circular-security-of-bit-encryption|circular security for bit encryption]] — standard; circular security of some other scheme does not give it.

## Leveled fully homomorphic encryption

Supports all polynomial-size circuits of depth at most $L$, where $\KeyGen(1^\secpar, 1^L)$ takes the depth bound $L$, any polynomial in $\secpar$, and correctness and IND-CPA security hold for every such $L$, and evaluated ciphertexts have length bounded by a polynomial in $\secpar$ and $L$, independent of the circuit's size, a relaxation of the definition of [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]] and [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]], which require one decryption circuit for every $L$. Leveled FHE follows from [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]], together with polynomial-ratio LWE in a smaller dimension — [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]]; without bootstrapping, at a ratio exponential in the depth — [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]]; and from [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]] — [[BV14 - Lattice-based FHE as secure as PKE|BV14]].

Brakerski's tensoring technique makes the ciphertext noise grow linearly rather than quadratically with each multiplication, and gives a scale-invariant scheme: its properties depend only on the ratio of the modulus to the initial noise, one modulus serves the whole evaluation, and its security reduces classically to the worst-case hardness of GapSVP with a quasi-polynomial approximation factor — [[Bra12 - Fully Homomorphic Encryption without Modulus Switching from Classical GapSVP|Bra12]]; FV12 port that scheme to Ring-LWE — [[FV12 - Somewhat Practical Fully Homomorphic Encryption|FV12]]. In the approximate-eigenvector scheme there is no evaluation key, and homomorphic addition and multiplication are, for the most part, matrix addition and multiplication — [[GSW13 - Homomorphic Encryption from Learning with Errors Conceptually-Simpler, Asymptotically-Faster, Attribute-Based|GSW13]].

## Fully homomorphic encryption (FHE)

An FHE scheme evaluates every polynomial-size circuit compactly ([[#Compact FHE]]). The lattice-based schemes do so by **bootstrapping**: a homomorphic evaluation of the decryption circuit that refreshes the noise in a ciphertext. First construction based on ideal lattices — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

Bootstrapping is the main bottleneck of known schemes; FHEW computes a bit operation and bootstraps its output in about half a second on a personal computer, under worst-case lattice assumptions together with a circular-security assumption — [[DM15 - FHEW Bootstrapping Homomorphic Encryption in Less Than a Second|DM15]]. Replacing the internal product of GSW ciphertexts by an external product between a GSW and an LWE ciphertext brings the same bootstrapping below $0.1$ seconds and its key from 1 GB to 24 MB — [[CGGI16 - Faster Fully Homomorphic Encryption Bootstrapping in Less Than 0.1 Seconds|CGGI16]]; the journal version, TFHE, reports 13 ms on one core with a 16 MB key — [[CGGI20 - TFHE Fast Fully Homomorphic Encryption Over the Torus|CGGI20]]. Asymptotically, for $2^\secpar$ security under conventional lattice assumptions, bootstrapping takes $\tilde O(\secpar)$ homomorphic operations on GSW ciphertexts, optimal up to polylogarithmic factors for schemes that encrypt one bit per ciphertext, with runtime and approximation factor both small polynomials — [[AP14 - Faster Bootstrapping with Polynomial Error|AP14]].

## Compact FHE

A **compact FHE** scheme is an HE scheme for the class of all polynomial-size circuits: there is a polynomial $p$ such that every ciphertext output by $\Eval$ has length at most $p(\secpar)$, independent of the evaluated circuit $f$ — [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]]. FHE on this page means compact FHE; Gentry's original scheme is one if its bootstrappable SHE scheme is [[#Circular-secure bootstrappable SHE|circular secure]] — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]. Without compactness the notion is trivial: from any IND-CPA-secure PKE, let $\Eval$ return $f$ together with its input ciphertexts and let decryption decrypt the inputs and evaluate $f$ — standard.

### Circular-secure FHE

A **circular-secure FHE** scheme is a [[#Compact FHE|compact FHE]] scheme that remains IND-CPA-secure when its public key is published together with polynomially many independent encryptions, under that key, of the bits of its own secret key, and that is **perfectly correct**: for every key pair output by $\KeyGen$, $\Dec(\sk, \Enc(\pk, m)) = m$ for every message $m$, and $\Dec(\sk, \Eval(\pk, f, c_1, \ldots, c_k)) = f(\Dec(\sk, c_1), \ldots, \Dec(\sk, c_k))$ for every polynomial-size circuit $f$ and all ciphertexts $c_1, \ldots, c_k$ obtained from encryptions under $\pk$ by repeated application of $\Eval$, with probability 1 over the coins of $\Enc$ and $\Eval$. Under this assumption $\classNP$ has adaptively sound NIZK arguments in the common reference string model ([[circular-secure-fhe-to-nizk-argument-for-np-cch19|Circular-secure FHE ⇒ NIZK argument for NP]]) — [[CCH+19 - Fiat-Shamir from practice to theory|CCH+19]].

## Strongly homomorphic encryption

An IND-CPA-secure public-key bit-encryption scheme is **strongly homomorphic** for a boolean function $f : \bits^k \to \bits$ that is not constant, not a projection or its negation, and not an AND or OR of literals (so not NAND or NOR either), if its evaluator for $f$ is distribution-preserving: for all $m_1, \ldots, m_k \in \bits$, the output of $\Eval(\pk, f, c_1, \ldots, c_k)$ on fresh encryptions $c_i \gets \Enc(\pk, m_i)$ is statistically close to a fresh encryption $\Enc(\pk, f(m_1, \ldots, m_k))$ — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]].

## Approximate homomorphic encryption

An **approximate homomorphic encryption** scheme has the syntax of [[#Syntax|HE]] for the class of arithmetic circuits, built from additions and multiplications, of depth at most $L$, with messages vectors of complex numbers of $\ell_\infty$-norm at most $1$, except that $\KeyGen(1^\secpar, 1^L, 1^p)$ also takes a precision $p$ and $\Dec$ may be randomized. It is **correct** if every ciphertext obtained from fresh encryptions $c_i \gets \Enc(\pk, m_i)$ by repeated application of $\Eval$ decrypts to within $2^{-p}$ of $f(m_1, \ldots, m_k)$ in $\ell_\infty$-norm except with negligible probability, whenever the composed computation $f$ has depth at most $L$ and every gate of $f$ evaluated on $(m_1, \ldots, m_k)$ has value of $\ell_\infty$-norm at most $1$; and it is **compact**: evaluated ciphertexts have length at most a polynomial in $\secpar$, $L$ and $p$, independent of the size of $f$. It is **IND-CPA-secure** as in [[#Security]], with $\KeyGen(1^\secpar, 1^L, 1^p)$, for all polynomials $L$ and $p$.

The scheme of CKKS17 supports approximate addition and multiplication of encrypted messages together with a rescaling procedure, which truncates a ciphertext to a smaller modulus and rounds the plaintext; the bit length of the ciphertext modulus grows linearly with the depth of the evaluated circuit, and the precision lost is bounded by the depth, at most one bit more than in unencrypted floating-point arithmetic — [[CKKS17 - Homomorphic Encryption for Arithmetic of Approximate Numbers|CKKS17]]. Bootstrapping extends it from a leveled to a fully homomorphic scheme — [[CHKKS18 - Bootstrapping for Approximate Homomorphic Encryption|CHKKS18]].

### Statically approximate HE

An approximate HE scheme is **statically approximate** if a public efficient algorithm $\mathsf{Estimate}$, fixed by the parameters $(\secpar, L, p)$ and given only a circuit and error bounds for its inputs, bounds the worst-case output error compositionally: for every $(\pk, \sk)$ output by $\KeyGen(1^\secpar, 1^L, 1^p)$, every circuit $f$ of arity $k$, and all ciphertexts $c_1, \ldots, c_k$, messages $m_1, \ldots, m_k \in \calM$ and radii $e_1, \ldots, e_k$, if every output of $\Dec(\sk, c_i)$ is within $e_i$ of $m_i$ in $\ell_\infty$-norm for each $i$, then every output of $\Dec(\sk, \Eval(\pk, f, c_1, \ldots, c_k))$, over all coins of $\Eval$ and $\Dec$, is within $B = \mathsf{Estimate}(f, e_1, \ldots, e_k)$ of $f(m_1, \ldots, m_k)$ in $\ell_\infty$-norm — [[LMSS22 - Securing Approximate Homomorphic Encryption Using Differential Privacy|LMSS22]] (Definition 11). $\mathsf{Estimate}$ sees neither $\pk$ nor the ciphertexts, so $B$ is computed from the circuit and the radii alone. A public bound $t_e = t_e(\secpar, L, p)$ covers every fresh encryption: for every $(\pk, \sk)$ output by $\KeyGen(1^\secpar, 1^L, 1^p)$ and every $m \in \calM$, every output of $\Dec(\sk, \Enc(\pk, m))$, over all coins of $\Enc$ and $\Dec$, is within $t_e$ of $m$ in $\ell_\infty$-norm — [[LMSS22 - Securing Approximate Homomorphic Encryption Using Differential Privacy|LMSS22]] (Definition 15). The variant recorded here also has deterministic $\Dec$; requires $t_e(\secpar, L, p)$ to be computable in time polynomial in $\secpar$, $L$ and $p$, and $\mathsf{Estimate}$ to run in time polynomial in $\secpar$, $L$, $p$ and the length of its input, with outputs of at most $s(\secpar, L, p)$ bits for a polynomial $s$; and requires that $t_e$ and, for every circuit of depth at most $L$, the bounds obtained by running $\mathsf{Estimate}$ one gate at a time, on each addition or multiplication, with radius $t_e$ for each input of the circuit and the bound already computed for each other input, are at most $2^{-p}$. These requirements only narrow LMSS22's hypothesis.

### IND-CPA-D security

The adversary also sees decryptions of ciphertexts whose plaintexts it already knows: those it had encrypted, and evaluations on them of circuits it chose. Below, the oracles keep a list of triples $(m^0_j, m^1_j, c_j)$; $\calE$ encrypts $m^b$ for a pair $(m^0, m^1)$, $\calH$ evaluates a circuit $f$ on listed ciphertexts and records $f$ applied to both message tracks, answering only when the composed computation from $\calE$'s outputs to the new entry has depth at most $L$ and every gate of that computation has value of $\ell_\infty$-norm at most $1$ on both tracks, and $\calD$ decrypts an entry only when its two tracks agree — [[LM21 - On the Security of Homomorphic Encryption on Approximate Numbers|LM21]]. Here $\calD$ answers at most $q$ queries, a bound fixed in advance and given to $\KeyGen$; the notion without a bound implies this one, and a scheme whose $\KeyGen$ takes no $q$ meets this syntax by ignoring it.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cpa\text{-}d}}_{\HE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pk, \sk) \gets \KeyGen(1^\secpar, 1^L, 1^p, 1^q)$; $b \getsr \bits$; $j \gets 0$
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
\Comment{$\bot$ unless the computation stays in the supported depth and norm}
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
\If{$m^0_i \ne m^1_i$ or $q$ queries were answered}
\Return $\bot$
\Comment{Only ciphertexts whose plaintext $\calA$ knows}
\EndIf
\Return $\Dec(\sk, c_i)$
\end{algorithmic}
\end{algorithm}
```

An approximate HE scheme $\HE$ whose $\KeyGen(1^\secpar, 1^L, 1^p, 1^q)$ also takes the query bound $q$, correct and compact as above for every polynomial $q$ with lengths polynomial in $\secpar$, $L$, $p$ and $q$, is **IND-CPA$^{\mathrm{D}}$-secure** if for all polynomials $L, p, q$ and all efficient $\calA$,

$$
\Adv^{\mathrm{cpa\text{-}d}}_{\HE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cpa\text{-}d}}_{\HE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The restriction on $\calD$ is necessary: decrypting an entry whose tracks differ reveals $b$.

For approximate schemes IND-CPA does not capture security against passive adversaries: a passive attack on CKKS, running in expected polynomial time, recovers the secret key with high probability, and was carried out against the HEAAN, SEAL, HElib and PALISADE implementations — [[LM21 - On the Security of Homomorphic Encryption on Approximate Numbers|LM21]]. Adding to the output of decryption noise scaled to a tag, $t_e$ on a fresh ciphertext and $\mathsf{Estimate}$'s bound on the error of the evaluated circuit on an evaluated one, leaves every efficient adversary against an IND-CPA-secure [[#Statically approximate HE|statically approximate]] scheme negligible advantage in the IND-CPA$^{\mathrm{D}}$ game, for a number of decryption queries fixed in advance — [[LMSS22 - Securing Approximate Homomorphic Encryption Using Differential Privacy|LMSS22]]; with the bound tracked one gate at a time and the original scheme run at a large enough precision $p' > p$, the result is also correct at precision $p$ and compact, and its advantage stays negligible, since each circuit query is a sequence of admissible single-gate queries to LMSS22's scheme, so it is IND-CPA$^{\mathrm{D}}$-secure ([IND-CPA statically approximate HE ⇒ IND-CPA$^{\mathrm{D}}$ approximate HE](approximate-homomorphic-encryption-to-approximate-he-ind-cpa-d-lmss22)) — folklore. For exact schemes the two notions coincide when decryption fails with negligible probability — [[LM21 - On the Security of Homomorphic Encryption on Approximate Numbers|LM21]], as [[CCPSS24 - Attacks Against the IND-CPA-D Security of Exact FHE Schemes|CCPSS24]] point out; implementations of exact schemes that allow a noticeable probability of decryption failure fall to efficient IND-CPA$^{\mathrm{D}}$ distinguishing and key-recovery attacks, among them the default BFV implementation of OpenFHE — [[CCPSS24 - Attacks Against the IND-CPA-D Security of Exact FHE Schemes|CCPSS24]]; concurrent work reports practical key recovery against BFV, BGV and TFHE in their basic form — [[CSBB24 - On the Practical CPA-D Security of exact and Threshold FHE Schemes and Libraries|CSBB24]].

## Rate-1 and compressible FHE

The **rate** of a scheme is the ratio of plaintext length to ciphertext length. Combining an FHE scheme with linear decryption and a new high-rate linearly homomorphic encryption scheme gives, from LWE, an FHE scheme of rate $1 - \sigma$ for $\sigma = o(1)$ — [[BDGM19 - Leveraging Linear Decryption Rate-1 Fully-Homomorphic Encryption and Time-Lock Puzzles|BDGM19]]. A linearly homomorphic encryption scheme based on (ring) LWE with rate $1 - \varepsilon$ for any $\varepsilon > 0$, into which many FHE ciphertexts, including ones produced by homomorphic evaluation, can be compressed, gives single-server [[single-server-private-information-retrieval|PIR]] of rate $4/9$ whose server performs a small constant number of multiplications modulo $q$ per database byte, which the authors expect to cost less than encrypting the whole database under AES — [[GH19 - Compressible FHE with Applications to PIR|GH19]].

## Multi-key FHE

In **multi-key FHE** each party generates its own key pair, possibly from common public parameters, and $\Eval$ takes ciphertexts encrypted under different, unrelated public keys and outputs a ciphertext that decrypts under the secret keys of all parties involved, jointly; each party's encryptions are IND-CPA-secure under its own key. The notion is due to [[LTV12 - On-the-Fly Multiparty Computation on the Cloud via Multikey Fully Homomorphic Encryption|LTV12]], who use it for multiparty computation on the cloud in which users interact only to upload their inputs and to decrypt the output. The LWE-based schemes of [[CM15 - Multi-identity and Multi-key Leveled FHE from Learning with Errors|CM15]] and [[MW16 - Two Round Multiparty Computation via Multi-key FHE|MW16]] are single-hop for keys: all relevant keys must be known at the start of the homomorphic computation; the schemes of PS16b are multi-hop for keys, so the output of a computation under one set of keys can be used in further computation — [[PS16b - Multi-key FHE from LWE, Revisited|PS16b]]; BP16 give fully dynamic multi-key FHE with short ciphertexts from lattices — [[BP16 - Lattice-Based Fully Dynamic Multi-key FHE with Short Ciphertexts|BP16]]. A one-round distributed decryption turns multi-key FHE into two-round MPC ([[subexponential-modulus-lwe-and-nizk-argument-for-np-to-two-round-mpc-mw16|LWE + NIZK ⇒ two-round MPC]]) — [[MW16 - Two Round Multiparty Computation via Multi-key FHE|MW16]].

## Threshold FHE

In **threshold FHE** the secret key is shared among $N$ parties: each holder of a share computes a partial decryption of an evaluated ciphertext, and partial decryptions from an authorized set of parties combine to the plaintext while revealing nothing beyond it. A threshold FHE scheme gives a universal thresholdizer, a tool for turning other cryptographic schemes into threshold ones — [[BGG+18 - Threshold Cryptosystems from Threshold Fully Homomorphic Encryption|BGG+18]].

## Circuit privacy

An HE scheme for $\calF$ is **circuit private** if an evaluated ciphertext reveals nothing about the evaluated function beyond its output and its size: there is an efficient $\Sim$ such that for all $f \in \calF$ and messages $m_1, \ldots, m_k$, the tuples $(\pk, \sk, c_1, \ldots, c_k, \Eval(\pk, f, c_1, \ldots, c_k))$ and $(\pk, \sk, c_1, \ldots, c_k, \Sim(1^\secpar, \pk, c_1, \ldots, c_k, |f|, f(m_1, \ldots, m_k)))$ are computationally indistinguishable, for $(\pk, \sk) \gets \KeyGen(1^\secpar)$ and $c_i \gets \Enc(\pk, m_i)$. The distinguisher holds the secret key, as the party who decrypts does. The definition assumes honestly generated keys and ciphertexts; maliciously circuit-private FHE is meant to keep the evaluated function hidden even for malformed keys and ciphertexts, and is built from a scheme without circuit privacy by techniques akin to bootstrapping and conditional disclosure of secrets — [[OPP14 - Maliciously Circuit-Private FHE|OPP14]].

### Circuit-private HE for NC1

A **circuit-private HE scheme for $\mathrm{NC}^1$** is leveled: $\KeyGen(1^\secpar, 1^L)$ takes a bound $L$, any polynomial in $\secpar$, and for every such $L$ the scheme is correct, IND-CPA-secure and circuit private as above for the class of fan-in-2 boolean circuits of depth at most $\log L$, with evaluated ciphertexts of length bounded by a polynomial in $\secpar$ and $\log L$, independent of the circuit. Every $\mathrm{NC}^1$ circuit family on inputs of length polynomial in $\secpar$ is covered by a large enough polynomial $L$. A variant of the GSW scheme that evaluates branching programs is circuit private as it stands, which gives circuit-private HE for $\mathrm{NC}^1$ circuits under [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]] ([[polynomial-ratio-lwe-to-circuit-private-he-nc1-bdpmw16|LWE with polynomial ratio ⇒ Circuit-private HE for NC1]]) — [[BdPMW16 - FHE Circuit Privacy Almost for Free|BdPMW16]]. For general circuits, sanitization makes the distribution of a ciphertext canonical, independent of the circuit that produced it, by alternating bootstrapping with public rerandomization; it applies to all lattice-based FHE proposed by 2016 and, unlike flooding the noise, does not degrade the security–efficiency trade-off much — [[DS16 - Sanitization of FHE Ciphertexts|DS16]].

## Compact private-key homomorphic encryption

A **compact private-key homomorphic encryption** scheme for addition modulo $2$ is an IND-CPA-secure [[symmetric-key-encryption|symmetric-key]] bit-encryption scheme with a public algorithm $\Eval$ that maps ciphertexts $c_1, \ldots, c_t$ of bits $m_1, \ldots, m_t$, without the key, to a ciphertext that decrypts to $m_1 \oplus \cdots \oplus m_t$ and whose length is independent of the number $t$ of ciphertexts it was computed from — [[Rot11 - Homomorphic Encryption From Private-Key to Public-Key|Rot11]]. Without compactness the notion follows from any CPA-secure symmetric-key scheme, by letting $\Eval$ return its input ciphertexts and decryption XOR their plaintexts — folklore. Nothing is required of the distribution of evaluated ciphertexts. Every compact scheme of this kind yields [[public-key-encryption|public-key encryption]] ([[secret-key-xor-homomorphic-encryption-to-pke-rot11|Compact private-key XOR-homomorphic encryption ⇒ PKE]]) — [[Rot11 - Homomorphic Encryption From Private-Key to Public-Key|Rot11]].

## IND-CCA1-secure FHE

An HE scheme is **IND-CCA1-secure** if its underlying PKE scheme is [[public-key-encryption#cca1-security|IND-CCA1-secure]]: $\calA$ may query decryption before, but not after, it receives the challenge. Gentry's basic scheme is not: a trivial lunchtime attack recovers its secret key, while a minor modification of the somewhat homomorphic scheme of Smart and Vercauteren is IND-CCA1-secure, indeed PA-1, in the standard model under a lattice-based knowledge assumption — [[LMSV11 - On CCA-Secure Somewhat Homomorphic Encryption|LMSV11]]. A generic transformation turns multi-key identity-based FHE into IND-CCA1-secure FHE; instantiated in the random oracle model, "assuming sub-exponential LWE, there is a leveled CCA1 FHE scheme in the random oracle model which is compact wrt circuit complexity", and a second instantiation uses sub-exponentially secure iO and sub-exponentially secure lossy encryption — [[CRRV17 - Chosen-Ciphertext Secure Fully Homomorphic Encryption|CRRV17]]. A notion strictly stronger than CCA1 is also achievable: one-hop FHE with input-verifiable CCA (IV-CCA) security follows in the standard model from circular-secure LWE, the assumption on which known LWE-based FHE with chosen-plaintext security already rests, through the Naor–Yung paradigm with a succinct argument for the validity of FHE ciphertexts built from batch arguments for NP — [[YYS25 - Fully Homomorphic Encryption with Chosen-Ciphertext Security from LWE|YYS25]].

# Other results

- [[circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09|Circular-secure bootstrappable SHE ⇒ Compact FHE]]
- [[lwe-to-leveled-fully-homomorphic-encryption-bgv12|LWE with sub-exponential ratio ⇒ Leveled FHE (BGV12)]]
- [[lwe-to-depir-lmw23|Ring-LWE with quasi-polynomial factors ⇒ Unkeyed DEPIR]]
- [[dcr-to-partially-homomorphic-encryption-phe-pai99|DCR ⇒ Additively homomorphic encryption]]
- [[ddh-to-partially-homomorphic-encryption-phe-elgamal85|DDH ⇒ Multiplicatively homomorphic encryption]]
- [[he-to-re-bl13|Strongly homomorphic encryption ⇒ Statistically rerandomizable encryption]]
- [[no-he-to-szk-bl13|No reduction from NP to compact FHE]]
- Bootstrapping publishes encryptions of the scheme's own secret-key bits — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]] — and every known FHE scheme from LWE requires the encryption scheme to be [[circular-security|circular secure]] — [[MV24 - SoK Learning with Errors, Circular Security, and Fully Homomorphic Encryption|MV24]]. Unless the counterexamples' assumptions fail, IND-CPA security does not give circular security by the identity map: for bit encryption under an extension of SXDH to multilinear groups ([[no-pke-cpa-security-to-bit-circular-security-rot13|Rot13]]), and for key cycles under LWE with polynomial modulus-to-noise ratio ([[no-pke-cpa-security-to-k-circular-security-ap16|AP16]]) or iO ([[no-pke-cpa-security-to-k-circular-security-krw15|KRW15]]).
- [[dcr-to-length-flexible-additively-homomorphic-encryption-dj01|DCR ⇒ Length-flexible additively homomorphic encryption (Damgård–Jurik)]]
- [[polynomial-ratio-lwe-to-circuit-private-he-nc1-bdpmw16|LWE with polynomial ratio ⇒ Circuit-private HE for NC1]]
- [[secret-key-xor-homomorphic-encryption-to-pke-rot11|Compact private-key XOR-homomorphic encryption ⇒ PKE]]
- [[approximate-homomorphic-encryption-to-approximate-he-ind-cpa-d-lmss22|IND-CPA statically approximate HE ⇒ IND-CPA-D approximate HE (LMSS22)]]

<!-- BEGIN GENERATED participates-in 4b8019bb4aa8 -->

## Participates in

**Builds on Homomorphic encryption**

- [[additively-homomorphic-encryption-to-cpir-ste98|Additively homomorphic encryption ⇒ cPIR]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[additively-homomorphic-encryption-to-crhf-iko05|Additively homomorphic encryption ⇒ CRHF]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[additively-homomorphic-encryption-to-he|Additively homomorphic encryption ⇒ HE]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[bootstrappable-somewhat-homomorphic-encryption-to-somewhat-homomorphic-encryption|Bootstrappable SHE ⇒ SHE]] (via [[homomorphic-encryption#bootstrappable-she|Bootstrappable SHE]])
- [[circuit-private-he-nc1-to-pke-cpa-security|Circuit-private HE for NC1 ⇒ IND-CPA PKE]] (via [[homomorphic-encryption#circuit-private-he-for-nc1|Circuit-private HE for NC1]])
- [[circular-secure-bootstrappable-she-to-bootstrappable-somewhat-homomorphic-encryption|Circular-secure bootstrappable SHE ⇒ Bootstrappable SHE]] (via [[homomorphic-encryption#circular-secure-bootstrappable-she|Circular-secure bootstrappable SHE]])
- [[circular-secure-fhe-to-compact-fhe|Circular-secure FHE ⇒ Compact FHE]] (via [[homomorphic-encryption#circular-secure-fhe|Circular-secure FHE]])
- [[circular-secure-fhe-to-nizk-argument-for-np-cch19|Circular-secure FHE ⇒ NIZK argument for NP]] (via [[homomorphic-encryption#circular-secure-fhe|Circular-secure FHE]])
- [[circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09|Circular-secure bootstrappable SHE ⇒ Compact FHE]] (via [[homomorphic-encryption#circular-secure-bootstrappable-she|Circular-secure bootstrappable SHE]])
- [[compact-fhe-to-he|Compact FHE ⇒ HE]] (via [[homomorphic-encryption#compact-fhe|Compact FHE]])
- [[he-to-mpc-with-preprocessing-spdz-etc|SHE + correlated randomness ⇒ MPC with preprocessing (SPDZ)]] (via [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]])
- [[he-to-pke-cpa-security|HE ⇒ IND-CPA PKE]]
- [[he-to-re-bl13|Strongly homomorphic encryption ⇒ Statistically rerandomizable encryption]] (via [[homomorphic-encryption#strongly-homomorphic-encryption|Strongly homomorphic encryption]])
- [[length-flexible-additively-homomorphic-encryption-to-additively-homomorphic-encryption|Length-flexible additively homomorphic encryption ⇒ Additively homomorphic encryption]] (via [[homomorphic-encryption#length-flexible-additively-homomorphic-encryption|Length-flexible additively homomorphic encryption]])
- [[length-flexible-additively-homomorphic-encryption-to-polylog-cpir-lip05|Length-flexible additively homomorphic encryption ⇒ PIR with polylogarithmic communication (Lipmaa)]] (via [[homomorphic-encryption#length-flexible-additively-homomorphic-encryption|Length-flexible additively homomorphic encryption]])
- [[leveled-fully-homomorphic-encryption-to-he|Leveled FHE ⇒ HE]] (via [[homomorphic-encryption#leveled-fully-homomorphic-encryption|Leveled fully homomorphic encryption]])
- [[mmap-to-io-gghrsw13|MMap + Leveled FHE ⇒ iO]] (via [[homomorphic-encryption#leveled-fully-homomorphic-encryption|Leveled fully homomorphic encryption]])
- [[multiplicatively-homomorphic-encryption-to-he|Multiplicatively homomorphic encryption ⇒ HE]] (via [[homomorphic-encryption#multiplicatively-homomorphic-encryption|Multiplicatively homomorphic encryption]])
- [[partially-homomorphic-encryption-phe-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|Additively homomorphic encryption + Sparse LPN ⇒ SHE]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[secret-key-xor-homomorphic-encryption-to-pke-rot11|Compact private-key XOR-homomorphic encryption ⇒ PKE]] (via [[homomorphic-encryption#compact-private-key-homomorphic-encryption|Compact private-key homomorphic encryption]])
- [[additively-homomorphic-encryption-to-mpc-with-preprocessing-bdoz11|Semi-homomorphic encryption ⇒ MPC with preprocessing (BDOZ)]] (via [[homomorphic-encryption#semi-homomorphic-encryption|Semi-homomorphic encryption]])
- [[somewhat-homomorphic-encryption-she-to-he-gen09|Bootstrappable SHE ⇒ Leveled FHE]] (via [[homomorphic-encryption#bootstrappable-she|Bootstrappable SHE]])
- [[somewhat-homomorphic-encryption-to-pke-cpa-security|SHE ⇒ IND-CPA PKE]] (via [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]])
- [[approximate-homomorphic-encryption-to-approximate-he-ind-cpa-d-lmss22|IND-CPA statically approximate HE ⇒ IND-CPA-D approximate HE (LMSS22)]] (via [[homomorphic-encryption#statically-approximate-he|Statically approximate HE]])
- [[statically-approximate-homomorphic-encryption-to-approximate-homomorphic-encryption|Statically approximate HE ⇒ Approximate HE]] (via [[homomorphic-encryption#statically-approximate-he|Statically approximate HE]])
- [[strongly-homomorphic-encryption-to-pke-cpa-security|Strongly homomorphic encryption ⇒ IND-CPA PKE]] (via [[homomorphic-encryption#strongly-homomorphic-encryption|Strongly homomorphic encryption]])

**Produces Homomorphic encryption**

- [[additively-homomorphic-encryption-to-he|Additively homomorphic encryption ⇒ HE]]
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
- [[multiplicatively-homomorphic-encryption-to-he|Multiplicatively homomorphic encryption ⇒ HE]]
- [[partially-homomorphic-encryption-phe-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|Additively homomorphic encryption + Sparse LPN ⇒ SHE]] (via [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]])
- [[polynomial-ratio-lwe-to-circuit-private-he-nc1-bdpmw16|LWE with polynomial ratio ⇒ Circuit-private HE for NC1]] (via [[homomorphic-encryption#circuit-private-he-for-nc1|Circuit-private HE for NC1]])
- [[qr-to-he-gm84|QR ⇒ Additively homomorphic encryption]] (via [[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]])
- [[somewhat-homomorphic-encryption-she-to-he-gen09|Bootstrappable SHE ⇒ Leveled FHE]] (via [[homomorphic-encryption#leveled-fully-homomorphic-encryption|Leveled fully homomorphic encryption]])
- [[approximate-homomorphic-encryption-to-approximate-he-ind-cpa-d-lmss22|IND-CPA statically approximate HE ⇒ IND-CPA-D approximate HE (LMSS22)]] (via [[homomorphic-encryption#ind-cpa-d-security|IND-CPA-D security]])
- [[statically-approximate-homomorphic-encryption-to-approximate-homomorphic-encryption|Statically approximate HE ⇒ Approximate HE]] (via [[homomorphic-encryption#approximate-homomorphic-encryption|Approximate homomorphic encryption]])
- [[subexponential-io-and-rerandomizable-encryption-to-he-cltv15|Sub-exponential iO + Rerandomizable encryption ⇒ Compact FHE (CLTV)]] (via [[homomorphic-encryption#compact-fhe|Compact FHE]])
- [[circular-security-and-lwe-to-he|LWE at sub-exponential and polynomial ratios ⇒ Bootstrappable SHE (BV11)]] (via [[homomorphic-encryption#bootstrappable-she|Bootstrappable SHE]])
- [[subgroup-decision-to-somewhat-homomorphic-encryption-bgn05|Subgroup decision ⇒ SHE (degree 2)]] (via [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]])

**Barriers**

- [[no-he-to-cca-security|No fixed-construction reduction from HE to IND-CCA2 Security]]
- [[no-he-to-szk-bl13|No reduction from NP to compact FHE]] (via [[homomorphic-encryption#compact-fhe|Compact FHE]])

<!-- END GENERATED participates-in -->
