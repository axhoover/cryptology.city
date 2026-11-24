---
type: complexity-class
status: draft
aliases:
  - BQP
  - Bounded-Error Quantum Polynomial-Time
title: Bounded-Error Quantum Polynomial-Time
id: bqp
---

# Bounded-Error Quantum Polynomial-Time

The class of decision problems decided by a polynomial-time uniform family $\{C_n\}$ of polynomial-size quantum circuits over the gate set $\{H, \mathrm{CNOT}, T\}$, measured in the computational basis, with two-sided bounded error:

1. If the answer is "yes," the circuit accepts with probability at least 2/3.
2. If the answer is "no," the circuit accepts with probability at most 1/3.

BQP is the quantum analogue of [[bounded-error-probabilistic-polynomial-time|BPP]] and is the standard model for efficient quantum computation.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:B#bqp).

## Notable problems

- **Integer factorization** and **discrete logarithms** in $\ZZ_p^*$ are in $\classBQP$ via Shor's algorithm — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]], the journal version of [[Shor94 - Algorithms for Quantum Computation Discrete Logarithms and Factoring|Shor94]] ([[fac-to-bqp-shor97|FAC ∈ BQP]], [[bqp-to-dlog-shor97|DLOG ⊆ BQP]]). The discrete-logarithm algorithm carries over to elliptic-curve groups: over an $n$-bit prime field it runs with $O(n^3)$ gates and roughly $6n$ qubits — [[PZ03 - Shor's discrete logarithm quantum algorithm for elliptic curves|PZ03]] (Section 6).
- **Unstructured search** among $N$ candidates takes $\Theta(\sqrt{N})$ quantum queries ([[#grover-search|Grover search]]). The speedup is only quadratic: relative to a random oracle, with probability 1, $\classNP$ is not contained in the class of languages decided by bounded-error quantum Turing machines in time $o(2^{n/2})$ — [[BBBV97 - Strengths and Weaknesses of Quantum Computing|BBBV97]] (Theorem 3.5; [[no-np-to-bqp-bbbv97|No relativizing reduction from NP to BQP]]).

## Grover search

Let $f : \bits^n \to \bits$ have $t \ge 1$ solutions among $N = 2^n$ inputs, queried as the phase oracle $|x\rangle \mapsto (-1)^{f(x)}|x\rangle$, and let $0 < \theta \le \pi/2$ satisfy $\sin^2\theta = t/N$. Grover's algorithm prepares the uniform superposition and repeats one query followed by the inversion about the mean $D = WRW$, where $W$ is the Walsh–Hadamard transform and $R$ flips the sign of every basis state except $|0^n\rangle$. For $t = 1$ and $N \ge 4$, some number of iterations below $\sqrt{2N}$ makes the measured outcome the solution with probability greater than $1/2$ — [[Grover96 - A fast quantum mechanical algorithm for database search|Grover96]]. After $j$ iterations the outcome is a solution with probability exactly $\sin^2((2j+1)\theta)$, so $\lfloor \pi/(4\theta) \rfloor \le (\pi/4)\sqrt{N/t}$ iterations fail with probability at most $t/N$; when $t$ is unknown, a randomized schedule of iteration counts finds a solution after an expected $O(\sqrt{N/t})$ queries — [[BBHT98 - Tight Bounds on Quantum Searching|BBHT98]] (Section 3, Theorem 3).

The speedup is optimal. For a quantum oracle machine running for $T$ steps, all but at most $2T^2/\varepsilon^2$ inputs $y$ have the property that changing the oracle's answer at $y$ alone moves the final state by at most $\varepsilon$ in Euclidean norm — [[BBBV97 - Strengths and Weaknesses of Quantum Computing|BBBV97]] (Corollary 3.4), so finding a unique marked element with constant probability takes $\Omega(\sqrt{N})$ steps — [[BBBV97 - Strengths and Weaknesses of Quantum Computing|BBBV97]] (Section 3.1). Grover's algorithm is exactly optimal: for every $T$ up to about $(\pi/4)\sqrt{N}$, no algorithm making $T$ queries, measurements during the computation included, finds a unique marked element with higher probability, averaged over its $N$ positions, than $T$ Grover iterations, whose success probability is $\sin^2((2T+1)\theta)$ with $\sin^2\theta = 1/N$; near-certain success needs about $(\pi/4)\sqrt{N}$ queries — [[Zal97 - Grover's quantum searching algorithm is optimal|Zal97]] (Sections 2–3).

Grover search parallelizes only by splitting the search space. An algorithm that queries $S$ copies of the oracle simultaneously in each of $T$ rounds performs no better than $S$ independent Grover searches on $N/S$ inputs each, exactly when $S$ divides $N$ and asymptotically otherwise. Near-certain success therefore needs about $(\pi/4)\sqrt{N/S}$ rounds and about $(\pi/4)\sqrt{NS}$ queries in all — [[Zal97 - Grover's quantum searching algorithm is optimal|Zal97]] (Section 4).

Grover search also speeds up collision finding. For a two-to-one $F : X \to Y$ with $N = |X|$ and $1 \le k \le N$, tabulating $F$ on $k$ points and searching for an input that collides with a table entry finds a collision after an expected $O(k + \sqrt{N/k})$ evaluations of $F$ in space $\Theta(k)$, hence $O(N^{1/3})$ evaluations in space $\Theta(N^{1/3})$ for $k = N^{1/3}$; for an $r$-to-one $F$, $r \ge 2$, space $S$ and an expected $O(T)$ evaluations suffice whenever $1 \le S \le T$ and $ST^2 \ge |F(X)|$ — [[BHT98 - Quantum Cryptanalysis of Hash and Claw-Free Functions|BHT98]] (Theorems 1 and 2, Corollary 3). The table lives in quantum memory, read-only, and with sorting the running time is $O((k + \sqrt{N/(kr)})(T_F + \log k))$ for $F$ computable in time $T_F$ — [[BHT98 - Quantum Cryptanalysis of Hash and Claw-Free Functions|BHT98]] (Section 3).

## Known relationships

- $\classP \subseteq \classBPP \subseteq \classBQP$: a quantum machine simulates a probabilistic one ([[bpp-to-bqp|BPP ⊆ BQP]]) — [[BV97 - Quantum Complexity Theory|BV97]].
- $\classBQP \subseteq \classPP \subseteq \classPSPACE$: quantum computation can be simulated with unbounded-error classical randomness, and in polynomial space — [[ADH97 - Quantum Computability|ADH97]].
- [[no-bqp-to-np|No relativizing reduction from BQP to NP]] — [[RT19 - Oracle Separation of BQP and PH|RT19]]
- [[no-np-to-bqp-bbbv97|No relativizing reduction from NP to BQP]] — [[BBBV97 - Strengths and Weaknesses of Quantum Computing|BBBV97]]
- **PostBQP $= \classPP$**: $\classBQP$ with postselection on measurement outcomes equals $\classPP$, which reproves $\classBQP \subseteq \classPP$ — [[Aar05 - Quantum computing, postselection, and probabilistic polynomial-time|Aar05]].

## Relevance to cryptography

BQP defines the power of a quantum adversary. All post-quantum cryptographic schemes — lattice-based, hash-based, code-based, isogeny-based — are designed to resist $\classBQP$ adversaries. A factorization of an RSA modulus $N$ gives the decryption exponent $e^{-1} \bmod \varphi(N)$, and the discrete logarithm $x$ of a Diffie–Hellman or DSA public key $g^x$ is its secret key — standard. Shor's algorithm therefore breaks RSA, finite-field Diffie–Hellman and DSA in quantum polynomial time — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]], and its elliptic-curve version breaks elliptic-curve Diffie–Hellman and ECDSA — [[PZ03 - Shor's discrete logarithm quantum algorithm for elliptic curves|PZ03]]; see [[generic-attacks#shors-algorithm|generic attacks]].

For a cipher with $\kappa$-bit keys and a few known input–output pairs, Grover search over the keys, with the predicate that a key maps the known inputs to the known outputs, finds a key consistent with the pairs after an expected $O(2^{\kappa/2})$ evaluations of the cipher in superposition — [[BBHT98 - Tight Bounds on Quantum Searching|BBHT98]] ([[generic-attacks#quantum-key-search|quantum key search]]). Counted in cipher evaluations, a $\kappa$-bit key thus gives at most about $\kappa/2$ bits of security against a quantum adversary, and a search that uses the cipher only through this predicate and evaluates it in $T$ sequential rounds needs $\Omega(2^\kappa/T)$ evaluations in all to succeed with constant probability ([[generic-attacks#key-search-at-bounded-depth|key search at bounded depth]]). NIST's post-quantum security categories measure quantum attacks by circuit size under a depth bound MAXDEPTH between $2^{40}$ and $2^{96}$ logical gates, take key search on AES-128 as the floor of category 1 and estimate it at $2^{170}/\mathrm{MAXDEPTH}$ quantum gates or $2^{143}$ classical gates, and note that Grover's algorithm needs a long serial computation whose speedup shrinks when it runs as many smaller parallel instances, citing [[Zal97 - Grover's quantum searching algorithm is optimal|Zal97]] — [[NIST17 - Post-Quantum Cryptography Security (Evaluation Criteria)|NIST17]] (Section 4.A.5).

<!-- BEGIN GENERATED participates-in 1740dd566ba0 -->

## Participates in

**Builds on Bounded-Error Quantum Polynomial-Time**

- [[bqp-to-pp|BQP ⊆ PP]]

**Produces Bounded-Error Quantum Polynomial-Time**

- [[bpp-to-bqp|BPP ⊆ BQP]]
- [[bqp-to-dlog-shor97|DLOG ⊆ BQP]]
- [[fac-to-bqp-shor97|FAC ∈ BQP (Shor)]]
- [[factoring-blum-integers-to-bqp-shor97|Factoring Blum integers ∈ BQP (Shor)]]

**Barriers**

- [[no-bqp-to-np|No relativizing reduction from BQP to NP]]
- [[no-np-to-bqp-bbbv97|No relativizing reduction from NP to BQP]]

<!-- END GENERATED participates-in -->
