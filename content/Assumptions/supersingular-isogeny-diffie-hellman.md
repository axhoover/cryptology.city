---
type: assumption
status: draft
aliases:
  - SIDH
  - Supersingular Isogeny Diffie-Hellman
title: Supersingular Isogeny Diffie-Hellman
id: sidh
variants:
  csidh: "#csidh"
  ssddh: "#decisional-variant-ssddh"
---

# Supersingular Isogeny Diffie-Hellman

The _Supersingular Isogeny Diffie-Hellman (SIDH)_ assumption underlies a family of post-quantum key exchange protocols based on the conjectured hardness of computing isogenies between supersingular elliptic curves. SIDH was introduced by Jao and De Feo as a candidate post-quantum key exchange — [[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]]. The secret isogeny can be recovered in heuristic classical polynomial time when the endomorphism ring of the starting curve is known, as for SIKE — [[CD22 - An efficient key recovery attack on SIDH|CD22]], and SIDH is broken in classical polynomial time for every starting curve — [[Rob22 - Breaking SIDH in Polynomial Time|Rob22]].

## Assumption

Let $p$ be a prime and $E$ a supersingular elliptic curve over $\FF_{p^2}$. An **isogeny** $\phi : E \to E'$ is a non-trivial rational map that preserves the group structure (a group homomorphism).

The SIDH problem, for $\ell_A, \ell_B$ and $\pp(\secpar) = (e_A, e_B, f, p, E, P_A, Q_A, P_B, Q_B)$ as in the [decisional variant](#decisional-variant-ssddh) below: given $E$, the image curve $E' = E / \langle R \rangle$ for a random point $R \in E[\ell_A^{e_A}]$ of order $\ell_A^{e_A}$, and the images $\phi(P_B), \phi(Q_B)$ under the isogeny $\phi : E \to E'$ with kernel $\langle R \rangle$, find a generator of $\langle R \rangle$ — [[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]].

The SIDH key exchange of [[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]] works as follows:

1. Both parties fix supersingular $E / \FF_{p^2}$ with $\#E(\FF_{p^2}) = (p+1)^2$, chosen so that $p + 1 = 2^{e_A} 3^{e_B}$
2. Alice chooses a secret isogeny $\phi_A : E \to E_A$ with cyclic kernel of order $2^{e_A}$; Bob chooses $\phi_B : E \to E_B$ with cyclic kernel of order $3^{e_B}$
3. They exchange $E_A$, $E_B$ and images of each other's torsion points
4. Shared key: $j(E_{AB})$, the $j$-invariant of the common image curve $E_{AB} = E_B / \langle \phi_B(\ker \phi_A) \rangle \cong E_A / \langle \phi_A(\ker \phi_B) \rangle$; Alice computes the first from Bob's torsion-point images, Bob the second

### Decisional variant (SSDDH)

The _supersingular decision Diffie-Hellman (SSDDH)_ problem is to distinguish the shared curve $E_{AB}$ from the quotient of $E$ by an independent pair of kernel points, given the SIDH transcript — [[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]]. Fix distinct primes $\ell_A, \ell_B$, constants as in [[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]] ($\ell_A = 2$, $\ell_B = 3$ in the protocol above), and a sequence $\pp = \pp(\secpar) = (e_A, e_B, f, p, E, P_A, Q_A, P_B, Q_B)$ computable from $1^\secpar$ in deterministic time $\poly(\secpar)$. Here $e_A, e_B \ge 1$; $p = \ell_A^{e_A}\ell_B^{e_B} f \pm 1$ is prime; $E$ is a supersingular curve over $\FF_{p^2}$; and $\{P_A, Q_A\}$ and $\{P_B, Q_B\}$ are bases, of points defined over $\FF_{p^2}$, of $E[\ell_A^{e_A}]$ and $E[\ell_B^{e_B}]$. Computability from $1^\secpar$ lets the protocol above run on input $1^\secpar$ alone, and $e_A, e_B \ge 1$ rules out the trivial kernels of $e_A = e_B = 0$, for which $E_0 = E_1 = E$. Since $\ell_A^{e_A}\ell_B^{e_B} \le p + 1$ and $\pp(\secpar)$ is computable in time $\poly(\secpar)$, $e_A + e_B \le \log(p + 1) \le \poly(\secpar)$; as $\ell_A, \ell_B$ are constants, an isogeny with a given cyclic kernel of order $\ell_A^{e_A}$ or $\ell_B^{e_B}$ is computable in time $\poly(\secpar)$ as a chain of $e_A$ or $e_B$ isogenies of prime degree — standard.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ssddh}}_{\pp,\calA}(\secpar)$}
\begin{algorithmic}
\State $(e_A, e_B, f, p, E, P_A, Q_A, P_B, Q_B) := \pp(\secpar)$; $b \getsr \bits$
\State $R_A, R'_A \getsr \{R \in E[\ell_A^{e_A}] : \mathrm{ord}(R) = \ell_A^{e_A}\}$
\State $R_B, R'_B \getsr \{R \in E[\ell_B^{e_B}] : \mathrm{ord}(R) = \ell_B^{e_B}\}$
\State $\phi_A : E \to E_A := E/\langle R_A \rangle$ ; $\phi_B : E \to E_B := E/\langle R_B \rangle$
\State $E_0 := E/\langle R_A, R_B \rangle$ \Comment{$E_0 \cong E_{AB}$, the shared curve}
\State $E_1 := E/\langle R'_A, R'_B \rangle$
\State $b' \gets \calA(1^\secpar, \pp(\secpar), E_A, E_B, \phi_A(P_B), \phi_A(Q_B), \phi_B(P_A), \phi_B(Q_A), E_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

