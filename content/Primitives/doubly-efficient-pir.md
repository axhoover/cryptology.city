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
  passive-sk-depir-independent-key: "#passive-server-sk-depir-with-a-database-independent-key"
---

# Doubly-efficient PIR

A doubly-efficient PIR (DEPIR) is a [[single-server-private-information-retrieval|single-server PIR]] whose database is _preprocessed_ once into an encoding $EDB$, after which the communication and the computation of each query are at most $p(\secpar) + s(n)$ for a polynomial $p$ and a function $s(n) = o(n)$, where $n$ is the size of the database. The three main variants are secret-key, public-key and unkeyed; every unkeyed DEPIR is a PK-DEPIR, and every PK-DEPIR is an SK-DEPIR. Secret-key DEPIR was introduced by [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]] and [[CHR17 - Towards Doubly Efficient Private Information Retrieval|CHR17]], and public-key DEPIR by [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]].

## Syntax

A (one-round) _doubly-efficient private information retrieval_ (DEPIR) scheme is a tuple of efficient algorithms $(\Setup, \mathsf{Qry}, \mathsf{Rsp}, \mathsf{Fin})$ with respect to a key space $\calK$ such that

- $\Setup(1^\secpar,DB) \to (EDB,k)$, is a randomized algorithm that takes a security parameter and database $DB \in \bits^n$, and outputs an encoded database $EDB \in \bits^*$ and a key $k\in \calK$. In the keyed variants it first samples $(k, k') \gets \KeyGen(1^\secpar, 1^n)$, without access to $DB$, and then computes $EDB \gets \mathsf{Prep}(1^\secpar, k', DB)$, for efficient algorithms $\KeyGen$ and $\mathsf{Prep}$, where $k$ is the client's key and $k'$ an encoding key used only by $\mathsf{Prep}$; in unkeyed DEPIR it is deterministic and outputs $k = \bot$,
- $\mathsf{Qry}(k,i) \to (q,h)$, is a randomized algorithm that takes (optionally) a key $k\in \calK$ and index $i \in [n]$, and outputs $q \in \bits^*$ and a hint $h \in \bits^*$,
- $\mathsf{Rsp}(q,EDB) \to r$, is a randomized algorithm that takes a query $q\in \bits^*$ and database $EDB \in \bits^*$, and outputs a response $r \in \bits^*$,
- $\mathsf{Fin}(h,r) \to a$, is a randomized algorithm that takes a hint $h \in \bits^*$ and response $r \in \bits^*$, and outputs an answer $a \in \bits$.

Key generation without access to the database, followed by its encoding, is the syntax of [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]] (Definitions 3.1 and 3.5), [[CHR17 - Towards Doubly Efficient Private Information Retrieval|CHR17]] (Definitions 2 and 3), [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]] (Definition 2.1) and [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]] (Definition 4.3), whose key generation takes $1^\secpar$ and, in CHR17 and CIMR25, the database size; [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]] also take the public key to be generated independently of the database. A key computed from $DB$ makes every keyed variant trivial: $\Setup$ outputs $k = DB$ and an empty $EDB$, $\mathsf{Qry}(k, i)$ outputs the empty query and the hint $h = k[i]$, and $\mathsf{Fin}$ returns $h$ — folklore.

## Properties

### Correctness

A DEPIR scheme is _correct_ if for every $\secpar \in \NN$, database $DB \in \bits^n$, and index $i \in [n]$, $$\Pr\bigg[\mathsf{Fin}(h,r) = DB[i] ~\Bigg|~ \substack{
(EDB,k) \gets \Setup(1^\secpar,DB)\\
(q,h) \gets \mathsf{Qry}(k,i)\\
r \gets \mathsf{Rsp}(q,EDB)\\
}\bigg] =1.$$

### Efficiency

A DEPIR scheme is **doubly efficient** if $\Setup$ runs in time polynomial in $\secpar$ and $n$, and there are a polynomial $p$ and a function $s$ with $s(n) = o(n)$ such that for every $\secpar$, $n$, $DB \in \bits^n$ and $i \in [n]$, the query-time communication $|q| + |r|$ and the running times of $\mathsf{Qry}$, of $\mathsf{Rsp}$ with random access to $EDB$, and of $\mathsf{Fin}$ are each at most $p(\secpar) + s(n)$. Every single-server variant below is doubly efficient. The bound has the form of the locality bound $o(N) + \poly(\secpar)$ of [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]] (Theorem 5.1) and of the bounds of [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]], such as the server probe complexity $N \cdot \ell / \log N + \poly(\secpar)$ of Theorem 6.1, which has this form for $\ell = o(\log N)$.

