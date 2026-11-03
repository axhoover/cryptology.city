---
type: reduction
status: draft
title: "HPS ⇒ CPA-secure PKE"
aliases: []
id: red-hash-proof-system-to-pke-cpa-security-cs02
kind: implication
hypotheses: [hash-proof-system]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source:
  - "[[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]]"
security-loss: "additive: the IND-CPA advantage is at most twice the sum of the subset-membership advantage and the smoothness error"
rationale:
  class: "The scheme calls the hash proof system's algorithms only as oracles, and the reduction runs any IND-CPA adversary once as an oracle on a challenge built from its subset-membership instance and a hash key it samples itself."
---

# HPS ⇒ CPA-secure PKE

## Statement

Let $\mathsf{HPS}$ be an $\varepsilon$-smooth [[hash-proof-system|hash proof system]] for a hard subset membership problem $\calM$. The scheme below, with message space $\Pi$, is [[public-key-encryption#cpa-security|IND-CPA-secure]]: for every efficient $\calA$ there is an efficient $\calB$ with $\Adv^{\mathrm{cpa}}_{\PKE,\calA}(\secpar) \le 2\left(\Adv^{\mathrm{smp}}_{\calM,\calB}(\secpar) + \varepsilon\right)$ — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{Encryption from a hash proof system}
\begin{algorithmic}
\State $\KeyGen(1^\secpar)$: $\Lambda \gets \mathsf{I}(1^\secpar)$; $k \gets \mathsf{HPS}.\KeyGen(\Lambda)$; $\pk := (\Lambda, \mathsf{Proj}(k))$; $\sk := k$
\State $\Enc(\pk, m)$: sample $(x, w) \in R_\Lambda$ with $x$ uniform in $L$; $\pi := \mathsf{Pub}(s, x, w)$
\Return $(x, m \cdot \pi)$
\State $\Dec(\sk, (x, e))$:
\Return $e \cdot \mathsf{Priv}(k, x)^{-1}$
\end{algorithmic}
\end{algorithm}
```

## Sketch

Projectivity lets the reduction, which holds $k$, compute the challenge mask as $\mathsf{Priv}(k, x)$. Replacing $x \getsr L$ by $x \getsr X \setminus L$ costs the subset-membership advantage; smoothness then makes the mask $\varepsilon$-close to uniform in $\Pi$ given $\pk$, and a uniform mask hides $m$ perfectly.

## Notes

- Adding to the ciphertext the value of an extended universal-2 hash proof system on $(x, e)$, checked at decryption, gives IND-CCA2 security: [[universal2-hash-proof-system-to-pke-cca2-security-cs02|Universal-2 HPS ⇒ CCA-secure PKE]] — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].
- For a universal hash proof system, a variant that passes the mask through a randomness extractor tolerates leakage of a bounded number of bits of $\sk$, with no further assumption: [[universal-hash-proof-system-to-leakage-resilient-pke-ns09|Universal HPS ⇒ LR-PKE]] — [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]].
