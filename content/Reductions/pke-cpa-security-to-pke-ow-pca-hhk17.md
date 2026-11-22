---
type: reduction
status: draft
title: "IND-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)"
aliases: []
id: red-pke-cpa-security-to-pke-ow-pca-hhk17
kind: implication
hypotheses: [pke-cpa-security]
conclusion: pke-ow-pca
class: fully-black-box
model: rom
source:
  - "[[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]]"
security-loss: "tight: the IND-CPA advantage plus $(q + 1)\\delta + (q + 1)/|\\calM|$ for $q$ queries to $G$ and the plaintext-checking oracle together; for a base scheme first converted bitwise to message space $\\bits^\\secpar$, a factor $\\secpar$ plus $2\\secpar(q + 1)\\varepsilon + (q + 1)2^{-\\secpar}$"
rationale:
  class: "T[PKE, G] calls the encryption of PKE with explicit coins, its decryption and the oracle G only as oracles, and the IND-CPA adversary runs any OW-PCA adversary once as a black box."
  model: "HHK17 prove the step with G modelled as a random oracle, which the IND-CPA adversary simulates."
  security-loss: "Replacing the plaintext-checking oracle by a re-encryption check costs δ for the challenge message and for each message queried to G or to that oracle, and one IND-CPA adversary then detects both an output of and a query to G at the challenge message, at a cost of (q + 1)/|M|."
---

# IND-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)

## Statement

Let $\PKE = (\KeyGen, \Enc, \Dec)$ be a [[public-key-encryption|PKE]] scheme whose finite message space $\calM = \calM_\secpar$ depends only on $\secpar$, consists of messages of one length and can be sampled uniformly in polynomial time, and whose encryption draws its coins uniformly from a finite set $\calR$, written $\Enc(\pk, m; r)$. $\PKE$ is $\delta$-correct if

$$
\mathbb{E}_{(\sk, \pk) \gets \KeyGen(1^\secpar)}\!\left[\max_{m \in \calM} \Pr_{r \getsr \calR}\!\left[\Dec(\sk, \Enc(\pk, m; r)) \ne m\right]\right] \le \delta
$$

