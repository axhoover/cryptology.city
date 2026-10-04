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
rationale:
  class: "An oracle relative to which QMA is not contained in QCMA rules out every relativizing proof of the inclusion and, by the partial order, every fully-black-box one."
---

# No relativizing reduction from QMA to QCMA

## Statement

No relativizing proof places [[quantum-merlin-arthur|QMA]] inside [[quantum-classical-merlin-arthur|QCMA]]: there is a standard classical oracle relative to which $\classQMA \not\subseteq \classQCMA$ — [[BHNZ25 - Separating QMA from QCMA with a Classical Oracle|BHNZ25]]. The separating problem is spectral Forrelation: decide whether some quantum state has computational-basis measurement supported on one oracle-defined set and Fourier-basis measurement supported on another. [[BHV26 - Separating Quantum and Classical Advice with Good Codes|BHV26]] give a simpler proof using good error-correcting codes.

## Notes

- Earlier, restricted separations of the same pair: a quantum unitary oracle — [[AK07 - Quantum versus Classical Proofs and Advice|AK07]]; an in-place quantum oracle — [[BFM23 - On the Power of Nonstandard Quantum Oracles|BFM23]]; a distributional classical oracle, with the honest witness depending only on the oracle distribution — [[NN23 - A Distribution Testing Oracle Separation between QMA and QCMA|NN23]]; a classical oracle against verifiers of bounded adaptivity — [[BK24 - Oracle Separation of QMA and QCMA with Bounded Adaptivity|BK24]].
- [[AK07 - Quantum versus Classical Proofs and Advice|AK07]] (quantum oracle) and [[BHV26 - Separating Quantum and Classical Advice with Good Codes|BHV26]] (classical oracle) also separate $\classBQP/\mathrm{qpoly}$ from $\classBQP/\mathrm{poly}$.
- Unrelativized, whether $\classQMA \subseteq \classQCMA$ is open — standard. The reverse inclusion $\classQCMA \subseteq \classQMA$ holds — folklore; see [[qcma-to-qma|QCMA ⊆ QMA]].
