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

**Yao's XOR lemma** states that if circuits of size $s$ compute a Boolean function $f$ correctly on at most a $1 - \delta$ fraction of inputs, then for every $\varepsilon > 0$, circuits of size at most $s \cdot \poly(\varepsilon, \delta)$ compute the XOR of $f$ on $k$ independent inputs with probability at most $\tfrac12 + \varepsilon + (1 - \Omega(\delta))^k$. The lemma is attributed to Yao and conventionally cited to [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]]; the bound in this form follows from the hard-core lemma — [[Imp95a - Hard-Core Distributions for Somewhat Hard Problems|Imp95a]].

## Hardness of a Boolean function

For $f : \bits^n \to \bits$ and $0 \le \delta \le \tfrac12$, $f$ is **$\delta$-hard for size $s$** if every circuit $C$ of size at most $s$ satisfies

$$
\Pr_{x \getsr \bits^n}\!\left[C(x) = f(x)\right] \le 1 - \delta.
$$

A $(\tfrac12 - \varepsilon)$-hard function is predicted with advantage at most $\varepsilon$ over a uniform guess. The **$k$-wise XOR** of $f$ is $f^{\oplus k}(x_1, \ldots, x_k) := f(x_1) \oplus \cdots \oplus f(x_k)$ on $\bits^{nk}$.

## Hard-core lemma

If $f$ is $\delta$-hard for size $s$, then for every $\varepsilon > 0$ there is a set $H \subseteq \bits^n$ of density $|H| / 2^n = \Omega(\delta)$ such that every circuit $C$ of size $s' = s \cdot \poly(\varepsilon, \delta)$ satisfies $\Pr_{x \getsr H}[C(x) = f(x)] \le \tfrac12 + \varepsilon$ — [[Imp95a - Hard-Core Distributions for Somewhat Hard Problems|Imp95a]].

## XOR lemma

Let $H \subseteq \bits^n$ have density $\delta'$ and satisfy $\Pr_{x \getsr H}\!\left[C(x) = f(x)\right] \le \tfrac12 + \varepsilon$ for every circuit $C$ of size at most $s'$. Then for every $k \ge 1$, every circuit $C$ of size less than $s'$ satisfies

$$
\Pr_{x_1, \ldots, x_k \getsr \bits^n}\!\left[C(x_1, \ldots, x_k) = f^{\oplus k}(x_1, \ldots, x_k)\right] \le \frac12 + \varepsilon + (1 - \delta')^k \le \frac12 + \varepsilon + e^{-\delta' k}.
$$

With the hard-core lemma, $\delta' = \Omega(\delta)$ and $s' = s \cdot \poly(\varepsilon, \delta)$, so $f^{\oplus k}$ is $(\tfrac12 - 2\varepsilon)$-hard for size $s \cdot \poly(\varepsilon, \delta)$ once $k \ge \ln(1/\varepsilon)/\delta'$, a threshold that is $O(\log(1/\varepsilon)/\delta)$. Deriving the XOR lemma from a hard-core set is due to [[Imp95a - Hard-Core Distributions for Somewhat Hard Problems|Imp95a]].

The bound is proved as follows. With probability $(1 - \delta')^k$ no $x_i$ lies in $H$. Otherwise let $i$ be the first index with $x_i \in H$; conditioned on $i$ and on the other inputs, $x_i$ is uniform on $H$. Fixing $i$ and the other inputs to their best values, and hard-wiring the XOR $b$ of their values under $f$, turns $C$ into a circuit $x \mapsto C(\ldots, x, \ldots) \oplus b$ of size at most $|C| + 1 \le s'$ for $f$ on $H$, which is correct with probability at most $\tfrac12 + \varepsilon$ — [[Imp95a - Hard-Core Distributions for Somewhat Hard Problems|Imp95a]].

## Direct products

The XOR lemma amplifies the hardness of computing a predicate. For inverting a function the corresponding statement is a direct product: if $f$ on $\bits^n$ is [[hash-function#weak-one-wayness|weakly one-way]], with a polynomial $p$ such that every efficient inverter fails with probability at least $1/p(n)$ for all sufficiently large $n$, then $(x_1, \ldots, x_t) \mapsto (f(x_1), \ldots, f(x_t))$ for $t = n \cdot p(n)$ independent blocks is [[hash-function#preimage-resistance-one-wayness|one-way]] ([[weak-owf-to-owf-yao82a|Weak OWF ⇒ OWF]]) — [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]].

## Notes

- The XOR-lemma reduction above is non-uniform: it fixes the other inputs and their values of $f$ inside the circuit ([[uniform-and-non-uniform-adversaries|uniform and non-uniform adversaries]]) — standard. The direct-product reduction is uniform: its inverter samples the other blocks and evaluates $f$ on them itself — [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]].
- The information-theoretic lemma also called the XOR lemma, used for [[hardcore-predicate#simultaneously-hardcore-bits|simultaneously hardcore bits]], is a different statement: it bounds the distance from uniform of a distribution on $\bits^\ell$ in terms of the largest bias of its nonempty parities — standard.
