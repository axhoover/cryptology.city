---
type: reduction
status: draft
title: "Optimally fair coin flipping ⇒ Constant-bias coin flipping"
aliases: []
id: red-optimally-fair-coin-flipping-to-constant-bias-coin-flipping
kind: implication
hypotheses: [optimally-fair-coin-flipping]
conclusion: constant-bias-coin-flipping
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the member of the family with a fixed constant number of rounds, run unchanged, and the reduction forwards any biasing adversary unchanged."
---

# Optimally fair coin flipping ⇒ Constant-bias coin flipping

## Statement

If $\{\Pi_r\}$ is [[coin-flipping#optimally-fair-coin-flipping|optimally fair coin flipping]] with constant $C$, then $\Pi_r$ for the constant $r = \lceil 4C \rceil$ has [[coin-flipping#coin-flipping-with-constant-bias|constant bias]]: every efficient adversary corrupting either party makes the honest party output its chosen bit with probability at most $1/2 + C/r + \negl(\secpar) \le 1/2 + 1/4 + \negl(\secpar)$, so its bias is at most $1/3$ for all sufficiently large $\secpar$ — folklore.
