---
type: primitive
status: draft
aliases:
  - TDP
  - TDF
  - Trapdoor function
  - Trapdoor permutation
title: Trapdoor permutation
id: tdp
variants:
  bit-string-tdp: "#trapdoor-permutations-over-bit-strings"
  lossy-trapdoor-function: "#lossy-trapdoor-functions"
  highly-lossy-trapdoor-function: "#highly-lossy-trapdoor-functions"
  enhanced-trapdoor-permutation: "#enhanced-trapdoor-permutations"
  doubly-enhanced-certified-tdp: "#doubly-enhanced-certified-trapdoor-permutations"
  injective-trapdoor-function: "#injective-trapdoor-functions"
  claw-free-permutations: "#claw-free-permutations"
  claw-free-trapdoor-permutations: "#claw-free-trapdoor-permutations"
---

# Trapdoor permutation

A _trapdoor permutation (TDP)_ family samples an index $f$ together with a trapdoor $\td$: $f$ describes an efficiently computable permutation of a finite domain $\calD_f$ that every efficient adversary holding only $f$ inverts at a uniformly random point with at most negligible probability, while $\td$ inverts it everywhere — [[GB08 - Lecture Notes on Cryptography|GB08]], Definition 2.16.

## Syntax

A _trapdoor permutation family_ is a tuple of efficient algorithms $\TDP = (\Gen, \Samp, \Eval, \Invert)$:

- $\Gen(1^\secpar) \to (f, \td)$, a randomized algorithm that samples an index $f$, which describes a finite domain $\calD_f$, and a trapdoor $\td$,
- $\Samp(f) \to x$, a randomized domain sampler that outputs some $x \in \calD_f$; for a negligible function $\nu$ and every index $f$ output by $\Gen(1^\secpar)$, its output distribution is within statistical distance $\nu(\secpar)$ of uniform on $\calD_f$,
- $\Eval(f, x) \to y$, a deterministic algorithm whose restriction to inputs $x \in \calD_f$ is, for every index $f$ output by $\Gen(1^\secpar)$, a permutation of $\calD_f$,
- $\Invert(\td, y) \to x$, a deterministic algorithm that inverts $\Eval(f, \cdot)$ with the trapdoor.

This is the collection form of [[GB08 - Lecture Notes on Cryptography|GB08]], Definition 2.16, and of the trapdoor permutation generators of [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]], Section 2, which follow [[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]]. The domain sampler is part of the collection, as in [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]], Definition 2.4.5: without it a construction that must pick $x \in \calD_f$, such as encryption with a hard-core bit, need not be efficient. $\Eval$ runs on every input string; outside $\calD_f$ its output is unconstrained by the syntax but counts in the one-wayness game below.

## Properties

### Correctness

A trapdoor permutation family $\TDP = (\Gen, \Samp, \Eval, \Invert)$ is **correct** if for all $\secpar \in \NN$, all $(f, \td)$ in the support of $\Gen(1^\secpar)$ and all $x \in \calD_f$,

$$
\Invert(\td, \Eval(f, x)) = x,
$$

so that $\Invert(\td, \cdot)$ restricted to $\calD_f$ is the inverse permutation — [[GB08 - Lecture Notes on Cryptography|GB08]], Definition 2.16.

