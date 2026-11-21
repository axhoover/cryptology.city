---
type: folklore
status: draft
aliases:
  - Birthday paradox
  - Birthday problem
  - Birthday attack
  - Floyd's cycle-finding algorithm
title: Birthday bound
id: birthday-bound
---

# Birthday bound

For $q \ge 1$ balls thrown independently and uniformly at random into $N$ bins, $C(N, q)$ denotes the probability that some bin receives at least two. For $1 \le q \le N$,

$$
1 - e^{-q(q-1)/(2N)} \;\le\; C(N, q) \;\le\; \frac{q(q-1)}{2N},
$$

and for $1 \le q \le \sqrt{2N}$,

$$
C(N, q) \;\ge\; \left(1 - \frac{1}{e}\right)\frac{q(q-1)}{2N} \;\ge\; 0.316 \cdot \frac{q(q-1)}{N}
$$

— [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]], Proposition A.1; [[GB08 - Lecture Notes on Cryptography|GB08]], Proposition A.1, with the constant $0.3$. For $q > N$ some bin receives two balls, and $C(N, q) = 1 \le (N+1)/2 \le q(q-1)/(2N)$ — standard. In particular $q \ge 1 + \sqrt{2N \ln 2}$ balls give $q(q-1) \ge 2N \ln 2$, hence a collision with probability at least $1/2$ — standard.

## Proof

Let $C_i$ be the event that ball $i$ lands in an occupied bin. At most $i - 1$ bins are occupied when ball $i$ is thrown, so $\Pr[C_i] \le (i-1)/N$, and a union bound gives $C(N, q) \le \sum_{i=1}^{q} (i-1)/N = q(q-1)/(2N)$. If balls $1, \ldots, i$ occupy distinct bins, ball $i+1$ avoids them with probability exactly $1 - i/N$, so by $1 - x \le e^{-x}$,

$$
1 - C(N, q) = \prod_{i=1}^{q-1}\left(1 - \frac{i}{N}\right) \le \prod_{i=1}^{q-1} e^{-i/N} = e^{-q(q-1)/(2N)}.
$$

For $q \le \sqrt{2N}$, $x := q(q-1)/(2N) \le 1$, and $1 - e^{-x} \ge (1 - 1/e)\,x$ on $[0, 1]$; $(1 - 1/e)/2 > 0.316$ — [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]], Appendix. The inequality $1 - e^{-x} \ge (1 - 1/e)\,x$ holds because $1 - e^{-x}$ is concave and agrees with $(1 - 1/e)\,x$ at $x = 0$ and $x = 1$ — standard.

## Two lists

Let $S$ be a set of size $N$, $A \subseteq S$ a set of size $a$, and $y_1, \ldots, y_b$ uniform elements of $S$ independent of $A$, drawn either independently or as a uniform $b$-subset. Then

$$
1 - e^{-ab/N} \;\le\; \Pr\!\left[A \cap \{y_1, \ldots, y_b\} \neq \emptyset\right] \;\le\; \frac{ab}{N}.
$$

Each $y_j$ is uniform on $S$, which gives the upper bound by a union bound. Conditioned on $A$, all $y_j$ miss $A$ with probability $(1 - a/N)^b$ in the independent case and $\prod_{j=0}^{b-1}\big(1 - a/(N-j)\big) \le (1 - a/N)^b$ in the distinct case, and $(1 - a/N)^b \le e^{-ab/N}$ — standard. Two independent uniform $n$-subsets of a set of size $n^2$ therefore meet with probability at least $1 - 1/e$, the estimate behind [[rom-to-merkle-puzzles-mer78|Merkle's puzzles in the random oracle model]] — standard.

## Non-uniform samples

Let $p$ be a distribution on a set $\calR$ of size $N$, and $y_1, \ldots, y_q$ independent samples from $p$. Then

$$
\Pr\!\left[\exists\, i < j : y_i = y_j\right] \ge C(N, q),
$$

so the uniform distribution minimizes the collision probability — standard (TODO: attribution). For $q = 1$ both sides are $0$, and for $q > N$ both are $1$. For $2 \le q \le N$, the samples are distinct with probability $P(p) := q!\, e_q(p)$, where $e_q(p) := \sum_{T \subseteq \calR,\, |T| = q} \prod_{y \in T} p_y$. For distinct $y, y' \in \calR$,

$$
e_q(p) = p_y p_{y'}\, \alpha + (p_y + p_{y'})\, \beta + \gamma,
$$

with $\alpha, \beta, \gamma \ge 0$ the elementary symmetric polynomials of degrees $q - 2$, $q - 1$, $q$ in the other coordinates; replacing $p_y$ and $p_{y'}$ by their mean keeps $p$ a distribution, keeps $p_y + p_{y'}$, and raises $p_y p_{y'}$ by $(p_y - p_{y'})^2/4$. $P$ is continuous on the simplex, which is compact, so it attains its maximum at some $p^*$. The uniform distribution has $P > 0$, so $p^*$ has at least $q$ nonzero coordinates and $\alpha > 0$ at $p^*$ for every pair $y, y'$; averaging two unequal coordinates of $p^*$ would increase $P$, so $p^*$ is uniform. Hence $P(p) \le q! \binom{N}{q} N^{-q} = \prod_{i=1}^{q-1}(1 - i/N) = 1 - C(N, q)$ — standard.

