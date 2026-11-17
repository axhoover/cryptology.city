---
type: reduction
status: draft
title: McEliece assumptions ⇒ SD
aliases: []
id: red-mceliece-assumptions-to-syndrome-decoding
kind: implication
hypotheses: [mceliece-assumptions]
conclusion: syndrome-decoding
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction keeps one component of the pair, and the reduction forwards any adversary unchanged."
---

# McEliece assumptions ⇒ SD

## Statement

If [[syndrome-decoding#mceliece-assumptions|the McEliece assumptions]] hold for $(n, m, t)$, then [[syndrome-decoding|SD]] is hard for $(n, k(n, m, t), t)$, where $k(n, m, t)$ is the dimension of the binary Goppa codes that McEliece key generation samples, with the same advantage — folklore.
