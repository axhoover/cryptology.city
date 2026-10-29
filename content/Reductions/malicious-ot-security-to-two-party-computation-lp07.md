---
type: reduction
status: draft
title: "Malicious OT ⇒ 2PC by cut-and-choose (Lindell–Pinkas)"
aliases: []
id: red-malicious-ot-security-to-two-party-computation-lp07
kind: implication
hypotheses: [malicious-ot-security]
conclusion: two-party-computation
class: fully-black-box
model: standard
source:
  - "[[LP07 - An Efficient Protocol for Secure Two-Party Computation in the Presence of Malicious Adversaries|LP07]]"
security-loss: "statistical error at most $2^{-s/17}$ for $s$ garbled circuits, plus the advantages against the OT and against the garbling's encryption"
rationale:
  class: "LP07 describe the protocol as a black-box reduction to OT: it uses the OT and the garbling's encryption only through their interfaces, with a simulator and reductions that use the adversary only as an oracle."
---

# Malicious OT ⇒ 2PC by cut-and-choose (Lindell–Pinkas)

## Statement

Run Yao's protocol with cut-and-choose over $s$ garbled circuits and checks that the parties' inputs are consistent across the circuits. Given an OT protocol with [[oblivious-transfer#malicious-security|malicious security]] for strings of the garbling's key length, the protocol securely computes every two-party functionality with abort against a malicious adversary ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]), with a proof in the standard model and no random oracle or common reference string; it is a black-box reduction of 2PC to OT, and it is constant-round given also perfectly hiding commitments — [[LP07 - An Efficient Protocol for Secure Two-Party Computation in the Presence of Malicious Adversaries|LP07]]. The adversary cheats with probability at most $2^{-s/17}$, so $s = \omega(\log \secpar)$ makes the protocol secure — [[LP07 - An Efficient Protocol for Secure Two-Party Computation in the Presence of Malicious Adversaries|LP07]], as quantified by [[LP11 - Secure Two-Party Computation via Cut-and-Choose Oblivious Transfer|LP11]].

## Notes

- Efficiency: the only public-key operations are $O(1)$ OTs per input bit, or per bit of the statistical parameter $s$ if that is larger — [[LP07 - An Efficient Protocol for Secure Two-Party Computation in the Presence of Malicious Adversaries|LP07]]. The protocol garbles $s$ circuits, and the error $2^{-s/17}$ means 680 circuits for error $2^{-40}$ — [[LP11 - Secure Two-Party Computation via Cut-and-Choose Oblivious Transfer|LP11]]; with four ciphertexts of $O(\secpar)$ bits per gate, the garbled circuits take $O(s \cdot |C| \cdot \secpar)$ bits for a circuit $C$ — standard.
- Rounds: from OT alone the reduction takes a number of rounds linear in $s$, while Kilian's OT-only reduction takes a number of rounds linear in the circuit's depth ([[ot-to-mpc-kil88|ideal OT ⇒ 2PC]]) — [[LP07 - An Efficient Protocol for Secure Two-Party Computation in the Presence of Malicious Adversaries|LP07]].
- Constant-round parallel coin tossing and trapdoor commitments that use a one-way function only as a black box give, as a corollary, a constant-round black-box construction of 2PC from semi-honest OT — [[PW09 - Black-Box Constructions of Two-Party Protocols from One-Way Functions|PW09]].
- Fewer circuits: cut-and-choose OT under DDH brings the error to $2^{-0.311 s}$ — [[LP11 - Secure Two-Party Computation via Cut-and-Choose Oblivious Transfer|LP11]]. Where the best earlier protocols sent between 125 and 128 circuits for error $2^{-40}$, error $2^{-s}$ with $s$ circuits brings this to 40 circuits, with some additional overhead — [[Lin13 - Fast Cut-and-Choose Based Protocols for Malicious and Covert Adversaries|Lin13]].
