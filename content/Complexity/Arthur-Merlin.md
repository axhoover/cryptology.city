---
aliases:
  - AM
title: AM
---
# Arthur-Merlin (AM)
The class of decision problems for which a "yes" answer can be verified by an Arthur-Merlin protocol, as follows.

Arthur, a [[Bounded-Error Probabilistic Polynomial-Time|BPP]] verifier, generates a "challenge" based on the input, and sends it together with his random coins to Merlin. Merlin sends back a response, and then Arthur decides whether to accept. Given an algorithm for Arthur, we require that
1. If the answer is "yes," then Merlin can act in such a way that Arthur accepts with probability at least 2/3 (over the choice of Arthur's random bits).
2. If the answer is "no," then however Merlin acts, Arthur will reject with probability at least 2/3.

Surprisingly, it turns out that such a system is just as powerful as a private-coin one, in which Arthur does not need to send his random coins to Merlin [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]]. So, Arthur never needs to hide information from Merlin.

Furthermore, define AM[k] similarly to AM, except that Arthur and Merlin have $k$ rounds of interaction. Then for all constant k>2, AM[k] = AM[2] = AM [[BS88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BS88]]. Also, the result of [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]] can then be stated as follows: [[Interactive Proof Systems|IP]][k] is contained in AM[k+2] for every k (constant or non-constant).

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:A#am) and its complement class [coAM here](https://complexityzoo.net/Complexity_Zoo:A#coam).

## Notable problems
- [Graph nonisomorphism](https://complexityzoo.net/Complexity_Garden#graph_isomorphism "Complexity Garden")

## Known relationships