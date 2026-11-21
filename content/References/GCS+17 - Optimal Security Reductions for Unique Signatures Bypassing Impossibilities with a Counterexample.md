---
type: reference
status: stub
title: "GCS+17"
source: https://eprint.iacr.org/2017/499
authors: Fuchun Guo, Rongmao Chen, Willy Susilo, Jianchang Lai, Guomin Yang, Yi Mu
venue: CRYPTO 2017
published: 2017
aliases:
  - GCS+17
cryptobib_key: C:GCSLYM17
---

# [GCS+17] Optimal Security Reductions for Unique Signatures: Bypassing Impossibilities with a Counterexample

**Authors:** Fuchun Guo, Rongmao Chen, Willy Susilo, Jianchang Lai, Guomin Yang, Yi Mu | **Venue:** CRYPTO 2017 | [Source](https://eprint.iacr.org/2017/499)

## Abstract

Optimal security reductions for unique signatures (Coron, Eurocrypt 2002) and their generalization, i.e., efficiently re-randomizable signatures (Hofheinz et al., PKC 2012 and Baderet al., Eurocrypt 2016) have been well studied in the literature. Particularly, it has been shown that under a non-interactive hard assumption, any security reduction (with or without random oracles) for a unique signature scheme or an efficiently re-randomizable signature scheme must loose a factor of at least $q_s$ in the security model of existential unforgeability against chosen-message attacks (EU-CMA), where $q_s$ denotes the number of signature queries. Note that the number $q_s$ can be as large as $2^{30}$ in practice. All unique signature schemes and efficiently re-randomizable signature schemes are concluded to be accompanied with loose reductions from these impossibility results.

Somewhat surprisingly, in contrast to previous impossibility results (Coron, Eurocrypt 2002; Hofheinz et al., PKC 2012; Bader et al., Eurocrypt 2016), in this work we show that without changing the assumption type and security model, it is not always the case that any security reduction must loose a factor of at least $q_s$. As a counterexample, we propose a unique signature scheme with a tight reduction in the EU-CMA security model under the Computational Diffie-Hellman (CDH) assumption. Precisely, in the random oracle model, we can program a security reduction with a loss factor of at most $nq^{1/{n}}$, where $n$ can be any integer independent of the security parameter for the scheme construction and $q$ is the number of hash queries to random oracles. The loss factor in our reduction can be very small. Considering $n=25$ and $q=2^{50}$ as an example, the loss factor is of at most $nq^{1/{n}}=100$ and therefore our security reduction is tight.

Notice that the previous impossibility results are derived from proofs via a so-called meta-reduction technique. We stress that instead of indicating any flaw in their meta-reduction proofs, our counterexample merely demonstrates that their given meta-reduction proofs fail to capture all security reductions. More precisely, we adopt a reduction called query-based reduction, where the reduction uses a hash query from the adversary to solve an underlying hard problem. We show that the meta-reduction proofs break down in our query-based reduction. The query-based reduction is not a new notion and it has been adopted for encryption proofs, but this work is the first seminal approach for applying query-based reduction in digital signatures.

The given counterexample in this work is of an independent interest as it implies a generic way of constructing a digital signature scheme (including unique signatures) with a tight reduction in the random oracle model from a digital signature scheme with a loose reduction. Although our proposed methodology is somewhat impractical due to the inefficiency of signature length, it introduces a completely new approach for tight proofs that is different from traditional approaches using a random salt.
