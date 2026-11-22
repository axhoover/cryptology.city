---
type: reduction
status: draft
title: "IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)"
aliases: []
id: red-ind-cpa-kem-to-ind-cca-security
kind: implication
hypotheses: [pke-cpa-security]
conclusion: ind-cca-kem
class: fully-black-box
model: rom
source:
  - "[[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]]"
security-loss: "tight: the IND-CPA advantage plus $(q_G + q_H + 1)\\delta + (q_G + 3q_H + 1)/|\\calM|$ for $q_G$ and $q_H$ queries to $G$ and $H$; for a base scheme first converted bitwise to message space $\\bits^\\secpar$, a factor $\\secpar$ plus $2\\secpar(q_G + q_H + 1)\\varepsilon + (q_G + 3q_H + 1)2^{-\\secpar}$"
rationale:
  class: "The KEM calls the encryption of the base scheme with explicit coins, its decryption and the hash functions only as oracles, and the IND-CPA adversary runs any IND-CCA adversary once as a black box."
  model: "HHK17 prove both steps of the transform with G and H modelled as random oracles, which the reductions simulate."
  security-loss: "The U step costs 2q_H/|M| and the T step (q_G + q_H + 1)δ + (q_G + q_H + 1)/|M|, the failure of the challenge ciphertext to decrypt being one of the events bounded by the δ term."
---

# IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)

## Statement

