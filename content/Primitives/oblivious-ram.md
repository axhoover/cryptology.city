---
type: primitive
status: draft
aliases:
  - ORAM
  - ORAMs
  - Oblivious RAM
title: Oblivious RAM
id: oram
variants:
  statistical-oram: "#statistically-secure-oram"
  offline-oram: "#offline-oram"
  sublogarithmic-offline-oram: "#sublogarithmic-overhead-offline-oram"
  balls-and-bins-oram: "#balls-and-bins-oram"
  sublogarithmic-balls-and-bins-oram: "#sublogarithmic-overhead-balls-and-bins-oram"
  one-round-oram: "#one-round-oram"
  sub-square-root-one-round-oram: "#sub-square-root-one-round-balls-and-bins-oram"
  polylog-oram: "#polylogarithmic-overhead-oram"
  logarithmic-oram: "#logarithmic-overhead-oram"
  sublogarithmic-oram: "#sublogarithmic-overhead-oram"
  oram-with-server-computation: "#oram-with-server-computation"
  constant-bandwidth-oram: "#constant-bandwidth-oram"
---

# Oblivious RAM

An oblivious RAM (ORAM) is a client algorithm that serves reads and writes to a virtual array of $N_1$ blocks by issuing reads and writes to a physical array of $N_2$ blocks held by a server, so that the sequence of physical addresses it touches reveals nothing about the virtual operations. It was introduced by [[Gol87 - Towards a Theory of Software Protection and Simulation by Oblivious RAMs|Gol87]] and [[Ost90 - Efficient Computation on Oblivious RAMs|Ost90]], whose results [[GO96 - Software protection and simulation on oblivious RAMs|GO96]] unify and extend.

**Note**: Oblivious RAM schemes can provide statistical or unconditional security against adversaries who only know which array indices are accessed. However, in practice one almost always needs to deploy ORAM together with standard symmetric encryption.

## Syntax

Throughout, we use the following notation. All oblivious RAM schemes are defined with respect to a key space $\KSp$, state space $\StSp$, virtual array size $N_1$ and blocks $\calB_1$, and physical array size $N_2$ and blocks $\calB_2$. We additionally assume $\bot \in \StSp$ and $\bot \notin \calB_1$, and write $\beta_j := \lceil \log_2 |\calB_j| \rceil$ for the block length in bits. Furthermore, we define the sets:

- $\RdOps_j = \{1, \ldots, N_j\}$
- $\WrOps_j = \{(i, b) \mid i \in \RdOps_j, b \in \calB_j\}$
- $\Ops_j = \RdOps_j \cup \WrOps_j$

These are the allowed operations for the virtual array ($j = 1$) and the physical array ($j = 2$). An $r$-round Oblivious RAM (ORAM) is a tuple of efficient functions $(\Gen, \Acc_1, \ldots, \Acc_r, \Out)$ such that:

- $\Gen(1^\secpar) \to K$, a randomized function outputting a key $K \in \KSp$.
- $\Acc_j(K, \st, o, a_1, \ldots, a_{j-1}) \to (\st', p_j)$ for $j \in [r]$, a randomized function taking a state $\st \in \StSp$, a virtual operation $o \in \Ops_1$ and the answers $a_1, \ldots, a_{j-1} \in \calB_2^*$ of the earlier rounds, and outputting a new state $\st' \in \StSp$ and a finite sequence $p_j \in \Ops_2^*$ of physical operations.
- $\Out(K, \st, o, a_1, \ldots, a_r) \to (\st', y)$, a function outputting a new state $\st' \in \StSp$ and an answer $y \in \calB_1 \cup \{\bot\}$.

The above functions describe the processing of the Oblivious RAM query. They are used in the following way to process a virtual operation $o \in \Ops_1$, for a physical array $M_2 \in \calB_2^{N_2}$. For $j = 1, \ldots, r$, run $(\st, p_j) \gets \Acc_j(K, \st, o, a_1, \ldots, a_{j-1})$ and execute the operations of $p_j$ on $M_2$ in order: a read $i$ returns $M_2[i]$, and a write $(i, b)$ sets $M_2[i] \gets b$. Let $a_j \in \calB_2^*$ be the values the reads of $p_j$ return. Finally, run $(\st, y) \gets \Out(K, \st, o, a_1, \ldots, a_r)$ and return $y$. The client starts from $\st = \bot$ and $M_2 = (b_0, \ldots, b_0)$ for a fixed $b_0 \in \calB_2$.

The **access pattern** of $o$ is $\mathrm{ap}(o) := (\rho(p_1), \ldots, \rho(p_r))$, where $\rho$ maps each read $i$ to $(\mathrm{rd}, i)$ and each write $(i, b)$ to $(\mathrm{wr}, i)$: it records the index and type of every physical operation, not its contents.

## Properties

### Correctness

Fix $\secpar$ and a sequence $o_1, \ldots, o_q \in \Ops_1$, processed in order from the initial state under $K \gets \Gen(1^\secpar)$ with answers $y_1, \ldots, y_q$. The correct answer $v_t$ to $o_t$ is $\bot$ when $o_t$ is a write; when $o_t$ is a read $i$, it is the block $b$ of the last write $(i, b)$ among $o_1, \ldots, o_{t-1}$, and $\bot$ if there is none. An ORAM $\Pi = (\Gen, \Acc_1, \ldots, \Acc_r, \Out)$ is $(1-\varepsilon)$-**correct** if for all $\secpar, q \in \NN$ and $o_1, \ldots, o_q \in \Ops_1$,

$$
\Pr\!\left[\forall t \in [q] : y_t = v_t\right] \ge 1 - \varepsilon(\secpar, q),
$$

over the coins of $\Gen$, $\Acc_1, \ldots, \Acc_r$ and $\Out$. It is $(1-\negl(\secpar))$-correct if $\varepsilon(\secpar, q(\secpar))$ is negligible for every polynomial $q$. When $\varepsilon = 0$, we say $\Pi$ is **perfectly correct**.

### Security

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{oram}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $K \gets \Gen(1^\secpar)$; $\st \gets \bot$; $M_2 \gets (b_0, \ldots, b_0)$
\State $b \getsr \bits$
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_b(o_0, o_1)$}
\begin{algorithmic}
\State process $o_b \in \Ops_1$ under $K$, updating $\st$ and $M_2$
\Comment{the answer $y$ is withheld: it differs between the worlds}
\Return $\mathrm{ap}(o_b)$
\end{algorithmic}
\end{algorithm}
```

The adversary chooses the two operation sequences adaptively, one pair of operations at a time, and sees the access pattern of each operation of the sequence $b$ selects. An ORAM $\Pi$ is **secure** if it is $(1-\negl(\secpar))$-correct and for all efficient $\calA$,

$$
\Adv^{\mathrm{oram}}_{\Pi,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{oram}}_{\Pi,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

With $N_2 = N_1$ and $\calB_2 = \calB_1 \cup \{b_0\}$, the linear scan, which on every operation reads all $N_1$ cells in a first round and rewrites all of them in a second, is a perfectly correct and perfectly secure two-round ORAM with bandwidth blowup $2N_1 \beta_2/\beta_1$ — folklore. A client that keeps all $N_1$ blocks in $\st$ and issues no physical operations is perfectly secure too — folklore.

### Efficiency

For a sequence $o_1, \ldots, o_q$, let $p_{t,j}$ be the physical operations issued in round $j$ of $o_t$.

- The **bandwidth blowup** on $o_1, \ldots, o_q$ is $\frac{\beta_2}{q \beta_1} \cdot \mathbb{E}\!\left[\sum_{t=1}^{q} \sum_{j=1}^{r} |p_{t,j}|\right]$, and the **amortized bandwidth blowup** is its maximum over all sequences of $q$ operations with $N_1 \le q \le \poly(\secpar)$. The **worst-case bandwidth blowup** is the maximum of $\frac{\beta_2}{\beta_1} \sum_{j=1}^{r} |p_{t,j}|$ over all sequences, all $t$ and all coins.
- The **client storage** is $\max_t |\st_t|$, the largest state kept between operations, in bits or in blocks of $\beta_1$ bits; the key length $|K|$ is reported separately. Answers held within one operation are not counted, since the bandwidth bounds them.
- The **server storage** is $N_2 \beta_2$ bits, and the **round complexity** is $r$.

# Variations

## Statistically secure ORAM

An ORAM $\Pi$ is **statistically secure** if it is $(1-\negl(\secpar))$-correct and $\Adv^{\mathrm{oram}}_{\Pi,\calA}(\secpar)$ is negligible for every adversary $\calA$, possibly computationally unbounded, that makes polynomially many oracle queries. It is **perfectly secure** if in addition $\Adv^{\mathrm{oram}}_{\Pi,\calA}(\secpar) = 0$ for every such $\calA$.

## Offline ORAM

An **offline** ORAM learns the indices and types of the whole operation sequence $\mathbf{o} = (o_1, \ldots, o_q)$ before processing starts, but each written block only with its operation: $\Acc_j$ and $\Out$ take the current operation $o_t$ together with $(\rho(o_1), \ldots, \rho(o_q))$ in place of $o$, with $\rho$ as in the definition of the access pattern. Knowing the written blocks in advance would let the client answer every read from them without touching the server. In the security game the adversary submits one pair of sequences of equal length and receives the access pattern of the whole execution on one of them — [[BN16 - Is There an Oblivious RAM Lower Bound|BN16]]. The ORAMs defined above, which process each operation before receiving the next, are **online**.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{oram\text{-}off}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $K \gets \Gen(1^\secpar)$; $b \getsr \bits$
\State $(\mathbf{o}_0, \mathbf{o}_1, \stA) \gets \calA(1^\secpar)$
\Comment{$\mathbf{o}_0, \mathbf{o}_1 \in \Ops_1^q$ for the same $q$}
\State process $\mathbf{o}_b$ under $K$ from $\st = \bot$ and $M_2 = (b_0, \ldots, b_0)$
\State $\mathit{ap} \gets (\mathrm{ap}(o_1), \ldots, \mathrm{ap}(o_q))$ for the operations of $\mathbf{o}_b$
\State $b' \gets \calA(\stA, \mathit{ap})$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An offline ORAM $\Pi$ is **secure** if it is $(1-\negl(\secpar))$-correct and for all efficient $\calA$,

$$
\Adv^{\mathrm{oram\text{-}off}}_{\Pi,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{oram\text{-}off}}_{\Pi,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible; statistical and perfect security are defined as for online ORAMs. Every online ORAM yields an offline ORAM with the same overhead — folklore.

### Sublogarithmic-overhead offline ORAM

A **sublogarithmic-overhead offline ORAM** is a secure offline ORAM, with any encoding of the data, whose physical cells have the size of its blocks ($\beta_2 = \beta_1 = w$), with client storage of $O(1)$ blocks, block length $w \in \Omega(\log N_1) \cap N_1^{o(1)}$, and amortized bandwidth blowup $o(\log N_1)$ over sequences of $q \ge N_1$ operations. Small sorting circuits give one ([[small-sorting-circuits-to-sublogarithmic-offline-oram-bn16|Small sorting circuits ⇒ sublogarithmic-overhead offline ORAM]]), and proving that none exists would need a superlinear lower bound on the size of sorting circuits — [[BN16 - Is There an Oblivious RAM Lower Bound|BN16]].

## Balls-and-bins ORAM

In a **balls-and-bins** ORAM, $\calB_2 = \calB_1 \cup \{b_0\}$, so each physical cell holds one virtual block (a _ball_) or the empty marker $b_0$. The client holds balls together with metadata that does not depend on ball contents. A physical read copies the cell's ball into client memory, and a physical write stores $b_0$ or a ball the client holds. Which physical operations are issued depends only on $K$, the client's coins, the metadata, and the indices and types of the virtual operations, never on ball contents: the ORAM moves balls and never encodes them — [[GO96 - Software protection and simulation on oblivious RAMs|GO96]], [[BN16 - Is There an Oblivious RAM Lower Bound|BN16]]. A balls-and-bins ORAM **does not duplicate balls** if it never keeps two copies of a ball, at the server or the client — [[CDH20 - A Lower Bound for One-Round Oblivious RAM|CDH20]].

### Sublogarithmic-overhead balls-and-bins ORAM

A **sublogarithmic-overhead balls-and-bins ORAM** is a statistically secure offline balls-and-bins ORAM with client storage of $O(1)$ blocks and amortized bandwidth blowup $o(\log N_1)$ over sequences of $q \ge N_1$ operations. None exists ([[no-oram-to-sublogarithmic-balls-and-bins-oram-go96|No reduction from ORAM to sublogarithmic-overhead balls-and-bins ORAM]]) — [[GO96 - Software protection and simulation on oblivious RAMs|GO96]].

## One-round ORAM

A **one-round** ORAM is an ORAM with $r = 1$: all physical operations for a virtual operation are chosen before any of them is answered, so no physical address issued while processing $o$ depends on a block read while processing $o$.

### Sub-square-root one-round balls-and-bins ORAM

A **sub-square-root one-round balls-and-bins ORAM** is a statistically secure one-round balls-and-bins ORAM that does not duplicate balls, with worst-case bandwidth blowup $o(\sqrt{N_1})$ and client storage of $o(\sqrt{N_1})$ blocks. None exists ([[no-oram-to-sub-square-root-one-round-oram-cdh20|No reduction from ORAM to sub-square-root one-round balls-and-bins ORAM]]) — [[CDH20 - A Lower Bound for One-Round Oblivious RAM|CDH20]].

## Polylogarithmic-overhead ORAM

A **polylogarithmic-overhead ORAM** is a secure ORAM with block length $\beta_1 \ge \log_2 N_1$, client storage of $O(1)$ blocks and amortized bandwidth blowup $\polylog(N_1)$ over every sequence of $q$ operations with $\secpar \le N_1 \le q \le \poly(\secpar)$, whose key $K \gets \Gen(1^\secpar)$ has length a fixed polynomial in $\secpar$, independent of $N_1$.

## Logarithmic-overhead ORAM

A **logarithmic-overhead ORAM** is a secure ORAM with block length $\log_2 N_1 \le \beta_1 = O(\log N_1)$, client storage of $O(1)$ blocks and amortized bandwidth blowup $O(\log N_1)$ over every sequence of $q$ operations with $\secpar \le N_1 \le q \le \poly(\secpar)$, whose key $K \gets \Gen(1^\secpar)$ has length a fixed polynomial in $\secpar$, independent of $N_1$. One exists if a PRF does ([[prf-to-logarithmic-oram-akl-20|PRF ⇒ logarithmic-overhead ORAM (OptORAMa)]]) — [[AKL+20 - OptORAMa Optimal Oblivious RAM|AKL+20]].

## Sublogarithmic-overhead ORAM

A **sublogarithmic-overhead ORAM** is a secure online ORAM with $N_1$ blocks of $\beta_1$ bits and physical cells of any size $\beta_2$, whose client memory of $m := |K| + \max_t |\st_t|$ bits satisfies $\beta_1 \le m \le N_1^{1-\varepsilon}$ for a constant $\varepsilon > 0$, and whose amortized bandwidth blowup is $o(\log N_1)$. None exists ([[no-oram-to-sublogarithmic-oram-ln18|No reduction from ORAM to sublogarithmic-overhead ORAM]]) — [[LN18 - Yes, There is an Oblivious RAM Lower Bound!|LN18]].

## ORAM with server computation

In an **ORAM with server computation**, $\Ops_2$ also contains evaluation requests $(f, i_1, \ldots, i_k, i')$ for $f$ in a fixed class $\calF$ of efficiently computable functions $\calB_2^k \to \calB_2$, on which the server sets $M_2[i'] \gets f(M_2[i_1], \ldots, M_2[i_k])$. The adversary is a semi-honest server: in the security game, $\calO_b$ returns its entire view, every physical operation with its contents together with $M_2$, in place of $\mathrm{ap}(o_b)$. The bandwidth counts the bits the client sends and receives, request descriptions included, and not the server's work.

### Constant-bandwidth ORAM

A **constant-bandwidth ORAM** is an efficient ORAM with server computation, secure against a semi-honest server, with worst-case bandwidth blowup $O(1)$ and client storage of $\polylog(N_1)$ blocks, for some block length $\beta_1 \le \poly(\secpar, \log N_1)$. Onion ORAM is one if DCR holds ([[dcr-to-constant-bandwidth-oram-ddf-16|DCR ⇒ constant-bandwidth ORAM (Onion ORAM)]]) — [[DDF+16 - Onion ORAM A Constant Bandwidth Blowup Oblivious RAM|DDF+16]].

# Other results

- Every statistically secure balls-and-bins ORAM with client storage of $O(1)$ blocks, even an offline one, has amortized bandwidth blowup $\Omega(\log N_1)$ ([[no-oram-to-sublogarithmic-balls-and-bins-oram-go96|No reduction from ORAM to sublogarithmic-overhead balls-and-bins ORAM]]) — [[GO96 - Software protection and simulation on oblivious RAMs|GO96]]. For offline ORAMs that may encode the data, such a bound would imply superlinear lower bounds on the size of sorting circuits ([[small-sorting-circuits-to-sublogarithmic-offline-oram-bn16|Small sorting circuits ⇒ sublogarithmic-overhead offline ORAM]]) — [[BN16 - Is There an Oblivious RAM Lower Bound|BN16]].
- Every online ORAM with client memory $m \le N_1^{1-\varepsilon}$ has amortized bandwidth blowup $\Omega(\log N_1)$, even with computational security and an arbitrary encoding of the data ([[no-oram-to-sublogarithmic-oram-ln18|No reduction from ORAM to sublogarithmic-overhead ORAM]]) — [[LN18 - Yes, There is an Oblivious RAM Lower Bound!|LN18]]. The bound holds even against a server that does not know which physical operations belong to which virtual operation — [[HKKS19 - Stronger Lower Bounds for Online ORAM|HKKS19]].
- Every online ORAM makes $\Omega(\log(Nw/m)/\log(b/w))$ amortized memory probes per operation, where $N$ is the number of virtual cells, $w$ and $b$ the virtual and physical cell sizes and $m$ the client storage in bits; the bound is tight up to the $\log(b/w)$ factor and extends to non-colluding servers. For $w = \log N$ and $b, m \in \polylog N$, some offline ORAM makes $o(1)$ probes per operation on average while every online one makes $\Omega(\log N/\log\log N)$, the first separation of online and offline ORAM for any parameters — [[KL21 - A Logarithmic Lower Bound for Oblivious RAM (for all parameters)|KL21]].
- An online ORAM whose server only stores data and whose reads, but not writes, have $o(\log N_1)$ overhead follows from small sorting circuits together with locally decodable codes with parameters not known to exist, so a lower bound for online read-only ORAM would need a new circuit lower bound or would rule out such codes. LN18's bound leaves online read-only ORAM open, while GO96's balls-and-bins bound extends to offline and read-only ORAM — [[WW18 - Is There an Oblivious RAM Lower Bound for Online Reads|WW18]].
- Every one-round balls-and-bins ORAM that does not duplicate balls has $\Omega(\sqrt{N_1})$ bandwidth or $\Omega(\sqrt{N_1})$ client memory ([[no-oram-to-sub-square-root-one-round-oram-cdh20|No reduction from ORAM to sub-square-root one-round balls-and-bins ORAM]]) — [[CDH20 - A Lower Bound for One-Round Oblivious RAM|CDH20]].
- The hierarchical ORAM has polylogarithmic overhead given a PRF ([[prf-to-polylog-oram-go96|PRF ⇒ polylogarithmic-overhead ORAM (hierarchical ORAM)]]) — [[GO96 - Software protection and simulation on oblivious RAMs|GO96]]. OptORAMa has $O(\log N_1)$ amortized bandwidth blowup given a PRF ([[prf-to-logarithmic-oram-akl-20|PRF ⇒ logarithmic-overhead ORAM (OptORAMa)]]) — [[AKL+20 - OptORAMa Optimal Oblivious RAM|AKL+20]], improving the $O(\log N_1 \cdot \log\log N_1)$ of PanORAMa — [[PPRY18 - PanORAMa Oblivious RAM with Logarithmic Overhead|PPRY18]].
- A coin-flipping RAM simulates any RAM obliviously and online with polylogarithmic slowdown in time and space and no cryptographic assumption; with $n$ memory locations it fails with probability at most $n^{-\log n}$ — [[Ajt10 - Oblivious RAMs without Cryptographic Assumptions|Ajt10]].
- There is an ORAM whose access pattern is perfectly hidden, in the information-theoretic sense, without a random oracle, and DMN11 lower-bound the randomness an information-theoretically secure ORAM needs — [[DMN11 - Perfectly Secure Oblivious RAM without Random Oracles|DMN11]].
- There is a statistically secure ORAM with $\tilde{O}(\log^2 N_1)$ overhead — [[CLP14 - Statistically-secure ORAM with O(log2 n) Overhead|CLP14]], building on the tree-based ORAM of SCSL11, which has polylogarithmic worst-case cost with constant client storage — [[SCSL11 - Oblivious RAM with O((log N)3) Worst-Case Cost|SCSL11]].
- Path ORAM is statistically secure, encryption of the blocks aside. With the position map on the client, each access reads and writes one root-to-leaf path of its tree, $2Z \log N_1$ blocks for buckets of $Z = O(1)$ blocks — [[SDS+13 - Path ORAM An Extremely Simple Oblivious RAM Protocol|SDS+13]]. With blocks of $X \log N_1$ bits for $X \ge 2$ and the position map stored recursively in smaller Path ORAMs, there are two parameter sets, according to where the stashes of the recursive levels are kept, and each fails, by overflowing a stash, with probability $N_1^{-\omega(1)}$ — [[SDS+13 - Path ORAM An Extremely Simple Oblivious RAM Protocol|SDS+13]]:

  | Stashes kept  | Bandwidth blowup                         | Client storage (blocks)                  |
  | ------------- | ---------------------------------------- | ---------------------------------------- |
  | on the client | $O(\log^2 N_1 / \log X)$                 | $O(\log^2 N_1 / \log X) \cdot \omega(1)$ |
  | on the server | $O(\log^2 N_1 / \log X) \cdot \omega(1)$ | $O(\log N_1) \cdot \omega(1)$            |

- For a RAM with $N$ words of $N^{\varepsilon}$ bits, for a constant $0 < \varepsilon < 1$, Circuit ORAM gives an ORAM with $O(1)$ words of client storage that runs $T$ steps in time $O(T \log N) \cdot \omega(1)$ with negligible statistical failure probability, or $O(T \log N)$ with inverse-polynomial failure probability, showing that the Goldreich–Ostrovsky bound is tight for some parameter ranges. For blocks of $D = \Omega(\log^2 N)$ bits its circuit size is $O(D \log N) \cdot \omega(1)$ with failure probability $\negl(N)$ — [[WCS15 - Circuit ORAM On Tightness of the Goldreich-Ostrovsky Lower Bound|WCS15]].
- There is an oblivious parallel RAM compiler with polylogarithmic slowdown in total and parallel complexity whose memory-access distribution is statistically close to one independent of the data, and from it and IBE a garbled parallel RAM compiler — [[BCP16 - Oblivious Parallel RAM and Applications|BCP16]].
- [[garbled-ram|Garbled RAM]], which garbles a RAM program, its input and its memory so that the access pattern stays hidden too, exists if IBE does ([[ibe-to-garbled-ram-ghl-14|IBE ⇒ garbled RAM]]) — [[GHL+14 - Garbled RAM Revisited|GHL+14]], and if one-way functions do, using them only as a black box ([[owf-to-garbled-ram-glo15|OWF ⇒ garbled RAM (black-box)]]) — [[GLO15 - Black-Box Garbled RAM|GLO15]].
- Functions that a RAM computes in sublinear time have secure two-party computation in amortized sublinear time: the parties run generic secure two-party computation on top of an ORAM, each keeping state essentially linear in its own input, and the optimized protocol combines Yao's garbled circuits with the ORAM of SCSL11 — [[GKK+12 - Secure Two-Party Computation in Sublinear (Amortized) Time|GKK+12]], building on an idea of [[OS97 - Private Information Storage|OS97]].
- Private information storage gives private reads and writes to data held by several non-communicating databases, with information-theoretic privacy: any retrieval-only $k$-database scheme with communication $R(k, n)$ yields a $(k+1)$-database read/write scheme with communication $O(R(k, n) \cdot (\log n)^{O(1)})$, and no sublinear bounds for private information storage were known before — [[OS97 - Private Information Storage|OS97]].
- Floram is a distributed ORAM for two-party secure computation built from the [[distributed-point-function#Function secret sharing (FSS)|function secret sharing]] of [[BGI15 - Function Secret Sharing|BGI15]]; it needs much less secure computation per access, at the cost of $O(n)$ local memory operations, and outperforms Circuit ORAM and square-root ORAM for datasets of 32 KiB or more — [[DS17 - Scaling ORAM for Secure Computation|DS17]].

<!-- BEGIN GENERATED participates-in 6d418d692d68 -->

## Participates in

**Produces Oblivious RAM**

- [[dcr-to-constant-bandwidth-oram-ddf-16|DCR ⇒ constant-bandwidth ORAM (Onion ORAM)]] (via [[oblivious-ram#constant-bandwidth-oram|Constant-bandwidth ORAM]])
- [[prf-to-logarithmic-oram-akl-20|PRF ⇒ logarithmic-overhead ORAM (OptORAMa)]] (via [[oblivious-ram#logarithmic-overhead-oram|Logarithmic-overhead ORAM]])
- [[prf-to-polylog-oram-go96|PRF ⇒ polylogarithmic-overhead ORAM (hierarchical ORAM)]] (via [[oblivious-ram#polylogarithmic-overhead-oram|Polylogarithmic-overhead ORAM]])
- [[small-sorting-circuits-to-sublogarithmic-offline-oram-bn16|Small sorting circuits ⇒ sublogarithmic-overhead offline ORAM]] (via [[oblivious-ram#sublogarithmic-overhead-offline-oram|Sublogarithmic-overhead offline ORAM]])

**Barriers**

- [[no-oram-to-sub-square-root-one-round-oram-cdh20|No reduction from ORAM to sub-square-root one-round balls-and-bins ORAM]]
- [[no-oram-to-sublogarithmic-balls-and-bins-oram-go96|No reduction from ORAM to sublogarithmic-overhead balls-and-bins ORAM]]
- [[no-oram-to-sublogarithmic-oram-ln18|No reduction from ORAM to sublogarithmic-overhead ORAM]]

<!-- END GENERATED participates-in -->
