---
type: reduction
status: draft
title: "DS ⇒ Distributional OWF"
aliases: []
id: red-ds-to-distributional-owf
kind: implication
hypotheses: [ds]
conclusion: distributional-owf
class: fully-black-box
model: standard
source: folklore
security-loss: "one inverter call and no signing query"
rationale:
  class: "The function runs the key generator on its input coins and outputs the verification key, using the scheme only as an oracle, and one fixed reduction runs any inverter once as an oracle and signs under the recovered key."
---

# DS ⇒ Distributional OWF

## Statement

Let $\DS = (\KeyGen, \Sign, \Vrfy)$ be a [[digital-signature|signature scheme]] that is $(1-\negl(\secpar))$-[[digital-signature#correctness|correct]] and [[digital-signature#existential-unforgeability|EUF-CMA]]-unforgeable and has a [[digital-signature#properties|non-trivial message space]], and let $\ell(\secpar)$ be the number of coins of $\KeyGen(1^\secpar)$. Then $f(r) := \vk$ for $r \in \bits^{\ell(\secpar)}$, where $(\sk, \vk) := \KeyGen(1^\secpar; r)$, is [[hash-function#distributional-one-wayness|distributionally one-way]] with $p := 2$ — standard.

## Sketch

Let an efficient inverter, given $\vk = f(r)$, output $r'$ within statistical distance $\delta$ of a uniform preimage of $\vk$, averaged over $\vk$. Then $(\sk', \vk)$, with $\sk'$ the signing key of $\KeyGen(1^\secpar; r')$, is within $\delta$ of an honest key pair, so $\Sign(\sk', m)$, for a message $m \in \calM_\secpar$ computed efficiently from $1^\secpar$ or $\vk$, verifies under $\vk$ with probability at least $1 - \negl(\secpar) - \delta$: a forgery with no signing query. EUF-CMA unforgeability therefore forces $\delta \ge 1/2$ for all sufficiently large $\secpar$.

## Notes

- With [[distributional-owf-to-owf-il89|Distributional OWF ⇒ OWF]], signature schemes imply [[hash-function#preimage-resistance-one-wayness|one-way functions]] — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].
- For perfectly correct schemes, $f$ itself is one-way: every preimage $r'$ of $\vk$ gives a signing key whose signatures verify under $\vk$ — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
- Conversely, one-way functions give EUF-CMA-unforgeable signatures ([[hash-function-to-ds|OWF ⇒ DS]]) — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
