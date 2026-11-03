---
type: primitive
status: draft
aliases:
  - Group signature
  - Group signatures
  - Group signature scheme
title: Group signature
id: group-signature
variants:
  cpa-anonymous-group-signature: "#cpa-full-anonymity"
---

# Group signature

A group signature scheme lets each member of a group sign on behalf of the group: a signature verifies under one group public key and hides which member produced it, while a group manager holding an opening key can identify the signer — [[CvH91 - Group Signatures|CvH91]].

## Syntax

In the static model of [[BMW03 - Foundations of Group Signatures Formal Definitions, Simplified Requirements, and a Construction Based on General Assumptions|BMW03]], a group signature scheme is a tuple of efficient algorithms $\Pi = (\KeyGen, \Sign, \Vrfy, \Open)$, which BMW03 call $(\mathsf{GKg}, \mathsf{GSig}, \mathsf{GVf}, \Open)$, with respect to message space $\calM$:

- $\KeyGen(1^\secpar, 1^n) \to (\mathsf{gpk}, \mathsf{gmsk}, \mathsf{gsk})$, a randomized algorithm that outputs, for a group of $n$ members, a group public key $\mathsf{gpk}$, the group manager's opening key $\mathsf{gmsk}$, and a vector $\mathsf{gsk}$ of signing keys, $\mathsf{gsk}[i]$ being the key of member $i \in [n]$,
- $\Sign(\mathsf{gsk}[i], m) \to \sigma$, a randomized algorithm that outputs a signature $\sigma$ on $m \in \calM$,
- $\Vrfy(\mathsf{gpk}, m, \sigma) \to b$, a deterministic algorithm outputting a bit $b \in \bits$,
- $\Open(\mathsf{gmsk}, m, \sigma) \to i$, a deterministic algorithm outputting a member $i \in [n]$ or $\bot$.

The group is fixed at key generation, which a trusted party runs, giving $\mathsf{gsk}[i]$ to member $i$ and $\mathsf{gmsk}$ to the group manager — [[BMW03 - Foundations of Group Signatures Formal Definitions, Simplified Requirements, and a Construction Based on General Assumptions|BMW03]].

## Properties

### Correctness

A group signature scheme $\Pi$ is **perfectly correct** if for all $n$, all $(\mathsf{gpk}, \mathsf{gmsk}, \mathsf{gsk})$ output by $\KeyGen(1^\secpar, 1^n)$, all $i \in [n]$ and $m \in \calM$, every $\sigma \gets \Sign(\mathsf{gsk}[i], m)$ satisfies $\Vrfy(\mathsf{gpk}, m, \sigma) = 1$ and $\Open(\mathsf{gmsk}, m, \sigma) = i$ — [[BMW03 - Foundations of Group Signatures Formal Definitions, Simplified Requirements, and a Construction Based on General Assumptions|BMW03]].

### Full anonymity

The adversary receives the group public key and every member's signing key, and has an opening oracle throughout. It names two members $i_0, i_1$ and a message $m^*$, receives a signature $\sigma^*$ on $m^*$ by member $i_b$, and must guess $b$ — [[BMW03 - Foundations of Group Signatures Formal Definitions, Simplified Requirements, and a Construction Based on General Assumptions|BMW03]]. It may not have $(m^*, \sigma^*)$ opened, since the answer is $i_b$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{anon}}_{\Pi,\calA}(\secpar, n)$}
\begin{algorithmic}
\State $(\mathsf{gpk}, \mathsf{gmsk}, \mathsf{gsk}) \gets \KeyGen(1^\secpar, 1^n)$; $b \getsr \bits$; $\sigma^* \gets \bot$
\State $(i_0, i_1, m^*, \stA) \gets \calA^{\calO}(1^\secpar, \mathsf{gpk}, \mathsf{gsk})$
\Comment{$i_0, i_1 \in [n]$}
\State $\sigma^* \gets \Sign(\mathsf{gsk}[i_b], m^*)$
\State $b' \gets \calA^{\calO}(\stA, \sigma^*)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO(m, \sigma)$}
\begin{algorithmic}
\If{$(m, \sigma) = (m^*, \sigma^*)$}
\Comment{the challenge may not be opened}
\Return $\bot$
\EndIf
\Return $\Open(\mathsf{gmsk}, m, \sigma)$
\end{algorithmic}
\end{algorithm}
```

A group signature scheme $\Pi$ is **fully anonymous** if for every polynomial $n = n(\secpar)$ and all efficient $\calA$,

$$
\Adv^{\mathrm{anon}}_{\Pi,\calA}(\secpar, n) := \left|2\Pr\!\left[\Game^{\mathrm{anon}}_{\Pi,\calA}(\secpar, n) = 1\right] - 1\right|
$$

is negligible.

### Full traceability

The adversary receives the group public key and the opening key, corrupts members of its choice adaptively, learning their signing keys, and has a signing oracle for every member. It wins with a valid signature that opens to $\bot$, or to a member $i$ that it did not corrupt and never asked to sign $m^*$ — [[BMW03 - Foundations of Group Signatures Formal Definitions, Simplified Requirements, and a Construction Based on General Assumptions|BMW03]]. A signature by a corrupted member, or one the signing oracle returned, is a trivial win, which the condition excludes.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{trace}}_{\Pi,\calA}(\secpar, n)$}
\begin{algorithmic}
\State $(\mathsf{gpk}, \mathsf{gmsk}, \mathsf{gsk}) \gets \KeyGen(1^\secpar, 1^n)$; $C \gets \{\}$; $\calQ \gets \{\}$
\State $(m^*, \sigma^*) \gets \calA^{\calO_{\mathrm{Corr}}, \calO_{\Sign}}(1^\secpar, \mathsf{gpk}, \mathsf{gmsk})$
\If{$\Vrfy(\mathsf{gpk}, m^*, \sigma^*) = 0$}
\Return $0$
\EndIf
\State $i \gets \Open(\mathsf{gmsk}, m^*, \sigma^*)$
\Return $[i = \bot \lor (i \notin C \land (i, m^*) \notin \calQ)]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{Corr}}(i)$}
\begin{algorithmic}
\State $C \gets C \cup \{i\}$
\Return $\mathsf{gsk}[i]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\Sign}(i, m)$}
\begin{algorithmic}
\State $\calQ \gets \calQ \cup \{(i, m)\}$
\Return $\Sign(\mathsf{gsk}[i], m)$
\end{algorithmic}
\end{algorithm}
```

