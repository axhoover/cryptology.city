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
