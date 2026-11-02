---
type: primitive
status: stub
aliases:
  - DEPIR
  - SK-DEPIR
  - PK-DEPIR
  - Doubly-efficient PIR
title: Doubly-efficient PIR
id: depir
variants:
  unkeyed-depir: "#unkeyed-depir"
  sk-depir: "#secret-key-depir"
  pk-depir: "#public-key-depir"
  pk-depir-sublinear-key: "#pk-depir-with-a-sublinear-key"
  passive-sk-depir: "#passive-server-sk-depir"
---

# Doubly-efficient PIR

Doubly efficient PIR is a type of [[single-server-private-information-retrieval|single-server PIR]] that allows the database to be _preprocessed_ before the client queries the data. A PIR is considered a DEPIR if both the communication and the computation at **query time** are $o(n)$, where $n$ is the size of the database. The three main variants of DEPIR are: secret-key, public-key, and unkeyed. Any unkeyed DEPIR is trivially a PK-DEPIR, which is trivially an SK-DEPIR. Secret-key DEPIR was introduced by [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]] and [[CHR17 - Towards Doubly Efficient Private Information Retrieval|CHR17]], and public-key DEPIR by [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]].

## Syntax

A (one-round) _doubly-efficient private information retrieval_ (DEPIR) scheme is a tuple of efficient algorithms $(\Setup, \mathsf{Qry}, \mathsf{Rsp}, \mathsf{Fin})$ with respect to a key space $\calK$ such that

- $\Setup(1^\secpar,DB) \to (EDB,k)$, is a randomized algorithm that takes a security parameter and database $DB \in \bits^n$, and outputs an encoded database $EDB \in \bits^*$ and (optionally, see variations) a key $k\in \calK$,
- $\mathsf{Qry}(k,i) \to (q,h)$, is a randomized algorithm that takes (optionally) a key $k\in \calK$ and index $i \in [n]$, and outputs $q \in \bits^*$ and a hint $h \in \bits^*$,
- $\mathsf{Rsp}(q,EDB) \to r$, is a randomized algorithm that takes a query $q\in \bits^*$ and database $EDB \in \bits^*$, and outputs a response $r \in \bits^*$,
- $\mathsf{Fin}(h,r) \to a$, is a randomized algorithm that takes a hint $h \in \bits^*$ and response $r \in \bits^*$, and outputs an answer $a \in \bits$.

## Properties

### Correctness

A DEPIR scheme is _correct_ if for every $\secpar \in \NN$, database $DB \in \bits^n$, and index $i \in [n]$, $$\Pr\bigg[\mathsf{Fin}(h,r) = DB[i] ~\Bigg|~ \substack{
(EDB,k) \gets \Setup(1^\secpar,DB)\\
(q,h) \gets \mathsf{Qry}(k,i)\\
r \gets \mathsf{Rsp}(q,EDB)\\
}\bigg] =1.$$

### Unkeyed DEPIR

By default DEPIR scheme outputs no key i.e. $k = \bot$ with probability $1$. The security of this scheme is the same as either game below, which are equivalent when $k$ is set to $\bot$.

### Public-key DEPIR

The _privacy advantage_ of an adversary $\calA$ that outputs database $DB$ and indices $i_0$ and $i_1$ is defined as $$\Adv^{\mathrm{priv}}_{\calA}(\secpar) := 2\left|\Pr[\calA(1^\secpar,k,EDB,q) = b] - \frac{1}{2}\right|,$$ where $(EDB,k) \gets \Setup(1^\secpar,DB)$, $b \getsr \bits$, and $(q,h) \gets \mathsf{Qry}(k,i_b)$. A PK-DEPIR scheme is **private** if for all efficient $\calA$, $\Adv^{\mathrm{priv}}_{\calA}(\secpar)$ is negligible. Because $\mathsf{Qry}$ uses only the public $k$, single-query privacy implies privacy for polynomially many queries by a hybrid argument — folklore.

#### PK-DEPIR with a sublinear key

A PK-DEPIR scheme has a **sublinear key** if, on $n$-bit databases, the key $k$ that $\Setup$ outputs has length $o(n)$. An unkeyed DEPIR scheme has one, since its key is $\bot$. HPY26's lower bound for public-key DEPIR is for this case and does not rule out public keys of length $\Omega(n)$ — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]].

### Secret-key DEPIR