A group signature scheme $\Pi$ is **fully traceable** if for every polynomial $n = n(\secpar)$ and all efficient $\calA$,

$$
\Adv^{\mathrm{trace}}_{\Pi,\calA}(\secpar, n) := \Pr\!\left[\Game^{\mathrm{trace}}_{\Pi,\calA}(\secpar, n) = 1\right]
$$

is negligible.

Full anonymity and full traceability together imply the informal requirements proposed for group signatures before them, among them unlinkability, exculpability and coalition resistance — [[BMW03 - Foundations of Group Signatures Formal Definitions, Simplified Requirements, and a Construction Based on General Assumptions|BMW03]]. As an object, group signatures denote perfectly correct schemes that are fully anonymous and fully traceable.

# Variations

## CPA-full anonymity

Full anonymity without the opening oracle: in $\Game^{\mathrm{anon}}_{\Pi,\calA}$ the adversary gets no access to $\calO$, and still receives every member's signing key — [[BBS04 - Short Group Signatures|BBS04]]. The opening oracle plays the role of the decryption oracle of [[public-key-encryption#cca-security|IND-CCA]] security, whence the name. As an object, CPA-anonymous group signatures denote perfectly correct schemes that are CPA-fully anonymous and fully traceable.

## Dynamic groups

In the dynamic model, members join at any time through an interactive protocol with an issuer, a role separated from that of the opener, and security consists of anonymity, traceability and non-frameability — [[BSZ05 - Foundations of Group Signatures The Case of Dynamic Groups|BSZ05]].

# Other results

- Fully anonymous and fully traceable group signatures exist if trapdoor permutations do — [[BMW03 - Foundations of Group Signatures Formal Definitions, Simplified Requirements, and a Construction Based on General Assumptions|BMW03]]; the NIZK proofs for $\classNP$ that the construction uses are known from doubly enhanced, certified trapdoor permutations ([[doubly-enhanced-certified-tdp-to-group-signature-bmw03|Doubly enhanced certified TDP ⇒ Group signatures]]) — [[GR13 - Enhancements of Trapdoor Permutations|GR13]].
- In bilinear groups, $q$-SDH and DLIN give CPA-anonymous group signatures in the random-oracle model whose signatures are about the size of an RSA signature at the same security level ([[bilinear-pairing-q-sdh-and-dlin-to-cpa-anonymous-group-signature-bbs04|Bilinear pairing + q-SDH + DLIN ⇒ CPA-anonymous group signatures]]) — [[BBS04 - Short Group Signatures|BBS04]].
- Group signatures imply public-key encryption ([[group-signature-to-pke-aw04|Group signatures ⇒ PKE]]) — [[AW04 - On the Minimal Assumptions of Group Signature Schemes|AW04]].

<!-- BEGIN GENERATED participates-in 05eae508bd8a -->

## Participates in

**Builds on Group signature**

- [[group-signature-to-cpa-anonymous-group-signature|Group signatures ⇒ CPA-anonymous group signatures]]
- [[group-signature-to-pke-aw04|Group signatures ⇒ PKE]]

**Produces Group signature**

- [[bilinear-pairing-q-sdh-and-dlin-to-cpa-anonymous-group-signature-bbs04|Bilinear pairing + q-SDH + DLIN ⇒ CPA-anonymous group signatures (Boneh–Boyen–Shacham)]] (via [[group-signature#cpa-full-anonymity|CPA-full anonymity]])
- [[doubly-enhanced-certified-tdp-to-group-signature-bmw03|Doubly enhanced certified TDP ⇒ Group signatures (BMW)]]
- [[group-signature-to-cpa-anonymous-group-signature|Group signatures ⇒ CPA-anonymous group signatures]] (via [[group-signature#cpa-full-anonymity|CPA-full anonymity]])

<!-- END GENERATED participates-in -->
