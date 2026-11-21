---
type: reference
status: stub
title: "BDF+11"
source: https://eprint.iacr.org/2010/428
authors: Dan Boneh, Özgür Dagdelen, Marc Fischlin, Anja Lehmann, Christian Schaffner, Mark Zhandry
venue: ASIACRYPT 2011
published: 2011
aliases:
  - "BDF+11"
cryptobib_key: AC:BDFLSZ11
---

# [BDF+11] Random Oracles in a Quantum World

**Authors:** Dan Boneh, Özgür Dagdelen, Marc Fischlin, Anja Lehmann, Christian Schaffner, Mark Zhandry | **Venue:** ASIACRYPT 2011 | [Source](https://eprint.iacr.org/2010/428)

## Abstract

The interest in post-quantum cryptography - classical systems
that remain secure in the presence of a quantum adversary - has
generated elegant proposals for new cryptosystems. Some of these systems are set in the random oracle model and are proven secure relative to adversaries that have classical access to the random oracle. We argue that to prove post-quantum security one needs to prove security in the quantum-accessible random oracle model where the adversary can query the random oracle with quantum state.
We begin by separating the classical and quantum-accessible random oracle models by presenting a scheme that is secure when the adversary
is given classical access to the random oracle, but is insecure when the adversary can make quantum oracle queries. We then set out to develop generic conditions under which a classical random oracle proof implies security in the quantum-accessible random oracle model. We introduce the concept of a history-free reduction which is a category of classical random oracle reductions that basically determine oracle answers independently of the history of previous queries, and we prove that such reductions imply security in the quantum model. We then show that certain post-quantum proposals, including ones based on lattices, can be proven secure using history-free reductions and are therefore postquantum secure. We conclude with a rich set of open problems in this area.
