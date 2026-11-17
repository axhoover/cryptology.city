---
type: reduction
status: draft
title: "CP-ABE ⇒ BE"
aliases: []
id: red-abe-to-be
kind: implication
hypotheses: [cp-abe-adaptive-security]
conclusion: be
class: fully-black-box
model: standard
source: folklore
security-loss: "none (the reduction preserves the advantage)"
rationale:
  class: "The BE algorithms call the CP-ABE algorithms as oracles on locally computed singleton attribute sets and disjunctive policies, and the reduction runs the BE adversary once as an oracle, forwarding each key query and the challenge unchanged."
---

# CP-ABE ⇒ BE

## Statement

Take a CP-[[attribute-based-encryption|ABE]] scheme whose attribute universe contains $[n]$ for every $n = n(\secpar) \le \poly(\secpar)$, whose policy class contains the disjunctions $f_S(x) = [x \cap S \neq \emptyset]$ for $S \subseteq [n]$, and whose message space contains two distinct messages of equal length. Give user $i$ the ABE key for the singleton attribute set $\{i\}$, encrypt to $S \subseteq [n]$ under the policy $f_S$, so $f_S(\{i\}) = [i \in S]$, and let $\Dec(\pp, \sk_i, S, c)$ run the ABE decryption on $(\sk_i, c)$. If the scheme is [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-IND-CPA-secure]], the resulting [[broadcast-encryption|BE]] for $n$ users is [[broadcast-encryption#ind-be-cpa-security|IND-BE-CPA-secure]]: every BE adversary is verbatim a CP-ABE adversary with the same advantage — folklore. Correctness carries over: for $i \in S$, the key for $\{i\}$ satisfies $f_S$, so a $(1-\varepsilon)$-correct CP-ABE scheme gives a $(1-\varepsilon)$-correct BE scheme — standard.

## Sketch

The BE relation $i \in S$ is the CP-ABE relation $f_S(\{i\}) = 1$, so BE admissibility (no key for $i \in S^*$) is CP-ABE admissibility (no queried attribute set satisfies $f_{S^*}$).

## Notes

- The resulting BE has no ciphertext-size guarantee: its ciphertext is a CP-ABE ciphertext for a policy of size $|S|$, so short BE ciphertexts need CP-ABE with ciphertexts succinct in the policy — folklore.
