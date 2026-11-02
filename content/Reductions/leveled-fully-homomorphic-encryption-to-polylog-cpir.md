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

An IND-CPA-secure [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled fully homomorphic encryption]] scheme yields a one-round [[single-server-private-information-retrieval|single-server PIR]] scheme with [polylogarithmic communication](single-server-private-information-retrieval#pir-with-polylogarithmic-communication): the client generates a key pair $(\pk, \sk) \gets \KeyGen(1^{\secpar'}, 1^L)$ at security parameter $\secpar' = \max(\secpar, \lceil \log n \rceil)$ and depth bound $L = c \secpar'$, a polynomial in $\secpar'$ as the leveled scheme requires, for a constant $c$ with $c \lceil \log n \rceil$ at least the depth of the selection circuit, and sends $\pk$ with encryptions of the $\lceil \log n \rceil$ bits of its index, keeping $\sk$ as its state, and the server homomorphically evaluates the selection circuit $f_D(x) := D[x]$, which has depth $O(\log n)$ — folklore.

## Sketch

The protocol is that of [[he-to-cpir|FHE ⇒ cPIR]] with these parameters. The public key, the $\lceil \log n \rceil$ input ciphertexts and the evaluated ciphertext each have length polynomial in $\secpar'$ and $L$, so $|q| + |a| = \poly(\secpar, \log n)$. Correctness and query privacy follow from the leveled scheme's correctness and IND-CPA security at security parameter $\secpar' \ge \secpar$, as in the compact case: an adversary running in time polynomial in $\secpar$ runs in time polynomial in $\secpar'$, and a function negligible in $\secpar'$ stays below a function negligible in $\secpar$, its supremum over $\secpar' \ge \secpar$ — folklore.
