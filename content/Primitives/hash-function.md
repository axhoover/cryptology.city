---
type: primitive
status: draft
aliases:
  - CRH
  - hashes
  - hash functions
  - OWF
  - OWFs
  - One-way function
  - Collision-resistant hash function
  - CRHF
  - CRHFs
title: Hash function
id: hash-function
variants:
  owf: "#preimage-resistance-one-wayness"
  auxiliary-input-owf: "#auxiliary-input-one-wayness"
  weak-owf: "#weak-one-wayness"
  distributional-owf: "#distributional-one-wayness"
  subexponential-owf: "#sub-exponential-one-wayness"
  size-verifiable-owf: "#size-verifiable-one-wayness"
  crhf: "#collision-resistance"
  uowhf: "#target-collision-resistance-universal-one-wayness"
---

# Hash functions

A _hash function_ is a keyed family of functions $\hash(k, \cdot) : \calD \to \calR$; its main security notions ask that, for a random key $k$, no efficient adversary inverts $\hash(k, \cdot)$ on the image of a uniform input (one-wayness) or finds two distinct inputs with the same image (collision resistance).

## Syntax

A _hash function_ is a function $\hash : \calK \times \calD \to \calR,$ where
$\calK$ is the key space, $\calD$ is the domain, and $\calR$ is the range.

## Properties

A hash function can also be modeled as a [[random-oracle-model|random oracle]] — [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]].

