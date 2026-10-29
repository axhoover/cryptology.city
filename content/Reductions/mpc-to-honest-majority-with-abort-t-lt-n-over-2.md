---
type: reduction
status: draft
title: "MPC ⇒ MPC with abort and honest majority ($t < n/2$)"
aliases: []
id: red-mpc-to-honest-majority-with-abort-t-lt-n-over-2
kind: implication
hypotheses: [mpc]
conclusion: honest-majority-with-abort-t-lt-n-over-2
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: the simulator for n - 1 corruptions with unanimous abort serves every corrupted set of size below n/2, using the adversary only as an oracle."
---

# MPC ⇒ MPC with abort and honest majority ($t < n/2$)

## Statement

A protocol that securely computes $f$ with unanimous abort against $n - 1$ corruptions ([[secure-multi-party-computation#security-with-abort|security with abort]]) securely computes $f$ with abort against every $t < n/2$ corruptions ([honest majority with abort, $t < n/2$](secure-multi-party-computation#honest-majority-with-abort-t--n2)), since those corrupted sets are among the former, and unanimous abort is the case of selective abort in which the simulator withholds every honest party's output or none — folklore.
