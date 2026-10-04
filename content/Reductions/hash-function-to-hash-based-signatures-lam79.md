---
type: reduction
status: draft
title: "OWF ⇒ One-time signatures (Lamport)"
aliases: []
id: red-hash-function-to-hash-based-signatures-lam79
kind: implication
hypotheses: [owf]
conclusion: one-time-signature
class: fully-black-box
model: standard
source:
  - "[[Lam79 - Constructing digital signatures from a one way function|Lam79]]"
security-loss: ""
rationale:
  class: "Key generation and verification evaluate the one-way function only as an oracle, and the reduction runs any forger once as an oracle, planting its inversion challenge at a random key slot."
---

# OWF ⇒ One-time signatures (Lamport)

## Statement

If $\hash$ is a [[hash-function#preimage-resistance-one-wayness|one-way function]], Lamport's scheme on $\ell$-bit messages is a [[digital-signature#one-time-signatures|one-time signature]]: EUF-CMA-unforgeable against all efficient adversaries making at most one signing query. The signing key is $2\ell$ uniform preimages $x_{i,b}$, the verification key is their images $y_{i,b} = \hash(k, x_{i,b})$, and the signature on $m$ reveals $(x_{i,m_i})_{i \le \ell}$ — [[Lam79 - Constructing digital signatures from a one way function|Lam79]].

## Sketch

A forgery on $\hat{m} \ne m$ reveals a preimage of some $y_{i,1-m_i}$ that the signature on $m$ did not open. The reduction plants its one-wayness challenge at a uniformly random one of the $2\ell$ slots, aborts if the signing query opens it, answers that query with the preimages it holds, and inverts $\hash(k, \cdot)$ whenever the forgery opens it — a factor-$2\ell$ loss.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\KeyGen(1^\secpar)$}
\begin{algorithmic}
\State $k \getsr \calK$
\For{$i = 1, \dots, \ell$ and $b \in \bits$}
\State $x_{i,b} \getsr \calD$; $y_{i,b} \gets \hash(k, x_{i,b})$
\EndFor
\Return $(\sk, \vk) := \big((x_{i,b})_{i,b},\ (k, (y_{i,b})_{i,b})\big)$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Sign(\sk, m \in \bits^\ell)$}
\begin{algorithmic}
\Return $\sigma := (x_{1,m_1}, \dots, x_{\ell,m_\ell})$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Vrfy(\vk, m, \sigma)$}
\begin{algorithmic}
\Return $[\hash(k, \sigma_i) = y_{i,m_i} \text{ for all } i \in \{1,\dots,\ell\}]$
\end{algorithmic}
\end{algorithm}
```

## Notes

- The Winternitz variant signs several message bits per hash chain, trading $\hash$ evaluations for signature size — [[Mer89 - A Certified Digital Signature|Mer89]].
