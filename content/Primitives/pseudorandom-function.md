---
type: primitive
status: draft
aliases:
  - PRF
  - Pseudorandom function
title: Pseudorandom function
id: prf
variants:
  invertible-prf: "#invertible-prfs"
  pseudorandom-injective-function: "#pseudorandom-injective-functions"
  puncturable-prf: "#puncturable-prfs"
  weak-prf: "#weak-prfs"
---

# Pseudorandom function

A **Pseudorandom Function (PRF)** allows someone to succinctly represent a function that is indistinguishable from a uniformly random function. A user generates a key and uses it to evaluate a function at many points; any efficient adversary who sees only these input-output pairs cannot distinguish them from a truly random function.

## Syntax

A PRF is a pair of efficient algorithms $\PRF= (\KeyGen, \Eval)$ with respect to keyspace $\calK$, domain $\calD$, and range $\calR$:

- $\KeyGen(1^\secpar) \to k,$ is a randomized function that
  samples a key $k \in \calK,$
- $\Eval(k,x) \to y,$ is a deterministic function that
  takes a key $k\in \calK$ and an input $x \in \calD$, outputting $y \in \calR.$

## Properties

### Security

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{prf}}_{\PRF,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $R \getsr \Funcs(\calD,\calR)$
\Comment{Can be sampled lazily for efficiency}
\State $\calO_0(x) := \Eval(k,x)$
\State $\calO_1(x) := R(x)$
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PRF $\PRF$ is **pseudorandom** if for all efficient $\calA$,

$$
\Adv^{\mathrm{prf}}_{\PRF,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{prf}}_{\PRF,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Variations

## Invertible PRFs

An **invertible PRF (iPRF)** extends the PRF with an inversion algorithm, allowing recovery of all inputs that map to a given output. An $\mathsf{iPRF} = (\KeyGen, \Eval, \Invert)$ adds:

- $\Invert(k, y) \to X,$ is a deterministic function that
  returns the preimage set $X = \{x \in \calD : \Eval(k, x) = y\}$

Note that for domains much larger than the range, $\Invert$ may return exponentially many preimages, so efficiency is only meaningful when $|\calD|$ is reasonable relative to $|\calR|$.

### Correctness

With an inversion function, it also makes sense to restrict an iPRF to be **correct**. Meaning if for all $x\in \calD,$
$\Pr[x \in \Invert(k, y): \Eval(k, x) = y] = 1,$
where the probability is taken over $k \gets \KeyGen(1^{\secpar}).$

### Security

Invertible PRFs can either achieve the traditional security game
$\Game^{\mathrm{prf}}$ or can satisfy the stronger security game
$\Game^{\mathrm{iprf}}$ where $\calA$ is additionally given access to
an inversion oracle that returns the pre-image of a given output
$y\in \calR$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{iprf}}_{\mathsf{iPRF},\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $R \getsr \Funcs(\calD,\calR)$
\Comment{Can be sampled lazily for efficiency}
\State $\calO_0(x) := \Eval(k,x)$ ; $\calO_0^{-1}(y) := \Invert(k,y)$
\State $\calO_1(x) := R(x)$ ; $ \calO_1^{-1}(y) := R^{-1}(y)$
\State $b' \gets \calA^{\calO_b,\calO_b^{-1}}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An iPRF $\mathsf{iPRF}$ is **strongly pseudorandom** if for
all efficient $\calA$,

$$
\Adv^{\mathrm{iprf}}_{\mathsf{iPRF},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{iprf}}_{\mathsf{iPRF},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### Related results

- [[prf-to-invertible-prf-hppy25|PRF ⇒ iPRF]]
- [[prp-to-invertible-prf|PRP ⇒ iPRF (large domains)]]

## Pseudorandom Injective Functions

A **pseudorandom injective function** is a PRF with $|\calR| \ge |\calD|$ such that $\Eval(k, \cdot) : \calD \to \calR$ is injective for every key $k$, secure when $\calA$ cannot distinguish $\Eval(k, \cdot)$ from a uniformly random injective function $\calD \to \calR$: the PRF game with $R \getsr \Funcs(\calD,\calR)$ replaced by a uniform injection. With $\calD = \calR$ it is a [[pseudorandom-permutation|PRP]]. A $q$-query distinguisher separates a uniform injection $\calD \to \calR$ from a uniform function $\calD \to \calR$ with advantage at most $q(q-1)/(2|\calR|)$, by the coupling of the [[switching-lemma|switching lemma]], so for $|\calR|$ superpolynomial in $\secpar$ a pseudorandom injective function is a PRF; a PRP on $\calR$ restricted to an injectively encoded $\calD \subseteq \calR$ is a pseudorandom injective function — standard.

Adding an inversion algorithm gives the _invertible pseudorandom functions_ of [[BKW17 - Constrained Keys for Invertible Pseudorandom Functions|BKW17]]: injective PRFs that can be inverted with the key, which for $\calD = \calR$ are exactly strong PRPs. Unlike the iPRFs above, they have at most one preimage per output. [[BKW17 - Constrained Keys for Invertible Pseudorandom Functions|BKW17]] give puncturable and single-key circuit-constrained invertible pseudorandom functions, and show that constrained PRPs are impossible for many classes of constraints under their definition, which is why the range is allowed to exceed the domain.

## Puncturable PRFs

A **puncturable PRF** adds an algorithm $\mathsf{Puncture}(k, x^*) \to k_{x^*}$ outputting a key punctured at $x^* \in \calD$, with $\Eval(k_{x^*}, x) = \Eval(k, x)$ for all $x \ne x^*$. It is secure if for all efficient $\calA$ that output $x^* \in \calD$ before seeing the key, given $k_{x^*}$ the value $\Eval(k, x^*)$ is indistinguishable from uniform in $\calR$ — [[BW13 - Constrained Pseudorandom Functions and Their Applications|BW13]], [[KPTZ13 - Delegatable Pseudorandom Functions and Applications|KPTZ13]], [[BGI14 - Functional Signatures and Pseudorandom Functions|BGI14]]. The [[prg-to-prf-ggm86|GGM]] tree is puncturable: $k_{x^*}$ consists of the seeds of the siblings of the nodes on the path to $x^*$ ([[prg-to-puncturable-prf-bw13|PRG ⇒ puncturable PRF]]). Puncturable PRFs are the PRFs of the punctured-programming proofs of [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

## Weak PRFs

A **weak PRF** has the syntax of a PRF but need only be pseudorandom on uniformly random inputs: instead of choosing evaluation points, $\calA$ receives pairs $(x, \Eval(k, x))$ for fresh $x \getsr \calD$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{wprf}}_{\PRF,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $R \getsr \Funcs(\calD,\calR)$
\Comment{Can be sampled lazily for efficiency}
\State $\calO_0() := (x \getsr \calD;\; (x, \Eval(k,x)))$
\State $\calO_1() := (x \getsr \calD;\; (x, R(x)))$
\Comment{Each query samples a fresh $x$}
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PRF $\PRF$ is **weakly pseudorandom** if for all efficient $\calA$,

$$
\Adv^{\mathrm{wprf}}_{\PRF,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{wprf}}_{\PRF,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Other results

- [[owf-to-prg-hill99|OWF ⇒ PRG]] then [[prg-to-prf-ggm86|PRG ⇒ PRF (GGM)]]
- [[ddh-to-prf-nr97|DDH ⇒ PRF (Naor–Reingold)]]
- [[prf-to-ske|PRF ⇒ CPA-secure SKE]]
- [[prf-to-mac|PRF ⇒ MAC]]

<!-- BEGIN GENERATED participates-in babfd2a7586f -->

## Participates in

**Builds on Pseudorandom function**

- [[hash-function-to-hash-based-signatures|Hash function + PRF ⇒ DS (XMSS)]]
- [[invertible-prfs-to-prf|Invertible PRFs ⇒ PRF]] (via [[pseudorandom-function#invertible-prfs|Invertible PRFs]])
- [[prf-to-garbled-circuits-bhr12|PRF ⇒ Garbled circuits (BHR)]]
- [[prf-to-invertible-prf-hppy25|PRF ⇒ iPRF]]
- [[prf-to-logarithmic-oram-akl-20|PRF ⇒ logarithmic-overhead ORAM (OptORAMa)]]
- [[prf-to-mac|PRF ⇒ MAC]]
- [[prf-to-mac-bkr94|PRF ⇒ MAC (CBC-MAC)]]
- [[prf-to-ope-bclo09|PRF ⇒ OPE (BCLO09)]]
- [[prf-to-ore-first-differing-bit-clww16|PRF ⇒ ORE leaking the first differing bit (CLWW16)]]
- [[prf-to-polylog-oram-go96|PRF ⇒ polylogarithmic-overhead ORAM (hierarchical ORAM)]]
- [[prf-to-prp-lr88|PRF ⇒ PRP]]
- [[prf-to-ske|PRF ⇒ CPA-secure SKE]]
- [[prf-to-strong-pseudorandom-permutation-lr88|PRF ⇒ Strong PRP]]
- [[semi-honest-two-party-computation-and-prf-to-oprf|Semi-honest 2PC + PRF ⇒ OPRF]]
- [[two-party-computation-and-prf-to-malicious-oprf|2PC + PRF ⇒ Malicious OPRF]]
- [[weak-prf-to-leakage-resilient-stream-cipher-pie09|Weak PRF ⇒ Leakage-resilient stream cipher]] (via [[pseudorandom-function#weak-prfs|Weak PRFs]])

**Produces Pseudorandom function**

- [[alternating-moduli-assumption-to-prf-bip-18|Weak alternating moduli ⇒ weak PRF]] (via [[pseudorandom-function#weak-prfs|Weak PRFs]])
- [[ddh-to-prf-nr97|DDH ⇒ PRF (Naor–Reingold)]]
- [[invertible-prfs-to-prf|Invertible PRFs ⇒ PRF]]
- [[prf-to-invertible-prf-hppy25|PRF ⇒ iPRF]] (via [[pseudorandom-function#invertible-prfs|Invertible PRFs]])
- [[prg-to-prf-ggm86|PRG ⇒ PRF (GGM)]]
- [[prg-to-puncturable-prf-bw13|PRG ⇒ puncturable PRF]] (via [[pseudorandom-function#puncturable-prfs|Puncturable PRFs]])
- [[prp-to-invertible-prf|PRP ⇒ iPRF (large domains)]] (via [[pseudorandom-function#invertible-prfs|Invertible PRFs]])
- [[prp-to-prf|PRP ⇒ PRF]]

<!-- END GENERATED participates-in -->
