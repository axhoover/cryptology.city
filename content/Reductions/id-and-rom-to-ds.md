---
type: reduction
status: draft
title: "ID + ROM ⇒ DS"
aliases: []
id: red-id-and-rom-to-ds
kind: implication
hypotheses: [identification-scheme, rom]
conclusion: ds
class: fully-black-box
model: rom
source:
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
security-loss: ""
---

# ID + ROM ⇒ DS

[[identification-scheme|ID]] together with [[random-oracle-model|ROM]] implies [[digital-signature|DS]].

## Statement

The Fiat–Shamir transform turns a three-move public-coin [[identification-scheme|identification scheme]] into a [[digital-signature|DS]] scheme in the [[random-oracle-model|ROM]]: the signer computes the verifier's challenge as the random-oracle hash of the first-message commitment and the message, and the signature is the resulting transcript — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]. If the identification scheme is secure against impersonation under passive attack and non-trivial (its commitments have super-logarithmic min-entropy), the resulting scheme is $\eufcma$-secure; for non-trivial schemes this condition is also necessary — [[AABN02 - From Identification to Signatures via the Fiat-Shamir Transform Minimizing Assumptions for Security and Forward-Security|AABN02]].

## Sketch

The reduction answers signing queries with honest transcripts obtained from the passive-attack oracle, programming the random oracle so the challenge matches; a forgery on a fresh oracle query is an accepting transcript for a challenge the reduction can forward to the honest verifier, breaking passive impersonation with a loss linear in the number of oracle queries.

## Notes

`class: fully-black-box`: the transform uses the identification scheme's prover and verifier only as oracles; both reductions use the forger only as an oracle, AABN02's programming the random oracle and PS00's also rewinding the forger.

`model: rom`: the reductions program the random oracle that replaces the verifier's challenge; some secure identification schemes yield forgeable signatures under every hash-function instantiation — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]].

- Forking-lemma proof of $\eufcma$ security in the ROM for identification schemes with honest-verifier zero knowledge and two-transcript extraction; the reduction rewinds the forger and loses a factor polynomial in the number of random-oracle queries — [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]]
- The same characterization holds for forward security — [[AABN02 - From Identification to Signatures via the Fiat-Shamir Transform Minimizing Assumptions for Security and Forward-Security|AABN02]]
- The [[identification-scheme]] page is an unlisted stub with no syntax or security definitions.
