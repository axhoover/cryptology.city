---
Complexity Zoo: https://complexityzoo.net/Complexity_Zoo:N#np
aliases:
  - NP
---
# Nondeterministic Polynomial-Time (NP)
An "NP machine" is a nondeterministic polynomial-time Turing machine.
Then NP is the class of decision problems solvable by an NP machine such that
1. If the answer is "yes," at least one computation path accepts.
2. If the answer is "no," all computation paths reject.

Equivalently, NP is the class of decision problems such that, if the answer is "yes," then there is a proof of this fact, of length polynomial in the size of the input, that can be verified in [[Polynomial-Time|P]] (i.e. by a deterministic polynomial-time algorithm). On the other hand, if the answer is "no," then the algorithm must declare invalid any purported proof that the answer is "yes."

## Notable problems
- SAT is complete for NP — TODO citation

## Known relationships
- If [[Nondeterministic Polynomial-Time|NP]] = coNP, then any inconsistent Boolean formula of size n has a proof of inconsistency of size polynomial in n.