### Preimage resistance (one-wayness)

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{pr}}_{\hash,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \getsr \calK$ ; $x \getsr \calD$
\State $y \gets \hash(k,x)$
\State $\hat{x} \gets \calA(k,y)$
\Return $[\hash(k,\hat{x}) = y]$
\end{algorithmic}
\end{algorithm}
```

A hash function $\hash$ is **one-way** or **preimage resistant**
if for every efficient $\calA,$

$$
\Adv^{\mathrm{pr}}_{\hash,\calA}(\secpar) :=
\Pr\!\left[\Game^{\mathrm{pr}}_{\hash,\calA}(\secpar) = 1\right]
$$

is negligible. In this case, $\hash$ is called a **one-way function (OWF)**.

### Auxiliary-input one-wayness

A function $f(x, \cdot)$, efficiently computable given the auxiliary input $x$,
is **auxiliary-input one-way** if for all efficient $\calA$ there are infinitely
many $x$ on which $\calA$ inverts $f(x, \cdot)$ on a uniform input with
probability negligible in $|x|$ — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]].

### Weak one-wayness

A function $f$ is **weakly one-way** if there is a polynomial $p$ such that for
all efficient $\calA$ and all sufficiently large $\secpar$,
$\Adv^{\mathrm{pr}}_{f,\calA}(\secpar) \le 1 - 1/p(\secpar)$: every efficient
inverter fails with noticeable probability —
[[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]]. Every
one-way function is weakly one-way — folklore; conversely,
[[weak-owf-to-owf-yao82a|weak one-way functions yield one-way functions]] — [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]].

### Distributional one-wayness

A function $f$ computable in polynomial time is **distributionally one-way** if
there is a polynomial $p$ such that for all efficient $\calA$ and all
sufficiently large $n$,

$$
\Delta\big((x, f(x)),\, (\calA(f(x)), f(x))\big) \ge 1/p(n), \qquad x \getsr \bits^n,
$$

where $\Delta$ is statistical distance; equivalently, the statistical distance
between $\calA(y)$ and a uniform element of $f^{-1}(y)$, averaged over
$y = f(x)$, is at least $1/p(n)$ —
[[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].
[[owf-to-distributional-owf|Every one-way function is distributionally one-way]]
— folklore; conversely,
[[distributional-owf-to-owf-il89|distributional one-way functions yield one-way functions]]
— [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].

### Sub-exponential one-wayness

A function $\hash$ is **sub-exponentially one-way** if there is a constant
$\varepsilon > 0$ such that for all sufficiently large $\secpar$, every
adversary $\calA$ of size at most $2^{\secpar^{\varepsilon}}$ has
$\Adv^{\mathrm{pr}}_{\hash,\calA}(\secpar) \le 2^{-\secpar^{\varepsilon}}$.

### Size-verifiable one-wayness

A one-way function $f$ is **size-verifiable** if the preimage-size problem $\{(y, s) : |f^{-1}(y)| = s\}$ lies in $\classAM$ — [[AGGM06 - On basing one-way functions on NP-hardness|AGGM06]], [[BB15 - On Basing Size-Verifiable One-Way Functions on NP-Hardness|BB15]]. It is _approximately_ size-verifiable, a weaker condition, if the promise problem with yes-instances $(y, s, 1^a)$ such that $|f^{-1}(y)| \le s$ and no-instances $(y, s, 1^a)$ such that $|f^{-1}(y)| > (1 + 1/a)s$ lies in $\classAM$ — [[BB15 - On Basing Size-Verifiable One-Way Functions on NP-Hardness|BB15]]. A [[one-way-permutation|one-way permutation]] is size-verifiable, since every $y \in \bits^n$ has exactly one preimage — standard. [[size-verifiable-owf-to-owf|A size-verifiable one-way function is a one-way function]].

### Collision resistance

When $|\calR|/|\calD|$ is negligible, collision resistance implies preimage
resistance, but not conversely — [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cr}}_{\hash,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \getsr \calK$
\State $(\hat{x}_0, \hat{x}_1) \gets \calA(k)$
\Return $[\hash(k,\hat{x}_0) = \hash(k,\hat{x}_1) \wedge \hat{x}_0 \neq \hat{x}_1]$
\end{algorithmic}
\end{algorithm}
```

A compressing family $\hash$ with $\calD = \bits^{n(\secpar)}$ and
$\calR = \bits^{m(\secpar)}$, $m(\secpar) < n(\secpar)$, is **collision
resistant**, a **collision-resistant hash function (CRHF)**, if for every
efficient $\calA,$

$$
\Adv^{\mathrm{cr}}_{\hash,\calA}(\secpar) :=
\Pr\!\left[\Game^{\mathrm{cr}}_{\hash,\calA}(\secpar) = 1\right]
$$

is negligible. Compression is part of the definition because without it the
notion is trivial: the identity has no collisions. The amount of compression is
immaterial: Merkle–Damgård iteration turns a family compressing by one bit into
a collision-resistant family from $\bits^{p(\secpar)}$ to $\bits^{m(\secpar)}$
for every polynomial $p$ — [[Dam89 - A Design Principle for Hash Functions|Dam89]].

### Target collision resistance (universal one-wayness)

The adversary commits to a target input before the key is sampled, then must
find a second input colliding with it.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{tcr}}_{\hash,\calA}(\secpar)$}
\begin{algorithmic}
\State $(x, \st) \gets \calA_1(1^\secpar)$
\Comment{$\calA_1$ outputs $x \in \calD$ before seeing the key}
\State $k \getsr \calK$
\State $\hat{x} \gets \calA_2(\st, k)$
\Return $[\hash(k,\hat{x}) = \hash(k,x) \wedge \hat{x} \neq x]$
\end{algorithmic}
\end{algorithm}
```

A compressing family $\hash$ ($|\calR| < |\calD|$) is a **universal one-way
hash function (UOWHF)**, or **target collision resistant**, if for all efficient
$\calA = (\calA_1, \calA_2)$,

$$
\Adv^{\mathrm{tcr}}_{\hash,\calA}(\secpar) :=
\Pr\!\left[\Game^{\mathrm{tcr}}_{\hash,\calA}(\secpar) = 1\right]
$$

is negligible — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]].
Collision resistance implies target collision resistance — standard.

### Distributional collision resistance

TODO: definition and game.

# Other results

- [[owf-to-prg-hill99|OWF ⇒ PRG]]
- [[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]]
- [[hash-function-and-hash-based-signatures-to-ds-mer89|CRHF + One-time signature ⇒ DS]]
- [[owp-to-hash-function|OWP ⇒ OWF]]
- [[chameleon-hash-function|Chameleon hash functions]] are randomized collision-resistant hash functions whose trapdoor lets its holder find collisions — [[KR00 - Chameleon Signatures|KR00]].
- [[no-np-to-hash-function-aggm06|No non-adaptive reduction from NP to inverting a one-way function unless coNP ⊆ AM]] — [[AGGM06 - On basing one-way functions on NP-hardness|AGGM06]]
- An explicit function, the direct product of [[universal-one-way-function|Levin's universal one-way function]], is one-way if and only if a one-way function exists — [[Lev85 - One-Way Functions and Pseudorandom Generators|Lev85]]

## Unknown results

- Whether one-way functions imply collision-resistant hash functions is open. No relativizing construction exists, even from one-way permutations ([[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]]) — [[Sim98 - Finding Collisions on a One-Way Street Can Secure Hash Functions Be Based on General Assumptions|Sim98]].

<!-- BEGIN GENERATED participates-in c5ccbd8ba63f -->

## Participates in

**Builds on Hash function**

- [[crhf-to-accumulator|CRHF ⇒ accumulator]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[crhf-to-constant-round-non-malleable-commitment-pr05|CRHF ⇒ Constant-round NM commitment (Pass–Rosen)]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[crhf-to-constant-round-zk-argument-bar01|CRHF ⇒ Constant-round ZK argument (Barak)]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[crhf-to-interactive-succinct-argument-kil92|CRHF ⇒ Succinct arguments for NP (Kilian)]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[crhf-to-statistically-hiding-commitment-dpp97|CRHF ⇒ Statistically hiding COM]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[crhf-to-weak-owf|CRHF ⇒ Weak OWF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[czk-to-ip-bgg-90|OWF + IP ⇒ CZK]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[ddh-and-uowhf-to-pke-cca2-security-cs98|DDH + UOWHF ⇒ CCA-secure PKE (Cramer–Shoup)]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[distributional-owf-to-owf-il89|Distributional OWF ⇒ OWF (Impagliazzo–Luby)]] (via [[hash-function#distributional-one-wayness|Distributional one-wayness]])
- [[factoring-blum-integers-and-uowhf-to-pke-cca2-security-hk09|Factoring + UOWHF ⇒ CCA-secure PKE (Hofheinz–Kiltz)]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[hash-function-and-hash-based-signatures-to-ds-mer89|CRHF + One-time signature ⇒ DS]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[hash-function-and-io-to-deniable-encryption-sw14|OWF + iO ⇒ Deniable encryption]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-and-io-to-ds-sw14|OWF + iO ⇒ DS]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-and-io-to-nizk-sw14|OWF + iO ⇒ Non-adaptively sound NIZK argument]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-and-io-to-pke-sw14|OWF + iO ⇒ PKE]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-to-czk|OWF ⇒ CZK]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-to-ds|OWF ⇒ DS]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-to-hash-based-signatures|Hash function + PRF ⇒ DS (XMSS)]]
- [[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-to-secret-key-pir-sk-pir-bm26|OWF ⇒ Secret-Key PIR (SK-PIR)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-to-zkp-gmw91|OWF ⇒ ZKP]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[io-and-owf-to-multi-party-nike-bz14|iO + OWF ⇒ Multiparty NIKE (Boneh–Zhandry)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[ot-and-owf-to-ot-extension-bea96|OT + OWF ⇒ OT extension (Beaver)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-and-io-to-fe-wat15|OWF + iO ⇒ FE]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-client-preprocessing-pir-zpzs24|OWF ⇒ PIR with client preprocessing (Piano)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-concurrent-zk-argument-prs02|OWF ⇒ Concurrent ZK arguments for NP in ω(log n) rounds]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-constant-round-non-malleable-commitment-lp11-goy11|OWF ⇒ Constant-round NM commitment (Lin–Pass, Goyal)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-distributional-owf|OWF ⇒ Distributional OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-four-message-zk-argument-bjy97|OWF ⇒ Four-message ZK arguments for NP]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-garbled-ram-glo15|OWF ⇒ garbled RAM (black-box)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-language-model-watermarking-cgz24|OWF ⇒ Watermarking]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-non-malleable-commitment-ddn91|OWF ⇒ NM commitment (Dolev–Dwork–Naor)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-np|OWF inversion ∈ NP]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-prg-hill99|OWF ⇒ PRG]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-prs-jls18|OWF ⇒ PRS]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-owsg|OWF ⇒ OWSG]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-statistical-zk-argument-nov06|OWF ⇒ Statistical ZK arguments for NP]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-statistically-hiding-commitment-hr07|OWF ⇒ Statistically hiding COM (Haitner–Reingold)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-uowhf-rom90|OWF ⇒ UOWHF (Rompel)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-witness-indistinguishable-proof-fs90|OWF ⇒ Constant-round WI proofs for NP (Feige–Shamir)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-zkp-ikos07|OWF ⇒ ZKP (MPC in the head)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[semi-honest-security-and-owf-to-mpc-gmw87|Semi-honest MPC + OWF ⇒ MPC (GMW compiler)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[size-verifiable-owf-to-owf|Size-verifiable OWF ⇒ OWF]] (via [[hash-function#size-verifiable-one-wayness|Size-verifiable one-wayness]])
- [[snark-and-crhf-to-fully-succinct-snark-bcct13|SNARK + CRHF ⇒ Fully succinct SNARK (bootstrapping)]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[snark-to-nizk|SNARK + OWF ⇒ NIZK argument]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[strong-rsa-to-ds|Strong RSA + CRHF ⇒ DS]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[subexponential-io-and-owf-to-tdp-bpw16|Sub-exponential iO + Sub-exponential OWF ⇒ TDP (Bitansky–Paneth–Wichs)]] (via [[hash-function#sub-exponential-one-wayness|Sub-exponential one-wayness]])
- [[subexponential-owf-to-owf|Sub-exponential OWF ⇒ OWF]] (via [[hash-function#sub-exponential-one-wayness|Sub-exponential one-wayness]])
- [[uowhf-and-ots-to-ds-ny89|UOWHF + One-time signature ⇒ DS (Naor–Yung)]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[weak-owf-to-distributional-owf|Weak OWF ⇒ Distributional OWF]] (via [[hash-function#weak-one-wayness|Weak one-wayness]])
- [[weak-owf-to-owf-yao82a|Weak OWF ⇒ OWF (Yao)]] (via [[hash-function#weak-one-wayness|Weak one-wayness]])

**Produces Hash function**

- [[additively-homomorphic-encryption-to-crhf-iko05|Additively homomorphic encryption ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[claw-free-permutations-to-crhf-dam87|Claw-free permutations ⇒ CRHF (Damgård)]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[com-to-owf-il89|COM ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[constant-bias-coin-flipping-to-owf-ho11|Constant-bias coin flipping ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[cpir-to-crhf-iko05|One-round sublinear cPIR ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[cpir-to-owf-bikm99|Non-trivial cPIR ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[crhf-to-weak-owf|CRHF ⇒ Weak OWF]] (via [[hash-function#weak-one-wayness|Weak one-wayness]])
- [[czk-hardness-to-owf-ow93|Average-case-hard CZK ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[distributional-owf-to-owf-il89|Distributional OWF ⇒ OWF (Impagliazzo–Luby)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[dlog-to-crhf-cvhp91|DLOG ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[ds-to-hash-function|DS ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[identification-scheme-to-owf-il89|ID ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[injective-one-way-function-to-owf|Injective OWF ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[io-and-np-not-in-io-bpp-to-owf-kmnpry14|iO + NP ⊄ io-BPP ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[kt-mild-average-case-hardness-to-owf-lp20|Mild average-case hardness of Kᵗ ⇔ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[lossy-trapdoor-function-to-crhf-pw08|Highly lossy TDF ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[module-sis-to-crhf|Module-SIS ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[noise-level-to-hash-function-blvw19|Low-noise LPN ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[owf-to-distributional-owf|OWF ⇒ Distributional OWF]] (via [[hash-function#distributional-one-wayness|Distributional one-wayness]])
- [[owf-to-uowhf-rom90|OWF ⇒ UOWHF (Rompel)]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[owp-to-hash-function|OWP ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owp-to-size-verifiable-owf|OWP ⇒ Size-verifiable OWF]] (via [[hash-function#size-verifiable-one-wayness|Size-verifiable one-wayness]])
- [[owp-to-uowhf-ny89|OWP ⇒ UOWHF (Naor–Yung)]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[pke-to-hash-function|PKE ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[prg-to-hash-function|PRG ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[ring-sis-to-crhf-lm06|Ring-SIS ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[secret-based-quantum-money-mini-scheme-to-owf-ac12|Secret-based mini-scheme with classical serial numbers ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[sis-to-hash-function-ajt96|SIS ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[size-verifiable-owf-to-owf|Size-verifiable OWF ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[ske-to-owf-il89|SKE ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[subexponential-lpn-to-crhf-yzw-19|Subexponential LPN ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[subexponential-owf-to-owf|Sub-exponential OWF ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[subset-sum-to-uowhf-in96|Subset sum ⇒ UOWHF]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[szk-hardness-to-owf-ost91|Average-case-hard SZK ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[tdp-to-hash-function|TDP ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[time-lock-puzzle-to-owf-bgj16|TLP ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[weak-owf-to-distributional-owf|Weak OWF ⇒ Distributional OWF]] (via [[hash-function#distributional-one-wayness|Distributional one-wayness]])
- [[weak-owf-to-owf-yao82a|Weak OWF ⇒ OWF (Yao)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[zkp-to-hash-function|CZK ⊄ BPP ⇒ Auxiliary-input OWF]] (via [[hash-function#auxiliary-input-one-wayness|Auxiliary-input one-wayness]])

**Barriers**

- [[no-crhf-to-szk-hardness-bd19|No fully-black-box reduction from CRHF to average-case-hard SZK]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[no-fiat-shamir-and-hash-function-to-ds-gk03|No fixed-construction reduction from Fiat-Shamir + Hash function to DS]]
- [[no-hash-function-to-pke-gkm-00|No relativizing reduction from OWF to PKE]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-io-and-owf-to-owp-as16|No fully-black-box reduction from iO + OWF to domain-invariant OWP]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-io-and-owp-to-crhf-as15|No fully-black-box reduction from iO + OWP to CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[no-np-to-hash-function-aggm06|No reduction from NP to OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-np-to-size-verifiable-owf-bb15|No fully-black-box reduction from NP to size-verifiable OWF]] (via [[hash-function#size-verifiable-one-wayness|Size-verifiable one-wayness]])
- [[no-owf-to-four-message-zk-argument-hpv20|No fully-black-box reduction from OWF to four-message ZK arguments]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]]) — circumvented by [[owf-to-four-message-zk-argument-bjy97|OWF ⇒ Four-message ZK arguments for NP]]
- [[no-owf-to-ot-ir89|No relativizing reduction from OWF to OT]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-owf-to-owp-rud88|No fully-black-box reduction from OWF to OWP]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-owf-to-passive-sk-depir-lmw25|No fully-black-box reduction from OWF to passive-server SK-DEPIR]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[no-ppad-hardness-and-owf-to-ke-rss17|No fully-black-box reduction from PPAD hardness + OWF to KE]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-ppad-hardness-to-owf-rss17|No fully-black-box reduction from PPAD hardness to OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-prs-to-owf-kre21|No fully-black-box reduction from PRS to OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-single-copy-prs-to-owf-kqst23|No relativizing reduction from single-copy PRS to OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])

<!-- END GENERATED participates-in -->
