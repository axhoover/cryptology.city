---
type: reduction
status: draft
title: "PRF ⇒ logarithmic-overhead ORAM (OptORAMa)"
aliases: []
id: red-prf-to-logarithmic-oram-akl-20
kind: implication
hypotheses: [prf]
conclusion: logarithmic-oram
class: fully-black-box
model: standard
source:
  - "[[AKL+20 - OptORAMa Optimal Oblivious RAM|AKL+20]]"
security-loss: ""
rationale:
  class: "The construction evaluates the PRF only as an oracle and its bandwidth does not depend on the PRF's implementation, and the proof replaces the PRF by a random function, so the reduction runs any access-pattern distinguisher only as an oracle."
---

# PRF ⇒ logarithmic-overhead ORAM (OptORAMa)

## Statement

If a [[pseudorandom-function|PRF]] secure against every efficient adversary exists, then for all $\secpar \le N \le T \le \poly(\secpar)$ there is an [[oblivious-ram|ORAM]] over $N$ blocks of at least $\log N$ bits with $O(\log N)$ amortized bandwidth blowup over $T \ge N$ accesses, whose security failure probability is negligible in $\secpar$. It keeps $O(1)$ words of client state besides the PRF key and needs no large-word assumption, so it is a [[oblivious-ram#logarithmic-overhead-oram|logarithmic-overhead ORAM]] — [[AKL+20 - OptORAMa Optimal Oblivious RAM|AKL+20]]. One-way functions suffice, by [[owf-to-prg-hill99|OWF ⇒ PRG]] and [[prg-to-prf-ggm86|PRG ⇒ PRF]] — [[AKL+20 - OptORAMa Optimal Oblivious RAM|AKL+20]]. The overhead matches the $\Omega(\log N)$ lower bound for online ORAM ([[no-oram-to-sublogarithmic-oram-ln18|No reduction from ORAM to sublogarithmic-overhead ORAM]]), so it is optimal — [[AKL+20 - OptORAMa Optimal Oblivious RAM|AKL+20]].

## Notes

- PanORAMa earlier reached $O(\log N \cdot \log\log N)$ amortized bandwidth blowup, with client storage of $O(1)$ blocks and blocks of $\Omega(\log N)$ bits — [[PPRY18 - PanORAMa Oblivious RAM with Logarithmic Overhead|PPRY18]]; OptORAMa builds on it — [[AKL+20 - OptORAMa Optimal Oblivious RAM|AKL+20]].
- One building block is a deterministic linear-time oblivious algorithm for tight compaction, improving the previously best deterministic and randomized algorithms, which run in time $O(n \log n)$ and $O(n \log\log n)$ — [[AKL+20 - OptORAMa Optimal Oblivious RAM|AKL+20]].
- With a private random oracle in place of the PRF, the construction is statistically secure — [[AKL+20 - OptORAMa Optimal Oblivious RAM|AKL+20]].