Because $s$ does not depend on $\secpar$, the bound forces query-time cost below $n$ at a database size polynomial in $\secpar$: if $s(n) \le n/2$ for all $n \ge n_0$, then $p(\secpar) + s(n) < n$ for all $n > \max(n_0, 2p(\secpar))$. A bound of $o(n)$ for each fixed $\secpar$, or of $p(\secpar) \cdot n / \log^j n$ for a constant $j$, is met with no assumption by sending all of $DB$ when $n \le 2^\secpar$ and $i$ in the clear otherwise, since $\log n \le \secpar$ in the first case and no efficient adversary outputs a larger database — folklore. A bound of $p(\secpar) \cdot n^c$ for a constant $c < 1$ implies the one above, since $p(\secpar) \cdot n^c \le p(\secpar)^{2/(1-c)} + n^{(1+c)/2}$ (by cases on whether $n \ge p(\secpar)^{2/(1-c)}$).

### Unkeyed DEPIR

In unkeyed DEPIR, $\Setup$ is deterministic and outputs $k = \bot$, so the server can run it on its own; privacy is the public-key privacy below with $k = \bot$ — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]] (Definition 4.1).

### Public-key DEPIR

The _privacy advantage_ of an adversary $\calA$ that outputs database $DB$ and indices $i_0$ and $i_1$ is defined as $$\Adv^{\mathrm{priv}}_{\calA}(\secpar) := 2\left|\Pr[\calA(1^\secpar,k,EDB,q) = b] - \frac{1}{2}\right|,$$ where $(EDB,k) \gets \Setup(1^\secpar,DB)$, $b \getsr \bits$, and $(q,h) \gets \mathsf{Qry}(k,i_b)$; $\calA$ is not given the encoding key $k'$. A PK-DEPIR scheme is **private** if for all efficient $\calA$, $\Adv^{\mathrm{priv}}_{\calA}(\secpar)$ is negligible. Because $\mathsf{Qry}$ uses only the public $k$, single-query privacy implies privacy for polynomially many queries by a hybrid argument — folklore.

#### PK-DEPIR with a sublinear key

A PK-DEPIR scheme has a **sublinear key** if, on $n$-bit databases, the key $k$ that $\Setup$ outputs and the query-time communication and computation are each at most $p(\secpar) \cdot n^c$ for a polynomial $p$ and a constant $c < 1$, so below $n$ once $n > p(\secpar)^{1/(1-c)}$. HPY26's lower bound for public-key DEPIR is for public keys of length $o(n)$, a condition they call very mild because the key is generated independently of the database, and does not rule out public keys of length $\Omega(n)$ — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]] (§4.5).

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

An SK-DEPIR scheme in the syntax above, one query and one response (two rounds in the count of LMW25), has a **passive server** if every query $q$ is a list of positions in $EDB$ and $\mathsf{Rsp}(q, EDB)$ returns the entries of $EDB$ at those positions — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]]. As in LMW25's syntax (Definition 2.1), its key is sampled before $\mathsf{Prep}$ encodes the database, and the client holds only $(n, k, i)$ — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]]. BIPW17's [[oblivious-locally-decodable-code|oblivious locally decodable codes]] are passive-server schemes whose privacy holds against an observer of the positions read, who sees neither the key nor the encoding — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]] (Definition 3.1); LMW25 describe two-round passive-server SK-DEPIR as the notion BIPW17 call OLDCs — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]].

##### Passive-server SK-DEPIR with a database-independent key

A passive-server SK-DEPIR scheme has a **database-independent key** in the narrower sense recorded here if $\Setup(1^\secpar, DB)$ first samples $k \gets \KeyGen(1^\secpar)$, without access to $DB$ or $n$, and then computes $EDB \gets \mathsf{Prep}(1^\secpar, k, DB)$, for efficient algorithms $\KeyGen$ and $\mathsf{Prep}$, so that the client holds only $(n, k, i)$, and if its query-time communication and computation are at most $p(\secpar) \cdot n^c$ for a polynomial $p$ and a constant $c < 1$. This is LMW25's syntax with $\KeyGen$ given only $1^\secpar$ (Definition 2.1), where $N = \poly(\secpar)$ — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]]; every passive-server SK-DEPIR already generates its key without access to $DB$ (see Syntax).

# Variations

## Multi-server DEPIR

