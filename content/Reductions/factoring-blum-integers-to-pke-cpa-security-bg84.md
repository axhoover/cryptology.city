---
type: reduction
status: draft
title: "Factoring ⇒ CPA-secure PKE (Blum–Goldwasser)"
aliases:
  - Blum–Goldwasser cryptosystem
id: red-factoring-blum-integers-to-pke-cpa-security-bg84
kind: implication
hypotheses: [factoring-blum-integers]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source:
  - "[[BG84 - An Efficient Probabilistic Public-Key Encryption Scheme Which Hides All Partial Information|BG84]]"
rationale:
  class: "The scheme uses only arithmetic modulo the sampled Blum integer and its factors, and the reduction runs any CPA adversary only as an oracle to predict the low-order bit of a square root, which it in turn uses only as an oracle to factor."
---

# Factoring ⇒ CPA-secure PKE (Blum–Goldwasser)

## Statement

Let $\KeyGen(1^\secpar)$ sample independent uniform $\secpar$-bit primes $p \equiv q \equiv 3 \pmod 4$ and output $\pk = N := pq$, a Blum integer, and $\sk = (p, q)$. To encrypt $m \in \bits^\ell$, the Blum–Goldwasser scheme, in its one-bit-per-squaring form, samples a uniform $x_0 \in \QR_N$, sets $x_i := x_{i-1}^2 \bmod N$ for $1 \le i \le \ell + 1$, and outputs $(m \oplus (\mathrm{lsb}(x_1), \ldots, \mathrm{lsb}(x_\ell)),\ x_{\ell+1})$; decryption recovers $x_1$ from $x_{\ell+1}$ with $(p, q)$, since squaring permutes $\QR_N$, and recomputes the pad. If [[factoring#factoring-blum-integers|factoring Blum integers]] is hard, the scheme is a [[public-key-encryption#semantic-security|semantically secure]], equivalently [[public-key-encryption#cpa-security|CPA-secure]], [[public-key-encryption|PKE]] — [[BG84 - An Efficient Probabilistic Public-Key Encryption Scheme Which Hides All Partial Information|BG84]].

## Sketch

The pad is the Blum–Blum–Shub output on $x_0$ and $x_{\ell+1}$ is the next state. The proof of [[factoring-with-known-factor-structure-to-prg|Factoring ⇒ PRG]] predicts each output bit from the state after it, so under the same assumption the pad together with $x_{\ell+1}$ is indistinguishable from a uniform string together with $x_{\ell+1}$, and the ciphertext is then independent of $m$ — standard.

## Notes

- A ciphertext is the message length plus one element of $\ZZ_N$. Encryption costs about one squaring modulo $N$ per message bit — standard. Decryption adds one exponentiation modulo each of $p$ and $q$, which computes $x_1$ directly from $x_{\ell+1}$ — [[BG84 - An Efficient Probabilistic Public-Key Encryption Scheme Which Hides All Partial Information|BG84]].
- Flipping bits of the masked part flips the same plaintext bits, so the scheme is malleable and not [[public-key-encryption#cca-security|CCA-secure]] — standard.
- Under the [[quadratic-residuosity|quadratic residuosity assumption]], bitwise Goldwasser–Micali encryption is also CPA-secure ([[qr-to-pke-gm84|QR ⇒ PKE]]), at a cost of one element of $\ZZ_N$ per plaintext bit — [[GM84 - Probabilistic encryption|GM84]].
