---
type: reduction
status: draft
title: McEliece assumptions ⇒ Goppa code indistinguishability
aliases: []
id: red-mceliece-assumptions-to-goppa-code-indistinguishability
kind: implication
hypotheses: [mceliece-assumptions]
conclusion: goppa-code-indistinguishability
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction keeps one component of the pair, and the reduction forwards any adversary unchanged."
---

# McEliece assumptions ⇒ Goppa code indistinguishability

## Statement

If [[syndrome-decoding#mceliece-assumptions|the McEliece assumptions]] hold for $(n, m, t)$, then [[syndrome-decoding#goppa-code-indistinguishability|Goppa codes are indistinguishable]] for $(n, m, t)$, with the same advantage — folklore.
