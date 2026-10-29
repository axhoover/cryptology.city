---
type: reduction
status: draft
title: "Non-interactive zap ⇒ Zap"
aliases: []
id: red-non-interactive-zap-to-zap
kind: implication
hypotheses: [non-interactive-zap]
conclusion: zap
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The zap is the non-interactive zap with the verifier's message ignored, and the reductions forward any adversary unchanged."
---

# Non-interactive zap ⇒ Zap

## Statement

A [[zero-knowledge-proof#non-interactive-zaps|non-interactive zap]] for an $\classNP$-complete language is a [[zero-knowledge-proof#zaps|zap]] for it whose prover ignores the verifier's first message: perfect soundness makes every first message one on which no false statement has an accepting answer, and witness indistinguishability holds for every first message because the answer does not depend on it — folklore.
