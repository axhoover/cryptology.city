---
aliases:
  - GGM
---
# Generic Group Model
The *Generic Group Model (GGM)* was a model introduced by [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Shoup97]] as a method for analyzing the security of (cyclic) group-based assumptions.

In (Shoup's) GGM, every group element is given a random unique bit-string called a handle. Then, and adversary can compute the group operation by calling its oracle, which takes two handles an outputs a handle that represents the product of the input elements.