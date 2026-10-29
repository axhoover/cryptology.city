---
type: reduction
status: draft
title: "Zap + HSG ⇒ Non-interactive zaps (BOV)"
aliases: []
id: red-zap-and-co-nondeterministic-hsg-to-non-interactive-zap-bov03
kind: implication
hypotheses: [zap, co-nondeterministic-hsg]
conclusion: non-interactive-zap
class: unstated
model: standard
source:
  - "[[BOV03 - Derandomization in Cryptography|BOV03]]"
security-loss: ""
---

# Zap + HSG ⇒ Non-interactive zaps (BOV)

## Statement

Suppose every language in $\classNP$ has a [[zero-knowledge-proof#zaps|zap]] and there is a [[pseudorandom-generator#hitting-set-generators-against-co-nondeterministic-circuits|hitting-set generator against co-nondeterministic circuits]]. Then every language in $\classNP$ has a [[zero-knowledge-proof#non-interactive-zaps|non-interactive zap]]: a one-message witness-indistinguishable proof that needs no setup or shared random string — [[BOV03 - Derandomization in Cryptography|BOV03]], who derandomize the zaps of [[DN00 - Zaps and Their Applications|DN00]].

## Sketch

For every seed $s$, the prover sends the zap prover's answer to the first message $G(s)$, and the verifier accepts iff every answer verifies. Fix a false statement $x$: the first messages on which some answer is accepted form a set of density at most $1/2$, and a polynomial-size co-nondeterministic circuit decides its complement, so some $G(s)$ lies outside it. Witness indistinguishability of each answer holds for every first message, and a hybrid over the polynomially many seeds gives witness indistinguishability of the whole proof — [[BOV03 - Derandomization in Cryptography|BOV03]].

## Notes

- Composed with [[nizk-to-zap-dn00|NIZK ⇒ Zaps (Dwork–Naor)]] and [[tdp-to-nizk-bfm88|Doubly enhanced certified TDP ⇒ NIZK]], this gives non-interactive zaps from doubly enhanced certified trapdoor permutations together with the generator; BOV03 state the result for any trapdoor permutation, and the enhancement is what the NIZK step needs — [[BOV03 - Derandomization in Cryptography|BOV03]], [[GR13 - Enhancements of Trapdoor Permutations|GR13]].
- The same generator derandomizes Naor's commitment ([[prg-to-com-naor91|PRG ⇒ COM]]) into a non-interactive commitment from any one-way function — [[BOV03 - Derandomization in Cryptography|BOV03]].
- Non-interactive zaps without a derandomization assumption follow from the decisional linear assumption in bilinear groups ([[bilinear-pairing-and-dlin-to-zap-gos06|Bilinear pairing + DLIN ⇒ Zaps (non-interactive)]]) — [[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]].
