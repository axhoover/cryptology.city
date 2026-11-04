---
type: assumption
status: draft
aliases:
  - ETH
  - Exponential time hypothesis
  - SETH
  - Strong exponential time hypothesis
title: Exponential time hypothesis
id: eth
variants:
  seth: "#strong-exponential-time-hypothesis"
---

# Exponential time hypothesis

The exponential time hypothesis (ETH) states that for some $\varepsilon > 0$, 3-SAT on $n$ variables cannot be decided in time $O(2^{\varepsilon n})$.

## Assumption

For $k \ge 3$, let

$$
s_k := \inf\left\{\delta \ge 0 : k\text{-SAT on } n \text{ variables can be decided in time } O(2^{\delta n})\right\}.
$$

The **exponential time hypothesis** is that $s_3 > 0$ — [[IP01 - On the Complexity of k-SAT|IP01]]. Every 3-CNF is a $k$-CNF, so $s_3 \le s_4 \le \cdots \le 1$ — standard. An algorithm deciding 3-SAT in time $2^{o(n)}$ gives $s_3 = 0$.

ETH is a worst-case hypothesis about a decision problem; it has no security game.

## Known Results

- If ETH holds, there is a $\delta > 0$ such that 3-SAT on $n$ variables and $m$ clauses cannot be decided in time $O(2^{\delta (n + m)})$; the proof is the sparsification lemma — [[IPZ01 - Which Problems Have Strongly Exponential Complexity|IPZ01]].

# Variations

## Strong exponential time hypothesis

The **strong exponential time hypothesis (SETH)** is that $\lim_{k \to \infty} s_k = 1$ — [[IP01 - On the Complexity of k-SAT|IP01]]. The limit exists because $(s_k)_k$ is nondecreasing and bounded by $1$.

# Attacks

- **Subexponential #$k$-SAT (claimed).** [[Ope26 - The Exponential Time Hypothesis is False|Ope26]] (Theorem 1.1) claims a deterministic algorithm that, for each fixed $k \ge 2$, given a $k$-CNF on $n \ge 20$ variables with $m$ clauses, computes its number of satisfying assignments in $(n + m)^{O_k(1)} 2^{O_k(n \log\log n / \sqrt{\log n})}$ bit operations and $(n + m)^{O_k(1)}$ bits of space, and in $(n + m)^{O_{k,D}(1)} 2^{O_{k,D}(n / \sqrt{\log n})}$ bit operations when $m \le Dn$ for a constant $D > 0$. This gives $s_k = 0$ for every $k \ge 3$, refuting ETH and SETH. The manuscript is unrefereed.
- **Boolean tensor contraction (claimed).** Both bounds above are proved through Theorem D.1 of [[Ope26 - The Exponential Time Hypothesis is False|Ope26]]. A Boolean tensor network is a bipartite multigraph $G$ whose edges each carry one bit, with a tensor $T_v$ at each vertex $v$ assigning a ring element to each assignment of the edges $\delta(v)$ incident to $v$; its contraction is

  $$
  Z := \sum_{x \in \bits^{E(G)}} \prod_{v \in V(G)} T_v(x|_{\delta(v)}).
  $$

  Fix constants $C, A, c > 0$. For a network with at most $Cs$ edges, maximum degree at most $\lceil s^{9/10} \rceil$, a number of vertices polynomial in $s$, entries in $(\ZZ/2^{P_0}\ZZ)[V]/(V^{\ell})$ with $1 \le P_0, \ell \le Cs$, and each entry computable in time $(s + L)^{c} 2^{A s^{9/10}}$ and space $(s + L)^{c}$, where $L$ is the description length, Ope26 claim that $Z$ can be computed deterministically in $(s + L)^{O(1)} 2^{O(s / \sqrt{\log s})}$ bit operations and $(s + L)^{O(1)}$ bits of space. With $0/1$ entries, $\ell = 1$ and $P_0 > |E(G)|$, $Z$ is the number of edge assignments satisfying the predicate at every vertex.

- **Consequences for cryptography (conditional on Ope26).** Discrete logarithms on prime-order elliptic curves over a prime field $\FF_q$ in expected time $2^{O(b/(\log b)^{1/4})}$, $b = \lceil \log q \rceil$ — [[ABH+26 - A Subexponential Time Algorithm for Elliptic Curve Discrete Logarithm|ABH+26]]; see [[discrete-logarithm#attacks|DLOG]]. Inversion of maps with constant output locality in time $2^{o(n)}$ — [[Ope26 - The Exponential Time Hypothesis is False|Ope26]]; see [[low-complexity-prg#other-results|PRG in NC0]].
