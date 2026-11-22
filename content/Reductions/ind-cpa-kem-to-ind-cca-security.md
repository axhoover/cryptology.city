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
security-loss: "a factor $3$ on the IND-CPA advantage, plus $2q\\delta + (6q + 2)/|\\calM|$ for $q$ oracle queries in total; for a base scheme first converted bitwise to message space $\\bits^\\secpar$, a factor $3\\secpar$ plus $4\\secpar q\\varepsilon + (6q + 2)2^{-\\secpar}$"
rationale:
  class: "The KEM calls the encryption of the base scheme with explicit coins, its decryption and the hash functions only as oracles, and the IND-CPA adversary uses any IND-CCA adversary only as a black box, as ABD+20 observe of the proof of HHK17."
  model: "HHK17 prove both steps of the transform with G and H modelled as random oracles, which the reductions simulate."
  security-loss: "The bound is the one HHK17 state for the composed transform, restated by ABD+20 for the advantage |Pr[b' = b] − 1/2| and doubled here for the advantage |2Pr[b' = b] − 1|."
---

# IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)

## Statement

Let $\PKE = (\KeyGen, \Enc, \Dec)$ be a [[public-key-encryption|PKE]] scheme whose finite message space $\calM = \calM_\secpar$ depends only on $\secpar$, consists of messages of one length and can be sampled uniformly in polynomial time, whose encryption draws its coins uniformly from a finite set $\calR$, written $\Enc(\pk, m; r)$, and that is $\delta$-correct in the sense of [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]]: the decryption-failure probability, maximized over $m \in \calM$ and then averaged over $(\sk, \pk) \gets \KeyGen(1^\secpar)$, is at most $\delta$. Let $G : \calM \to \calR$ and $H : \calM \times \calC \to \bits^{\ell(\secpar)}$ be random oracles, for a polynomial-time computable $\ell$ with $\secpar \le \ell(\secpar) \le \poly(\secpar)$. The Fujisaki–Okamoto [[key-encapsulation-mechanism|KEM]] with implicit rejection, $\mathrm{FO}^{\not\perp}[\PKE, G, H] := \mathrm{U}^{\not\perp}[\mathrm{T}[\PKE, G], H]$ in the notation of HHK17, derandomizes encryption with $G(m)$, derives the key as $H(m, c)$, and rejects implicitly with $H(s, c)$ for a uniform seed $s \in \calM$ — [[ABD+20 - FrodoKEM Learning With Errors Key Encapsulation Algorithm Specifications And Supporting Documentation|ABD+20]] (Section 5.1.1, Figures 5 and 6):

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

