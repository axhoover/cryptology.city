---
type: folklore
status: draft
aliases:
  - Schwartz-Zippel lemma
  - Schwartz-Zippel
title: Schwartz–Zippel lemma
id: schwartz-zippel-lemma
---

# Schwartz–Zippel lemma

Let $\FF$ be a field, $p \in \FF[x_1, \ldots, x_n]$ a nonzero polynomial of total degree at most $d$, and $S \subseteq \FF$ a finite nonempty set. Then

$$
\Pr_{r \getsr S^n}\!\left[p(r) = 0\right] \le \frac{d}{|S|}
$$

— [[Sch80 - Fast Probabilistic Algorithms for Verification of Polynomial Identities|Sch80]]. DeMillo and Lipton, and Zippel, proved related bounds independently — [[DL78 - A Probabilistic Remark on Algebraic Program Testing|DL78]], [[Zip79 - Probabilistic Algorithms for Sparse Polynomials|Zip79]].

Nonzero means nonzero as a formal polynomial, and the bound is informative only for $d < |S|$: the nonzero polynomial $x^q - x$ vanishes on all of $\FF_q$.

## Proof

Induction on $n$. For $n = 1$, a nonzero univariate polynomial of degree at most $d$ has at most $d$ roots. For $n > 1$, write $p = \sum_{i=0}^{k} x_1^i\, p_i(x_2, \ldots, x_n)$ with $p_k \ne 0$; then $p_k$ has total degree at most $d - k$, so $\Pr[p_k(r_2, \ldots, r_n) = 0] \le (d - k)/|S|$ by induction. When $p_k(r_2, \ldots, r_n) \ne 0$, the polynomial $p(x_1, r_2, \ldots, r_n)$ is a nonzero univariate polynomial of degree $k$, so the independent $r_1$ is a root with probability at most $k/|S|$. A union bound gives $d/|S|$ — standard.

The proof uses only that a nonzero univariate polynomial of degree $k$ has at most $k$ roots, so the bound holds over every integral domain — standard.

## Uses

- Two distinct polynomials of total degree at most $d$ agree on at most a $d/|S|$ fraction of $S^n$, which gives a one-sided-error test of whether a polynomial given by an evaluation procedure is identically zero ([[randomized-polynomial-time|polynomial identity testing]]) — [[Sch80 - Fast Probabilistic Algorithms for Verification of Polynomial Identities|Sch80]].
- A polynomial identity of degree $d$ over $\FF$ checked at one uniformly random point of $\FF$ is sound up to error $d/|\FF|$, as in the divisibility check of a [[arithmetization#qap-quadratic-arithmetic-program|QAP]] — standard.
- Generic-group lower bounds, such as [[ggm-to-dlog-sho97|GGM ⇒ DLOG]], bound by a version of this lemma the probability that two distinct polynomials in the hidden exponents agree at a random point — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]], [[BFP21 - The One-More Discrete Logarithm Assumption in the Generic Group Model|BFP21]].
