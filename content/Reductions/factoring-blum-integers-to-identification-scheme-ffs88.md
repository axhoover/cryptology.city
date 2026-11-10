---
type: reduction
status: draft
title: "Factoring ⇒ ID (Feige–Fiat–Shamir)"
aliases:
  - Feige–Fiat–Shamir identification
id: red-factoring-blum-integers-to-identification-scheme-ffs88
kind: implication
hypotheses: [factoring-blum-integers]
conclusion: identification-scheme
class: fully-black-box
model: standard
source:
  - "[[FFS88 - Zero-Knowledge Proofs of Identity|FFS88]]"
rationale:
  class: "The scheme uses only arithmetic modulo the sampled Blum integer, and the reduction samples the secret key itself, plays the honest prover, and runs the impersonator only as an oracle, rewinding it to two accepting answers to one commitment."
---

# Factoring ⇒ ID (Feige–Fiat–Shamir)

## Statement

In the Feige–Fiat–Shamir scheme over a Blum integer $N$, the secret key is $S_1, \ldots, S_k \getsr \ZZ_N^*$ and the public key is $N$ with $I_j = \pm S_j^{-2} \bmod N$ for independent uniform signs. In each of $t$ sequential rounds the prover sends $X = \pm R^2$ for $R \getsr \ZZ_N^*$ and a uniform sign, the verifier replies with $E \getsr \bits^k$, and the prover answers $Y = R \prod_j S_j^{E_j}$; the verifier accepts the round iff $X \neq 0$ and $Y^2 \prod_j I_j^{E_j} = \pm X$. FFS88 define zero-knowledge proofs of knowledge and prove that the scheme is one for suitably small $k$, and that if [[factoring#factoring-blum-integers|factoring Blum integers]] is hard it is a secure [[identification-scheme|identification scheme]]: no efficient adversary that has first taken part, as an arbitrary verifier, in polynomially many sequential executions with the honest prover makes the honest verifier accept with probability non-negligibly greater than $2^{-kt}$ — [[FFS88 - Zero-Knowledge Proofs of Identity|FFS88]]. With $kt = \omega(\log \secpar)$ this is security against [[identification-scheme#impersonation-under-active-and-concurrent-attack|impersonation under active attack]], and hence under passive attack — standard.

## Sketch

The reduction samples the $S_j$ itself, so it answers the adversary's executions as the honest prover. Two accepting answers $Y, Y'$ to one $X$ under challenges $E \neq E'$ give $(Y/Y')^2 = Z^2$ for $Z = \prod_j S_j^{E_j - E'_j}$, since $-1$ is not a square modulo a Blum integer. The adversary's view is independent of which square roots $S_j$ of $\pm I_j^{-1}$ the reduction holds, so $Y/Y' \neq \pm Z$ with probability $1/2$, and then $\gcd(Y/Y' - Z, N)$ is a prime factor of $N$ — standard.

## Notes

- The scheme modifies the identification scheme of [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]], which has no random signs — [[FFS88 - Zero-Knowledge Proofs of Identity|FFS88]]. FS86 also derive a signature scheme from it by replacing the verifier's challenge with a hash of the commitment and the message ([[fiat-shamir-heuristic|Fiat–Shamir]]) — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]].
- If factoring is hard, the version that runs the $t$ rounds in parallel releases no transferable information, a notion FFS88 introduce for this purpose — [[FFS88 - Zero-Knowledge Proofs of Identity|FFS88]].
