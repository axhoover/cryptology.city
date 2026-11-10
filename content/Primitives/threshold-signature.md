---
type: primitive
status: draft
aliases:
  - TS
  - Threshold signature
  - Threshold signatures
  - Threshold signature scheme
title: Threshold signature
id: threshold-signature
variants:
  adaptively-secure-threshold-signature: "#adaptive-corruption"
  threshold-rsa: "#threshold-rsa"
  threshold-bls: "#threshold-bls"
  frost: "#frost"
---

# Threshold signature

A $(t, n)$-threshold signature scheme shares the signing key for one public key among $n$ parties so that any $t+1$ of them can run a signing protocol whose output verifies under that public key, while $t$ corrupted parties cannot forge. The output is often an ordinary signature of an existing [[digital-signature|DS]] scheme: RSA full-domain hash — [[Sho00 - Practical Threshold Signatures|Sho00]], BLS — [[Bol03 - Threshold Signatures, Multisignatures and Blind Signatures Based on the Gap-Diffie-Hellman-Group Signature Scheme|Bol03]], Schnorr — [[KG20 - FROST Flexible Round-Optimized Schnorr Threshold Signatures|KG20]], DSS — [[GJKR96 - Robust Threshold DSS Signatures|GJKR96]].

## Syntax

This page writes $t$ for the number of corrupted parties tolerated, so that $t+1$ parties sign. [[KG20 - FROST Flexible Round-Optimized Schnorr Threshold Signatures|KG20]] and the FROST literature write $t$ for the number of signers, tolerating $t-1$ corruptions; [[Sho00 - Practical Threshold Signatures|Sho00]] writes $l$ for the number of parties, $t$ for the corruptions and $k$ for the number of shares combined.

A $(t, n)$-threshold signature scheme, for $0 \le t < n$, is a tuple $\Pi = (\KeyGen, \Sign, \Vrfy)$ with message space $\calM$:

- $\KeyGen(1^\secpar, n, t) \to (\pk, (\pk_i)_{i \in [n]}, (\sk_i)_{i \in [n]})$, a randomized algorithm, run by a trusted dealer, that outputs the public key $\pk$, a verification key $\pk_i$ for each party's share, and party $i$'s key share $\sk_i$,
- $\Sign$, an interactive protocol among a set $S \subseteq [n]$ of at least $t+1$ parties, party $i \in S$ on input $(\sk_i, S, m)$, at the end of which each party in $S$ outputs a signature $\sigma$,
- $\Vrfy(\pk, m, \sigma) \to b$, a deterministic algorithm outputting a bit $b \in \bits$.

A [[distributed-key-generation|distributed key generation]] protocol among the $n$ parties can replace the dealer, giving party $i$ its share $\sk_i$ and every party $\pk$ and the $\pk_i$ — standard. When $\Vrfy$ and the distribution of $\pk$ are those of a DS scheme, $\Pi$ is a **threshold version** of that scheme, and verifiers run its unmodified verification algorithm — standard.

