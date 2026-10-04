---
type: reduction
status: draft
title: "DCR ⇒ PKE"
aliases: []
id: red-dcr-to-pke-pai99
kind: implication
hypotheses: [dcr]
conclusion: pke
class: fully-black-box
model: standard
source:
  - "[[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]"
security-loss: "tight: one call to the CPA adversary"
rationale:
  class: "The Paillier construction uses only the modulus generator, and the fixed reduction embeds the DCR challenge in the challenge ciphertext and runs any CPA adversary once as an oracle."
---

# DCR ⇒ PKE

## Statement

[[decisional-composite-residuosity|DCR]] implies [[public-key-encryption#cpa-security|CPA-secure]] [[public-key-encryption|PKE]]: the Paillier cryptosystem has public key $(n, g)$ with $n = pq$ an RSA modulus and $g \in \ZZ_{n^2}^*$ of order a nonzero multiple of $n$ ($g = 1+n$ suffices), and encrypts $m \in \ZZ_n$ as $c = g^m r^n \bmod n^2$ for $r \getsr \ZZ_n^*$; the scheme is semantically secure iff DCR is hard — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]].

## Sketch

The reduction sets the challenge ciphertext to $c^* = g^{m_b} \cdot z \bmod n^2$ for DCR challenge $z$: if $z$ is an $n$-th residue this is a correctly distributed encryption of $m_b$, and if $z$ is uniform in $\ZZ_{n^2}^*$ the ciphertext is uniform and independent of $b$.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\KeyGen(1^\secpar)$}
\begin{algorithmic}
\State sample distinct $\secpar$-bit primes $p, q$; $n \gets pq$; $\varphi \gets (p-1)(q-1)$
\Comment{Equal length gives $\gcd(n, \varphi) = 1$}
\Return $(\sk, \pk) \gets ((n, \varphi), n)$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Enc(\pk, m)$}
\begin{algorithmic}
\State $r \getsr \ZZ_n^*$
\Comment{$m \in \ZZ_n$; $g = 1+n$ has order $n$ in $\ZZ_{n^2}^*$}
\Return $c \gets (1+n)^m \cdot r^n \bmod n^2$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Dec(\sk, c)$}
\begin{algorithmic}
\State $u \gets c^{\varphi} \bmod n^2$
\Return $m \gets \frac{u - 1}{n} \cdot \varphi^{-1} \bmod n$
\Comment{$u = 1 + m \varphi n \bmod n^2$}
\end{algorithmic}
\end{algorithm}
```

## Notes

- The simplification $g = 1+n$ and the generalisation to modulus $n^{s+1}$ are from [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]].
