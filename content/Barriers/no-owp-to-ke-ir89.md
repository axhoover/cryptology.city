---
type: barrier
status: draft
title: "No relativizing reduction from OWP to KE"
aliases: []
id: bar-owp-to-ke-ir89
hypotheses: [owp]
conclusion: ke
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
source:
  - "[[IR89 - Limits on the provable consequences of one-way permutations|IR89]]"
security-loss: "Polynomially many eavesdropper queries against honest parties making $\\ell$ queries — roughly $\\ell^{6}$ for a random function and roughly $\\ell^{12}$ for a random permutation, as BM09 report IR89's attack; BM09 reduce both to the optimal $O(\\ell^2)$."
---

# No relativizing reduction from OWP to KE

A reduction of class `relativizing` from [[one-way-permutation|OWP]] to [[key-exchange|KE]] would imply a contradiction.

## Statement

There is an oracle — a random permutation together with a $\classPSPACE$-complete oracle — relative to which [[one-way-permutation|one-way permutations]] exist but no [[key-exchange|key-agreement]] protocol is secure; hence no relativizing, and in particular no fully-black-box, construction of key agreement from a one-way permutation exists. The theorem's primary form is conditional: relative to a random permutation, if $\classP = \classNP$ then every key-agreement protocol is broken, so proving secure any key-agreement protocol that uses the permutation as a black box is as hard as proving $\classP \neq \classNP$ — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].

## Sketch

Relative to a random permutation $\pi$, the eavesdropper, holding the transcript, repeatedly samples executions of the two parties consistent with everything she knows and queries $\pi$ at every point such executions query with non-negligible probability; once she holds every query the parties have in common, a fresh consistent view of one party yields that party's key. The sampling is not efficient in general but is if $\classP = \classNP$, which turns the attack into the barrier.

## Notes

`class: relativizing`: IR89 exhibit an oracle — a random permutation together with a $\classPSPACE$-complete oracle, so that $\classP = \classNP$ relative to it — under which one-way permutations exist but no key-agreement protocol is secure. An oracle separation rules out every relativizing reduction, and by the partial order in schema/reduction-classes.yaml every fully-black-box one. This is the worked example the schema file itself gives.

- The eavesdropper's query complexity is reduced to the optimal $O(\ell^2)$, matching Merkle's puzzles, so no random-oracle key agreement achieves a better-than-quadratic query gap — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]].
- IR89's oracle is a random permutation together with a $\classPSPACE$-complete oracle; the statements of the separation on [[black-box-separations]] omit the second oracle.
