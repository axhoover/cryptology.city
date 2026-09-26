---
type: reduction
status: draft
title: "ROM + ZKP ⇒ NIZK"
aliases: []
id: red-rom-and-zkp-to-nizk-fs86
kind: implication
hypotheses: [rom, zkp]
conclusion: nizk
class: fully-black-box
model: rom
source:
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
security-loss: ""
---

# ROM + ZKP ⇒ NIZK

[[random-oracle-model|ROM]] together with a three-move public-coin honest-verifier [[zero-knowledge-proof|ZKP]] implies [[non-interactive-zero-knowledge|NIZK]], via the Fiat–Shamir transform.

## Statement

The [[fiat-shamir-heuristic|Fiat–Shamir transform]] compiles a three-move public-coin [[zero-knowledge-proof#honest-verifier-zk-hvzk|honest-verifier zero-knowledge]] proof into a [[non-interactive-zero-knowledge|NIZK]] argument in the [[random-oracle-model|random oracle model]] by replacing the verifier's challenge with the random oracle applied to the statement and the first message — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]. Under mild conditions on the sigma protocol the compiled system is simulation-sound and weakly simulation-extractable, hence non-malleable — [[FKMV12 - On the Non-malleability of the Fiat-Shamir Transform|FKMV12]].

## Sketch

The simulator runs the honest-verifier simulator to obtain an accepting $(a, c, z)$ and programs $\RO(x, a) := c$, undetectable because $a$ has high min-entropy. For $x \notin L$ special soundness leaves at most one accepting challenge per first message, so a prover making $q$ oracle queries succeeds with probability at most $(q+1)/|C|$ for challenge space $C$; knowledge extraction rewinds the prover across its oracle queries, as in the forking lemma.

## Notes

`class: fully-black-box`: the compiler calls the sigma protocol only through its prover, verifier and honest-verifier simulator; zero knowledge is shown by programming the random oracle with simulated transcripts, soundness by counting oracle queries, and knowledge soundness by rewinding any cheating prover run as an oracle. Reading the simulator and extractor as part of the sigma protocol's interface, this is the RTV04 fully-black-box shape.

`model: rom`: zero knowledge (which programs the oracle) and soundness are proved only with the challenge hash modelled as a random oracle. The barrier [[no-fiat-shamir-to-nizk-gk03]] rules out instantiating the oracle with a concrete hash function and is scoped to the standard model.