### One-wayness

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ow}}_{\TDP,\calA}(\secpar)$}
\begin{algorithmic}
\State $(f, \td) \gets \Gen(1^\secpar)$
\State $x \getsr \calD_f$; $y \gets \Eval(f, x)$
\State $\hat{x} \gets \calA(1^\secpar, f, y)$
\Return $[\Eval(f, \hat{x}) = y]$
\end{algorithmic}
\end{algorithm}
```

A trapdoor permutation family $\TDP$ is **one-way** if for all efficient $\calA$,

$$
\Adv^{\mathrm{ow}}_{\TDP,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{ow}}_{\TDP,\calA}(\secpar) = 1\right]
$$

is negligible — [[GB08 - Lecture Notes on Cryptography|GB08]], Definition 2.16. $\calA$ wins with any string that $\Eval(f, \cdot)$ maps to $y$, which within $\calD_f$ is $x$ alone. Drawing $x \gets \Samp(f)$ instead of $x \getsr \calD_f$ changes the advantage by at most $\nu(\secpar)$ — standard.

As an object, a trapdoor permutation denotes a correct, one-way trapdoor permutation family.

# Variations

## Trapdoor permutations over bit strings

A _trapdoor permutation over bit strings_ is a trapdoor permutation family whose domain, for every index $f$ output by $\Gen(1^\secpar)$, is $\calD_f = \bits^{n(\secpar)}$ for a polynomial $n$, with the correctness and one-wayness above; $x \getsr \calD_f$ is then a uniform $n(\secpar)$-bit string. Extending RSA to all $b$-bit strings gives one when $2^b$ exceeds the modulus by a super-polynomial factor ([[rsa-to-bit-string-tdp-rst01|RSA ⇒ TDP over bit strings]]) — [[RST01 - How to Leak a Secret|RST01]].

## Enhanced trapdoor permutations

An _enhanced TDP_ is a trapdoor permutation family whose domain sampler $\Samp$ (see [[#Syntax|Syntax]]) is enhanced: for all efficient $\calA$, $\Pr\!\left[\Eval(f, \calA(1^\secpar, f, r)) = \Samp(f; r) : (f, \td) \gets \Gen(1^\secpar),\ r \getsr \bits^{\rho(\secpar)}\right]$ is negligible, where $\rho$ is the sampler's coin length — [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]]. With the same algorithms it is a trapdoor permutation ([[enhanced-trapdoor-permutation-to-tdp|Enhanced TDP ⇒ TDP]]) — folklore. The [[EGL85 - A randomized protocol for signing contracts|EGL85]] construction of [[oblivious-transfer|OT]] is proved secure under this stronger property, since its receiver samples an image obliviously and holds the sampling coins ([[enhanced-trapdoor-permutations-to-ot-gkm-00|Enhanced trapdoor permutations ⇒ OT]]) — [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]], [[GR13 - Enhancements of Trapdoor Permutations|GR13]]. No fully black-box construction of an enhanced TDP from a standard TDP exists ([[no-tdp-to-ot|No fully-black-box reduction from TDP to enhanced TDP]]) — [[Haj18 - Enhancements Are Blackbox Non-Trivial Impossibility of Enhanced Trapdoor Permutations from Standard Trapdoor Permutations|Haj18]].

### Doubly enhanced certified trapdoor permutations

An enhanced TDP is _doubly enhanced_ if, given the index alone, one can efficiently sample a pair $(x, r)$ with $x$ uniform in the domain and $r$ uniform among the domain sampler's coins that output $f(x)$ — [[GR13 - Enhancements of Trapdoor Permutations|GR13]]. It is _certified_ if its indices, and the domains they describe, are efficiently recognizable, so that a verifier can check that an index describes a permutation — [[BY96 - Certifying Permutations Noninteractive Zero-Knowledge Based on Any Trapdoor Permutation|BY96]], [[CL18 - Certifying Trapdoor Permutations, Revisited|CL18]]. These are the properties the hidden-bits compilation of NIZK proofs uses ([[tdp-to-nizk-bfm88|Doubly enhanced certified TDP ⇒ NIZK]]) — [[GR13 - Enhancements of Trapdoor Permutations|GR13]], [[CL18 - Certifying Trapdoor Permutations, Revisited|CL18]].

## Injective trapdoor functions

An _injective trapdoor function_ has the syntax above with $\Eval(f, \cdot) : \calD_f \to \calR_f$ injective rather than a permutation of $\calD_f$, and the same correctness and one-wayness requirements. Every trapdoor permutation is one ([[tdp-to-injective-trapdoor-function|TDP ⇒ Injective TDF]]) — folklore.

## Claw-free permutations

A _claw-free pair_ is given by a $\PPT$ generator $\Gen(1^\secpar)$ that outputs an index $i$ of two permutations $f_{i,0}, f_{i,1}$ of a common domain $\calD_i$, together with a deterministic polynomial-time $\Eval(i, b, x)$ that computes $f_{i,b}(x)$ for $b \in \bits$ and $x \in \calD_i$. For all efficient $\calA$, the probability that $\calA(1^\secpar, i)$ outputs a claw $(x_0, x_1)$ with $f_{i,0}(x_0) = f_{i,1}(x_1)$, for $i \gets \Gen(1^\secpar)$, is negligible — [[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]]. $\Gen$ comes with a $\PPT$ sampler that, given $i$, outputs an element of $\calD_i$ within negligible statistical distance of uniform. For a fixed index, $f_b$ abbreviates $f_{i,b}$ and $\calD$ abbreviates $\calD_i$. Each $f_b$ is then one-way, since inverting $f_0$ on $f_1(x_1)$ for $x_1$ output by the sampler yields a claw — standard.

### Claw-free trapdoor permutations

A _claw-free pair of trapdoor permutations_ is a claw-free pair $(f_0, f_1)$ whose generator also outputs trapdoors $\td_0, \td_1$ with which $f_0^{-1}$ and $f_1^{-1}$ are efficiently computable — [[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]]. Dropping the trapdoors leaves a claw-free pair ([[claw-free-trapdoor-permutations-to-claw-free-permutations|Claw-free TDP ⇒ Claw-free permutations]]) — folklore. Each $f_b$ is a trapdoor permutation, one-way by the argument above ([[claw-free-trapdoor-permutations-to-tdp|Claw-free TDP ⇒ TDP]]) — folklore.

## Lossy trapdoor functions

An $(n, k)$-_lossy trapdoor function_ samples a function index $s$ in one of two computationally indistinguishable modes: in the injective mode $f_s : \bits^n \to \calR$ is injective and inverted by $\Invert$ with the trapdoor, one-wayness not being assumed, and in the lossy mode $f_s$ has at most $2^{n-k}$ images, so it loses at least $k$ bits of its input — [[PW08 - Lossy trapdoor functions and their applications|PW08]]. A _lossy trapdoor function_ is an $(n, k)$-lossy one with $k = \omega(\log \secpar)$; without a lower bound on $k$, every injective trapdoor function is an $(n, 0)$-lossy one, with the same index in both modes. $r := n - k$ is the _residual leakage_. Lossy TDFs imply injective trapdoor functions ([[lossy-trapdoor-function-to-injective-trapdoor-function-pw08|Lossy TDF ⇒ Injective TDF]]) — [[PW08 - Lossy trapdoor functions and their applications|PW08]] — and IND-CCA-secure encryption ([[lossy-trapdoor-functions-to-pke|Lossy trapdoor functions ⇒ IND-CCA PKE]]) — [[MY10 - Chosen-Ciphertext Security from Slightly Lossy Trapdoor Functions|MY10]].

### Highly lossy trapdoor functions

An $(n, k)$-lossy trapdoor function is _highly lossy_ if its residual leakage is $r \le \rho n$ for a constant $\rho < 1/2$, the regime in which it yields collision-resistant hashing ([[lossy-trapdoor-function-to-crhf-pw08|Highly lossy TDF ⇒ CRHF]]) — [[PW08 - Lossy trapdoor functions and their applications|PW08]].

# Other results

- If [[rsa-assumption|RSA]] is hard, the RSA function $x \mapsto x^e \bmod n$ on $\ZZ_n^*$, with trapdoor $d$, is a trapdoor permutation ([[rsa-to-tdp-rsa78|RSA ⇒ TDP]]) — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]; its domain sampler draws up to $\secpar$ uniform elements of $\ZZ_n$ and outputs the first unit, or $1$ if there is none — standard.
- If [[factoring#factoring-blum-integers|factoring Blum integers]] is hard, squaring on the quadratic residues modulo a Blum integer, with the factorization as trapdoor, is a trapdoor permutation ([[factoring-blum-integers-to-tdp-rab79|Factoring ⇒ TDP (Rabin)]]) — [[Rab79 - Digitalized Signatures and Public-Key Functions as Intractable as Factorization|Rab79]], [[BBS86 - A Simple Unpredictable Pseudo-Random Number Generator|BBS86]]; its domain sampler squares a unit sampled as for RSA — standard.
- Dropping the trapdoor leaves a [[hash-function#preimage-resistance-one-wayness|one-way function]] ([[tdp-to-hash-function|TDP ⇒ OWF]]) — folklore.
- Encrypting a bit $m$ as $(\Eval(f, x), b(x) \oplus m)$ for $x \gets \Samp(f)$ and a hard-core predicate $b$ gives [[public-key-encryption#cpa-security|CPA-secure PKE]] ([[tdp-to-pke|TDP ⇒ CPA-secure PKE]]) — [[GM84 - Probabilistic encryption|GM84]], [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]].
- Signing $m \in \calD_f$ as $\Invert(\td, m)$, the proposal of [[DH76 - New Directions in Cryptography|DH76]] as credited by [[GB08 - Lecture Notes on Cryptography|GB08]], Section 10.2, admits the forgery $(\Eval(f, \sigma), \sigma)$ for every $\sigma \in \calD_f$, with no signing query — [[GB08 - Lecture Notes on Cryptography|GB08]], Section 10.3.1; for RSA see the [[no-rsa-to-ds-textbook-rsa|barrier for textbook RSA signatures]]. Full-domain hash signs $\Invert(\td, H(m))$ instead, with $H$ a random oracle onto $\calD_f$, and is EUF-CMA-unforgeable in the [[random-oracle-model|random-oracle model]] ([[tdp-to-ds-br93|TDP ⇒ DS]]) — [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]].
- An enhanced trapdoor permutation yields semi-honest [[oblivious-transfer|OT]] ([[enhanced-trapdoor-permutations-to-ot-gkm-00|Enhanced trapdoor permutations ⇒ OT]]) — [[EGL85 - A randomized protocol for signing contracts|EGL85]], [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]].

<!-- BEGIN GENERATED participates-in 12897022f9df -->

## Participates in

**Builds on Trapdoor permutation**

- [[bit-string-tdp-to-tdp|TDP over bit strings ⇒ TDP]] (via [[trapdoor-permutation#trapdoor-permutations-over-bit-strings|Trapdoor permutations over bit strings]])
- [[claw-free-permutations-to-concurrent-zk-proof-prs02|Claw-free permutations ⇒ Concurrent ZK proofs for NP in ω(log n) rounds]] (via [[trapdoor-permutation#claw-free-permutations|Claw-free permutations]])
- [[claw-free-permutations-to-constant-round-zk-proof-gk96b|Claw-free permutations ⇒ Constant-round ZK proofs for NP (Goldreich–Kahan)]] (via [[trapdoor-permutation#claw-free-permutations|Claw-free permutations]])
- [[claw-free-permutations-to-crhf-dam87|Claw-free permutations ⇒ CRHF (Damgård)]] (via [[trapdoor-permutation#claw-free-permutations|Claw-free permutations]])
- [[claw-free-tdp-and-cca2-pke-to-uc-multi-commitment-cf01|Claw-free TDP + CCA2 PKE ⇒ UC multi-commitment in the CRS model (Canetti–Fischlin)]] (via [[trapdoor-permutation#claw-free-trapdoor-permutations|Claw-free trapdoor permutations]])
- [[claw-free-trapdoor-permutations-to-chameleon-hash-function-kr00|Claw-free TDP ⇒ Chameleon hash (Krawczyk–Rabin)]] (via [[trapdoor-permutation#claw-free-trapdoor-permutations|Claw-free trapdoor permutations]])
- [[claw-free-trapdoor-permutations-to-claw-free-permutations|Claw-free TDP ⇒ Claw-free permutations]] (via [[trapdoor-permutation#claw-free-trapdoor-permutations|Claw-free trapdoor permutations]])
- [[claw-free-trapdoor-permutations-to-tdp|Claw-free TDP ⇒ TDP]] (via [[trapdoor-permutation#claw-free-trapdoor-permutations|Claw-free trapdoor permutations]])
- [[doubly-enhanced-certified-tdp-to-enhanced-trapdoor-permutation|Doubly enhanced certified TDP ⇒ Enhanced TDP]] (via [[trapdoor-permutation#doubly-enhanced-certified-trapdoor-permutations|Doubly enhanced certified trapdoor permutations]])
- [[doubly-enhanced-certified-tdp-to-five-round-two-party-computation-ko04|Doubly enhanced certified TDP ⇒ Five-round 2PC (Katz–Ostrovsky)]] (via [[trapdoor-permutation#doubly-enhanced-certified-trapdoor-permutations|Doubly enhanced certified trapdoor permutations]])
- [[doubly-enhanced-certified-tdp-to-group-signature-bmw03|Doubly enhanced certified TDP ⇒ Group signatures (BMW)]] (via [[trapdoor-permutation#doubly-enhanced-certified-trapdoor-permutations|Doubly enhanced certified trapdoor permutations]])
- [Enhanced TDP ⇒ MPC with honest majority ($t < n/2$) (GMW)](enhanced-trapdoor-permutation-to-honest-majority-t-lt-n-over-2-gmw87) (via [[trapdoor-permutation#enhanced-trapdoor-permutations|Enhanced trapdoor permutations]])
- [[enhanced-trapdoor-permutation-to-tdp|Enhanced TDP ⇒ TDP]] (via [[trapdoor-permutation#enhanced-trapdoor-permutations|Enhanced trapdoor permutations]])
- [[enhanced-trapdoor-permutation-to-two-party-computation-ors15|Enhanced TDP ⇒ 2PC with expected-time simulation (Ostrovsky–Richelson–Scafuro)]] (via [[trapdoor-permutation#enhanced-trapdoor-permutations|Enhanced trapdoor permutations]])
- [[enhanced-trapdoor-permutation-to-uc-mpc-clos02|Enhanced TDP ⇒ UC MPC in the CRS model (CLOS)]] (via [[trapdoor-permutation#enhanced-trapdoor-permutations|Enhanced trapdoor permutations]])
- [[enhanced-trapdoor-permutations-to-ot-gkm-00|Enhanced trapdoor permutations ⇒ OT]] (via [[trapdoor-permutation#enhanced-trapdoor-permutations|Enhanced trapdoor permutations]])
- [[highly-lossy-trapdoor-function-to-lossy-trapdoor-function|Highly lossy TDF ⇒ Lossy TDF]] (via [[trapdoor-permutation#highly-lossy-trapdoor-functions|Highly lossy trapdoor functions]])
- [[lossy-trapdoor-function-to-crhf-pw08|Highly lossy TDF ⇒ CRHF]] (via [[trapdoor-permutation#highly-lossy-trapdoor-functions|Highly lossy trapdoor functions]])
- [[lossy-trapdoor-function-to-injective-trapdoor-function-pw08|Lossy TDF ⇒ Injective TDF]] (via [[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]])
- [[lossy-trapdoor-function-to-ot-pw08|Lossy TDF ⇒ OT]] (via [[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]])
- [[lossy-trapdoor-functions-to-pke|Lossy trapdoor functions ⇒ IND-CCA PKE]] (via [[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]])
- [[tdp-to-cpir-ko00|TDP ⇒ cPIR with total communication below n (Kushilevitz–Ostrovsky)]]
- [[tdp-to-ds-br93|TDP ⇒ DS (full-domain hash, random oracle model)]]
- [[tdp-to-fixed-ring-ring-signature-rst01|TDP over bit strings ⇒ Ring signatures with fixed-ring unforgeability (Rivest–Shamir–Tauman)]] (via [[trapdoor-permutation#trapdoor-permutations-over-bit-strings|Trapdoor permutations over bit strings]])
- [[tdp-to-hash-function|TDP ⇒ OWF]]
- [[tdp-to-injective-trapdoor-function|TDP ⇒ Injective TDF]]
- [[tdp-to-nizk-bfm88|Doubly enhanced certified TDP ⇒ NIZK]] (via [[trapdoor-permutation#doubly-enhanced-certified-trapdoor-permutations|Doubly enhanced certified trapdoor permutations]])
- [[tdp-to-pke|TDP ⇒ CPA-secure PKE]]
- [[tdp-to-uc-commitment-cf01|TDP over bit strings ⇒ UC commitment in the CRS model (Canetti–Fischlin)]] (via [[trapdoor-permutation#trapdoor-permutations-over-bit-strings|Trapdoor permutations over bit strings]])

**Produces Trapdoor permutation**

- [[bit-string-tdp-to-tdp|TDP over bit strings ⇒ TDP]]
- [[claw-free-trapdoor-permutations-to-claw-free-permutations|Claw-free TDP ⇒ Claw-free permutations]] (via [[trapdoor-permutation#claw-free-permutations|Claw-free permutations]])
- [[claw-free-trapdoor-permutations-to-tdp|Claw-free TDP ⇒ TDP]]
- [[dcr-to-highly-lossy-trapdoor-function-fgkrs10|DCR ⇒ Highly lossy TDF (Freeman–Goldreich–Kiltz–Rosen–Segev)]] (via [[trapdoor-permutation#highly-lossy-trapdoor-functions|Highly lossy trapdoor functions]])
- [[ddh-to-lossy-trapdoor-function-pw08|DDH ⇒ Highly lossy TDF (Peikert–Waters)]] (via [[trapdoor-permutation#highly-lossy-trapdoor-functions|Highly lossy trapdoor functions]])
- [[doubly-enhanced-certified-tdp-to-enhanced-trapdoor-permutation|Doubly enhanced certified TDP ⇒ Enhanced TDP]] (via [[trapdoor-permutation#enhanced-trapdoor-permutations|Enhanced trapdoor permutations]])
- [[enhanced-trapdoor-permutation-to-tdp|Enhanced TDP ⇒ TDP]]
- [[factoring-blum-integers-to-claw-free-permutations-gmr88|Factoring ⇒ Claw-free permutations (GMR)]] (via [[trapdoor-permutation#claw-free-permutations|Claw-free permutations]])
- [[factoring-blum-integers-to-tdp-rab79|Factoring ⇒ TDP (Rabin)]]
- [[highly-lossy-trapdoor-function-to-lossy-trapdoor-function|Highly lossy TDF ⇒ Lossy TDF]] (via [[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]])
- [[lossy-trapdoor-function-to-injective-trapdoor-function-pw08|Lossy TDF ⇒ Injective TDF]] (via [[trapdoor-permutation#injective-trapdoor-functions|Injective trapdoor functions]])
- [[lwe-to-lossy-trapdoor-function-pw08|LWE ⇒ Lossy TDF (Peikert–Waters)]] (via [[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]])
- [[phi-hiding-to-lossy-trapdoor-function-kos10|Φ-Hiding ⇒ Lossy TDF (Kiltz–O'Neill–Smith)]] (via [[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]])
- [[qr-to-lossy-trapdoor-function-fgkrs10|QR ⇒ Lossy TDF (Freeman–Goldreich–Kiltz–Rosen–Segev)]] (via [[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]])
- [[rsa-to-bit-string-tdp-rst01|RSA ⇒ TDP over bit strings]] (via [[trapdoor-permutation#trapdoor-permutations-over-bit-strings|Trapdoor permutations over bit strings]])
- [[rsa-to-claw-free-trapdoor-permutations|RSA ⇒ Claw-free TDP]] (via [[trapdoor-permutation#claw-free-trapdoor-permutations|Claw-free trapdoor permutations]])
- [[rsa-to-tdp-rsa78|RSA ⇒ TDP]]
- [[subexponential-io-and-owf-to-tdp-bpw16|Sub-exponential iO + Sub-exponential OWF ⇒ TDP (Bitansky–Paneth–Wichs)]]
- [[tdp-to-injective-trapdoor-function|TDP ⇒ Injective TDF]] (via [[trapdoor-permutation#injective-trapdoor-functions|Injective trapdoor functions]])

**Barriers**

- [[no-bit-string-tdp-and-rom-to-pke-cca2-security-oaep-sho01a|No relativizing reduction from TDP over bit strings + ROM to CCA-secure PKE (OAEP)]] (via [[trapdoor-permutation#trapdoor-permutations-over-bit-strings|Trapdoor permutations over bit strings]]) — circumvented by [[rsa-to-ind-cca-pke-oaep-fops01|RSA ⇒ IND-CCA PKE (RSA-OAEP)]]
- [[no-enhanced-trapdoor-permutation-to-one-round-sublinear-cpir-hhs08|No polynomially-preserving fully-black-box reduction from enhanced TDP to one-round sublinear cPIR]] (via [[trapdoor-permutation#enhanced-trapdoor-permutations|Enhanced trapdoor permutations]])
- [[no-enhanced-trapdoor-permutation-to-polylog-cpir-hhs08|No polynomially-preserving fully-black-box reduction from enhanced TDP to PIR with polylogarithmic communication]] (via [[trapdoor-permutation#enhanced-trapdoor-permutations|Enhanced trapdoor permutations]])
- [[no-ke-to-tdp-rud91|No relativizing reduction from KE to TDP]]
- [[no-ot-to-tdp-gkm-00|No fully-black-box reduction from OT to TDP]]
- [[no-pke-to-injective-trapdoor-function-gmr01|No fully-black-box reduction from PKE to injective TDF]] (via [[trapdoor-permutation#injective-trapdoor-functions|Injective trapdoor functions]])
- [[no-pke-to-tdp-gkm-00|No fully-black-box reduction from PKE to TDP]]
- [[no-tdp-to-ot|No fully-black-box reduction from TDP to enhanced TDP]]
- [[no-tdp-to-ibe-bprvw08|No fully-black-box reduction from TDP to IBE]]
- [[no-tdp-to-one-round-sublinear-cpir-hhs08|No polynomially-preserving fully-black-box reduction from TDP to one-round sublinear cPIR]]
- [[no-tdp-to-polylog-cpir-hhs08|No polynomially-preserving fully-black-box reduction from TDP to PIR with polylogarithmic communication]]
- [[no-tdp-to-verifiable-random-function-fs12|No fully-black-box reduction from TDP to VRF]]

<!-- END GENERATED participates-in -->
