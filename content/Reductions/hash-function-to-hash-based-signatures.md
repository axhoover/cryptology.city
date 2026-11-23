---
type: reduction
status: draft
title: "SPR hash + PRF ⇒ Stateful DS (XMSS)"
aliases: []
id: red-hash-function-to-hash-based-signatures
kind: implication
hypotheses: [same-width-spr-and-prf]
conclusion: bounded-stateful-ds
class: fully-black-box
model: standard
source:
  - "[[BDH11 - XMSS A Practical Forward Secure Signature Scheme Based on Minimal Security Assumptions|BDH11]]"
security-loss: ""
rationale:
  class: "XMSS calls the hash family and the PRF only as oracles, and the reduction embeds a second-preimage or PRF challenge and runs any forger as an oracle."
---

# SPR hash + PRF ⇒ Stateful DS (XMSS)

## Statement

XMSS is a hash-based [[digital-signature#stateful-signatures|stateful signature scheme]]: a Merkle tree of height $h$ over $2^h$ Winternitz one-time verification keys authenticates them under one root, the signing key holds the index of the next unused one-time key, and the scheme signs $2^h$ messages — [[HBG+18 - XMSS eXtended Merkle Signature Scheme|HBG+18]] (Sections 1 and 4.1). In the original version, XMSS is unforgeable for $2^h$ signatures if its hash function family is second-preimage resistant and its function family is a PRF — [[BDH11 - XMSS A Practical Forward Secure Signature Scheme Based on Minimal Security Assumptions|BDH11]].

In RFC 8391 the functions $F$, $H$ and PRF of XMSS share one length of $n$ bytes: the tree hash $H$ maps an $n$-byte key and a $2n$-byte input to $n$ bytes and is applied to the two children of a node, each XORed with an $n$-byte bitmask; the function $F$ that the Winternitz chains iterate maps an $n$-byte key and an $n$-byte input to $n$ bytes; and the PRF maps an $n$-byte key and a $32$-byte input to $n$ bytes, generating the keys and bitmasks of $F$ and $H$ and, in pseudorandom key generation, $n$-byte seeds that it then takes as keys — [[HBG+18 - XMSS eXtended Merkle Signature Scheme|HBG+18]] (Sections 3.1.1.1, 3.1.2, 3.1.7, 4.1.2, 4.1.4 and 4.1.11). Here the two families have one width $c$ and form a [[hash-function#same-width-spr-hash-and-prf|same-width SPR hash and PRF]]: a [[hash-function#length-halving-second-preimage-resistance|length-halving second-preimage-resistant]] family $\hash : \calK \times \bits^{2c} \to \bits^c$, and a [[pseudorandom-function#compression-function-prfs|compression-function PRF]] $f : \bits^c \times \bits^b \to \bits^c$ with $c \le b$ and $\KeyGen(1^\secpar)$ uniform on $\bits^c$, whose restriction to the $0$-padded copy of $\bits^c$ in $\bits^b$ is a PRF with key space, domain and range $\bits^c$ ([[compression-function-prf-to-length-preserving-prf|Compression-function PRF ⇒ Length-preserving PRF]]) — standard. Key generation computes the root, which depends on all $2^h$ leaves, so an efficient $\KeyGen$ forces $2^h \le \poly(\secpar)$; for a polynomial $T$, the height $h = \lceil \log_2 T \rceil$ gives a scheme for $T$ signatures — standard.

## Sketch

Each message is signed under a fresh Winternitz one-time key, and a Merkle tree over the one-time verification keys authenticates them under one root public key. Each tree node hashes its two children XORed with public bitmasks, and XMSS does not rely on the collision resistance of its hash functions but on weaker properties — [[HBG+18 - XMSS eXtended Merkle Signature Scheme|HBG+18]] (Section 4.1).

## Notes

- RFC 8391 specifies XMSS with the later improvements of Hülsing, Rijneveld and Song (PKC 2016), and the multi-tree variant XMSS^MT. The security proof it refers to, by the same authors, asks for post-quantum multi-function multi-target second-preimage resistance of the keyed hash functions $F$ and $H$, a statistical condition on $F$, a post-quantum PRF, and post-quantum multi-target extended target collision resistance of the message hash $H_{\mathrm{msg}}$; it models the PRF as a random oracle where the PRF generates bitmasks and hash keys, and it treats a message compression other than the RFC's — [[HBG+18 - XMSS eXtended Merkle Signature Scheme|HBG+18]] (Sections 1 and 9.1). NIST approves XMSS and XMSS^MT, with LMS and HSS, as stateful hash-based signatures — [[CAD+20 - Recommendation for Stateful Hash-Based Signature Schemes|CAD+20]].
- With the key layout of RFC 8391, XMSS is not [[forward-secure-signature|forward-secure]], even with one signature per period. There the signing key holds all $2^h$ one-time signing keys, or, with the pseudorandom key generation the RFC describes, a secret seed $S$ from which the PRF computes each of them, and signing updates it only by incrementing the index of the next unused one-time key — [[HBG+18 - XMSS eXtended Merkle Signature Scheme|HBG+18]] (Sections 4.1.3, 4.1.9 and 4.1.11). From the signing key exposed after the first signature, an adversary therefore reads or recomputes the one-time signing key of index $0$ and signs a fresh message under index $0$; with the authentication path of the first signature, this is a valid signature for the first period — standard. Forward security needs an update after which no efficient algorithm recomputes a used one-time signing key from the signing key; when the one-time keys derive from a seed, the update must evolve the seed and erase the old one — standard. [[BDH11 - XMSS A Practical Forward Secure Signature Scheme Based on Minimal Security Assumptions|BDH11]] present XMSS as provably forward secure from a pseudorandom and a second-preimage-resistant function family.
- With collision resistance and the plain Merkle tree: [[hash-function-and-hash-based-signatures-to-ds-mer89|Arbitrary-length CRHF + One-time signature ⇒ Stateful DS (Merkle)]] — [[Mer89 - A Certified Digital Signature|Mer89]].
- SPHINCS+ removes the state with a hypertree of XMSS-style subtrees and the few-time signature FORS at the leaves — [[BHK+19 - The SPHINCS+ Signature Framework|BHK+19]]; NIST standardizes it as [[digital-signature#slh-dsa|SLH-DSA]] — [[NIST24c - Stateless Hash-Based Digital Signature Standard|NIST24c]] (Sections 1.2 and 3).
