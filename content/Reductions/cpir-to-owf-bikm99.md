---
type: reduction
status: draft
title: Non-trivial cPIR ⇒ OWF
aliases: []
id: red-cpir-to-owf-bikm99
kind: implication
hypotheses: [nontrivial-cpir]
conclusion: owf
class: unstated
model: standard
source:
  - "[[BIKM99 - One-Way Functions Are Essential for Single-Server Private Information Retrieval|BIKM99]]"
security-loss: ""
---

# Non-trivial cPIR ⇒ OWF

## Statement

If a [[single-server-private-information-retrieval#non-trivial-pir|non-trivial]] [[single-server-private-information-retrieval|single-server PIR]] scheme exists, in which for some polynomial $n(\secpar)$ the server sends fewer than $n$ bits on $n$-bit databases and retrieval fails with probability at most $1/(8n)$, then [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist — [[BIKM99 - One-Way Functions Are Essential for Single-Server Private Information Retrieval|BIKM99]]. The proof is simpler for perfectly correct schemes; for them, saving a single bit over downloading the database already requires one-way functions — [[BIKM99 - One-Way Functions Are Essential for Single-Server Private Information Retrieval|BIKM99]].

## Notes

- Trivial PIR, in which the server sends the whole database, is perfectly private with no assumption, so the bound $n$ is where computational assumptions start — [[BIKM99 - One-Way Functions Are Essential for Single-Server Private Information Retrieval|BIKM99]].
- The known stronger consequences hold for perfectly correct schemes with a deterministic server and stronger communication bounds: total communication below $n$ gives [[cpir-to-ot-dmo00|OT]] — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]] — and one-round communication $p(\secpar) \cdot n^c$ for a polynomial $p$ and a constant $c < 1$ gives [[cpir-to-crhf-iko05|collision-resistant hashing]] — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]].
- A randomized server is no more general for this theorem, which bounds only the server's communication: the client can choose the server's coins for every round and send them before the server's first message, adding a first client message if the server speaks first, which leaves the server's communication, the correctness and the query privacy unchanged — folklore. The client's messages grow by those coins, so this does not lift the deterministic-server condition of [PIR with total communication below $n$](single-server-private-information-retrieval#pir-with-total-communication-below-n).
- Constant error is also tolerated at lower communication: a PIR with error $1/4$ and communication complexity below $n/10$ bits implies one-way functions — [[BIKM99 - One-Way Functions Are Essential for Single-Server Private Information Retrieval|BIKM99]].
- A single-server PIR with communication at most $n/2$ bits yields a weakly binding, [[commitment-scheme#hiding|statistically hiding]] bit commitment with the PIR's number of rounds — [[BIKM99 - One-Way Functions Are Essential for Single-Server Private Information Retrieval|BIKM99]]; a variant of the construction essentially preserves the PIR's communication, which turns commit-stage lower bounds into the [[no-tdp-to-one-round-sublinear-cpir-hhs08|linear lower bound for polynomially-preserving fully-black-box PIR from trapdoor permutations]] — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]].
