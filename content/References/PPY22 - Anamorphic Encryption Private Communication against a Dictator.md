---
title: "PPY22"
source: https://eprint.iacr.org/2022/639
authors: Giuseppe Persiano, Duong Hieu Phan, Moti Yung
venue: Eurocrypt 2022
published: 2022-05-24
aliases:
  - PPY22
tags:
  - Eurocrypt

---
# [PPY22] Anamorphic Encryption: Private Communication against a Dictator

**Authors:** Giuseppe Persiano, Duong Hieu Phan, Moti Yung | **Venue:** Eurocrypt 2022 | [Source](https://eprint.iacr.org/2022/639)

## Abstract
Cryptosystems have been developed over the years under the typical prevalent setting which assumes that the receiver’s key is kept secure from the adversary, and that the choice of the message to be sent is freely performed by the sender and is kept secure from the adversary as well. Under these fundamental and basic operational assumptions, modern Cryptography has flourished over the last half a century or so, with amazing achievements: New systems (including public-key Cryptography), beautiful and useful models (including security definitions such as semantic security), and new primitives (such as zero-knowledge proofs) have been developed. Furthermore, these fundamental achievements have been translated into actual working systems, and span many of the daily human activities over the Internet.

However, in recent years, there is an overgrowing pressure from many governments to allow the government itself access to keys and messages of encryption systems (under various names: escrow encryption, emergency access, communication decency acts, etc.). Numerous non-direct arguments against such policies have been raised, such as "the bad guys can utilize other encryption system" so all other cryptosystems have to be declared illegal, or that "allowing the government access is an ill-advised policy since it creates a natural weak systems security point, which may attract others (to masquerade as the government)." It has remained a fundamental open issue, though, to show directly that the above mentioned efforts by a government (called here “a dictator” for brevity) which mandate breaking of the basic operational assumption (and disallowing other cryptosystems), is, in fact, a futile exercise. This is a direct technical point which needs to be made and has not been made to date.

In this work, as a technical demonstration of the futility of the dictator’s demands, we invent the notion of “Anamorphic Encryption” which shows that even if the dictator gets the keys and the messages used in the system (before anything is sent) and no other system is allowed, there is a covert way within the context of well established public-key cryptosystems for an entity to immediately (with no latency) send piggybacked secure messages which are, in spite of the stringent dictator conditions, hidden from the dictator itself! We feel that this may be an important direct technical argument against the nature of governments’ attempts to police the use of strong cryptographic systems, and we hope to stimulate further works in this direction.