---
type: reference
status: stub
title: "CL01"
source: https://eprint.iacr.org/2001/019
authors: Jan Camenisch, Anna Lysyanskaya
venue: EUROCRYPT 2001
published: 2001
aliases:
  - CL01
cryptobib_key: EC:CamLys01
---

# [CL01] An Efficient System for Non-transferable Anonymous Credentials with Optional Anonymity Revocation

**Authors:** Jan Camenisch, Anna Lysyanskaya | **Venue:** EUROCRYPT 2001 | [Source](https://eprint.iacr.org/2001/019)

## Abstract

A credential system is a system in which users can obtain
credentials from organizations and demonstrate possession of these
credentials. Such a system is anonymous when transactions carried out by the
same user cannot be linked. An anonymous credential system is of significant
practical relevance because it is the best means of providing privacy for
users. In this paper we propose a practical anonymous credential system that
is based on the strong RSA assumption and the decisional Diffie-Hellman
assumption modulo a safe prime product and is considerably superior to
existing ones:

(1) We give the first practical solution that allows
a user to unlinkably demonstrate possession of a credential as many times as
necessary without involving the issuing organization.

(2) To prevent misuse of anonymity, our scheme is the first to offer optional
anonymity revocation for particular transactions.

(3) Our scheme offers separability: all organizations can choose their
cryptographic keys independently of each other.

Moreover, we suggest more effective means of preventing users from sharing their
credentials, by introducing _all-or-nothing_ sharing: a user who allows a
friend to use one of her credentials once, gives him the ability to use all of
her credentials, i.e., taking over her identity. This is implemented by a new
primitive, called _circular encryption_, which is of independent interest,
and can be realized from any semantically secure cryptosystem in the random
oracle model.
