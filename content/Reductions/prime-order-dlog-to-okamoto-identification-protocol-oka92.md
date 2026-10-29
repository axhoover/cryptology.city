---
type: reduction
status: draft
title: "DLOG ⇒ Okamoto identification protocol"
aliases: []
id: red-prime-order-dlog-to-okamoto-identification-protocol-oka92
kind: implication
hypotheses: [prime-order-dlog]
conclusion: okamoto-identification-protocol
class: fully-black-box
model: standard
source:
  - "[[Oka92 - Provably Secure and Practical Identification Schemes and Corresponding Signature Schemes|Oka92]]"
security-loss: "impersonation advantage $\\varepsilon$ yields DLOG advantage at least $(1 - 1/p)(\\varepsilon - 1/|C|)^2$"
rationale:
  class: "The protocol is fixed and uses only the group operation, and the reduction plays the honest prover with a key it knows and runs the impersonator only as an oracle, rewinding it."
---

# DLOG ⇒ Okamoto identification protocol

## Statement

The [[identification-scheme#okamoto-identification-protocol|Okamoto identification protocol]] works with independent generators $g_1, g_2$ of a group of prime order $p$ and public key $X = g_1^{x_1} g_2^{x_2}$. The prover sends $A = g_1^{r_1} g_2^{r_2}$, receives $e \getsr C$ from a challenge space $C \subseteq \ZZ_p$ with $1/|C|$ negligible, and replies $z_j = r_j + e x_j \bmod p$; the verifier accepts iff $g_1^{z_1} g_2^{z_2} = A X^e$. The protocol is secure against impersonation under active attack if [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] is hard in the group — [[Oka92 - Provably Secure and Practical Identification Schemes and Corresponding Signature Schemes|Oka92]].

## Sketch

Given $g_2 = g_1^w$, the reduction picks its own key $(x_1, x_2)$ and answers the active phase as the honest prover. It rewinds the impersonation phase to two accepting transcripts with a common $A$, which give a representation $(x_1', x_2')$ of $X$. The protocol is perfectly witness-indistinguishable, so $(x_1', x_2') \ne (x_1, x_2)$ with probability $1 - 1/p$, and then $w = (x_1 - x_1')/(x_2' - x_2) \bmod p$ — standard.

## Notes

- An impersonator with advantage $\varepsilon$ yields the two transcripts with probability at least $(\varepsilon - 1/|C|)^2$ by the Reset Lemma of [[BP02 - GQ and Schnorr Identification Schemes Proofs of Security against Impersonation under Active and Concurrent Attacks|BP02]], so the reduction solves DLOG with probability at least $(1 - 1/p)(\varepsilon - 1/|C|)^2$ — standard.
- Unlike the [[identification-scheme#schnorr-identification-under-concurrent-attack|Schnorr protocol]], whose active and concurrent security is proved under [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] ([[omdl-to-concurrent-schnorr-identification-bp02|OMDL ⇒ Schnorr identification under concurrent attack]]) — [[BP02 - GQ and Schnorr Identification Schemes Proofs of Security against Impersonation under Active and Concurrent Attacks|BP02]], active security of the Okamoto protocol needs only DLOG, because the reduction holds a valid secret key and answers prover sessions honestly — [[Oka92 - Provably Secure and Practical Identification Schemes and Corresponding Signature Schemes|Oka92]].
- The blind version of its Fiat–Shamir transform is one-more unforgeable under DLOG for logarithmically many signer sessions ([[prime-order-dlog-to-blind-okamoto-schnorr-signature-ps00|DLOG ⇒ Blind Okamoto–Schnorr signatures]]) — [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]].
