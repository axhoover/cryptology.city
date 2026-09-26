---
type: reduction
status: draft
title: "ROM + ZKP ⇒ DS"
aliases: []
id: red-rom-and-zkp-to-ds-fs86
kind: implication
hypotheses: [rom, zkp]
conclusion: ds
class: fully-black-box
model: rom
source:
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
security-loss: "Quadratic in the forger's advantage and linear in its random-oracle query count: a forger with advantage $\\varepsilon$ and $q$ oracle queries yields a witness with probability about $\\varepsilon^2/q$ (forking lemma) — PS96."
---

# ROM + ZKP ⇒ DS

[[random-oracle-model|ROM]] together with a three-move public-coin honest-verifier [[zero-knowledge-proof|ZKP]] of knowledge for a hard relation implies [[digital-signature|DS]], via the Fiat–Shamir transform.

## Statement

Applying the [[fiat-shamir-heuristic|Fiat–Shamir transform]] to a three-move public-coin [[zero-knowledge-proof#honest-verifier-zk-hvzk|honest-verifier zero-knowledge]] proof of knowledge for a hard relation (sign $m$ by running the prover to obtain a first message $a$, set $c = \hash(a, m)$, and output the transcript) yields a [[digital-signature|digital signature]] scheme — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]. It is EUF-CMA secure in the [[random-oracle-model|random oracle model]]: the forking lemma reruns the forger on the same coins, resampling the oracle answers from the forgery's query onward, to obtain two accepting transcripts sharing $a$, from which special soundness extracts the witness — [[PS96 - Security Proofs for Signature Schemes|PS96]]. With commitments of super-logarithmic min-entropy, the signature is EUF-CMA secure in the random oracle model if and only if the identification scheme is secure against passive impersonation — [[AABN02 - From Identification to Signatures via the Fiat-Shamir Transform Minimizing Assumptions for Security and Forward-Security|AABN02]].

## Sketch

Schnorr's protocol for [[discrete-logarithm|discrete log]] instantiates the transform: the signature on $m$ is $(c, z)$ with $a = g^r$, $c = \hash(a, m)$ and $z = r + c x$ — [[Sch91 - Efficient signature generation by smart cards|Sch91]]. Two forgeries with the same $a$ and distinct challenges give $x = (z - z')/(c - c')$, so the forking lemma turns a forger into a discrete-log solver.

## Notes

`class: fully-black-box`: the compiler calls the sigma protocol only through its prover, verifier and honest-verifier simulator (which answers signing queries by programming the oracle); the reduction runs any forger as an oracle, rewinds it, and feeds the two accepting transcripts to the special-soundness extractor. Reading the simulator and extractor as part of the sigma protocol's interface, this is the RTV04 fully-black-box shape.

`model: rom`: EUF-CMA security is proved only with $\hash$ modelled as a random oracle, which the reduction observes and programs. The barrier [[no-fiat-shamir-and-hash-function-to-ds-gk03]] concerns instantiating the oracle with a concrete hash function, not the ROM statement.
