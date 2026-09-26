---
type: reduction
status: draft
title: "DDH ⇒ PKE"
aliases: []
id: red-ddh-to-pke-elgamal85
kind: implication
hypotheses: [ddh]
conclusion: pke
class: fully-black-box
model: standard
source:
  - "[[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]]"
security-loss: "tight: one oracle call, advantage-preserving"
---

# DDH ⇒ PKE

[[decisional-diffie-hellman|DDH]] implies [[public-key-encryption|PKE]].

## Statement

[[decisional-diffie-hellman|DDH]] implies CPA-secure [[public-key-encryption|PKE]]: the ElGamal scheme over $(\GG, g, p) \gets \GrGen(1^\secpar)$ has $\sk = x \getsr [p]$ and $\pk = y = g^x$, encrypts $m \in \GG$ as $(g^r, m \cdot y^r)$ for $r \getsr [p]$, and decrypts $(c_1, c_2)$ as $c_2 \cdot c_1^{-x}$. The scheme is from [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]]; it is semantically secure iff DDH is hard for $\GrGen$ — [[TY98 - On the Security of ElGamal Based Encryption|TY98]].

## Sketch

On DDH challenge $(X, Y, Z)$ the reduction sets $\pk = X$ and answers the challenge query with $(Y, m_b \cdot Z)$: for $Z = g^{xy}$ this is a correctly distributed encryption of $m_b$, and for uniform $Z$ the ciphertext is uniform and independent of $b$.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\KeyGen(1^\secpar)$}
\begin{algorithmic}
\State $(\GG, g, p) \gets \GrGen(1^\secpar)$
\State $x \getsr [p]$; $y \gets g^x$
\Return $(\sk, \pk) \gets ((\GG, g, p, x), (\GG, g, p, y))$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Enc(\pk, m)$}
\begin{algorithmic}
\State $r \getsr [p]$
\Comment{$m \in \GG$}
\Return $c \gets (g^r, m \cdot y^r)$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Dec(\sk, (c_1, c_2))$}
\begin{algorithmic}
\Return $m \gets c_2 \cdot c_1^{-x}$
\end{algorithmic}
\end{algorithm}
```

## Notes

`class: fully-black-box`: One fixed construction from the group generator, and one fixed reduction: on DDH challenge $(X, Y, Z)$ set $\pk = X$ and answer the challenge query with $(Y, m_b \cdot Z)$, running the CPA adversary once as an oracle.

- ElGamal85 predates the DDH assumption; the citation attaches to the scheme, and the DDH-based CPA proof is later — [[TY98 - On the Security of ElGamal Based Encryption|TY98]].
