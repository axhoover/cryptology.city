---
type: assumption
status: draft
aliases:
  - LWE
  - Learning with errors
  - RLWE
  - Ring Learning with errors
  - Ring-LWE
  - MLWE
  - Module-LWE
title: Learning with errors
id: lwe
variants:
  evasive-lwe: "#evasive-lwe"
  module-lwe: "#module-lwe"
  ring-lwe: "#ring-lwe"
  ring-lwe-quasi-polynomial-approximation: "#ring-lwe-with-quasi-polynomial-approximation-factors"
  succinct-lwe: "#succinct-lwe"
  decision-lwe: "#decision-lwe"
  private-coin-evasive-lwe: "#private-coin-evasive-lwe"
  search-lwe: "#search-lwe"
  subexponential-lwe: "#sub-exponential-lwe"
  subexponential-modulus-lwe: "#lwe-with-sub-exponential-modulus-to-noise-ratio"
  superpolynomial-ratio-lwe: "#lwe-with-superpolynomial-modulus-to-noise-ratio"
  subexponential-lwe-subexponential-ratio: "#sub-exponential-hardness-at-sub-exponential-ratio"
  module-lwe-rank-1: "#rank-1-module-lwe"
  module-lwe-rank-n: "#degree-1-module-lwe"
  polynomial-ratio-lwe: "#lwe-with-polynomial-modulus-to-noise-ratio"
  normal-form-lwe: "#normal-form-lwe"
  quasi-polynomial-lwe: "#quasi-polynomially-hard-lwe"
  lwr: "#learning-with-rounding"
---

# Learning with errors

The decision _learning with errors (LWE)_ assumption states that, for a uniform secret $\mathbf{s} \in \ZZ_q^n$, pairs $(\mathbf{a}_i, \langle \mathbf{a}_i, \mathbf{s} \rangle + e_i)$ with uniform $\mathbf{a}_i \in \ZZ_q^n$ and short errors $e_i$ drawn from an error distribution $\chi$ are computationally indistinguishable from uniform pairs in $\ZZ_q^n \times \ZZ_q$. At $q = 2$ with Bernoulli errors it is [[learning-parity-with-noise|LPN]] — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (Section 1).

## Assumption

Informally, the LWE problem concerns solving a system of noisy linear equations over $\ZZ_q$. Given $m$ random linear equations in $n$ variables, the goal is to find a secret vector $\mathbf{s} \in \ZZ_q^n$. Without errors the system can be solved in polynomial time by Gaussian elimination; the LWE assumption states that adding a small additive error $\mathbf{e}$ drawn from an error distribution $\chi$ makes the problem hard.

