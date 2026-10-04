---
type: reduction
status: draft
title: "PRP ⇒ PRF"
aliases: []
id: red-prp-to-prf
kind: implication
hypotheses: [prp]
conclusion: prf
class: fully-black-box
model: standard
source:
  - "[[IR89 - Limits on the provable consequences of one-way permutations|IR89]]"
via:
  - "[[switching-lemma|Switching Lemma]]"
security-loss: "$\\Adv^{\\mathrm{prf}} \\le \\Adv^{\\mathrm{prp}} + q(q-1)/(2|\\calD|)$ for $q$ queries (birthday bound)"
rationale:
  class: "The construction is the identity on the PRP's evaluation algorithm, and the reduction runs any PRF distinguisher once, unchanged, as a PRP distinguisher; the switching-lemma gap is information-theoretic."
---

# PRP ⇒ PRF

## Statement

A [[pseudorandom-permutation|PRP]] over a domain $\calD$ with $|\calD|$ superpolynomial in $\secpar$ is a [[pseudorandom-function|PRF]] with $\Eval$ unchanged: for every $q$-query $\calA$, $\Adv^{\mathrm{prf}}_{\PRP,\calA}(\secpar) \le \Adv^{\mathrm{prp}}_{\PRP,\calA}(\secpar) + O(q^2/|\calD|)$ by the [[switching-lemma|Switching Lemma]], and for efficient $\calA$ the additive term is negligible — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].

## Sketch

Sampled lazily, a random function on $\calD$ answers $q$ distinct queries as a random permutation does until two of its outputs collide, which happens with probability at most $q(q-1)/(2|\calD|)$; so any PRF distinguisher is a PRP distinguisher up to that additive term.

## Notes

- A game-playing proof of the switching lemma, correcting a conditioning flaw in the standard proof — [[BR06 - The Security of Triple Encryption and a Framework for Code-Based Game-Playing Proofs|BR06]].
- For streaming distinguishers with $m$ bits of memory the bound is $O(mq \log q/|\calD|)$, tight up to polylogarithmic factors — [[Din20 - On the Streaming Indistinguishability of a Random Permutation and a Random Function|Din20]].
