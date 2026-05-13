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

**Hint LWE** augments standard LWE with auxiliary "hint" information about the secret $\mathbf{s}$ — [[DDRG20 - LWE with Side Information Attacks and Concrete Security Estimation|DDRG20]]. The adversary receives, in addition to the LWE challenge, $\ell$ hint pairs $(\mathbf{v}_i,\, \mathbf{v}_i^\top\mathbf{s} + e'_i)$ for known vectors $\mathbf{v}_i$ and small noise $e'_i \getsr \chi'$. Both the LWE samples and the hints share the same secret $\mathbf{s}$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{hlwe}}_{n,q,\chi,\chi',m,\ell,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{A} \getsr \ZZ_q^{m \times n}$; $\mathbf{s} \getsr \ZZ_q^n$; $\mathbf{e} \getsr \chi^m$
\State $\mathbf{v}_1, \ldots, \mathbf{v}_\ell \getsr \ZZ_q^n$; $e'_1, \ldots, e'_\ell \getsr \chi'$
\State $h_i \gets \mathbf{v}_i^\top \mathbf{s} + e'_i$ for each $i \in [\ell]$
\Comment{Hints computed from the same $\mathbf{s}$ in both worlds}
\State $b \getsr \bits$
\State $\mathbf{u}_0 \gets \mathbf{A}\mathbf{s} + \mathbf{e}$; $\mathbf{u}_1 \getsr \ZZ_q^m$
\State $b' \gets \calA(1^\secpar, \mathbf{A}, \mathbf{u}_b,\, \{(\mathbf{v}_i, h_i)\}_{i \in [\ell]})$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

**Hint LWE is hard** for $(n,q,\chi,\chi',m,\ell)$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{hlwe}}_{n,q,\chi,\chi',m,\ell,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{hlwe}}_{n,q,\chi,\chi',m,\ell,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

Hint LWE arises in:

- **Amortized FHE bootstrapping**: refreshing many ciphertexts simultaneously leaks hints about the bootstrapping key — [[DDRG20 - LWE with Side Information Attacks and Concrete Security Estimation|DDRG20]]
- **Side-channel and leakage attacks**: partial key leakage from implementation attacks can be modeled as hint information, enabling lattice reduction with fewer samples — [[DDRG20 - LWE with Side Information Attacks and Concrete Security Estimation|DDRG20]]

The hardness depends sensitively on the number and precision of hints: few low-precision hints can be absorbed by adjusting the error distribution (LWE remains hard), but enough exact hints determine $\mathbf{s}$ entirely and break the assumption.

## Evasive LWE

**Evasive LWE** is a non-standard strengthening of decision LWE, introduced by Wee — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]] — to construct optimal [[broadcast-encryption|broadcast encryption]] and [[attribute-based-encryption|attribute-based encryption]]. Unlike a single-game hardness assumption, it is stated as an **implication** between two indistinguishability conditions, quantified over a PPT sampler.

The assumption is parameterized by a PPT sampler $\mathrm{Samp}$ that on input $1^\secpar$ produces:

- $\mathbf{A}' \in \ZZ_q^{n \times m'}$ — an auxiliary LWE matrix,
- $\mathbf{P} \in \ZZ_q^{n \times t}$ — a target matrix (with $m \le t$, so $\mathbf{P}$ is at least as wide as $\mathbf{B}$),
- $\mathrm{aux} \in \{0,1\}^*$ — auxiliary information, required to contain $\mathrm{Samp}$'s coin tosses (public-coin restriction).

The matrix $\mathbf{B} \in \ZZ_q^{n \times m}$ (with $m = O(n \log q)$) is produced by $\mathrm{TrapGen}(1^n, q)$, a standard lattice trapdoor algorithm yielding $\mathbf{B} \approx_s \mathrm{Uniform}(\ZZ_q^{n \times m})$ alongside a trapdoor $\tau$. The notation $\mathbf{B}^{-1}(\mathbf{P}, \sigma)$ denotes a matrix $\mathbf{K} \in \ZZ^{m \times t}$ sampled from the discrete Gaussian with parameter $\sigma = O(\sqrt{m \log q})$ conditioned on $\mathbf{B}\mathbf{K} = \mathbf{P} \pmod{q}$; sampling requires $\tau$ but $\tau$ is never given to the adversary.

