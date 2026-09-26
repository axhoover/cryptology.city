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
security-loss: "$\\Adv^{\\mathrm{prf}} \\le \\Adv^{\\mathrm{prp}} + q(q-1)/(2|\\calD|)$ for $q$ queries (birthday bound)"
---

# PRP ⇒ PRF

A [[pseudorandom-permutation|PRP]] over a large domain is a [[pseudorandom-function|PRF]].

## Statement

A [[pseudorandom-permutation|PRP]] over a domain $\calD$ with $|\calD|$ superpolynomial in $\secpar$ is a [[pseudorandom-function|PRF]] with $\Eval$ unchanged: for every $q$-query $\calA$, $\Adv^{\mathrm{prf}}_{\PRP,\calA}(\secpar) \le \Adv^{\mathrm{prp}}_{\PRP,\calA}(\secpar) + O(q^2/|\calD|)$ by the [[switching-lemma|Switching Lemma]], and for efficient $\calA$ the additive term is negligible — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].

## Sketch

In the ideal worlds, a random permutation and a random function on $\calD$ are statistically indistinguishable up to the birthday bound $O(q^2/|\calD|)$ — an output collision is the only distinguishing event — so any PRF distinguisher is a PRP distinguisher with an additive $O(q^2/|\calD|)$ loss.

## Notes

`class: fully-black-box`: The construction is the identity: the PRP's $\Eval$ is used unchanged as the PRF, so the hypothesis is invoked only as an oracle. The security reduction runs any PRF distinguisher once, unchanged, as a PRP distinguisher; the remaining ideal-world gap (random permutation vs. random function) is the information-theoretic switching-lemma term and needs no access to the adversary's code.

- Game-playing proof of the switching lemma, correcting the conditioning flaw in the standard proof — [[BR06 - The Security of Triple Encryption and a Framework for Code-Based Game-Playing Proofs|BR06]]
- For streaming distinguishers with $m$ bits of memory the bound improves to $O(mq/|\calD|)$ — [[Din20 - On the Streaming Indistinguishability of a Random Permutation and a Random Function|Din20]]
