---
type: primitive
status: draft
aliases:
  - cPIR
  - Single-Server Private Information Retrieval
  - Single-server Private Information Retrieval
title: Private Information Retrieval
id: cpir
variants:
  secret-key-pir: "#secret-key-pir-sk-pir"
  single-server-symmetric-pir: "#symmetric-private-information-retrieval-single-server"
  nontrivial-cpir: "#non-trivial-pir"
  total-nontrivial-cpir: "#pir-with-total-communication-below-n"
  one-round-sublinear-cpir: "#one-round-sublinear-pir"
  polylog-cpir: "#pir-with-polylogarithmic-communication"
  keyword-pir: "#keyword-pir"
  client-preprocessing-pir: "#pir-with-client-preprocessing"
---

# Private Information Retrieval

(Single-server) PIR is the principal variant of PIR that is studied in the literature, introduced by [[KO97 - Replication is not needed single database, computationally-private information retrieval|KO97]]. It is deployed in a setting where a server holds a database (represented as an array) and a client is interested in learning one of the database items. A PIR protocol allows the client to learn the entry without revealing which entry the client is interested in.

The protocol where the client downloads the entire database is known as the _trivial PIR_.

## Syntax

A PIR scheme is a tuple of efficient algorithms $\PIR = (\Setup, \Query, \Answer, \Decode)$ with respect to database size $n$, modeled as a bit-string $D\in \bits^n$:

- $\Setup(1^\secpar, 1^n) \to \pp,$ is a randomized algorithm that generates public parameters encoding the database size $n,$
- $\Query(\pp, i) \to (q, \st),$ is a randomized algorithm that takes an index $i \in [n]$, outputting a query $q$ to send to the server and a client state $\st,$
- $\Answer(D, q) \to a,$ is a deterministic algorithm that takes a database
  $D \in \bits^n$ and query $q$, outputting an answer $a,$
- $\Decode(\st, a) \to x,$ is a deterministic algorithm that takes client state $\st$ and answer $a$, outputting a value $x \in \bits.$

While PIR is typically represented with data-elements as single bits, most
constructions support words from $\bits^{w}.$ There is also a generic
transformation between the two. In particular, one can treat any $w$-width
word database as a bit-string and just query for the $w$ consecutive bits
the client is interested in.

In general, PIR may be any arbitrary-round
[[interactive-protocol|two-party protocol]]. However, most practical schemes
to-date require only a single round of interaction, so it is more standard
to present the protocol in the 1-round notation with explicit functions.

## Properties

### Correctness

A PIR $\PIR$ is $(1-\varepsilon)$-**correct** if for all
$D \in \bits^n$ and $i \in [n]$,

$$
\Pr\!\left[\Decode(\st, \Answer(D, q)) = D[i]\right] \ge 1 - \varepsilon,
$$

where $\pp \gets \Setup(1^\secpar, 1^n)$ and $(q, \st) \gets \Query(\pp, i)$.

### Query Privacy

The server's view — the query $q$ — should reveal nothing about the queried index $i$. The following game captures this: the adversary picks two indices, a challenge bit selects one, and the adversary sees only the resulting query.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{priv}}_{\PIR,\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Setup(1^\secpar, 1^n)$
\State $(i_0, i_1, \stA) \gets \calA(\pp)$
\State $b \getsr \bits$
\State $(q, \st) \gets \Query(\pp, i_b)$
\State $b' \gets \calA(q, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PIR $\PIR$ has **query privacy** if for all efficient $\calA$,

$$
\Adv^{\mathrm{priv}}_{\PIR,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{priv}}_{\PIR,\calA}(\secpar)=1\right]-1\right|
$$

is negligible. Here $\calA$ is stateful: it runs in two phases, first choosing the challenge indices, then guessing the bit after seeing the query.

# Variations

