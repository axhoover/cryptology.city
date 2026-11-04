---
type: primitive
status: draft
aliases:
  - Forward-secure signature
  - Forward-secure signature scheme
  - Key-evolving signature
title: Forward-secure signature
id: forward-secure-signature
---

# Forward-secure signature

A forward-secure signature scheme is a [[digital-signature|signature scheme]] whose verification key is fixed for $T$ time periods while the signing key is updated at the end of each period, such that no efficient adversary that learns the signing key of period $i$ can forge a signature for any period $j < i$ — [[BM99 - A Forward-Secure Digital Signature Scheme|BM99]].

## Syntax

A key-evolving signature scheme with $T$ periods is a tuple of efficient algorithms $\mathsf{FSS} = (\KeyGen, \mathsf{Update}, \Sign, \Vrfy)$ with message space $\calM$ — [[BM99 - A Forward-Secure Digital Signature Scheme|BM99]]:

- $\KeyGen(1^\secpar, T) \to (\vk, \sk_1)$, a randomized algorithm outputting a verification key $\vk$ and the signing key $\sk_1$ of period $1$,
- $\mathsf{Update}(\sk_i) \to \sk_{i+1}$, a (possibly randomized) algorithm which, for $i < T$, takes the signing key of period $i$ and outputs the signing key of period $i + 1$, after which the signer erases $\sk_i$,
- $\Sign(\sk_i, i, m) \to \sigma$, a (possibly randomized) algorithm which takes the signing key of period $i$ and a message $m \in \calM$, outputting a signature $\sigma$ for period $i$,
- $\Vrfy(\vk, i, m, \sigma) \to b$, a deterministic algorithm outputting a bit $b \in \bits$ indicating whether $\sigma$ is a valid signature on $m$ for period $i$.

The verification key is the same in every period. Throughout, $T = T(\secpar)$ is polynomially bounded, and $\sk_i$ denotes the key obtained from $\sk_1$ by $i - 1$ applications of $\mathsf{Update}$.

## Properties

### Correctness

A key-evolving signature scheme $\mathsf{FSS}$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, $i \in [T]$ and $m \in \calM$,

$$
\Pr\!\left[\Vrfy(\vk, i, m, \Sign(\sk_i, i, m)) = 1\right] \ge 1 - \varepsilon,
$$

over $(\vk, \sk_1) \gets \KeyGen(1^\secpar, T)$ and the randomness of $\mathsf{Update}$ and $\Sign$. When $\varepsilon = 0$, $\mathsf{FSS}$ is **perfectly correct**.

### Forward security

