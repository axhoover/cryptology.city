---
type: barrier
status: draft
title: "No reduction from ORAM to sublogarithmic-overhead ORAM"
aliases: []
id: bar-oram-to-sublogarithmic-oram-ln18
hypotheses: [oram]
conclusion: sublogarithmic-oram
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[LN18 - Yes, There is an Oblivious RAM Lower Bound!|LN18]]"
rationale:
  class: "LN18's bound holds for every online ORAM whatever its construction or security proof, so every reduction is ruled out."
  strength: "The hypothesis holds unconditionally, since the linear-scan ORAM is perfectly secure, so the barrier rests on no hardness assumption."
---

# No reduction from ORAM to sublogarithmic-overhead ORAM

## Statement

Let $\Pi$ be an online [[oblivious-ram|ORAM]], one that processes each operation before receiving the next ([[BN16 - Is There an Oblivious RAM Lower Bound|BN16]]), whose server only stores and returns cells. Let $\Pi$ have $N_1$ blocks of $\beta_1 \ge 1$ bits, $m$ bits of client memory and server cells of any size, and let it be secure, even only computationally and even if it errs with probability up to $1/3$. Then some sequence of $\Theta(N_1)$ operations has expected amortized bandwidth blowup $\Omega(\log(N_1 \beta_1 / m))$, even when $\Pi$ encodes the data arbitrarily — [[LN18 - Yes, There is an Oblivious RAM Lower Bound!|LN18]]. For $\beta_1 \le m \le N_1^{1-\varepsilon}$, with $\varepsilon > 0$ a constant, the bound is $\Omega(\log N_1)$, so no [[oblivious-ram#sublogarithmic-overhead-oram|sublogarithmic-overhead ORAM]] exists. ORAM itself exists unconditionally: the linear scan, which reads and rewrites every cell on each operation, is perfectly secure — folklore. Hence no reduction of any class from ORAM to sublogarithmic-overhead ORAM exists.

## Notes

- Every online ORAM makes $\Omega(\log(Nw/m)/\log(b/w))$ amortized memory probes per operation, where $w$ is the virtual cell size and $b$ the physical cell size; the bound is tight up to the $\log(b/w)$ factor and extends to non-colluding multiple servers. When $w = \log N$ and $b, m \in \polylog N$, some offline ORAM makes $o(1)$ probes per operation on average, while every online one makes $\Omega(\log N/\log\log N)$ — [[KL21 - A Logarithmic Lower Bound for Oblivious RAM (for all parameters)|KL21]].
- LN18's adversary knows which physical accesses belong to which operation. The $\Omega(\log N_1)$ bound for online ORAM holds without that knowledge — [[HKKS19 - Stronger Lower Bounds for Online ORAM|HKKS19]].
- The bound is tight: OptORAMa has $O(\log N_1)$ amortized bandwidth blowup ([[prf-to-logarithmic-oram-akl-20|PRF ⇒ logarithmic-overhead ORAM (OptORAMa)]]) — [[AKL+20 - OptORAMa Optimal Oblivious RAM|AKL+20]]. It also matches the upper bounds known before OptORAMa when $\beta_1 = \Omega(\log^2 N_1)$ — [[LN18 - Yes, There is an Oblivious RAM Lower Bound!|LN18]].
- Offline ORAM with fixed instructions that may encode the data is not covered: a lower bound there, with $O(1)$ blocks of client memory at every step, would imply superlinear lower bounds on the size of sorting circuits ([[small-sorting-circuits-to-sublogarithmic-offline-oram-bn16|Small sorting circuits ⇒ sublogarithmic-overhead offline ORAM with fixed instructions]]) — [[BN16 - Is There an Oblivious RAM Lower Bound|BN16]]. Online ORAM whose reads, but not writes, have $o(\log N_1)$ overhead follows from small sorting circuits and locally decodable codes with parameters not known to exist, so a lower bound for online read-only ORAM would need a new circuit lower bound or would have to rule out such codes — [[WW18 - Is There an Oblivious RAM Lower Bound for Online Reads|WW18]].
- With server computation the bound does not apply: Onion ORAM has $O(1)$ worst-case bandwidth blowup ([[dcr-to-constant-bandwidth-oram-ddf-16|DCR ⇒ constant-bandwidth ORAM (Onion ORAM)]]) — [[DDF+16 - Onion ORAM A Constant Bandwidth Blowup Oblivious RAM|DDF+16]].
