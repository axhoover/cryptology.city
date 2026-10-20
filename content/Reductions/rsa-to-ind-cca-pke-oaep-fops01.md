---
type: reduction
status: draft
title: "RSA ⇒ IND-CCA PKE (RSA-OAEP)"
aliases: []
id: red-rsa-to-ind-cca-pke-oaep-fops01
kind: implication
hypotheses: [rsa]
conclusion: pke-cca2-security
class: unstated
model: rom
source:
  - "[[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]]"
security-loss: "quadratic: RSA inversion succeeds with probability about $\\varepsilon^2/4$ for IND-CCA advantage $\\varepsilon$, in time $2t + q_H(q_H + 2q_G) \\cdot O(k^3)$ for adversary time $t$, $q_G$ and $q_H$ random-oracle queries and a $k$-bit modulus"
rationale:
  model: "The proof models the OAEP padding hashes as random oracles whose query lists the reduction reads, and no standard-model IND-CCA proof of RSA-OAEP from RSA is known."
  security-loss: "The reduction runs the adversary twice, on $y$ and on $y \\alpha^e$, to obtain two partial preimages, which squares the success probability, and tries the lattice step on pairs of hash queries."
---

# RSA ⇒ IND-CCA PKE (RSA-OAEP)

## Statement

In the [[random-oracle-model|random oracle model]], OAEP over a trapdoor permutation $f$ is [[public-key-encryption#cca-security|IND-CCA-secure]] if $f$ is partial-domain one-way; by RSA's self-reducibility, partial-domain one-wayness of the RSA function is equivalent to its one-wayness, so RSAES-OAEP is IND-CCA-secure under the [[rsa-assumption|RSA assumption]] — [[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]].

## Sketch

OAEP encrypts $m$ with randomness $r$ as $f(s \| t)$ for $s := (m \| 0^{k_1}) \oplus G(r)$ and $t := r \oplus H(s)$. The reduction answers decryption queries from the adversary's lists of $G$- and $H$-queries; a ciphertext whose $s$ and $r$ were not both queried decrypts to $\bot$ except with negligible probability, so this simulation errs only negligibly. In the random oracle model the challenge ciphertext is independent of the challenge bit until $H$ is queried at the challenge's $s^*$, so an adversary with non-negligible IND-CCA2 advantage makes that query with non-negligible probability, and the reduction reads $s^*$, a partial preimage of $f$, off the query list. For RSA, partial preimages of $y$ and of $y \alpha^e$ for a known $\alpha$ give a two-dimensional lattice problem whose short solution yields the full preimage — [[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]].

## Notes

- The reduction from RSA is not tight — [[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]].
- OAEP, the padding behind RSAES-OAEP, is due to Bellare and Rogaway — [[BR94 - Optimal Asymmetric Encryption|BR94]].
- The BR94 argument for OAEP has a gap and does not establish IND-CCA security from one-wayness of the trapdoor permutation alone — [[Sho01a - OAEP Reconsidered|Sho01a]].
