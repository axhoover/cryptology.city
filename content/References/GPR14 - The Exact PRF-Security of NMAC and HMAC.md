---
type: reference
status: stub
title: "GPR14"
source: https://eprint.iacr.org/2014/578
authors: Peter Gaži, Krzysztof Pietrzak, Michal Rybár
venue: CRYPTO 2014
published: 2014
aliases:
  - GPR14
cryptobib_key: C:GazPieRyb14
---

# [GPR14] The Exact PRF-Security of NMAC and HMAC

**Authors:** Peter Gaži, Krzysztof Pietrzak, Michal Rybár | **Venue:** CRYPTO 2014 | [Source](https://eprint.iacr.org/2014/578)

## Abstract

NMAC is a mode of operation which turns a fixed input-length keyed hash function f into a variable input-length function. A practical single-key variant of NMAC called HMAC is a very popular and widely deployed message authentication code (MAC). Security proofs and attacks for NMAC can typically be lifted to HMAC.

NMAC was introduced by Bellare, Canetti and Krawczyk [Crypto'96], who proved it to be a secure pseudorandom function (PRF), and thus also a MAC, assuming that (1) f is a PRF and (2) the function we get when cascading f is weakly collision-resistant. Unfortunately, HMAC is typically instantiated with cryptographic hash functions like MD5 or SHA-1 for which (2) has been found to be wrong. To restore the provable guarantees for NMAC, Bellare [Crypto'06] showed its security based solely on the assumption that f is a PRF, albeit via a non-uniform reduction.

Our first contribution is a simpler and uniform proof: If f is an $\varepsilon$-secure PRF (against q queries) and a $\delta$-non-adaptively secure PRF (against q queries), then NMAC$^f$ is an $(\varepsilon+lq\delta)$-secure PRF against q queries of length at most l blocks each.

We then show that this $\varepsilon+lq\delta$ bound is basically tight. For the most interesting case where $lq\delta \ge \varepsilon$ we prove this by constructing an f for which an attack with advantage $lq\delta$ exists. This also violates the bound $O(l\varepsilon)$ on the PRF-security of NMAC recently claimed by Koblitz and Menezes.

Finally, we analyze the PRF-security of a modification of NMAC called NI [An and Bellare, Crypto'99] that differs mainly by using a compression function with an additional keying input. This avoids the constant rekeying on multi-block messages in NMAC and allows for a security proof starting by the standard switch from a PRF to a random function, followed by an information-theoretic analysis. We carry out such an analysis, obtaining a tight $lq^2/2^c$ bound for this step, improving over the trivial bound of $l^2q^2/2^c$. The proof borrows combinatorial techniques originally developed for proving the security of CBC-MAC [Bellare et al., Crypto'05]. We also analyze a variant of NI that does not include the message length in the last call to the compression function, proving a $l^{1+o(1)}q^2/2^c$ bound in this case.
