---
type: primitive
status: stub
aliases:
  - IT-PIR
  - Multi-server Private Information Retrieval
title: Multi-server Private Information Retrieval
id: it-pir
variants:
  computational-multi-server-pir: "#computational-multi-server-pir"
---

# Multi-server Private Information Retrieval

Private Information Retrieval (PIR) is a primitive that allows a client to access a specific element from a public array without revealing which array element was accessed, introduced by [[CGKS98 - Private information retrieval|CGKS98]].

## Syntax

A $k$-server Private Information Retrieval (PIR) for a database of size $n$ is a tuple of efficient functions $(\Query, \Answer, \mathsf{Compute})$, with respect to randomness space $R$ such that:

- Generally, we consider the size of the initial queries to be $u$ bits each and the answers to be $d$ bits each.
- In general, we can consider the total communication of a PIR as $k(u + d)$.
- A PIR is non-trivial only so long as the communication is less than $n$.

## Properties

### Correctness

A PIR is correct if for all $D \in \bits^n$, $i \in [n]$, and $r \in R$ $$\Recon(i,a_1,\ldots,a_k ; r) = D[i]$$ where each $a_s \leftarrow \Answer(s, q_s, D)$ and $(q_1, \ldots, q_k) \leftarrow \Query(i; r)$.

### Privacy

A PIR is private if for every $i, j \in [n]$, $s \in [k]$, and $q \in \bits^u$, $$\Pr_r[\Query(i; r)[s] = q] = \Pr_r[\Query(j; r)[s] = q].$$

Intuitively, this means that each server observes the same query uploaded with the same probability.

# Variations

## Computational Multi-server PIR

Similar to the [[single-server-private-information-retrieval|PIR]], one can weaken the notion of multi-server PIR to only be private against polynomial-time non-colluding servers. In this setting, the syntax remains the same, but now the query distribution is only required to be computationally indistinguishable for any two index pairs.

- [[prg-to-dpf-gi14|PRG ⇒ DPF]]
- [[dpf-to-computational-multi-server-pir-gi14|DPF ⇒ Computational Multi-server PIR]]

For every constant $\varepsilon > 0$ there is a one-round two-server computational PIR with communication $O(n^{\varepsilon})$, built from [[pseudorandom-generator|pseudorandom generators]] and storing the database unencoded — [[CG97 - Computationally private information retrieval|CG97]]. With one-bit answers its queries have length $2^{O(\sqrt{\log n})}$, which [[distributed-point-function|distributed point functions]] reduce to polylogarithmic — [[GI14 - Distributed Point Functions and Their Applications|GI14]]. Two-server information-theoretic PIR has communication $n^{O(\sqrt{\log\log n/\log n})} = n^{o(1)}$ — [[DG15 - 2-Server PIR with Sub-Polynomial Communication|DG15]] — so the $O(n^{\varepsilon})$ bound no longer needs an assumption.

## Doubly-efficient Multi-server PIR

In $k$-server PIR with preprocessing, each server stores, besides $D$, polynomially many bits precomputed from it. When the servers hold only the database, they together read at least $n$ database bits per query in expectation, for every $k$ and whatever the communication; with preprocessing there are, for every constant $k \ge 2$, information-theoretic $k$-server schemes with $O(n^{1/(2k-1)})$ communication and $O(n/\log^{2k-2} n)$ server work, and, for every constant $\varepsilon > 0$, schemes with $O(n^{1/k+\varepsilon})$ communication and server work — [[BIM00 - Reducing the Servers Computation in Private Information Retrieval PIR with Preprocessing|BIM00]].

# Other results

