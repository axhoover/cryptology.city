---
type: primitive
status: draft
aliases:
  - Multi-signature
  - Multisignature
  - Multi-signatures
title: Multi-signature
id: multi-signature
variants:
  musig: "#musig"
  two-round-musig: "#two-round-musig"
  musig2: "#musig2"
  multi-signature-kosk: "#knowledge-of-secret-key-model"
  multi-signature-pop: "#proof-of-possession-model"
---

# Multi-signature

A multi-signature scheme lets $n$ signers, each holding its own key pair, jointly produce one short signature on a message that verifies against their set of public keys, or, with key aggregation, against a single aggregate public key.

## Syntax

A multi-signature scheme with key aggregation is a tuple $(\Setup, \KeyGen, \KeyAgg, \Sign, \Vrfy)$:

- $\Setup(1^\secpar) \to \pp$, public parameters (a group and hash functions),
- $\KeyGen(\pp) \to (\sk, \pk)$, run independently by each signer,
- $\KeyAgg(L) \to \tilde X$, a deterministic algorithm mapping a multiset $L = \{\pk_1, \ldots, \pk_n\}$ of public keys to an aggregate key,
- $\Sign$, an interactive protocol among the $n$ signers, signer $i$ on input $(\sk_i, L, m)$, at the end of which each outputs a signature $\sigma$,
- $\Vrfy(\tilde X, m, \sigma) \to b$, a deterministic algorithm outputting a bit $b \in \bits$.

## Properties

### Correctness

The scheme is **perfectly correct** if whenever every signer runs $\Sign$ honestly on $(\sk_i, L, m)$, the output $\sigma$ satisfies $\Vrfy(\KeyAgg(L), m, \sigma) = 1$.

### Unforgeability in the plain public-key model

There is one honest signer. The adversary chooses every other public key, with no proof that it knows the matching secret key, plays all other signers in signing sessions with the honest signer that it may interleave arbitrarily, and wins by outputting a valid signature, for a multiset of keys containing the honest key, on a message on which it never opened a signing session with the honest signer — [[MPSW19 - Simple Schnorr Multi-Signatures with Applications to Bitcoin|MPSW19]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{ms-uf}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Setup(1^\secpar)$ ; $(\sk^*, \pk^*) \gets \KeyGen(\pp)$ ; $\calQ \gets \{\}$
\State $(L^*, m^*, \sigma^*) \gets \calA^{\calO_{\Sign}}(1^\secpar, \pp, \pk^*)$
\If{$\pk^* \notin L^*$ or $m^* \in \calQ$}
\Return $0$
\EndIf
\Return $[\Vrfy(\KeyAgg(L^*), m^*, \sigma^*)]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\Sign}(j, L, m, M)$}
\begin{algorithmic}
\If{session $j$ is new and $\pk^* \in L$}
\State $\calQ \gets \calQ \cup \{m\}$
\State start the honest signer on $(\sk^*, L, m)$ as session $j$
\EndIf
\State feed $M$ to session $j$; let $M'$ be its next message
\Return $M'$
\end{algorithmic}
\end{algorithm}
```

The scheme is **unforgeable** if for all efficient $\calA$,

$$
\Adv^{\text{ms-uf}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\text{ms-uf}}_{\Pi,\calA}(\secpar) = 1\right]
$$

is negligible.

### Knowledge-of-secret-key model

Unforgeability as in the plain public-key model, except that the adversary may use a public key other than $\pk^*$, in a signing session or in its output, only after registering it with the coins of $\KeyGen$ that produce it, so that the challenger knows the matching secret key. The requirement that every adversarial key be registered together with its secret key is the knowledge-of-secret-key (KOSK) assumption of [[RY07 - The Power of Proofs-of-Possession Securing Multiparty Signatures against Rogue-Key Attacks|RY07]], under which [[Bol03 - Threshold Signatures, Multisignatures and Blind Signatures Based on the Gap-Diffie-Hellman-Group Signature Scheme|Bol03]] proves its multisignature secure.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{ms-kosk}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Setup(1^\secpar)$ ; $(\sk^*, \pk^*) \gets \KeyGen(\pp)$ ; $\calQ \gets \{\}$ ; $\calR \gets \{\pk^*\}$
\State $(L^*, m^*, \sigma^*) \gets \calA^{\calO_{\Sign}, \calO_{\mathrm{Reg}}}(1^\secpar, \pp, \pk^*)$
\Comment{$\calO_{\Sign}$ as in the plain game, on key multisets $L \subseteq \calR$ only}
\If{$\pk^* \notin L^*$ or $L^* \not\subseteq \calR$ or $m^* \in \calQ$}
\Return $0$
\EndIf
\Return $[\Vrfy(\KeyAgg(L^*), m^*, \sigma^*)]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{Reg}}(\rho)$}
\begin{algorithmic}
\State $(\sk, \pk) \gets \KeyGen(\pp; \rho)$
\State $\calR \gets \calR \cup \{\pk\}$
\Return $\pk$
\end{algorithmic}
\end{algorithm}
```