The encapsulated key is uniform on $\bits^{\ell}$ over $H$, and $\mathrm{FO}.\Decap$ returns it unless $\Dec$ fails on $\Enc(\pk, m; G(m))$, which has probability at most $\delta$ since $G(m)$ is uniform on $\calR$ and independent of the key pair — standard. For every $\delta$-correct $\PKE$ and every [[key-encapsulation-mechanism#ind-cca-security|IND-CCA]] adversary $\calA$ in the [[random-oracle-model|random-oracle model]] making at most $q$ oracle queries in total, there is an IND-CPA adversary $\calB$ against $\PKE$, running in about the time of $\calA$ plus that of simulating the random oracles and using $\calA$ only as a black box, with

$$
\left|\Pr[b' = b] - \tfrac12\right| \le \frac{q}{|\calM|} + \frac{2q + 1}{|\calM|} + q\delta + 3\left|\Pr\!\left[\Game^{\mathrm{cpa}}_{\PKE,\calB}(\secpar) = 1\right] - \tfrac12\right|
$$

— [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]], as restated by [[ABD+20 - FrodoKEM Learning With Errors Key Encapsulation Algorithm Specifications And Supporting Documentation|ABD+20]] (Section 5.1.1, Theorem 5.1 in the case $P = Q$, which they credit to HHK17). For the advantages of [[key-encapsulation-mechanism#ind-cca-security|KEM § IND-CCA security]] and [[public-key-encryption#cpa-security|PKE § CPA Security]], doubling both sides,

$$
\Adv^{\mathrm{cca}}_{\mathrm{KEM},\calA}(\secpar) \le 3\Adv^{\mathrm{cpa}}_{\PKE,\calB}(\secpar) + 2q\delta + \frac{6q + 2}{|\calM|},
$$

so if $\PKE$ is [[public-key-encryption#cpa-security|IND-CPA-secure]] and $\delta$ and $1/|\calM|$ are negligible, $\mathrm{FO}^{\not\perp}[\PKE, G, H]$ is IND-CCA-secure in the random-oracle model.

IND-CPA security bounds neither $\delta$ nor $1/|\calM|$, and $\calM$ may be $\bits^*$, from which $m \getsr \calM$ is undefined. The transform is then applied to the $\secpar$-fold bitwise scheme $\PKE^\secpar$ of [[pke-cpa-security-to-pke-ow-pca-hhk17|IND-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)]], which encrypts $x \in \bits^\secpar$ componentwise, bit $x_i$ as an encryption of $m^{(x_i)}$ for the two messages $m^{(0)} \ne m^{(1)}$ of [[public-key-encryption#syntax|PKE § Syntax]]: it is $\delta$-correct with $\delta \le 2\secpar\varepsilon$ for a $(1-\varepsilon)$-correct $\PKE$, and a hybrid over the components turns every IND-CPA adversary against it into one against $\PKE$ with advantage at least a $1/\secpar$ fraction — standard. For every IND-CPA-secure $\PKE$ this gives an IND-CCA-secure KEM in the random-oracle model, with

$$
\Adv^{\mathrm{cca}}_{\mathrm{KEM},\calA}(\secpar) \le 3\secpar\Adv^{\mathrm{cpa}}_{\PKE,\calB'}(\secpar) + 4\secpar q\varepsilon + \frac{6q + 2}{2^\secpar}.
$$

## Notes

- HHK17 prove the theorem by composing the two transforms: [[pke-cpa-security-to-pke-ow-pca-hhk17|IND-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)]] and [[pke-ow-pca-to-ind-cca-kem-hhk17|OW-PCA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto transform U, implicit rejection)]]. Earlier analyses of the transform needed a perfectly correct base scheme and were not tight — [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]].
- The transform originates in [[FO99 - Secure Integration of Asymmetric and Symmetric Encryption Schemes|FO99]], which combines a weakly secure public-key and a weakly secure secret-key encryption scheme into an IND-CCA-secure PKE scheme in the random-oracle model; [[Den03 - A Designer's Guide to KEMs|Den03]] (Table 5) adapted it to KEMs — both as credited by [[HHM22 - Failing Gracefully Decryption Failures and the Fujisaki-Okamoto Transform|HHM22]] (Section 1).
- From a [[public-key-encryption#ow-cpa-security|one-way]] $\PKE$ in place of an IND-CPA-secure one, HHK17 (Theorem 3.1) obtain the one-wayness of $\mathrm{T}[\PKE, G]$ non-tightly — [[HHM22 - Failing Gracefully Decryption Failures and the Fujisaki-Okamoto Transform|HHM22]] (Appendix B). With explicit rejection, returning $\bot$, and key $H(m)$, HHK17 (Theorem 3.5) base IND-CCA security on one-wayness of $\mathrm{T}[\PKE, G]$ against a ciphertext-validity oracle — HHM22 (Appendix B); HHK17 prove that one-wayness assuming that $\PKE$ has $\gamma$-spread ciphertexts — [[ABD+20 - FrodoKEM Learning With Errors Key Encapsulation Algorithm Specifications And Supporting Documentation|ABD+20]] (Section 5.1.1).
- In the quantum random-oracle model, $\mathrm{FO}^{\not\perp}[\PKE, G, H]$ is IND-CCA-secure if $\PKE$ is one-way, with additive terms of order $q_H/\sqrt{|\calM|}$ and $q_G\sqrt{\delta}$ and a term of order $(q_G + q_H)$ times the square root of the one-wayness advantage, for $q_G$ and $q_H$ quantum queries to $G$ and $H$ and classical decapsulation queries — [[JZC+18 - IND-CCA-Secure Key Encapsulation Mechanism in the Quantum Random Oracle Model, Revisited|JZC+18]] (Theorem 1), as restated by ABD+20 (Section 5.1.2, Theorem 5.8). HHK17 analyse, in that model, variants that append a hash of $m$ to the ciphertext — HHM22 (Appendix A).