In a **non-interactive** scheme, $\Sign$ is one round: each party $i \in S$ sends a signature share $\sigma_i \gets \mathsf{ShareSign}(\sk_i, m)$, a deterministic $\mathsf{ShareVrfy}(\pk, \pk_i, m, \sigma_i)$ checks it, and $\Combine(\pk, m, (i, \sigma_i)_{i \in T})$ outputs $\sigma$ from any set $T$ of $t+1$ valid shares — [[Sho00 - Practical Threshold Signatures|Sho00]]. [[BCK+22 - Better than Advertised Security for Non-interactive Threshold Signatures|BCK+22]] also count as non-interactive a scheme whose single signing round follows one round of message-independent preprocessing, such as [[threshold-signature#frost|FROST]].

## Properties

### Correctness

$\Pi$ is **perfectly correct** if for all $(\pk, (\pk_i)_{i \in [n]}, (\sk_i)_{i \in [n]})$ output by $\KeyGen(1^\secpar, n, t)$, all $S \subseteq [n]$ with $|S| \ge t+1$ and all $m \in \calM$, an honest run of $\Sign$ among the parties in $S$ on $m$ outputs a signature $\sigma$ with $\Vrfy(\pk, m, \sigma) = 1$. A non-interactive scheme also requires that honestly generated shares pass $\mathsf{ShareVrfy}$.

### Unforgeability

The adversary chooses a set $C$ of at most $t$ parties to corrupt before key generation, and receives their key shares, the public key and every verification key. It opens signing sessions on sets $S$ and messages $m$ of its choice, plays the parties in $S \cap C$, and receives the messages of the honest parties in $S \setminus C$, interleaving sessions arbitrarily. It wins with a valid signature on a message on which no honest party started a session — standard. The exclusion is needed because a session the adversary completes gives it a signature on its message. Schemes that assume private channels between parties withhold messages between honest parties from the adversary.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ts\text{-}uf}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(C, \stA) \gets \calA(1^\secpar, n, t)$
\Comment{static corruption: $C \subseteq [n]$, $|C| \le t$}
\State $(\pk, (\pk_i)_{i \in [n]}, (\sk_i)_{i \in [n]}) \gets \KeyGen(1^\secpar, n, t)$ ; $\calQ \gets \{\}$
\State $(m^*, \sigma^*) \gets \calA^{\calO_{\Sign}}(\stA, \pk, (\pk_i)_{i \in [n]}, (\sk_i)_{i \in C})$
\If{$m^* \in \calQ$}
\Return $0$
\EndIf
\Return $[\Vrfy(\pk, m^*, \sigma^*)]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\Sign}(j, S, m, M)$}
\begin{algorithmic}
\If{session $j$ is new, $S \subseteq [n]$ and $|S| \ge t+1$}
\State $\calQ \gets \calQ \cup \{m\}$
\State start each party $i \in S \setminus C$ on $(\sk_i, S, m)$ as session $j$
\EndIf
\State feed the corrupted parties' messages $M$ to session $j$
\State let $M'$ be the next messages of the parties of session $j$ not in $C$ ($M' := \bot$ if session $j$ was never started)
\Return $M'$
\end{algorithmic}
\end{algorithm}
```

For polynomials $n = n(\secpar)$ and $t = t(\secpar) < n$, $\Pi$ is **unforgeable** against static corruption of $t$ parties if for all efficient $\calA$,

$$
\Adv^{\mathrm{ts\text{-}uf}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{ts\text{-}uf}}_{\Pi,\calA}(\secpar) = 1\right]
$$

is negligible.

For non-interactive schemes, [[BCK+22 - Better than Advertised Security for Non-interactive Threshold Signatures|BCK+22]] give a hierarchy of stronger notions, which relax the condition under which a forged message counts as new.

### Robustness

$\Pi$ is **robust** if the corrupted parties cannot prevent the honest parties from producing signatures — [[Sho00 - Practical Threshold Signatures|Sho00]]: every session whose set $S$ contains at least $t+1$ honest parties outputs a valid signature, whatever the corrupted parties send. Robustness needs $n \ge 2t+1$, so that $t+1$ honest parties exist — standard.

# Variations

## Adaptive corruption

The adversary corrupts parties at any point of the game, up to $t$ in total, and learns the key share and internal state of each, instead of fixing $C$ before key generation. In the game above, $C$ starts empty and $\calA$ also has the corruption oracle below. Canetti, Gennaro, Jarecki, Krawczyk and Rabin give adaptively secure distributed key generation for discrete-log schemes and adaptively secure threshold DSS, and show how to make static threshold RSA schemes adaptively secure — [[CGJ+99 - Adaptive Security for Threshold Cryptosystems|CGJ+99]].

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{Corr}}(i)$}
\begin{algorithmic}
\If{$|C| < t$}
\State $C \gets C \cup \{i\}$
\Return $\sk_i$ and the state of party $i$ in every open session
\EndIf
\Return $\bot$
\end{algorithmic}
\end{algorithm}
```

## Threshold RSA

