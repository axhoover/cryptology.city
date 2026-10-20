---
type: reduction
status: draft
title: "Average-case-hard CZK ⇒ CZK ⊄ BPP"
aliases: []
id: red-czk-hardness-to-czk-worst-case-hardness
kind: implication
hypotheses: [czk-hardness]
conclusion: czk-worst-case-hardness
class: fully-black-box
model: standard
source: folklore
security-loss: "none: a BPP decider for the language succeeds with probability at least 2/3 under every distribution"
rationale:
  class: "The language is unchanged, and the reduction forwards any worst-case decider unchanged as an average-case one."
---

# Average-case-hard CZK ⇒ CZK ⊄ BPP

## Statement

If [[computational-zero-knowledge#average-case-hardness|CZK is hard on average]], witnessed by $L \in \classCZK$ and a PPT sampler $D$, then $L \notin \classBPP$, so [[computational-zero-knowledge#worst-case-hardness|CZK ⊄ BPP]]: a PPT algorithm deciding $L$ with probability at least $2/3$ on every input does so under $D(1^n)$, and $2/3 > 1/2 + \negl(n)$ for all sufficiently large $n$ — folklore.