— [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] (Section 2.1). Let $G : \calM \to \calR$ be a random oracle. The transform $\mathrm{T}$ of HHK17 derandomizes encryption with $G$ and adds a re-encryption check to decryption: $\PKE_1 := \mathrm{T}[\PKE, G]$ has the key generation of $\PKE$, with $\pk$ kept in the secret key, and the following encryption and decryption — [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] (Section 3.1, Figure 5):

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\Enc_1(\pk, m)$}
\begin{algorithmic}
\Return $\Enc(\pk, m; G(m))$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Dec_1((\sk, \pk), c)$}
\begin{algorithmic}
\State $m' \gets \Dec(\sk, c)$
\If{$m' = \bot$ or $\Enc(\pk, m'; G(m')) \ne c$}
\Return $\bot$
\Comment{Re-encryption check}
\EndIf
\Return $m'$
\end{algorithmic}
\end{algorithm}
```

$\PKE_1$ is deterministic and rigid, that is, $\Enc_1(\pk, \Dec_1((\sk, \pk), c)) = c$ whenever $\Dec_1((\sk, \pk), c) \ne \bot$, and it is $\delta_1$-correct in the [[random-oracle-model|random-oracle model]] with $\delta_1(q_G) = q_G\delta$, where $q_G$ counts the evaluations of $G$ in the correctness experiment, that of encrypting the output included — HHK17 (Theorem 3.1 and its proof). It decrypts $\Enc_1(\pk, m)$ correctly whenever $\Dec$ returns $m$ on it, since re-encryption then reproduces the ciphertext, and $G(m)$ is uniform on $\calR$ when first evaluated, so each point at which $G$ is evaluated fails with probability at most $\delta$ — standard.

HHK17 (Theorem 3.2) state that if $\PKE$ is $\delta$-correct and $\gamma$-spread, then for every adversary $\calA$ against the one-wayness of $\PKE_1$ under plaintext- and validity-checking attacks (OW-PCVA) making at most $q_G$ queries to $G$, $q_P$ to the plaintext-checking oracle and $q_V$ to the validity-checking oracle, there is an IND-CPA adversary $\calB$ against $\PKE$, running in about the time of $\calA$, with

$$
\Adv^{\mathrm{OW\text{-}PCVA}}_{\PKE_1}(\calA) \le (q_G + q_P)\delta + q_V 2^{-\gamma} + \frac{2q_G + 1}{|\calM|} + 3\Adv^{\mathrm{IND\text{-}CPA}}_{\PKE}(\calB).
$$

The conventions are HHK17's: $\Adv^{\mathrm{IND\text{-}CPA}}_{\PKE}(\calB) := |\Pr[b' = b] - \frac12|$ (Definition 2.2), half the advantage of [[public-key-encryption#cpa-security|PKE § CPA Security]]; the OW-PCVA adversary wins iff its output $m'$ satisfies $\Dec_1(\sk, c^*) = m'$, and the plaintext-checking oracle accepts only messages in $\calM$ (Definition 2.1, Figure 3); $q_G$ counts every evaluation of $G$ in the experiment, the adversary's explicit queries and the implicit ones made by the experiment (Section 2.1). With $q_V = 0$ the game is OW-PCA, for which HHK17 drop the spreadness assumption (Section 3.1).

In the [[public-key-encryption#ow-pca-security|OW-PCA game]] for $\PKE_1$, $\calA$ receives $\pk$ and $c^* := \Enc_1(\pk, m^*)$ for $m^* \getsr \calM$, queries $G$ and the plaintext-checking oracle $\calO_{\mathrm{pc}}(m, c) := [\Dec_1((\sk, \pk), c) = m]$, and must output $m^*$. For every $\delta$-correct $\PKE$ and every $\calA$ making at most $q_G$ queries to $G$ and $q_P$ queries to $\calO_{\mathrm{pc}}$ of its own, with $q := q_G + q_P$, the argument of the Sketch gives an IND-CPA adversary $\calB$ against $\PKE$, running in about the time of $\calA$ plus that of simulating $G$ and $\calO_{\mathrm{pc}}$ and using $\calA$ only as a black box, with

$$
\Adv^{\mathrm{ow\text{-}pca}}_{\PKE_1,\calA}(\secpar) \le (q + 1)\delta + \frac{q + 1}{|\calM|} + \Adv^{\mathrm{cpa}}_{\PKE,\calB}(\secpar)
$$

— standard. So if $\PKE$ is [[public-key-encryption#cpa-security|IND-CPA-secure]] and $\delta$ and $1/|\calM|$ are negligible, $\mathrm{T}[\PKE, G]$ is [[public-key-encryption#ow-pca-security|OW-PCA-secure]] in the random-oracle model, and $\delta_1(q) = q\delta$ is negligible for every polynomial $q$.

IND-CPA security bounds neither $\delta$ nor $1/|\calM|$: a CPA-secure scheme need only have the two messages $m^{(0)} \ne m^{(1)}$ of [[public-key-encryption#syntax|PKE § Syntax]], and its $(1-\varepsilon)$-correctness bounds the failure probability of each message averaged over the key pair, not that of the worst message for each key pair. The scheme $\PKE^\secpar$ with message space $\bits^\secpar$ that keeps $\pk$ in the secret key, encrypts $x$ componentwise, bit $x_i$ as $\Enc(\pk, m^{(x_i)})$ with independent coins, and decrypts componentwise, outputting $\bot$ if some component decrypts to neither message, is $\delta$-correct with $\delta \le 2\secpar\varepsilon$ ([[pke-cpa-security-to-pke-ow-cpa|CPA-secure PKE ⇒ OW-CPA-secure PKE]]), and a hybrid over the components gives, for every IND-CPA adversary $\calB$ against $\PKE^\secpar$, an IND-CPA adversary $\calB'$ against $\PKE$ with $\Adv^{\mathrm{cpa}}_{\PKE^\secpar,\calB}(\secpar) \le \secpar\Adv^{\mathrm{cpa}}_{\PKE,\calB'}(\secpar)$ — standard. Applied to $\PKE^\secpar$, with $G : \bits^\secpar \to \calR^\secpar$, the transform gives, from every IND-CPA-secure PKE scheme, a scheme that is $\delta_1$-correct with $\delta_1(q) \le 2q\secpar\varepsilon$ and OW-PCA-secure in the random-oracle model, with $\Adv^{\mathrm{ow\text{-}pca}}_{\mathrm{T}[\PKE^\secpar, G],\calA}(\secpar) \le 2\secpar(q + 1)\varepsilon + (q + 1)2^{-\secpar} + \secpar\Adv^{\mathrm{cpa}}_{\PKE,\calB'}(\secpar)$.

## Sketch

Answering each query $\calO_{\mathrm{pc}}(m, c)$ with the re-encryption test $[\Enc(\pk, m; G(m)) = c]$ changes the game only if $\Dec(\sk, \Enc(\pk, m; G(m))) \ne m$ for $m = m^*$ or for one of the at most $q$ messages $m$ that $\calA$ queries to $G$ or $\calO_{\mathrm{pc}}$, which has probability at most $(q + 1)\delta$ since $G(m)$ is uniform on $\calR$ when first evaluated. The game then uses no secret key, and encrypting $m^*$ under fresh coins in place of $G(m^*)$ changes it only if $G$ is evaluated at $m^*$. $\calB$ submits two uniform messages $m_0, m_1 \in \calM$, runs $\calA$ on its challenge with this simulation, and outputs $1$ iff $\calA$ outputs $m_1$ or $G$ is evaluated at $m_1$: if $m_1$ is encrypted, this is the probability that $\calA$ outputs or evaluates $G$ at the challenge message, and if $m_0$ is, it is at most $(q + 1)/|\calM|$, since $m_1$ is then independent of $\calA$'s view.

## Notes

- HHK17 (Theorem 3.2) also cover a validity-checking oracle, at an additive $q_V 2^{-\gamma}$, when $\PKE$ is $\gamma$-spread: for every key pair and every $m \in \calM$, each ciphertext has probability at most $2^{-\gamma}$ under $\Enc(\pk, m; r)$ for $r \getsr \calR$ (Section 2.1).
- From [[public-key-encryption#ow-cpa-security|OW-CPA security]] of $\PKE$ alone, HHK17 (Theorem 3.1) prove the same conclusion with a factor $q_G + q_P + 1$ on the OW-CPA advantage: [[pke-ow-cpa-to-pke-ow-pca-hhk17|OW-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)]].
- Followed by [[pke-ow-pca-to-ind-cca-kem-hhk17|OW-PCA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto transform U, implicit rejection)]], the transform gives the Fujisaki–Okamoto KEM of [[ind-cpa-kem-to-ind-cca-security|IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)]] — [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] (Section 3.3).
