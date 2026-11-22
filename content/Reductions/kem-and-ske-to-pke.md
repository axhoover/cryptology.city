---
type: reduction
status: draft
title: "IND-CCA KEM + one-time CCA-secure SKE ⇒ IND-CCA PKE"
aliases: []
id: red-kem-and-ske-to-pke
kind: implication
hypotheses: [ind-cca-kem, one-time-cca-ske]
conclusion: pke-cca2-security
class: fully-black-box
model: standard
source:
  - "[[CS03 - Design and Analysis of Practical Public-Key Encryption Schemes Secure against Adaptive Chosen Ciphertext Attack|CS03]]"
security-loss: "additive: twice the KEM IND-CCA advantage, the DEM one-time CCA advantage, twice the decapsulation error, and twice the number of pre-challenge decryption queries times the expected largest probability of a single encapsulation ciphertext"
rationale:
  class: "One fixed construction calls Encap, Decap and the SKE algorithms only as oracles, and the KEM and DEM reductions each run the PKE adversary once as an oracle."
  security-loss: "Two game hops cost the decapsulation error and the KEM advantage, a third costs the chance that a pre-challenge query guesses the challenge encapsulation, and the last game is the DEM game."
---

# IND-CCA KEM + one-time CCA-secure SKE ⇒ IND-CCA PKE

## Statement

