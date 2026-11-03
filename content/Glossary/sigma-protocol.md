---
type: glossary
status: draft
aliases:
  - Sigma protocol
  - Σ-protocol
  - Special soundness
title: Sigma protocol
id: sigma-protocol
---

# Sigma protocol

A **sigma protocol** ($\Sigma$-protocol) for a relation $R$ is a three-move public-coin [[interactive-protocol|protocol]] in which a prover holding $(x, w) \in R$ sends a commitment $a$, the verifier replies with a uniform challenge $e$ from a finite set $C$, and the prover answers with a response $z$; the protocol is complete, special sound and special honest-verifier zero-knowledge — [[Dam10 - On Sigma-protocols|Dam10]].

## Definition

Let $R \subseteq \bits^* \times \bits^*$ be a relation with $|w| \le \poly(|x|)$ for all $(x, w) \in R$, and $L_R := \{x : \exists w,\ (x, w) \in R\}$. A $\Sigma$-protocol for $R$ is a pair of efficient algorithms $(P, V)$ with a challenge space $C$: on common input $x$, $P(x, w)$ sends $a$, $V$ sends $e \getsr C$, $P$ sends $z$, and $V$ accepts or rejects as a deterministic function of $(x, a, e, z)$. A conversation $(a, e, z)$ is **accepting** for $x$ if $V$ accepts it, and the protocol satisfies the following — [[Dam10 - On Sigma-protocols|Dam10]].

- **Completeness**: for every $(x, w) \in R$, $V$ accepts with probability $1$.
- **Special soundness**: there is an efficient extractor $\calE$ such that for every $x$ and every two accepting conversations $(a, e, z)$, $(a, e', z')$ for $x$ with $e \ne e'$, $(x, \calE(x, a, e, z, e', z')) \in R$.
- **Special honest-verifier zero knowledge (SHVZK)**: there is an efficient simulator $\Sim$ such that for every $(x, w) \in R$ and every $e \in C$, the conversation $(a, e, z)$ with $(a, z) \gets \Sim(x, e)$ is distributed as a conversation between $P(x, w)$ and $V(x)$ whose challenge is $e$. Statistical and computational SHVZK require the two distributions to be statistically or computationally indistinguishable instead.

## Properties

