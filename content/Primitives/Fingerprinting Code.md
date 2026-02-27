---
aliases:
  - FP Code
---
# Fingerprinting Codes
Fingerprinting codes were first introduced by [[BS98 - Collusion-secure fingerprinting for digital data|BS98]]. A fingerprinting code is a process to produce codewords for users. If a group of these users collude to adversarially produce a new codeword, then a fingerprinting code guarantees that the distributor can trace the new word back to these colluders with high probability.
## Definition
For fingerprinting codes, it is useful to define the **descendants function** $\mathsf{desc}(\cdot)$, which maps subsets of codewords in $\Sigma^\ell$ to other subsets in the same space. Formally, if index $i$ as character $\sigma$, then there must be some $x_j$ which also has that character at index $i$. This captures the idea that a group of colluding pirates may be able to selectively choose their codewords, but they cannot forge characters at indices they didn't have access to.

### Syntax
A *fingerprinting code* is a tuple of functions $(\mathsf{Gen}, \mathsf{Trace})$ with respect to a keyspace $\mathcal{K}$, alphabet $\Sigma$, number of users $n$, and codeword length $\ell = \ell(\epsilon, c)$, which depends on the error threshold such that:

Note: The fingerprinting code functions are not strictly "efficient," since for example $\mathsf{G}_\mathsf{en}$ can take in $\mathcal{O}(\log n)$ bits and outputs $\Omega(n)$ bits. However, we generally require that both functions run in time that is polynomial in $n$ and $\log |\Sigma|$.

### Correctness
A fingerprinting code is correct if for any $0 \leq \epsilon \leq 1$, set of colluding users $\mathcal{C} \subseteq [n]$, and $y \in \mathsf{desc}(\{x_i: i \in \mathcal{C}\})$, we have that:

$$\mathsf{Gen}(\epsilon, |\mathcal{C}|) = (k, x_1, \ldots, x_n) \implies \Pr[\mathsf{Trace}(y, x_1, \ldots, x_n) \in \mathcal{C}] \geq 1 - \epsilon$$

In more plain English, this definition means that the fingerprinting code is useful and correct with probability at least $1 - \epsilon$ as long as code generation is given the maximum size of the possible collusion as input. The first condition in the probability means that the trace does not accuse an innocent (non-colluding) user. The second condition makes sure that the trace algorithm does at least accuse some user though.

**Note**: One can also define fingerprinting codes with respect to a security parameter $1/\lambda$ and require error that is negligible in the security parameter. But, this follows immediately from the above definition by setting $\epsilon = 2^{-\lambda}$.
### Variations
- Robust fingerprinting codes allow the colluding parties to additionally erase some of the codeword bits. There are additional variants between the type of erasures that are allowed.

## Other results


### Constructions
- There exist fingerprinting codes of length $O(c^2 \log (n / \varepsilon))$ — [[Tar08 - Optimal probabilistic fingerprint codes|Tar08]]
	- This is also the optimal length of FP codes