The two games below use the row-vector convention from [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]], where $\mathbf{s} \in \ZZ_q^n$ acts on the left of $n \times m$ matrices (so LWE samples take the form $\mathbf{sB}+\mathbf{e}$). The **PRE-condition** game gives the adversary $\mathbf{P}$ and an LWE sample under $\mathbf{P}$; the **POST-condition** game replaces $(\mathbf{P},\, \mathbf{sP}+\mathbf{e}'')$ with the short preimage $\mathbf{K}$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{pre}}_{\mathrm{eLWE},\calA_0}(\secpar)$}
\begin{algorithmic}
\State $(\mathbf{A}', \mathbf{P}, \mathrm{aux}) \gets \mathrm{Samp}(1^\secpar)$
\State $(\mathbf{B}, \tau) \gets \mathrm{TrapGen}(1^n, q)$
\Comment{$\tau$ not given to $\calA_0$}
\State $\mathbf{s} \getsr \ZZ_q^n$; $b \getsr \bits$
\State $\mathbf{e} \getsr \chi^m$; $\mathbf{e}' \getsr \chi^{m'}$; $\mathbf{e}'' \getsr \chi^t$
\State $\mathbf{u}_0 \gets \mathbf{s}\mathbf{B} + \mathbf{e}$; $\mathbf{u}_1 \getsr \ZZ_q^m$
\State $\mathbf{v}_0 \gets \mathbf{s}\mathbf{A}' + \mathbf{e}'$; $\mathbf{v}_1 \getsr \ZZ_q^{m'}$
\State $\mathbf{w}_0 \gets \mathbf{s}\mathbf{P} + \mathbf{e}''$; $\mathbf{w}_1 \getsr \ZZ_q^t$
\State $b' \gets \calA_0(1^\secpar, \mathbf{A}', \mathbf{B}, \mathbf{P}, \mathrm{aux}, \mathbf{u}_b, \mathbf{v}_b, \mathbf{w}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{post}}_{\mathrm{eLWE},\calA_1}(\secpar)$}
\begin{algorithmic}
\State $(\mathbf{A}', \mathbf{P}, \mathrm{aux}) \gets \mathrm{Samp}(1^\secpar)$
\State $(\mathbf{B}, \tau) \gets \mathrm{TrapGen}(1^n, q)$
\State $\mathbf{K} \gets \mathbf{B}^{-1}(\mathbf{P}, \sigma)$ using $\tau$
\Comment{$\mathbf{BK} = \mathbf{P} \pmod{q}$, cols of $\mathbf{K}$ short}
\State $\mathbf{s} \getsr \ZZ_q^n$; $b \getsr \bits$
\State $\mathbf{e} \getsr \chi^m$; $\mathbf{e}' \getsr \chi^{m'}$
\State $\mathbf{u}_0 \gets \mathbf{s}\mathbf{B} + \mathbf{e}$; $\mathbf{u}_1 \getsr \ZZ_q^m$
\State $\mathbf{v}_0 \gets \mathbf{s}\mathbf{A}' + \mathbf{e}'$; $\mathbf{v}_1 \getsr \ZZ_q^{m'}$
\State $b' \gets \calA_1(1^\secpar, \mathbf{A}', \mathbf{B}, \mathbf{K}, \mathrm{aux}, \mathbf{u}_b, \mathbf{v}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

Define the corresponding advantage functions:

$$
\Adv^{\mathrm{pre}}_{\mathrm{eLWE},\calA_0}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{pre}}_{\mathrm{eLWE},\calA_0}(\secpar) = 1\right] - 1\right|
$$

