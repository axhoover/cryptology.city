---
type: reduction
status: draft
title: Additively homomorphic encryption ⇒ cPIR
aliases: []
id: red-additively-homomorphic-encryption-to-cpir-ste98
kind: implication
hypotheses: [additively-homomorphic-encryption]
conclusion: cpir
class: fully-black-box
model: standard
source:
  - "[[Ste98 - A New Efficient All-Or-Nothing Disclosure of Secrets Protocol|Ste98]]"
security-loss: "a factor of the number of query ciphertexts, from a hybrid over them"
rationale:
  class: "The server computes on ciphertexts only through the scheme's homomorphic operations, and the privacy reduction runs any server distinguisher only as an oracle on queries built from its encryption challenges."
---

# Additively homomorphic encryption ⇒ cPIR

## Statement

A semantically secure [[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic encryption]] scheme yields a [[single-server-private-information-retrieval|single-server PIR]] scheme with communication $O(n^{\varepsilon})$ ciphertexts for every constant $\varepsilon > 0$ — [[Ste98 - A New Efficient All-Or-Nothing Disclosure of Secrets Protocol|Ste98]].

## Sketch

For a $\sqrt n \times \sqrt n$ database, the client sends $c_j \gets \Enc(\pk, [j = b])$ for $j \le \sqrt n$, and the server returns, for each row $r$, the homomorphic combination $\sum_j D[r, j] \cdot c_j$, an encryption of $D[r, b]$; semantic security hides $b$. Recursing on the server's answer, read as a smaller database of ciphertext bits, lowers the communication as in [[qr-to-cpir-ko97|KO97]] — [[Ste98 - A New Efficient All-Or-Nothing Disclosure of Secrets Protocol|Ste98]].

## Notes

- With Paillier's scheme, server-side communication logarithmic in $n$ is achievable: [[dcr-to-cpir-cha04|DCR ⇒ cPIR]] — [[Cha04 - Single Database Private Information Retrieval with Logarithmic Communication|Cha04]].