- **Soundness error.** For $x \notin L_R$, special soundness leaves each commitment at most one challenge with an accepting response, so every prover makes $V$ accept with probability at most $1/|C|$ — standard.
- **Proof of knowledge.** A $\Sigma$-protocol is a proof of knowledge with knowledge error $1/|C|$: an extractor with rewindable black-box access to a prover that makes $V(x)$ accept with probability $\varepsilon > 1/|C|$ outputs a witness for $x$ in expected time $\poly(|x|)/(\varepsilon - 1/|C|)$ — [[Dam10 - On Sigma-protocols|Dam10]]. In strict time, one rewinding yields two accepting conversations with a common commitment and distinct challenges with probability at least $(\varepsilon - 1/|C|)^2$ by the [[forking-lemma#reset-lemma|reset lemma]] — [[BP02 - GQ and Schnorr Identification Schemes Proofs of Security against Impersonation under Active and Concurrent Attacks|BP02]].
- **Honest-verifier zero knowledge.** SHVZK implies [[zero-knowledge-proof#honest-verifier-zk-hvzk|honest-verifier zero knowledge]]: sample $e \getsr C$ and run $\Sim(x, e)$ — standard.
- **Parallel repetition.** Running $t$ copies with independent commitments, a challenge $(e_1, \ldots, e_t) \in C^t$ and one response per copy is a $\Sigma$-protocol with challenge space $C^t$: two accepting conversations with distinct challenge vectors differ in some coordinate $i$, and special soundness of copy $i$ extracts — [[Dam10 - On Sigma-protocols|Dam10]].

## OR composition

Let $(P_0, V_0)$ and $(P_1, V_1)$ be $\Sigma$-protocols for relations $R_0$ and $R_1$ with challenge space $C = \bits^t$ and simulators $\Sim_0, \Sim_1$. For $R_{\mathrm{OR}} := \{((x_0, x_1), w) : (x_0, w) \in R_0 \text{ or } (x_1, w) \in R_1\}$, a prover holding $w$ with $(x_\beta, w) \in R_\beta$ samples $e_{1-\beta} \getsr C$ and $(a_{1-\beta}, z_{1-\beta}) \gets \Sim_{1-\beta}(x_{1-\beta}, e_{1-\beta})$, sends $(a_0, a_1)$ with $a_\beta$ computed by $P_\beta$, and answers the challenge $e$ with $(e_0, e_1, z_0, z_1)$, where $e_\beta := e \oplus e_{1-\beta}$ and $z_\beta$ is the response of $P_\beta$ to $e_\beta$. The verifier checks $e_0 \oplus e_1 = e$ and that $(a_j, e_j, z_j)$ is accepting for $x_j$ under $V_j$ for $j = 0, 1$. The result is a $\Sigma$-protocol for $R_{\mathrm{OR}}$, and it is witness indistinguishable; more generally, sharing the challenge with a threshold secret-sharing scheme proves knowledge of witnesses for $d$ of $n$ statements without revealing which — [[CDS94 - Proofs of Partial Knowledge and Simplified Design of Witness Hiding Protocols|CDS94]].

Special soundness follows because two accepting conversations with $e \ne e'$ differ in $e_0$ or in $e_1$. With perfect SHVZK, the prover's messages have the same distribution for either witness against every verifier, since $a_{1-\beta}$ is distributed as an honest commitment independent of $e_{1-\beta}$ — standard. [[FS90 - Witness Indistinguishable and Witness Hiding Protocols|FS90]] define witness indistinguishability.

## Examples

- **Schnorr** ([[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]]): for $h = g^x$ in a group of prime order $p$, $a = g^r$ with $r \getsr \ZZ_p$, $e \in C \subseteq \ZZ_p$, $z = r + ex \bmod p$, and $V$ checks $g^z = a h^e$ — [[Sch91 - Efficient signature generation by smart cards|Sch91]]. The extractor outputs $(z - z')/(e - e') \bmod p$, and $\Sim(h, e)$ samples $z \getsr \ZZ_p$ and sets $a := g^z h^{-e}$, which is perfect SHVZK — standard.
- **Chaum–Pedersen**: for $u = g^x$ and $v = h^x$ in a group of prime order $p$, a proof that $\log_g u = \log_h v$ sends $a = (g^r, h^r)$, receives $e$, and answers $z = r + ex \bmod p$; $V$ checks $g^z = a_1 u^e$ and $h^z = a_2 v^e$ — [[CP92 - Wallet Databases with Observers|CP92]]. Its Fiat–Shamir transform is the proof attached to [[digital-signature#edl-signatures|EDL signatures]] — [[GJ03 - A Signature Scheme as Secure as the Diffie-Hellman Problem|GJ03]].
- **Guillou–Quisquater**: for an RSA modulus $N$, a prime exponent $v$ and $X = x^v \bmod N$ with $x \in \ZZ_N^*$, the prover sends $a = r^v \bmod N$ for $r \getsr \ZZ_N^*$, receives $e \in \{0, \ldots, v - 1\}$, and answers $z = r x^e \bmod N$; $V$ checks $z \in \ZZ_N^*$ and $z^v = a X^e \bmod N$ — [[GQ88 - A Practical Zero-Knowledge Protocol Fitted to Security Microprocessor Minimizing Both Trasmission and Memory|GQ88]]. Two accepting conversations give $(z/z')^v = X^{e - e'}$ with $\gcd(v, e - e') = 1$, and $\alpha v + \beta (e - e') = 1$ gives the $v$-th root $X^{\alpha} (z/z')^{\beta}$ of $X$ — standard.

## Fiat–Shamir

The [[fiat-shamir-heuristic|Fiat–Shamir transform]] replaces the challenge by a random-oracle hash of the statement and the commitment, and of the message as well to obtain a signature scheme ([[id-and-rom-to-ds|ID ⇒ DS]]) — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]. For a $\Sigma$-protocol with $1/|C|$ negligible the result is a NIZK argument in the random-oracle model ([[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]]) — standard. Unforgeability proofs for such signatures rewind the forger with the [[forking-lemma|forking lemma]] and extract by special soundness — [[PS96 - Security Proofs for Signature Schemes|PS96]].
