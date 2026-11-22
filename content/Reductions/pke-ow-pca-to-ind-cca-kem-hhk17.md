---
type: reduction
status: draft
title: "OW-PCA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto transform U, implicit rejection)"
aliases: []
id: red-pke-ow-pca-to-ind-cca-kem-hhk17
kind: implication
hypotheses: [pke-ow-pca]
conclusion: ind-cca-kem
class: fully-black-box
model: rom
source:
  - "[[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]]"
security-loss: "additive: $2q_H/|\\calM|$ for $q_H$ queries to $H$, plus the probability $\\varepsilon_1$ that the base scheme fails to decrypt the encryption of a uniform message; the OW-PCA adversary runs the IND-CCA adversary once and makes at most $q_H$ plaintext-checking queries, whatever the number of decapsulation queries"
rationale:
  class: "The KEM calls the encryption and decryption of the base scheme and the oracle H only as oracles, and the OW-PCA adversary runs any IND-CCA adversary once as a black box."
  model: "HHK17 prove the step with H modelled as a random oracle, which the OW-PCA adversary simulates, keeping it consistent with the decapsulation answers it samples itself through the plaintext-checking oracle."
  security-loss: "The term 2q_H/|M| pays for a query to H at the secret rejection seed, and ε1 for a challenge ciphertext that does not decrypt to its message."
---

# OW-PCA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto transform U, implicit rejection)

## Statement

