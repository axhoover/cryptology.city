---
type: reference
status: stub
title: "BDOP04"
source: https://eprint.iacr.org/2003/195
authors: Dan Boneh, Giovanni Di Crescenzo, Rafail Ostrovsky, Giuseppe Persiano
venue: EUROCRYPT 2004
published: 2004
aliases:
  - BDOP04
cryptobib_key: EC:BDOP04
---

# [BDOP04] Public Key Encryption with Keyword Search

**Authors:** Dan Boneh, Giovanni Di Crescenzo, Rafail Ostrovsky, Giuseppe Persiano | **Venue:** EUROCRYPT 2004 | [Source](https://eprint.iacr.org/2003/195)

## Abstract

We study the problem of searching on data that is encrypted using a
public key system. Consider user Bob who sends email to user Alice
encrypted under Alice's public key. An email gateway wants to test
whether the email contains the keyword `urgent' so that it could
route the email accordingly.  Alice, on the other hand does not wish
to give the gateway the ability to decrypt all her messages. We define
and construct a mechanism that enables Alice to provide a key to the
gateway that enables the gateway to test whether the word `urgent'
is a keyword in the email without learning anything else about the
email. We refer to this mechanism as \<I>Public Key Encryption with
keyword Search\</I>. As another example, consider a mail server that
stores various messages publicly encrypted for Alice by others. Using
our mechanism Alice can send the mail server a key that will enable
the server to identify all messages containing some specific keyword,
but learn nothing else. We define the concept of public key
encryption with keyword search and give several constructions.