The assumption is parameterized by a lattice dimension $n$, a modulus $q$, an error distribution $\chi$ over $\ZZ_q$, and a sample count $m$; $n$, $q$ and $m$ are $\poly(\secpar)$-computable functions of $\secpar$ with $n, \lceil \log q \rceil, m \le \poly(\secpar)$. As an object, LWE denotes: there are such $n$ and $q$ and an $\alpha = \alpha(\secpar)$ with $\alpha q \ge 2\sqrt{n}$ and $\alpha \le n^{-c}$ for some constant $c > 0$ such that, for every $m = \poly(\secpar)$, [[#Decision LWE|decision LWE]] is hard for $(n, q, D_{\ZZ,\alpha q}, m)$, where $D_{\ZZ,\alpha q}$ is the [[discrete-gaussian|discrete Gaussian]] of width $\alpha q$ reduced modulo $q$.

### Decision LWE

In the decision variant, the adversary must distinguish LWE samples $(\mathbf{A}, \mathbf{As}+\mathbf{e})$ from uniformly random pairs $(\mathbf{A}, \mathbf{u})$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{lwe}}_{n,q,\chi,m,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{A} \getsr \ZZ_q^{m \times n}$ ; $\mathbf{s} \getsr \ZZ_q^n$ ; $\mathbf{e} \gets \chi^m$
\State $b \getsr \bits$
\State $\mathbf{u}_0 \gets \mathbf{A}\mathbf{s} + \mathbf{e}$ ; $\mathbf{u}_1 \getsr \ZZ_q^m$
\State $\hat{b} \gets \calA(1^\secpar, \mathbf{A}, \mathbf{u}_b)$
\Return $[\hat{b} = b]$
\end{algorithmic}
\end{algorithm}
```

**(Decision) LWE is hard** for the tuple $(n,q,\chi,m)$ if for all efficient $\calA,$

$$
\Adv^{\text{lwe}}_{n,q,\chi,m,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\text{lwe}}_{n,q,\chi,m,\calA}(\secpar)=1\right]-1\right|
$$

is negligible.

As an object, decision LWE denotes the prime-modulus regime of the [[#Search–Decision equivalence|search–decision equivalence]]: there are $\poly(\secpar)$-computable $n \le \poly(\secpar)$ and prime $q \le \poly(n)$, and an $\alpha$ with $\alpha q \ge 2\sqrt{n}$ and $\alpha \le n^{-c}$ for some constant $c > 0$ such that, for every $m = \poly(\secpar)$, decision LWE is hard for $(n, q, D_{\ZZ,\alpha q}, m)$. A prime $q \le \poly(n)$ is a special case of the modulus of LWE ([[decision-lwe-to-lwe|Decision LWE ⇒ LWE]]) — folklore.

### Search LWE

In the search variant, the adversary must recover the secret $\mathbf{s}$ from LWE samples.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{slwe}}_{n,q,\chi,m,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{A} \getsr \ZZ_q^{m \times n}$ ; $\mathbf{s} \getsr \ZZ_q^n$ ; $\mathbf{e} \gets \chi^m$
\State $\hat{\mathbf{s}} \gets \calA(1^\secpar, \mathbf{A},\, \mathbf{A}\mathbf{s}+\mathbf{e})$
\Return $[\hat{\mathbf{s}} = \mathbf{s}]$
\end{algorithmic}
\end{algorithm}
```

**Search LWE is hard** for the tuple $(n,q,\chi,m)$ if for all efficient $\calA,$

$$
\Adv^{\text{slwe}}_{n,q,\chi,m,\calA}(\secpar) := \Pr\!\left[\Game^{\text{slwe}}_{n,q,\chi,m,\calA}(\secpar)=1\right]
$$

is negligible.

As an object, search LWE denotes: there are $\poly(\secpar)$-computable $n \le \poly(\secpar)$ and prime $q \le \poly(n)$, and an $\alpha$ with $\alpha q \ge 2\sqrt{n}$ and $\alpha \le n^{-c}$ for some constant $c > 0$ such that, for every $m = \poly(\secpar)$, search LWE is hard for $(n, q, D_{\ZZ,\alpha q}, m)$.

## Known Results

### Search–Decision equivalence

For prime $8 \le q \le \poly(n)$ and error $D_{\ZZ,\alpha q}$ with $\alpha \le 1/4$, search and decision LWE with the same $(n, q, \chi)$ are equivalent up to polynomial losses in samples, time and advantage: a search solver gives a distinguisher for every $q \ge 8$ — folklore — and a distinguisher gives a search solver for every error distribution and prime $q \le \poly(n)$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (Lemmas 4.1 and 4.2).

**Search $\Rightarrow$ Decision** (easy direction; [[decision-lwe-to-search-lwe|Decision LWE ⇒ Search LWE]]). Let $\chi = D_{\ZZ,\alpha q}$ with $\alpha \le 1/4$ and $q \ge 8$, and let $m \ge 32(n \ln q + \secpar)$. Given $(\mathbf{A}, \mathbf{u})$, the distinguisher runs a search solver $\calA$ to obtain $\hat{\mathbf{s}}$ and guesses $b = 0$ (LWE) iff at least $3m/4$ coordinates of $\mathbf{u} - \mathbf{A}\hat{\mathbf{s}}$ lie in $[-q/4, q/4]$. On LWE samples with $\hat{\mathbf{s}} = \mathbf{s}$ the test fails with probability at most $e^{-m/32}$. On uniform $\mathbf{u}$ each coordinate of $\mathbf{u} - \mathbf{A}\mathbf{s}$ lies in the interval with probability at most $1/2 + 1/q \le 5/8$ for each fixed $\mathbf{s}$, since $q \ge 8$, so some $\mathbf{s}$ passes with probability at most $q^n e^{-m/32} \le e^{-\secpar}$. Hence $\Adv^{\text{lwe}}_{n,q,\chi,m,\calB}(\secpar) \ge \Adv^{\text{slwe}}_{n,q,\chi,m,\calA}(\secpar) - 2e^{-\secpar}$ for the distinguisher $\calB$ — folklore.

**Decision $\Rightarrow$ Search** (hard direction; [[search-lwe-to-decision-lwe|Search LWE ⇒ Decision LWE]]). Let $q \le \poly(n)$ be prime. A distinguisher that works for a non-negligible fraction of secrets is first amplified, by re-randomizing the secret, to one that for every $\mathbf{s}$ accepts LWE samples and rejects uniform ones with probability exponentially close to $1$. To test the guess $s_i = \ell$, each sample $(\mathbf{a}, b)$ is mapped to $(\mathbf{a} + r\mathbf{1}_i, b + r\ell)$ for a fresh uniform $r \in \ZZ_q$ and the $i$-th unit vector $\mathbf{1}_i$: this preserves the LWE distribution if $\ell = s_i$ and, since $q$ is prime, makes it uniform otherwise, while uniform samples stay uniform. Testing all $nq$ pairs $(i, \ell)$ recovers $\mathbf{s}$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (Lemmas 4.1 and 4.2).

For a power-of-two modulus $q$ and $1/q < \alpha < 1/\omega(\sqrt{\log n})$, search LWE with continuous Gaussian error of rate $\alpha$ reduces to decision LWE at the same modulus with rate $\alpha \cdot \omega(\log n)$ — [[MP12 - Trapdoors for Lattices Simpler Tighter Faster Smaller|MP12]] (Theorem 3.1, as credited by [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]], arXiv v1, Theorem 2.17). With modulus switching this gives hardness of decision LWE at every modulus $q' \ge 25$, prime moduli included — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Corollary 3.3). Smooth-modulus and sample-preserving reductions are listed under [[search-lwe-to-decision-lwe|Search LWE ⇒ Decision LWE]].

### Uniform and normal-form secrets

For prime $q$, hardness of decision LWE with uniform secret implies hardness of [[#Normal-form LWE|normal-form LWE]], whose secret is drawn from the error distribution — [[ACPS09 - Fast Cryptographic Primitives and Circular-Secure Encryption Based on Hard Learning Problems|ACPS09]], as credited by [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Section 2.3). A change of variables on the first $n$ samples turns a distinguisher with $m$ samples for normal-form LWE into one with $m + n$ samples for uniform-secret LWE with at least $1 - 1/(q-1)$ times its advantage ([[polynomial-ratio-lwe-to-normal-form-lwe-acps09|LWE with polynomial ratio ⇒ Normal-form LWE]]) — standard. Re-randomizing the secret gives the converse for every $q$, with the same advantage ([[normal-form-lwe-to-decision-lwe|Normal-form LWE ⇒ Decision LWE]]) — folklore.

### Modulus switching

In this subsection samples are scaled by $q^{-1}$ and the noise is continuous: a sample is $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle + e \bmod 1)$ with $\mathbf{a}$ uniform over $(q^{-1}\ZZ/\ZZ)^n$ and $e$ drawn from the continuous Gaussian of width $\alpha'$, and _noise at most $\alpha$_ means that the distinguisher must succeed for every $\alpha' \le \alpha$, where $\alpha'$ may depend on $\mathbf{s}$. The secret $\mathbf{s} \in \ZZ^n$ is drawn from a distribution $D$ with $\Pr[\|\mathbf{s}\| > B] \le \delta$. For all moduli $q, q' \ge 1$ and $\varepsilon \in (0, 1/2)$ with

$$
\beta^2 \ge \alpha^2 + \frac{4}{\pi} \ln\!\left(2n(1 + 1/\varepsilon)\right) \cdot \left(\frac{B}{\min\{q, q'\}}\right)^2,
$$

there is an efficient reduction from decision LWE at modulus $q$ with noise at most $\alpha$ to decision LWE at modulus $q'$ with noise at most $\beta$, with the same sample count $m$ and secret distribution $D$, that reduces the advantage by at most $\delta + 14\varepsilon m$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Theorem 3.1 with $G$ the identity; Corollary 3.2 is the case $q \ge q'$). Applied to the [[#Normal-form LWE|normal form]] as BLPRS13 state it, whose secret is drawn from $D_{\ZZ^n, \sqrt{2}\alpha q}$, it gives for every $q' \ge 25$, $m \ge n$ and $\delta \in (0, 1/2)$ a reduction from decision LWE with uniform secret, modulus the smallest power of two $q \ge q'$ and noise width $\alpha \ge \sqrt{\ln(2n(1 + 16/\delta)/\pi)}/q$ to decision LWE at modulus $q'$ with $m - (16n + 4\ln\ln q)$ samples and noise at most $\beta = C\alpha\sqrt{n\log(n/\delta)\log(m/\delta)}$, for a universal constant $C$, that turns advantage $\zeta$ into at least $(\zeta - \delta)/4$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.12 and Corollary 3.3). The bounded-noise problem reduces to the exact-noise one: oracle access to an algorithm with advantage at least $\varepsilon$ at noise width exactly $\alpha$ gives an algorithm with advantage at least $1/3$ at noise at most $\alpha$, whose sample count and running time are $\poly(m, 1/\varepsilon, n, \log q)$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.15).

### Short kernel vectors distinguish LWE samples

Let $q$ be prime, let $\chi$ be the [[discrete-gaussian|discrete Gaussian]] over $\ZZ$ of width $\alpha q$, and let $\beta \le 1/(4\alpha)$ with $\beta < q$. Given $(\mathbf{A}, \mathbf{u})$ with $\mathbf{A} \in \ZZ_q^{m \times n}$, a nonzero $\mathbf{z}$ with $\mathbf{A}^{\top}\mathbf{z} \equiv \mathbf{0}$ and $\|\mathbf{z}\| \le \beta$ gives $\langle \mathbf{z}, \mathbf{u} \rangle \equiv \langle \mathbf{z}, \mathbf{e} \rangle$ for LWE samples, which is subgaussian with parameter at most $q/4$ and so lies in $(-q/4, q/4)$ except with probability $2e^{-\pi} < 0.1$; for uniform $\mathbf{u}$ it is uniform modulo $q$. So hardness of decision LWE for $(n, q, \chi, m)$ implies hardness of [[shortest-integer-solution|SIS]] for $(n, m, q, \beta)$, with a constant-factor loss — folklore. The parameters are coupled: composing with [[sis-to-hash-function-ajt96|SIS ⇒ CRHF]] needs $m \ge n \log q + 1$ and $\sqrt{m} \le \beta \le 1/(4\alpha)$ — standard. [[#LWE with polynomial modulus-to-noise ratio|LWE with polynomial modulus-to-noise ratio]] meets the coupling, for instance with $\alpha = 1/n$, a prime $q \in [2n^{1.5}, 4n^{1.5}]$, $m = \lceil 3n \log q \rceil$ and $\beta = \sqrt{m}$ for large $n$, which gives [[polynomial-ratio-lwe-to-sis|LWE with polynomial ratio ⇒ SIS]] — folklore.

# Reduction to lattice problems

Regev's reduction uses continuous error: for $\alpha \in (0, 1)$, $\Psi_\alpha$ is the normal distribution of standard deviation $\alpha/\sqrt{2\pi}$ reduced modulo $1$, a sample is $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle/q + e \bmod 1)$ with $\mathbf{a} \getsr \ZZ_q^n$ and $e \gets \Psi_\alpha$, and an algorithm solves search LWE if for every $\mathbf{s} \in \ZZ_q^n$ it outputs $\mathbf{s}$ from polynomially many samples with probability exponentially close to $1$. Let $q = q(n)$ be an integer and $\alpha = \alpha(n) \in (0, 1)$ with $\alpha q > 2\sqrt{n}$.

- **Search LWE, every modulus.** An efficient algorithm solving search LWE with modulus $q$ and error $\Psi_\alpha$ yields efficient quantum algorithms for worst-case [[shortest-independent-vectors-problem|SIVP]] to within $\tilde{O}(n/\alpha)$ and worst-case [[shortest-vector-problem|GapSVP]] to within $O(n/\alpha)$ on $n$-dimensional lattices — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (arXiv v1, Theorem 3.1 with Lemmas 3.17 and 3.20). Theorem 1.1 of Reg05 states it for the rounding $\bar{\Psi}_\alpha$ of the error to $\ZZ_q$, since an algorithm for the rounded error solves the continuous one (Lemma 4.3).
- **Decision LWE, prime modulus $q \le \poly(n)$.** For prime $q \le \poly(n)$, a distinguisher between samples with error $\bar{\Psi}_\alpha$ and uniform samples, for a non-negligible fraction of secrets, yields an algorithm solving search LWE with error $\Psi_\alpha$, so the quantum hardness above extends to decision LWE in that regime — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (arXiv v1, Lemma 4.4 and Section 5). The decision step needs $q$ prime and at most polynomial (Lemma 4.2); the rest of the reduction holds for every integer $q$.
- For the discrete Gaussian error of the games above, at prime $q \le \poly(n)$ and $\alpha \ge 1/\poly(n)$, where the approximation factors are polynomial, randomized rounding of the continuous error takes each sample to within statistical distance $8 \cdot 2^{-n}$ of one with error $D_{\ZZ,\alpha' q}$ for some $\alpha' \in (\alpha, 2\alpha)$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.10) — so these give hardness of decision LWE at width $\alpha' q$: [[gapsvp-to-lwe-reg05|Quantum polynomial-factor GapSVP ⇒ LWE]] and [[sivp-to-lwe-reg05|Quantum polynomial-factor SIVP ⇒ LWE]].

These reductions make LWE hard under the conjecture that no quantum polynomial-time algorithm approximates GapSVP or SIVP to within any polynomial factor in the worst case — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (Section 1).

Classical reductions start from worst-case hardness of [[shortest-vector-problem#polynomial-factors|GapSVP for polynomial factors]], at the cost of an exponential modulus $q \ge 2^{n/2}$ — [[Pei09 - Public-Key Cryptosystems from the Worst-Case Shortest Vector Problem|Pei09]], with decision hardness at a power-of-two modulus from the search-to-decision reduction of [[MP12 - Trapdoors for Lattices Simpler Tighter Faster Smaller|MP12]] ([[gapsvp-poly-factor-to-lwe-pei09|Polynomial-factor GapSVP ⇒ LWE (exponential modulus)]]) — or of the dimension, LWE in dimension $n$ with polynomial modulus from GapSVP in dimension $\Theta(\sqrt{n})$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] ([[gapsvp-poly-factor-to-lwe-blprs13|Polynomial-factor GapSVP ⇒ LWE (polynomial modulus)]]).

## Cryptographic constructions

- [[lwe-to-pke-reg05|LWE with polynomial ratio ⇒ CPA-secure PKE (Regev)]]
- [[normal-form-lwe-to-pke-cpa-security-lp11b|Normal-form LWE ⇒ CPA-secure PKE (Lindner–Peikert)]]

# Attacks

## Arora–Ge linearization

Let $q$ be prime and let $\chi$ have support $S \subseteq \ZZ_q$ of size $D < q$. Every sample $(\mathbf{a}, b)$ satisfies $\prod_{e \in S}(b - \langle \mathbf{a}, \mathbf{s} \rangle - e) = 0$, a polynomial equation of degree $D$ in the coordinates of $\mathbf{s}$, and replacing each monomial of degree at most $D$ by a new unknown turns $m$ samples into a linear system in $N := \binom{n+D}{D}$ unknowns. If moreover $\chi(0) = 1/\delta$ for some $\delta > 1$, a deterministic algorithm recovers $\mathbf{s}$ from $m := C N \delta q \log q$ samples, for a sufficiently large constant $C$, in time $\poly(m)$, except with probability $q^{-N}$ over the samples — implicit in [[AG11 - New Algorithms for Learning in Presence of Errors|AG11]] (Section 3), as credited by [[CLZ22 - Quantum Algorithms for Variants of Average-Case Lattice Problems via Filtering|CLZ22]] (arXiv v2, Section 2.2, Theorem 17). For uniform errors in $\{0, 1\}$ and prime $q \ge 3$ ($D = 2$, $\delta = 2$) this is $O(n^2 q \log q)$ samples and time $\poly(n, q)$. The discrete Gaussian $D_{\ZZ,\alpha q}$ of the games above has support all of $\ZZ_q$, so the theorem does not apply to it directly. TODO: AG11's running time for discrete Gaussian error of width $n^{\varepsilon}$, and whether it reaches the regime $\alpha q \ge 2\sqrt{n}$ of [[#Reduction to lattice problems|the reductions above]].

## Evasive LWE counterexamples

- If LWE is hard, three [[#Private-coin evasive LWE|private-coin evasive LWE]] variants used in prior constructions are false — [[BUW24 - Evasive LWE Assumptions Definitions Classes and Counterexamples|BUW24]].
- The private-coin evasive LWE assumptions behind pseudorandom functional encryption (AKY24) and pseudorandom obfuscation (BDJ+24) are false — [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]].
- Public-coin [[#Circular evasive LWE|circular evasive LWE]], the assumption behind ABE for unbounded-depth circuits ([[HLL23 - Attribute-Based Encryption for Circuits of Unbounded Depth from Lattices Garbled Circuits of Optimal Size, Laconic Functional Evaluation, and More|HLL23]]), is false: some sampler satisfies the pre-condition but not the post-condition — [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]].
- Public-coin evasive LWE is false when the pre-condition error may be larger than the post-condition error — [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]].

# Variations

LWE with $q = 2$ is the [[learning-parity-with-noise|LPN]] problem, where $\chi$ is a Bernoulli distribution.

[[#Ring LWE|Ring LWE (RLWE)]] replaces the random matrix $\mathbf{A}$ with structured elements from a polynomial ring $\ZZ_q[x]/\langle f(x) \rangle$, yielding more efficient constructions at the cost of additional algebraic structure.

## LWE with polynomial modulus-to-noise ratio

LWE is hard **with polynomial modulus-to-noise ratio** if for every constant $c > 0$, every modulus $q \le 2^{\poly(n)}$ with $\alpha q \ge 2\sqrt{n}$ for $\alpha := n^{-c}$, and every $m = \poly(n)$, decision LWE is hard for $(n, q, \chi, m)$ with $\chi$ the discrete Gaussian of width $\alpha q$. For $m = 1$ and prime $q$ hardness is statistical, since $\mathbf{A}\mathbf{s}$ is uniform for every nonzero $\mathbf{A}$ — standard. For prime $q \le \poly(n)$ it follows from worst-case quantum hardness of approximating [[shortest-vector-problem|GapSVP]] or [[shortest-independent-vectors-problem|SIVP]] to within $\tilde{O}(n/\alpha) = \tilde{O}(n^{1+c})$ ([[gapsvp-to-lwe-reg05|Quantum polynomial-factor GapSVP ⇒ LWE]]; [[sivp-to-lwe-reg05|Quantum polynomial-factor SIVP ⇒ LWE]]) — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]].

### Quasi-polynomially hard LWE

LWE with polynomial modulus-to-noise ratio is **quasi-polynomially hard** if for every choice of $c$, $q$ and $m$ above and every constant $d \ge 1$, for all sufficiently large $n$ every adversary $\calA$ of size at most $2^{(\log n)^d}$ has $\Adv^{\text{lwe}}_{n,q,\chi,m,\calA}(\secpar) \le 2^{-(\log n)^d}$, with $\chi$ the discrete Gaussian of width $\alpha q$. Quasi-polynomial hardness of LWE at polynomial modulus-to-noise ratio is the assumption behind the statistical zap arguments of [[BLNWW25 - A Hidden-Bits Approach to Statistical ZAPs from LWE|BLNWW25]] ([[quasi-polynomial-lwe-to-statistical-zap-argument-blnww25|Quasi-polynomially hard LWE ⇒ Statistical zap arguments]]).

## Normal-form LWE

**Normal-form LWE** is decision LWE with the secret drawn from the error distribution, $\mathbf{s} \gets \chi^n$, instead of uniformly from $\ZZ_q^n$; its hardness for prime $q$ was first shown by [[ACPS09 - Fast Cryptographic Primitives and Circular-Secure Encryption Based on Hard Learning Problems|ACPS09]], as credited by [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Section 2.3).

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{nflwe}}_{n,q,\chi,m,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{A} \getsr \ZZ_q^{m \times n}$ ; $\mathbf{s} \gets \chi^n$ ; $\mathbf{e} \gets \chi^m$
\Comment{The secret has the error distribution}
\State $b \getsr \bits$
\State $\mathbf{u}_0 \gets \mathbf{A}\mathbf{s} + \mathbf{e}$ ; $\mathbf{u}_1 \getsr \ZZ_q^m$
\State $\hat{b} \gets \calA(1^\secpar, \mathbf{A}, \mathbf{u}_b)$
\Return $[\hat{b} = b]$
\end{algorithmic}
\end{algorithm}
```

**Normal-form LWE is hard** for $(n, q, \chi, m)$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{nflwe}}_{n,q,\chi,m,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{nflwe}}_{n,q,\chi,m,\calA}(\secpar)=1\right]-1\right|
$$

is negligible. As an object, normal-form LWE denotes the prime-modulus part of the regime of [[#LWE with polynomial modulus-to-noise ratio|LWE with polynomial modulus-to-noise ratio]]: there is a $\poly(\secpar)$-computable $n = n(\secpar)$ with $\secpar^{c_0} \le n \le \poly(\secpar)$ for some constant $c_0 > 0$ such that for every constant $c > 0$, every prime $q \le 2^{\poly(n)}$ with $\alpha q \ge 2\sqrt{n}$ for $\alpha := n^{-c}$, and every $m = \poly(n)$, normal-form LWE is hard for $(n, q, D_{\ZZ,\alpha q}, m)$. The bound $n \ge \secpar^{c_0}$ makes $m = \poly(n)$ the same as $m = \poly(\secpar)$. A scheme of dimension $n$ may thus choose $c$, the prime $q$ and the number of samples. Its relation to uniform-secret LWE is in [[#Uniform and normal-form secrets|§ Uniform and normal-form secrets]].

## Sub-exponential LWE

LWE is **sub-exponentially hard** if for every constant $c > 0$, every prime $q \le \poly(n)$ with $\alpha q \ge 2\sqrt{n}$ for $\alpha := n^{-c}$, and every $m = \poly(n)$, there is a constant $\varepsilon > 0$ such that every adversary $\calA$ of size at most $2^{n^{\varepsilon}}$ has $\Adv^{\text{lwe}}_{n,q,\chi,m,\calA}(\secpar) \le 2^{-n^{\varepsilon}}$, with $\chi$ the discrete Gaussian of width $\alpha q$. Fixing the noise matters: for $\chi$ uniform on $\ZZ_q$ every adversary has advantage $0$. It follows from sub-exponential quantum hardness of worst-case lattice problems through [[sivp-to-lwe-reg05|Regev's reduction]], whose overhead is polynomial in $n$, the adversary's size and its inverse advantage — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]].

## LWE with superpolynomial modulus-to-noise ratio

LWE is hard **with superpolynomial modulus-to-noise ratio** if, for some $n = n(\secpar)$ as in [[#Assumption|§ Assumption]], some $r = r(\secpar) = \secpar^{\omega(1)}$ computable to $k$ bits of precision in time $\poly(\secpar, k)$, some $\poly(\secpar)$-computable modulus $q \le 2^{\poly(\secpar)}$ and every $m = \poly(\secpar)$, decision LWE is hard for every efficient adversary with $\chi$ a discrete Gaussian of width $\alpha q \ge 2\sqrt{n}$ and $1/\alpha = r(\secpar)$. Hardness [[#LWE with sub-exponential modulus-to-noise ratio|at sub-exponential ratio]] implies it ([[subexponential-modulus-lwe-to-superpolynomial-ratio-lwe|LWE with sub-exponential ratio ⇒ LWE with superpolynomial ratio]]) for the ratio $r(\secpar) = 2^{n^{\varepsilon}} \ge 2^{\secpar^{c\varepsilon}} = \secpar^{\omega(1)}$, computable to $k$ bits in time $\poly(\secpar, k)$ since $n$ is $\poly(\secpar)$-computable and $\varepsilon$ is rational, with $c$ and $\varepsilon$ as there and the same $\poly(\secpar)$-computable modulus $q \le 2^{\poly(n)} \le 2^{\poly(\secpar)}$; every $m = \poly(\secpar)$ is $\poly(n)$, since $\secpar \le n^{1/c}$ — folklore.

## LWE with sub-exponential modulus-to-noise ratio

LWE is hard **with sub-exponential modulus-to-noise ratio** if for some $n = n(\secpar)$ as in [[#Assumption|§ Assumption]] with $n \ge \secpar^c$ for some constant $c > 0$, some rational constant $\varepsilon \in (0, 1)$, some $\poly(\secpar)$-computable modulus $q \le 2^{\poly(n)}$ and every $m = \poly(n)$, decision LWE is hard for every efficient adversary with $\chi$ a discrete Gaussian of width $\alpha q \ge 2\sqrt{n}$ and $1/\alpha = 2^{n^{\varepsilon}}$. Unlike [[#Sub-exponential LWE|sub-exponential LWE]], the adversaries are polynomial-time; the large ratio is what attribute-based encryption for circuits of polynomial depth uses ([[subexponential-modulus-lwe-to-abe-selective-security-gvw13|LWE with sub-exponential ratio ⇒ Selectively secure ABE for circuits (GVW)]]) — [[GVW13 - Attribute-based encryption for circuits|GVW13]].

### Sub-exponential hardness at sub-exponential ratio

LWE with sub-exponential modulus-to-noise ratio is **sub-exponentially hard** if, with the parameters above, there is moreover a constant $\delta > 0$ such that for all sufficiently large $n$ every adversary of size at most $2^{n^{\delta}}$ has advantage at most $2^{-n^{\delta}}$. The iO construction of [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]] assumes sub-exponential hardness of LWE at ratio $2^{k^{\varepsilon}}$ in dimension $k = \poly(\secpar)$ over $\ZZ_p$, where $p$ is an efficiently samplable $\secpar$-bit prime, the order of its bilinear groups (arXiv v1, Theorem 5.5). That modulus is sampled, where this section fixes one modulus function $q$; the premise is stated with its group under [[decisional-diffie-hellman#sxdh-lwe-and-lpn-over-a-common-prime|SXDH, LWE and LPN over a common prime]].

## Learning with rounding

**Learning with rounding (LWR)** replaces the random error of LWE by deterministic rounding — [[BPR12 - Pseudorandom Functions and Lattices|BPR12]]. For moduli $q > p \ge 2$, let $\lfloor x \rceil_p := \lfloor (p/q) \cdot x \rceil \bmod p$ for $x \in \ZZ_q$, applied coordinate-wise. LWR is **hard** if there are moduli $q = q(n) \le 2^{\poly(n)}$ and $p = p(n) \ge 2$ with $q/p = n^{\omega(1)}$ such that for every $m = \poly(n)$ and all efficient $\calA$,

$$
\left|\Pr\!\left[\calA(1^\secpar, \mathbf{A}, \lfloor \mathbf{A}\mathbf{s} \rceil_p) = 1\right] - \Pr\!\left[\calA(1^\secpar, \mathbf{A}, \lfloor \mathbf{u} \rceil_p) = 1\right]\right|
$$

is negligible, over $\mathbf{A} \getsr \ZZ_q^{m \times n}$, $\mathbf{s} \getsr \ZZ_q^n$ and $\mathbf{u} \getsr \ZZ_q^m$. Decision LWE with $B$-bounded errors implies LWR for $q \ge pB \cdot n^{\omega(1)}$ ([[subexponential-modulus-lwe-to-lwr-bpr12|LWE with sub-exponential ratio ⇒ LWR]]) — [[BPR12 - Pseudorandom Functions and Lattices|BPR12]].

## Ring LWE

**Ring LWE (RLWE)** restricts LWE to a polynomial ring — [[LPR10 - On ideal lattices and learning with errors over rings|LPR10]]. Let $R = \ZZ[x]/(f)$, where $f$ is a cyclotomic polynomial of degree $n$ or $f = x^n + 1$, and $R_q = R/qR$; the usual choice is $f = x^n + 1 = \Phi_{2n}$ for $n$ a power of two. A Ring LWE sample is a pair $(a, a s + e) \in R_q \times R_q$ for a uniform $a \in R_q$, a secret $s \in R_q$ shared by all samples, and a short error $e \in R$. The errors $(e_1, \ldots, e_\ell)$ of $\ell$ samples are drawn from an efficiently samplable distribution $\chi_\ell$ over $R^\ell$: in the usual case $\chi_\ell = \chi^\ell$ for one distribution $\chi$ over $R$, and it may also be a mixture over instances, such as the elliptical Gaussians of [[LPR10 - On ideal lattices and learning with errors over rings|LPR10]], whose widths are drawn once per instance.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{rlwe}}_{f,q,\chi,\ell,\calA}(\secpar)$}
\begin{algorithmic}
\State $s \getsr R_q$ ; $a_1, \ldots, a_\ell \getsr R_q$ ; $(e_1, \ldots, e_\ell) \gets \chi_\ell$
\State $b \getsr \bits$
\State $u_{0,i} \gets a_i s + e_i$ ; $u_{1,i} \getsr R_q$ for each $i \in [\ell]$
\State $\hat{b} \gets \calA(1^\secpar, (a_i, u_{b,i})_{i \in [\ell]})$
\Return $[\hat{b} = b]$
\end{algorithmic}
\end{algorithm}
```

**Ring LWE is hard** for $(f, q, \chi_\ell, \ell)$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{rlwe}}_{f,q,\chi,\ell,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{rlwe}}_{f,q,\chi,\ell,\calA}(\secpar)=1\right]-1\right|
$$

is negligible. As an object, Ring LWE denotes: there are $\poly(\secpar)$-computable $n \le \poly(\secpar)$, $f$ and $q$ with $\lceil \log q \rceil \le \poly(\secpar)$, and error distributions $\chi_\ell$ that are $B$-bounded except with negligible probability ($\|e_i\|_\infty \le B$ for all $i$, in the coefficient embedding) for some $B \le q/4$, such that Ring LWE is hard for $(f, q, \chi_\ell, \ell)$ for every $\ell = \poly(\secpar)$.

The key advantage is efficiency: $n$ rows of the random matrix $\mathbf{A}$ in plain LWE ($n^2$ elements of $\ZZ_q$, or $n^2 \log q$ bits) are replaced by a single ring element $a \in R_q$ ($n \log q$ bits), and multiplication in $R_q$ can be computed in $O(n \log n)$ time via the Number Theoretic Transform (NTT). This yields:

- **Key size**: $O(n \log q)$ bits (vs. $O(n^2 \log q)$ for plain LWE)
- **Computation**: $O(n \log n)$ per operation (vs. $O(n^2)$)

Ring LWE admits a quantum worst-case to average-case reduction from the **Ideal-SVP** problem (shortest vector in ideal lattices), giving a hardness foundation analogous to LWE's reduction from SVP ([[ideal-svp-to-ring-lwe-lpr10|Ideal-SVP ⇒ Ring LWE]]) — [[LPR10 - On ideal lattices and learning with errors over rings|LPR10]].

Ring LWE is the basis for NewHope and is closely related to the NTRU cryptosystem.

### Ring LWE with quasi-polynomial approximation factors

For integers $n = n(\secpar)$ and $q = q(\secpar)$ and an error distribution $\chi$ over $R = \ZZ_q[Z]/(Z^n + 1)$, $\mathrm{RingLWE}_{n,q,\chi}$ holds if for every $\ell = \poly(\secpar)$ the samples $(a_i, a_i \cdot s + e_i)_{i \in [\ell]}$ are computationally indistinguishable from $(a_i, u_i)_{i \in [\ell]}$, for $s, a_i, u_i \getsr R$ and $e_i \gets \chi$; $\chi$ is $\beta$-bounded if $\|e\|_\infty \le \beta$ with probability 1. Ring LWE is hard **with quasi-polynomial approximation factors** if, given $\secpar$ and a gap parameter $t$, one can find in deterministic time $\poly(\secpar, t)$ parameters $n = \poly(\secpar, t)$, $\beta = \poly(\secpar, t)$, a $\beta$-bounded distribution $\chi$ samplable in time $\poly(\secpar, t)$ and $q = \secpar^{\poly(t)}$ with $q > (2\beta n)^t$, such that $\mathrm{RingLWE}_{n,q,\chi}$ holds for every $t(\secpar) = \polylog(\secpar)$ — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]] (Definition 2.3 and §2.2). It is implied by the $2^{\polylog(n)}$ quantum hardness of approximating the shortest vector problem in ideal lattices to within factors $2^{\polylog(n)}$ — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]].

## Module LWE

**Module LWE (MLWE)** interpolates between plain LWE (large random matrices, no algebraic structure) and Ring LWE (maximum structure, ring elements) by considering **rank-$k$ modules over $R_q$**. Let $R = \ZZ[x]/(f)$, where $f$ is a cyclotomic polynomial of degree $d$ or $f = x^d + 1$ (the case $d = 1$, $R = \ZZ$, included), and $R_q = R/qR$. A Module LWE sample of rank $k$ is $(\mathbf{A}, \mathbf{A}\mathbf{s} + \mathbf{e})$ for a uniform $\mathbf{A} \in R_q^{m \times k}$, a uniform secret $\mathbf{s} \in R_q^k$, and a short error vector $\mathbf{e} \in R^m$ drawn from an efficiently samplable distribution $\chi_m$ over $R^m$, as for [[#Ring LWE|Ring LWE]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{mlwe}}_{f,q,k,\chi,m,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{A} \getsr R_q^{m \times k}$ ; $\mathbf{s} \getsr R_q^k$ ; $\mathbf{e} \gets \chi_m$
\State $b \getsr \bits$
\State $\mathbf{u}_0 \gets \mathbf{A}\mathbf{s} + \mathbf{e}$ ; $\mathbf{u}_1 \getsr R_q^m$
\State $\hat{b} \gets \calA(1^\secpar, \mathbf{A}, \mathbf{u}_b)$
\Return $[\hat{b} = b]$
\end{algorithmic}
\end{algorithm}
```

**Module LWE is hard** for $(f, q, k, \chi_m, m)$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{mlwe}}_{f,q,k,\chi,m,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{mlwe}}_{f,q,k,\chi,m,\calA}(\secpar)=1\right]-1\right|
$$

is negligible. As an object, Module LWE denotes: there are $\poly(\secpar)$-computable $d, k \le \poly(\secpar)$, $f$ and $q$ with $\lceil \log q \rceil \le \poly(\secpar)$, and error distributions $\chi_m$ that are $B$-bounded except with negligible probability for some $B \le q/4$, such that Module LWE is hard for $(f, q, k, \chi_m, m)$ for every $m = \poly(\secpar)$.

The module structure provides a flexible trade-off between efficiency (like Ring LWE) and conservative security assumptions (less algebraic structure than Ring LWE). FIPS 203 specifies ML-KEM, a key-encapsulation mechanism derived from CRYSTALS-Kyber, and relates its security to the hardness of Module LWE — [[NIST24 - Module-Lattice-Based Key-Encapsulation Mechanism Standard|NIST24]]. Constructions from Module LWE:

- [[module-lwe-to-kem|Module LWE ⇒ IND-CCA KEM]]
- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ SUF-CMA DS]]

Hardness of Module LWE reduces to worst-case problems on module lattices ([[module-svp-to-module-lwe-ls15|Module-SIVP ⇒ Module LWE]]) — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]].

### Rank-1 Module LWE

At module rank $k = 1$, Module LWE coincides with [[#Ring LWE|Ring LWE]] (one ring element per equation; [[module-lwe-to-ring-lwe-ls15|Module LWE (rank 1) ⇔ Ring LWE]]) — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]]. As an object, rank-1 Module LWE denotes Module LWE at $k = 1$ with the quantifiers of Ring LWE: there are $n$, $f$, $q$ and $B$-bounded error distributions $\chi_m$ as there such that Module LWE is hard for $(f, q, 1, \chi_m, m)$ for every $m = \poly(\secpar)$.

### Degree-1 Module LWE

Over the degree-1 ring $R = \ZZ$ ($R_q = \ZZ_q$) at module rank $k = n$, Module LWE coincides with plain LWE in dimension $n$ ([[module-lwe-to-lwe-ls15|Module LWE (degree 1) ⇔ LWE]]) — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]]. As an object, degree-1 Module LWE denotes Module LWE over $R = \ZZ$ at rank $k = n$ with the quantifiers of [[#Assumption|LWE]]: there are $n$, $q$ and $\alpha$ as there such that Module LWE over $\ZZ$ is hard at rank $n$ with error $D_{\ZZ,\alpha q}^m$ for every $m = \poly(\secpar)$.

## Hint LWE

**Hint LWE** augments standard LWE with auxiliary "hint" information about the secret $\mathbf{s}$ — [[DDRG20 - LWE with Side Information Attacks and Concrete Security Estimation|DDRG20]]. The adversary receives, in addition to the LWE challenge, $\ell$ hint pairs $(\mathbf{v}_i,\, \mathbf{v}_i^\top\mathbf{s} + e'_i)$ for known vectors $\mathbf{v}_i$ and small noise $e'_i \gets \chi'$. Both the LWE samples and the hints share the same secret $\mathbf{s}$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{hlwe}}_{n,q,\chi,\chi',m,\ell,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{A} \getsr \ZZ_q^{m \times n}$; $\mathbf{s} \getsr \ZZ_q^n$; $\mathbf{e} \gets \chi^m$
\State $\mathbf{v}_1, \ldots, \mathbf{v}_\ell \getsr \ZZ_q^n$; $e'_1, \ldots, e'_\ell \gets \chi'$
\State $h_i \gets \mathbf{v}_i^\top \mathbf{s} + e'_i$ for each $i \in [\ell]$
\Comment{Hints computed from the same $\mathbf{s}$ in both worlds}
\State $b \getsr \bits$
\State $\mathbf{u}_0 \gets \mathbf{A}\mathbf{s} + \mathbf{e}$; $\mathbf{u}_1 \getsr \ZZ_q^m$
\State $b' \gets \calA(1^\secpar, \mathbf{A}, \mathbf{u}_b,\, \{(\mathbf{v}_i, h_i)\}_{i \in [\ell]})$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

**Hint LWE is hard** for $(n,q,\chi,\chi',m,\ell)$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{hlwe}}_{n,q,\chi,\chi',m,\ell,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{hlwe}}_{n,q,\chi,\chi',m,\ell,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

Hint LWE arises in:

- **Decryption failures and scheme constraints**: ciphertexts that fail to decrypt, and structural constraints of schemes such as LAC, Round5 and NTRU, yield hints on the secret — [[DDRG20 - LWE with Side Information Attacks and Concrete Security Estimation|DDRG20]]
- **Side-channel and leakage attacks**: partial key leakage from implementation attacks can be modeled as hint information, enabling lattice reduction with fewer samples — [[DDRG20 - LWE with Side Information Attacks and Concrete Security Estimation|DDRG20]]

The hardness depends sensitively on the number and precision of hints: few low-precision hints can be absorbed by adjusting the error distribution (LWE remains hard), but enough exact hints determine $\mathbf{s}$ entirely and break the assumption.

## Evasive LWE

**Evasive LWE** is a non-standard strengthening of decision LWE, introduced by Wee — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]] — to construct optimal [[broadcast-encryption|broadcast encryption]] ([[evasive-lwe-to-be-wee22|Evasive LWE + LWE ⇒ Selectively secure BE]]) and [[attribute-based-encryption|attribute-based encryption]]. Unlike a single-game hardness assumption, it is stated as an **implication** between two indistinguishability conditions, quantified over a PPT sampler.

The assumption is parameterized by $\poly(\secpar)$-computable functions $n, m, m', t, q$ of $\secpar$ with $n, m, m', t, \lceil \log q \rceil \le \poly(\secpar)$, the error distribution $\chi = D_{\ZZ,\alpha q}$ (the [[discrete-gaussian|discrete Gaussian]] of width $\alpha q$ reduced modulo $q$, with $\alpha q \ge 2\sqrt{n}$, the convention of the other LWE assumptions), a Gaussian parameter $\sigma$, and a PPT sampler $\mathrm{Samp}$ that on input $1^\secpar$ produces:

- $\mathbf{A}' \in \ZZ_q^{n \times m'}$ — an auxiliary LWE matrix,
- $\mathbf{P} \in \ZZ_q^{n \times t}$ — a target matrix (with $m \le t$, so $\mathbf{P}$ is at least as wide as $\mathbf{B}$),
- $\mathrm{aux} \in \bits^*$ — auxiliary information, required to contain $\mathrm{Samp}$'s coin tosses (public-coin restriction).

The matrix $\mathbf{B} \in \ZZ_q^{n \times m}$ is produced by $\mathrm{TrapGen}(1^n, q)$, a standard [[lattice-trapdoor|lattice trapdoor]] algorithm yielding $\mathbf{B} \approx_s \mathrm{Uniform}(\ZZ_q^{n \times m})$ alongside a trapdoor $\tau$; $m$ is at least the least width at which $\mathrm{TrapGen}(1^n, q)$ outputs $\mathbf{B}$ within negligible statistical distance of uniform. The notation $\mathbf{B}^{-1}(\mathbf{P}, \sigma)$ denotes a matrix $\mathbf{K} \in \ZZ^{m \times t}$ sampled with $\tau$ from the discrete Gaussian with parameter $\sigma$ conditioned on $\mathbf{B}\mathbf{K} = \mathbf{P} \pmod{q}$, and $\sigma$ is at least the width at which this sampler's output is within negligible statistical distance of the discrete Gaussian over $\{\mathbf{K} : \mathbf{B}\mathbf{K} = \mathbf{P} \bmod q\}$; $\tau$ is never given to the adversary.

The two games below use the row-vector convention from [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]], where $\mathbf{s} \in \ZZ_q^n$ acts on the left of $n \times m$ matrices (so LWE samples take the form $\mathbf{sB}+\mathbf{e}$). The **PRE-condition** game gives the adversary $\mathbf{P}$ and an LWE sample under $\mathbf{P}$; the **POST-condition** game replaces $(\mathbf{P},\, \mathbf{sP}+\mathbf{e}'')$ with the short preimage $\mathbf{K}$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{pre}}_{\mathrm{eLWE},\calA_0}(\secpar)$}
\begin{algorithmic}
\State $(\mathbf{A}', \mathbf{P}, \mathrm{aux}) \gets \mathrm{Samp}(1^\secpar)$
\State $(\mathbf{B}, \tau) \gets \mathrm{TrapGen}(1^n, q)$
\Comment{$\tau$ not given to $\calA_0$}
\State $\mathbf{s} \getsr \ZZ_q^n$; $b \getsr \bits$
\State $\mathbf{e} \gets \chi^m$; $\mathbf{e}' \gets \chi^{m'}$; $\mathbf{e}'' \gets \chi^t$
\State $\mathbf{u}_0 \gets \mathbf{s}\mathbf{B} + \mathbf{e}$; $\mathbf{u}_1 \getsr \ZZ_q^m$
\State $\mathbf{v}_0 \gets \mathbf{s}\mathbf{A}' + \mathbf{e}'$; $\mathbf{v}_1 \getsr \ZZ_q^{m'}$
\State $\mathbf{w}_0 \gets \mathbf{s}\mathbf{P} + \mathbf{e}''$; $\mathbf{w}_1 \getsr \ZZ_q^t$
\State $b' \gets \calA_0(1^\secpar, \mathbf{A}', \mathbf{B}, \mathbf{P}, \mathrm{aux}, \mathbf{u}_b, \mathbf{v}_b, \mathbf{w}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{post}}_{\mathrm{eLWE},\calA_1}(\secpar)$}
\begin{algorithmic}
\State $(\mathbf{A}', \mathbf{P}, \mathrm{aux}) \gets \mathrm{Samp}(1^\secpar)$
\State $(\mathbf{B}, \tau) \gets \mathrm{TrapGen}(1^n, q)$
\State $\mathbf{K} \gets \mathbf{B}^{-1}(\mathbf{P}, \sigma)$ using $\tau$
\Comment{$\mathbf{BK} = \mathbf{P} \pmod{q}$, cols of $\mathbf{K}$ short}
\State $\mathbf{s} \getsr \ZZ_q^n$; $b \getsr \bits$
\State $\mathbf{e} \gets \chi^m$; $\mathbf{e}' \gets \chi^{m'}$
\State $\mathbf{u}_0 \gets \mathbf{s}\mathbf{B} + \mathbf{e}$; $\mathbf{u}_1 \getsr \ZZ_q^m$
\State $\mathbf{v}_0 \gets \mathbf{s}\mathbf{A}' + \mathbf{e}'$; $\mathbf{v}_1 \getsr \ZZ_q^{m'}$
\State $b' \gets \calA_1(1^\secpar, \mathbf{A}', \mathbf{B}, \mathbf{K}, \mathrm{aux}, \mathbf{u}_b, \mathbf{v}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

Define the corresponding advantage functions:

$$
\Adv^{\mathrm{pre}}_{\mathrm{eLWE},\calA_0}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{pre}}_{\mathrm{eLWE},\calA_0}(\secpar) = 1\right] - 1\right|
$$

$$
\Adv^{\mathrm{post}}_{\mathrm{eLWE},\calA_1}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{post}}_{\mathrm{eLWE},\calA_1}(\secpar) = 1\right] - 1\right|
$$

**Evasive LWE holds** if, for every such parameter tuple, every PPT $\mathrm{Samp}$ and every PPT $\calA_1$, there are a PPT $\calA_0$ and a polynomial $Q$ such that

$$
\Adv^{\mathrm{pre}}_{\mathrm{eLWE},\calA_0}(\secpar) \;\geq\; \frac{\Adv^{\mathrm{post}}_{\mathrm{eLWE},\calA_1}(\secpar)}{Q(\secpar)} - \negl(\secpar).
$$

As an object, evasive LWE denotes this public-coin assumption for every such parameter tuple; a result applies it at one tuple, at which it also assumes [[#Assumption|LWE]].

In other words: if standard LWE remains hard even when $\mathbf{P}$ is given in the clear (pre-condition), then it remains hard even when the short preimage $\mathbf{K}$ is given instead (post-condition). The implication is designed to defeat _zeroizing attacks_: an adversary holding $\mathbf{K}$ could attempt to compute $\mathbf{sP} \approx (\mathbf{sB}+\mathbf{e})\mathbf{K}$ and then distinguish — but the pre-condition already asserts that $\mathbf{sP}+\mathbf{e}''$ is pseudorandom, so this route first violates the pre-condition. Evasive LWE posits that $\mathbf{K}$ grants no additional distinguishing power beyond $\mathbf{P}$ itself.

The public-coin restriction — that $\mathrm{aux}$ contains $\mathrm{Samp}$'s coin tosses — prevents obfuscation-based counterexamples where $\mathrm{aux}$ encodes a program with a hidden trapdoor for $\mathbf{P}$ — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]].

The assumption comes in public-coin and private-coin variants — [[BUW24 - Evasive LWE Assumptions Definitions Classes and Counterexamples|BUW24]]. Public-coin formulations whose pre-condition error exceeds the post-condition error are false — [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]]; see [[#Evasive LWE counterexamples]].

### Private-coin evasive LWE

**Private-coin evasive LWE** uses the same PRE- and POST-condition games, but $\mathrm{aux}$ is not required to contain $\mathrm{Samp}$'s coin tosses — [[BUW24 - Evasive LWE Assumptions Definitions Classes and Counterexamples|BUW24]]. If LWE is hard, several private-coin formulations are false — [[BUW24 - Evasive LWE Assumptions Definitions Classes and Counterexamples|BUW24]], [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]]; see [[#Evasive LWE counterexamples]].

### Circular evasive LWE

**Circular evasive LWE** incorporates circularity into public-coin evasive LWE — [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]]. Assuming public-coin circular evasive LWE, [[HLL23 - Attribute-Based Encryption for Circuits of Unbounded Depth from Lattices Garbled Circuits of Optimal Size, Laconic Functional Evaluation, and More|HLL23]] construct [[attribute-based-encryption|ABE]] for circuits of unbounded depth, with master public key and ciphertexts of size linear in the attribute length and constant-size secret keys — [[HLL23 - Attribute-Based Encryption for Circuits of Unbounded Depth from Lattices Garbled Circuits of Optimal Size, Laconic Functional Evaluation, and More|HLL23]]. Public-coin circular evasive LWE is false: some sampler satisfies the pre-condition but not the post-condition — [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]]; see [[#Evasive LWE counterexamples]]. TODO — formal definition.

## Tensor LWE

**Tensor LWE** is a variant of LWE introduced by Wee — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]]. From [[#Evasive LWE|evasive LWE]], tensor LWE and LWE, [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]] constructs ciphertext-policy [[attribute-based-encryption|ABE]] for circuits of a-priori bounded polynomial depth, with parameter sizes independent of the circuit size; its security is very selective, the adversary fixing the challenge policy and all its key queries before setup — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]]. TODO — formal definition.

## Succinct LWE

**Succinct LWE** is a falsifiable, single-game strengthening of LWE introduced by Wee — [[Wee24 - Circuit ABE with poly(depth, lambda)-Sized Ciphertexts and Keys from Lattices|Wee24]] — and used to construct KP- and CP-ABE for circuits with $O(1)$-size ciphertexts and keys ([[succinct-lwe-to-abe-wee25|Succinct LWE ⇒ ABE]]) — [[Wee25 - Almost Optimal KP and CP-ABE for Circuits from Succinct LWE|Wee25]]. Unlike [[#Evasive LWE|Evasive LWE]] (an implication between two conditions), it is a standard indistinguishability game: an LWE sample $(\mathbf{B}, \mathbf{s}\mathbf{B}+\mathbf{e})$ is indistinguishable from uniform even when the adversary is given a short matrix $T$ satisfying $[I_\ell \otimes \mathbf{B} \mid \mathbf{W}] \cdot T = I_\ell \otimes \mathbf{G}$, where $\ell = \poly(\secpar)$ and $\mathbf{G}$ is the MP12 gadget matrix.

The parameters $n$, $m$ and $q$ are $\poly(\secpar)$-computable functions of $\secpar$ with $n, m, \lceil \log q \rceil \le \poly(\secpar)$, and the error distribution is $\chi = D_{\ZZ,\alpha q}$ with $\alpha q \ge 2\sqrt{n}$ and $\alpha \le n^{-c}$ for a constant $c > 0$, the class of [[#Assumption|LWE]]. The public parameters $\pp_\ell = (\mathbf{B}, \mathbf{W}, T)$ are generated in three steps. First, $(\mathbf{B}, T_\mathbf{B}) \gets \mathrm{TrapGen}(1^n, 1^m, q)$ — the Micciancio-Peikert lattice trapdoor algorithm — [[MP12 - Trapdoors for Lattices Simpler Tighter Faster Smaller|MP12]] (building on [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]]) — outputs $\mathbf{B} \in \ZZ_q^{n \times m}$ statistically close to uniform together with a short trapdoor $T_\mathbf{B} \in \ZZ^{m \times w}$ satisfying $\mathbf{B} T_\mathbf{B} = \mathbf{G}$; write $m_0(n, q)$ for the least width $m$ at which $\mathrm{TrapGen}(1^n, 1^m, q)$ is defined, that is, outputs such a pair. The gadget matrix $\mathbf{G} = \mathbf{G}_n = I_n \otimes \mathbf{g}^\top \in \ZZ_q^{n \times w}$, with $w = n\lceil \log q \rceil$ and $\mathbf{g} = (1, 2, 4, \ldots, 2^{\lceil \log q \rceil - 1})$, has short preimages of every target that are efficiently computable without any trapdoor, and $T_\mathbf{B}$ turns them into short preimages under $\mathbf{B}$ — [[MP12 - Trapdoors for Lattices Simpler Tighter Faster Smaller|MP12]]. Second, $\mathbf{W} \getsr \ZZ_q^{\ell n \times m}$ is sampled uniformly. Third, $T \gets \mathrm{SamplePre}([I_\ell \otimes \mathbf{B} \mid \mathbf{W}],\, I_\ell \otimes T_\mathbf{B},\, I_\ell \otimes \mathbf{G},\, \sigma)$ uses the block trapdoor $I_\ell \otimes T_\mathbf{B}$ (for the $I_\ell \otimes \mathbf{B}$ columns) to sample a short Gaussian matrix $T \in \ZZ^{(\ell+1)m \times \ell w}$ satisfying $[I_\ell \otimes \mathbf{B} \mid \mathbf{W}] \cdot T = I_\ell \otimes \mathbf{G} \pmod{q}$; the Gaussian parameter $\sigma$ is at least the width at which $\mathrm{SamplePre}$ with this block trapdoor outputs $T$ within negligible statistical distance of the discrete Gaussian over these solutions.

The trapdoor $T_\mathbf{B}$ is discarded after setup; only $\pp_\ell = (\mathbf{B}, \mathbf{W}, T)$ is made public. Because $T \in \ZZ^{(\ell+1)m \times \ell w}$, the parameters have size $\ell^2 \cdot \poly(\secpar)$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sLWE}}_{\ell,n,q,\chi,m,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\mathbf{B}, T_\mathbf{B}) \gets \mathrm{TrapGen}(1^n, 1^m, q)$
\Comment{$\mathbf{B} \approx_s \mathrm{Uniform}(\ZZ_q^{n \times m})$; $\mathbf{B} T_\mathbf{B} = \mathbf{G}$}
\State $\mathbf{W} \getsr \ZZ_q^{\ell n \times m}$
\State $T \gets \mathrm{SamplePre}([I_\ell \otimes \mathbf{B} \mid \mathbf{W}],\; I_\ell \otimes T_\mathbf{B},\; I_\ell \otimes \mathbf{G},\; \sigma)$
\Comment{$[I_\ell \otimes \mathbf{B} \mid \mathbf{W}] \cdot T = I_\ell \otimes \mathbf{G}$; $T$ short, $T_\mathbf{B}$ not given to $\calA$}
\State $\mathbf{s} \getsr \ZZ_q^n$; $\mathbf{e} \gets \chi^m$; $b \getsr \bits$
\State $\mathbf{u}_0 \gets \mathbf{s}\mathbf{B} + \mathbf{e}$; $\mathbf{u}_1 \getsr \ZZ_q^m$
\State $b' \gets \calA(1^\secpar, \mathbf{B}, \mathbf{W}, T, \mathbf{u}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

The game uses the row-vector convention of Wee25 ($\mathbf{s} \in \ZZ_q^n$ acts on the left of $\mathbf{B} \in \ZZ_q^{n \times m}$), matching the [[#Evasive LWE|Evasive LWE]] section above.

**$\ell$-Succinct LWE is hard** for $(n, q, \chi, m, \sigma)$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{sLWE}}_{\ell,n,q,\chi,m,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sLWE}}_{\ell,n,q,\chi,m,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. As an object, succinct LWE denotes: there are such $n$, $q$ and $\alpha$ such that, for every $\ell = \ell(\secpar) \le \poly(\secpar)$, every $m$ with $m_0(n, q) \le m \le \poly(\secpar)$ and every $\poly(\secpar)$-computable $\sigma$ at least the width above, $\ell$-succinct LWE is hard for $(n, q, D_{\ZZ,\alpha q}, m, \sigma)$. When $\ell = 1$ the condition is equivalent to standard LWE, since $(\mathbf{W}, T)$ can be sampled from a uniform $\mathbf{B}$ using a trapdoor for $\mathbf{W}$ alone — [[Wee24 - Circuit ABE with poly(depth, lambda)-Sized Ciphertexts and Keys from Lattices|Wee24]]. The assumption strengthens as $\ell$ grows. Succinct LWE is implied by evasive LWE ([[succinct-lwe-to-evasive-lwe|Evasive LWE + LWE ⇒ Succinct LWE]]) — [[Wee24 - Circuit ABE with poly(depth, lambda)-Sized Ciphertexts and Keys from Lattices|Wee24]].

The primary application is attribute-based encryption with $O(1)$-size ciphertexts and secret keys for arbitrary circuits — [[Wee25 - Almost Optimal KP and CP-ABE for Circuits from Succinct LWE|Wee25]].

<!-- BEGIN GENERATED participates-in 5287caf48ee1 -->

## Participates in

**Builds on Learning with errors**

- [[decision-lwe-to-lwe|Decision LWE ⇒ LWE]] (via [[learning-with-errors#decision-lwe|Decision LWE]])
- [[decision-lwe-to-search-lwe|Decision LWE ⇒ Search LWE]] (via [[learning-with-errors#decision-lwe|Decision LWE]])
- [[succinct-lwe-to-evasive-lwe|Evasive LWE + LWE ⇒ Succinct LWE]]
- [[evasive-lwe-to-be-wee22|Evasive LWE + LWE ⇒ Selectively secure BE]]
- [[lwe-to-depir-lmw23|Ring-LWE with quasi-polynomial factors ⇒ Unkeyed DEPIR]] (via [[learning-with-errors#ring-lwe-with-quasi-polynomial-approximation-factors|Ring LWE with quasi-polynomial approximation factors]])
- [[lwe-to-hibe-selective-security-chkp10|LWE ⇒ Selectively secure HIBE (bonsai trees)]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]])
- [[lwe-to-ibe-gpv08|LWE ⇒ IBE (Gentry–Peikert–Vaikuntanathan, random oracle model)]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]])
- [[lwe-to-leakage-resilient-pke-agv09|LWE ⇒ LR-PKE (Regev)]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]])
- [[lwe-to-leveled-fully-homomorphic-encryption-bgv12|LWE with sub-exponential ratio ⇒ Leveled FHE (BGV12)]] (via [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]])
- [[lwe-to-leveled-fully-homomorphic-encryption-bv14|LWE with polynomial ratio ⇒ Leveled FHE (BV14)]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]])
- [[lwe-to-lossy-trapdoor-function-pw08|LWE ⇒ Lossy TDF (Peikert–Waters)]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]])
- [[lwe-to-malicious-ot-security-pvw08|LWE ⇒ Two-round UC-secure OT (PVW)]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]])
- [[lwe-to-nizk-ps19|LWE ⇒ NIZK]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]])
- [[lwe-to-pke-reg05|LWE with polynomial ratio ⇒ CPA-secure PKE (Regev)]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]])
- [[lwe-to-tdh-dgi-19|LWE with superpolynomial ratio ⇒ TDH]] (via [[learning-with-errors#lwe-with-superpolynomial-modulus-to-noise-ratio|LWE with superpolynomial modulus-to-noise ratio]])
- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ SUF-CMA DS]] (via [[learning-with-errors#module-lwe|Module LWE]])
- [[module-lwe-to-kem|Module LWE ⇒ IND-CCA KEM]] (via [[learning-with-errors#module-lwe|Module LWE]])
- [[module-lwe-to-lwe-ls15|Module LWE (degree 1) ⇔ LWE]] (via [[learning-with-errors#degree-1-module-lwe|Degree-1 Module LWE]])
- [[module-lwe-to-ring-lwe-ls15|Module LWE (rank 1) ⇔ Ring LWE]] (via [[learning-with-errors#rank-1-module-lwe|Rank-1 Module LWE]])
- [[normal-form-lwe-to-decision-lwe|Normal-form LWE ⇒ Decision LWE]] (via [[learning-with-errors#normal-form-lwe|Normal-form LWE]])
- [[normal-form-lwe-to-pke-cpa-security-lp11b|Normal-form LWE ⇒ CPA-secure PKE (Lindner–Peikert)]] (via [[learning-with-errors#normal-form-lwe|Normal-form LWE]])
- [[polynomial-ratio-lwe-to-barg-for-np-cjj21|LWE with polynomial ratio ⇒ BARG for NP]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]])
- [[polynomial-ratio-lwe-to-circuit-private-he-nc1-bdpmw16|LWE with polynomial ratio ⇒ Circuit-private HE for NC1]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]])
- [[polynomial-ratio-lwe-to-lwe|LWE with polynomial ratio ⇒ LWE]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]])
- [[polynomial-ratio-lwe-to-normal-form-lwe-acps09|LWE with polynomial ratio ⇒ Normal-form LWE]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]])
- [[polynomial-ratio-lwe-to-sis|LWE with polynomial ratio ⇒ SIS]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]])
- [[polynomial-ratio-lwe-to-snarg-for-p-cjj21|LWE with polynomial ratio ⇒ SNARG for P]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]])
- [[quasi-polynomial-lwe-to-polynomial-ratio-lwe|Quasi-polynomially hard LWE ⇒ LWE with polynomial ratio]] (via [[learning-with-errors#quasi-polynomially-hard-lwe|Quasi-polynomially hard LWE]])
- [[quasi-polynomial-lwe-to-statistical-zap-argument-blnww25|Quasi-polynomially hard LWE ⇒ Statistical zap arguments]] (via [[learning-with-errors#quasi-polynomially-hard-lwe|Quasi-polynomially hard LWE]])
- [[ring-lwe-quasi-polynomial-approximation-to-ring-lwe|Ring-LWE with quasi-polynomial factors ⇒ Ring LWE]] (via [[learning-with-errors#ring-lwe-with-quasi-polynomial-approximation-factors|Ring LWE with quasi-polynomial approximation factors]])
- [[ring-lwe-to-ntru-ss11|Ring LWE ⇒ PKE (NTRUEncrypt with Gaussian keys)]] (via [[learning-with-errors#ring-lwe|Ring LWE]])
- [[search-lwe-to-decision-lwe|Search LWE ⇒ Decision LWE]] (via [[learning-with-errors#search-lwe|Search LWE]])
- [[subexponential-lwe-subexponential-ratio-to-subexponential-modulus-lwe|Sub-exponentially hard LWE at sub-exponential ratio ⇒ LWE with sub-exponential ratio]] (via [[learning-with-errors#sub-exponential-hardness-at-sub-exponential-ratio|Sub-exponential hardness at sub-exponential ratio]])
- [[subexponential-lwe-to-lwe|Sub-exponential LWE ⇒ LWE]] (via [[learning-with-errors#sub-exponential-lwe|Sub-exponential LWE]])
- [[subexponential-lwe-to-pke-reg05|Sub-exponential LWE ⇒ CPA-secure PKE (Regev)]] (via [[learning-with-errors#sub-exponential-lwe|Sub-exponential LWE]])
- [[subexponential-lwe-to-ppad-hardness-jkkz21|Sub-exponential LWE ⇒ PPAD hardness]] (via [[learning-with-errors#sub-exponential-lwe|Sub-exponential LWE]])
- [[subexponential-modulus-lwe-and-nizk-argument-for-np-to-two-round-mpc-mw16|LWE + NIZK ⇒ Two-round MPC in the CRS model (Mukherjee–Wichs)]] (via [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]])
- [[circular-security-and-lwe-to-he|LWE at sub-exponential and polynomial ratios ⇒ Bootstrappable SHE (BV11)]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]], [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]])
- [[subexponential-modulus-lwe-to-abe-selective-security-gvw13|LWE with sub-exponential ratio ⇒ Selectively secure ABE for circuits (GVW)]] (via [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]])
- [[subexponential-modulus-lwe-to-lwe|LWE with sub-exponential ratio ⇒ LWE]] (via [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]])
- [[subexponential-modulus-lwe-to-lwr-bpr12|LWE with sub-exponential ratio ⇒ LWR]] (via [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]])
- [[subexponential-modulus-lwe-to-superpolynomial-ratio-lwe|LWE with sub-exponential ratio ⇒ LWE with superpolynomial ratio]] (via [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]])
- [[succinct-lwe-to-abe-wee25|Succinct LWE ⇒ ABE]] (via [[learning-with-errors#succinct-lwe|Succinct LWE]])
- [[succinct-lwe-to-lwe|Succinct LWE ⇒ LWE]] (via [[learning-with-errors#succinct-lwe|Succinct LWE]])

**Produces Learning with errors**

- [[decision-lwe-to-lwe|Decision LWE ⇒ LWE]]
- [[decision-lwe-to-search-lwe|Decision LWE ⇒ Search LWE]] (via [[learning-with-errors#search-lwe|Search LWE]])
- [[succinct-lwe-to-evasive-lwe|Evasive LWE + LWE ⇒ Succinct LWE]] (via [[learning-with-errors#succinct-lwe|Succinct LWE]])
- [[gapsvp-poly-factor-to-lwe-blprs13|Polynomial-factor GapSVP ⇒ LWE (polynomial modulus)]]
- [[gapsvp-poly-factor-to-lwe-pei09|Polynomial-factor GapSVP ⇒ LWE (exponential modulus)]]
- [[gapsvp-to-lwe-reg05|Quantum polynomial-factor GapSVP ⇒ LWE]]
- [[ideal-svp-to-ring-lwe-lpr10|Quantum polynomial-factor Ideal-SVP ⇒ Ring LWE]] (via [[learning-with-errors#ring-lwe|Ring LWE]])
- [[module-lwe-to-lwe-ls15|Module LWE (degree 1) ⇔ LWE]]
- [[module-lwe-to-ring-lwe-ls15|Module LWE (rank 1) ⇔ Ring LWE]] (via [[learning-with-errors#ring-lwe|Ring LWE]])
- [[module-svp-to-module-lwe-ls15|Module-SIVP ⇒ Module LWE]] (via [[learning-with-errors#module-lwe|Module LWE]])
- [[normal-form-lwe-to-decision-lwe|Normal-form LWE ⇒ Decision LWE]] (via [[learning-with-errors#decision-lwe|Decision LWE]])
- [[polynomial-ratio-lwe-to-lwe|LWE with polynomial ratio ⇒ LWE]]
- [[polynomial-ratio-lwe-to-normal-form-lwe-acps09|LWE with polynomial ratio ⇒ Normal-form LWE]] (via [[learning-with-errors#normal-form-lwe|Normal-form LWE]])
- [[quasi-polynomial-lwe-to-polynomial-ratio-lwe|Quasi-polynomially hard LWE ⇒ LWE with polynomial ratio]] (via [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]])
- [[ring-lwe-quasi-polynomial-approximation-to-ring-lwe|Ring-LWE with quasi-polynomial factors ⇒ Ring LWE]] (via [[learning-with-errors#ring-lwe|Ring LWE]])
- [[search-lwe-to-decision-lwe|Search LWE ⇒ Decision LWE]] (via [[learning-with-errors#decision-lwe|Decision LWE]])
- [[sivp-to-lwe-reg05|Quantum polynomial-factor SIVP ⇒ LWE]]
- [[subexponential-lwe-subexponential-ratio-to-subexponential-modulus-lwe|Sub-exponentially hard LWE at sub-exponential ratio ⇒ LWE with sub-exponential ratio]] (via [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]])
- [[subexponential-lwe-to-lwe|Sub-exponential LWE ⇒ LWE]]
- [[subexponential-modulus-lwe-to-lwe|LWE with sub-exponential ratio ⇒ LWE]]
- [[subexponential-modulus-lwe-to-lwr-bpr12|LWE with sub-exponential ratio ⇒ LWR]] (via [[learning-with-errors#learning-with-rounding|Learning with rounding]])
- [[subexponential-modulus-lwe-to-superpolynomial-ratio-lwe|LWE with sub-exponential ratio ⇒ LWE with superpolynomial ratio]] (via [[learning-with-errors#lwe-with-superpolynomial-modulus-to-noise-ratio|LWE with superpolynomial modulus-to-noise ratio]])
- [[succinct-lwe-to-lwe|Succinct LWE ⇒ LWE]]

<!-- END GENERATED participates-in -->
