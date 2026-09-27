---
type: reduction
status: draft
title: "Higher residuosity ⇒ PKE"
aliases: []
id: red-higher-residuosity-to-pke
kind: implication
hypotheses: [higher-residuosity]
conclusion: pke
class: fully-black-box
model: standard
source:
  - "[[CF85 - A Robust and Verifiable Cryptographically Secure Election Scheme|CF85]]"
security-loss: ""
---

# Higher residuosity ⇒ PKE

[[quadratic-residuosity#higher-residuosity|Higher residuosity]] implies [[public-key-encryption|PKE]].

## Statement

The [[quadratic-residuosity#higher-residuosity|higher residuosity]] assumption yields an $\indcpa$-secure [[public-key-encryption|PKE]] with message space $\ZZ_d$, generalizing [[GM84 - Probabilistic encryption|GM84]] from quadratic to $d$-th power residues: for $N = pq$ with $d$ prime, $d \mid p-1$, $\gcd(d, (p-1)/d) = 1$ and $d \nmid q-1$, and a fixed $d$-th non-residue $g \in \ZZ_N^*$, encrypt $m \in \ZZ_d$ as $g^m u^d \bmod N$ for $u \getsr \ZZ_N^*$ — [[CF85 - A Robust and Verifiable Cryptographically Secure Election Scheme|CF85]].

## Sketch

Encryption randomizes within the coset $g^m (\ZZ_N^*)^d$, so distinguishing encryptions of $m_0$ and $m_1$ is distinguishing residue classes. Knowing $\phi(N)$, the decryptor computes $c^{\phi(N)/d} = (g^{\phi(N)/d})^m$ and recovers $m$ by exhaustive search in the order-$d$ subgroup, efficient for small $d$.

## Notes

`class: fully-black-box`: [[CF85 - A Robust and Verifiable Cryptographically Secure Election Scheme|CF85]] state no reduction notion; inferred from the proof shape. One fixed construction on the modulus, and one fixed reduction that sets $g$ to the higher-residuosity challenge, as [[qr-to-pke-gm84|GM84]] sets $y$ to the QR challenge, and runs the IND-CPA adversary once as an oracle: for a $d$-th non-residue the public key is distributed as in the scheme, and for a $d$-th residue every ciphertext is a uniform $d$-th residue, independent of the message.

- Dense variant with ciphertext expansion arbitrarily close to $1$ (the Benaloh cryptosystem) — [[Ben94 - Dense Probabilistic Encryption|Ben94]]
- Corrected key-generation conditions for the dense scheme, whose original parameters can make decryption ambiguous — [[FLA11 - Benaloh's Dense Probabilistic Encryption Revisited|FLA11]]
- Deterministic and probabilistic variants with smooth exponent and higher bandwidth — [[NS98 - A New Public Key Cryptosystem Based on Higher Residues|NS98]]
