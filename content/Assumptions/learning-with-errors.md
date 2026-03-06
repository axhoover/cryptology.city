---
aliases:
  - LWE
  - Learning with errors
  - RLWE
  - Ring Learning with errors
title: Learning with errors

---
# Learning with errors
The *learning with errors (LWE)* assumption is a standard assumption in lattice-based cryptography, especially in post-quantum cryptography. It is a generalization of the [[learning-parity-with-noise|LPN]] assumption.

## Assumption
Informally, the LWE problem concerns solving a system of noisy linear equations over $\ZZ_q$. Given $m$ random linear equations in $n$ variables, the goal is to find a secret vector $\mathbf{s} \in \ZZ_q^n$. Without errors the system can be solved in polynomial time by Gaussian elimination; the LWE assumption states that adding a small additive error $\mathbf{e}$ drawn from an error distribution $\chi$ makes the problem hard.

The assumption is parameterized by a lattice dimension $n$ (which also serves as the security parameter), a modulus $q$, an error distribution $\chi$ over $\ZZ_q$, and a sample count $m$.

### Decision LWE
In the decision variant, the adversary must distinguish LWE samples $(\mathbf{A}, \mathbf{As}+\mathbf{e})$ from uniformly random pairs $(\mathbf{A}, \mathbf{u})$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{lwe}}_{n,q,\chi,m,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{A} \getsr \ZZ_q^{m \times n}$ ; $\mathbf{s} \getsr \ZZ_q^n$ ; $\mathbf{e} \getsr \chi^m$
\State $b \getsr \bits$
\State $\mathbf{u}_0 \gets \mathbf{A}\mathbf{s} + \mathbf{e}$ ; $\mathbf{u}_1 \getsr \ZZ_q^m$
\State $\hat{b} \gets \calA(1^\secpar, \mathbf{A}, \mathbf{u}_b)$
\Return $[\hat{b} = b]$
\end{algorithmic}
\end{algorithm}
```

**(Decision) LWE is hard** for the tuple $(n,q\chi,m)$ if for all efficient $\calA,$

$$
\Adv^{\text{lwe}}_{n,q,\chi,m,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\text{lwe}}_{n,q,\chi,m,\calA}(\secpar)=1\right]-1\right|
$$

is negligible.

### Search LWE
In the search variant, the adversary must recover the secret $\mathbf{s}$ from LWE samples.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{slwe}}_{n,q,\chi,m,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{A} \getsr \ZZ_q^{m \times n}$ ; $\mathbf{s} \getsr \ZZ_q^n$ ; $\mathbf{e} \getsr \chi^m$
\State $\hat{\mathbf{s}} \gets \calA(1^\secpar, \mathbf{A},\, \mathbf{A}\mathbf{s}+\mathbf{e})$
\Return $[\hat{\mathbf{s}} = \mathbf{s}]$
\end{algorithmic}
\end{algorithm}
```

**Search LWE is hard** for the tuple $(n,q\chi,m)$ if for all efficient $\calA,$

$$
\Adv^{\text{slwe}}_{n,q,\chi,m,\calA}(\secpar) := \Pr\!\left[\Game^{\text{slwe}}_{n,q,\chi,m,\calA}(\secpar)=1\right]
$$

is negligible.

## Known Results
### Search–Decision equivalence
The search and decision variants of LWE are equivalent — breaking one suffices to break the other.

**Search $\Rightarrow$ Decision** (easy direction): A search solver $\calA_s$ gives a decision adversary for free. Given a challenge $(\mathbf{A}, \mathbf{u})$, run $\hat{\mathbf{s}} \gets \calA_s(\mathbf{A}, \mathbf{u})$ and check whether $\mathbf{u} - \mathbf{A}\hat{\mathbf{s}}$ is small (i.e., looks like a sample from $\chi^m$). If so, guess $b=0$ (LWE world); otherwise guess $b=1$ (uniform world).

**Decision $\Rightarrow$ Search** (hard direction): Recover $\mathbf{s}$ one coordinate at a time. For each index $i \in [n]$ and each candidate $\ell \in \ZZ_q$, construct modified samples that effectively zero out the contribution of $\mathbf{s}[i]$ under the hypothesis $\mathbf{s}[i] = \ell$, then query the decision oracle to test whether the result is still an LWE instance or has become uniform. The candidate that keeps the distribution looking like LWE reveals the true $\mathbf{s}[i]$. Running over all $n \cdot q$ pairs uses $O(q \cdot n \cdot m)$ samples in total when decision can be broken with $m$ samples.

# Reduction to lattice problems
- Reduction to lattice problems (TODO)

# Attacks


# Variations
LWE with $q = 2$ is the [[learning-parity-with-noise|LPN]] problem, where $\chi$ is a Bernoulli distribution.

[[#Ring LWE|Ring LWE (RLWE)]] replaces the random matrix $\mathbf{A}$ with structured elements from a polynomial ring $\ZZ_q[x]/\langle f(x) \rangle$, yielding more efficient constructions at the cost of additional algebraic structure.


## Ring LWE


## Module LWE



## Hint LWE