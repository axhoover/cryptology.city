---
type: reduction
status: draft
title: "ABE ⇒ IBE"
aliases: []
id: red-abe-to-ibe
kind: implication
hypotheses: [abe]
conclusion: ibe
class: fully-black-box
model: standard
source: folklore
security-loss: "none (the reduction preserves the advantage)"
---

# ABE ⇒ IBE

[[attribute-based-encryption|ABE]] implies [[identity-based-encryption|IBE]].

## Statement

Any [[attribute-based-encryption|ABE]] scheme, KP or CP, over attribute universe $[\ell] \times \bits$ whose policy class contains conjunctions yields [[identity-based-encryption|IBE]] for identities in $\bits^\ell$: identity $\mathit{id}$ is encoded as the attribute set $x_{\mathit{id}} = \{(i, \mathit{id}_i)\}_{i \le \ell}$ and the policy $f_{\mathit{id}} = \bigwedge_{i \le \ell} (i, \mathit{id}_i)$, so $f_{\mathit{id}}(x_{\mathit{id}'}) = 1$ iff $\mathit{id} = \mathit{id}'$; KP-ABE carries $f_{\mathit{id}}$ in the key and $x_{\mathit{id}}$ in the ciphertext, CP-ABE the reverse. An IBE adversary is verbatim an ABE adversary with the same advantage — folklore.

## Sketch

Distinct identities differ in some position, so a key for $\mathit{id} \ne \mathit{id}^*$ is a policy–attribute pair unsatisfied by the challenge encoding; IBE admissibility (no key for $\mathit{id}^*$) is ABE admissibility.

## Notes

`class: fully-black-box`: The IBE algorithms call the ABE algorithms as oracles on the locally computed encodings $f_{\mathit{id}}$ and $x_{\mathit{id}}$. The reduction runs the IBE adversary once as an oracle, forwarding each extraction query as an ABE key query and the challenge unchanged. Fixed construction, fixed advantage-preserving reduction.
