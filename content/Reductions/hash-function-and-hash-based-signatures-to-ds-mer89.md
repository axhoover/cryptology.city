---
type: reduction
status: draft
title: "Arbitrary-length CRHF + One-time signature ⇒ Stateful DS (Merkle)"
aliases: []
id: red-hash-function-and-hash-based-signatures-to-ds-mer89
kind: implication
hypotheses: [arbitrary-length-crhf, one-time-signature]
conclusion: bounded-stateful-ds
class: fully-black-box
model: standard
source:
  - "[[Mer89 - A Certified Digital Signature|Mer89]]"
security-loss: "additive: the collision-finding advantage plus $2^h$ times the one-time-signature advantage, from planting the one-time challenge key at a uniformly random one of the $2^h$ leaves"
rationale:
  class: "The construction calls the one-time signature scheme and the hash function only as oracles, and the reduction runs any forger as an oracle and outputs a hash collision at some tree node or a one-time forgery."
---

# Arbitrary-length CRHF + One-time signature ⇒ Stateful DS (Merkle)

## Statement

An [[hash-function#arbitrary-length-collision-resistance|arbitrary-length CRHF]] $\hash : \calK \times \bits^* \to \bits^n$ and a [[digital-signature#one-time-signatures|one-time signature]] scheme $\Sigma$ yield a [[digital-signature#stateful-signatures|stateful signature scheme]] $\DS$ for $2^h$ signatures, with the message space of $\Sigma$. The verification key is a key $k$ of $\hash$ and the root of a Merkle tree whose $2^h$ leaves are the hashes $\hash(k, \vk_i) \in \bits^n$ of $2^h$ one-time verification keys of $\Sigma$, each written as a bit string, and each of whose internal nodes is $\hash(k, u \,\|\, v)$ for its two children $u, v \in \bits^n$; the state is the index $i$ of the next unused one-time key; and the $i$-th signature on $m$ is $(i, \vk_i, \sigma, \mathrm{path}_i)$, where $\sigma$ is a one-time signature on $m$ under $\vk_i$ and $\mathrm{path}_i$ holds the $h$ sibling nodes on the way from leaf $i$ to the root — [[Mer89 - A Certified Digital Signature|Mer89]]. Verification checks $\sigma$ under $\vk_i$ and recomputes the root from $\hash(k, \vk_i)$ and $\mathrm{path}_i$.

Key generation computes all $2^h$ leaves, so an efficient $\KeyGen$ forces $2^h \le \poly(\secpar)$, and the scheme signs at most $2^h$ messages; for a polynomial $T$, the height $h = \lceil \log_2 T \rceil$ gives $T \le 2^h < 2T$ — standard. For every forger $\calA$ making at most $2^h$ signing queries there are efficient $\calB_1$ and $\calB_2$ with

$$
\Adv^{\mathrm{st\text{-}cma}}_{\DS,\calA}(\secpar) \le \Adv^{\mathrm{cr}}_{\hash,\calB_1}(\secpar) + 2^h \cdot \Adv^{\mathrm{ots}}_{\Sigma,\calB_2}(\secpar)
$$

— standard. $\DS$ is $(1 - 2^h \varepsilon)$-correct for $2^h$ signatures when $\Sigma$ is $(1-\varepsilon)$-correct, since an honest authentication path always hashes to the root and a union bound covers the $2^h$ one-time signatures — standard.

## Sketch

$\calB_1$ runs the whole scheme on its challenge key $k$. A valid forgery under index $i$ that carries a verification key or authentication path other than the honest ones hashes to the same root as the honest leaf and path, so at the highest level where the inputs of the two computations differ their outputs agree, a collision of $\hash(k, \cdot)$ between two strings, possibly of different lengths. Otherwise the forgery carries the honest $\vk_i$, and its one-time signature is on a message never signed under $\vk_i$; $\calB_2$ plants its challenge key at a uniform leaf $i^*$, which is independent of $\calA$'s view, answers the $i^*$-th signing query with its one-time oracle, and wins when $i = i^*$, with probability $2^{-h}$.

## Notes

- Any CRHF yields an arbitrary-length CRHF by Merkle–Damgård iteration ([[crhf-to-arbitrary-length-crhf|CRHF ⇒ Arbitrary-length CRHF (Merkle–Damgård)]]) — [[Rog06 - Formalizing Human Ignorance|Rog06]].
- One-time signatures exist from one-way functions ([[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]]) — [[Lam79 - Constructing digital signatures from a one way function|Lam79]].
- XMSS replaces collision resistance by second-preimage resistance with bitmasked tree nodes and is likewise stateful ([[hash-function-to-hash-based-signatures|SPR hash + PRF ⇒ Stateful DS (XMSS)]]) — [[BDH11 - XMSS A Practical Forward Secure Signature Scheme Based on Minimal Security Assumptions|BDH11]], [[HBG+18 - XMSS eXtended Merkle Signature Scheme|HBG+18]] (Section 4.1).
- Universal one-way hash functions suffice for signatures through a tree of one-time keys ([[uowhf-and-ots-to-ds-ny89|UOWHF + One-time signature ⇒ DS (Naor–Yung)]]) — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]], and any one-way function suffices ([[hash-function-to-ds|OWF ⇒ DS]]) — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
