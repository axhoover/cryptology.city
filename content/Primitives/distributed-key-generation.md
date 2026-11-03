---
type: primitive
status: draft
aliases:
  - DKG
  - Distributed key generation
title: Distributed key generation
id: distributed-key-generation
---

# Distributed key generation

A protocol in which $n$ parties jointly generate a discrete-logarithm public key $y = g^x$ together with a Shamir sharing of $x$ among them, so that no party ever holds $x$, any $t + 1$ honest shares determine it, and an adversary corrupting at most $t$ parties learns nothing about $x$ beyond $y$. The definitions below are those of [[GJKR99 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR99]], [[GJKR07 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR07]].

## Syntax

Let $\GrGen(1^\secpar)$ output $(\GG, g, q)$, a group $\GG = \langle g \rangle$ of prime order $q$, and fix parties $P_1, \ldots, P_n$ and a threshold $t < n/2$. The parties communicate synchronously over pairwise [[interactive-protocol#secure-channels|secure channels]] and a [[interactive-protocol#broadcast-channel|broadcast channel]]. A DKG protocol $\Pi$ is an [[interactive-protocol|interactive protocol]] in which every party starts with $(1^\secpar, \GG, q, g, n, t)$ and every honest $P_i$ outputs a share $x_i \in \ZZ_q$ and a public key $y \in \GG$. The adversary corrupts at most $t$ parties before the execution starts (static corruption), and the corrupted parties deviate arbitrarily ([[interactive-protocol#adversary-models|malicious]]).

## Properties

### Correctness

$\Pi$ is **correct** against $t$ corruptions if for every efficient adversary corrupting at most $t$ parties, except with negligible probability:

1. all subsets of $t + 1$ shares held by honest parties define the same secret $x \in \ZZ_q$, that is, the honest shares lie on one polynomial of degree at most $t$ whose constant term is $x$;
2. all honest parties output the same public key $y$, and $y = g^x$;
3. $x$ is uniformly distributed in $\ZZ_q$, hence $y$ is uniformly distributed in $\GG$

— [[GJKR99 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR99]], [[GJKR07 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR07]].

### Secrecy

$\Pi$ is **secret** against $t$ corruptions if for every efficient adversary $\calA$ corrupting at most $t$ parties there is an efficient simulator $\Sim$ that, on input $y \in \GG$, outputs a view computationally indistinguishable from the view of $\calA$ in an execution of $\Pi$ whose public key output is $y$ — [[GJKR99 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR99]], [[GJKR07 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR07]]. A DKG protocol is **secure** against $t$ corruptions if it is correct and secret against $t$ corruptions.

TODO: game.

# Variations

## Keys without uniformity

Dropping requirement 3 of correctness lets the adversary bias the distribution of $y$ while honest parties still agree on $y$ and on a consistent sharing of its discrete logarithm. Pedersen's protocol, below, satisfies requirements 1 and 2 of correctness but not requirement 3 — [[GJKR99 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR99]], [[GJKR07 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR07]].

# Other results

- Pedersen's DKG removes the trusted dealer from threshold ElGamal: every $P_i$ shares a random $z_i \in \ZZ_q$ with Feldman's [[secret-sharing#verifiable-secret-sharing-vss|verifiable secret sharing]] ([[Fel87 - A Practical Scheme for Non-interactive Verifiable Secret Sharing|Fel87]]), broadcasting $g^{a_{ik}}$ for the coefficients $a_{ik}$ of its sharing polynomial, so $g^{a_{i0}} = g^{z_i}$; dealers whose sharings fail verification are disqualified, and with $Q$ the set of remaining dealers, $x = \sum_{i \in Q} z_i$, $y = \prod_{i \in Q} g^{z_i}$, and $P_j$'s share is the sum of the shares it received from dealers in $Q$ — [[Ped91a - A Threshold Cryptosystem without a Trusted Party|Ped91a]], in the form given by [[GJKR99 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR99]].
- In Pedersen's DKG the adversary sees the honest parties' values $g^{z_i}$ before deciding whether its own dealers are disqualified, so it can bias the distribution of $y$, and the protocol does not satisfy requirement 3 of correctness — [[GJKR99 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR99]], [[GJKR07 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR07]].
- GJKR's DKG first has every $P_i$ share $z_i$ with Pedersen's verifiable secret sharing ([[Ped91 - Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing|Ped91b]]), which hides $z_i$ information-theoretically, fixes the set $Q$ of qualified dealers, and only then has each dealer in $Q$ broadcast $g^{a_{ik}}$ for its coefficients; the $z_i$ of a dealer whose broadcast values are inconsistent with its shares is reconstructed from its Pedersen shares. Given a public $h \in \GG$ whose discrete logarithm to base $g$ no party knows, and assuming [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] is hard in $\GG$, it is secure against static malicious corruption of $t < n/2$ parties ([[prime-order-dlog-and-secure-channels-to-dkg-gjkr99|DLOG + secure channels ⇒ DKG]]) — [[GJKR99 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR99]], [[GJKR07 - Secure Distributed Key Generation for Discrete-Log Based Cryptosystems|GJKR07]].

<!-- BEGIN GENERATED participates-in 4b618a70be02 -->

## Participates in

**Produces Distributed key generation**

- [[prime-order-dlog-and-secure-channels-to-dkg-gjkr99|DLOG + secure channels ⇒ DKG (GJKR)]]

<!-- END GENERATED participates-in -->
