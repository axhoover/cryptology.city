---
type: reduction
status: draft
title: "OW-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)"
aliases: []
id: red-pke-ow-cpa-to-pke-ow-pca-hhk17
kind: implication
hypotheses: [pke-ow-cpa]
conclusion: pke-ow-pca
class: fully-black-box
model: rom
source:
  - "[[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]]"
security-loss: "a factor $q + 1$ on the OW-CPA advantage, plus $(q + 1)\\delta$, for $q$ queries to $G$ and the plaintext-checking oracle together; the OW-CPA adversary runs the OW-PCA adversary once"
rationale:
  class: "T[PKE, G] calls the encryption of PKE with explicit coins, its decryption and the oracle G only as oracles, and the OW-CPA adversary runs any OW-PCA adversary once as a black box."
  model: "HHK17 prove the step with G modelled as a random oracle, which the OW-CPA adversary samples lazily and uses to answer plaintext-checking queries by re-encryption."
  security-loss: "Re-encryption replaces the plaintext-checking oracle at a cost of δ for each point at which G is evaluated, and the OW-CPA adversary guesses which of at most q + 1 candidate messages is the challenge."
---

# OW-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)

## Statement

Let $\PKE = (\KeyGen, \Enc, \Dec)$ be a [[public-key-encryption#ow-cpa-security|OW-CPA-secure]] [[public-key-encryption|PKE]] scheme, $\delta$-correct as defined there, whose encryption draws its coins uniformly from a finite set $\calR$, written $\Enc(\pk, m; r)$, and let $G : \calM \to \calR$ be a random oracle. The transform $\mathrm{T}$ of [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] (Section 3.1, Figure 5) gives the scheme $\PKE_1 := \mathrm{T}[\PKE, G]$ with the key generation and message space of $\PKE$, deterministic encryption $\Enc_1(\pk, m) := \Enc(\pk, m; G(m))$, and decryption that outputs $m' := \Dec(\sk, c)$ unless $m' = \bot$ or $\Enc(\pk, m'; G(m')) \ne c$, in which case it outputs $\bot$; the pseudocode is on [[pke-cpa-security-to-pke-ow-pca-hhk17|IND-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)]].

HHK17 (Theorem 3.1) prove that if $\PKE$ is $\delta$-correct, then $\PKE_1$ is $\delta_1$-correct in the [[random-oracle-model|random-oracle model]] with $\delta_1(q_G) = q_G\delta$, and rigid: $\Enc_1(\pk, \Dec_1(\sk, c)) = c$ for every $c$ with $\Dec_1(\sk, c) \ne \bot$. If $\PKE$ is moreover $\gamma$-spread, then for every adversary $\calA$ against the one-wayness of $\PKE_1$ under plaintext- and validity-checking attacks (OW-PCVA) making at most $q_G$ queries to $G$, $q_P$ to the plaintext-checking oracle and $q_V$ to the validity-checking oracle, there is an OW-CPA adversary $\calB$ against $\PKE$, running in about the time of $\calA$, with

$$
\Adv^{\mathrm{OW\text{-}PCVA}}_{\PKE_1}(\calA) \le (q_G + q_P)\delta + q_V 2^{-\gamma} + (q_G + q_P + 1)\Adv^{\mathrm{OW\text{-}CPA}}_{\PKE}(\calB).
$$

The games are those of HHK17 (Definition 2.1, Figure 3): the adversary wins iff its output $m'$ satisfies $\Dec_1(\sk, c^*) = m'$, and the plaintext-checking oracle accepts only messages in $\calM$; $q_G$ counts every evaluation of $G$ in the experiment, the adversary's explicit queries and the implicit ones made by the experiment (Section 2.1). With $q_V = 0$ the game is OW-PCA, and the bound holds without spreadness — HHK17 (Section 3.1).

For the [[public-key-encryption#ow-pca-security|OW-PCA game]] of $\PKE_1$, in which $\calA$ also queries $G$ and wins iff it outputs $m^*$, and for every $\calA$ making at most $q_G$ queries to $G$ and $q_P$ queries to $\calO_{\mathrm{pc}}$ of its own, with $q := q_G + q_P$, the argument of the Sketch gives an OW-CPA adversary $\calB$ against $\PKE$ that runs $\calA$ once, in about its time plus that of $q_P$ encryptions, with

$$
\Adv^{\mathrm{ow\text{-}pca}}_{\PKE_1,\calA}(\secpar) \le (q + 1)\delta + (q + 1)\Adv^{\mathrm{ow\text{-}cpa}}_{\PKE,\calB}(\secpar)
$$

— standard. $\PKE_1$ has the message space of $\PKE$, and $\delta_1(q) = q\delta$ is negligible for every polynomial $q$, so if $\PKE$ is OW-CPA-secure, $\mathrm{T}[\PKE, G]$ is [[public-key-encryption#ow-pca-security|OW-PCA-secure]] in the random-oracle model.

## Sketch

Answering each query $\calO_{\mathrm{pc}}(m, c)$ with the re-encryption test $[\Enc(\pk, m; G(m)) = c]$ changes the game only if one of the at most $q + 1$ points at which $G$ is then evaluated, namely $m^*$, $\calA$'s queries to $G$ and the messages of its queries to $\calO_{\mathrm{pc}}$, fails to decrypt under the coins that $G$ assigns it, which has probability at most $(q + 1)\delta$ since each value of $G$ is uniform on $\calR$ when first evaluated. Encrypting $m^*$ under fresh coins in place of $G(m^*)$ then changes the game only if $G$ is evaluated at $m^*$, and the game uses no secret key. $\calB$ runs $\calA$ on its own challenge with this simulation and outputs a uniform element of the set of at most $q + 1$ messages formed by $\calA$'s output and the points at which $G$ was evaluated, a set that contains $m^*$ whenever $\calA$ wins or $G$ is evaluated at $m^*$.

## Notes

- From an [[public-key-encryption#cpa-security|IND-CPA-secure]] $\PKE$, HHK17 (Theorem 3.2) prove the same conclusion tightly, with additive terms in place of the factor $q_G + q_P + 1$: [[pke-cpa-security-to-pke-ow-pca-hhk17|IND-CPA PKE ⇒ OW-PCA PKE (Fujisaki–Okamoto transform T)]].
- The loss is the factor $q_G + q_P + 1$ on the OW-CPA advantage ($q + 1$ above): the reduction guesses which point at which $G$ is evaluated is the challenge message. HHK17 (Section 1.1, Figure 1) list the step from OW-CPA as not tight.
- HHK17 (Theorem 3.1) also cover a validity-checking oracle, at an additive $q_V 2^{-\gamma}$, when $\PKE$ is $\gamma$-spread: for every key pair and every $m \in \calM$, each ciphertext has probability at most $2^{-\gamma}$ under $\Enc(\pk, m; r)$ for $r \getsr \calR$ (Section 2.1).
- In the quantum random-oracle model, for $q_G$ quantum queries to $G$ and $q_P$ classical plaintext-checking queries, $\Adv^{\mathrm{OW\text{-}PCA}}_{\PKE_1}(\calA) \le 8(q_G + q_P + 1)^2\delta + (1 + 2q_G)\sqrt{\Adv^{\mathrm{OW\text{-}CPA}}_{\PKE}(\calB)}$ — [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] (Theorem 4.4).
