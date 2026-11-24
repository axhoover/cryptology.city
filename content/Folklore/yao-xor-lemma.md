---
type: folklore
status: draft
aliases:
  - XOR lemma
  - Yao's XOR lemma
  - Hard-core lemma
  - Impagliazzo's hard-core lemma
title: Yao's XOR lemma
id: yao-xor-lemma
---

# Yao's XOR lemma

**Yao's XOR lemma** states that if circuits of size $s$ compute a Boolean function $f$ correctly on at most a $1 - \delta$ fraction of inputs, then for every $\varepsilon > 0$, circuits of size less than $d \varepsilon^2 \delta^2 s$ compute the XOR of $f$ on $k$ independent inputs with probability less than $\tfrac12\left(1 + \varepsilon + (1 - \delta)^k\right)$, where $d$ is an absolute constant. The lemma is attributed to Yao and conventionally cited to [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]]; the bound in this form follows from the hard-core lemma — [[Imp95a - Hard-Core Distributions for Somewhat Hard Problems|Imp95a]].

## Hardness of a Boolean function

For $f : \bits^n \to \bits$, $0 < \delta < \tfrac12$ and $n \le s \le 2^n/n$, $f$ is **$\delta$-hard for size $s$** if every circuit $C$ with at most $s$ gates satisfies

$$
\Pr_{x \getsr \bits^n}\!\left[C(x) = f(x)\right] \le 1 - \delta.
$$

For $\varepsilon > 0$ and nonempty $H \subseteq \bits^n$, $f$ is **$\varepsilon$-hard-core on $H$ for size $s$** if every circuit $C$ with at most $s$ gates satisfies

$$
\Pr_{x \getsr H}\!\left[C(x) = f(x)\right] < \tfrac12 (1 + \varepsilon),
$$

and **$\varepsilon$-hard-core for size $s$** if this holds for $H = \bits^n$ — [[Imp95a - Hard-Core Distributions for Somewhat Hard Problems|Imp95a]] (Definition 1). The **$k$-wise XOR** of $f$ is $f^{\oplus k}(x_1, \ldots, x_k) := f(x_1) \oplus \cdots \oplus f(x_k)$ on $\bits^{nk}$.

## Hard-core lemma

If $f$ is $\delta$-hard for size $s$, then for every $\varepsilon > 0$ there is a set $H \subseteq \bits^n$ with $|H| \ge \delta 2^n$ such that $f$ is $\varepsilon$-hard-core on $H$ for size $d \varepsilon^2 \delta^2 s$, where $d$ is an absolute constant — [[Imp95a - Hard-Core Distributions for Somewhat Hard Problems|Imp95a]] (Theorem 1).

The proof goes through measures. For a **measure** $M : \bits^n \to [0, 1]$, $f$ is $\varepsilon$-hard-core on $M$ for size $s'$ if every circuit $C$ with at most $s'$ gates satisfies $\sum_x M(x) R_C(x) < \varepsilon \sum_x M(x)$, where $R_C(x) := 1$ if $C(x) = f(x)$ and $R_C(x) := -1$ otherwise; a set is the measure given by its indicator function. If $f$ is $\delta$-hard for size $s$ and $0 < \varepsilon < 1$, there is a measure $M$ with $\sum_x M(x) \ge \delta 2^n$ on which $f$ is $\varepsilon$-hard-core for size $\tfrac14 \varepsilon^2 \delta^2 s$ (Lemma 1), and, by a min-max argument credited to Nisan, one on which $f$ is $\varepsilon$-hard-core for size $\varepsilon^2 s / (16 \log(2/(\varepsilon\delta)))$ (Lemma 2). If $f$ is $\tfrac{\varepsilon}{2}$-hard-core on a measure $M$ with $\sum_x M(x) \ge \delta 2^n$ for a size $s'$ with $2n < s' < \tfrac18 (2^n/n)(\varepsilon\delta)^2$, then placing each $x$ in $H$ independently with probability $M(x)$ gives, with positive probability, a set $H$ with $|H| \ge \delta 2^n$ on which $f$ is $\varepsilon$-hard-core for size $s'$ (Lemma 3) — [[Imp95a - Hard-Core Distributions for Somewhat Hard Problems|Imp95a]].

## XOR lemma

Let $f$ be $\varepsilon$-hard-core on a set $H$ with $|H| = \delta' 2^n$ for size $s'$. Then for every $k \ge 1$, every circuit $C$ with fewer than $s'$ gates satisfies