A function $h$ into $\calR$ is _regular_ if every point of $\calR$ has the same number of preimages, so that $h(x)$ for uniform $x$ is uniform on $\calR$ — [[GB08 - Lecture Notes on Cryptography|GB08]], §8.3. If $h$ is not regular, the birthday attack below may succeed with fewer trials: [[BK04 - Hash Function Balance and Its Impact on Birthday Attacks|BK04]] measure the regularity of $h$ by its _balance_, estimate the success rate of the attack as a function of it, and find that for $h$ of low balance the number of trials can be significantly less than $|\calR|^{1/2}$. TODO: state the BK04 bound in terms of balance.

## Generic collision attack

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{Birthday attack $\calA^{h}(q)$ on $h : \calD \to \calR$}
\begin{algorithmic}
\For{$i = 1, \ldots, q$}
\State $x_i \getsr \calD$; $y_i \gets h(x_i)$
\If{$y_j = y_i$ and $x_j \neq x_i$ for some $j < i$}
\Return $(x_j, x_i)$
\EndIf
\EndFor
\Return $\bot$
\end{algorithmic}
\end{algorithm}
```

This is the birthday attack of [[GB08 - Lecture Notes on Cryptography|GB08]], §8.3, Figure 8.6. For every function $h : \calD \to \calR$ and $q \ge 1$ it makes $q$ evaluations of $h$ on independent uniform inputs, stores $q$ pairs, and returns a collision of $h$ with probability at least

$$
C(|\calR|, q) - C(|\calD|, q) \;\ge\; C(|\calR|, q) - \frac{q(q-1)}{2|\calD|}.
$$

The $y_i$ are independent with $\Pr[y_i = y] = |h^{-1}(y)|/|\calD|$, so two of them coincide with probability at least $C(|\calR|, q)$ by the non-uniform bound, and the attack misses such a coincidence only if two of the $x_i$ coincide, which has probability $C(|\calD|, q)$ — standard. When $|\calD| \ge 2|\calR|$, the correction is at most half the upper birthday bound $q(q-1)/(2|\calR|)$, so for $1 \le q \le \sqrt{2|\calR|}$ the attack succeeds with probability at least

$$
\left(\frac{1}{2} - \frac{1}{e}\right) \frac{q(q-1)}{2|\calR|}
$$

— standard. A [[hash-function#collision-resistance|collision-resistant hash function]] compresses $\calD = \bits^{n}$ to $\calR = \bits^{m}$ with $m < n$, so $|\calD| \ge 2|\calR|$, and the attack run on $\hash(k, \cdot)$ wins $\Game^{\mathrm{cr}}_{\hash,\calA}(\secpar)$ with probability at least $(1/2 - 1/e) \cdot 3/8 > 1/21$ using $q = \lfloor 2^{(m+1)/2} \rfloor$ evaluations when $m \ge 3$, since then $q(q-1) \ge \frac{3}{8} \cdot 2^{m+1}$, and with probability at least $(1/2 - 1/e)\, 2^{-m}$ using $q = 2$ evaluations when $m \ge 1$, and $1 - 2^{-n} \ge 1/2$ when $m = 0$ — standard. If $m(\secpar) \le c \log \secpar$ for a constant $c$ and infinitely many $\secpar$, the second attack is efficient and has advantage at least $(1/2 - 1/e)\, \secpar^{-c}$ for those $\secpar$, which is not negligible. Collision resistance therefore requires $m(\secpar) = \omega(\log \secpar)$ — standard.

## Small-space collision search

For $f : S \to S$ with $|S| = N$ and $x_0 \in S$, the sequence $x_{i+1} := f(x_i)$ has a unique _tail length_ $\mu \ge 0$ and _cycle length_ $\ell \ge 1$ such that $x_0, \ldots, x_{\mu + \ell - 1}$ are distinct and $x_{\mu + \ell} = x_\mu$; for $i < j$, $x_i = x_j$ if and only if $i \ge \mu$ and $\ell \mid j - i$. Write $\rho := \mu + \ell$ for the number of distinct values. If $\mu \ge 1$, then $x_{\mu - 1} \neq x_{\mu + \ell - 1}$ and $f(x_{\mu - 1}) = f(x_{\mu + \ell - 1}) = x_\mu$; if $\mu = 0$, every $x_i$ lies on the cycle, where $f$ is injective, and the sequence contains no collision of $f$ — standard.

Floyd's cycle finding locates such a collision with two pointers, a tortoise $u = x_i$ and a hare $v = x_{2i}$ — standard (TODO: attribution).

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{Rho search $\calA^{f}(x_0)$ with Floyd's cycle finding}
\begin{algorithmic}
\State $u \gets f(x_0)$; $v \gets f(f(x_0))$
\Comment{$u = x_i$, $v = x_{2i}$ with $i = 1$}
\While{$u \neq v$}
\State $u \gets f(u)$; $v \gets f(f(v))$
\EndWhile
\If{$v = x_0$}
\Return $\bot$
\Comment{$\mu = 0$}
\EndIf
\State $u \gets x_0$; $u' \gets f(u)$; $v' \gets f(v)$
\While{$u' \neq v'$}
\State $u \gets u'$; $v \gets v'$; $u' \gets f(u)$; $v' \gets f(v)$
\EndWhile
\Return $(u, v)$
\Comment{$u = x_{\mu - 1}$, $v = x_{\mu - 1 + i}$}
\end{algorithmic}
\end{algorithm}
```