- The typical setting is the 1-bit array (also called database), since you can build a $w$-bit PIR using just $w$ copies of a 1-bit PIR.
- With one server, perfect privacy requires $n$ bits of communication; with two non-colluding servers, $O(n^{1/3})$ bits suffice — [[CGKS98 - Private information retrieval|CGKS98]].
- For every constant $k \ge 2$ there is a $k$-server information-theoretic PIR with communication $O(n^{1/(2k-1)})$, generalizing the two-server $O(n^{1/3})$ of CGKS98 — [[Amb97 - Upper Bound on Communication Complexity of Private Information Retrieval|Amb97]]. BIKR02 lower this to $n^{O(\log\log k/(k \log k))}$, below $O(n^{1/(2k-1)})$ for every $k \ge 3$ ($O(n^{1/5.25})$ for three servers), and obtain $k$-query binary locally decodable codes of length $\exp(n^{O(\log\log k/(k\log k))})$, shorter than earlier ones for every $k \ge 4$ — [[BIKR02 - Breaking the O(n1(2k-1)) Barrier for Information-Theoretic Private Information Retrieval|BIKR02]].
- There is a two-server information-theoretic PIR with total communication $n^{O(\sqrt{\log\log n/\log n})}$, improving the $O(n^{1/3})$ of earlier two-server schemes and matching the known three-server schemes; it reduces matching-vector PIR from 3 or 4 servers to 2 by recasting it as polynomial interpolation and adding partial derivatives — [[DG15 - 2-Server PIR with Sub-Polynomial Communication|DG15]].
- For every Mersenne prime $2^t - 1$ there are 3-query locally decodable codes of length $\exp(n^{1/t})$; with the largest Mersenne prime known in 2007 this gives length below $\exp(n^{10^{-7}})$ and 3-server information-theoretic PIR with communication $O(n^{10^{-7}})$, and if there are infinitely many Mersenne primes the codes have length $\exp(n^{O(1/\log\log n)})$ for infinitely many $n$ — [[Yek07 - Towards 3-query locally decodable codes of subexponential length|Yek07]]. Unconditionally, 3-query locally decodable codes of length $\exp(\exp(O(\sqrt{\log n \log\log n})))$ exist, with $2^r$-query analogues, and give 3-server PIR with communication $2^{\tilde O(\sqrt{\log n})}$ — [[Efr09 - 3-query locally decodable codes of subexponential length|Efr09]]; 3-server PIR with communication $2^{\tilde O((\log n)^{1/3})}$ follows from matching vectors and derivatives — [[GKS25 - Improved PIR Schemes using Matching Vectors and Derivatives|GKS25]].
- Locally decodable codes are related to smooth codes, whose decoder queries no codeword position much more often than uniformly — [[KT00 - On the efficiency of local decoding procedures for error-correcting codes|KT00]]. A perfectly smooth non-adaptive $q$-query code of length $N$ over $\Sigma$, whose decoder is always correct on an uncorrupted codeword and whose every query is uniform on $[N]$, gives $q$-server PIR with $q(\log N + \log |\Sigma|)$ bits of communication: server $j$ stores the encoded database and returns the symbol at the decoder's $j$-th query — standard. In the other direction, one-round two-server information-theoretic PIR reduces to 2-query locally decodable codes; binary linear 2-query codes have length $2^{\Omega(n)}$, so a two-server scheme whose answers are linear combinations of the database, with $t$-bit queries and $a$-bit answers, has $t = \Omega(n/2^a)$ — [[GKST06 - Lower bounds for linear locally decodable codes and private information retrieval|GKST06]]. Every binary 2-query locally decodable code has length $2^{\Omega(n)}$, linear or not — [[KdW03 - Exponential lower bound for 2-query locally decodable codes via a quantum argument|KdW03]] — and one-round two-server PIR with one-bit answers needs queries of at least $n - 2$ bits, against the upper bound $n - 1$, improving the roughly $0.25n$ of KdW03 — [[BFG06 - A tight lower bound for restricted PIR protocols|BFG06]].
- In the offline/online model the client fetches a hint before choosing its index, and the online phase then runs in time sublinear in $n$ without extra server storage; the protocols can be statistically secure with two servers and are computationally secure with one, and both are optimal for the trade-off between communication and running time in this model — [[CK20 - Private Information Retrieval with Sublinear Online Time|CK20]]. From [[hash-function#preimage-resistance-one-wayness|one-way functions]], two servers reach $\tilde O(n^{1/4})$ bandwidth with $\tilde O(n^{1/2})$ computation per query and $\tilde O(n^{1/2})$ client storage — [[GZS24 - Efficient Pre-processing PIR Without Public-Key Cryptography|GZS24]] — and polylogarithmic bandwidth with $\tilde O_\secpar(n^{1/2+\varepsilon})$ client space and $n^{1+\varepsilon}$ server space — [[GZSP25 - Pseudorandom Functions with Weak Programming Privacy and Applications to Private Information Retrieval|GZSP25]].

<!-- BEGIN GENERATED participates-in 8fbaf879ee65 -->

## Participates in

**Builds on Multi-server Private Information Retrieval**

- [[it-pir-to-computational-multi-server-pir|IT-PIR ⇒ Computational Multi-server PIR]]

**Produces Multi-server Private Information Retrieval**

- [[dpf-to-computational-multi-server-pir-gi14|DPF ⇒ Computational Multi-server PIR]] (via [[multi-server-private-information-retrieval#computational-multi-server-pir|Computational Multi-server PIR]])
- [[it-pir-to-computational-multi-server-pir|IT-PIR ⇒ Computational Multi-server PIR]] (via [[multi-server-private-information-retrieval#computational-multi-server-pir|Computational Multi-server PIR]])
- [[spir-to-it-pir|SPIR ⇒ IT-PIR]]
- [[ss-to-it-pir-cgks98|Linear SS ⇒ IT-PIR]]

<!-- END GENERATED participates-in -->
