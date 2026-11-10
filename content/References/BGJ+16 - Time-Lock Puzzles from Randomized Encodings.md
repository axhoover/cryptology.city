---
type: reference
status: stub
title: "BGJ+16"
source: https://eprint.iacr.org/2015/514
authors: Nir Bitansky, Shafi Goldwasser, Abhishek Jain, Omer Paneth, Vinod Vaikuntanathan, Brent Waters
venue: ITCS 2016
published: 2016
aliases:
  - BGJ+16
cryptobib_key: ITCS:BGJPVW16
---

# [BGJ+16] Time-Lock Puzzles from Randomized Encodings

**Authors:** Nir Bitansky, Shafi Goldwasser, Abhishek Jain, Omer Paneth, Vinod Vaikuntanathan, Brent Waters | **Venue:** ITCS 2016 | [Source](https://eprint.iacr.org/2015/514)

## Abstract

Time-lock puzzles, introduced by May, Rivest, Shamir and Wagner, is a mechanism for sending messages “to the future”. A sender
can quickly generate a puzzle with a solution $s$ that remains hidden until a moderately large amount of time $t$ has elapsed. The solution $s$ should be hidden from any adversary that runs in time significantly less than $t$, including resourceful parallel adversaries with polynomially many processors.

While the notion of time-lock puzzles has been around for 22 years, there has only been a \*single\* candidate proposed. Fifteen years ago, Rivest, Shamir and Wagner suggested a beautiful candidate time-lock puzzle based on the assumption that exponentiation modulo an RSA integer is an “inherently sequential” computation.

We show that various flavors of _randomized encodings_ give rise to time-lock puzzles of varying strengths, whose security can be shown assuming \*the existence\* of non-parallelizing languages, which are languages that require circuits of depth at least $t$ to decide, in the worst-case. The existence of such languages is necessary for the existence of time-lock puzzles.

We instantiate the construction with different randomized
encodings from the literature, where increasingly better efficiency is obtained based on increasingly stronger cryptographic assumptions, ranging from one-way functions to indistinguishability obfuscation. We also observe that time-lock puzzles imply one-way functions, and thus the reliance on some cryptographic assumption is necessary.

Finally, generalizing the above, we construct other types of puzzles such as \*proofs of work\* from randomized encodings and a
suitable worst-case hardness assumption (that is necessary for such puzzles to exist).
