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

Let $\PKE_1 = (\KeyGen_1, \Enc_1, \Dec_1)$ be a [[public-key-encryption|PKE]] scheme whose finite message space $\calM = \calM_\secpar$ depends only on $\secpar$ and can be sampled uniformly in polynomial time, with ciphertext space $\calC$, and let $H : \calM \times \calC \to \bits^{\ell(\secpar)}$ be a random oracle, for a polynomial-time computable $\ell$ with $\secpar \le \ell(\secpar) \le \poly(\secpar)$. The transform $\mathrm{U}^{\not\perp}$ of [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] builds the [[key-encapsulation-mechanism|KEM]] $\mathrm{U}^{\not\perp}[\PKE_1, H]$, whose key is $H(m, c)$ and which rejects implicitly, returning $H(s, c)$ for a uniform seed $s \in \calM$ kept in the secret key — HHK17 (Section 3.2.2, Figure 12):

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

The encapsulated key is uniform on $\bits^{\ell}$ over $H$, and $\Decap$ returns it unless $\Dec_1(\sk_1, c) \ne m$, which has probability $\varepsilon_1 := \Pr[\Dec_1(\sk_1, \Enc_1(\pk, m)) \ne m]$ over the key pair, $m \getsr \calM$, the coins and any random oracle of $\PKE_1$, at most $\delta_1$ for a $\delta_1$-correct $\PKE_1$, as defined under [[public-key-encryption#ow-cpa-security|PKE § OW-CPA security]], evaluated for a scheme defined relative to a random oracle at the number of evaluations made by one encryption and one decryption — standard; HHK17 (Theorem 3.4) prove the KEM $\delta_1$-correct in that case.

HHK17 (Theorem 3.4) state that for every IND-CCA adversary $\calA$ against the KEM making at most $q_D$ decapsulation queries and at most $q_H$ queries to $H$, there is an adversary $\calB$ against the one-wayness of $\PKE_1$ under plaintext-checking attacks, making at most $q_H$ queries to the plaintext-checking oracle and running in about the time of $\calA$, with

$$
\Adv^{\mathrm{IND\text{-}CCA}}_{\mathrm{KEM}}(\calA) \le \frac{q_H}{|\calM|} + \Adv^{\mathrm{OW\text{-}PCA}}_{\PKE_1}(\calB),
$$

in the [[random-oracle-model|random-oracle model]]. The conventions are HHK17's: $\Adv^{\mathrm{IND\text{-}CCA}}_{\mathrm{KEM}}(\calA) := |\Pr[b' = b] - \frac12|$ (Definition 2.4, Figure 4), half the advantage of [[key-encapsulation-mechanism#ind-cca-security|KEM § IND-CCA security]], whose one-phase game HHK17 also use; the OW-PCA adversary wins iff its output $m'$ satisfies $\Dec_1(\sk_1, c^*) = m'$, and the plaintext-checking oracle $\calO_{\mathrm{pc}}(m, c) := [\Dec_1(\sk_1, c) = m]$ accepts only $m \in \calM$ (Definition 2.1, Figure 3); $q_H$ counts every evaluation of $H$ in the experiment, the adversary's explicit queries and the implicit ones made by the experiment, by the convention stated with their random-oracle one-wayness and IND-CPA games (Section 2.1). The theorem does not require $\Enc_1$ to be deterministic. Its bound lacks the term $\varepsilon_1$ of the bound below, which the first Note shows is needed.

For the advantages of [[key-encapsulation-mechanism#ind-cca-security|KEM § IND-CCA security]] and of the [[public-key-encryption#ow-pca-security|OW-PCA game]], in which the OW-PCA adversary $\calB$ must output the challenge message $m^*$ itself, the argument of the Sketch gives for every $\PKE_1$ and every $\calA$ making at most $q_H$ queries to $H$ of its own and any number of decapsulation queries

$$
\Adv^{\mathrm{cca}}_{\mathrm{KEM},\calA}(\secpar) \le \frac{2q_H}{|\calM|} + \Adv^{\mathrm{ow\text{-}pca}}_{\PKE_1,\calB}(\secpar) + \varepsilon_1
$$

— standard, where $\calB$ makes at most $q_H$ plaintext-checking queries and forwards $\calA$'s queries to any random oracle of $\PKE_1$, such as $G$ for $\PKE_1 = \mathrm{T}[\PKE, G]$. An adversary that outputs a fixed message wins the OW-PCA game with probability $1/|\calM|$, and an [[public-key-encryption#ow-pca-security|OW-PCA-secure]] $\PKE_1$ is $\delta_1$-correct for a negligible $\delta_1$, which makes $\varepsilon_1$ negligible. So if $\PKE_1$ is OW-PCA-secure, the KEM is IND-CCA-secure in the random-oracle model.

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

- The bound of HHK17 (Theorem 3.4) holds only with an additional term $\Pr[\Dec_1(\sk_1, c^*) \ne m^*] \le \delta_1$, the term $\varepsilon_1$ above: its proof hides $H(m^*, c^*)$ from the adversary only when $c^*$ decrypts to $m^*$ (Section 3.2.2, game $G_3$ of Figure 13). A deterministic $\PKE_1$ with $\calM = \bits^n$ that, under a fraction $\varepsilon_1$ of its key pairs, encrypts $m$ as $(1, m)$, decrypts $(1, x)$ to $x \oplus p$ for a uniform secret $p \ne 0^n$ and rejects every other ciphertext, and otherwise runs a perfectly correct deterministic OW-PCA-secure scheme, shows that the term is needed. Reading $m^*$ from $c^*$ and comparing $H(m^*, c^*)$ with the challenge key gives IND-CCA advantage about $\varepsilon_1/2$ in HHK17's normalization, whereas under those key pairs an OW-PCA adversary in HHK17's sense must output $m^* \oplus p$, and each plaintext-checking query tests one candidate for $p$, so the theorem's right-hand side exceeds the OW-PCA advantage against the other scheme by at most $q_H 2^{-n} + \varepsilon_1 (q_H + 1)/(2^n - 1)$ — standard. The same example applies to Theorem 3.3 below.
- For explicit rejection, returning $\bot$ when $\Dec_1(\sk_1, c) = \bot$, with the same key $H(m, c)$, [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] (Theorem 3.3, Figure 9) state that the transform $\mathrm{U}^{\perp}$ satisfies $\Adv^{\mathrm{IND\text{-}CCA}}_{\mathrm{KEM}}(\calA) \le \Adv^{\mathrm{OW\text{-}PCVA}}_{\PKE_1}(\calB)$ for an adversary $\calB$ against one-wayness under plaintext- and validity-checking attacks that makes at most $q_H$ queries to each oracle; by the example above, this bound too needs the term $\varepsilon_1$.
- With key $H(m)$ in place of $H(m, c)$, for deterministic and rigid $\PKE_1$, which satisfies $\Enc_1(\pk, \Dec_1(\sk_1, c)) = c$ whenever $\Dec_1(\sk_1, c) \ne \bot$, HHK17 base the explicit-rejection transform $\mathrm{U}^{\perp}_m$ on one-wayness against a validity-checking oracle alone, with $\Adv^{\mathrm{IND\text{-}CCA}}_{\mathrm{KEM}}(\calA) \le \Adv^{\mathrm{OW\text{-}VA}}_{\PKE_1}(\calB) + \delta_1(q_G + (q_H + q_D)(q_{\Enc_1, G} + q_{\Dec_1, G}))$ (Theorem 3.5), and the implicit-rejection transform $\mathrm{U}^{\not\perp}_m$ on OW-CPA security, with $\Adv^{\mathrm{OW\text{-}CPA}}_{\PKE_1}(\calB) + q_D/|\calM| + \delta_1(q_G + (q_H + q_D)(q_{\Enc_1, G} + q_{\Dec_1, G}))$ (Theorem 3.6), where $q_{\Enc_1, G}$ and $q_{\Dec_1, G}$ bound the queries that one run of $\Enc_1$ and of $\Dec_1$ makes to the random oracle $G$ of $\PKE_1$, if any. Both theorems assume rigidity: [[BP18 - Towards KEM Unification|BP18]] observed that their versions in earlier revisions of HHK17, without it, were incorrect and that requiring rigidity fixes them, as credited by HHK17 (Errata); $\mathrm{T}[\PKE, G]$ is rigid (Theorem 3.1).
- Composed with $\mathrm{T}$, the explicit-rejection transforms $\mathrm{U}^{\perp}$ and $\mathrm{U}^{\perp}_m$ need the base scheme to be $\gamma$-spread, while $\mathrm{U}^{\not\perp}$ and $\mathrm{U}^{\not\perp}_m$ need no spreadness — [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] (Section 1.1.2).
- Applied to $\mathrm{T}[\PKE, G]$ from [[pke-cpa-security-to-pke-ow-pca-hhk17|IND-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)]], the transform gives the Fujisaki–Okamoto KEM of [[ind-cpa-kem-to-ind-cca-security|IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)]] — [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] (Section 3.3).
