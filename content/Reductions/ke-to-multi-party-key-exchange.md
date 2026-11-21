---
type: reduction
status: draft
title: "KE with bit-string keys ⇒ Multi-party key exchange"
aliases: []
id: red-ke-to-multi-party-key-exchange
kind: implication
hypotheses: [bit-string-key-exchange]
conclusion: multi-party-key-exchange
class: fully-black-box
model: standard
source: folklore
security-loss: "factor $2n-3$ over the two-party KE advantage: $n-1$ hybrids from the real pads with the group key to uniform pads, and $n-2$ more from the real pads with an independent uniform key"
rationale:
  class: "The construction runs the two-party protocol only as an oracle, one independent session per party, and the hybrid reduction runs the multi-party eavesdropper as an oracle."
---

# KE with bit-string keys ⇒ Multi-party key exchange

## Statement

Two-party [[key-exchange#key-exchange-with-bit-string-keys|key exchange with bit-string keys]] $\bits^{\ell(\secpar)}$ secure against eavesdroppers implies, for every polynomial $n = n(\secpar) \ge 2$, $n$-party [[key-exchange#multi-party-key-exchange|multi-party key exchange]] with key space $\bits^{\ell(\secpar)}$ secure against eavesdroppers: a designated party $P_1$ runs an independent two-party session with each $P_j$, $j = 2, \ldots, n$, playing $A$ in each and obtaining a session key $k_j$, samples a group key $K \getsr \bits^{\ell(\secpar)}$, and broadcasts $K \oplus k_j$ for each $j$; $P_j$ outputs $(K \oplus k_j) \oplus k_j'$ for its own session key $k_j'$. All parties output $K$ except with probability at most $(n-1)\varepsilon$ for a two-party correctness error $\varepsilon$, by a union bound over the sessions — folklore.

## Sketch

From world 0, a hybrid over the $n-1$ sessions replaces each session key by an independent uniform key; the reduction embeds its two-party challenge in one session and runs the others itself. In the last hybrid every pad $k_j$ is uniform on $\bits^{\ell(\secpar)}$ and independent of $K$ and of the other pads and sessions, so each $K \oplus k_j$ is uniform and $K$ is independent of the transcript. In world 1 the real pads come with an independent uniform key and $K$ is hidden, so $K \oplus k_2$ is uniform and independent of the rest, the other pads reveal only $k_2 \oplus k_j$, and replacing $k_3, \ldots, k_n$ by uniform keys one at a time, in $n-2$ hybrids with the reduction sampling $K$ itself, reaches the same last hybrid. The advantage is therefore at most $2n-3$ times the two-party advantage.
