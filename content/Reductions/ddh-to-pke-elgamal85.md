---
type: reduction
status: draft
title: "DDH ⇒ CPA-secure PKE (ElGamal)"
aliases: []
id: red-ddh-to-pke-elgamal85
kind: implication
hypotheses: [ddh]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source:
  - "[[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]]"
  - "[[TY98 - On the Security of ElGamal Based Encryption|TY98]]"
security-loss: "tight up to a factor 2: one run of the CPA adversary, whose advantage is exactly twice the DDH advantage of the reduction"
rationale:
  class: "The ElGamal construction uses only the group generator, and the fixed reduction builds the public key and challenge ciphertext from the DDH challenge and runs any CPA adversary once as an oracle."
---

# DDH ⇒ CPA-secure PKE (ElGamal)

## Statement

[[decisional-diffie-hellman|DDH]] implies [[public-key-encryption#cpa-security|CPA-secure]] [[public-key-encryption|PKE]]: the ElGamal scheme over $(\GG, g, p) \gets \GrGen(1^\secpar)$ has $\sk = x \getsr [p]$ and $\pk = y = g^x$, encrypts $m \in \GG$ as $(g^r, m \cdot y^r)$ for $r \getsr [p]$, and decrypts $(c_1, c_2)$ as $c_2 \cdot c_1^{-x}$. The scheme is from [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]]; it is semantically secure iff DDH is hard for $\GrGen$ — [[TY98 - On the Security of ElGamal Based Encryption|TY98]]. It is perfectly correct, since $m y^r (g^r)^{-x} = m$, and with group elements encoded by strings of one length its message space $\GG$ holds the two distinct equal-length messages $1$ and $g$, as $p \ge 2$. For every CPA adversary $\calA$, the DDH adversary $\calB$ of the Sketch runs $\calA$ once and has $\Adv^{\text{ddh}}_{\GrGen,\calB}(\secpar) = \frac12 \Adv^{\mathrm{cpa}}_{\PKE,\calA}(\secpar)$ — standard.

## Sketch

On DDH challenge $(\GG, g, p, X, Y, Z)$, $\calB$ sets $\pk = (\GG, g, p, X)$, samples $\beta \getsr \bits$, answers $\calA$'s challenge pair $(m_0, m_1)$ with $(Y, m_\beta \cdot Z)$, and outputs $\hat b := 0$ iff $\calA$ outputs $\beta$. For $Z = g^{xy}$ this is a correctly distributed encryption of $m_\beta$ with $r = y$, so $\calA$ guesses $\beta$ with probability $P := \Pr[\Game^{\mathrm{cpa}}_{\PKE,\calA}(\secpar) = 1]$; for $Z = g^z$ with $z$ uniform, $m_\beta \cdot Z$ is uniform on $\GG$ and independent of $(X, Y, \beta)$, so $\calA$ guesses $\beta$ with probability $\frac12$, and $\Pr[\hat b = b] = \frac12 P + \frac14$ gives $\Adv^{\text{ddh}}_{\GrGen,\calB}(\secpar) = |P - \frac12| = \frac12 \Adv^{\mathrm{cpa}}_{\PKE,\calA}(\secpar)$.

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

- ElGamal85 predates the DDH assumption; the DDH-based CPA proof is later — [[TY98 - On the Security of ElGamal Based Encryption|TY98]].
- Efficiency: a ciphertext is two group elements for a one-element message; encryption costs two exponentiations and decryption one — standard.
