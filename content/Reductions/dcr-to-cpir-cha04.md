---
type: reduction
status: draft
title: DCR ⇒ One-round sublinear cPIR
aliases: []
id: red-dcr-to-cpir-cha04
kind: implication
hypotheses: [dcr]
conclusion: one-round-sublinear-cpir
class: unstated
model: standard
source:
  - "[[Cha04 - Single Database Private Information Retrieval with Logarithmic Communication|Cha04]]"
security-loss: "polynomial"
rationale:
  security-loss: "The server sees only the client's Paillier public key and ciphertexts, so privacy follows from semantic security by a hybrid over the query's ciphertexts."
---

# DCR ⇒ One-round sublinear cPIR

## Statement

If [[decisional-composite-residuosity|DCR]] is hard, there is a perfectly correct, one-round [[single-server-private-information-retrieval|single-server PIR]] scheme, built from Paillier's cryptosystem, whose server-side communication is logarithmic in the database size $n$ and whose client-side communication is $O(n^{\varepsilon} \log n)$ for a constant $\varepsilon < 1$, the factors polynomial in $\secpar$, so a [[single-server-private-information-retrieval#one-round-sublinear-pir|one-round sublinear]] one — [[Cha04 - Single Database Private Information Retrieval with Logarithmic Communication|Cha04]].

## Sketch

View the database as a $\sqrt n \times \sqrt n$ matrix with target entry $(a, b)$: the client sends Paillier encryptions $c_j \gets \Enc(\pk, [j = b])$ for $j \le \sqrt n$ under a modulus $N$, and for each row $r$ the server computes $z_r := \prod_j c_j^{D[r, j]} \bmod N^2$, an encryption of $D[r, b]$ by the additive homomorphism. Instead of returning the $z_r$, the server reads them, each written as $O(1)$ plaintexts of a second level of Paillier encryption, as a $\sqrt n$-entry database and selects $z_a$ the same way with an encrypted unit vector for $a$, and the client decrypts the second level, then the first; the query is $O(\sqrt n)$ ciphertexts and public keys and the answer $O(1)$ ciphertexts, each of $\poly(\secpar)$ bits, which meets the bounds above with $\varepsilon = 1/2$ — [[Cha04 - Single Database Private Information Retrieval with Logarithmic Communication|Cha04]]. Semantic security of Paillier's scheme under DCR, through a hybrid over the query ciphertexts, hides $(a, b)$ — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]].
