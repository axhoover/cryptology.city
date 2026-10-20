---
type: reduction
status: draft
title: DDH + UOWHF ⇒ CCA-secure PKE (Cramer–Shoup)
aliases:
  - Cramer–Shoup cryptosystem
id: red-ddh-and-uowhf-to-pke-cca2-security-cs98
kind: implication
hypotheses: [ddh, uowhf]
conclusion: pke-cca2-security
class: fully-black-box
model: standard
source:
  - "[[CS98 - A Practical Public Key Cryptosystem Provably Secure Against Adaptive Chosen Ciphertext Attack|CS98]]"
security-loss: "additive: the CCA advantage is at most twice the sum of the DDH and target-collision advantages, plus O(Q/q) for Q decryption queries"
rationale:
  class: "The scheme uses only the group operations and the hash as an oracle, and the reduction answers decryption queries with a secret key it samples itself, running any CCA adversary once as an oracle on a challenge built from its DDH tuple."
---

# DDH + UOWHF ⇒ CCA-secure PKE (Cramer–Shoup)

## Statement

Let $\GG$ be a group of prime order $q$ in which [[decisional-diffie-hellman|DDH]] holds, and let $\hash$ be a [[hash-function#target-collision-resistance-universal-one-wayness|universal one-way hash function]] family mapping $\GG^3$ into $\ZZ_q$. The Cramer–Shoup cryptosystem below is [[public-key-encryption#cca-security|IND-CCA2-secure]] — [[CS98 - A Practical Public Key Cryptosystem Provably Secure Against Adaptive Chosen Ciphertext Attack|CS98]].

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{Cramer–Shoup}
\begin{algorithmic}
\State $\KeyGen$: $g_1, g_2 \getsr \GG$; $x_1, x_2, y_1, y_2, z \getsr \ZZ_q$; $k \getsr \calK$
\State $\pk := (g_1, g_2, c = g_1^{x_1} g_2^{x_2}, d = g_1^{y_1} g_2^{y_2}, h = g_1^{z}, k)$; $\sk := (x_1, x_2, y_1, y_2, z)$
\State $\Enc(\pk, m)$: $r \getsr \ZZ_q$; $u_1 := g_1^r$; $u_2 := g_2^r$; $e := h^r m$; $\alpha := \hash_k(u_1, u_2, e)$; $v := c^r d^{r\alpha}$
\Return $(u_1, u_2, e, v)$
\State $\Dec(\sk, (u_1, u_2, e, v))$: $\alpha := \hash_k(u_1, u_2, e)$
\If{$u_1^{x_1 + y_1 \alpha} u_2^{x_2 + y_2 \alpha} \ne v$}
\Return $\bot$
\EndIf
\Return $e / u_1^{z}$
\end{algorithmic}
\end{algorithm}
```

## Sketch

Given $(g_1, g_2, u_1, u_2)$, the reduction samples $x_1, x_2, y_1, y_2, z_1, z_2 \getsr \ZZ_q$, publishes $h := g_1^{z_1} g_2^{z_2}$, which is distributed as in $\KeyGen$, and decrypts by $e / (u_1^{z_1} u_2^{z_2})$, which agrees with $\Dec$ whenever $\log_{g_1} u_1 = \log_{g_2} u_2$. It builds the challenge from $u_1, u_2$ and these exponents. On a DDH tuple this is the real game. On a random tuple, $u_1^{z_1} u_2^{z_2}$ is uniform given the public key, so the hidden bit is information-theoretically hidden, provided every decryption query with $\log_{g_1} u_1' \ne \log_{g_2} u_2'$ is rejected; each such query passes the check with probability $O(1/q)$ unless it carries the challenge's hash value on a different input, which is a target collision — [[CS98 - A Practical Public Key Cryptosystem Provably Secure Against Adaptive Chosen Ciphertext Attack|CS98]].

## Notes

- Efficiency: a ciphertext is four group elements, twice ElGamal's; encryption costs about five exponentiations and decryption about three — [[CS98 - A Practical Public Key Cryptosystem Provably Secure Against Adaptive Chosen Ciphertext Attack|CS98]].
- Without $g_2$, $u_2$ and the $(c, d, v)$ components the scheme is [[ddh-to-pke-elgamal85|ElGamal]] — [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]] — which is IND-CPA-secure under DDH — [[TY98 - On the Security of ElGamal Based Encryption|TY98]] — and malleable — standard.
- The proof generalizes to universal hash proof systems, which give IND-CCA2 encryption from quadratic residuosity and from decisional composite residuosity — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].
