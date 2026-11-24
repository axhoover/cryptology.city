---
type: glossary
status: draft
aliases:
  - Generic attack
  - Exhaustive key search
  - Brute-force attack
title: Generic attacks
id: generic-attacks
---

# Generic attacks

A **generic attack** uses a primitive only as a black box: it evaluates the keyed function, hash function or group operation on inputs of its choice and compares the results, so it applies to every instance with the same key length, output length or group order. Its cost caps the security those parameters can give. Security strength is counted in bits as in [[Bar20 - Recommendation for Key Management Part 1 General|Bar20]] (Section 5.6.1.1): an algorithm provides $s$ bits of security if breaking it takes work comparable to trying all keys of a symmetric-key algorithm with $s$-bit keys and no shortcut attack. Costs below count evaluations of the primitive or group operations.

## Exhaustive key search

Let $\PRF = (\KeyGen, \Eval)$ be a [[pseudorandom-function|PRF]] whose $\KeyGen(1^\secpar)$ samples $k$ uniformly from $\calK = \bits^\kappa$, and fix distinct inputs $x_1, \ldots, x_r \in \calD$ and distinct keys $k_1, \ldots, k_t \in \calK$.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{Key search $\calA^{\calO}(1^\secpar)$ against $\PRF$}
\begin{algorithmic}
\For{$i = 1, \ldots, r$}
\State $y_i \gets \calO(x_i)$
\EndFor
\For{$j = 1, \ldots, t$}
\If{$\Eval(k_j, x_i) = y_i$ for all $i \le r$}
\Return $0$
\EndIf
\EndFor
\Return $1$
\end{algorithmic}
\end{algorithm}
```

$\calA$ makes $r$ queries and at most $rt$ evaluations of $\Eval$. In $\Game^{\mathrm{prf}}_{\PRF,\calA}(\secpar)$ with $b = 0$ it outputs $0$ whenever $k \in \{k_1, \ldots, k_t\}$, which has probability $t/2^\kappa$. With $b = 1$ the answers $y_i = R(x_i)$ are independent and uniform on $\calR$, so each fixed $k_j$ passes the test with probability $|\calR|^{-r}$, and $\calA$ outputs $0$ with probability at most $t|\calR|^{-r}$. Since $\Adv^{\mathrm{prf}}_{\PRF,\calA}(\secpar) = \left|\Pr[b' = 0 \mid b = 0] - \Pr[b' = 0 \mid b = 1]\right|$,

$$
\Adv^{\mathrm{prf}}_{\PRF,\calA}(\secpar) \;\ge\; t\left(2^{-\kappa} - |\calR|^{-r}\right)
$$

— standard. With $r = \lceil (\kappa + 1)/\log_2 |\calR| \rceil \le \kappa + 1$ queries, the false-positive term $t|\calR|^{-r}$ is at most $t/2^{\kappa+1}$, so the advantage is at least $t/2^{\kappa+1}$; with $t = 2^\kappa$ the adversary tries every key and has advantage at least $1/2$. Against a [[pseudorandom-permutation|PRP]] on a domain of size $N \ge r$, with world 1 a uniformly random permutation, the false-positive term is at most $t/(N(N-1)\cdots(N-r+1))$: the answers are then a uniform $r$-tuple of distinct elements, and each $\Eval(k_j, \cdot)$, a permutation, maps the distinct $x_i$ to distinct values — standard.

If $\kappa(\secpar) \le c\log_2\secpar$ for a constant $c$ and infinitely many $\secpar$, the adversary with $t = 2^\kappa \le \secpar^c$ and $r \le \kappa + 1$ queries, which fit in the superpolynomial domain $\calD$ of a PRF once $\secpar$ is large, is efficient and has advantage at least $1/2$ for those $\secpar$, so pseudorandomness requires $\kappa = \omega(\log\secpar)$ — standard. Concretely, about $rt$ evaluations buy advantage at least $t/2^{\kappa+1}$, so work divided by advantage is at most about $r \cdot 2^{\kappa+1}$, and trying the keys in a fixed order reaches a uniform key after $(2^\kappa + 1)/2$ trials on average — standard. A $\kappa$-bit key thus gives at most about $\kappa$ bits of security, and a target of $s$ bits needs $\kappa \ge s$. [[Bar20 - Recommendation for Key Management Part 1 General|Bar20]] (Section 5.6.1.1) defines security strength by this attack: given a few plaintext–ciphertext pairs, breaking an algorithm with $s$ bits of security takes $2^{s-1}$ encryptions on average.

## Generic collision search

For every $h : \calD \to \calR$ with $|\calD| \ge 2|\calR|$, the [[birthday-bound#generic-collision-attack|birthday attack]] evaluates $h$ on $q$ independent uniform inputs, stores the $q$ pairs, and finds a collision with probability at least $(1/2 - 1/e)\, q(q-1)/(2|\calR|)$ for $1 \le q \le \sqrt{2|\calR|}$; for $\calR = \bits^m$ with $m \ge 3$, $q = \lfloor 2^{(m+1)/2} \rfloor$ evaluations succeed with probability greater than $1/21$ — standard, proved on that page. [[birthday-bound#small-space-collision-search|Rho search]] finds a collision of a uniformly random function on $\bits^m$ with probability $1 - O(2^{-m/2})$, after $O(2^{m/2})$ evaluations in expectation and with $O(1)$ memory; for a fixed $h$ that analysis is a heuristic — standard. An $m$-bit hash function therefore gives at most about $m/2$ bits of collision resistance, and a target of $s$ bits needs $m \ge 2s$. Asymptotically, [[hash-function#collision-resistance|collision resistance]] requires $m = \omega(\log\secpar)$ ([[birthday-bound#generic-collision-attack|birthday bound]]).

## Generic discrete logarithms

Let $\GG = \langle g \rangle$ have prime order $p$ and $X = g^x$ with $x$ uniform in $\{0, \ldots, p-1\}$, as in $\Game^{\text{dl}}$ ([[discrete-logarithm|DLOG]]). For $a, b \ge 1$, storing the baby steps $(g^j, j)$ for $0 \le j < a$ and computing the giant steps $X g^{-ia}$ for $0 \le i < b$ until one is stored finds $x$ whenever $x < ab$, with $a + b + O(1)$ group operations and $a$ stored elements, hence with probability $\min(ab, p)/p$ — standard. The choice $a = b = \lceil\sqrt{p}\,\rceil$ is Shanks's baby-step giant-step algorithm, which always succeeds — [[Sha71 - Class Number, a Theory of Factorization, and Genera|Sha71]] (credited by [[BS16 - Baby-Step Giant-Step Algorithms for the Symmetric Group|BS16]], Section 1). Pollard's $\rho$ method computes $x$ with a heuristic expected $O(\sqrt{p})$ group operations and $O(1)$ stored elements — [[Pol78 - Monte Carlo Methods for Index Computation (mod p)|Pol78]]. In a cyclic group of composite order $n = \prod_i r_i^{e_i}$ with known factorization, the Pohlig–Hellman reduction reduces discrete logarithms to discrete logarithms in subgroups of the prime orders $r_i$ and, with baby-step giant-step there, takes $O\big(\sum_i e_i(\log n + \sqrt{r_i})\big)$ group operations, so the largest prime factor of the order sets the generic cost — [[PH78 - An Improved Algorithm for Computing Logarithms over GF(p) and Its Cryptographic Significance|PH78]] (credited by [[GB08 - Lecture Notes on Cryptography|GB08]], Section 2.3.1); the derivation is under [[discrete-logarithm#attacks|DLOG § Attacks]].

Baby-step giant-step is optimal among [[generic-group-model|generic]] algorithms up to a constant factor: in a group of prime order $p$, every generic algorithm making $q$ group-operation queries computes $x$ with probability $O(q^2/p)$ — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]] ([[ggm-to-dlog-sho97|GGM ⇒ DLOG]], whose Notes give the bound $\big(\binom{q+2}{2} + 1\big)/p$). With $a = b$ the attack above achieves $\min(a^2, p)/p$ with about $2a$ operations, so generic discrete logarithms in a group of prime order $p$ give about $\frac{1}{2}\log_2 p$ bits of security, and a target of $s$ bits needs $\log_2 p \ge 2s$ — standard. Discrete logarithms in $\ZZ_P^*$ also fall to non-generic, subexponential index-calculus and number-field-sieve algorithms, which force a much larger modulus $P$ ([[discrete-logarithm#attacks|DLOG § Attacks]]).

## Quantum generic attacks

### Quantum key search

Let $\kappa$, $r$ and the $x_i$ be as in exhaustive key search, with $y_i := \calO(x_i)$ obtained by classical queries, and let $f(k') := 1$ if $\Eval(k', x_i) = y_i$ for all $i \le r$ and $f(k') := 0$ otherwise, computed by a reversible circuit that evaluates $\Eval$ $r$ times. With $b = 0$ the key $k$ satisfies $f(k) = 1$, so $f$ has $t \ge 1$ solutions among $N = 2^\kappa$ keys. The search of [[BBHT98 - Tight Bounds on Quantum Searching|BBHT98]] for an unknown number of solutions checks every candidate it measures and stops only on a solution; there is a constant $c$ such that it finds one after at most $c\sqrt{N/t}$ evaluations of $f$ in expectation — [[BBHT98 - Tight Bounds on Quantum Searching|BBHT98]] (Theorem 3, with classical sampling when $t > 3N/4$). Stopping it after $2c\sqrt{N}$ evaluations of $f$, and outputting $0$ if it has found a key with $f = 1$ and $1$ otherwise, gives a quantum adversary that queries its oracle only classically, at $x_1, \ldots, x_r$, and evaluates $\Eval$ $O(r \cdot 2^{\kappa/2})$ times in superposition. With $b = 0$, by Markov's inequality the search has found a solution by then with probability at least $1/2$; with $b = 1$ the adversary can output $0$ only if some key passes the test, which has probability at most $2^\kappa |\calR|^{-r}$. Hence

$$
\Adv^{\mathrm{prf}}_{\PRF,\calA}(\secpar) \;\ge\; \frac{1}{2} - 2^{\kappa}|\calR|^{-r}
$$

— standard. With $|\calR|^r \ge 2^{\kappa+2}$ the advantage is at least $1/4$. Counted in evaluations, a $\kappa$-bit key therefore gives at most about $\kappa/2$ bits of security against a quantum adversary, and a target of $s$ bits needs $\kappa \ge 2s$ in this count. An attack that only evaluates $f$ is unstructured search, for which this is optimal: finding a unique solution with constant probability takes $\Omega(\sqrt{N})$ evaluations — [[BBBV97 - Strengths and Weaknesses of Quantum Computing|BBBV97]], [[Zal97 - Grover's quantum searching algorithm is optimal|Zal97]] ([[bounded-error-quantum-polynomial-time#grover-search|Grover search]]).

### Key search at bounded depth

Consider unstructured search for one marked element among $N$, with $S$ copies of the oracle queried simultaneously in each of $T$ rounds, and let $\phi_T$ and $\phi^y_T$ be the final states when no element and when $y$ is marked. Then $\sum_y \|\phi_T - \phi^y_T\|^2 \le 4ST^2$ (Section 4), and if the algorithm identifies the marked element with probability $p$ on average over $y$, then $\sum_y \|\phi_T - \phi^y_T\|^2 \ge 2N - 2\sqrt{Np} - 2\sqrt{N(N-1)}\sqrt{1-p}$ (Appendix 5.1) — [[Zal97 - Grover's quantum searching algorithm is optimal|Zal97]]. Since $\sqrt{N(N-1)} \le N$ and $1 - \sqrt{1-p} \ge p/2$,

$$
ST^2 \;\ge\; \frac{Np - 2\sqrt{Np}}{4}, \qquad ST \;\ge\; \frac{Np - 2\sqrt{Np}}{4T}
$$

— standard. For constant $p$ the total number of queries is $\Omega(N/T)$: a bound $T$ on the number of sequential query rounds raises the cost of searching $N = 2^\kappa$ keys from $\Theta(2^{\kappa/2})$ to $\Omega(2^\kappa/T)$, and the full quadratic speedup needs $T = \Omega(2^{\kappa/2})$ rounds. NIST's estimate for key search on AES-128 has this form, $2^{170}/\mathrm{MAXDEPTH}$ quantum gates for a depth bound MAXDEPTH between $2^{40}$ and $2^{96}$ logical gates — [[NIST17 - Post-Quantum Cryptography Security (Evaluation Criteria)|NIST17]] (Section 4.A.5).

### Quantum collision search

For an $r$-to-one function $F : X \to Y$, $r \ge 2$, with $N = |X|$, the algorithm of [[BHT98 - Quantum Cryptanalysis of Hash and Claw-Free Functions|BHT98]] tabulates $F$ on $k$ points and runs Grover search for an input that collides with a table entry; it finds a collision after an expected $O(k + \sqrt{N/(rk)})$ evaluations of $F$ in space $\Theta(k)$, and for every $1 \le S \le T$ with $ST^2 \ge |F(X)|$ some instance uses space $S$ and an expected $O(T)$ evaluations — [[BHT98 - Quantum Cryptanalysis of Hash and Claw-Free Functions|BHT98]] (Theorem 2, Corollary 3). For an $r$-to-one $F$ onto $\bits^m$, $S = T = 2^{m/3}$ gives $O(2^{m/3})$ evaluations, against about $2^{m/2}$ for the birthday attack, while $S = 1$ gives $T = 2^{m/2}$, no fewer evaluations than rho search — standard, from Corollary 3. The table lives in quantum memory, read-only, and with sorting the running time is $O((k + \sqrt{N/(rk)})(T_F + \log k))$ for $F$ computable in time $T_F$ — [[BHT98 - Quantum Cryptanalysis of Hash and Claw-Free Functions|BHT98]] (Section 3). For functions that are not $r$-to-one, BHT98 describe the modification (a random table and the search of BBHT98) without stating a bound. Counted in evaluations, an $r$-to-one function onto $\bits^m$ thus gives at most about $m/3$ bits of collision resistance against a quantum adversary with $2^{m/3}$ quantum memory.

### Shor's algorithm

Shor's algorithm factors $n$-bit integers and computes discrete logarithms in $\ZZ_P^*$ in time polynomial in $n$ — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]] ([[fac-to-bqp-shor97|FAC ∈ BQP]], [[bqp-to-dlog-shor97|DLOG ⊆ BQP]]). The discrete-logarithm algorithm uses few properties of $\ZZ_P^*$: it needs the order of the generator, which quantum order finding can compute, and polynomial-time multiplication and inversion — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]] (Section 6), with each group element given a unique encoding — standard; for elliptic-curve groups over an $n$-bit prime field it uses $O(n^3)$ gates and roughly $6n$ qubits — [[PZ03 - Shor's discrete logarithm quantum algorithm for elliptic curves|PZ03]] (Section 6). Its cost grows polynomially with the bit length of the modulus or group order, as do the costs of the honest algorithms, so no choice of RSA modulus or group order gives superpolynomial security against a quantum adversary — standard.

## Key lengths

Sizes giving each classical security strength, from [[Bar20 - Recommendation for Key Management Part 1 General|Bar20]] (Sections 5.6.1.1 and 5.6.1.2, Tables 2 and 3):

| Strength (bits) | Block cipher | Hash, collision resistance     | Elliptic-curve order (bits) | RSA modulus (bits) | Finite field: public key, private key (bits) |
| --------------- | ------------ | ------------------------------ | --------------------------- | ------------------ | -------------------------------------------- |
| 112             | 3TDEA        | SHA-224, SHA-512/224, SHA3-224 | 224–255                     | 2048               | 2048, 224                                    |
| 128             | AES-128      | SHA-256, SHA-512/256, SHA3-256 | 256–383                     | 3072               | 3072, 256                                    |
| 192             | AES-192      | SHA-384, SHA3-384              | 384–511                     | 7680               | 7680, 384                                    |
| 256             | AES-256      | SHA-512, SHA3-512              | 512+                        | 15360              | 15360, 512                                   |

The AES rows match $\kappa = s$ from exhaustive key search, the hash column $m = 2s$ from the birthday attack, and the elliptic-curve column, the bit length of the order of the base point, a group order of about $2s$ bits from generic discrete logarithms; the RSA modulus and the finite-field public key are larger because the number field sieve and index calculus are not generic ([[factoring#attacks|factoring § Attacks]], [[discrete-logarithm#attacks|DLOG § Attacks]]) — standard. Bar20 marks the RSA and elliptic-curve estimates as significantly affected once quantum computing becomes practical (Table 2), and accepts 112 bits for applying protection through 2030 and 128 bits or more beyond (Section 5.6.3, Table 4); 3TDEA is deprecated through 2023 and disallowed afterwards for applying protection (Table 2, note). NIST's post-quantum categories 1 to 5 require every attack to need resources comparable to or greater than key search on AES-128, collision search on SHA-256, key search on AES-192, collision search on SHA-384 and key search on AES-256, respectively, and NIST recommends parameters in categories 1 to 3 as likely to provide sufficient security for the foreseeable future — [[NIST17 - Post-Quantum Cryptography Security (Evaluation Criteria)|NIST17]] (Section 4.A.5).