The adversary runs through the periods in order, with a signing oracle for the current period, and chooses when to move to the next period. At a period $i \le T$ of its choice it breaks in and receives $\sk_i$, or it ends period $T$ without breaking in, in which case $i = T + 1$ and it receives $\sk_{T+1} := \bot$; it wins by forging a signature for some period $j^* < i$ on a message it did not submit to the signing oracle during period $j^*$ — [[BM99 - A Forward-Secure Digital Signature Scheme|BM99]]. The forgery must be for an earlier period because $\sk_i$ signs for period $i$ and, through $\mathsf{Update}$, for every later period. The pair $(j^*, m^*)$ must not lie in $\calQ$ because otherwise $\calA$ wins with probability at least $1-\varepsilon$ by querying $\calS(m^*)$ during period $j^*$ and outputting the reply.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{fs}}_{\mathsf{FSS},\calA}(\secpar, T)$}
\begin{algorithmic}
\State $(\vk, \sk_1) \gets \KeyGen(1^\secpar, T)$; $i \gets 1$; $\calQ \gets \{\}$
\State $\stA \gets \calA^{\calS, \calU}(1^\secpar, \vk)$
\Comment{$\calA$ halts to break in during period $i$}
\State $(j^*, m^*, \sigma^*) \gets \calA(\sk_i, \stA)$
\Return $[\Vrfy(\vk, j^*, m^*, \sigma^*) = 1 \wedge 1 \le j^* < i \wedge (j^*, m^*) \notin \calQ]$
\Comment{$j^*$ precedes the break-in; $m^*$ not signed in period $j^*$}
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calS(m)$}
\begin{algorithmic}
\If{$i > T$}
\Return $\bot$
\EndIf
\State $\calQ \gets \calQ \cup \{(i, m)\}$
\Return $\Sign(\sk_i, i, m)$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calU()$}
\begin{algorithmic}
\If{$i < T$}
\State $\sk_{i+1} \gets \mathsf{Update}(\sk_i)$; erase $\sk_i$; $i \gets i + 1$
\Else
\State erase $\sk_T$; $\sk_{T+1} \gets \bot$; $i \gets T + 1$
\Comment{no break-in: $\calA$ receives $\bot$}
\EndIf
\end{algorithmic}
\end{algorithm}
```

A key-evolving signature scheme $\mathsf{FSS}$ is **forward-secure** if for all polynomially bounded $T = T(\secpar)$ and all efficient $\calA$,

$$
\Adv^{\mathrm{fs}}_{\mathsf{FSS},\calA}(\secpar, T) := \Pr\!\left[\Game^{\mathrm{fs}}_{\mathsf{FSS},\calA}(\secpar, T) = 1\right]
$$

is negligible. For $T \ge 2$ the period-$1$ algorithms of a forward-secure scheme form an [[digital-signature#existential-unforgeability|EUF-CMA-secure]] signature scheme ([[ds-to-forward-secure-signature|DS ⇔ Forward-secure signature]]) — folklore.

# Variations

## Unbounded number of periods

In the syntax above $T$ is fixed at key generation. [[MMM02 - Efficient Generic Forward-Secure Signatures with an Unbounded Number Of Time Periods|MMM02]] construct, from any signature scheme, forward-secure schemes in which the number of periods need not be fixed in advance.

## Forward-secure encryption

The analogous notion for encryption, in which the secret key of period $i$ reveals nothing about plaintexts encrypted for earlier periods, is [[forward-secure-public-key-encryption|forward-secure public-key encryption]] — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]].

# Other results

- EUF-CMA-secure signature schemes exist if and only if forward-secure ones do, for every polynomially bounded $T \ge 2$; the construction from a signature scheme uses $T$ independent key pairs ([[ds-to-forward-secure-signature|DS ⇔ Forward-secure signature]]) — folklore.
- If [[factoring#factoring-blum-integers|factoring Blum integers]] is hard, the Fiat–Shamir-type scheme of [[BM99 - A Forward-Secure Digital Signature Scheme|BM99]], whose update squares each component of the secret key modulo a Blum integer, is forward-secure in the random-oracle model ([[factoring-blum-integers-to-forward-secure-signature-bm99|Factoring ⇒ Forward-secure signature (Bellare–Miner)]]) — [[BM99 - A Forward-Secure Digital Signature Scheme|BM99]].
- [[IR01 - Forward-Secure Signatures with Optimal Signing and Verifying|IR01]] give a forward-secure scheme based on Guillou–Quisquater signatures [[GQ88a - A Paradoxical Identity-Based Signature Scheme Resulting from Zero-Knowledge|GQ88a]], in the random-oracle model, whose signing and verification are as efficient as those of the underlying Guillou–Quisquater scheme.
- The Fiat–Shamir characterization of [[id-and-rom-to-ds|ID ⇒ DS]] carries over to forward security, for key-evolving [[identification-scheme|identification schemes]] and forward security against impersonation under passive attack — [[AABN02 - From Identification to Signatures via the Fiat-Shamir Transform Minimizing Assumptions for Security and Forward-Security|AABN02]].
- XMSS is a stateful [[digital-signature#hash-based-signatures|hash-based signature scheme]] ([[hash-function-to-hash-based-signatures|Hash function + PRF ⇒ DS (XMSS)]]); its key is updated after every signature, and it is forward-secure in the variant of the game above in which $\calS$ answers one query per period — [[BDH11 - XMSS A Practical Forward Secure Signature Scheme Based on Minimal Security Assumptions|BDH11]].

<!-- BEGIN GENERATED participates-in a7b15772d919 -->

## Participates in

**Produces Forward-secure signature**

- [[ds-to-forward-secure-signature|DS ⇔ Forward-secure signature]]
- [[factoring-blum-integers-to-forward-secure-signature-bm99|Factoring ⇒ Forward-secure signature (Bellare–Miner)]]

<!-- END GENERATED participates-in -->
