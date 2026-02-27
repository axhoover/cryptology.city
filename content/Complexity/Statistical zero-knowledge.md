---
Complexity Zoo: https://complexityzoo.net/Complexity_Zoo:S#szk
aliases:
  - SZK
---
# Statistical zero-knowledge (SZK)
The class of decision problems for which a "yes" answer can be verified by a _statistical zero-knowledge proof protocol_. In such an interactive proof (see [[Interactive Proof Systems|IP]]), we have a probabilistic polynomial-time verifier, and a prover who has unbounded computational resources. By exchanging messages with the prover, the verifier must become convinced (with high probability) that the answer is "yes," _without learning anything else about the problem_ (statistically).


## Known relationships
- Graph non-isomorphism is in SZK
- SZK is closed under complement
- SZK is contained in [[Arthur-Merlin|AM]] intersect [[Complement of Arthur-Merlin|coAM]]