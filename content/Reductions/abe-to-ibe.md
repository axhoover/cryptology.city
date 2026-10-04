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
rationale:
  class: "The IBE algorithms call the ABE algorithms as oracles on locally computed encodings, and the reduction runs the IBE adversary once as an oracle, forwarding each extraction query as an ABE key query and the challenge unchanged."
---

# ABE ⇒ IBE

## Statement

Take a KP- or CP-[[attribute-based-encryption|ABE]] scheme over attribute universe $[\ell] \times \bits$ whose policy class contains conjunctions. Encode identity $\mathit{id} \in \bits^\ell$ as the attribute set $x_{\mathit{id}} = \{(i, \mathit{id}_i)\}_{i \le \ell}$ and the policy $f_{\mathit{id}} = \bigwedge_{i \le \ell} (i, \mathit{id}_i)$, so $f_{\mathit{id}}(x_{\mathit{id}'}) = 1$ iff $\mathit{id} = \mathit{id}'$; KP-ABE carries $f_{\mathit{id}}$ in the key and $x_{\mathit{id}}$ in the ciphertext, CP-ABE the reverse. If the scheme is [[attribute-based-encryption#kp-abe-ind-cpa-security|KP-IND-CPA-secure]] (resp. [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-IND-CPA-secure]]), the resulting [[identity-based-encryption|IBE]] for identities in $\bits^\ell$ is [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]]: every IBE adversary is verbatim an ABE adversary with the same advantage — folklore.

## Sketch

Distinct identities differ in some position, so a key for $\mathit{id} \ne \mathit{id}^*$ is a policy–attribute pair unsatisfied by the challenge encoding; IBE admissibility (no key for $\mathit{id}^*$) is ABE admissibility.
