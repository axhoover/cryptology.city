---
type: reduction
status: draft
title: "Leveled FHE ⇒ PIR with polylogarithmic communication"
aliases: []
id: red-leveled-fully-homomorphic-encryption-to-polylog-cpir
kind: implication
hypotheses: [leveled-fully-homomorphic-encryption]
conclusion: polylog-cpir
class: fully-black-box
model: standard
source: folklore
security-loss: "a factor log n, from a hybrid over the encrypted index bits"
rationale:
  class: "The server evaluates the selection circuit through the scheme's evaluation algorithm, used only as an oracle, and the privacy reduction runs any server distinguisher only as an oracle on queries built from its encryption challenges."
---

# Leveled FHE ⇒ PIR with polylogarithmic communication

## Statement

A [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled fully homomorphic encryption]] scheme yields a one-round [[single-server-private-information-retrieval|single-server PIR]] scheme with [polylogarithmic communication](single-server-private-information-retrieval#pir-with-polylogarithmic-communication): the client generates keys for depth $L = O(\log n)$ and sends them with encryptions of the $\lceil \log n \rceil$ bits of its index, and the server homomorphically evaluates the selection circuit $f_D(x) := D[x]$, which has depth $O(\log n)$ — folklore.

## Sketch

The protocol is that of [[he-to-cpir|FHE ⇒ cPIR]] with depth bound $L = c \log n$ for a constant $c$ fixed by the depth of $f_D$. The public key, the $\lceil \log n \rceil$ input ciphertexts and the evaluated ciphertext each have length polynomial in $\secpar$ and $L$, so $|q| + |a| = \poly(\secpar, \log n)$; correctness and query privacy follow from those of the leveled scheme as in the compact case — folklore.
