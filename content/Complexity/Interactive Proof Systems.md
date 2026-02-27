---
Complexity Zoo: https://complexityzoo.net/Complexity_Zoo:I#ip
aliases:
  - IP
---
# Interactive Proof Systems (IP)
The class of decision problems for which a "yes" answer can be verified by an _interactive proof_. Here a probabilistic polynomial-time verifier sends messages back and forth with an all-powerful prover. They can have polynomially many rounds of interaction. Given the verifier's algorithm, at the end:
1. If the answer is "yes," the prover must be able to behave in such a way that the verifier accepts with probability at least 2/3 (over the choice of the verifier's random bits).
2. If the answer is "no," then however the prover behaves the verifier must reject with probability at least 2/3.

## Known relationships
- IP = [[Polynomial-Space|PSPACE]] — TODO citation