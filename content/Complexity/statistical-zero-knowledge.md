---
aliases:
  - SZK
  - Statistical zero-knowledge
title: Statistical zero-knowledge
---

# Statistical zero-knowledge

The class of decision problems for which a "yes" answer can be verified by a *statistical zero-knowledge proof protocol*. In such an interactive proof (see [[interactive-proof-systems|IP]]), we have a probabilistic polynomial-time verifier, and a prover who has unbounded computational resources. By exchanging messages with the prover, the verifier must become convinced (with high probability) that the answer is "yes," *without learning anything else about the problem* (statistically).

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:S#szk).

## Known relationships

- Graph non-isomorphism is in SZK — the verifier can check statistical distance between two distributions via the prover
- SZK is closed under complement — [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]]
- SZK ⊆ [[arthur-merlin|AM]] ∩ coAM, so if AM = coAM then SZK ⊆ AM; in particular SZK does not contain NP-complete problems unless PH collapses
- Non-trivial SZK implies [[hash-function|OWFs]]: if there is a language in SZK that is not in BPP, then one-way functions exist — [[Ost91 - One-way functions, hard on average problems, and statistical zero-knowledge proofs|Ost91]]
  - This is a converse direction: SZK ⊄ BPP $\Rightarrow$ OWF exist
- The complete problem for SZK is the **Statistical Difference (SD)** problem: given two circuits sampling distributions $D_0$ and $D_1$, decide whether $\|D_0 - D_1\|_{\mathrm{TV}} \geq 2/3$ or $\leq 1/3$