- [[multi-server-private-information-retrieval|Multi-server PIR]] is an information-theoretic variant, which requires multiple servers
- [[symmetric-private-information-retrieval-single-server-to-cpir|Symmetric private information retrieval (Single-server) ⇒ cPIR]]
- [[single-server-private-information-retrieval#Secret-Key PIR (SK-PIR)|Secret-Key PIR (SK-PIR)]] achieves sublinear online communication using client preprocessing with a secret key
- [[single-server-private-information-retrieval#keyword-pir|Keyword PIR]] retrieves a value by its keyword rather than by its index
- [[single-server-private-information-retrieval#pir-with-client-preprocessing|PIR with client preprocessing]] gives the client a hint before it chooses its indices, for sublinear amortized server computation on an unencoded database
- [[single-server-private-information-retrieval#batch-pir|Batch PIR]] retrieves several entries at once

## Non-trivial PIR

A PIR scheme is **non-trivial** if it is perfectly correct ($\varepsilon = 0$) and, for some polynomial $n = n(\secpar)$, on every $n$-bit database the server sends fewer than $n$ bits in total. The bound is where assumptions start: the trivial PIR, which downloads the database, is perfectly correct and perfectly private with no assumption — [[BIKM99 - One-Way Functions Are Essential for Single-Server Private Information Retrieval|BIKM99]]. With one server, information-theoretic (perfect) privacy requires $n$ bits of communication on $n$-bit databases, so the trivial scheme is optimal — [[CGKS98 - Private information retrieval|CGKS98]].

### PIR with total communication below $n$

A PIR scheme has **total communication below $n$** if it is perfectly correct and, for some polynomial $n = n(\secpar)$, on every $n$-bit database the client and the server together send fewer than $n$ bits, the notion of non-triviality of [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]]. Such a scheme is non-trivial in the sense above.

## One-round sublinear PIR

A PIR scheme is **one-round sublinear** if it is perfectly correct, consists of the query $q$ and the answer $a$ alone, as in the syntax above, and has communication $|q| + |a| \le p(\secpar) \cdot n^c$ for a polynomial $p$ and a constant $c < 1$ — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]].

## PIR with polylogarithmic communication

A PIR scheme has **polylogarithmic communication** if it is $(1 - \negl(\secpar))$-correct, consists of the query $q$ and the answer $a$ alone, as in the syntax above, and has communication $|q| + |a| \le p(\secpar, \log n)$ for a polynomial $p$. The first such scheme rests on the [[rsa-assumption#φ-hiding|Φ-hiding assumption]] — [[CMS99 - Computationally Private Information Retrieval with Polylogarithmic Communication|CMS99]]. On databases of large polynomial size the error is below $1/(8n)$ and the server sends fewer than $n$ bits, so such a scheme implies [[hash-function#preimage-resistance-one-wayness|one-way functions]] — [[BIKM99 - One-Way Functions Are Essential for Single-Server Private Information Retrieval|BIKM99]].

## Symmetric private information retrieval (Single-server)

Symmetric private information retrieval is a stronger version of PIR that in addition to protecting the querier's privacy, also protects the data privacy. The multi-server, information-theoretic version ([[IT-SPIR]]) was introduced by [[GIKM00 - Protecting Data Privacy in Private Information Retrieval Scheme|GIKM00]], but follow-up works showed how to construct computationally secure versions based on assumptions.

Single-server SPIR is equivalent to $1$-out-of-$n$ [[OT]] with an additional efficiency requirement.

## Secret-Key PIR (SK-PIR)

In secret-key PIR, the client holds a short secret key $\sk$ derived from an offline encoding of the database. The server holds an encoded database $D'$; online queries use only $o(N)$ communication, without requiring sublinear server computation (contrast: [[doubly-efficient-pir|SK-DEPIR]], which requires both).

### Syntax

An SK-PIR scheme is a tuple $(\Setup, \Query, \Answer, \Decode)$:

- $\Setup(1^\secpar, D) \to (\sk, D')$: randomized; generates secret key $\sk$ and encoded database $D'$.
- $\Query(\sk, i) \to (q, \st)$: randomized; outputs online query $q$ and client state $\st$.
- $\Answer(D', q) \to a$: deterministic server response.
- $\Decode(\sk, \st, a) \to x$: deterministic; recovers $x \in \bits$.

### Correctness

An SK-PIR scheme is $(1-\varepsilon)$-**correct** if for all $D \in \bits^N$ and $i \in [N]$,

$$
\Pr\!\left[\Decode(\sk, \st, \Answer(D', q)) = D[i]\right] \ge 1 - \varepsilon,
$$

where $(\sk, D') \gets \Setup(1^\secpar, D)$ and $(q, \st) \gets \Query(\sk, i)$. When $\varepsilon = 0$, the scheme is **perfectly correct**.

### Security

The adversary acts as the server: it chooses the database, then sees the encoded database $D'$ and polynomially many online queries under the same $\sk$, each for index $i_b$ of an adaptively chosen pair $(i_0, i_1)$. $\Setup$ runs once, and neither $\sk$ nor $D'$ is updated between queries — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]], [[BM26 - Secret-Key PIR from One-Way Functions|BM26]]. Security requires the queries to reveal nothing about $b$ despite the adversary knowing $D'$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sk\text{-}priv}}_{\PIR,\calA}(\secpar)$}
\begin{algorithmic}
\State $(D, \stA) \gets \calA(1^\secpar)$
\State $(\sk, D') \gets \Setup(1^\secpar, D)$
\State $b \getsr \bits$
\State $b' \gets \calA^{\calO_b}(D', \stA)$
\Comment{$\calA$ sees $D'$ but not $\sk$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_b(i_0, i_1)$}
\begin{algorithmic}
\State $(q, \st) \gets \Query(\sk, i_b)$
\Return $q$
\end{algorithmic}
\end{algorithm}
```

An SK-PIR scheme is **secret-key private** if for all efficient $\calA$,

$$
\Adv^{\mathrm{sk\text{-}priv}}_{\PIR,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sk\text{-}priv}}_{\PIR,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

## Keyword PIR

In **keyword PIR** the server holds $n$ pairs $(w_j, v_j)_{j \in [n]}$ with distinct keywords $w_j \in \bits^\ell$ and values $v_j \in \bits^m$, and a client holding a keyword $w$ runs a protocol $\langle C(1^\secpar, w), S((w_j, v_j)_{j \in [n]}) \rangle$, of any number of rounds, at the end of which it outputs $v_j$ if $w = w_j$ and $\bot$ if $w$ is no keyword, except with negligible probability. The communication is at most $p(\secpar, \ell, m) \cdot n^c$ for a polynomial $p$ and a constant $c < 1$, which rules out sending every pair. The notion is due to [[CGN98 - Private Information Retrieval by Keywords|CGN98]]. Below, $(y, V) \gets \langle C(\cdot), S(\cdot) \rangle$ denotes an execution in which the client outputs $y$ and $V = \View_S$ is the server's view.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{kw\text{-}priv}}_{\PIR,\calA}(\secpar)$}
\begin{algorithmic}
\State $((w_j, v_j)_{j \in [n]}, w^0, w^1, \stA) \gets \calA(1^\secpar)$; $b \getsr \bits$
\State $(y, V) \gets \langle C(1^\secpar, w^b), S((w_j, v_j)_{j \in [n]}) \rangle$
\Comment{$\calA$ sees only the server's view}
\State $b' \gets \calA(V, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A keyword PIR $\PIR$ is **keyword-private** if for all efficient $\calA$,

$$
\Adv^{\mathrm{kw\text{-}priv}}_{\PIR,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{kw\text{-}priv}}_{\PIR,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

## PIR with client preprocessing

A single-server **PIR with client preprocessing** (offline/online PIR) is a protocol between a client $C$ and a server $S$ that stores $D \in \bits^n$ unencoded and nothing else. In an offline phase, run before the client chooses any index, the client obtains a hint $h$, written $(h, V) \gets \langle C(1^\secpar, 1^n), S(D) \rangle$ with $V = \View_S$ the server's view. In the online phase the client retrieves $D[i_1], D[i_2], \ldots$ for adaptively chosen indices, each retrieval an execution $((h', x_j), V) \gets \langle C(h, i_j), S(D) \rangle$ that outputs $x_j$ and may update the hint to $h'$; after every $Q = Q(\secpar, n)$ retrievals the offline phase is rerun. The scheme is **correct** if for every $D$ and every sequence of indices each retrieval outputs $x_j = D[i_j]$ except with negligible probability. It is **sublinear** if there are a polynomial $p$ and a function $f(n) = o(n)$ such that the client's storage, and the server's computation and the communication of one offline phase with its $Q$ retrievals divided by $Q$, are each at most $p(\secpar) \cdot f(n)$. The offline/online model is due to [[CK20 - Private Information Retrieval with Sublinear Online Time|CK20]]; sublinear amortized server time with adaptive queries is due to [[CHK22 - Single-Server Private Information Retrieval with Sublinear Amortized Time|CHK22]]. Every PIR with client preprocessing below is required to be sublinear.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cp\text{-}priv}}_{\PIR,\calA}(\secpar)$}
\begin{algorithmic}
\State $(D, \stA) \gets \calA(1^\secpar)$; $b \getsr \bits$; $j \gets 0$
\State $(h, V) \gets \langle C(1^\secpar, 1^n), S(D) \rangle$
\Comment{Offline phase, independent of the indices}
\State $b' \gets \calA^{\calO_b}(V, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_b(i_0, i_1)$}
\begin{algorithmic}
\State $j \gets j + 1$
\State $((h, x), V) \gets \langle C(h, i_b), S(D) \rangle$
\If{$j \equiv 0 \pmod{Q}$}
\State $(h, V') \gets \langle C(1^\secpar, 1^n), S(D) \rangle$; $V \gets (V, V')$
\EndIf
\Return $V$
\end{algorithmic}
\end{algorithm}
```

A PIR with client preprocessing $\PIR$ is **private** if for all efficient $\calA$,

$$
\Adv^{\mathrm{cp\text{-}priv}}_{\PIR,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cp\text{-}priv}}_{\PIR,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### Constructions and lower bounds

- Constructions exist from one-way functions ([[owf-to-client-preprocessing-pir-zpzs24|OWF ⇒ PIR with client preprocessing (Piano)]]) — [[ZPZS24 - Piano Extremely Simple, Single-Server PIR with Sublinear Server Computation|ZPZS24]] — and, through linearly homomorphic encryption, from [[decisional-diffie-hellman|DDH]] ([[ddh-to-client-preprocessing-pir-chk22|DDH ⇒ PIR with client preprocessing]]) and [[quadratic-residuosity|QR]] ([[qr-to-client-preprocessing-pir-chk22|QR ⇒ PIR with client preprocessing]]), among other assumptions — [[CHK22 - Single-Server Private Information Retrieval with Sublinear Amortized Time|CHK22]].
- Under [[learning-with-errors#decision-lwe|decision LWE]], a hint computed by the server gives single-server PIR whose server performs fewer than one 32-bit multiplication and one 32-bit addition per database byte, about 10 GB/s per core: for a 1 GB database the client downloads a 121 MB hint once and then makes any number of queries of 242 KB each; DoublePIR shrinks the hint to 16 MB at 345 KB per query and 7.4 GB/s per core — [[HHCMV23 - One Server for the Price of Two Simple and Fast Single-Server Private Information Retrieval|HHCMV23]]. In SimplePIR the hint is the database, arranged as a matrix, times the public LWE matrix, so it depends on no client secret; for $N$ entries and LWE secret dimension $\ell$ it has about $\ell\sqrt N$ elements of $\ZZ_q$ and each query and answer about $\sqrt N$, while DoublePIR's hint has about $\ell^2$ elements, independent of $N$. The concrete parameters take $q = 2^{32}$ and a discrete Gaussian error — [[HHCMV23 - One Server for the Price of Two Simple and Fast Single-Server Private Information Retrieval|HHCMV23]]. Online server time stays linear in the database size, so these schemes are not sublinear in the sense above.
- For databases stored unencoded, the offline/online protocols of CK20 are optimal for the trade-off between communication and online running time — [[CK20 - Private Information Retrieval with Sublinear Online Time|CK20]].
- An $r$-bit hint and $t$ entries accessed per retrieval require $t \cdot r = \Omega(n)$, which is tight and closes a logarithmic gap; the bound holds for error at most $1/15$, against efficient adversaries corrupting one of $\ell = O(1)$ servers, when entries are stored unmodified though possibly replicated — [[Yeo23 - Lower Bounds for (Batch) PIR with Private Preprocessing|Yeo23]]. Proving such lower bounds for two-server PIR in general computational models would imply the online matrix-vector conjecture — [[Yeo23 - Lower Bounds for (Batch) PIR with Private Preprocessing|Yeo23]].
- Information-theoretic single-server schemes exist, with non-trivial trade-offs between server computation, client space and bandwidth; they obey a nearly tight lower bound on the trade-off between client space and bandwidth, and a computational scheme beating it that meets a natural syntactic requirement implies a hard problem in $\classSZK$ — [[ISW24 - PIR with Client-Side Preprocessing Information-Theoretic Constructions and Lower Bounds|ISW24]].
- With cryptography used only as a black box, random oracles and VBB obfuscation included, a client storing $s$ bits needs $\Omega(n/s)$ amortized online computation over $k = \Omega(s)$ queries: either $\Omega(n/s)$ amortized online communication or $\Omega(n/s)$ cryptographic operations by the server, and each alternative is tight — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]].

## Batch PIR

A batch code encodes a string into $m$ buckets so that any $k$ of its bits can be decoded by reading at most one bit, or more generally $t$ bits, from each bucket; batch codes amortize the computational cost of retrieving $k$ entries by PIR — [[IKOS04 - Batch codes and their applications|IKOS04]]. With an $r$-bit client hint, batch retrieval of $k$ entries accessing $t$ entries needs $t \cdot r = \Omega(nk)$ when $r \ge k$, and $t = \Omega(n)$ when $r < k$ — [[Yeo23 - Lower Bounds for (Batch) PIR with Private Preprocessing|Yeo23]].

# Other results

- [[cpir-to-ot-dmo00|Non-trivial cPIR ⇒ OT]]
- [[no-np-to-cpir-lv15|No reduction from NP to one-round sublinear cPIR]]
- Every single-server PIR without preprocessing in which the server sends fewer than $n$ bits, built from public-key primitives in DH24's black-box model, performs $\Omega(n)$ public-key operations, however many symmetric-key operations it uses — [[DH24 - Lower-Bounds on Public-Key Operations in PIR|DH24]]
- In every perfectly private, perfectly correct PIR whose servers store only the database, for any number $k$ of servers and whatever its communication, the servers together read at least $n$ database bits per query in expectation — [[BIM00 - Reducing the Servers Computation in Private Information Retrieval PIR with Preprocessing|BIM00]]. The $\Omega(n)$ bound on server time holds for single-server and multi-server schemes with computational privacy too — [[CHK22 - Single-Server Private Information Retrieval with Sublinear Amortized Time|CHK22]]. [[doubly-efficient-pir|Doubly-efficient PIR]] stores an encoding of the database instead, and [PIR with client preprocessing](single-server-private-information-retrieval#pir-with-client-preprocessing) moves the linear server work into an offline phase run before the client chooses its index — [[CK20 - Private Information Retrieval with Sublinear Online Time|CK20]].

## Constructions

- [[tdh-to-cpir-amr25|TDH ⇒ cPIR]]
- [[ddh-to-tdh-dgi-19|DDH ⇒ TDH]]
- [[qr-to-tdh-dgi-19|QR ⇒ TDH]]
- [[lwe-to-tdh-dgi-19|LWE with superpolynomial ratio ⇒ TDH]]
- [[lpn-to-secret-key-pir-sk-pir-cimr25|High-noise LPN ⇒ Secret-Key PIR (SK-PIR)]]
- [[hash-function-to-secret-key-pir-sk-pir-bm26|OWF ⇒ Secret-Key PIR (SK-PIR)]]

<!-- BEGIN GENERATED participates-in 2db101a9abea -->

## Participates in

**Builds on Private Information Retrieval**

- [[cpir-to-crhf-iko05|One-round sublinear cPIR ⇒ CRHF]] (via [[single-server-private-information-retrieval#one-round-sublinear-pir|One-round sublinear PIR]])
- [[cpir-to-ot-dmo00|Non-trivial cPIR ⇒ OT]] (via [PIR with total communication below $n$](single-server-private-information-retrieval#pir-with-total-communication-below-n))
- [[cpir-to-owf-bikm99|Non-trivial cPIR ⇒ OWF]] (via [[single-server-private-information-retrieval#non-trivial-pir|Non-trivial PIR]])
- [[one-round-sublinear-cpir-to-keyword-pir-cgn98|One-round sublinear cPIR ⇒ Keyword PIR]] (via [[single-server-private-information-retrieval#one-round-sublinear-pir|One-round sublinear PIR]])
- [[one-round-sublinear-cpir-to-total-nontrivial-cpir|One-round sublinear cPIR ⇒ cPIR with total communication below n]] (via [[single-server-private-information-retrieval#one-round-sublinear-pir|One-round sublinear PIR]])
- [[polylog-cpir-to-cpir|PIR with polylogarithmic communication ⇒ cPIR]] (via [[single-server-private-information-retrieval#pir-with-polylogarithmic-communication|PIR with polylogarithmic communication]])
- [[symmetric-private-information-retrieval-single-server-to-cpir|Symmetric private information retrieval (Single-server) ⇒ cPIR]] (via [[single-server-private-information-retrieval#symmetric-private-information-retrieval-single-server|Symmetric private information retrieval (Single-server)]])
- [[symmetric-private-information-retrieval-single-server-to-ot|Symmetric private information retrieval (Single-server) ⇒ OT]] (via [[single-server-private-information-retrieval#symmetric-private-information-retrieval-single-server|Symmetric private information retrieval (Single-server)]])
- [[total-nontrivial-cpir-to-nontrivial-cpir|cPIR with total communication below n ⇒ Non-trivial cPIR]] (via [PIR with total communication below $n$](single-server-private-information-retrieval#pir-with-total-communication-below-n))

**Produces Private Information Retrieval**

- [[additively-homomorphic-encryption-to-cpir-ste98|Additively homomorphic encryption ⇒ cPIR]] (via [[single-server-private-information-retrieval#one-round-sublinear-pir|One-round sublinear PIR]])
- [[dcr-to-cpir-cha04|DCR ⇒ One-round sublinear cPIR]] (via [[single-server-private-information-retrieval#one-round-sublinear-pir|One-round sublinear PIR]])
- [[ddh-to-client-preprocessing-pir-chk22|DDH ⇒ PIR with client preprocessing (CHK22)]] (via [[single-server-private-information-retrieval#pir-with-client-preprocessing|PIR with client preprocessing]])
- [[depir-to-cpir|Unkeyed DEPIR ⇒ cPIR]]
- [[hash-function-to-secret-key-pir-sk-pir-bm26|OWF ⇒ Secret-Key PIR (SK-PIR)]] (via [[single-server-private-information-retrieval#secret-key-pir-sk-pir|Secret-Key PIR (SK-PIR)]])
- [[he-to-cpir|FHE ⇒ cPIR]] (via [[single-server-private-information-retrieval#pir-with-polylogarithmic-communication|PIR with polylogarithmic communication]])
- [[hiding-to-cpir|Φ-Hiding ⇒ cPIR]] (via [[single-server-private-information-retrieval#pir-with-polylogarithmic-communication|PIR with polylogarithmic communication]])
- [[length-flexible-additively-homomorphic-encryption-to-polylog-cpir-lip05|Length-flexible additively homomorphic encryption ⇒ PIR with polylogarithmic communication (Lipmaa)]] (via [[single-server-private-information-retrieval#pir-with-polylogarithmic-communication|PIR with polylogarithmic communication]])
- [[lpn-to-secret-key-pir-sk-pir-cimr25|High-noise LPN ⇒ Secret-Key PIR (SK-PIR)]] (via [[single-server-private-information-retrieval#secret-key-pir-sk-pir|Secret-Key PIR (SK-PIR)]])
- [[lsn-to-secret-key-pir-sk-pir-cimr25|LSN ⇒ Secret-Key PIR (SK-PIR)]] (via [[single-server-private-information-retrieval#secret-key-pir-sk-pir|Secret-Key PIR (SK-PIR)]])
- [[one-round-sublinear-cpir-to-keyword-pir-cgn98|One-round sublinear cPIR ⇒ Keyword PIR]] (via [[single-server-private-information-retrieval#keyword-pir|Keyword PIR]])
- [[one-round-sublinear-cpir-to-total-nontrivial-cpir|One-round sublinear cPIR ⇒ cPIR with total communication below n]] (via [PIR with total communication below $n$](single-server-private-information-retrieval#pir-with-total-communication-below-n))
- [[owf-to-client-preprocessing-pir-zpzs24|OWF ⇒ PIR with client preprocessing (Piano)]] (via [[single-server-private-information-retrieval#pir-with-client-preprocessing|PIR with client preprocessing]])
- [[polylog-cpir-to-cpir|PIR with polylogarithmic communication ⇒ cPIR]]
- [[qr-to-client-preprocessing-pir-chk22|QR ⇒ PIR with client preprocessing (CHK22)]] (via [[single-server-private-information-retrieval#pir-with-client-preprocessing|PIR with client preprocessing]])
- [[qr-to-cpir-ko97|QR ⇒ cPIR (Kushilevitz–Ostrovsky)]] (via [[single-server-private-information-retrieval#one-round-sublinear-pir|One-round sublinear PIR]])
- [[symmetric-private-information-retrieval-single-server-to-cpir|Symmetric private information retrieval (Single-server) ⇒ cPIR]]
- [[tdh-to-cpir-amr25|TDH ⇒ cPIR]]
- [[tdp-to-cpir-ko00|TDP ⇒ cPIR with total communication below n (Kushilevitz–Ostrovsky)]] (via [PIR with total communication below $n$](single-server-private-information-retrieval#pir-with-total-communication-below-n))
- [[total-nontrivial-cpir-to-nontrivial-cpir|cPIR with total communication below n ⇒ Non-trivial cPIR]] (via [[single-server-private-information-retrieval#non-trivial-pir|Non-trivial PIR]])

**Barriers**

- [[no-np-to-cpir-lv15|No fully-black-box reduction from NP to one-round sublinear cPIR]] (via [[single-server-private-information-retrieval#one-round-sublinear-pir|One-round sublinear PIR]])
- [[no-tdp-to-one-round-sublinear-cpir-hhs08|No polynomially-preserving black-box reduction from TDP to one-round sublinear cPIR]] (via [[single-server-private-information-retrieval#one-round-sublinear-pir|One-round sublinear PIR]])

<!-- END GENERATED participates-in -->
