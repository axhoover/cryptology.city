---
type: primitive
status: draft
aliases:
  - OLDC
  - Oblivious locally decodable code
title: Oblivious locally decodable code
id: oblivious-locally-decodable-code
unlisted: true
---

# Oblivious locally decodable code

An oblivious locally decodable code (OLDC) is a secret-key encoding of a database that the key holder decodes locally, reading few positions of the encoding, such that the positions read hide which database bit is decoded from an observer who sees neither the key nor the encoding — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]].

## Syntax

An OLDC is a tuple of efficient algorithms $(\KeyGen, \mathsf{Encode}, \Query, \Decode)$ such that

- $\KeyGen(1^\secpar, 1^n) \to \sk$ is a randomized algorithm that samples a secret key, without access to the database,
- $\mathsf{Encode}(1^\secpar, \sk, x) \to X$ is a randomized algorithm that maps a database $x \in \bits^n$ to an encoding $X = (X_1, \ldots, X_N)$ with $X_j \in \bits^L$,
- $\Query(\sk, i; r) \to I$ is a randomized algorithm that, with coins $r$, maps an index $i \in [n]$ to a list $I \in [N]^q$ of positions,
- $\Decode(\sk, i, X_I, r) \to x'$ is a deterministic algorithm that maps the symbols $X_I$ at those positions to a bit $x'$.

This is the syntax of [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]] (Definition 3.1), whose key generation takes only $1^\secpar$ and whose query sampler and decoder also take $1^\secpar$ and $1^n$.

## Properties

### Correctness

An OLDC is **perfectly correct** if for every $\secpar$, $n$, $x \in \bits^n$ and $i \in [n]$,

$$
\Pr\!\left[\Decode(\sk, i, X_I, r) = x_i\right] = 1,
$$

where $\sk \gets \KeyGen(1^\secpar, 1^n)$, $X \gets \mathsf{Encode}(1^\secpar, \sk, x)$ and $I \gets \Query(\sk, i; r)$ — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]].

### Efficiency

An OLDC is **doubly efficient** if $\KeyGen$ and $\mathsf{Encode}$ run in time polynomial in $\secpar$ and $n$, and there are a polynomial $p$ and a function $s$ with $s(n) = o(n)$ such that for every $\secpar$, $n$ and $i \in [n]$ the number $Lq$ of bits read and the running times of $\Query$ and $\Decode$ are each at most $p(\secpar) + s(n)$, the bound of [[doubly-efficient-pir#efficiency|doubly-efficient PIR]]. BIPW17 instead ask for some $\varepsilon > 0$ with $Lq < n^{1-\varepsilon}$ for every $\secpar$ and all sufficiently large $n$, a threshold on $n$ that may grow with $\secpar$ — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]] (Definition 3.1).

### Security

The adversary chooses the database size and then sees the positions of polynomially many adaptively chosen decodings, never the key or the encoding.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{oldc}}_{\calA}(\secpar)$}
\begin{algorithmic}
\State $(1^n, \stA) \gets \calA(1^\secpar)$
\State $\sk \gets \KeyGen(1^\secpar, 1^n)$; $b \getsr \bits$
\State $b' \gets \calA^{\calO_b}(\stA)$
\Comment{$\calA$ sees neither $\sk$ nor the encoding}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_b(i_0, i_1)$}
\begin{algorithmic}
\State $I \gets \Query(\sk, i_b; r)$ with fresh coins $r$
\Return $I$
\end{algorithmic}
\end{algorithm}
```

An OLDC is **oblivious** if for all efficient $\calA$,

$$
\Adv^{\mathrm{oldc}}_{\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{oldc}}_{\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. BIPW17 state the game with one challenge pair $i_0 \ne i_1$ and oracle access to $\Query(\sk, \cdot)$, which implies the game above by a hybrid argument (Remark 3.2) — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]].

# Other results

- [[permuted-puzzles-to-depir-bipw17|Permuted puzzles ⇒ OLDC]] — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]]
- [[oblivious-locally-decodable-code-to-passive-sk-depir|OLDC ⇒ Passive-server SK-DEPIR]] — folklore
- An OLDC and one-way functions give public-key PIR with preprocessing in the virtual-black-box obfuscation hybrid model (Theorem 5.1); under the Permuted Low-Degree Polynomials Conjecture and one-way functions, with ideal obfuscation or a stateless hardware token of size $\poly(\secpar)$, its communication and computation are $\poly(\secpar) \cdot n^{\varepsilon}$ for every $\varepsilon > 0$ (Theorem 5.8) — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]].
- BIPW17 argue that ruling out OLDCs would require proving strong data-structure lower bounds — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]] (Appendix A).
- LMW25 describe two-round [[doubly-efficient-pir#passive-server-sk-depir|passive-server SK-DEPIR]] as the notion BIPW17 call OLDCs — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]].

<!-- BEGIN GENERATED participates-in a877bb108c7b -->

## Participates in

**Builds on Oblivious locally decodable code**

- [[oblivious-locally-decodable-code-to-passive-sk-depir|OLDC ⇒ Passive-server SK-DEPIR]]

**Produces Oblivious locally decodable code**

- [[permuted-puzzles-to-depir-bipw17|Permuted puzzles ⇒ OLDC]]

<!-- END GENERATED participates-in -->