Let $\PKE_1 = (\KeyGen_1, \Enc_1, \Dec_1)$ be a [[public-key-encryption|PKE]] scheme whose finite message space $\calM = \calM_\secpar$ depends only on $\secpar$ and can be sampled uniformly in polynomial time, with ciphertext space $\calC$, and let $H : \calM \times \calC \to \bits^{\ell(\secpar)}$ be a random oracle, for a polynomial-time computable $\ell$ with $\secpar \le \ell(\secpar) \le \poly(\secpar)$. The transform $\mathrm{U}^{\not\perp}$ of [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] builds the [[key-encapsulation-mechanism|KEM]] $\mathrm{U}^{\not\perp}[\PKE_1, H]$, whose key is $H(m, c)$ and which rejects implicitly, returning $H(s, c)$ for a uniform seed $s \in \calM$ kept in the secret key — [[ABD+20 - FrodoKEM Learning With Errors Key Encapsulation Algorithm Specifications And Supporting Documentation|ABD+20]] (Figure 6):

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\KeyGen(1^\secpar)$}
\begin{algorithmic}
\State $(\sk_1, \pk) \gets \KeyGen_1(1^\secpar)$; $s \getsr \calM$
\Return $(\pk, \sk) := (\pk, (\sk_1, s))$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Encap(\pk)$}
\begin{algorithmic}
\State $m \getsr \calM$; $c \gets \Enc_1(\pk, m)$
\Return $(c, H(m, c))$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Decap((\sk_1, s), c)$}
\begin{algorithmic}
\State $m' \gets \Dec_1(\sk_1, c)$
\If{$m' = \bot$}
\Return $H(s, c)$
\Comment{Implicit rejection}
\EndIf
\Return $H(m', c)$
\end{algorithmic}
\end{algorithm}
```

The encapsulated key is uniform on $\bits^{\ell}$ over $H$, and $\Decap$ returns it unless $\Dec_1(\sk_1, c) \ne m$, which has probability $\varepsilon_1 := \Pr[\Dec_1(\sk_1, \Enc_1(\pk, m)) \ne m]$ over the key pair, $m \getsr \calM$, the coins and any random oracle of $\PKE_1$, at most the correctness error of $\PKE_1$ — standard.

HHK17 (Theorem 3.4) prove the KEM [[key-encapsulation-mechanism#ind-cca-security|IND-CCA-secure]] in the [[random-oracle-model|random-oracle model]] if $\PKE_1$ is one-way under plaintext-checking attacks, by a reduction that runs any IND-CCA adversary $\calA$ making at most $q_H$ queries to $H$ once as a black box, makes at most $q_H$ queries to the plaintext-checking oracle $\calO_{\mathrm{pc}}(m, c) := [\Dec_1(\sk_1, c) = m]$, and loses an additive $q_H/|\calM|$ in the advantage $|\Pr[b' = b] - \frac12|$ — ABD+20 (Section 5.1.1, Lemma 5.7), who restate it for deterministic $\PKE_1$. For the advantages of [[key-encapsulation-mechanism#ind-cca-security|KEM § IND-CCA security]] and of the [[public-key-encryption#ow-pca-security|OW-PCA game]], in which the OW-PCA adversary $\calB$ must output the challenge message $m^*$ itself, the argument of the Sketch, which uses no determinism, gives for every $\PKE_1$ and every $\calA$ making any number of decapsulation queries

$$
\Adv^{\mathrm{cca}}_{\mathrm{KEM},\calA}(\secpar) \le \frac{2q_H}{|\calM|} + \Adv^{\mathrm{ow\text{-}pca}}_{\PKE_1,\calB}(\secpar) + \varepsilon_1
$$

— standard, where $\calB$ also forwards $\calA$'s queries to any random oracle of $\PKE_1$, such as $G$ for $\PKE_1 = \mathrm{T}[\PKE, G]$. An adversary that outputs a fixed message wins the OW-PCA game with probability $1/|\calM|$, and $\varepsilon_1$ is negligible since $\PKE_1$ is $(1-\varepsilon)$-correct for a negligible $\varepsilon$; so if $\PKE_1$ is [[public-key-encryption#ow-pca-security|OW-PCA-secure]], the KEM is IND-CCA-secure in the random-oracle model.

## Sketch

Answering decapsulation queries on rejected ciphertexts with independent uniform keys in place of $H(s, c)$ changes the game only if $\calA$ queries $H$ at $(s, \cdot)$, which has probability at most $q_H/|\calM|$ since $s$ is then independent of its view, and costs $2q_H/|\calM|$ in the advantage. Answering every decapsulation query $c \ne c^*$ with a lazily sampled $D(c)$ and setting $H(m, c) := D(c)$ whenever $c \ne c^*$ and $\calO_{\mathrm{pc}}(m, c) = 1$ then changes nothing, and replacing the challenge key $H(m^*, c^*)$ by a uniform one makes $b$ independent of $\calA$'s view and changes the game only if $\calA$ queries $H$ at $(m^*, c^*)$, so the remaining advantage is at most the probability of that query. $\calB$ runs this last game; when $\calA$ queries $H$ at $(m^*, c^*)$ and $\Dec_1(\sk_1, c^*) = m^*$, $\calB$ outputs $m^*$, so the query has probability at most $\Adv^{\mathrm{ow\text{-}pca}}_{\PKE_1,\calB}(\secpar) + \varepsilon_1$.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\calB^{\calO_{\mathrm{pc}}}(\pk, c^*)$}
\begin{algorithmic}
\State $k^* \getsr \bits^{\ell}$; $L, D \gets$ empty tables
\State $\calO_D(c) := D[c]$, after $D[c] \getsr \bits^{\ell}$ if $D[c]$ is undefined
\Comment{Decapsulation oracle, for $c \ne c^*$}
\State $\calO_H(m, c) := \calO_D(c)$ if $c \ne c^*$ and $\calO_{\mathrm{pc}}(m, c) = 1$; otherwise $L[m, c]$, after $L[m, c] \getsr \bits^{\ell}$ if it is undefined
\State $b' \gets \calA^{\calO_H, \calO_D}(\pk, c^*, k^*)$
\Comment{Queries to random oracles of $\PKE_1$ are forwarded}
\Return the $m$ of a query $(m, c^*)$ to $\calO_H$ with $\calO_{\mathrm{pc}}(m, c^*) = 1$, or any message if there is none
\end{algorithmic}
\end{algorithm}
```

## Notes

- With key $H(m)$ in place of $H(m, c)$ and explicit rejection, returning $\bot$, on a deterministic $\PKE_1$, HHK17 (Theorem 3.5) base IND-CCA security on one-wayness of $\PKE_1$ against a ciphertext-validity oracle — [[HHM22 - Failing Gracefully Decryption Failures and the Fujisaki-Okamoto Transform|HHM22]] (Section 1, Appendix B and Fig. 17). For $\PKE_1 = \mathrm{T}[\PKE, G]$, HHK17 prove that one-wayness assuming that $\PKE$ has $\gamma$-spread ciphertexts, an assumption the plaintext-checking version, and so the implicit rejection above, does without — [[ABD+20 - FrodoKEM Learning With Errors Key Encapsulation Algorithm Specifications And Supporting Documentation|ABD+20]] (Section 5.1.1).
- Applied to $\mathrm{T}[\PKE, G]$ from [[pke-cpa-security-to-pke-ow-pca-hhk17|IND-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)]], the transform gives the Fujisaki–Okamoto KEM of [[ind-cpa-kem-to-ind-cca-security|IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)]] — [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]].