In secret-key DEPIR, $\calA$ is not given $k$ and makes polynomially many adaptive left-or-right queries, all answered under the same $k$ with no key update — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]], [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]]. A single-query notion is met from [[hash-function|one-way functions]] alone by storing $EDB[\pi(j)] = DB[j] \oplus F(j)$ for a secret [[pseudorandom-permutation|PRP]] $\pi$ and [[pseudorandom-function|PRF]] $F$ and sending $q = \pi(i)$; this scheme fails the many-query notion, since repeated queries to one index repeat $q$ — folklore.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sk\text{-}priv}}_{\calA}(\secpar)$}
\begin{algorithmic}
\State $(DB, \stA) \gets \calA(1^\secpar)$
\State $(EDB, k) \gets \Setup(1^\secpar, DB)$; $b \getsr \bits$
\State $b' \gets \calA^{\calO_b}(EDB, \stA)$
\Comment{Polynomially many adaptive queries, all under the same $k$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_b(i_0, i_1)$}
\begin{algorithmic}
\State $(q, h) \gets \mathsf{Qry}(k, i_b)$
\Return $q$
\end{algorithmic}
\end{algorithm}
```

An SK-DEPIR scheme is **secret-key private** if for all efficient $\calA$,

$$
\Adv^{\mathrm{sk\text{-}priv}}_{\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sk\text{-}priv}}_{\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

#### Passive-server SK-DEPIR

An SK-DEPIR scheme in the syntax above, one query and one response (two rounds in the count of LMW25), has a **passive server** if every query $q$ is a list of positions in $EDB$ and $\mathsf{Rsp}(q, EDB)$ returns the entries of $EDB$ at those positions — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]].

# Variations

## Multi-server DEPIR

In $k$-server PIR with preprocessing, each of $k$ non-colluding servers stores, besides $D$, polynomially many bits precomputed from it. When the servers hold only the database and the client keeps no state between queries, the servers of a perfectly private, perfectly correct scheme together read at least $n$ database bits per query in expectation, for every $k$ and whatever the communication; with preprocessing there are, for every constant $k \ge 2$, information-theoretic $k$-server schemes with $O(n^{1/(2k-1)})$ communication and $O(n/\log^{2k-2} n)$ server work, and, for every constant $\varepsilon > 0$, schemes with $O(n^{1/k+\varepsilon})$ communication and server work — [[BIM00 - Reducing the Servers Computation in Private Information Retrieval PIR with Preprocessing|BIM00]]. See [[multi-server-private-information-retrieval#doubly-efficient-multi-server-pir|doubly-efficient multi-server PIR]].

# Other results

- [[lwe-to-depir-lmw23|Ring-LWE ⇒ Unkeyed DEPIR]] — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]]
- Many cryptographic primitives cannot be used to construct SK-DEPIR in a black-box way, unless [[hash-function|OWF]] can be used to construct SK-DEPIR in a black-box way, and black-box one-way functions give no [[doubly-efficient-pir#passive-server-sk-depir|passive-server SK-DEPIR]] ([[no-owf-to-passive-sk-depir-lmw25|No fully-black-box reduction from OWF to passive-server SK-DEPIR]]) — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]]
- For single-server computationally private PIR with public preprocessing, whose $r$-bit hint is available to everyone including the adversary, and expected query time $t$, $t \cdot r = \Omega(n \log n)$ when $r = \Omega(\log n)$ and $t = \Omega(n)$ when $r = O(\log n)$, even with error $1/n^2$ and distinguishing advantage $1/n$ — [[PY22 - Limits of Preprocessing for Single-Server PIR|PY22]]. [Public-key DEPIR with a public key of length $o(n)$](doubly-efficient-pir#pk-depir-with-a-sublinear-key), and hence [unkeyed DEPIR](doubly-efficient-pir#unkeyed-depir), with sublinear query computation cannot be built from cryptography used only as a black box, random oracles and VBB obfuscation included, when key generation and the database encoding make no queries to the cryptographic oracle ([[no-rom-to-pk-depir-hpy26|No oracle-free-encoding reduction from ROM to public-key DEPIR with a sublinear key]]); public keys of length $\Omega(n)$ are not ruled out, and the bound does not cover [secret-key DEPIR](doubly-efficient-pir#secret-key-depir), whose encoding may depend on client-private state, and it is incomparable with the passive-server SK-DEPIR bound ([[no-owf-to-passive-sk-depir-lmw25|no fully-black-box SK-DEPIR from OWF]]) — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]].
- [[permuted-puzzles-to-depir-bipw17|Permuted puzzles ⇒ SK-DEPIR]]
- Secret-key DEPIR in which the server and the client each do polylogarithmic work per query after preprocessing follows from one-way functions for a bounded number of queries, with server storage linear in the number of queries plus the database size, and for an unbounded number from new assumptions related to the hardness of solving a system of noisy linear equations; a natural and general approach towards public preprocessing is doomed to fail — [[CHR17 - Towards Doubly Efficient Private Information Retrieval|CHR17]]. HPY26 list CHR17 among the secret-key DEPIR schemes — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]].

<!-- BEGIN GENERATED participates-in ab3506034d6a -->

## Participates in

**Builds on Doubly-efficient PIR**

- [[depir-to-cpir|Unkeyed DEPIR ⇒ cPIR]] (via [[doubly-efficient-pir#unkeyed-depir|Unkeyed DEPIR]])
- [[passive-sk-depir-to-sk-depir|Passive-server SK-DEPIR ⇒ SK-DEPIR]] (via [[doubly-efficient-pir#passive-server-sk-depir|Passive-server SK-DEPIR]])
- [[pk-depir-sublinear-key-to-pk-depir|PK-DEPIR with a sublinear key ⇒ PK-DEPIR]] (via [[doubly-efficient-pir#pk-depir-with-a-sublinear-key|PK-DEPIR with a sublinear key]])
- [[pk-depir-to-sk-depir|PK-DEPIR ⇒ SK-DEPIR]] (via [[doubly-efficient-pir#public-key-depir|Public-key DEPIR]])
- [[unkeyed-depir-to-depir|Unkeyed DEPIR ⇒ PK-DEPIR]] (via [[doubly-efficient-pir#unkeyed-depir|Unkeyed DEPIR]])
- [[unkeyed-depir-to-pk-depir-sublinear-key|Unkeyed DEPIR ⇒ PK-DEPIR with a sublinear key]] (via [[doubly-efficient-pir#unkeyed-depir|Unkeyed DEPIR]])

**Produces Doubly-efficient PIR**

- [[lwe-to-depir-lmw23|Ring-LWE ⇒ Unkeyed DEPIR]] (via [[doubly-efficient-pir#unkeyed-depir|Unkeyed DEPIR]])
- [[noise-level-to-depir-cimr25-2|High-noise LPN ⇒ SK-DEPIR]] (via [[doubly-efficient-pir#secret-key-depir|Secret-key DEPIR]])
- [[passive-sk-depir-to-sk-depir|Passive-server SK-DEPIR ⇒ SK-DEPIR]] (via [[doubly-efficient-pir#secret-key-depir|Secret-key DEPIR]])
- [[permuted-puzzles-to-depir-bipw17|Permuted puzzles ⇒ SK-DEPIR]] (via [[doubly-efficient-pir#secret-key-depir|Secret-key DEPIR]])
- [[pk-depir-sublinear-key-to-pk-depir|PK-DEPIR with a sublinear key ⇒ PK-DEPIR]] (via [[doubly-efficient-pir#public-key-depir|Public-key DEPIR]])
- [[pk-depir-to-sk-depir|PK-DEPIR ⇒ SK-DEPIR]] (via [[doubly-efficient-pir#secret-key-depir|Secret-key DEPIR]])
- [[unkeyed-depir-to-depir|Unkeyed DEPIR ⇒ PK-DEPIR]] (via [[doubly-efficient-pir#public-key-depir|Public-key DEPIR]])
- [[unkeyed-depir-to-pk-depir-sublinear-key|Unkeyed DEPIR ⇒ PK-DEPIR with a sublinear key]] (via [[doubly-efficient-pir#pk-depir-with-a-sublinear-key|PK-DEPIR with a sublinear key]])

**Barriers**

- [[no-owf-to-passive-sk-depir-lmw25|No fully-black-box reduction from OWF to passive-server SK-DEPIR]] (via [[doubly-efficient-pir#passive-server-sk-depir|Passive-server SK-DEPIR]])
- [[no-rom-to-pk-depir-hpy26|No oracle-free-encoding reduction from ROM to public-key DEPIR with a sublinear key]] (via [[doubly-efficient-pir#pk-depir-with-a-sublinear-key|PK-DEPIR with a sublinear key]])

<!-- END GENERATED participates-in -->
