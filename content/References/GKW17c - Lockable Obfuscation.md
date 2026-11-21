---
type: reference
status: stub
title: "GKW17c"
source: https://eprint.iacr.org/2017/274
authors: Rishab Goyal, Venkata Koppula, Brent Waters
venue: FOCS 2017
published: 2017
aliases:
  - GKW17c
cryptobib_key: FOCS:GoyKopWat17
---

# [GKW17c] Lockable Obfuscation

**Authors:** Rishab Goyal, Venkata Koppula, Brent Waters | **Venue:** FOCS 2017 | [Source](https://eprint.iacr.org/2017/274)

## Abstract

In this paper we introduce the notion of lockable obfuscation. In a lockable obfuscation scheme there exists an obfuscation algorithm $\mathsf{Obf}$ that takes as input a security parameter $\lambda$, a program $P$, a message $\mathsf{msg}$ and “lock value” $\alpha$ and outputs an obfuscated program $\widetilde{P}$. One can evaluate the obfuscated program $\widetilde{P}$ on any input $x$ where the output of evaluation is the message $\mathsf{msg}$ if $P(x) = \alpha$ and otherwise receives a rejecting symbol $\perp$.

We proceed to provide a construction of lockable obfuscation and prove it secure under the Learning with Errors (LWE) assumption. Notably, our proof only requires LWE with polynomial hardness and does not require complexity leveraging.

We follow this by describing multiple applications of lockable obfuscation. First, we show how to transform any attribute-based encryption (ABE) scheme into one in which the attributes used to encrypt the message are hidden from any user that is not authorized to decrypt the message. (Such a system is also know as predicate encryption with one-sided security.) The only previous construction due to Gorbunov, Vaikuntanathan and Wee is based off of a specific ABE scheme of Boneh et al. By enabling the transformation of any ABE scheme we can inherent different forms and features of the underlying scheme such as: multi-authority, adaptive security from polynomial hardness, regular language policies, etc.

We also show applications of lockable obfuscation to separation and uninstantiability results. We first show how to create new separation results in circular encryption that were previously based on indistinguishability obfuscation. This results in new separation results from learning with error including a public key bit encryption scheme that it IND-CPA secure and not circular secure. The tool of lockable obfuscation allows these constructions to be almost immediately realized by translation from previous indistinguishability obfuscation based constructions.

In a similar vein we provide random oracle uninstantiability results of the Fujisaki-Okamoto transformation (and related transformations) from the lockable obfuscation combined with fully homomorphic encryption. Again, we take advantage that previous work used indistinguishability obfuscation that obfuscated programs in a form that could easily be translated to lockable obfuscation.
