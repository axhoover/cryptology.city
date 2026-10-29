---
type: barrier
status: draft
title: "No reduction from authenticated channels to UC MPC"
aliases: []
id: bar-authenticated-channels-to-uc-mpc-ckl03
hypotheses: [authenticated-channels]
conclusion: uc-mpc
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
circumvented-by:
  - red-enhanced-trapdoor-permutation-to-uc-mpc-clos02
  - red-ideal-ot-and-prg-to-uc-mpc-ips08
  - red-correlated-randomness-to-uc-mpc-bdoz11
source:
  - "[[CKL03 - On the Limitations of Universally Composable Two-Party Computation without Set-up Assumptions|CKL03]]"
rationale:
  class: "CKL03's impossibility holds for every plain-model protocol whatever its assumptions, so it rules out the implication itself: the free class, scoped to the plain model."
---

# No reduction from authenticated channels to UC MPC

## Statement

Over [[interactive-protocol#authenticated-channels|authenticated point-to-point channels]] without setup, large classes of deterministic and probabilistic two-party functionalities have no protocol that UC-realizes them against a malicious adversary statically corrupting one of the two parties, whatever computational assumption the protocol relies on. For deterministic functionalities in which both parties receive the same output, in which only one party receives output, or in which only one party has input, CKL03 characterize the functionalities that can be UC-realized — [[CKL03 - On the Limitations of Universally Composable Two-Party Computation without Set-up Assumptions|CKL03]]. [[secure-multi-party-computation#universal-composability-uc|UC MPC]] asks for a protocol for every functionality, $n = 2$ included, so no reduction of any kind gives it from authenticated channels.

## Sketch

A UC simulator for a corrupted party must extract that party's effective input straight-line, since the environment runs the party and cannot be rewound, and without a setup the simulator holds nothing the honest party lacks. A corrupted party that runs the simulator on the honest party's messages therefore learns the honest party's effective input, which the functionality may hide — [[CKL03 - On the Limitations of Universally Composable Two-Party Computation without Set-up Assumptions|CKL03]].

## Notes

- Two-party UC commitments do not exist in the plain model, and they do exist in the common reference string model — [[CF01 - Universally Composable Commitments|CF01]].
- Security under concurrent general composition is equivalent to a relaxed variant of UC security that differs only in the order of quantifiers, so the plain-model impossibility carries over to concurrent general composition, and it holds for non-black-box simulation too — [[Lin03b - General Composition and Universal Composability in Secure Multi-Party Computation|Lin03b]].
- A setup circumvents the barrier: a common reference string together with enhanced trapdoor permutations ([[enhanced-trapdoor-permutation-to-uc-mpc-clos02|enhanced TDP ⇒ UC MPC]]) — [[CLOS02 - Universally Composable Two-Party and Multi-Party Secure Computation|CLOS02]]; ideal OT together with a PRG ([[ideal-ot-and-prg-to-uc-mpc-ips08|ideal OT + PRG ⇒ UC MPC]]) — [[IPS08 - Founding Cryptography on Oblivious Transfer Efficiently|IPS08]]; and dealt correlated randomness ([[correlated-randomness-to-uc-mpc-bdoz11|correlated randomness ⇒ UC MPC]]) — [[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]].