In Shoup's scheme, a trusted dealer chooses $N = pq$ with $p = 2p'+1$ and $q = 2q'+1$ for primes $p', q'$, and a prime public exponent $e > n$, and shares the signing exponent $d$ with a random polynomial of degree $t$ over $\ZZ_{p'q'}$, party $i$ receiving $s_i$. With $\Delta = n!$ and $x = H(m)$, party $i$'s signature share is $x_i = x^{2\Delta s_i}$, with a [[fiat-shamir-heuristic|Fiat–Shamir]] proof that it is consistent with the party's verification key. Any $t+1$ valid shares combine, with Lagrange coefficients multiplied by $\Delta$ so that they are integers, into $w$ with $w^e = x^{e'}$ for $e' = 4\Delta^2$. Since $e$ is a prime greater than $n$, $\gcd(e, e') = 1$, and $y = w^a x^b$ for $ae' + be = 1$ satisfies $y^e = H(m) \bmod N$: $y$ is the RSA full-domain-hash signature on $m$ — [[Sho00 - Practical Threshold Signatures|Sho00]]. Share generation and verification are non-interactive, and a share is at most a constant times the length of $N$ — [[Sho00 - Practical Threshold Signatures|Sho00]]. The scheme is unforgeable and robust in the [[random-oracle-model|random-oracle model]] if [[rsa-assumption|RSA]] is hard ([[rsa-to-threshold-rsa-sho00|RSA ⇒ Threshold RSA signatures]]) — [[Sho00 - Practical Threshold Signatures|Sho00]].

## Threshold BLS

In Boldyreva's threshold version of [[digital-signature#bls-signatures|BLS signatures]], over a gap Diffie–Hellman group $\GG$ of prime order $p$, in which [[computational-diffie-hellman|CDH]] is hard and [[decisional-diffie-hellman|DDH]] is easy, party $i$ holds $x_i = f(i)$ for a polynomial $f$ of degree $t$ with $f(0) = x$, the signing key, and $\pk_i = g^{x_i}$. Its signature share on $m$ is $\sigma_i = H(m)^{x_i}$, which anyone checks by deciding whether $(g, \pk_i, H(m), \sigma_i)$ is a Diffie–Hellman tuple, and any set $T$ of $t+1$ valid shares combines into $\sigma = \prod_{i \in T} \sigma_i^{\lambda_i}$, with $\lambda_i$ the Lagrange coefficients of $T$ at $0$, which is the BLS signature $H(m)^x$ — [[Bol03 - Threshold Signatures, Multisignatures and Blind Signatures Based on the Gap-Diffie-Hellman-Group Signature Scheme|Bol03]]. [[Bol03 - Threshold Signatures, Multisignatures and Blind Signatures Based on the Gap-Diffie-Hellman-Group Signature Scheme|Bol03]] proves the scheme robust and unforgeable in the random-oracle model in every gap Diffie–Hellman group, such as a group with a [[pairings#type-1|symmetric pairing]] in which CDH is hard. Threshold BLS also meets stronger notions in the hierarchy of [[BCK+22 - Better than Advertised Security for Non-interactive Threshold Signatures|BCK+22]].

## FROST

