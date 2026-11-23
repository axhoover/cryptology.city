---
type: reduction
status: draft
title: "Same-width SPR hash and PRF ⇒ Length-halving second-preimage resistance"
aliases: []
id: red-same-width-spr-and-prf-to-length-halving-second-preimage-resistance
kind: implication
hypotheses: [same-width-spr-and-prf]
conclusion: length-halving-second-preimage-resistance
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction keeps one component of the pair unchanged, and the reduction forwards any adversary against it unchanged."
---

# Same-width SPR hash and PRF ⇒ Length-halving second-preimage resistance

## Statement

Let $(\hash, f)$ be a [[hash-function#spr-hashing-with-a-prf-of-the-same-width|same-width SPR hash and PRF]] of width $n$. Its first component $\hash : \calK \times \bits^{2n} \to \bits^n$ is, with its own key generation, a [[hash-function#length-halving-second-preimage-resistance|length-halving second-preimage-resistant]] family with $m := n$, with the same advantage $\Adv^{\mathrm{spr}}_{\hash,\calA}(\secpar)$ for every $\calA$ — folklore.
