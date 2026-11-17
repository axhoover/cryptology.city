---
type: reduction
status: draft
title: "Unkeyed DEPIR ⇒ cPIR with total communication below n"
aliases: []
id: red-depir-to-cpir
kind: implication
hypotheses: [unkeyed-depir]
conclusion: total-nontrivial-cpir
class: fully-black-box
model: standard
source: folklore
security-loss: ""
rationale:
  class: "The construction is the identity with the coins of the response algorithm fixed, and any PIR privacy adversary runs unchanged, as an oracle, as an unkeyed DEPIR privacy adversary."
---

# Unkeyed DEPIR ⇒ cPIR with total communication below n

## Statement

Every [[doubly-efficient-pir#unkeyed-depir|unkeyed DEPIR]] scheme is a [[single-server-private-information-retrieval|single-server PIR]] with [total communication below $n$](single-server-private-information-retrieval#pir-with-total-communication-below-n), whose database is preprocessed by the server itself — folklore. $\Setup(1^\secpar, DB)$ is deterministic, so the server runs it and knows everything the unkeyed privacy adversary is given, and the query phase is a two-message PIR with query-time communication and computation at most $p(\secpar) + s(n)$ for a polynomial $p$ and a function $s(n) = o(n)$; query privacy carries over unchanged at every polynomial $n$. Perfect correctness carries over from DEPIR correctness, which holds with probability $1$. Fixing the coins of $\mathsf{Rsp}$ to any value keeps the scheme perfectly correct and leaves the query and the privacy view unchanged, so the server is deterministic; the client keeps the coins of $\mathsf{Fin}$ in its state, so $\Decode$ is deterministic. The total communication is $|q| + |r| \le p(\secpar) + s(n)$, plus $\secpar$ bits if $1^\secpar$ is sent with $q$, which is below $n$ at $n(\secpar) = \max(n_0, 2(p(\secpar) + \secpar)) + 1$, where $s(n) \le n/2$ for all $n \ge n_0$; this $n(\secpar)$ is a polynomial because $s$ does not depend on $\secpar$ in the [[doubly-efficient-pir#efficiency|doubly-efficient bound]] — folklore.

## Notes

- Keyed DEPIR does not give a two-party PIR this way: [[doubly-efficient-pir#public-key-depir|public-key DEPIR]] needs a trusted party to preprocess the database — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]] — and in [[doubly-efficient-pir#secret-key-depir|secret-key DEPIR]] the client runs $\Setup$ on the database — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]].