$$
\Adv^{\mathrm{post}}_{\mathrm{eLWE},\calA_1}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{post}}_{\mathrm{eLWE},\calA_1}(\secpar) = 1\right] - 1\right|
$$

**Evasive LWE is hard** if for every PPT $\mathrm{Samp}$ and every PPT $\calA_1$, there exists a PPT $\calA_0$ and a polynomial $Q$ such that

$$
\Adv^{\mathrm{pre}}_{\mathrm{eLWE},\calA_0}(\secpar) \;\geq\; \frac{\Adv^{\mathrm{post}}_{\mathrm{eLWE},\calA_1}(\secpar)}{Q(\secpar)} - \negl(\secpar).
$$

In other words: if standard LWE remains hard even when $\mathbf{P}$ is given in the clear (pre-condition), then it remains hard even when the short preimage $\mathbf{K}$ is given instead (post-condition). The implication is designed to defeat _zeroizing attacks_: an adversary holding $\mathbf{K}$ could attempt to compute $\mathbf{sP} \approx (\mathbf{sB}+\mathbf{e})\mathbf{K}$ and then distinguish — but the pre-condition already asserts that $\mathbf{sP}+\mathbf{e}''$ is pseudorandom, so this route first violates the pre-condition. Evasive LWE posits that $\mathbf{K}$ grants no additional distinguishing power beyond $\mathbf{P}$ itself.

The public-coin restriction — that $\mathrm{aux}$ contains $\mathrm{Samp}$'s coin tosses — prevents obfuscation-based counterexamples where $\mathrm{aux}$ encodes a program with a hidden trapdoor for $\mathbf{P}$ — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]].

The assumption comes in public-coin and private-coin variants. Private-coin variants have known counterexamples — [[BUW24 - Evasive LWE Assumptions Definitions Classes and Counterexamples|BUW24]], [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]]. A _circular_ variant of evasive LWE was proposed for ABE for unbounded-depth circuits, but has also been shown vulnerable to zeroizing attacks — [[AMYY25 - Evasive LWE Attacks, Variants & Obfustopia|AMYY25]].

## Succinct LWE

