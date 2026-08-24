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
  crhf: "#collision-resistance"
---

# Hash functions

A _hash function_ is function which can have a number of different properties
in cryptography. Most often, it is required that the hash function is _one-way_
or preimage resistant. If such a hash function exists, then many other
primitives are known to exist. In other settings, it's important that the hash
function is _collision resistant_, meaning that it is hard to find two
colliding inputs and implies one-wayness.

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

### Collision resistance

Often times, protocols require stronger properties than one-wayness alone.
Collision resistant hash functions are strictly stronger than
preimage resistance.

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

- [[hash-function-to-prg-hill99|Hash function ⇒ PRG]]
- [[hash-function-to-hash-based-signatures-lam79|Hash function ⇒ Hash-based signatures]]
- [[prf-to-prp-lr88|PRF ⇒ PRP]]
- [[hash-based-signatures-to-ds-mer89|Hash-based signatures ⇒ DS]]
- [[owp-to-hash-function|OWP ⇒ Hash function]]
- [[no-np-to-hash-function-aggm06|No reduction from NP to Hash function]]

## Unknown results

- It is not known whether one-way functions imply collision-resistant hash functions; no black-box construction is known and oracle separations suggest this implication is unlikely.

<!-- BEGIN GENERATED participates-in 95161fbc8d2c -->
## Participates in

**Builds on Hash function**

- [[ae-and-hash-function-and-prf-to-symmetric-cp-abe-ls26|AE + Hash function + PRF ⇒ Symmetric CP-ABE]]
- [[hash-function-and-hash-based-signatures-to-ds-mer89|Hash function + Hash-based signatures ⇒ DS]]
- [[hash-function-and-io-to-deniable-encryption-sw14|Hash function + iO ⇒ Deniable encryption]]
- [[hash-function-and-io-to-ds-sw14|Hash function + iO ⇒ DS]]
- [[hash-function-and-io-to-fe-sw14|Hash function + iO ⇒ FE]]
- [[hash-function-and-io-to-lossy-trapdoor-functions-sw14|Hash function + iO ⇒ Lossy trapdoor functions]]
- [[hash-function-and-io-to-nizk-sw14|Hash function + iO ⇒ NIZK]]
- [[hash-function-and-io-to-pke-sw14|Hash function + iO ⇒ PKE]]
- [[hash-function-and-prf-to-symmetric-cp-abe-ls26|Hash function + PRF ⇒ Symmetric CP-ABE]]
- [[hash-function-to-czk|Hash function ⇒ CZK]]
- [[hash-function-to-dpf-gi14|Hash function ⇒ DPF]]
- [[hash-function-to-ds|Hash function ⇒ DS]]
- [[hash-function-to-hash-based-signatures|Hash function ⇒ Hash-based signatures]]
- [[hash-function-to-hash-based-signatures-lam79|Hash function ⇒ Hash-based signatures]]
- [[hash-function-to-mac|Hash function ⇒ MAC]]
- [[hash-function-to-pcs-bbhr18|Hash function ⇒ PCS]]
- [[hash-function-to-prf|Hash function ⇒ PRF]]
- [[hash-function-to-prg-hill99|Hash function ⇒ PRG]]
- [[hash-function-to-secret-key-pir-sk-pir-bm26|Hash function ⇒ Secret-Key PIR (SK-PIR)]]
- [[hash-function-to-ske|Hash function ⇒ SKE]]
- [[hash-function-to-snark-bbhr18|Hash function ⇒ SNARK]]
- [[hash-function-to-zkp-gmw91|Hash function ⇒ ZKP]]

**Produces Hash function**

- [[ds-to-hash-function|DS ⇒ Hash function]]
- [[noise-level-to-hash-function-blvw19|Noise Level ⇒ Hash function]]
- [[owp-to-hash-function|OWP ⇒ Hash function]]
- [[pke-to-hash-function|PKE ⇒ Hash function]]
- [[prg-to-hash-function|PRG ⇒ Hash function]]
- [[sis-to-hash-function-ajt96|SIS ⇒ Hash function]]
- [[snark-to-hash-function|SNARK ⇒ Hash function]]
- [[subclasses-to-hash-function|Subclasses ⇒ Hash function]]
- [[tdp-to-hash-function|TDP ⇒ Hash function]]
- [[zkp-to-hash-function|ZKP ⇒ Hash function]]

**Barriers**

- [[no-fiat-shamir-and-hash-function-to-ds-gk03|No reduction from Fiat-Shamir + Hash function to DS]]
- [[no-hash-function-to-pke-gkm-00|No fully-black-box reduction from Hash function to PKE]]
- [[no-np-to-hash-function-aggm06|No reduction from NP to Hash function]]
<!-- END GENERATED participates-in -->
