---
title: Secret-Key PIR from Random Linear Codes
source: https://eprint.iacr.org/2025/646
authors: Caicai Chen, Yuval Ishai, Tamer Mour, Alon Rosen
venue: preprint
published: 2025-04-08
created: 2025-04-13
aliases:
  - CIMR25
  - LSN
---
# Secret-Key PIR from Random Linear Codes
URL: https://eprint.iacr.org/2025/646
Authors: Caicai Chen, Yuval Ishai, Tamer Mour, Alon Rosen

## Abstract
Private information retrieval (PIR) allows to privately read a chosen bit from an $N$-bit database $x$ with $o(N)$ bits of communication. Lin, Mook, and Wichs (STOC 2023) showed that by preprocessing $x$ into an encoded database $x^\prime$, it suffices to access only $polylog(N)$ bits of $x^\prime$ per query. This requires $|x^\prime| \ge N \cdot polylog(N)$, and prohibitively large server circuit size.

We consider an alternative preprocessing model (Boyle et al. and Canetti et al., TCC 2017), where the encoding $x^\prime$ depends on a client's short secret key. In this secret-key PIR (sk-PIR) model we construct a protocol with $O(N\epsilon)$ communication, for any constant $\epsilon > 0$, from the Learning Parity with Noise assumption in a parameter regime not known to imply public-key encryption. This is evidence against public-key encryption being necessary for sk-PIR.

Under a new conjecture related to the hardness of learning a hidden linear subspace of $\mathbb{F}_2^n$ with noise, we construct sk-PIR with similar communication and encoding size $|x^\prime| = (1 + \epsilon) \cdot N$ in which the server is implemented by a Boolean circuit of size $(4 + \epsilon) \cdot N$. This is the first candidate PIR scheme with such a circuit complexity.


# Notes
They introduce the *Learning Subspace with Noise (LSN)* conjecture. They show how to build secret-key PIR from both [[Learning Parity with Noise|LPN]] and LSN.
- Note that this will build very mildly doubly efficient PIR the way that [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]] build SK-DEPIR
- I guess secret-key PIR that is not doubly efficient could be interesting...?

How is SK-PIR different from prepreprocessing PIR?
- The secret key is independent of the PIR database
- So, first sk is generated -> then used to encode a database $x$
- But only the sk is given to decoding
- But I could preprecess the database and store the state encrypted on the server, then I could run a 2 round protocol where I download the encrypted state
	- This gives a sk 2-round DEPIR with $O(s + n/s)$ communication and computation
## Circuit Sizes
- The paper focuses on minimizing the communication and *circuit size*, rather than the sublinear runtime in the RAM/cell-probe model
	- Although, som eof their constructions also achieve this
- 
## Learning Subspace with Noise (LSN)
The **learning subspace with noise assumption** $(k,n,\mu)$-LSN asserts
- **Wait** actually is this just taken from [[DKL09 - On cryptography with auxiliary input|DKL09]]?

that for a uniformly random secret rank-$k$ matrix $\mathbf{C}\in \mathbb{F}^{k\times n}$ and any polynomial number of samples $m:= m(\lambda)$, it holds that:$$(\mathbf{c_1} + \mathbf{e}_1,\ldots, \mathbf{c}_m + \mathbf{e}_m) \approx_c (\mathbf{u}_1,\ldots,\mathbf{u}_m),$$ where $\mathbf{c}_i = \mathbf{a}_i^T \mathbf{C}$ for $\mathbf{a}_i \gets \mathbb{F}^k$, $\mathbf{e}_i$ is uniformly random in $\mathbf{F}^n$ with probability. $\mu$ and $\mathbf{e}_i = 0 \in \mathbf{F}^n$ otherwise, and $\mathbf{F}^n$ .

Essentially this means that each you take a $k$ subspace fo the $n$ dimentional latent space. Then, give $\approx(1-\mu)m$ samples of this subspace planted randomly among $\mu m$ real samples of the subspace.


**Conjecture:** For every $0< \rho < 1$, the $(k,n,\mu)$-LSN assumption holds when $k \ge \rho n$ and $\mu \ge 1 - o(1)$.
- So basically, all but a small fraction of the samples are random

### LSN facts
1. If $\mu < 1-(k/n)^d$, there is a $n^{O(d)}$-time LSN distinguisher
2. For a constant code rate $\rho = k/n$ and $\eta = 1-\mu = o(1)$, $(k,n,\mu)$-LSN implies LPN with code dimension $k$, code length $k(1+\Omega(\eta))$, and noise rate $\eta$
3. LPN with noise rate $\varepsilon$ implies a variant of LSN with the following noise pattern: Let $I$ be a random set of $k$ linearly independent columns of $\mathbf{C}$.Then, for each sampled codeword $\mathbf{c}_i$, flip each bit *outside* $I$ with $\varepsilon$ probability.
4. [[CDV21 - Learning a mixture of two subspaces over finite fields|CDV21]] showed that when $n = k+1$, the *search version* of the LSN assumption of $\mathbb{F}_2$ is equivalent to teh standard LPN assumption with noise rate $\mu/2$


## Split LSN
