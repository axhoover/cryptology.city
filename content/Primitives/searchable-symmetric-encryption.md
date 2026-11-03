---
type: primitive
status: draft
aliases:
  - SSE
  - Searchable symmetric encryption
title: Searchable symmetric encryption
id: sse
variants:
  non-adaptive-sse: "#non-adaptive-security"
  dynamic-sse: "#dynamic-sse"
---

# Searchable symmetric encryption

A searchable symmetric encryption (SSE) scheme encrypts a document collection under a client's secret key into an encrypted index and encrypted documents, and lets the client hand a server a token for a keyword $w$ with which the server finds the identifiers of the documents containing $w$. The server learns nothing beyond a specified leakage of the collection and the queries: a simulator given only that leakage produces its view — [[CGKO06 - Searchable Symmetric Encryption Improved Definitions and Efficient Constructions|CGKO06]].

## Syntax

Fix a keyword dictionary $\Delta$. A document collection is $\mathbf{D} = (D_1, \ldots, D_n)$, where each document $D_j$ has an identifier $\mathrm{id}(D_j)$ and a set of keywords from $\Delta$; for $w \in \Delta$, $\mathbf{D}(w)$ is the set of identifiers of the documents containing $w$. An index-based SSE scheme is a tuple of efficient algorithms $\Pi = (\Gen, \Enc, \mathsf{Trpdr}, \mathsf{Search}, \Dec)$ — [[CGKO06 - Searchable Symmetric Encryption Improved Definitions and Efficient Constructions|CGKO06]]:

- $\Gen(1^\secpar) \to K$, a randomized algorithm outputting a secret key $K$.
- $\Enc(K, \mathbf{D}) \to (I, \mathbf{c})$, a randomized algorithm outputting an encrypted index $I$ and encrypted documents $\mathbf{c} = (c_1, \ldots, c_n)$.
- $\mathsf{Trpdr}(K, w) \to t_w$, an algorithm outputting a token, or trapdoor, for $w \in \Delta$.
- $\mathsf{Search}(I, t_w) \to X$, a deterministic algorithm, run by the server, outputting a set $X$ of identifiers.
- $\Dec(K, c_j) \to D_j$, a deterministic algorithm recovering a document.

The client keeps $K$ and sends $(I, \mathbf{c})$ to the server. To search for $w$ it sends $t_w$, and the server returns the ciphertexts of the documents whose identifiers $\mathsf{Search}(I, t_w)$ outputs.

## Properties

### Correctness

An SSE scheme $\Pi$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, all collections $\mathbf{D}$ and all $w \in \Delta$,

$$
\Pr\!\left[\mathsf{Search}(I, \mathsf{Trpdr}(K, w)) = \mathbf{D}(w) \;\wedge\; \forall j \in [n] : \Dec(K, c_j) = D_j\right] \ge 1 - \varepsilon,
$$

over $K \gets \Gen(1^\secpar)$, $(I, \mathbf{c}) \gets \Enc(K, \mathbf{D})$ and the randomness of $\mathsf{Trpdr}$. When $\varepsilon = 0$, we say $\Pi$ is **perfectly correct**.

### Leakage

Security is stated relative to a leakage function $\calL = (\calL_1, \calL_2)$: $\calL_1(\mathbf{D})$ is what the encrypted index and documents may reveal, and $\calL_2(\mathbf{D}, w_1, \ldots, w_i)$ is what the $i$-th token may reveal given the earlier ones — [[CK10 - Structured Encryption and Controlled Disclosure|CK10]]. For queries $w_1, \ldots, w_i$, the **access pattern** is $(\mathbf{D}(w_1), \ldots, \mathbf{D}(w_i))$, and the **search pattern** is the $i \times i$ binary matrix whose $(j, k)$ entry is $1$ if and only if $w_j = w_k$. The trace of [[CGKO06 - Searchable Symmetric Encryption Improved Definitions and Efficient Constructions|CGKO06]] is the leakage with $\calL_1(\mathbf{D}) = (|D_1|, \ldots, |D_n|)$ and $\calL_2(\mathbf{D}, w_1, \ldots, w_i)$ the access and search patterns of $w_1, \ldots, w_i$.

### Adaptive security

