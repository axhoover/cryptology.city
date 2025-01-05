---
aliases:
  - PRC
---
# Pseudorandom error-correcting code (PRC)
A Pseudorandom Error-correcting Code (PRC) is a type of [[Symmetric key encryption]] that requires ciphertext decoding to be *robust* to some modifications edits, introduced by [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]. There is additionally a *zero-bit PRC* which does not allow for a message. Both variations are useful for constructing cryptographic watermarking of generative AI.

## Definition
A $L$-bit PRC is a tuple of efficient algorithms $(\mathsf{Gen}, \mathsf{Enc}, \mathsf{Dec})$, with respect to key space $\mathcal{K}$, message space $\{0,1\}^L$, and ciphertext space $\{0,1\}^n$ such that
- $\mathsf{Gen}(1^{\lambda}) \to k$, is a randomized algorithm that takes a security parameter, and outputs a key $k \in \mathcal{K}$,
- $\mathsf{Enc}_k(m) \to c$, is a randomized algorithm that takes a key $k\in \mathcal{K}$ and message $m\in \{0,1\}^L$, and outputs a ciphertext $c \in \{0,1\}^n$,
- $\mathsf{Dec}_k(c) \to \{m,\bot\}$, is a deterministic algorithm that takes a key $k \in \mathcal{K}$ and candidate ciphertext $c \in \{0,1\}^n$, and outputs either a message $m\in \{0,1\}^L$ or $\bot$

A *zero-bit* PRC, has the same requirements as a $L$-bit PRC, except that the message space is just the singleton set $\{1\}$, which means that $\mathsf{Enc}$ is inputless and just outputs codewords. Then, $\mathsf{Dec}$ simply detects whether or not the candidate ciphertext is close to a codeword.

### Pseudorandomness/Security
We define the advantage of a distinguisher $D$ as $$\text{Adv}^{\text{prc}}_D(\lambda) \le \left|\Pr[D^{\mathsf{Enc}_k}(1^{\lambda}) = 1] - \Pr[D^{R}(1^{\lambda}) = 1]\right|,$$where $k \gets \mathsf{Gen}(1^{\lambda})$ and $R$ is a random response oracle, which on each query gives a uniformly random $n$-bit string (even on the same input, unlike a random oracle).

A PRC is *pseudorandom* if for all efficient $D$, there exists a negligible function $\nu$, such that: $\text{Adv}^{\text{prc}}_D(\lambda)\le \nu(\lambda)$.

### Completeness/Robustness
A PRC is $\varepsilon$-robust if there is a negligible function $\nu$, such that for every message $m$, $$\Pr[\mathsf{De}c_k(\mathcal{E}(\mathsf{En}c_k(m))) \ne m] \le \nu(\lambda),$$where $k \gets \mathsf{Gen}(1^{\lambda})$ and $\mathcal{E}$ is any $\varepsilon$-bounded channel. Meaning that $\mathcal{E}$ is a length preserving function with the property that for every $n$-bit string $c$, $|\mathcal{E}(c) - c| \le \varepsilon \cdot n$.


### Soundness
A PRC is *sound* if there is a negligible function $\nu$, such that for all $\hat{c}$, $$\Pr_{k \gets \mathsf{Gen}({1^{\lambda})}}[\mathsf{Dec}_k(\hat{c}) = \bot] \le \nu(\lambda).$$


### Variations
Adaptive robustness — TODO

Ideal PRC — TODO


## Other results
