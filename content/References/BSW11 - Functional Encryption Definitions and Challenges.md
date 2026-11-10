---
type: reference
status: stub
title: "BSW11"
source: https://eprint.iacr.org/2010/543
authors: Dan Boneh, Amit Sahai, Brent Waters
venue: TCC 2011
published: 2011
aliases:
  - BSW11
cryptobib_key: TCC:BonSahWat11
---

# [BSW11] Functional Encryption: Definitions and Challenges

**Authors:** Dan Boneh, Amit Sahai, Brent Waters | **Venue:** TCC 2011 | [Source](https://eprint.iacr.org/2010/543)

## Abstract

We initiate the formal study of functional encryption by giving
precise definitions of the concept and its security. Roughly
speaking, functional encryption supports restricted secret keys that
enable a key holder to learn a specific function of encrypted data,
but learn nothing else about the data. For example, given an
encrypted program the secret key may enable the key holder to learn
the output of the program on a specific input without learning
anything else about the program.

We show that defining security for functional encryption is non-trivial. First, we show that a natural game-based definition is inadequate for some functionalities. We then present a natural simulation-based definition and show that it (provably) cannot be satisfied in the standard model, but can be satisfied in the random oracle model. We show how to map many existing concepts to our formalization of functional encryption and conclude with several interesting open problems in this young area.