Let $\PKE = (\KeyGen, \Enc, \Dec)$ be a [[public-key-encryption|PKE]] scheme whose finite message space $\calM = \calM_\secpar$ depends only on $\secpar$, consists of messages of one length and can be sampled uniformly in polynomial time, whose encryption draws its coins uniformly from a finite set $\calR$, written $\Enc(\pk, m; r)$, and that is $\delta$-correct in the sense of [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] (Section 2.1): the decryption-failure probability, maximized over $m \in \calM$ and then averaged over $(\sk, \pk) \gets \KeyGen(1^\secpar)$, is at most $\delta$. Let $G : \calM \to \calR$ and $H : \calM \times \calC \to \bits^{\ell(\secpar)}$ be random oracles, for a polynomial-time computable $\ell$ with $\secpar \le \ell(\secpar) \le \poly(\secpar)$. The Fujisaki–Okamoto [[key-encapsulation-mechanism|KEM]] with implicit rejection, $\mathrm{FO}^{\not\perp}[\PKE, G, H] := \mathrm{U}^{\not\perp}[\mathrm{T}[\PKE, G], H]$, derandomizes encryption with $G(m)$, derives the key as $H(m, c)$, and rejects implicitly with $H(s, c)$ for a uniform seed $s \in \calM$ — HHK17 (Section 3.3, Figure 18):

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\mathrm{FO}.\KeyGen(1^\secpar)$}
\begin{algorithmic}
\State $(\sk, \pk) \gets \KeyGen(1^\secpar)$; $s \getsr \calM$
\Return $(\pk, (\sk, \pk, s))$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\mathrm{FO}.\Encap(\pk)$}
\begin{algorithmic}
\State $m \getsr \calM$; $c \gets \Enc(\pk, m; G(m))$
\Return $(c, H(m, c))$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\mathrm{FO}.\Decap((\sk, \pk, s), c)$}
\begin{algorithmic}
\State $m' \gets \Dec(\sk, c)$
\If{$m' \ne \bot$ and $\Enc(\pk, m'; G(m')) = c$}
\Return $H(m', c)$
\Comment{Re-encryption check}
\EndIf
\Return $H(s, c)$
\Comment{Implicit rejection}
\end{algorithmic}
\end{algorithm}
```

The encapsulated key is uniform on $\bits^{\ell}$ over $H$, and $\mathrm{FO}.\Decap$ returns it unless $\Dec$ fails on $\Enc(\pk, m; G(m))$, which has probability at most $\delta$ since $G(m)$ is uniform on $\calR$ and independent of the key pair — standard. [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] (Section 3.3, table of simplified bounds, obtained from Theorems 3.1–3.6) state that for every IND-CCA adversary $\calA$ against $\mathrm{FO}^{\not\perp}[\PKE, G, H]$ in the [[random-oracle-model|random-oracle model]] there are an OW-CPA adversary $\calB_1$ and an IND-CPA adversary $\calB$ against $\PKE$ with

$$
\Adv^{\mathrm{IND\text{-}CCA}}_{\mathrm{KEM}}(\calA) \le q_{\mathrm{RO}}\delta + \frac{2q_{\mathrm{RO}}}{|\calM|} + 2q_{\mathrm{RO}}\Adv^{\mathrm{OW\text{-}CPA}}_{\PKE}(\calB_1), \qquad \Adv^{\mathrm{IND\text{-}CCA}}_{\mathrm{KEM}}(\calA) \le q_{\mathrm{RO}}\delta + \frac{3q_{\mathrm{RO}}}{|\calM|} + 3\Adv^{\mathrm{IND\text{-}CPA}}_{\PKE}(\calB)
$$

The conventions are HHK17's: advantages $|\Pr[b' = b] - \frac12|$ for IND-CCA and IND-CPA (Definitions 2.2 and 2.4), half those of [[key-encapsulation-mechanism#ind-cca-security|KEM § IND-CCA security]] and [[public-key-encryption#cpa-security|PKE § CPA Security]], and OW-CPA won by any output that $c^*$ decrypts to (Definition 2.1); $q_{\mathrm{RO}} := q_G + q_H$ counts $\calA$'s queries to $G$ and $H$ (Section 3.3), and HHK17 count among an adversary's queries to a random oracle the implicit ones made by the experiment (Section 2.1).

For the advantages of [[key-encapsulation-mechanism#ind-cca-security|KEM § IND-CCA security]] and [[public-key-encryption#cpa-security|PKE § CPA Security]], composing the bounds of the two steps, [[pke-ow-pca-to-ind-cca-kem-hhk17|OW-PCA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto transform U, implicit rejection)]] and [[pke-cpa-security-to-pke-ow-pca-hhk17|IND-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)]], with the failure of $c^*$ to decrypt counted once, as in the Sketch, gives the following. For every $\delta$-correct $\PKE$ and every IND-CCA adversary $\calA$ making $q_G$ and $q_H$ queries of its own to $G$ and $H$, with $q_{\mathrm{RO}} := q_G + q_H$, and any number of decapsulation queries, there is an IND-CPA adversary $\calB$ against $\PKE$, running in about the time of $\calA$ plus that of simulating the random oracles and using $\calA$ only as a black box, with

$$
\Adv^{\mathrm{cca}}_{\mathrm{KEM},\calA}(\secpar) \le (q_{\mathrm{RO}} + 1)\delta + \frac{q_G + 3q_H + 1}{|\calM|} + \Adv^{\mathrm{cpa}}_{\PKE,\calB}(\secpar)
$$

— standard. For $q_{\mathrm{RO}} \ge 1$ the right-hand side is at most $2q_{\mathrm{RO}}\delta + 6q_{\mathrm{RO}}/|\calM| + 3\Adv^{\mathrm{cpa}}_{\PKE,\calB}(\secpar)$, HHK17's IND-CPA bound doubled, which therefore holds for these games although the bound of HHK17's Theorem 3.4 for the second step lacks the probability that $c^*$ fails to decrypt — standard. So if $\PKE$ is [[public-key-encryption#cpa-security|IND-CPA-secure]] and $\delta$ and $1/|\calM|$ are negligible, $\mathrm{FO}^{\not\perp}[\PKE, G, H]$ is IND-CCA-secure in the random-oracle model.

IND-CPA security bounds neither $\delta$ nor $1/|\calM|$, and $\calM$ may be $\bits^*$, from which $m \getsr \calM$ is undefined. The transform is then applied to the $\secpar$-fold bitwise scheme $\PKE^\secpar$ of [[pke-cpa-security-to-pke-ow-pca-hhk17|IND-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)]], which encrypts $x \in \bits^\secpar$ componentwise, bit $x_i$ as an encryption of $m^{(x_i)}$ for the two messages $m^{(0)} \ne m^{(1)}$ of [[public-key-encryption#syntax|PKE § Syntax]]: it is $\delta$-correct with $\delta \le 2\secpar\varepsilon$ for a $(1-\varepsilon)$-correct $\PKE$ ([[pke-cpa-security-to-pke-ow-cpa|CPA-secure PKE ⇒ OW-CPA-secure PKE]]), and a hybrid over the components turns every IND-CPA adversary against it into one against $\PKE$ with advantage at least a $1/\secpar$ fraction — standard. For every IND-CPA-secure $\PKE$ this gives an IND-CCA-secure KEM in the random-oracle model, with

$$
\Adv^{\mathrm{cca}}_{\mathrm{KEM},\calA}(\secpar) \le 2\secpar(q_{\mathrm{RO}} + 1)\varepsilon + \frac{q_G + 3q_H + 1}{2^\secpar} + \secpar\Adv^{\mathrm{cpa}}_{\PKE,\calB'}(\secpar).
$$

## Sketch

The U step bounds the advantage by $2q_H/|\calM|$ plus the probability of a query $H(m^*, c^*)$ in a game that answers decapsulation queries through the plaintext-checking oracle of $\mathrm{T}[\PKE, G]$, and its OW-PCA adversary, which makes $q_G$ queries to $G$ and at most $q_H$ plaintext-checking queries, outputs $m^*$ whenever that query occurs and $c^*$ decrypts to $m^*$. In the T step for this adversary, the term $(q_{\mathrm{RO}} + 1)\delta$ bounds the event that one of the at most $q_{\mathrm{RO}} + 1$ points at which $G$ is evaluated, $m^*$ among them, fails to decrypt under its coins, which includes the failure of $c^*$; outside that event the adversary's success is at most $(q_{\mathrm{RO}} + 1)/|\calM| + \Adv^{\mathrm{cpa}}_{\PKE,\calB}(\secpar)$.

## Notes

- HHK17 obtain their table bounds by combining their theorems on the two transforms, [[pke-cpa-security-to-pke-ow-pca-hhk17|IND-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)]] and [[pke-ow-pca-to-ind-cca-kem-hhk17|OW-PCA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto transform U, implicit rejection)]]. Earlier analyses of the transform needed a perfectly correct base scheme and were not tight — [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] (Section 1).
- The transform originates in [[FO99 - Secure Integration of Asymmetric and Symmetric Encryption Schemes|FO99]], which combines any OW-CPA-secure public-key encryption scheme with any one-time secure symmetric encryption scheme into a hybrid scheme that is IND-CCA-secure in the random-oracle model; [[Den03 - A Designer's Guide to KEMs|Den03]] (Table 5) gives a KEM version, which the explicit-rejection variant $\mathrm{FO}^{\perp}_m := \mathrm{U}^{\perp}_m[\mathrm{T}[\PKE, G], H]$, with key $H(m)$, essentially recovers — [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] (Sections 1, 1.1.2 and 1.2).
- From a [[public-key-encryption#ow-cpa-security|one-way]] $\PKE$ in place of an IND-CPA-secure one, the same composition with [[pke-ow-cpa-to-pke-ow-pca-hhk17|OW-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)]] as first step gives, for these games, $\Adv^{\mathrm{cca}}_{\mathrm{KEM},\calA}(\secpar) \le 2q_H/|\calM| + (q_{\mathrm{RO}} + 1)\delta + (q_{\mathrm{RO}} + 1)\Adv^{\mathrm{ow\text{-}cpa}}_{\PKE,\calB_1}(\secpar)$ — standard; the loss is a factor $q_{\mathrm{RO}} + 1$. The explicit-rejection variants $\mathrm{FO}^{\perp}$ and $\mathrm{FO}^{\perp}_m$ need $\PKE$ to be $\gamma$-spread, the implicit-rejection variants $\mathrm{FO}^{\not\perp}$ and $\mathrm{FO}^{\not\perp}_m$ do not — [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] (Section 1.1.2).
- In the quantum random-oracle model, HHK17 analyse $\mathrm{QFO}^{\perp}_m[\PKE, G, H, H'] := \mathrm{QU}^{\perp}_m[\mathrm{T}[\PKE, G], H, H']$ and its implicit-rejection version $\mathrm{QFO}^{\not\perp}_m$, which append $d := H'(m)$ to the ciphertext, derive the key as $H(m)$, and reject when the decryption $m'$ of $\mathrm{T}[\PKE, G]$ is $\bot$ or $H'(m') \ne d$, implicitly with $H(s, c, d)$ in $\mathrm{QFO}^{\not\perp}_m$; for $\delta$-correct $\PKE$ both satisfy $\Adv^{\mathrm{IND\text{-}CCA}}_{\mathrm{KEM}}(\calA) \le 8q_{\mathrm{RO}}\big(\sqrt{q_{\mathrm{RO}}^2 \delta + q_{\mathrm{RO}}\sqrt{\Adv^{\mathrm{OW\text{-}CPA}}_{\PKE}(\calB)}} + q_{\mathrm{RO}}\delta\big)$, with $q_{\mathrm{RO}} := q_G + q_H + q_{H'}$ counting implicit and explicit queries — [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] (Section 4.4, from Theorem 4.4 for $\mathrm{T}$ and Theorems 4.5 and 4.6 for $\mathrm{QU}^{\perp}_m$ and $\mathrm{QU}^{\not\perp}_m$, which assume the derandomized scheme rigid, as $\mathrm{T}[\PKE, G]$ is). Without the extra hash, $\mathrm{FO}^{\not\perp}[\PKE, G, H]$ is IND-CCA-secure in that model if $\PKE$ is one-way, with additive terms of order $q_H/\sqrt{|\calM|}$ and $q_G\sqrt{\delta}$ and a term of order $(q_G + q_H)$ times the square root of the one-wayness advantage, for $q_G$ and $q_H$ quantum queries to $G$ and $H$ and classical decapsulation queries — [[JZC+18 - IND-CCA-Secure Key Encapsulation Mechanism in the Quantum Random Oracle Model, Revisited|JZC+18]] (Theorem 1), as restated by [[ABD+20 - FrodoKEM Learning With Errors Key Encapsulation Algorithm Specifications And Supporting Documentation|ABD+20]] (Section 5.1.2, Theorem 5.8).
