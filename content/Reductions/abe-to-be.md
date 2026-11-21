---
type: reduction
status: draft
title: "ABE ⇒ BE"
aliases: []
id: red-abe-to-be
kind: implication
hypotheses: [abe]
conclusion: be
class: fully-black-box
model: standard
source: folklore
security-loss: "none (the reduction preserves the advantage)"
rationale:
  class: "The BE algorithms call the ABE algorithms as oracles on locally computed singleton attribute sets and disjunctive policies (CP) or one-attribute policies and recipient sets (KP), and the reduction runs the BE adversary once as an oracle, forwarding each key query and the challenge unchanged."
---

# ABE ⇒ BE

## Statement

Take a KP- or CP-[[attribute-based-encryption|ABE]] scheme, and let the [[broadcast-encryption|BE]] $\Setup(1^\secpar, n)$ run the ABE $\Setup(1^\secpar, 1^n)$, with universe $[n]$ (and a polynomial policy bound at which its class contains the gates below, for a scheme that takes one). In the CP case, give user $i$ the ABE key for the singleton attribute set $\{i\}$, and encrypt to $S \subseteq [n]$ under the policy $f_S(x) = [x \cap S \neq \emptyset]$, the $1$-of-$|S|$ gate over $S$, so $f_S(\{i\}) = [i \in S]$; for $S = \emptyset$ the ciphertext is a fixed dummy value, which no key need decrypt. In the KP case, give user $i$ the ABE key for the one-attribute policy $f_i(x) = [i \in x]$, and encrypt to $S$ under the attribute set $S$, so $f_i(S) = [i \in S]$. If the scheme is [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-IND-CPA-secure]] (resp. [[attribute-based-encryption#kp-abe-ind-cpa-security|KP-IND-CPA-secure]]), the resulting BE is [[broadcast-encryption#ind-be-cpa-security|IND-BE-CPA-secure]] for every polynomial number $n = n(\secpar)$ of users: every BE adversary is verbatim an ABE adversary at that $n$ with the same advantage — folklore. BE decryption $\Dec(\pp, \sk_i, S, c)$ runs ABE decryption on $(\sk_i, c)$, so a $(1-\varepsilon)$-correct ABE scheme gives a $(1-\varepsilon)$-correct BE scheme with the same message space, whose two distinct equal-length messages the ABE algorithm outputs from the same $\pp$ — standard.

## Sketch

The BE relation $i \in S$ is the ABE relation $f_S(\{i\}) = 1$ (CP) or $f_i(S) = 1$ (KP), so BE admissibility (no key for $i \in S^*$) is ABE admissibility (no queried key whose attribute set or policy matches the challenge); the reduction produces the dummy ciphertext for $S^* = \emptyset$ itself.

## Notes

- The resulting BE has no ciphertext-size guarantee: its ciphertext is a CP-ABE ciphertext for a policy of size $|S|$, or a KP-ABE ciphertext for an attribute set of size $|S|$, so short BE ciphertexts need ciphertexts succinct in the policy or in the attribute set — folklore.
