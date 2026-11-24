---
type: reduction
status: draft
title: "CDH ⇒ IND-CPA KEM (hashed ElGamal)"
aliases:
  - Hashed ElGamal
id: red-cdh-to-ind-cpa-kem
kind: implication
hypotheses: [cdh]
conclusion: ind-cpa-kem
class: fully-black-box
model: rom
source: folklore
security-loss: "a factor $q_H$ for $q_H$ random-oracle queries: the KEM advantage is at most $q_H$ times the CDH advantage of a solver that outputs a uniformly chosen query"
rationale:
  class: "The KEM uses only the group generator and the random oracle, and the fixed reduction runs any KEM adversary once as an oracle, answering its random-oracle queries itself."
  model: "The reduction simulates the random oracle and reads the adversary's queries to find the Diffie–Hellman value."
  security-loss: "Until the adversary queries the oracle at the Diffie–Hellman value its view is independent of the challenge bit, and the solver guesses which query that is."
---

# CDH ⇒ IND-CPA KEM (hashed ElGamal)

## Statement

In the [[random-oracle-model|random oracle model]] with oracle $H : \bits^* \to \bits^{\ell(\secpar)}$, for a polynomial-time computable $\ell$ with $\secpar \le \ell(\secpar) \le \poly(\secpar)$, let $\GrGen$ be a group generator as in the [[computational-diffie-hellman|CDH]] game. The hashed ElGamal [[key-encapsulation-mechanism|KEM]] has $\KeyGen(1^\secpar)$ output $\pk = (\GG, g, p, X)$ and $\sk = (\pk, x)$ for $(\GG, g, p) \gets \GrGen(1^\secpar)$, $x \getsr [p]$ and $X = g^x$; $\Encap^H(\pk)$ samples $y \getsr [p]$ and outputs $(c, k) := (g^y, H(X^y))$, and $\Decap^H(\sk, c) := H(c^x)$, with $H$ applied to the encoding of a group element. It is perfectly correct, since $c^x = g^{xy} = X^y$, and its key $H(g^{xy})$ is uniform on $\bits^{\ell(\secpar)}$ over the choice of $H$. For every adversary $\calA$ in the [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA game]] relative to $H$ that makes at most $q_H = q_H(\secpar) \ge 1$ queries to $H$, the CDH adversary $\calB$ of the Sketch runs $\calA$ once, answering its queries from a table, and has

$$
\Adv^{\mathrm{cpa}}_{\mathrm{KEM},\calA}(\secpar) \le q_H \cdot \Adv^{\text{cdh}}_{\GrGen,\calB}(\secpar),
$$

so if CDH is hard for $\GrGen$, hashed ElGamal is an IND-CPA-secure KEM in the random oracle model — folklore.

## Sketch

Let $Q$ be the event that $\calA$ queries $H$ at $g^{xy}$, and let $G'$ be the game in which the oracle answers a query at $g^{xy}$ with a uniform string independent of the encapsulated key $k_0$. In $G'$ the shown key $k_b$ is uniform and independent of everything else whatever $b$ is, so $b$ is independent of $\calA$'s view; the real game and $G'$ proceed identically until $Q$, so $\Pr[b' = b \wedge \neg Q] = \frac12 \Pr[\neg Q]$ in both, and $\left|2\Pr[b' = b] - 1\right| \le \Pr[Q]$. $\calB$ runs $G'$ on its CDH instance $(X, Y)$, with $c^* := Y$, and outputs a uniformly chosen one of the $q_H$ queries, which is $g^{xy}$ with probability at least $\Pr[Q]/q_H$.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\calB(1^\secpar, \GG, g, p, X, Y)$}
\begin{algorithmic}
\State $k \getsr \bits^{\ell(\secpar)}$; $T \gets$ empty table
\State $\calO(z) := T[z]$, after $T[z] \getsr \bits^{\ell(\secpar)}$ if $T[z]$ is undefined
\Comment{Lazily sampled random oracle}
\State $b' \gets \calA^{\calO}((\GG, g, p, X), Y, k)$
\State $i \getsr [q_H]$
\Return the $i$-th query of $\calA$ to $\calO$, or $g$ if $\calA$ made fewer than $i$ queries
\end{algorithmic}
\end{algorithm}
```

## Notes

- With the one-time pad as DEM, encrypting $m \in \bits^{\ell(\secpar)}$ as $(g^y, H(X^y) \oplus m)$, this is hashed ElGamal encryption, IND-CPA-secure in the random oracle model under CDH by [[ind-cpa-kem-to-pke-cpa-security|IND-CPA KEM ⇒ IND-CPA PKE]]: its KEM adversary forwards the PKE adversary's $q_H$ oracle queries and makes no others, so the PKE advantage is at most $2 q_H$ times the CDH advantage of a solver that runs the PKE adversary once — folklore.
- The unhashed key $g^{xy}$ is a group element, outside the KEM key space $\bits^{\ell}$; ElGamal encryption uses it as a multiplicative mask instead ([[ddh-to-pke-elgamal85|DDH ⇒ CPA-secure PKE (ElGamal)]]).
