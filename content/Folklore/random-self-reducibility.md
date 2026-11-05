---
type: folklore
status: draft
aliases:
  - Random self-reducibility
  - Random self-reduction
title: Random self-reducibility
id: random-self-reducibility
---

# Random self-reducibility

A problem is **random self-reducible** if every instance can be solved by an efficient algorithm that queries a solver only on instances each distributed independently of the original instance, typically uniformly over instances of the same size. For a reduction making one query, an algorithm that succeeds on a noticeable fraction of instances then succeeds, with repetition and a way to check answers, on every instance with overwhelming probability; for one making $k$ queries and correct whenever all $k$ answers are, an algorithm failing on at most a $1/(3k)$ fraction of each query distribution suffices, by a union bound and a majority vote. Either way average-case and worst-case hardness coincide over the query distribution (for the examples below, within a fixed group, modulus or matrix $\mathbf{A}$) — standard. [[FF93 - Random-Self-Reducibility of Complete Sets|FF93]] give a formal treatment, with non-adaptive reductions whose query distributions depend only on the length of the input.

## Examples

- **[[discrete-logarithm|Discrete logarithm]].** In a cyclic group $\langle g \rangle$ of known order $q$, an instance $y = g^x$ maps to the uniform instance $y g^r$ for $r \getsr \ZZ_q$, and a logarithm $x + r$ of it gives $x$; answers are checked by exponentiation, so a solver correct on an $\varepsilon$ fraction of the group gives one correct on every instance after an expected $1/\varepsilon$ queries — standard.
- **[[rsa-assumption|RSA]].** An instance $y = x^e \bmod N$ maps to $y r^e = (xr)^e$ for $r \getsr \ZZ_N^*$, a uniform instance, and an $e$-th root of it divided by $r$ gives $x$ — standard.
- **[[computational-diffie-hellman|Computational Diffie–Hellman]].** $(g^a, g^b)$ maps to $(g^{a + r}, g^{b + s})$ for $r, s \getsr \ZZ_q$ with $q$ the order of $g$, whose answer $g^{(a+r)(b+s)}$ yields $g^{ab}$ after dividing by $(g^a)^s (g^b)^r g^{rs}$. Answers cannot be checked without a [[decisional-diffie-hellman|DDH]] oracle, but a CDH solver correct on a noticeable fraction of instances can still be turned into one correct on every instance with overwhelming probability — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]].
- **Decisional Diffie–Hellman.** In a group of prime order, a tuple $(g, g^a, g^b, g^c)$ can be mapped to a uniform Diffie–Hellman tuple when $c = ab$ and to a uniform tuple otherwise, and from one tuple to any number of independent such tuples, so DDH is as hard for many instances as for one — [[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]].
- **[[quadratic-residuosity|Quadratic residuosity]].** For $x$ of Jacobi symbol $+1$ modulo $N = pq$ for distinct odd primes $p, q$, the element $x r^2$ for $r \getsr \ZZ_N^*$ is uniform among residues if $x$ is a residue and uniform among non-residues with Jacobi symbol $+1$ otherwise — standard.
- **LWE.** Samples $(\mathbf{A}, \mathbf{A}\mathbf{s} + \mathbf{e})$ map to $(\mathbf{A}, \mathbf{A}(\mathbf{s} + \mathbf{s}') + \mathbf{e})$ for a uniform $\mathbf{s}'$, so a worst-case secret reduces to a uniform one — standard. [[shortest-integer-solution|SIS]] has a worst-case to average-case reduction from lattice problems — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]] — and [[learning-with-errors|LWE]] a quantum one — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]; in both the worst case is over lattices, not secrets.

## Limits for NP-complete problems

If an $\classNP$-complete language is non-adaptively random self-reducible, then $\classcoNP \subseteq \classNP/\mathrm{poly}$ and the [[polynomial-time-hierarchy|polynomial hierarchy]] collapses to its third level — [[FF93 - Random-Self-Reducibility of Complete Sets|FF93]]. More generally, a non-adaptive reduction from deciding an $\classNP$-complete language in the worst case to deciding some $\classNP$ language on average over a polynomial-time samplable distribution has the same consequence ([[no-np-to-np-average-case-hardness-bt03|No non-adaptive reduction from NP to average-case NP hardness]]) — [[BT03 - On Worst-Case to Average-Case Reductions for NP Problems|BT03]].