The adversary chooses the collection, receives either the real encrypted index and documents or simulated ones, and then queries tokens adaptively: each keyword may depend on the index and on the earlier tokens. In world $0$ the tokens are real; in world $1$ a stateful simulator computes each one from the leakage of the queries so far.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sse}}_{\Pi,\calA,\Sim,\calL}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$
\State $(\mathbf{D}, \stA) \gets \calA(1^\secpar)$
\State $K \gets \Gen(1^\secpar)$; $(I_0, \mathbf{c}_0) \gets \Enc(K, \mathbf{D})$
\State $(I_1, \mathbf{c}_1, \stS) \gets \Sim(1^\secpar, \calL_1(\mathbf{D}))$
\State $\calO_0(w) := \mathsf{Trpdr}(K, w)$
\State $\calO_1(w) := \Sim(\stS, \calL_2(\mathbf{D}, w_1, \ldots, w_i))$
\Comment{$w_1, \ldots, w_i$ are the queries so far, $w_i = w$; $\Sim$ updates $\stS$}
\State $b' \gets \calA^{\calO_b}(\stA, I_b, \mathbf{c}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An SSE scheme $\Pi$ is $\calL$-**adaptively secure** if for all efficient $\calA$ there is an efficient $\Sim$ such that

$$
\Adv^{\mathrm{sse}}_{\Pi,\calA,\Sim,\calL}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sse}}_{\Pi,\calA,\Sim,\calL}(\secpar) = 1\right] - 1\right|
$$

is negligible. [[CGKO06 - Searchable Symmetric Encryption Improved Definitions and Efficient Constructions|CGKO06]] introduce adaptive security with the simulator given their trace; [[CK10 - Structured Encryption and Controlled Disclosure|CK10]] state it for an arbitrary leakage function.

### Non-adaptive security

The adversary fixes the collection and all its keywords before seeing any part of the encryption, and receives either the real index, documents and tokens or a simulation from their leakage — [[CGKO06 - Searchable Symmetric Encryption Improved Definitions and Efficient Constructions|CGKO06]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sse\text{-}na}}_{\Pi,\calA,\Sim,\calL}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$
\State $(\mathbf{D}, w_1, \ldots, w_q, \stA) \gets \calA(1^\secpar)$
\State $K \gets \Gen(1^\secpar)$; $(I, \mathbf{c}) \gets \Enc(K, \mathbf{D})$
\State $t_j \gets \mathsf{Trpdr}(K, w_j)$ for $j \in [q]$
\State $v_0 := (I, \mathbf{c}, t_1, \ldots, t_q)$
\State $v_1 \gets \Sim(1^\secpar, \calL_1(\mathbf{D}), \calL_2(\mathbf{D}, w_1, \ldots, w_q))$
\State $b' \gets \calA(\stA, v_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An SSE scheme $\Pi$ is $\calL$-**non-adaptively secure** if for all efficient $\calA$ there is an efficient $\Sim$ such that

$$
\Adv^{\mathrm{sse\text{-}na}}_{\Pi,\calA,\Sim,\calL}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sse\text{-}na}}_{\Pi,\calA,\Sim,\calL}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Variations

## Dynamic SSE

A dynamic SSE scheme adds an update protocol with which the client adds documents to, and deletes documents from, the encrypted collection by sending update tokens; security adds a leakage function for updates, and the adversary interleaves searches and updates — [[KPR12 - Dynamic Searchable Symmetric Encryption|KPR12]]. KPR12 construct an adaptively secure dynamic scheme whose search time is linear in $|\mathbf{D}(w)|$ — [[KPR12 - Dynamic Searchable Symmetric Encryption|KPR12]].

## Structured encryption

Structured encryption encrypts data organized in an arbitrary data structure, such as a matrix or a labeled graph, so that a server holding a token answers one type of query on it, with security relative to a leakage function as above; SSE is the case of a keyword index — [[CK10 - Structured Encryption and Controlled Disclosure|CK10]].

# Other results

- The first SSE scheme encrypts every word of a document separately; the server tests each encrypted word against the token, so a search takes time linear in the total length of the collection — [[SWP00 - Practical Techniques for Searches on Encrypted Data|SWP00]].
- SSE-1 is non-adaptively secure for the CGKO06 trace and searches in time linear in $|\mathbf{D}(w)|$; SSE-2 is adaptively secure for the CGKO06 trace; both use only symmetric-key primitives — [[CGKO06 - Searchable Symmetric Encryption Improved Definitions and Efficient Constructions|CGKO06]].
- An adversary that knows the indexed documents recovers queried keywords from the access pattern with the count attack, which matches the number of results of each query, and the number of documents two queries share, against counts computed from the documents — [[CGPR15 - Leakage-Abuse Attacks Against Searchable Encryption|CGPR15]].
- An adversary that adds documents of its choice to the collection learns the keyword of a later query from its access pattern after injecting $\lceil \log_2 |\Delta| \rceil$ documents, the $j$-th containing the keywords whose index in $\Delta$ has $j$-th bit $1$ — [[ZKP16 - All Your Queries Are Belong to Us The Power of File-Injection Attacks on Searchable Encryption|ZKP16]].
