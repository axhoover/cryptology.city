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
  class: "The construction is the scheme with the coins of the response algorithm fixed and each message prefixed by its length, and any PIR privacy adversary runs as an oracle, on the query so prefixed, as an unkeyed DEPIR privacy adversary."
---

# Unkeyed DEPIR ⇒ cPIR with total communication below n

## Statement

Every [[doubly-efficient-pir#unkeyed-depir|unkeyed DEPIR]] scheme, run with each message prefixed by its length, is a [[single-server-private-information-retrieval|single-server PIR]] with [total communication below $n$](single-server-private-information-retrieval#pir-with-total-communication-below-n), whose database is preprocessed by the server itself — folklore. $\Setup(1^\secpar, DB)$ is deterministic, so the server runs it and knows everything the unkeyed privacy adversary is given, and the query phase is a two-message PIR with query-time communication and computation at most $p(\secpar) + s(n)$ for a polynomial $p$ and a function $s(n) = o(n)$; query privacy carries over unchanged at every polynomial $n$. Perfect correctness carries over from DEPIR correctness, which holds with probability $1$. Fixing the coins of $\mathsf{Rsp}$ to any value keeps the scheme perfectly correct and leaves the query and the privacy view unchanged, so the server is deterministic; the client keeps the coins of $\mathsf{Fin}$ in its state, so $\Decode$ is deterministic. The query-time communication is $|q| + |r| \le p(\secpar) + s(n)$, plus $\secpar$ bits if $1^\secpar$ is sent with $q$, and at $n(\secpar) = \max(n_0, 64, 4(p(\secpar) + \secpar)) + 1$, where $s(n) \le n/2$ for all $n \ge n_0$, this is below $3n/4$. The DEPIR syntax does not fix message lengths, so at that $n$ the scheme prefixes $q$ and $r$ each with its length in $\lceil \log_2(n + 1) \rceil$ bits, which makes the set of possible messages prefix-free and fixed by $(\secpar, n)$ and adds $2\lceil \log_2(n + 1) \rceil < n/4$ bits, so the total is below $n$; this $n(\secpar)$ is a polynomial because $s$ does not depend on $\secpar$ in the [[doubly-efficient-pir#efficiency|doubly-efficient bound]] — folklore.

## Notes

- Keyed DEPIR does not give a two-party PIR this way: [[doubly-efficient-pir#public-key-depir|public-key DEPIR]] needs a trusted party to preprocess the database — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]] — and in [[doubly-efficient-pir#secret-key-depir|secret-key DEPIR]] the client runs $\Setup$ on the database — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]].
