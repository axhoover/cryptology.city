---
type: primitive
status: stub
aliases:
  - SPIR
  - IT-SPIR
  - (Multi-server) Symmetric private information retrieval
  - Symmetric private information retrieval (Multi-server)
  - Symmetric private information retrieval
title: Multi-server Symmetric private information retrieval
id: spir
---

# Multi-server Symmetric private information retrieval

Multi-server symmetric private information retrieval (SPIR) is [[multi-server-private-information-retrieval|multi-server PIR]] that also protects the data: no single server learns anything about the client's index $i$, and the client learns the single physical bit $D[i]$ of the database and no other information about it — [[GIKM00 - Protecting Data Privacy in Private Information Retrieval Scheme|GIKM00]].

## Syntax

A one-round $k$-server SPIR for databases $D \in \bits^n$ is a tuple of functions $(\Query, \Answer, \Recon)$ with respect to a client randomness space $R$. Every server holds $D$, and the servers share a random string $\rho$, drawn independently of $D$ and of the client's coins and unknown to the client:

- $\Query(i; r) \to (q_1, \ldots, q_k)$ takes an index $i \in [n]$ and coins $r \in R$, outputting one query per server;
- $\Answer(s, q_s, D; \rho) \to a_s$ takes a server index $s \in [k]$, that server's query $q_s$, the database $D$ and the shared string $\rho$, outputting an answer $a_s$;
- $\Recon(i, a_1, \ldots, a_k; r) \to x$ outputs a bit $x \in \bits$.

Without $\rho$, this is the syntax of [[multi-server-private-information-retrieval#syntax|multi-server PIR]].

## Properties

### Correctness

A SPIR is **correct** if for all $D \in \bits^n$, $i \in [n]$, $r \in R$ and $\rho$,

$$
\Recon(i, a_1, \ldots, a_k; r) = D[i],
$$

where $(q_1, \ldots, q_k) = \Query(i; r)$ and $a_s = \Answer(s, q_s, D; \rho)$ for each $s \in [k]$.

### Query privacy

A SPIR has **query privacy** if for all $i, j \in [n]$, $s \in [k]$ and queries $q$,

$$
\Pr_r\!\left[\Query(i; r)_s = q\right] = \Pr_r\!\left[\Query(j; r)_s = q\right],
$$

the [[multi-server-private-information-retrieval#privacy|privacy requirement of multi-server PIR]]. Since $\rho$ is independent of $r$, the whole view $(q_s, D, \rho)$ of server $s$ is then independent of $i$.

### Data privacy

A SPIR has **data privacy** if for all $i \in [n]$, $r \in R$ and $D, D' \in \bits^n$ with $D[i] = D'[i]$, the answers $(a_1, \ldots, a_k)$ to the queries $\Query(i; r)$ have the same distribution over $\rho$ on $D$ as on $D'$: the client's view $(r, a_1, \ldots, a_k)$ depends on $D$ only through $D[i]$.

A SPIR has **data privacy against dishonest clients** if for every tuple of queries $(q_1, \ldots, q_k)$, whether or not $\Query$ can output it, there is an index $i \in [n]$ such that for all $D, D' \in \bits^n$ with $D[i] = D'[i]$, the tuples $(\Answer(s, q_s, D; \rho))_{s \in [k]}$ and $(\Answer(s, q_s, D'; \rho))_{s \in [k]}$ have the same distribution over $\rho$. A client that deviates from $\Query$ then still learns at most one physical bit of $D$.

# Other results

- For every constant $k \ge 2$ there is a $k$-server SPIR with communication $O(n^{1/(2k-1)})$, and there is an $O(\log n)$-server SPIR with communication $O(\log^2 n \cdot \log\log n)$; both have one round and information-theoretic privacy, and are [[symmetric-private-information-retrieval-multi-server#data-privacy|data-private against dishonest clients]]. Both come from a transformation of PIR schemes into SPIR schemes that costs a constant factor in communication and is built on conditional disclosure of secrets, a primitive GIKM00 introduce. The schemes also give the first distributed version of $1$-out-of-$n$ [[oblivious-transfer|OT]] with information-theoretic security and sublinear communication — [[GIKM00 - Protecting Data Privacy in Private Information Retrieval Scheme|GIKM00]].

<!-- BEGIN GENERATED participates-in abb06b978648 -->

## Participates in

**Builds on Multi-server Symmetric private information retrieval**

- [[spir-to-it-pir|SPIR ⇒ IT-PIR]]

<!-- END GENERATED participates-in -->
