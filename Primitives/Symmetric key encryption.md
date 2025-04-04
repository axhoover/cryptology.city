---
aliases:
  - SE
---
# Symmetric key encryption (SE)
Symmetric key encryption (SE) is a central cryptographic primitive in theory and in practice.

## Definition
A *symmetric key encryption* SE scheme is a tuple of efficient algorithms $(\mathsf{Gen}, \mathsf{Enc}, \mathsf{Dec})$, with respect to key space $\mathcal{K}$, message space $\mathcal{M}$, and ciphertext space $\mathcal{C}$ such that
- $\mathsf{Gen}(1^{\lambda}) \to k$, is a randomized algorithm that takes a security parameter, and outputs a key $k \in \mathcal{K}$,
- $\mathsf{Enc}_k(m) \to c$, is a randomized algorithm that takes a key $k\in \mathcal{K}$ and message $m\in \mathcal{M}$, and outputs a ciphertext $c \in \mathcal{C}$,
- $\mathsf{Dec}_k(c) \to m$, is a deterministic algorithm that takes a key $k \in \mathcal{K}$ and candidate ciphertext $c \in \mathcal{C}$, and outputs either a message $m\in \mathcal{M}$
	- One may also allow $\mathsf{Dec}_k$ to output $\bot$ to indicate that a candidate ciphertext is not a valid encryption

### Correctness
A SE scheme is *correct* if for every message $m\in \mathcal{M}$, $\Pr_{k \gets \mathsf{Gen}_{k}(1^{\lambda})}[\mathsf{Dec}_k(\mathsf{Enc}_k(m)))] = 1$.

### Chosen Plaintext Attack (CPA)
The *CPA advantage* of a adversary $\mathcal{A}$ is defined as $$\text{Adv}^{\text{cpa}}_{\mathcal{A}}(\lambda) \le 2\left|\Pr[\mathcal{A}^{\mathsf{LR}_{k,b}}(1^{\lambda}) = b] - \frac{1}{2}\right|,$$ where $k \gets \mathsf{Gen}(1^{\lambda})$, $b\gets \{0,1\}$, and $\mathsf{LR}_{k,b}(m_0,m_1) = \mathsf{Enc}_k(m_b)$ is a left-right oracle, which encrypts either its left or right input based on the input $b$.

An SE scheme is *CPA-secure* if for all efficient $\mathcal{A}$, there exists a negligible function $\nu$, such that: $\text{Adv}^{\text{cpa}}_{\mathcal{A}}(\lambda)\le \nu(\lambda)$.

#### Indistinguishable from random CPA (IND\$-CPA)
The *IND\$-CPA* of a adversary $\mathcal{A}$ is defined as $$\text{Adv}^{\text{ind\$-cpa}}_{\mathcal{A}}(\lambda) \le \left|\Pr[\mathcal{A}^{\mathsf{Enc}_k}(1^{\lambda}) = 1] - \Pr[\mathcal{A}^{R}(1^{\lambda}) = 1]\right|,$$where $k \gets \mathsf{Gen}(1^{\lambda})$ and $R$ is a random response oracle, which on each query gives a uniformly random $n$-bit string (even on the same input, unlike a random oracle).

An SE scheme is *IND\$-CPA-secure* if for all efficient $\mathcal{A}$, there exists a negligible function $\nu$, such that: $\text{Adv}^{\text{ind\$-cpa}}_{\mathcal{A}}(\lambda)\le \nu(\lambda)$.

### Chosen Ciphertext Attack (CCA)
The *CCA advantage* of a adversary $\mathcal{A}$ is defined as $$\text{Adv}^{\text{cca}}_{\mathcal{A}}(\lambda) \le 2\left|\Pr[\mathcal{A}^{\mathsf{LR}_{k,b},\mathsf{Dec}_k}(1^{\lambda}) = b] - \frac{1}{2}\right|,$$ where $k \gets \mathsf{Gen}(1^{\lambda})$, $b\gets \{0,1\}$, and $\mathsf{LR}_{k,b}(m_0,m_1) = \mathsf{Enc}_k(m_b)$ is a left-right oracle, which encrypts either its left or right input based on the input $b$.

An SE scheme is *CPA-secure* if for all **admissible** $\mathcal{A}$, there exists a negligible function $\nu$, such that: $\text{Adv}^{\text{cca}}_{\mathcal{A}}(\lambda)\le \nu(\lambda)$. And adversary is ***admissible*** if it never queries $\mathsf{Dec}$ with an output of $\mathsf{LR}$, i.e., it never decrypts encryptions from the oracle (but it may query inputs which *depend* on the outputs given).
- This restriction is necessary, as otherwise $\mathcal{A}$ could trivially discover what $b$ is by querying $\mathsf{LR}(0,1)$ and decrypting the answer.


### Variations
- CCA1


## Other results
- SE can be built in a black-box way from a [[One-way function]] — Folklore?