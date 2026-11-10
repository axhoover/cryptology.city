---
type: reduction
status: draft
title: "Selective-node-secure BTE ⇒ Forward-secure PKE (Canetti–Halevi–Katz)"
aliases: []
id: red-selective-node-bte-to-forward-secure-pke-chk03
kind: implication
hypotheses: [selective-node-bte]
conclusion: forward-secure-pke
class: fully-black-box
model: standard
source:
  - "[[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]"
security-loss: "a factor T, from guessing the challenge period"
rationale:
  class: "The construction calls the tree scheme's key derivation, encryption and decryption only as oracles, and the reduction runs the forward-security adversary only as an oracle after guessing its challenge period."
---

# Selective-node-secure BTE ⇒ Forward-secure PKE (Canetti–Halevi–Katz)

## Statement

A [[hierarchical-identity-based-encryption#binary-tree-encryption|selective-node-secure binary tree encryption]] (BTE) scheme of depth $\ell$ gives a [[forward-secure-public-key-encryption|forward-secure PKE]] scheme with $T = 2^{\ell + 1} - 1$ periods — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]. Period $t$ is the $t$-th node of the tree in pre-order, a ciphertext for period $t$ is a BTE ciphertext for that node, and $\sk_t$ consists of the keys of that node and of the right siblings of the nodes on its path from the root, so it holds at most $\ell + 1$ BTE keys — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]].

## Sketch

None of the keys in $\sk_i$ belongs to a prefix of the node of any period $j < i$, since the subtrees under those keys contain only periods $t \ge i$. The reduction guesses the challenge period $j$, names its node as $w^*$, and answers the break-in query with keys of non-prefixes of $w^*$, which it derives by $\Delegate$ from the keys the BTE game gives it; these are distributed as in the scheme, which also derives every key from the root key by $\Delegate$.

## Notes

- An [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|IND-sHIBE-CPA-secure]] [[hierarchical-identity-based-encryption|HIBE]] of depth $\ell + 1$ gives a selective-node-secure BTE scheme of depth $\ell$ when, for every key $\sk$ that $\Extract(\msk, \vec{\mathit{id}})$ can output, $\Delegate(\sk, \mathit{id}')$ is distributed as $\Extract(\msk, \vec{\mathit{id}} \| \mathit{id}')$: the node $w_1 \cdots w_k$ is the identity $(\bar{0}, \bar{w}_1, \ldots, \bar{w}_k)$ for two fixed distinct symbols $\bar{0}, \bar{1} \in \Sigma$, the delegated keys of the BTE game are then distributed as independently extracted ones, and the selective HIBE adversary may extract the key of every non-prefix of the target identity — standard. The argument needs the condition: the IND-sHIBE-CPA game gives the adversary only extracted keys, while the BTE game gives keys delegated from the root key — standard.
- The construction of [[CHK04 - Chosen-Ciphertext Security from Identity-Based Encryption|CHK04]] secures any BTE scheme against chosen-ciphertext attacks, which gives chosen-ciphertext forward-secure PKE in the standard model — [[CHK04 - Chosen-Ciphertext Security from Identity-Based Encryption|CHK04]].
- With keys linear in $T$ instead, forward-secure PKE follows from [[public-key-encryption#cpa-security|CPA-secure PKE]] alone ([[pke-cpa-security-to-forward-secure-pke|CPA-secure PKE ⇔ Forward-secure PKE]]) — folklore.