Let $\mathrm{KEM} = (\KeyGen, \Encap, \Decap)$ be a $(1-\varepsilon)$-correct [[key-encapsulation-mechanism|KEM]] with key space $\bits^{\ell(\secpar)}$, and $\SKE$ a [[symmetric-key-encryption#one-time-cca-security|one-time CCA-secure SKE]] scheme, the DEM, whose keys are uniform on $\bits^{\ell(\secpar)}$. The KEM-DEM hybrid [[public-key-encryption|PKE]] scheme has the KEM's $\KeyGen$; $\Enc(\pk, m)$ runs $(c_1, k) \gets \Encap(\pk)$ and $c_2 \gets \SKE.\Enc(k, m)$ and outputs $(c_1, c_2)$; $\Dec(\sk, (c_1, c_2))$ outputs $\bot$ if $\Decap(\sk, c_1) = \bot$, and $\SKE.\Dec(\Decap(\sk, c_1), c_2)$ otherwise. If the KEM is [[key-encapsulation-mechanism#ind-cca-security|IND-CCA]] secure and the DEM one-time CCA-secure, the hybrid is [[public-key-encryption#cca-security|IND-CCA]] secure — [[CS03 - Design and Analysis of Practical Public-Key Encryption Schemes Secure against Adaptive Chosen Ciphertext Attack|CS03]] (Theorem 7.2 of the journal version), as credited by [[PSJS24 - CCA-Secure Hybrid Encryption in Correlated Randomness Model and KEM Combiners|PSJS24]] (Sections I and IV).

In the KEM IND-CCA game the adversary receives the challenge together with its decapsulation oracle, and in the one-time CCA game the DEM adversary has no oracle before the challenge. For these games let $\mu(\secpar) := \mathbb{E}_{\pk}\!\left[\max_{c} \Pr[\Encap(\pk) \text{ outputs ciphertext } c]\right]$ over $(\pk, \sk) \gets \KeyGen(1^\secpar)$. For every IND-CCA adversary $\calA$ against the hybrid that makes at most $q_1$ decryption queries before the challenge, the adversaries $\calB$ against the KEM and $\calC$ against the DEM of the Sketch each run $\calA$ once and satisfy

$$
\Adv^{\mathrm{cca}}_{\PKE,\calA}(\secpar) \le 2\Adv^{\mathrm{cca}}_{\mathrm{KEM},\calB}(\secpar) + \Adv^{\mathrm{ot\text{-}cca}}_{\SKE,\calC}(\secpar) + 2\varepsilon(\secpar) + 2q_1\mu(\secpar)
$$

— standard. The hybrid has the DEM's message space and is $(1-\varepsilon-\varepsilon_{\SKE})$-correct for a $(1-\varepsilon_{\SKE})$-correct DEM, by a union bound, as the encapsulated key is uniform — standard.

A DEM of key length $\ell_{\SKE}(\secpar)$ is combined with a KEM of any key length $\ell$ by running the KEM at $\secpar^* := (\secpar + 1)^c$, for a constant $c$ with $\ell_{\SKE}(\secpar) \le (\secpar+1)^c$ for all $\secpar$, and keying the DEM with the first $\ell_{\SKE}(\secpar)$ bits of the encapsulated key, which are uniform since $\ell(\secpar^*) \ge \secpar^* \ge \ell_{\SKE}(\secpar)$. The map $\secpar \mapsto \secpar^*$ is injective, polynomial and efficiently invertible, so negligible functions of $\secpar^*$ are negligible in $\secpar$, and the bound above, with the KEM terms at $\secpar^*$, shows that an IND-CCA KEM and a one-time CCA-secure SKE scheme give an IND-CCA PKE scheme — standard.

## Sketch

Sample the challenge encapsulation $(c_1^*, k^*)$ first, and answer every query $(c_1^*, c_2)$ by $\SKE.\Dec(k^*, c_2)$: this changes the game only if $\Decap(\sk, c_1^*) \ne k^*$, with probability at most $\varepsilon$. Replacing $k^*$ by an independent uniform key is a KEM attack: $\calB$, given $(\pk, c_1^*, k)$, answers queries with first component $c_1 \ne c_1^*$ through its $\Decap$ oracle and the others under $k$, encrypts $m_b$ under $k$ for a bit $b$ of its choice, and outputs $0$ iff $\calA$ returns $b$. Answering the pre-challenge queries with first component $c_1^*$ through $\sk$ instead changes the game only if one of them guesses $c_1^*$, which is independent of $\calA$'s view before the challenge, with probability at most $q_1\mu$. The last game is the one-time CCA game under the uniform key: $\calC$ generates the KEM keys, answers the pre-challenge queries with $\sk$, submits $(m_0, m_1)$, receives $c_2^*$, appends a fresh encapsulation $c_1^*$, and answers each later query $(c_1^*, c_2)$, which has $c_2 \ne c_2^*$, through its own decryption oracle and the other later queries with $\sk$. Under $|2\Pr - 1|$ each of the three hops costs twice its probability gap.

## Notes

- The term $2q_1\mu$ is negligible for every IND-CPA-secure KEM with negligible correctness error: the adversary that runs $\Encap(\pk)$ once, obtaining $(c, k)$, and outputs $1$ iff $c = c^*$ and $k$ differs from the key it is shown has advantage at least $(1 - 2^{-\ell})\mu^2 - 2\varepsilon$, since $\Pr[c = c^*] \ge \mu^2$ by Jensen's inequality, so $\mu^2 \le 2\Adv^{\mathrm{cpa}}_{\mathrm{KEM}} + 4\varepsilon$ for its advantage — standard.
- Every [[symmetric-key-encryption#cca-security|CCA-secure]] SKE scheme gives a one-time CCA-secure one with uniform keys ([[cca-secure-symmetric-key-encryption-to-one-time-cca-ske|CCA-secure SKE ⇒ One-time CCA-secure SKE]]), so such a scheme can serve as the DEM.
- The IND-CPA analogue is [[ind-cpa-kem-and-ske-to-pke-cpa-security|IND-CPA KEM + SKE ⇒ IND-CPA PKE]] — folklore.
- A one-time secure DEM does not suffice, even with an IND-CCA KEM. With the [[symmetric-key-encryption#one-time-pad|one-time pad]] on $\bits^{\ell}$ as DEM, which is perfectly secret, $\calA$ submits $(0^\ell, 1^\ell)$, queries $\Dec$ on $(c_1^*, c_2^* \oplus 0^{\ell-1}1)$, which differs from the challenge, and receives $m_b \oplus 0^{\ell-1}1$ except with probability $\varepsilon$, so the hybrid is not IND-CCA-secure — standard. [[HHK10 - Some (in)sufficient conditions for secure hybrid encryption|HHK10]] study which combinations of KEM and DEM security notions suffice.
- Efficiency: the public-key work is one encapsulation per message, whatever its length, and the rest is symmetric encryption — standard.
