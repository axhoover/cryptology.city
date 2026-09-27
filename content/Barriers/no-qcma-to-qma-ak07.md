---
type: barrier
status: draft
title: "No relativizing reduction from QMA to QCMA"
aliases: []
id: bar-qma-to-qcma-bhnz25
hypotheses: [qma]
conclusion: qcma
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
oracle: "a standard classical oracle (spectral Forrelation)"
source:
  - "[[BHNZ25 - Separating QMA from QCMA with a Classical Oracle|BHNZ25]]"
  - "[[BHV26 - Separating Quantum and Classical Advice with Good Codes|BHV26]]"
---

# No relativizing reduction from QMA to QCMA

A reduction of class `relativizing` from [[quantum-merlin-arthur|QMA]] to [[quantum-classical-merlin-arthur|QCMA]] would imply a contradiction.

## Statement

There is a standard classical oracle relative to which $\classQMA \not\subseteq \classQCMA$ — [[BHNZ25 - Separating QMA from QCMA with a Classical Oracle|BHNZ25]]; [[BHV26 - Separating Quantum and Classical Advice with Good Codes|BHV26]] give a simpler proof via good error-correcting codes. No relativizing argument places [[quantum-merlin-arthur|QMA]] inside [[quantum-classical-merlin-arthur|QCMA]]; the unrelativized question is open.

## Sketch

The separating problem is spectral Forrelation: decide whether some state has computational-basis measurement supported on one oracle-defined set and Fourier-basis measurement supported on another. A classical witness can be reused to draw many samples, while a quantum witness is consumed by measurement; this reduces QCMA hardness to a sampling lower bound, proved by a bosonic (second-quantization) compression of quantum oracle access — [[BHNZ25 - Separating QMA from QCMA with a Classical Oracle|BHNZ25]].

## Notes

`class: relativizing`: an oracle separation rules out exactly the relativizing class and, by the partial order, every fully-black-box argument. It says nothing about non-relativizing arguments.

- Earlier, restricted separations of the same pair: a quantum unitary oracle — [[AK07 - Quantum versus Classical Proofs and Advice|AK07]]; an in-place quantum oracle — [[BFM23 - On the Power of Nonstandard Quantum Oracles|BFM23]]; a distributional classical oracle, with the honest witness depending only on the oracle distribution — [[NN23 - A Distribution Testing Oracle Separation between QMA and QCMA|NN23]]; a classical oracle against verifiers of bounded adaptivity — [[BK24 - Oracle Separation of QMA and QCMA with Bounded Adaptivity|BK24]].
- [[AK07 - Quantum versus Classical Proofs and Advice|AK07]] (quantum oracle) and [[BHV26 - Separating Quantum and Classical Advice with Good Codes|BHV26]] (classical oracle) also separate $\classBQP/\mathrm{qpoly}$ from $\classBQP/\mathrm{poly}$. These classes have no nodes, so that separation is not recorded as an edge.
- The slug `no-qcma-to-qma-ak07` predates the correction: QCMA ⊆ QMA holds ([[qcma-to-qma]]).
