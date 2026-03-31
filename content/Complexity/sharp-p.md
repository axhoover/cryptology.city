---
aliases:
  - "#P"
  - Sharp-P
  - SharpP
title: "#P"
---

# #P

The class of counting problems associated with NP decision problems. Formally, a function $f : \{0,1\}^* \to \mathbb{N}$ is in $\classsharpP$ if there exists a nondeterministic polynomial-time Turing machine $M$ such that $f(x)$ equals the number of accepting computation paths of $M$ on input $x$.

Where NP asks "does a solution exist?", $\classsharpP$ asks "how many solutions exist?" The counting version of a problem can be dramatically harder than the decision version.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:S#sharpp).

## Known relationships

- Every $\classsharpP$ function can be computed in polynomial time with a PP oracle: $\classsharpP \subseteq \classFP^{\classPP}$.
- **Toda's theorem**: $\mathbf{PH} \subseteq \classP^{\classsharpP}$ — TODO citation (Toda 1991). The entire polynomial hierarchy can be decided in polynomial time with access to a single $\classsharpP$ oracle, which is a remarkable collapse of complexity.
- $\classsharpP$-hardness implies NP-hardness (under polynomial-time Turing reductions): if you can count solutions in polynomial time, you can certainly decide existence.
- Approximate counting (computing a $(1 \pm \varepsilon)$-multiplicative approximation) is sometimes feasible when exact counting is $\classsharpP$-hard. For self-reducible problems in NP, approximate counting reduces to approximate uniform sampling (Jerrum-Valiant-Vazirani) — TODO citation.

## Notable problems

- **Permanent of a 0-1 matrix**: the seminal result of Valiant (1979) shows that computing the permanent $\mathrm{perm}(A) = \sum_{\sigma \in S_n} \prod_{i} A_{i,\sigma(i)}$ is $\classsharpP$-complete — TODO citation. The permanent counts the number of perfect matchings in a bipartite graph. This is in striking contrast to the determinant, which is computable in polynomial time.
- **#SAT**: counting the number of satisfying assignments to a Boolean formula is $\classsharpP$-complete.
- **#Perfect matchings**: counting the perfect matchings of a general graph is $\classsharpP$-complete.
