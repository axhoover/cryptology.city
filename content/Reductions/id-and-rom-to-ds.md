---
type: reduction
status: draft
title: "ID ⇒ DS"
aliases: []
id: red-id-and-rom-to-ds
kind: implication
hypotheses: [identification-scheme]
conclusion: ds
class: fully-black-box
model: rom
source:
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
security-loss: "$\\approx \\varepsilon^2/q$ for advantage $\\varepsilon$ and $q$ random-oracle queries (PS96)"
rationale:
  class: "The transform uses the identification scheme's prover and verifier only as oracles, and the reductions run the forger only as an oracle, programming the random oracle (AABN02) and rewinding the forger (PS00)."
  model: "The reductions program the random oracle that replaces the verifier's challenge."
---

# ID ⇒ DS

## Statement

The [[fiat-shamir-heuristic|Fiat–Shamir transform]] turns a three-move public-coin [[identification-scheme|identification scheme]] into a [[digital-signature|signature scheme]] in the [[random-oracle-model|ROM]]: the signer computes the verifier's challenge as the random-oracle hash of the commitment and the message, and the signature is the resulting transcript — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]. If the identification scheme is secure against impersonation under passive attack and non-trivial (its commitments have super-logarithmic min-entropy), the resulting scheme is [[digital-signature#existential-unforgeability|EUF-CMA]]-unforgeable in the ROM; for non-trivial schemes, passive-impersonation security is also necessary — [[AABN02 - From Identification to Signatures via the Fiat-Shamir Transform Minimizing Assumptions for Security and Forward-Security|AABN02]].

## Sketch

The reduction guesses which random-oracle query the forgery will use, sends that query's commitment to the honest verifier, and programs the oracle's answer to the verifier's challenge; it answers signing queries with transcripts from the passive-attack oracle, programming the oracle to match. A forgery then completes the impersonation, at a loss linear in the number of oracle queries.

## Notes

- The random oracle cannot be removed in general: some secure identification schemes yield signatures forgeable under every hash-function instantiation — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]].
- For a three-move public-coin [[zero-knowledge-proof#honest-verifier-zk-hvzk|honest-verifier zero-knowledge]] proof of knowledge for a hard relation, the scheme is EUF-CMA-unforgeable in the ROM: the forking lemma reruns the forger on the same coins, resampling the oracle answers from the forgery's query onward, to obtain two accepting transcripts sharing the commitment, from which special soundness extracts a witness — [[PS96 - Security Proofs for Signature Schemes|PS96]], [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]]. A forger with advantage $\varepsilon$ making $q$ random-oracle queries yields a witness with probability about $\varepsilon^2/q$ — [[PS96 - Security Proofs for Signature Schemes|PS96]].
- Schnorr's protocol for [[discrete-logarithm|discrete log]] instantiates the transform ([[fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91|Schnorr identification ⇒ Schnorr signatures]]): the signature on $m$ is $(c, z)$ with $a = g^r$, $c = \hash(a, m)$ and $z = r + c x$, and two accepting transcripts with the same $a$ and distinct challenges give $x = (z - z')/(c - c')$ — [[Sch91 - Efficient signature generation by smart cards|Sch91]].
- The same characterization holds for forward security — [[AABN02 - From Identification to Signatures via the Fiat-Shamir Transform Minimizing Assumptions for Security and Forward-Security|AABN02]].
