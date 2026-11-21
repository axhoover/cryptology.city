---
type: reduction
status: draft
title: "OLDC ⇒ Passive-server SK-DEPIR"
aliases: []
id: red-oblivious-locally-decodable-code-to-passive-sk-depir
kind: implication
hypotheses: [oblivious-locally-decodable-code]
conclusion: passive-sk-depir
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction runs the OLDC's algorithms as oracles, and the reduction runs any secret-key privacy adversary as an oracle, answering it with a uniformly random encoding and the OLDC's positions."
---

# OLDC ⇒ Passive-server SK-DEPIR

## Statement

An [[oblivious-locally-decodable-code|oblivious locally decodable code]] $(\KeyGen, \mathsf{Encode}, \Query, \Decode)$, with its encoding masked by a one-time pad, is a [[doubly-efficient-pir#passive-server-sk-depir|passive-server SK-DEPIR]]: key generation samples $\sk \gets \KeyGen(1^\secpar, 1^n)$ and a uniformly random pad $K$ of the encoding's length, the client's key and the encoding key are both $(\sk, K)$, $\mathsf{Prep}$ outputs $EDB = X \oplus K$ for $X \gets \mathsf{Encode}(1^\secpar, \sk, DB)$, $\mathsf{Qry}$ sends the positions $I \gets \Query(\sk, i; r)$, and $\mathsf{Fin}$ outputs $\Decode(\sk, i, EDB_I \oplus K_I, r)$. It is perfectly correct, since $EDB_I \oplus K_I = X_I$, and its secret-key privacy advantage equals the OLDC's obliviousness advantage, since $EDB$ is uniformly random and independent of $\sk$, of the coins of $\Query$ and of $DB$ — folklore. It is [[doubly-efficient-pir#efficiency|doubly efficient]]: $\Setup$ runs $\KeyGen$ and $\mathsf{Encode}$ and samples $K$ in time polynomial in $\secpar$ and $n$; the query $I$ has at most as many bits as the running time of $\Query$, the response is the $Lq$ bits read, and $\mathsf{Fin}$ unmasks $Lq$ bits and runs $\Decode$, so the communication and the running times of $\mathsf{Qry}$, $\mathsf{Rsp}$ and $\mathsf{Fin}$ are $O(p(\secpar) + s(n))$ for the OLDC's bound $p(\secpar) + s(n)$ — folklore.

## Notes

- LMW25 mask the encoding of a passive-server scheme with a one-time pad in the same way, so that it is distributed uniformly (Lemma 5.5) — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]].
- Conversely, a passive-server SK-DEPIR is an OLDC, with $\mathsf{Fin}$'s coins drawn by the query sampler: an OLDC adversary is a secret-key privacy adversary that outputs any database and ignores $EDB$ — folklore.
