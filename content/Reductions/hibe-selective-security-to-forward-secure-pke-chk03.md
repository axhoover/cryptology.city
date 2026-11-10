---
type: reduction
status: draft
title: "Selectively secure HIBE ⇒ Forward-secure PKE (Canetti–Halevi–Katz)"
aliases: []
id: red-hibe-selective-security-to-forward-secure-pke-chk03
kind: implication
hypotheses: [hibe-selective-security]
conclusion: forward-secure-pke
class: fully-black-box
model: standard
source:
  - "[[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]"
security-loss: "a factor T, from guessing the challenge period"
rationale:
  class: "The construction calls the tree scheme's key derivation, encryption and decryption only as oracles, and the reduction runs the forward-security adversary only as an oracle after guessing its challenge period."
---

# Selectively secure HIBE ⇒ Forward-secure PKE (Canetti–Halevi–Katz)

## Statement

A _binary tree encryption_ (BTE) scheme of depth $\ell$ is a variant of [[hierarchical-identity-based-encryption|HIBE]] whose identities are the binary strings of length at most $\ell$, the root key belonging to the empty string, in which the key of every node is derived from the root key by delegation; it is _selective-node secure_ if for all efficient $\calA$ that name a target node $w^*$ and then receive the public key and the keys of the siblings of the nodes on the path from the root to $w^*$ (including the sibling of $w^*$) and, if $|w^*| < \ell$, of $w^*0$ and $w^*1$, the advantage of $\calA$ in distinguishing encryptions of two messages for $w^*$ is negligible; the key of every node that is not a prefix of $w^*$ follows from these by delegation — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]. From a selective-node-secure BTE scheme of depth $\ell$, CHK03 construct a [[forward-secure-public-key-encryption|forward-secure PKE]] scheme with $T = 2^{\ell + 1} - 1$ periods: period $t$ is the $t$-th node of the tree in pre-order, a ciphertext for period $t$ is a BTE ciphertext for that node, and $\sk_t$ consists of the keys of that node and of the right siblings of the nodes on its path from the root — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]. Keys and ciphertexts have size polynomial in $\ell$ and $\secpar$ — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]].

An [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|IND-sHIBE-CPA-secure]] HIBE of depth $\ell + 1$ whose delegated keys are distributed as keys extracted directly from the master secret key gives such a BTE scheme: the node $w = w_1 \cdots w_k$ is the identity $(\bar{0}, \bar{w}_1, \ldots, \bar{w}_k)$ for two fixed distinct symbols $\bar{0}, \bar{1} \in \Sigma$, and the selective HIBE adversary may request the key of every non-prefix of the target identity — standard.

## Sketch

None of the keys in $\sk_i$ belongs to a prefix of the node of any period $j < i$, since the subtrees under those keys contain only periods $t \ge i$. The reduction guesses the challenge period $j$, names its node as $w^*$, and answers the break-in query with keys of non-prefixes of $w^*$.

## Notes

- The construction of [[CHK04 - Chosen-Ciphertext Security from Identity-Based Encryption|CHK04]] secures any BTE scheme against chosen-ciphertext attacks, which gives chosen-ciphertext forward-secure PKE in the standard model — [[CHK04 - Chosen-Ciphertext Security from Identity-Based Encryption|CHK04]].
- With keys linear in $T$ instead, forward-secure PKE follows from [[public-key-encryption#cpa-security|CPA-secure PKE]] alone ([[pke-cpa-security-to-forward-secure-pke|CPA-secure PKE ⇔ Forward-secure PKE]]) — folklore.
