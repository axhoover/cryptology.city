---
title: Cryptography in $NC^0$
source: https://epubs.siam.org/doi/abs/10.1137/S0097539705446950
authors: Benny Applebaum, Yuval Ishai, Eyal Kushilevitz
venue: Journal on Computing 2006
published: 2006-08-01
aliases:
  - AIK06
---
# Cryptography in $NC^0$
URL: https://epubs.siam.org/doi/abs/10.1137/S0097539705446950
Authors: Benny Applebaum, Yuval Ishai, Eyal Kushilevitz
## Abstract
We study the parallel time‐complexity of basic cryptographic primitives such as one-way functions (OWFs) and pseudorandom generators (PRGs). Specifically, we study the possibility of implementing instances of these primitives by $NC^0$ functions, namely, by functions in which each output bit depends on a constant number of input bits. Despite previous efforts in this direction, there has been no convincing theoretical evidence supporting this possibility, which was posed as an open question in several previous works. We essentially settle this question by providing strong positive evidence for the possibility of cryptography in $NC^0$. Our main result is that every “moderately easy” OWF (resp., PRG), say computable in $NC^1$, can be compiled into a corresponding OWF (resp., “low‐stretch” PRG) in which each output bit depends on at most 4 input bits. The existence of OWFs and PRGs in $NC^1$ is a relatively mild assumption, implied by most number‐theoretic or algebraic intractability assumptions commonly used in cryptography. A similar compiler can also be obtained for other cryptographic primitives such as one-way permutations, encryption, signatures, commitment, and collision‐resistant hashing. Our techniques can also be applied to obtain (unconditional) constructions of “noncryptographic” PRGs. In particular, we obtain ε‐biased generators and a PRG for space‐bounded computation in which each output bit depends on only 3 input bits. Our results make use of the machinery of randomizing polynomials [Y. Ishai and E. Kushilevitz, Proceedings of the 41st Annual IEEE Symposium on Foundations of Computer Science (FOCS), 2000, pp. 294–304], which was originally motivated by questions in the domain of information‐theoretic secure multiparty computation.