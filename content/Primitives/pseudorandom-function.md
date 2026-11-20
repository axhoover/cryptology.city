---
type: primitive
status: draft
aliases:
  - PRF
  - Pseudorandom function
title: Pseudorandom function
id: prf
variants:
  compression-function-prf: "#compression-function-prfs"
  invertible-prf: "#invertible-prfs"
  key-expanding-weak-prf: "#key-expanding-weak-prfs"
  non-uniform-compression-function-prf: "#non-uniform-compression-function-prfs"
  non-uniform-prf: "#security-against-non-uniform-adversaries"
  pseudorandom-injective-function: "#pseudorandom-injective-functions"
  puncturable-prf: "#puncturable-prfs"
  weak-prf: "#weak-prfs"
---

# Pseudorandom function

A **pseudorandom function (PRF)** is a keyed family of functions $\{\Eval(k, \cdot)\}_{k \in \calK}$ that no efficient adversary can distinguish from a uniformly random function $\calD \to \calR$ given oracle access.

## Syntax

A PRF is a pair of efficient algorithms $\PRF= (\KeyGen, \Eval)$ with respect to keyspace $\calK$, domain $\calD$, and range $\calR$:

- $\KeyGen(1^\secpar) \to k,$ is a randomized function that
  samples a key $k \in \calK,$
- $\Eval(k,x) \to y,$ is a deterministic function that
  takes a key $k\in \calK$ and an input $x \in \calD$, outputting $y \in \calR.$

TODO: quantify the domain and range: with $|\calD_\secpar|$ polynomial in $\secpar$, a key that is a table of independent uniform values in $\calR$, one per input, with $\Eval(k, x)$ the entry for $x$, is pseudorandom unconditionally, and with $|\calR| = 1$ every keyed family is, so the sizes under which results here hold (for example $\calD = \calR = \bits^\secpar$, or $|\calD_\secpar|$ superpolynomial as the Wegman–Carter MAC on [[prf-to-nonce-based-mac|PRF ⇒ nonce-based MAC]] requires) should be stated.

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

### Security against non-uniform adversaries