The scheme is **unforgeable in the KOSK model** if for all efficient $\calA$, $\Adv^{\text{ms-kosk}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\text{ms-kosk}}_{\Pi,\calA}(\secpar) = 1\right]$ is negligible.

### Proof-of-possession model

The scheme has two further algorithms, $\PopProve(\pp, \sk, \pk) \to \pi$ and a deterministic $\PopVrfy(\pp, \pk, \pi) \to b$, with $\PopVrfy(\pp, \pk, \PopProve(\pp, \sk, \pk)) = 1$ for every key pair $\KeyGen$ outputs. Unforgeability is as in the KOSK game, except that the adversary also receives $\pi^* \gets \PopProve(\pp, \sk^*, \pk^*)$ and registers a key by presenting a proof of possession (POP) for it, which the challenger checks with $\PopVrfy$. This is the registered-key model of [[RY07 - The Power of Proofs-of-Possession Securing Multiparty Signatures against Rogue-Key Attacks|RY07]] instantiated with a POP.

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{Reg}}(\pk, \pi)$}
\begin{algorithmic}
\If{$\PopVrfy(\pp, \pk, \pi) = 1$}
\State $\calR \gets \calR \cup \{\pk\}$
\EndIf
\end{algorithmic}
\end{algorithm}
```

The scheme is **unforgeable in the POP model** if for all efficient $\calA$, the probability that it wins this game is negligible.

# Variations

The schemes below work in a group of prime order $p$ with generator $g$, with signer $i$ holding $(x_i, X_i = g^{x_i})$, and hash functions $H_{\mathrm{agg}}, H_{\mathrm{com}}, H_{\mathrm{non}}, H_{\mathrm{sig}}$ modeled as random oracles. Each aggregates keys as $a_i = H_{\mathrm{agg}}(L, X_i)$ and $\KeyAgg(L) = \tilde X = \prod_i X_i^{a_i}$, and outputs $\sigma = (R, s)$ that verifies as a [[digital-signature#schnorr-signatures|Schnorr signature]] under $\tilde X$ with the key included in the hash: $g^s = R \tilde X^{c}$ with $c = H_{\mathrm{sig}}(\tilde X, R, m)$.

## MuSig

Signing takes three rounds. Signer $i$ samples $r_i \getsr \ZZ_p$, sets $R_i = g^{r_i}$, and sends $t_i = H_{\mathrm{com}}(R_i)$; once all commitments have arrived, it sends $R_i$ and checks every $R_j$ against $t_j$; with $R = \prod_i R_i$ and $c = H_{\mathrm{sig}}(\tilde X, R, m)$ it sends $s_i = r_i + c a_i x_i \bmod p$, and $s = \sum_i s_i$ — [[MPSW19 - Simple Schnorr Multi-Signatures with Applications to Bitcoin|MPSW19]].

## Two-round MuSig

MuSig without the commitment round: signer $i$ sends $R_i$ directly and then $s_i$, as first proposed in the preprint version of [[MPSW19 - Simple Schnorr Multi-Signatures with Applications to Bitcoin|MPSW19]]; its security proof is flawed — [[DEF+19 - On the Security of Two-Round Multi-Signatures|DEF+19]].

## MuSig2

Signing takes two rounds, and the first can run before the message is known. Signer $i$ samples $r_{i,1}, \ldots, r_{i,\nu} \getsr \ZZ_p$ and sends $R_{i,j} = g^{r_{i,j}}$ for $j \in [\nu]$. With $R_j = \prod_i R_{i,j}$, $b = H_{\mathrm{non}}(\tilde X, (R_1, \ldots, R_\nu), m)$, $R = \prod_j R_j^{b^{j-1}}$ and $c = H_{\mathrm{sig}}(\tilde X, R, m)$, it sends $s_i = \sum_j r_{i,j} b^{j-1} + c a_i x_i \bmod p$, and $s = \sum_i s_i$ — [[NRS21 - MuSig2 Simple Two-Round Schnorr Multi-signatures|NRS21]]. With $\nu = 1$ this is two-round MuSig. The scheme is proved secure in the random-oracle model with $\nu = 4$, and in the combination of the [[algebraic-group-model|algebraic group model]] and the random-oracle model with $\nu = 2$ — [[NRS21 - MuSig2 Simple Two-Round Schnorr Multi-signatures|NRS21]]. As an object, MuSig2 denotes the scheme with $\nu = 4$.

<!-- BEGIN GENERATED participates-in 825da5fe4efa -->

## Participates in

**Builds on Multi-signature**

- [[multi-signature-pop-to-multi-signature-kosk|Multi-signatures with proofs of possession ⇒ Multi-signatures in the KOSK model]] (via [[multi-signature#proof-of-possession-model|Proof-of-possession model]])
- [[multi-signature-to-multi-signature-kosk|Multi-signatures in the plain public-key model ⇒ Multi-signatures in the KOSK model]]

**Produces Multi-signature**

- [[co-cdh-star-to-multi-signature-bdn18|co-CDH ⇒ BLS multi-signatures with public-key aggregation]]
- [[multi-signature-pop-to-multi-signature-kosk|Multi-signatures with proofs of possession ⇒ Multi-signatures in the KOSK model]] (via [[multi-signature#knowledge-of-secret-key-model|Knowledge-of-secret-key model]])
- [[multi-signature-to-multi-signature-kosk|Multi-signatures in the plain public-key model ⇒ Multi-signatures in the KOSK model]] (via [[multi-signature#knowledge-of-secret-key-model|Knowledge-of-secret-key model]])
- [[omdl-to-musig2-nrs21|OMDL ⇒ MuSig2]] (via [[multi-signature#musig2|MuSig2]])
- [[prime-order-dlog-to-musig-mpsw19|DLOG ⇒ MuSig]] (via [[multi-signature#musig|MuSig]])
- [[type-1-pairing-and-cdh-to-multi-signature-kosk-bol03|Type 1 pairing + CDH ⇒ Multi-signatures in the KOSK model (Boldyreva)]] (via [[multi-signature#knowledge-of-secret-key-model|Knowledge-of-secret-key model]])
- [[type-1-pairing-and-cdh-to-multi-signature-pop-ry07|Type 1 pairing + CDH ⇒ Multi-signatures with proofs of possession]] (via [[multi-signature#proof-of-possession-model|Proof-of-possession model]])

**Barriers**

- [[no-omdl-to-two-round-musig-def19|No algebraic reduction from OMDL to two-round MuSig]] (via [[multi-signature#two-round-musig|Two-round MuSig]])

<!-- END GENERATED participates-in -->
