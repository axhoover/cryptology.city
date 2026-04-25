---
aliases:
  - LWE
  - Learning with errors
  - RLWE
  - Ring Learning with errors
title: Learning with errors
---

# Learning with errors

The _learning with errors (LWE)_ assumption is a standard assumption in lattice-based cryptography, especially in post-quantum cryptography. It is a generalization of the [[learning-parity-with-noise|LPN]] assumption.

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

**(Decision) LWE is hard** for the tuple $(n,q,\chi,m)$ if for all efficient $\calA,$

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

**Search LWE is hard** for the tuple $(n,q,\chi,m)$ if for all efficient $\calA,$

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

The hardness of LWE rests on worst-case lattice problems via a quantum reduction — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]:

- Solving decision (or search) LWE on a noticeable fraction of inputs is at least as hard as quantum-approximating the **Shortest Vector Problem (GapSVP)** and the **Shortest Independent Vectors Problem (SIVP)** to within polynomial factors in the worst case
- Because GapSVP and SIVP are believed hard even for quantum computers, this gives a strong post-quantum security guarantee for LWE-based schemes
- Classical reductions (without quantum steps) are known for certain parameter regimes — see subsequent work by Peikert

## Cryptographic constructions

- **PKE from LWE**: to encrypt a bit $b$, send a random linear combination of the LWE samples plus $b \cdot \lfloor q/2 \rfloor$; decryption uses $\mathbf{s}$ to remove the LWE component — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]

# Attacks

# Variations

LWE with $q = 2$ is the [[learning-parity-with-noise|LPN]] problem, where $\chi$ is a Bernoulli distribution.

[[#Ring LWE|Ring LWE (RLWE)]] replaces the random matrix $\mathbf{A}$ with structured elements from a polynomial ring $\ZZ_q[x]/\langle f(x) \rangle$, yielding more efficient constructions at the cost of additional algebraic structure.

## Ring LWE

**Ring LWE (RLWE)** restricts LWE to the polynomial ring $R_q = \ZZ_q[x]/\langle\Phi_n(x)\rangle$, where $\Phi_n$ is the $n$-th cyclotomic polynomial (typically $\Phi_n(x) = x^n + 1$ for $n$ a power of 2). A Ring LWE sample is a pair $(a, b) \in R_q \times R_q$ where $a \getsr R_q$ is a random ring element and $b = a \cdot s + e$ for a secret $s \in R_q$ and small error $e \gets \chi^R$ drawn from an error distribution over $R_q$.

The key advantage is efficiency: the random matrix $\mathbf{A} \in \ZZ_q^{m \times n}$ in plain LWE (requiring $O(n^2)$ space) is replaced by a single ring element $a \in R_q$ (requiring $O(n \log q)$ space), and multiplication in $R_q$ can be computed in $O(n \log n)$ time via the Number Theoretic Transform (NTT). This yields:

- **Key size**: $O(n \log q)$ bits (vs. $O(n^2 \log q)$ for plain LWE)
- **Computation**: $O(n \log n)$ per operation (vs. $O(n^2)$)

Ring LWE admits a quantum worst-case to average-case reduction from the **Ideal-SVP** problem (shortest vector in ideal lattices), giving a hardness foundation analogous to LWE's reduction from SVP — [[LPR10 - On ideal lattices and learning with errors over rings|LPR10]].

Ring LWE is the basis for NewHope and is closely related to the NTRU cryptosystem.

## Module LWE

**Module LWE (MLWE)** interpolates between plain LWE (large random matrices, no algebraic structure) and Ring LWE (maximum structure, ring elements) by considering **rank-$k$ modules over $R_q$**. A Module LWE sample is:
$$\mathbf{b} = \mathbf{A} \cdot \mathbf{s} + \mathbf{e} \in R_q^m,$$
where $\mathbf{A} \in R_q^{m \times k}$ is a random module matrix, $\mathbf{s} \in R_q^k$ is the secret vector, and $\mathbf{e} \in R_q^m$ is a small error vector.

- When $k = 1$: recovers Ring LWE (one ring element per equation)
- When $k = n$: recovers plain LWE (fully unstructured, ring $R_q \cong \ZZ_q^n$)

The module structure provides a flexible trade-off between efficiency (like Ring LWE) and conservative security assumptions (less algebraic structure than Ring LWE). Module LWE is the basis for the NIST post-quantum standards:

- **Kyber / ML-KEM** (FIPS 203): IND-CCA [[key-encapsulation-mechanism|KEM]] from Module LWE with $k = 2, 3, 4$
- **Dilithium / ML-DSA** (FIPS 204): EUF-CMA [[digital-signature|digital signatures]] from Module LWE/SIS

Hardness of Module LWE reduces to worst-case problems on module lattices — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]].

## Hint LWE

**Hint LWE** augments the standard LWE problem with auxiliary "hint" information about the secret $\mathbf{s}$. Concretely, the adversary receives, in addition to LWE samples $(\mathbf{A}, \mathbf{b} = \mathbf{A}\mathbf{s} + \mathbf{e})$, one or more noisy inner products $\langle \mathbf{v}_i, \mathbf{s} \rangle + e'_i$ for known hint vectors $\mathbf{v}_i$.

Hint LWE arises in:

- **Amortized bootstrapping for FHE**: refreshing many ciphertexts simultaneously leaks hints about the bootstrapping key
- **Attacks on LWE with side channels**: partial key leakage reduces to Hint LWE
- **Leftover hash lemma applications**: certain compressed LWE constructions produce hint-like structures

The hardness of Hint LWE is closely related to LWE: mild hints (few, low-precision) can be handled by modifying the error distribution, but many exact hints break LWE entirely (since enough linear equations determine $\mathbf{s}$).
