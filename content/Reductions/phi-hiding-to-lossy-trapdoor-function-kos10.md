---
type: reduction
status: draft
title: "Φ-Hiding ⇒ Lossy TDF (Kiltz–O'Neill–Smith)"
aliases: []
id: red-phi-hiding-to-lossy-trapdoor-function-kos10
kind: implication
hypotheses: [phi-hiding]
conclusion: lossy-trapdoor-function
class: fully-black-box
model: standard
source:
  - "[[KOS10 - Instantiability of RSA-OAEP under Chosen-Plaintext Attack|KOS10]]"
security-loss: "none for one copy; a factor t from the hybrid over t copies when the exponent is small"
rationale:
  class: "The function is RSA itself, and the reduction passes the Φ-hiding instance unchanged as the index to any mode distinguisher, used only as an oracle."
---

# Φ-Hiding ⇒ Lossy TDF (Kiltz–O'Neill–Smith)

## Statement

If the [[rsa-assumption#φ-hiding|Φ-hiding assumption]] holds, RSA is a lossy trapdoor permutation — [[KOS10 - Instantiability of RSA-OAEP under Chosen-Plaintext Attack|KOS10]]. In the injective mode $\gcd(e, \varphi(N)) = 1$ and $x \mapsto x^e \bmod N$ is the RSA permutation with trapdoor $d \equiv e^{-1} \pmod{\varphi(N)}$; in the lossy mode $e \mid \varphi(N)$ and the map is at least $e$-to-$1$ on $\ZZ_N^*$; the two modes are indistinguishable exactly by Φ-hiding. RSA acts on $\ZZ_N$ rather than on bit strings — [[AKPS19 - Lossy Trapdoor Permutations with Improved Lossiness|AKPS19]]. In the injective mode it permutes all of $\ZZ_N$, so its restriction to the inputs in $[0, 2^{|N|-1})$ is an injective function on $\bits^{|N|-1}$ whose lossy mode has lossiness at least $\log e - 1 - o(1)$ — standard. When $\log e = \omega(\log \secpar)$, for instance for $e$ close to $N^{1/4 - \varepsilon}$, this is a [[trapdoor-permutation#lossy-trapdoor-functions|lossy trapdoor function]]; for smaller $e$, the product of $t = \omega(\log \secpar)$ independent instances multiplies the lossiness by $t$ and is one — standard.

## Sketch

For prime $e \mid p - 1$, the map $x \mapsto x^e$ has $(p-1)/e + 1$ images on $\ZZ_p$, so at most $(N/e + q)$ images on $\ZZ_N$; the restricted domain has $2^{|N|-1} > N/2$ elements, which gives the lossiness $\log e - 1 - \log(1 + e/p)$ — standard.

## Notes

- In the lossy mode $x \mapsto x^e$ is at most $e^2$-to-$1$ on $\ZZ_N$, so for $e \le N^{1/4-\varepsilon}$ the lossiness is below $|N|/2$, the residual leakage exceeds half the input length, and the function is not [[trapdoor-permutation#highly-lossy-trapdoor-functions|highly lossy]] — standard.
- A domain-extension technique of [[FGKRS10 - More Constructions of Lossy and Correlation-Secure Trapdoor Functions|FGKRS10]] makes RSA a lossy trapdoor permutation on a fixed domain, with considerably reduced lossiness; AKPS19 give Φ-hiding-based lossy trapdoor permutations with improved lossiness and the first all-but-one lossy trapdoor permutation from Φ-hiding — [[AKPS19 - Lossy Trapdoor Permutations with Improved Lossiness|AKPS19]].
- KOS10 use the lossiness of RSA to prove RSA-OAEP IND-CPA-secure in the standard model, with the first round's hash function $t$-wise independent — [[KOS10 - Instantiability of RSA-OAEP under Chosen-Plaintext Attack|KOS10]].