FROST is a threshold version of [[digital-signature#schnorr-signatures|Schnorr signatures]] with the public key included in the hash, in a group of prime order $p$ with generator $g$. Party $i$ holds a [[secret-sharing#shamir-secret-sharing|Shamir share]] $s_i$ of $\log_g Y$ for the public key $Y$, with $Y_i = g^{s_i}$, and key generation is a trusted dealer or a [[distributed-key-generation|distributed key generation]] protocol. In a preprocessing round, which may precede the message, party $i$ publishes nonce commitments $(D_i, E_i) = (g^{d_i}, g^{e_i})$. To sign $m$ with a set $S$, given the list $B$ of the commitments of the parties in $S$, party $i$ computes the binding factors $\rho_j = H_1(j, m, B)$, $R = \prod_{j \in S} D_j E_j^{\rho_j}$ and $c = H_2(R, Y, m)$, and sends $z_i = d_i + e_i \rho_i + \lambda_i s_i c$, with $\lambda_i$ the Lagrange coefficient of $S$ at $0$. Each share is checked by $g^{z_i} = D_i E_i^{\rho_i} Y_i^{c \lambda_i}$, and the signature is $(R, z)$ with $z = \sum_{i \in S} z_i$, so that $g^z = R Y^c$ — [[KG20 - FROST Flexible Round-Optimized Schnorr Threshold Signatures|KG20]].

KG20 write $t$ for the number of signers and tolerate $t-1$ corruptions. The binding factors tie each party's nonce to $m$ and to the whole list $B$, which protects concurrent signing sessions against forgery attacks that apply to similar schemes. FROST is not robust: a party whose share fails its check is identified, and the session aborts. FROST was proposed with a security argument from the hardness of [[discrete-logarithm|DLOG]] in the random-oracle model against an adversary controlling fewer than $t$ parties — [[KG20 - FROST Flexible Round-Optimized Schnorr Threshold Signatures|KG20]].

FROST2 uses one binding factor $\rho$ for all signers, so that $R = \prod_{j \in S} D_j \cdot \left(\prod_{j \in S} E_j\right)^{\rho}$ costs one exponentiation in place of $|S|$ — [[CKM21 - How to Prove Schnorr Assuming Schnorr Security of Multi- and Threshold Signatures|CKM21]]. With trusted key generation, FROST and FROST2 are unforgeable in the random-oracle model if [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] is hard, in notions of the BCK+22 hierarchy stronger than unforgeability above; with key generation by PedPoP, the Pedersen [[distributed-key-generation|DKG]] in which each party also proves possession of its secret contribution, FROST2 is proved secure in the random-oracle model under OMDL together with a Schnorr knowledge-of-exponent assumption, which the simulation of PedPoP needs — [[BCK+22 - Better than Advertised Security for Non-interactive Threshold Signatures|BCK+22]].

## Threshold DSA and ECDSA

In [[digital-signature#ecdsa|DSA and ECDSA]] the signing equation $s = k^{-1}(H(m) + rx)$ is not linear in the shared secrets $k$ and $x$, unlike the Schnorr equation $s = r + cx$, so a threshold protocol must compute the inverse of a shared nonce and a product of shared values — standard.

- For DSS, with $t < n/2$ corrupted parties, any $2t+1$ parties produce a signature and $t$ corrupted parties cannot forge, with no trusted dealer and with unforgeability reduced to that of DSS itself; a robust version tolerates a smaller fraction of maliciously faulty parties — [[GJKR96 - Robust Threshold DSS Signatures|GJKR96]].
- Two-party ECDSA, in which both parties sign, can have one party hold a Paillier encryption of the other's key share and evaluate the signing equation under the encryption — [[Lin17 - Fast Secure Two-Party ECDSA Signing|Lin17]].
- Gennaro and Goldfeder give threshold ECDSA in this page's convention, any $t+1$ of $n$ parties signing, for every $t < n$, with dealerless key generation and security against a dishonest majority — [[GG18 - Fast Multiparty Threshold ECDSA with Fast Trustless Setup|GG18]]. Lindell and Nof give a full-threshold ECDSA protocol with practical distributed key generation — [[LN18b - Fast Secure Multiparty ECDSA with Practical Distributed Key Generation and Applications to Cryptocurrency Custody|LN18b]].

# Other results

- Threshold cryptography originates in Desmedt's society- and group-oriented cryptography — [[Des87 - Society and Group Oriented Cryptography A New Concept|Des87]] — and in Desmedt and Frankel's threshold cryptosystems — [[DF89 - Threshold Cryptosystems|DF89]]. The decryption analogue of a threshold signature is [[threshold-encryption|threshold encryption]].
- Boldyreva builds both a threshold scheme and a [[multi-signature|multi-signature]] from BLS signatures: the threshold scheme interpolates shares $H(m)^{x_i}$ of one Shamir-shared key, while the multisignature multiplies signatures $H(m)^{x_i}$ under independently generated keys and verifies under the product of the signers' public keys — [[Bol03 - Threshold Signatures, Multisignatures and Blind Signatures Based on the Gap-Diffie-Hellman-Group Signature Scheme|Bol03]].
- A multi-signature with key aggregation, such as [[multi-signature#musig|MuSig]], also outputs a signature that verifies under one key, but that key is computed by $\KeyAgg$ from public keys the signers generate independently, without interactive key generation, and every signer whose key was aggregated takes part in signing — [[MPSW19 - Simple Schnorr Multi-Signatures with Applications to Bitcoin|MPSW19]].
- In an accountable-subgroup multisignature, any subset $S$ of a group of signers can sign, and a valid signature identifies $S$ — [[MOR01 - Accountable-Subgroup Multisignatures|MOR01]], [[BDN18 - Compact Multi-Signatures for Smaller Blockchains|BDN18]]. In Shoup's and Boldyreva's threshold schemes the combined signature is the unique RSA full-domain-hash or BLS signature on $m$ under $\pk$, so it is the same whichever $t+1$ parties produced it — standard.

<!-- BEGIN GENERATED participates-in f6324fc23a91 -->

## Participates in

**Produces Threshold signature**

- [[rsa-to-threshold-rsa-sho00|RSA ⇒ Threshold RSA signatures (Shoup)]] (via [[threshold-signature#threshold-rsa|Threshold RSA]])

<!-- END GENERATED participates-in -->
