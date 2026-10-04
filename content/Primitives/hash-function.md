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
title: Hash function
id: hash-function
variants:
  owf: "#preimage-resistance-one-wayness"
  auxiliary-input-owf: "#auxiliary-input-one-wayness"
  crhf: "#collision-resistance"
---

# Hash functions

A _hash function_ is function which can have a number of different properties
in cryptography. Most often, it is required that the hash function is _one-way_
or preimage resistant. If such a hash function exists, then many other
primitives are known to exist. In other settings, it's important that the hash
function is _collision resistant_, meaning that it is hard to find two
colliding inputs; when $|\calR|/|\calD|$ is negligible, this implies one-wayness
(Rogaway–Shrimpton, FSE 2004).

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

### Collision resistance

Often times, protocols require stronger properties than one-wayness alone.
When $|\calR|/|\calD|$ is negligible, collision resistance implies preimage
resistance, but not conversely (Rogaway–Shrimpton, FSE 2004).

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

A hash function $\hash$ is **collision resistant**
if for every efficient $\calA,$

$$
\Adv^{\mathrm{cr}}_{\hash,\calA}(\secpar) :=
\Pr\left[\Game^{\mathrm{cr}}_{\hash,\calA}(\secpar) = 1\right]
$$

is negligible.

### Distributional collision resistance

# Other results

- [[owf-to-prg-hill99|OWF ⇒ PRG]]
- [[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]]
- [[prf-to-prp-lr88|PRF ⇒ PRP]]
- [[hash-function-and-hash-based-signatures-to-ds-mer89|CRHF + One-time signature ⇒ DS]]
- [[owp-to-hash-function|OWP ⇒ OWF]]
- [[no-np-to-hash-function-aggm06|No reduction from NP to OWF]]

## Unknown results

- It is not known whether one-way functions imply collision-resistant hash functions; no black-box construction is known and oracle separations suggest this implication is unlikely.

<!-- BEGIN GENERATED participates-in e08648a6fcd5 -->

## Participates in

**Builds on Hash function**

- [[crhf-to-constant-round-zk-argument-bar01|CRHF ⇒ Constant-round ZK argument (Barak)]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[czk-to-ip-bgg-90|OWF + IP ⇒ CZK]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
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
- [[owf-to-prg-hill99|OWF ⇒ PRG]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[snark-to-nizk|SNARK + OWF ⇒ NIZK]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[strong-rsa-to-ds|Strong RSA + CRHF ⇒ DS]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[subclasses-to-hash-function|OWF + iO ⇒ PPAD hardness]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])

**Produces Hash function**

- [[ds-to-hash-function|DS ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[noise-level-to-hash-function-blvw19|Low-noise LPN ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[owp-to-hash-function|OWP ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[pke-to-hash-function|PKE ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[prg-to-hash-function|PRG ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[sis-to-hash-function-ajt96|SIS ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[subexponential-lpn-to-crhf-yzw-19|Subexponential LPN ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[tdp-to-hash-function|TDP ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[zkp-to-hash-function|ZKP ⇒ Auxiliary-input OWF]] (via [[hash-function#auxiliary-input-one-wayness|Auxiliary-input one-wayness]])

**Barriers**

- [[no-fiat-shamir-and-hash-function-to-ds-gk03|No fixed-construction reduction from Fiat-Shamir + Hash function to DS]]
- [[no-hash-function-to-pke-gkm-00|No relativizing reduction from OWF to PKE]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-np-to-hash-function-aggm06|No reduction from NP to OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])

<!-- END GENERATED participates-in -->
