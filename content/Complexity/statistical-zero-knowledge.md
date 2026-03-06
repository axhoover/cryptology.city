---
aliases:
  - SZK
  - Statistical zero-knowledge
title: Statistical zero-knowledge
---
# Statistical zero-knowledge
The class of decision problems for which a "yes" answer can be verified by a _statistical zero-knowledge proof protocol_. In such an interactive proof (see [[interactive-proof-systems|IP]]), we have a probabilistic polynomial-time verifier, and a prover who has unbounded computational resources. By exchanging messages with the prover, the verifier must become convinced (with high probability) that the answer is "yes," _without learning anything else about the problem_ (statistically).


See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:S#szk).

## Known relationships
- Graph non-isomorphism is in SZK
- SZK is closed under complement
- SZK is contained in [[arthur-merlin|AM]] intersect [[Complement of Arthur-Merlin|coAM]]