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
  crhf: "#collision-resistance"
  uowhf: "#target-collision-resistance-universal-one-wayness"
---

# Hash functions

A _hash function_ is function which can have a number of different properties
in cryptography. Most often, it is required that the hash function is _one-way_
or preimage resistant. If such a hash function exists, then many other
primitives are known to exist. In other settings, it's important that the hash
function is _collision resistant_, meaning that it is hard to find two
colliding inputs; when $|\calR|/|\calD|$ is negligible, this implies one-wayness
— [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]].

## Syntax

A _hash function_ is a function $\hash : \calK \times \calD \to \calR,$ where
$\calK$ is the key space, $\calD$ is the domain, and $\calR$ is the range.

## Properties

There are a number of different properties that different cryptographic
protocols require of hash functions. Sometimes, even the particular assumptions
are insufficient to prove security of a protocol. In this case, there is
sometimes still hope to prove security when modeling a hash function as a
[[random-oracle-model|random oracle]].

### Preimage resistance (one-wayness)

One of the most fundamental properties is preimage resistant or
one-way. This is important in many computational complexity analyses.

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
\Pr\left[\Game^{\mathrm{pr}}_{\hash,\calA}(\secpar) = 1\right]
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
one-way function is weakly one-way, and
[[weak-owf-to-owf-yao82a|weak one-way functions yield one-way functions]].

### Collision resistance

Often times, protocols require stronger properties than one-wayness alone.
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
\Pr\left[\Game^{\mathrm{cr}}_{\hash,\calA}(\secpar) = 1\right]
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
\Pr\left[\Game^{\mathrm{tcr}}_{\hash,\calA}(\secpar) = 1\right]
$$

is negligible — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]].
Collision resistance implies target collision resistance — standard.

### Distributional collision resistance

# Other results

- [[owf-to-prg-hill99|OWF ⇒ PRG]]
- [[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]]
- [[prf-to-prp-lr88|PRF ⇒ PRP]]
- [[hash-function-and-hash-based-signatures-to-ds-mer89|CRHF + One-time signature ⇒ DS]]
- [[owp-to-hash-function|OWP ⇒ OWF]]
- [[no-np-to-hash-function-aggm06|No reduction from NP to OWF]]

## Unknown results

- Whether one-way functions imply collision-resistant hash functions is open. No relativizing construction exists, even from one-way permutations ([[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]]) — [[Sim98 - Finding Collisions on a One-Way Street Can Secure Hash Functions Be Based on General Assumptions|Sim98]].

<!-- BEGIN GENERATED participates-in 13883285cf62 -->

## Participates in

**Builds on Hash function**

