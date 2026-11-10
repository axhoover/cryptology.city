---
type: reduction
status: draft
title: "ZKP + NP ⊄ io-BPP ⇒ CZK ⊄ BPP"
aliases: []
id: red-zkp-and-np-not-in-io-bpp-to-czk-worst-case-hardness
kind: implication
hypotheses: [zkp, np-not-in-io-bpp]
conclusion: czk-worst-case-hardness
class: unstated
model: standard
source: folklore
security-loss: "none: a PPT algorithm deciding the language contradicts NP ⊄ io-BPP unchanged"
rationale:
  class: "One hypothesis and the conclusion are worst-case complexity separations rather than RTV04 primitives."
---

# ZKP + NP ⊄ io-BPP ⇒ CZK ⊄ BPP

## Statement

If every language in $\classNP$ has a computational [[zero-knowledge-proof|zero-knowledge proof]] and [[nondeterministic-polynomial-time#hardness-at-almost-every-input-length|NP ⊄ io-BPP]], witnessed by $L \in \classNP$, then $L \in \classCZK$, and $L \notin \classBPP$ since every PPT algorithm $\calA$ has, at all but finitely many input lengths, an input $x$ with $\Pr[\calA(x) = L(x)] < 2/3$; so [[computational-zero-knowledge#worst-case-hardness|CZK ⊄ BPP]] — folklore.

## Notes

- Any $L \in \classNP \setminus \classBPP$ serves, so $\classNP \not\subseteq \classBPP$ suffices — folklore.
- Composed with [[zkp-to-hash-function|CZK ⊄ BPP ⇒ Auxiliary-input OWF]], the hypotheses give an auxiliary-input one-way function — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]].