$$
\Pr_{x_1, \ldots, x_k \getsr \bits^n}\!\left[C(x_1, \ldots, x_k) = f^{\oplus k}(x_1, \ldots, x_k)\right] < \frac12 \left(1 + \varepsilon + (1 - \delta')^k\right),
$$

so $f^{\oplus k}$ is $\left(\varepsilon + (1 - \delta')^k\right)$-hard-core for circuits with fewer than $s'$ gates — [[Imp95a - Hard-Core Distributions for Somewhat Hard Problems|Imp95a]] (Lemma 4, stated there for size $s'$).

With the hard-core lemma, $\delta' \ge \delta$ and $s' = d \varepsilon^2 \delta^2 s$: if $f$ is $\delta$-hard for size $s$, then every circuit with fewer than $d \varepsilon^2 \delta^2 s$ gates computes $f^{\oplus k}$ with probability less than $\tfrac12\left(1 + \varepsilon + (1 - \delta)^k\right)$, which is at most $\tfrac12 + \varepsilon$ once $k \ge \ln(1/\varepsilon)/\delta$. Deriving the XOR lemma from a hard-core set is due to [[Imp95a - Hard-Core Distributions for Somewhat Hard Problems|Imp95a]] (Section 7).

The bound is proved as follows. With probability $(1 - \delta')^k$ no $x_i$ lies in $H$. Otherwise let $i$ be the first index with $x_i \in H$; conditioned on $i$ and on the other inputs, $x_i$ is uniform on $H$, and hard-wiring the other inputs and the XOR $b$ of their values under $f$ turns $C$ into a circuit $x \mapsto C(\ldots, x, \ldots) \oplus b$ with at most $|C| + 1 \le s'$ gates, which computes $f$ on $H$ with probability less than $\tfrac12 (1 + \varepsilon)$. Hence $C$ is correct with probability less than

$$
(1 - \delta')^k + \left(1 - (1 - \delta')^k\right) \cdot \tfrac12 (1 + \varepsilon) \le \tfrac12 \left(1 + \varepsilon + (1 - \delta')^k\right).
$$

The proof in [[Imp95a - Hard-Core Distributions for Somewhat Hard Problems|Imp95a]] conditions on the number of inputs that lie in $H$ instead of on the first one, and takes the circuit with negated output to be no larger than $C$.

## Direct products

The XOR lemma amplifies the hardness of computing a predicate. For inverting a function the corresponding statement is a direct product: if $f$ on $\bits^n$ is [[hash-function#weak-one-wayness|weakly one-way]], with a polynomial $p$ such that every efficient inverter fails with probability at least $1/p(n)$ for all sufficiently large $n$, then $(x_1, \ldots, x_t) \mapsto (f(x_1), \ldots, f(x_t))$ for $t = n \cdot p(n)$ independent blocks is [[hash-function#preimage-resistance-one-wayness|one-way]] ([[weak-owf-to-owf-yao82a|Weak OWF ⇒ OWF]]) — [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]].

## Notes

- The XOR-lemma reduction above is non-uniform: it fixes the other inputs and their values of $f$ inside the circuit ([[uniform-and-non-uniform-adversaries|uniform and non-uniform adversaries]]) — standard. The direct-product reduction is uniform: its inverter samples the other blocks and evaluates $f$ on them itself — [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]].
- The first proof of the lemma appears to be Levin's, in [[Lev87 - One-Way Functions and Pseudorandom Generators|Lev87]] (see also [[GNW95 - On Yao's XOR-Lemma|GNW95]]) — [[HS11 - General Hardness Amplification of Predicates and Puzzles|HS11]] (Section 1.1). [[Imp95a - Hard-Core Distributions for Somewhat Hard Problems|Imp95a]] (Section 1) refers to Lev87 for a generalization and exposition, and states Yao's lemma as: if $f$ is $\delta$-hard for size $s$, then $f^{\oplus k}$ is $\left(\varepsilon + (1 - 2\delta)^k\right)$-hard-core for size $O(\varepsilon^2 s)$.
- [[Imp95a - Hard-Core Distributions for Somewhat Hard Problems|Imp95a]] describes the derivation from the hard-core lemma as giving slightly weaker numerical parameters than Yao's lemma (Section 1), and asks why the hard-core set has density $\delta$ rather than $2\delta$, remarking that the argument can be bootstrapped to density $(2 - r)\delta$ for every constant $r$ (Section 9). With a hard-core set of density $2\delta$, the bound above would have $(1 - 2\delta)^k$ in place of $(1 - \delta)^k$.
- The information-theoretic lemma also called the XOR lemma, used for [[hardcore-predicate#simultaneously-hardcore-bits|simultaneously hardcore bits]], is a different statement: every random variable $Z$ on $\bits^\ell$ satisfies $\Delta(Z, U_\ell)^2 \le \sum_{S \in \bits^\ell \setminus \{0^\ell\}} \Delta(\langle S, Z \rangle, U_1)^2$, where $\Delta$ is the [[indistinguishability#statistical-distance|statistical distance]], $U_j$ is uniform on $\bits^j$ and $\langle S, Z \rangle$ is the inner product modulo 2 — [[KK10 - Two-Source Extractors Secure Against Quantum Adversaries|KK10]] (Lemma 9), which attributes it to Vazirani, [[Vaz87 - Strong Communication Complexity or Generating Quasi-Random Sequences from Two Communicating Semi-Random Sources|Vaz87]]. Hence $\Delta(Z, U_\ell)$ is at most $2^{\ell/2}$ times the largest distance from uniform of a nonempty parity of $Z$.
