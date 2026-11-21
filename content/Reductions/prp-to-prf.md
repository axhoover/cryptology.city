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
  - "[[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]]"
via:
  - "[[switching-lemma|Switching Lemma]]"
security-loss: "$\\Adv^{\\mathrm{prf}} \\le \\Adv^{\\mathrm{prp}} + q(q-1)/(2|\\calD|)$ for $q$ queries (birthday bound)"
rationale:
  class: "The construction is the identity on the PRP's evaluation algorithm, and the reduction runs any PRF distinguisher once, unchanged, as a PRP distinguisher; the switching-lemma gap is information-theoretic."
---

# PRP ⇒ PRF

## Statement

A [[pseudorandom-permutation|PRP]] over a domain $\calD$ with $|\calD|$ superpolynomial in $\secpar$ is a [[pseudorandom-function|PRF]] with $\Eval$ unchanged: for every $\calA$ making at most $q$ queries, $\Adv^{\mathrm{prf}}_{\PRP,\calA}(\secpar) \le \Adv^{\mathrm{prp}}_{\PRP,\calA}(\secpar) + q(q-1)/(2|\calD|)$ by the [[switching-lemma|Switching Lemma]], and for efficient $\calA$ the additive term is negligible — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]]. For $\calD = \bits^l$ this is Proposition 2.5 of [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]], stated for every family of permutations $E$ on $\bits^l$ as $\Adv^{\mathrm{prf}}_E(q, t) \le \Adv^{\mathrm{prp}}_E(q, t) + q(q-1)/2^{l+1}$, the maximal advantages over adversaries making $q$ queries in time $t$ — [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]].

## Sketch

Sampled lazily, a random function on $\calD$ answers $q$ distinct queries as a random permutation does until two of its outputs collide, which happens with probability at most $q(q-1)/(2|\calD|)$; so any PRF distinguisher is a PRP distinguisher up to that additive term.

## Notes

- The usual proof of the switching lemma conditions on the random function's answers being distinct and equates the conditional output probability with the permutation's — [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]], Proposition 2.5. That step fails when the number of queries depends on the answers, and a game-playing proof avoids it — [[BR06 - The Security of Triple Encryption and a Framework for Code-Based Game-Playing Proofs|BR06]]. The step holds for adversaries that always make exactly $q$ distinct queries, to which every adversary can be padded, so the bound stands ([[switching-lemma#proof|Switching Lemma]]) — standard.
- The term is tight up to a constant: on $\bits^l$, $q$ distinct queries and a test for repeated answers give advantage at least $0.316 \cdot q(q-1)/2^l$ against every family of permutations, for $1 \le q \le 2^{(l+1)/2}$ — [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]], Proposition 2.4.
- For streaming distinguishers with $m$ bits of memory the bound is $O(mq \log q/|\calD|)$, tight up to polylogarithmic factors — [[Din20 - On the Streaming Indistinguishability of a Random Permutation and a Random Function|Din20]].