**Succinct LWE** is a falsifiable, single-game strengthening of LWE introduced by Wee — [[Wee25 - Almost Optimal KP and CP-ABE for Circuits from Succinct LWE|Wee25]] — for constructing KP- and CP-ABE for circuits with $O(1)$-size ciphertexts and keys. Unlike [[#Evasive LWE|Evasive LWE]] (an implication between two conditions), it is a standard indistinguishability game: an LWE sample $(\mathbf{B}, \mathbf{s}\mathbf{B}+\mathbf{e})$ is indistinguishable from uniform even when the adversary is given a short matrix $T$ satisfying $[I_\ell \otimes \mathbf{B} \mid \mathbf{W}] \cdot T = I_\ell \otimes \mathbf{G}$, where $\ell = \poly(\secpar)$ and $\mathbf{G}$ is the MP12 gadget matrix.

The public parameters $\mathsf{pp}_\ell = (\mathbf{B}, \mathbf{W}, T)$ are generated in three steps. First, $(\mathbf{B}, T_\mathbf{B}) \gets \mathrm{TrapGen}(1^n, 1^m, q)$ — the Micciancio-Peikert lattice trapdoor algorithm — [[MP12 - Trapdoors for Lattices Simpler Tighter Faster Smaller|MP12]] (building on [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]]) — outputs $\mathbf{B} \in \ZZ_q^{n \times m}$ statistically close to uniform together with a short trapdoor $T_\mathbf{B}$ satisfying $\mathbf{B} T_\mathbf{B} = \mathbf{G}$. The gadget matrix $\mathbf{G} = \mathbf{G}_n = I_n \otimes \mathbf{g}^\top \in \ZZ_q^{n \times m}$, with $m = n\lceil \log q \rceil$ and $\mathbf{g} = (1, 2, 4, \ldots, 2^{\lceil \log q \rceil - 1})$, has the property that short preimages of any target can be computed efficiently given $T_\mathbf{B}$ — [[MP12]]. Second, $\mathbf{W} \getsr \ZZ_q^{\ell n \times m}$ is sampled uniformly. Third, $T \gets \mathrm{SamplePre}([I_\ell \otimes \mathbf{B} \mid \mathbf{W}],\, I_\ell \otimes T_\mathbf{B},\, I_\ell \otimes \mathbf{G},\, \sigma)$ uses the block trapdoor $I_\ell \otimes T_\mathbf{B}$ (for the $I_\ell \otimes \mathbf{B}$ columns) to sample a short Gaussian matrix $T \in \ZZ^{(\ell+1)m \times \ell m}$ satisfying $[I_\ell \otimes \mathbf{B} \mid \mathbf{W}] \cdot T = I_\ell \otimes \mathbf{G} \pmod{q}$, with $\sigma = O(\sqrt{\ell m \log q})$.

The trapdoor $T_\mathbf{B}$ is discarded after setup; only $\mathsf{pp}_\ell = (\mathbf{B}, \mathbf{W}, T)$ is made public. Because $T \in \ZZ^{(\ell+1)m \times \ell m}$, the parameters have size $O(\ell^2)$ in $\lambda$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sLWE}}_{\ell,n,q,\chi,m,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\mathbf{B}, T_\mathbf{B}) \gets \mathrm{TrapGen}(1^n, 1^m, q)$
\Comment{$\mathbf{B} \approx_s \mathrm{Uniform}(\ZZ_q^{n \times m})$; $\mathbf{B} T_\mathbf{B} = \mathbf{G}$}
\State $\mathbf{W} \getsr \ZZ_q^{\ell n \times m}$
\State $T \gets \mathrm{SamplePre}([I_\ell \otimes \mathbf{B} \mid \mathbf{W}],\; I_\ell \otimes T_\mathbf{B},\; I_\ell \otimes \mathbf{G},\; \sigma)$
\Comment{$[I_\ell \otimes \mathbf{B} \mid \mathbf{W}] \cdot T = I_\ell \otimes \mathbf{G}$; $T$ short, $T_\mathbf{B}$ not given to $\calA$}
\State $\mathbf{s} \getsr \ZZ_q^n$; $\mathbf{e} \getsr \chi^m$; $b \getsr \bits$
\State $\mathbf{u}_0 \gets \mathbf{s}\mathbf{B} + \mathbf{e}$; $\mathbf{u}_1 \getsr \ZZ_q^m$
\State $b' \gets \calA(1^\secpar, \mathbf{B}, \mathbf{W}, T, \mathbf{u}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

The game uses the row-vector convention of Wee25 ($\mathbf{s} \in \ZZ_q^n$ acts on the left of $\mathbf{B} \in \ZZ_q^{n \times m}$), matching the [[#Evasive LWE|Evasive LWE]] section above.

**$\ell$-Succinct LWE is hard** if for all efficient $\calA$,

$$
\Adv^{\mathrm{sLWE}}_{\ell,n,q,\chi,m,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sLWE}}_{\ell,n,q,\chi,m,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. When $\ell = 1$ there is no $\mathbf{W}$ block and $T$ reduces to $T_\mathbf{B}$ itself, making the condition equivalent to standard LWE. The assumption strengthens as $\ell$ grows — larger $\ell$ allows encoding more circuit-depth information in the trapdoor structure. Succinct LWE implies Evasive LWE. A circular small-secret variant (where the trapdoor preimage is related to a low-norm secret) is also used in applications.

The primary application is attribute-based encryption with $O(1)$-size ciphertexts and secret keys for arbitrary circuits — [[Wee25 - Almost Optimal KP and CP-ABE for Circuits from Succinct LWE|Wee25]].