The first loop stops at the least $i \ge 1$ with $x_i = x_{2i}$, the least multiple of $\ell$ that is at least $\max(\mu, 1)$, so $i \le \rho$ and $x_i = x_0$ if and only if $\mu = 0$. In the second loop, after $j$ steps, $u = x_j$ and $v = x_{i + j}$; since $\ell \mid i$, $x_{j+1} = x_{i+j+1}$ first holds at $j = \mu - 1$, where $u$ lies on the tail and $v$ on the cycle. So for every $f$ and $x_0$ the algorithm returns a collision of $f$ if and only if $\mu \ge 1$, after $3i + 2\mu < 5\rho$ evaluations of $f$, and stores $O(1)$ elements of $S$ — standard.

For a uniformly random $f : S \to S$ and any fixed $x_0$, each $x_{k+1}$ is a fresh uniform value as long as $x_0, \ldots, x_k$ are distinct, so $\Pr[\rho > k] = \prod_{i=1}^{k}(1 - i/N) = 1 - C(N, k+1)$, and by $1 - x \le e^{-x}$,

$$
\mathbb{E}[\rho] = \sum_{k \ge 0} \prod_{i=1}^{k}\left(1 - \frac{i}{N}\right) \le \sum_{k \ge 0} e^{-k^2/(2N)} \le 1 + \int_0^\infty e^{-t^2/(2N)}\, dt = 1 + \sqrt{\frac{\pi N}{2}}.
$$

For $k \ge 1$, given $\rho \ge k$, the value $x_k$ is uniform on $S$, so $\rho = k$ with probability $k/N$, and then $x_k$ is uniform on $\{x_0, \ldots, x_{k-1}\}$ and equals $x_0$ with probability $1/k$; hence $\Pr[\mu = 0, \rho = k] = \Pr[\rho \ge k]/N$ and $\Pr[\mu = 0] = \mathbb{E}[\rho]/N$. The rho search therefore finds a collision of a uniformly random $f$ with probability at least $1 - (1 + \sqrt{\pi N/2})/N$, with fewer than $5 + 5\sqrt{\pi N/2}$ evaluations of $f$ in expectation and $O(1)$ memory — standard.

For $h : \bits^n \to \bits^m$ with $n > m$, a collision of $f(x) := h(x \,\|\, 0^{n-m})$ on $S = \bits^m$ is a collision of $h$. When $h$ is a [[random-oracle-model|random oracle]], $f$ is a uniformly random function on $S$ and the bounds hold with $N = 2^m$: $O(2^{m/2})$ expected queries, as for the birthday attack, but $O(1)$ memory in place of $q$ stored pairs. For a fixed $h$, applying the random-function analysis is a heuristic — standard. Pollard's $\rho$ methods for [[factoring#attacks|factoring]] and [[discrete-logarithm#attacks|discrete logarithms]] run such a search on a walk built from the instance (TODO: cite Pol75 and Pol78 here, and Floyd's algorithm). TODO: parallel collision search with distinguished points (van Oorschot–Wiener, J. Cryptology 1999).
