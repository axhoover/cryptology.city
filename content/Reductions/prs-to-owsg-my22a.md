---
type: reduction
status: draft
title: "PRS ⇒ OWSG"
aliases: []
id: red-prs-to-one-way-state-generator-my22a
kind: implication
hypotheses: [prs]
conclusion: pure-one-way-state-generator
class: unstated
model: quantum
source:
  - "[[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]]"
security-loss: ""
---

# PRS ⇒ OWSG

## Statement

If [[pseudorandom-quantum-state|pseudorandom quantum state generators]] $(\KeyGen, \mathsf{StateGen})$ with output length $n = \omega(\log \secpar)$ exist, then [[one-way-state-generator#pure-owsgs|pure one-way state generators]] exist — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]]. The generator keeps $\KeyGen$ and $\mathsf{StateGen}$, and $\Vrfy(k', \sigma)$ accepts with probability $\langle \phi_{k'} | \sigma | \phi_{k'} \rangle$, by projecting $\sigma$ onto $|\phi_{k'}\rangle$.

## Sketch

The projection is efficient: running $\mathsf{StateGen}(k')$ as a unitary on $|0\rangle$ yields $|\phi_{k'}\rangle|j_{k'}\rangle$ for some junk state $|j_{k'}\rangle$, and replacing the first register by $\sigma$ and undoing the unitary returns $|0\rangle$ with probability $\langle \phi_{k'} | \sigma | \phi_{k'} \rangle$. A distinguisher given $t+1$ copies runs the inverter on $t$ of them and projects the last onto $|\phi_{k'}\rangle$; on PRS copies it accepts with the inverter's success probability. On Haar-random copies, whose average is the maximally mixed state on the symmetric subspace, it accepts with probability at most $(t+1)/(2^n + t)$, so the inverter's success probability is negligible — standard.
