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
  - "[[FO99 - Secure Integration of Asymmetric and Symmetric Encryption Schemes|FO99]]"
  - "[[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]]"
security-loss: "additive in the random-oracle model from IND-CPA: a constant multiple of the IND-CPA advantage plus terms of order $q\\delta$ and $q/|\\calM|$ for $q$ random-oracle queries, and $q_D 2^{-\\gamma}$ for $q_D$ decapsulation queries with explicit rejection; from one-wayness, a factor $O(q)$; a CPA-secure base scheme with only two messages, first converted bitwise to message space $\\bits^\\secpar$, multiplies the IND-CPA advantage term by $\\secpar$"
rationale:
  class: "One fixed construction calls the base scheme's encryption (with explicit coins) and decryption and the hash functions only as oracles, and one fixed reduction runs any IND-CCA adversary once as an oracle, answering its decapsulation queries from its random-oracle queries by re-encryption."
  model: "FO99, Den03 and HHK17 prove IND-CCA security only in the random-oracle model, and no standard-model construction of an IND-CCA KEM from IND-CPA PKE alone is known."
  security-loss: "HHK17 bound the derandomization step and the key-derivation step separately, and the composed transform adds the two bounds."
---

# IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)

## Statement

Let $\PKE = (\KeyGen, \Enc, \Dec)$ be a [[public-key-encryption|PKE]] scheme with message space $\calM$ that is $\delta$-correct for negligible $\delta$ (the decryption-failure probability, maximized over $m \in \calM$ and then averaged over $(\pk, \sk) \gets \KeyGen(1^\secpar)$, is at most $\delta$), and let $G$ and $H$ be random oracles. The Fujisaki–Okamoto [[key-encapsulation-mechanism|KEM]] encapsulates by sampling $m \getsr \calM$, encrypting it as $c = \Enc(\pk, m; G(m))$ and outputting the key $H(m, c)$, where $H$ has range the KEM key space $\bits^{\ell(\secpar)}$ with $\ell(\secpar) \ge \secpar$ — standard; decapsulation decrypts $c$ to $m'$, re-encrypts under $G(m')$, and returns $H(m', c)$ if the result equals $c$, and otherwise rejects, explicitly with $\bot$ or implicitly with $H(s, c)$ for a uniform seed $s \in \calM$ kept in the secret key. If $\PKE$ is [[public-key-encryption#cpa-security|IND-CPA-secure]], or merely one-way, the KEM is [[key-encapsulation-mechanism#ind-cca-security|IND-CCA-secure]] in the [[random-oracle-model|random-oracle model]]; explicit rejection additionally needs $\PKE$ to have $\gamma$-spread ciphertexts. [[FO99 - Secure Integration of Asymmetric and Symmetric Encryption Schemes|FO99]] introduced the transform, for hybrid encryption with a symmetric scheme; [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]] decompose it into a derandomization step and a key-derivation step, covering explicit and implicit rejection, with concrete bounds for a $\delta$-correct base scheme.

The transform needs $1/|\calM|$ to be negligible, and an IND-CPA-secure scheme need only have the two distinct equal-length messages $m^{(0)}, m^{(1)} \in \calM$ and the $(1-\varepsilon)$-correctness, for each message, that [[public-key-encryption#syntax|PKE § Syntax]] requires. Let $\PKE^\secpar$ encrypt a vector in $\calM' = \{m^{(0)}, m^{(1)}\}^\secpar \cong \bits^\secpar$ componentwise with independent coins, and decrypt componentwise, outputting $\bot$ if some component does not decrypt to $m^{(0)}$ or $m^{(1)}$. Then $\PKE^\secpar$ is IND-CPA-secure by a hybrid argument, $|\calM'| = 2^\secpar$, and $\PKE^\secpar$ is $\delta$-correct in the sense above with $\delta \le 2\secpar\varepsilon$: for each key pair, the failure probability on a vector is at most the sum over its $\secpar$ components of the larger of the failure probabilities on $m^{(0)}$ and $m^{(1)}$, which is at most their sum, and each of the two averages to at most $\varepsilon$ over the key pair — standard. The transform is applied to $\PKE^\secpar$, sampling $m$ uniformly from $\calM'$; a finite message space is needed because $\calM$ may be $\bits^*$, from which $m \getsr \calM$ is undefined. For a one-way $\PKE$ the message space needs no change, since negligible inversion probability already forces $1/|\calM|$ to be negligible — standard.

## Sketch

Derandomizing encryption with $G(m)$ makes ciphertexts checkable by re-encryption, so the reduction answers decapsulation queries by searching the adversary's $G$ and $H$ queries for a message that re-encrypts to the queried ciphertext. An adversary that never queries $H$ at the challenge message $m^*$ has no information on $H(m^*, c^*)$; from one that does, the reduction reads off $m^*$, inverting the base encryption.

## Notes

- KEM-specific versions of the transform, proved IND-CCA in the random-oracle model from a one-way PKE — [[Den03 - A Designer's Guide to KEMs|Den03]].