**SSDDH is hard** for $\pp$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{ssddh}}_{\pp,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ssddh}}_{\pp,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. As an assumption, SSDDH denotes the existence of such a sequence $\pp$.

[[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]] prove the SIDH protocol session-key secure in the authenticated-links model of [[CK01 - Analysis of Key-Exchange Protocols and Their Use for Building Secure Channels|CK01]] under SSDDH. SSDDH makes $j(E_{AB})$ indistinguishable, given the transcript, from the $j$-invariant of an independent execution, not from a uniform element of a fixed key space, so it does not give a [[key-exchange|key exchange]] whose key is indistinguishable from a uniform element of its key space.

TODO: register a key-exchange variant whose ideal key is the key of an independent honest execution, with a quantified key-entropy condition (the constant-key protocol meets the game without one), and re-add SSDDH ⇒ it once a source bounds the min-entropy of $j(E_{AB})$.

## Known Results

- SIDH was conjectured to be hard for quantum computers (unlike [[discrete-logarithm|discrete log]] or [[factoring|factoring]] assumptions) — [[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]]; the conjecture is false: SIDH is broken in classical polynomial time for every starting curve — [[Rob22 - Breaking SIDH in Polynomial Time|Rob22]]
- SIDH was selected as a NIST post-quantum cryptography candidate (SIKE) before being broken
- Using Kani's reducibility criterion and the exchanged torsion-point images, the secret isogeny can be recovered in heuristic classical polynomial time when the endomorphism ring of the starting curve is known, as for SIKE — [[CD22 - An efficient key recovery attack on SIDH|CD22]]
- SIKE was withdrawn from the NIST competition in 2022

# Variations

## CSIDH

_Commutative SIDH (CSIDH)_ uses a commutative group action on supersingular curves over $\FF_p$ (rather than $\FF_{p^2}$). Unlike SIDH, CSIDH does not reveal auxiliary torsion-point information, and it has not been broken by the CD22 attack. It is believed to remain a plausible post-quantum assumption, though quantum sub-exponential attacks exist.

## SQISign

A post-quantum [[digital-signature|digital signature]] scheme based on isogenies, using a different isogeny graph (Deuring correspondence) and not relying on the broken SIDH assumption.

# Attacks

- **Known endomorphism ring**: from the exchanged torsion-point images, Kani's reducibility criterion recovers the secret isogeny in heuristic classical polynomial time when the endomorphism ring of the starting curve is known, as for SIKE — [[CD22 - An efficient key recovery attack on SIDH|CD22]]
- **Every starting curve**: SIDH is broken in classical polynomial time for every starting curve; the published torsion-point images make the secret isogeny, hence $E_{AB}$, computable, so SSDDH does not hold — [[Rob22 - Breaking SIDH in Polynomial Time|Rob22]]
- **Quantum sub-exponential attack on CSIDH**: Kuperberg's algorithm for the hidden-shift problem recovers the secret key in quantum subexponential time; a classical meet-in-the-middle attack takes time $\tilde{O}(p^{1/4})$ — Castryck–Lange–Martindale–Panny–Renes (ASIACRYPT 2018)
- The original SIDH assumption (without auxiliary torsion points) may still be hard — this is the basis for exploring modifications