- [[crhf-to-constant-round-zk-argument-bar01|CRHF ⇒ Constant-round ZK argument (Barak)]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[crhf-to-interactive-succinct-argument-kil92|CRHF ⇒ Succinct arguments for NP (Kilian)]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[crhf-to-statistically-hiding-commitment-dpp97|CRHF ⇒ Statistically hiding COM]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[crhf-to-weak-owf|CRHF ⇒ Weak OWF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[czk-to-ip-bgg-90|OWF + IP ⇒ CZK]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[ddh-and-uowhf-to-pke-cca2-security-cs98|DDH + UOWHF ⇒ CCA-secure PKE (Cramer–Shoup)]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[hash-function-and-hash-based-signatures-to-ds-mer89|CRHF + One-time signature ⇒ DS]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[hash-function-and-io-to-deniable-encryption-sw14|OWF + iO ⇒ Deniable encryption]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-and-io-to-ds-sw14|OWF + iO ⇒ DS]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-and-io-to-fe-sw14|OWF + iO ⇒ FE]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-and-io-to-nizk-sw14|OWF + iO ⇒ NIZK]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-and-io-to-pke-sw14|OWF + iO ⇒ PKE]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-to-czk|OWF ⇒ CZK]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-to-ds|OWF ⇒ DS]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-to-hash-based-signatures|Hash function + PRF ⇒ DS (XMSS)]]
- [[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-to-pcs-bbhr18|CRHF ⇒ PCS]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[hash-function-to-secret-key-pir-sk-pir-bm26|OWF ⇒ Secret-Key PIR (SK-PIR)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-to-snark-bbhr18|CRHF ⇒ STARK]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[hash-function-to-zkp-gmw91|OWF ⇒ ZKP]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[ot-and-owf-to-ot-extension-bea96|OT + OWF ⇒ OT extension (Beaver)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-prg-hill99|OWF ⇒ PRG]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-statistical-zk-argument-nov06|OWF ⇒ Statistical ZK arguments for NP]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-statistically-hiding-commitment-hr07|OWF ⇒ Statistically hiding COM (Haitner–Reingold)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-uowhf-rom90|OWF ⇒ UOWHF (Rompel)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-witness-indistinguishable-proof-fs90|OWF ⇒ Constant-round WI proofs for NP (Feige–Shamir)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[semi-honest-security-and-owf-to-mpc-gmw87|Semi-honest MPC + OWF ⇒ MPC (GMW compiler)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[snark-to-nizk|SNARK + OWF ⇒ NIZK]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[strong-rsa-to-ds|Strong RSA + CRHF ⇒ DS]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[subclasses-to-hash-function|OWF + iO ⇒ PPAD hardness]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[uowhf-and-ots-to-ds-ny89|UOWHF + One-time signature ⇒ DS (Naor–Yung)]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[weak-owf-to-owf-yao82a|Weak OWF ⇒ OWF (Yao)]] (via [[hash-function#weak-one-wayness|Weak one-wayness]])

**Produces Hash function**

- [[additively-homomorphic-encryption-to-crhf-iko05|Additively homomorphic encryption ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[claw-free-permutations-to-crhf-dam87|Claw-free permutations ⇒ CRHF (Damgård)]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[com-to-owf-il89|COM ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[cpir-to-crhf-iko05|One-round sublinear cPIR ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[cpir-to-owf-bikm99|Non-trivial cPIR ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[crhf-to-weak-owf|CRHF ⇒ Weak OWF]] (via [[hash-function#weak-one-wayness|Weak one-wayness]])
- [[dlog-to-crhf-cvhp91|DLOG ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[ds-to-hash-function|DS ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[identification-scheme-to-owf-il89|ID ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[lossy-trapdoor-function-to-crhf-pw08|Highly lossy TDF ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[noise-level-to-hash-function-blvw19|Low-noise LPN ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[owf-to-uowhf-rom90|OWF ⇒ UOWHF (Rompel)]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[owp-to-hash-function|OWP ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owp-to-uowhf-ny89|OWP ⇒ UOWHF (Naor–Yung)]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[pke-to-hash-function|PKE ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[prg-to-hash-function|PRG ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[sis-to-hash-function-ajt96|SIS ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[ske-to-owf-il89|SKE ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[subexponential-lpn-to-crhf-yzw-19|Subexponential LPN ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[tdp-to-hash-function|TDP ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[weak-owf-to-owf-yao82a|Weak OWF ⇒ OWF (Yao)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[zkp-to-hash-function|ZKP ⇒ Auxiliary-input OWF]] (via [[hash-function#auxiliary-input-one-wayness|Auxiliary-input one-wayness]])

**Barriers**

- [[no-fiat-shamir-and-hash-function-to-ds-gk03|No fixed-construction reduction from Fiat-Shamir + Hash function to DS]]
- [[no-hash-function-to-pke-gkm-00|No relativizing reduction from OWF to PKE]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-np-to-hash-function-aggm06|No reduction from NP to OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-owf-to-ot-ir89|No relativizing reduction from OWF to OT]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-owf-to-owp-rud88|No fully-black-box reduction from OWF to OWP]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])

<!-- END GENERATED participates-in -->