In $k$-server PIR with preprocessing, each of $k$ non-colluding servers stores, besides $D$, polynomially many bits precomputed from it. When the servers hold only the database and the client keeps no state between queries, the servers of a perfectly private, perfectly correct scheme together read at least $n$ database bits per query in expectation, for every $k$ and whatever the communication; with preprocessing there are, for every constant $k \ge 2$, information-theoretic $k$-server schemes with $O(n^{1/(2k-1)})$ communication and $O(n/\log^{2k-2} n)$ server work, and, for every constant $\varepsilon > 0$, schemes with $O(n^{1/k+\varepsilon})$ communication and server work — [[BIM00 - Reducing the Servers Computation in Private Information Retrieval PIR with Preprocessing|BIM00]]. See [[multi-server-private-information-retrieval#doubly-efficient-multi-server-pir|doubly-efficient multi-server PIR]].

# Other results

- [[lwe-to-depir-lmw23|Ring-LWE with quasi-polynomial factors ⇒ Unkeyed DEPIR]] — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]]
- [[noise-level-to-depir-cimr25-2|LSN ⇒ SK-DEPIR]]: secret-key DEPIR whose server reads $N \cdot \log \log N / \log^t N + \poly(\secpar)$ bits of the encoding per query, for any constant $t \ge 2$, under CIMR25's LSN conjecture; from LPN with noise rate $k^{-\gamma}$, CIMR25 obtain secret-key PIR with communication $O(N^{\varepsilon})$ but no sublinear server work — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]] ([[lpn-to-secret-key-pir-sk-pir-cimr25|High-noise LPN ⇒ Secret-Key PIR (SK-PIR)]]).
- Many cryptographic primitives cannot be used to construct SK-DEPIR in a black-box way, unless [[hash-function|OWF]] can be used to construct SK-DEPIR in a black-box way, and black-box one-way functions give no [[doubly-efficient-pir#passive-server-sk-depir|passive-server SK-DEPIR]] ([[no-owf-to-passive-sk-depir-lmw25|No fully-black-box reduction from OWF to passive-server SK-DEPIR]]) — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]]
- For single-server computationally private PIR with public preprocessing, whose $r$-bit hint is available to everyone including the adversary, and expected query time $t$, $t \cdot r = \Omega(n \log n)$ when $r = \Omega(\log n)$ and $t = \Omega(n)$ when $r = O(\log n)$, even with error $1/n^2$ and distinguishing advantage $1/n$ — [[PY22 - Limits of Preprocessing for Single-Server PIR|PY22]]. [Public-key DEPIR with a sublinear key](doubly-efficient-pir#pk-depir-with-a-sublinear-key), whose key and query-time cost are at most $p(\secpar) \cdot n^c$ ($c < 1$), and hence [unkeyed DEPIR](doubly-efficient-pir#unkeyed-depir) with such query-time cost, cannot be built from cryptography used only as a black box, random oracles and VBB obfuscation included, when key generation and the database encoding make no queries to the cryptographic oracle ([[no-rom-to-pk-depir-hpy26|No oracle-free-encoding reduction from ROM to public-key DEPIR with a sublinear key]]); HPY26 state it for public keys of length $o(n)$ and sublinear query computation; the bound does not cover [secret-key DEPIR](doubly-efficient-pir#secret-key-depir), whose encoding may depend on client-private state, and it is incomparable with the passive-server SK-DEPIR bound ([[no-owf-to-passive-sk-depir-lmw25|no fully-black-box passive-server SK-DEPIR from OWF]]) — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]].
- [[permuted-puzzles-to-depir-bipw17|Permuted puzzles ⇒ OLDC]], and [[oblivious-locally-decodable-code-to-passive-sk-depir|OLDC ⇒ Passive-server SK-DEPIR]]: BIPW17's oblivious locally decodable code from secretly permuted Reed–Muller codes has communication complexity $\secpar^m \cdot \tilde O(n^{1/m})$ for a constant $m \ge 2$ — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]] (Proposition 4.3).
- Secret-key DEPIR in which the server and the client each do polylogarithmic work per query after preprocessing follows from one-way functions for a bounded number of queries, and for an unbounded number from new assumptions related to the hardness of solving a system of noisy linear equations; a natural and general approach towards public preprocessing is doomed to fail — [[CHR17 - Towards Doubly Efficient Private Information Retrieval|CHR17]]. For a bound $B$ on the number of queries, the first scheme is statistically $2^{-\secpar}$-secure with truly random permutations in its key (Theorem 1), and pseudorandom functions and permutations compress that key to $\secpar$ bits; its preprocessed database has size $\tilde O(B + \poly(N))$, and the per-query client and server work are $\secpar \cdot \polylog(N, B)$ and $\polylog(N, B)$. The second rests on the new hidden permutation with noise (HPN) assumption — [[CHR17 - Towards Doubly Efficient Private Information Retrieval|CHR17]]. A $B$-query statistically secure designated-client scheme with answers of length $o(N)$, correctness error $o(1)$ and security error $o(1)$ needs a key of $\Omega(B)$ bits — [[CHR17 - Towards Doubly Efficient Private Information Retrieval|CHR17]] (Theorem 3). HPY26 list CHR17 among the secret-key DEPIR schemes — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]].

<!-- BEGIN GENERATED participates-in efc837789f44 -->

## Participates in

**Builds on Doubly-efficient PIR**

- [[depir-to-cpir|Unkeyed DEPIR ⇒ cPIR]] (via [[doubly-efficient-pir#unkeyed-depir|Unkeyed DEPIR]])
- [[passive-sk-depir-independent-key-to-passive-sk-depir|Passive-server SK-DEPIR with a database-independent key ⇒ Passive-server SK-DEPIR]] (via [[doubly-efficient-pir#passive-server-sk-depir-with-a-database-independent-key|Passive-server SK-DEPIR with a database-independent key]])
- [[passive-sk-depir-to-sk-depir|Passive-server SK-DEPIR ⇒ SK-DEPIR]] (via [[doubly-efficient-pir#passive-server-sk-depir|Passive-server SK-DEPIR]])
- [[pk-depir-sublinear-key-to-pk-depir|PK-DEPIR with a sublinear key ⇒ PK-DEPIR]] (via [[doubly-efficient-pir#pk-depir-with-a-sublinear-key|PK-DEPIR with a sublinear key]])
- [[pk-depir-to-sk-depir|PK-DEPIR ⇒ SK-DEPIR]] (via [[doubly-efficient-pir#public-key-depir|Public-key DEPIR]])
- [[unkeyed-depir-to-depir|Unkeyed DEPIR ⇒ PK-DEPIR]] (via [[doubly-efficient-pir#unkeyed-depir|Unkeyed DEPIR]])

**Produces Doubly-efficient PIR**

- [[noise-level-to-depir-cimr25-2|LSN ⇒ SK-DEPIR]] (via [[doubly-efficient-pir#secret-key-depir|Secret-key DEPIR]])
- [[lwe-to-depir-lmw23|Ring-LWE with quasi-polynomial factors ⇒ Unkeyed DEPIR]] (via [[doubly-efficient-pir#unkeyed-depir|Unkeyed DEPIR]])
- [[oblivious-locally-decodable-code-to-passive-sk-depir|OLDC ⇒ Passive-server SK-DEPIR]] (via [[doubly-efficient-pir#passive-server-sk-depir|Passive-server SK-DEPIR]])
- [[passive-sk-depir-independent-key-to-passive-sk-depir|Passive-server SK-DEPIR with a database-independent key ⇒ Passive-server SK-DEPIR]] (via [[doubly-efficient-pir#passive-server-sk-depir|Passive-server SK-DEPIR]])
- [[passive-sk-depir-to-sk-depir|Passive-server SK-DEPIR ⇒ SK-DEPIR]] (via [[doubly-efficient-pir#secret-key-depir|Secret-key DEPIR]])
- [[pk-depir-sublinear-key-to-pk-depir|PK-DEPIR with a sublinear key ⇒ PK-DEPIR]] (via [[doubly-efficient-pir#public-key-depir|Public-key DEPIR]])
- [[pk-depir-to-sk-depir|PK-DEPIR ⇒ SK-DEPIR]] (via [[doubly-efficient-pir#secret-key-depir|Secret-key DEPIR]])
- [[unkeyed-depir-to-depir|Unkeyed DEPIR ⇒ PK-DEPIR]] (via [[doubly-efficient-pir#public-key-depir|Public-key DEPIR]])

**Barriers**

- [[no-owf-to-passive-sk-depir-lmw25|No fully-black-box reduction from OWF to passive-server SK-DEPIR]] (via [[doubly-efficient-pir#passive-server-sk-depir|Passive-server SK-DEPIR]])
- [[no-rom-to-pk-depir-hpy26|No oracle-free-encoding reduction from ROM to public-key DEPIR with a sublinear key]] (via [[doubly-efficient-pir#pk-depir-with-a-sublinear-key|PK-DEPIR with a sublinear key]])

<!-- END GENERATED participates-in -->