Let $\calA = \{\calA_\secpar\}_{\secpar \in \NN}$ be a family of polynomial-size oracle circuits, a [[uniform-and-non-uniform-adversaries#non-uniform-adversaries|non-uniform adversary]], with $\calA_\secpar$ playing $\Game^{\mathrm{prf}}_{\PRF,\calA}(\secpar)$. $\PRF$ is **pseudorandom against non-uniform adversaries** if for every such family $\calA$, $\Adv^{\mathrm{prf}}_{\PRF,\calA}(\secpar)$ is negligible. Security against all non-uniform adversaries implies security against all uniform ones ([[non-uniform-prf-to-prf|Non-uniform PRF ⇒ PRF]]) — standard.

# Variations

## Compression-function PRFs

A **compression-function PRF** is, for some polynomials $c = c(\secpar)$ and $b = b(\secpar)$ with $c = \omega(\log \secpar)$ and $c \le b$, an efficiently computable $f : \bits^c \times \bits^b \to \bits^c$ taken as a PRF with $\calK = \calR = \bits^c$, $\calD = \bits^b$ and $\Eval := f$, whose $\KeyGen(1^\secpar)$ samples $k \getsr \bits^c$. As an object, a compression-function PRF denotes such an $f$ that is pseudorandom in $\Game^{\mathrm{prf}}$. Pseudorandomness under a uniform $c$-bit key already forces $c = \omega(\log \secpar)$, since guessing the key and checking two queries gives advantage at least $2^{-c} - 2^{-2c}$ — standard. Outputs lie in the key space, so a chaining value can serve as the next key, as in the NMAC cascade; this is the premise of the uniform NMAC theorem of [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]] ([[prf-to-mac-gpr14|Compression-function PRF ⇒ MAC (NMAC, uniform proof)]]).

### Non-uniform compression-function PRFs

A **non-uniform compression-function PRF** is an $f$ of the shape above, for some polynomials $c = \omega(\log \secpar)$ and $b \ge c$, taken as the PRF $\PRF = (\KeyGen, f)$ with $\KeyGen(1^\secpar)$ uniform on $\bits^c$, such that for every family $\calA = \{\calA_\secpar\}_{\secpar \in \NN}$ of polynomial-size oracle circuits, a [[uniform-and-non-uniform-adversaries#non-uniform-adversaries|non-uniform adversary]], with $\calA_\secpar$ playing $\Game^{\mathrm{prf}}_{\PRF,\calA}(\secpar)$, $\Adv^{\mathrm{prf}}_{\PRF,\calA}(\secpar)$ is negligible. It is the premise of the NMAC theorem of [[Bel06 - New Proofs for NMAC and HMAC Security without Collision-Resistance|Bel06]] ([[prf-to-mac-bel06|Non-uniform compression-function PRF ⇒ MAC (NMAC)]]), whose reduction is non-uniform — [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]].

## Invertible PRFs

An **invertible PRF (iPRF)** extends the PRF with an inversion algorithm, allowing recovery of all inputs that map to a given output ([[invertible-prfs-to-prf|Invertible PRFs ⇒ PRF]]) — [[HPPY25 - Plinko Single-Server PIR with Efficient Updates via Invertible PRFs|HPPY25]]. An $\mathsf{iPRF} = (\KeyGen, \Eval, \Invert)$ adds:

- $\Invert(k, y) \to X,$ is a deterministic algorithm that
  returns the preimage set $X = \{x \in \calD : \Eval(k, x) = y\}$

There is a polynomial $p$ such that for every $\secpar$, every $k$ in the support of $\KeyGen(1^\secpar)$ and every $y \in \calR$, $\Invert(k, y)$ runs in time at most $p(\secpar) \cdot (1 + |X|)$ for $X = \Invert(k, y)$. Inversion is efficient relative to the size of its output, which may be exponential when $|\calD| \gg |\calR|$ — [[HPPY25 - Plinko Single-Server PIR with Efficient Updates via Invertible PRFs|HPPY25]].

### Correctness

An iPRF $\mathsf{iPRF} = (\KeyGen, \Eval, \Invert)$ is **correct** if for all $\secpar \in \NN$ and $y \in \calR$,

$$
\Pr\!\left[\Invert(k, y) = \{x \in \calD : \Eval(k, x) = y\}\right] = 1,
$$

over $k \gets \KeyGen(1^\secpar)$.

### Security

An iPRF is **pseudorandom** if $(\KeyGen, \Eval)$ is pseudorandom in $\Game^{\mathrm{prf}}$. In the stronger game $\Game^{\mathrm{iprf}}$, $\calA$ also has an inversion oracle that returns the preimage set of a given output $y \in \calR$.

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

As an object, an invertible PRF denotes a correct iPRF whose $\Invert$ meets the running-time bound above and whose $(\KeyGen, \Eval)$ is pseudorandom ($\Game^{\mathrm{prf}}$). Strong pseudorandomness ($\Game^{\mathrm{iprf}}$) is a stronger notion: $\Game^{\mathrm{iprf}}$ without the inversion oracle is $\Game^{\mathrm{prf}}$.

### Related results

- [[prf-to-invertible-prf-hppy25|PRF ⇒ iPRF]]
- [[prp-to-invertible-prf|PRP ⇒ iPRF (large domains)]]

## Pseudorandom Injective Functions

A **pseudorandom injective function** is a PRF with $|\calR| \ge |\calD|$ such that $\Eval(k, \cdot) : \calD \to \calR$ is injective for every key $k$, secure if for all efficient $\calA$ the advantage of $\calA$ in distinguishing $\Eval(k, \cdot)$ from a uniformly random injective function $\calD \to \calR$ is negligible: the PRF game with $R \getsr \Funcs(\calD,\calR)$ replaced by a uniform injection. With $\calD = \calR$ it meets [[pseudorandom-permutation|PRP]] security but need not be efficiently invertible, so it need not be a PRP in the sense of that page. A $q$-query distinguisher separates a uniform injection $\calD \to \calR$ from a uniform function $\calD \to \calR$ with advantage at most $q(q-1)/(2|\calR|)$, by the coupling of the [[switching-lemma|switching lemma]], so for $|\calR|$ superpolynomial in $\secpar$ a pseudorandom injective function is a PRF; a PRP on $\calR$ restricted to an injectively encoded $\calD \subseteq \calR$ is a pseudorandom injective function — standard.

Adding an inversion algorithm $\Invert(k, y)$, returning the unique preimage of $y$ or $\bot$, and giving $\calA$ an inversion oracle (whose ideal version, the inverse of the uniform injection, returns $\bot$ off its image) gives the _invertible pseudorandom functions_ of [[BKW17 - Constrained Keys for Invertible Pseudorandom Functions|BKW17]], which for $\calD = \calR$ are exactly strong PRPs. Unlike the iPRFs above, they have at most one preimage per output. [[BKW17 - Constrained Keys for Invertible Pseudorandom Functions|BKW17]] give puncturable and single-key circuit-constrained invertible pseudorandom functions, and show that constrained PRPs are impossible for many classes of constraints under their definition, which is why the range is allowed to exceed the domain.

## Puncturable PRFs

A **puncturable PRF** adds an algorithm $\mathsf{Puncture}(k, x^*) \to k_{x^*}$ outputting a key punctured at $x^* \in \calD$, with $\Eval(k_{x^*}, x) = \Eval(k, x)$ for all $x \ne x^*$. It is secure if for all efficient $\calA$ that output $x^* \in \calD$ before seeing the key, given $k_{x^*}$ the value $\Eval(k, x^*)$ is indistinguishable from uniform in $\calR$ — [[BW13 - Constrained Pseudorandom Functions and Their Applications|BW13]], [[KPTZ13 - Delegatable Pseudorandom Functions and Applications|KPTZ13]], [[BGI14 - Functional Signatures and Pseudorandom Functions|BGI14]]. The [[prg-to-prf-ggm86|GGM]] tree is puncturable: $k_{x^*}$ consists of the seeds of the siblings of the nodes on the path to $x^*$ ([[prg-to-puncturable-prf-bw13|PRG ⇒ puncturable PRF]]) — [[BW13 - Constrained Pseudorandom Functions and Their Applications|BW13]], [[KPTZ13 - Delegatable Pseudorandom Functions and Applications|KPTZ13]], [[BGI14 - Functional Signatures and Pseudorandom Functions|BGI14]]. Puncturable PRFs are the PRFs of the punctured-programming proofs of [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

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

### Key-expanding weak PRFs

A **key-expanding weak PRF** is a [[pseudorandom-function#weak-prfs|weak PRF]] with $\calK = \bits^\kappa$, $\calD = \bits^n$ and $\calR = \bits^{\kappa+n}$, for polynomials $\kappa = \kappa(\secpar)$ and $n = n(\secpar)$ with $n = \omega(\log \secpar)$, whose $\KeyGen(1^\secpar)$ samples $k \getsr \bits^\kappa$. It is secure against [[uniform-and-non-uniform-adversaries#non-uniform-adversaries|non-uniform adversaries]]: for every family $\calA = \{\calA_\secpar\}_{\secpar \in \NN}$ of polynomial-size circuits playing the weak-PRF game above, the advantage is negligible. Pie09's adversaries and reduction are non-uniform, so this premise is the one its theorem uses — [[Pie09 - A Leakage-Resilient Mode of Operation|Pie09]]. Each output splits into a key and an input, which the mode of [[weak-prf-to-leakage-resilient-stream-cipher-pie09|Pie09]] feeds back.

# Other results

- [[owf-to-prg-hill99|OWF ⇒ PRG]] then [[prg-to-prf-ggm86|PRG ⇒ PRF (GGM)]]
- [[ddh-to-prf-nr97|DDH ⇒ PRF (Naor–Reingold)]]
- [[prf-to-ske|PRF ⇒ CPA-secure SKE]]
- [[prf-to-mac|PRF ⇒ MAC]]

<!-- BEGIN GENERATED participates-in 06ae18361af8 -->

## Participates in

**Builds on Pseudorandom function**

- [[compression-function-prf-to-prf|Compression-function PRF ⇒ PRF]] (via [[pseudorandom-function#compression-function-prfs|Compression-function PRFs]])
- [[hash-function-to-hash-based-signatures|Hash function + PRF ⇒ DS (XMSS)]]
- [[invertible-prfs-to-prf|Invertible PRFs ⇒ PRF]] (via [[pseudorandom-function#invertible-prfs|Invertible PRFs]])
- [[key-expanding-weak-prf-to-weak-prf|Key-expanding weak PRF ⇒ Weak PRF]] (via [[pseudorandom-function#key-expanding-weak-prfs|Key-expanding weak PRFs]])
- [[non-uniform-compression-function-prf-to-compression-function-prf|Non-uniform compression-function PRF ⇒ Compression-function PRF]] (via [[pseudorandom-function#non-uniform-compression-function-prfs|Non-uniform compression-function PRFs]])
- [[non-uniform-compression-function-prf-to-non-uniform-prf|Non-uniform compression-function PRF ⇒ Non-uniform PRF]] (via [[pseudorandom-function#non-uniform-compression-function-prfs|Non-uniform compression-function PRFs]])
- [[non-uniform-prf-to-prf|Non-uniform PRF ⇒ PRF]] (via [[pseudorandom-function#security-against-non-uniform-adversaries|Security against non-uniform adversaries]])
- [[prf-to-garbled-circuits-bhr12|PRF ⇒ Garbled circuits (BHR)]]
- [[prf-to-invertible-prf-hppy25|PRF ⇒ iPRF]]
- [[prf-to-logarithmic-oram-akl-20|PRF ⇒ logarithmic-overhead ORAM (OptORAMa)]]
- [[prf-to-mac|PRF ⇒ MAC]]
- [[prf-to-mac-bel06|Non-uniform compression-function PRF ⇒ MAC (NMAC)]] (via [[pseudorandom-function#non-uniform-compression-function-prfs|Non-uniform compression-function PRFs]])
- [[prf-to-mac-bkr94|PRF ⇒ MAC (CBC-MAC)]]
- [[prf-to-mac-gpr14|Compression-function PRF ⇒ MAC (NMAC, uniform proof)]] (via [[pseudorandom-function#compression-function-prfs|Compression-function PRFs]])
- [[prf-to-nonce-based-mac|PRF ⇒ nonce-based MAC (Wegman–Carter)]]
- [[prf-to-ope-bclo09|PRF ⇒ OPE (BCLO09)]]
- [[prf-to-ore-first-differing-bit-clww16|PRF ⇒ ORE leaking the first differing bit (CLWW16)]]
- [[prf-to-polylog-oram-go96|PRF ⇒ polylogarithmic-overhead ORAM (hierarchical ORAM)]]
- [[prf-to-prp-lr88|PRF ⇒ PRP]]
- [[prf-to-ske|PRF ⇒ CPA-secure SKE]]
- [[prf-to-strong-pseudorandom-permutation-lr88|PRF ⇒ Strong PRP]]
- [[prf-to-weak-prf|PRF ⇒ Weak PRF]]
- [[semi-honest-two-party-computation-and-prf-to-oprf|Semi-honest 2PC + PRF ⇒ OPRF]]
- [[two-party-computation-and-prf-to-malicious-oprf|2PC + PRF ⇒ Malicious OPRF]]
- [[weak-prf-to-leakage-resilient-stream-cipher-pie09|Key-expanding weak PRF ⇒ Leakage-resilient stream cipher]] (via [[pseudorandom-function#key-expanding-weak-prfs|Key-expanding weak PRFs]])

**Produces Pseudorandom function**

- [[alternating-moduli-assumption-to-prf-bip-18|Weak alternating moduli ⇒ weak PRF]] (via [[pseudorandom-function#weak-prfs|Weak PRFs]])
- [[compression-function-prf-to-prf|Compression-function PRF ⇒ PRF]]
- [[ddh-to-prf-nr97|DDH ⇒ PRF (Naor–Reingold)]]
- [[invertible-prfs-to-prf|Invertible PRFs ⇒ PRF]]
- [[key-expanding-weak-prf-to-weak-prf|Key-expanding weak PRF ⇒ Weak PRF]] (via [[pseudorandom-function#weak-prfs|Weak PRFs]])
- [[non-uniform-compression-function-prf-to-compression-function-prf|Non-uniform compression-function PRF ⇒ Compression-function PRF]] (via [[pseudorandom-function#compression-function-prfs|Compression-function PRFs]])
- [[non-uniform-compression-function-prf-to-non-uniform-prf|Non-uniform compression-function PRF ⇒ Non-uniform PRF]] (via [[pseudorandom-function#security-against-non-uniform-adversaries|Security against non-uniform adversaries]])
- [[non-uniform-prf-to-prf|Non-uniform PRF ⇒ PRF]]
- [[prf-to-invertible-prf-hppy25|PRF ⇒ iPRF]] (via [[pseudorandom-function#invertible-prfs|Invertible PRFs]])
- [[prf-to-weak-prf|PRF ⇒ Weak PRF]] (via [[pseudorandom-function#weak-prfs|Weak PRFs]])
- [[prg-to-prf-ggm86|PRG ⇒ PRF (GGM)]]
- [[prg-to-puncturable-prf-bw13|PRG ⇒ puncturable PRF]] (via [[pseudorandom-function#puncturable-prfs|Puncturable PRFs]])
- [[prp-to-invertible-prf|PRP ⇒ iPRF (large domains)]] (via [[pseudorandom-function#invertible-prfs|Invertible PRFs]])
- [[prp-to-prf|PRP ⇒ PRF]]
- [[verifiable-random-function-to-prf|VRF ⇒ PRF]]

<!-- END GENERATED participates-in -->
