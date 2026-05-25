---
aliases:
  - PIR
  - cPIR
  - Single-Server Private Information Retrieval
  - Single-server Private Information Retrieval
title: Private Information Retrieval
---

# Private Information Retrieval

(Single-server) PIR is the principle variant of PIR that is studied in the literature, introduced by [[KO97 - Replication is not needed single database, computationally-private information retrieval|KO97]]. It is deployed in a setting where a server holds a database (represented as an array) and a client is interested in learning one of the database items. A PIR protocol allows the client to learn the entry without revealing which entry the client is interested in.

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
transformation between the two. In particular, on can treat any $w$-width
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

- [[multi-server-private-information-retrieval|Multi-server PIR]] is an information theoretic variant, which requires multiple servers
- [[single-server-private-information-retrieval#Symmetric private information retrieval (Single-server)|Single-server Symmetric PIR (SPIR)]] additionally protects the server's data privacy
- [[single-server-private-information-retrieval#Secret-Key PIR (SK-PIR)|Secret-Key PIR (SK-PIR)]] achieves sublinear online communication using client preprocessing with a secret key
- Keyword PIR

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

The adversary acts as the server: it chooses the database and two challenge indices, then sees the encoded database $D'$ and a single online query. Security requires the query to reveal nothing about the index despite the adversary knowing $D'$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sk\text{-}priv}}_{\PIR,\calA}(\secpar)$}
\begin{algorithmic}
\State $(D, i_0, i_1, \stA) \gets \calA(1^\secpar)$
\State $(\sk, D') \gets \Setup(1^\secpar, D)$
\State $b \getsr \bits$
\State $(q, \st) \gets \Query(\sk, i_b)$
\State $b' \gets \calA(D', q, \stA)$
\Comment{$\calA$ sees $D'$ but not $\sk$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An SK-PIR scheme is **secret-key private** if for all efficient $\calA$,

$$
\Adv^{\mathrm{sk\text{-}priv}}_{\PIR,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sk\text{-}priv}}_{\PIR,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Other results

- Non-trivial PIR implies [[oblivious-transfer|OT]] — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]]
- Single-round PIR cannot be based on NP-hardness unless [[polynomial-time-hierarchy|PH]] collapses to the second level — [[LV15 - On Basing Private Information Retrieval on NP-Hardness|LV15]]

## Constructions

- PIR with $\polylog(n)$ bandwidth can be built from [[decisional-diffie-hellman|DDH]], QR, or [[learning-with-errors|LWE]] — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]
  - This result goes through the use of [[trapdoor-hash-function|TDH]], which can be used to build PIR generically
- Any PIR requires $\Omega(n)$ public-key operations — [[DH24 - Lower-Bounds on Public-Key Operations in PIR|DH24]]
- SK-PIR with $O(N^\varepsilon)$ online communication for any constant $\varepsilon > 0$ follows from the hardness of decoding random linear codes (LPN in a high-noise regime not known to imply public-key encryption) — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]]
- SK-PIR with online communication $\tilde{O}(\sqrt{N} \cdot \secpar)$ (server time $O(N \cdot \poly(\secpar))$ per query) follows from one-way functions alone, matching the minimal known lower bound — [[BM26 - Secret-Key PIR from One-Way Functions|BM26]]
