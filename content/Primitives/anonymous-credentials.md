---
type: primitive
status: draft
aliases:
  - AC
  - Anonymous credentials
  - Anonymous credential
title: Anonymous credentials
id: anonymous-credentials
---

# Anonymous credentials

A credential system in which a user obtains from an issuer a credential on a set of attributes and later proves to a verifier possession of a credential on attributes including a disclosed subset, without revealing their identity or the other attributes, and without letting distinct showings be linked to each other or to the issuance.

## Syntax

The syntax and games below follow the game-based model of [[FHS19 - Structure-Preserving Signatures on Equivalence Classes and Constant-Size Anonymous Credentials|FHS19]], in which a showing discloses a subset of the certified attribute set, simplified to one issuer and one credential per honest user. An anonymous credential system over an attribute universe $\calU$ is a tuple $\Pi = (\KeyGen, \mathsf{UKeyGen}, \mathsf{Obtain}, \mathsf{Issue}, \mathsf{Show}, \Vrfy)$, following the [[interactive-protocol|two-party protocol]] syntax:

- $\KeyGen(1^\secpar, 1^t) \to (\sk_I, \pk_I)$, a randomized algorithm sampling the issuer's key pair for attribute sets of size at most $t$; a scheme without a size bound ignores $t$,
- $\mathsf{UKeyGen}(1^\secpar) \to (\sk_U, \pk_U)$, a randomized algorithm sampling a user's key pair,
- $\mathsf{Obtain}$ (the user) and $\mathsf{Issue}$ (the issuer) are interactive algorithms with $\langle \mathsf{Obtain}(\pk_I, \sk_U, X), \mathsf{Issue}(\sk_I, \pk_U, X) \rangle \to (\mathit{cred}, \bot)$, where $X \subseteq \calU$ is an attribute set with $|X| \le t$ and $\mathit{cred}$ is a credential on $X$ or $\bot$,
- $\mathsf{Show}$ (the user) and $\Vrfy$ (the verifier) are interactive algorithms with $\langle \mathsf{Show}(\pk_I, \sk_U, \mathit{cred}, X, D), \Vrfy(\pk_I, D) \rangle \to (\bot, b)$, where $D \subseteq X$ is the disclosed set and $b \in \bits$.

Unforgeability below rules out pooling the credentials of several users; schemes achieve this by binding each credential to its holder's secret key, which $\mathsf{Show}$ uses — standard.

## Properties

### Correctness

An anonymous credential system $\Pi$ is **perfectly correct** if for all $\secpar, t \in \NN$, all $X \subseteq \calU$ with $|X| \le t$ and all $D \subseteq X$, with $(\sk_I, \pk_I) \gets \KeyGen(1^\secpar, 1^t)$, $(\sk_U, \pk_U) \gets \mathsf{UKeyGen}(1^\secpar)$ and $(\mathit{cred}, \bot) \gets \langle \mathsf{Obtain}(\pk_I, \sk_U, X), \mathsf{Issue}(\sk_I, \pk_U, X) \rangle$, we have $\mathit{cred} \ne \bot$ and $\langle \mathsf{Show}(\pk_I, \sk_U, \mathit{cred}, X, D), \Vrfy(\pk_I, D) \rangle$ outputs $b = 1$ with probability $1$.

### Unforgeability

The adversary obtains credentials on attribute sets of its choice for user keys of its choice, has honest users obtain credentials, and plays the verifier in their showings. It then plays the user in a showing of a disclosed set $D^*$, and wins if the verifier accepts although no credential issued to it certifies a superset of $D^*$. Showing $D^*$ by combining credentials on $X_1$ and $X_2$ with $D^* \subseteq X_1 \cup X_2$ but $D^* \not\subseteq X_1, X_2$ is thus a forgery. Oracle access ends before the final showing, since relaying a concurrent showing by an honest user would be a trivial win. Each oracle call runs one complete session.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{uf}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk_I, \pk_I) \gets \KeyGen(1^\secpar, 1^{t})$; $\calQ \gets \{\}$; $u \gets 0$
\State $(D^*, \stA) \gets \calA^{\calO_{\mathrm{Iss}}, \calO_{\mathrm{HU}}, \calO_{\mathrm{Show}}}(1^\secpar, \pk_I)$
\State $(\bot, b) \gets \langle \calA(\stA), \Vrfy(\pk_I, D^*) \rangle$
\Comment{no oracle access during this showing}
\Return $[b = 1 \land \forall X \in \calQ : D^* \not\subseteq X]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{Iss}}(\pk_U, X)$}
\begin{algorithmic}
\If{$|X| > t$}
\Return $\bot$
\EndIf
\State $\calQ \gets \calQ \cup \{X\}$
\State run $\mathsf{Issue}(\sk_I, \pk_U, X)$ with $\calA$ as the user
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{HU}}(X)$}
\begin{algorithmic}
\If{$|X| > t$}
\Return $\bot$
\EndIf
\State $u \gets u + 1$; $X_u \gets X$
\State $(\sk_u, \pk_u) \gets \mathsf{UKeyGen}(1^\secpar)$
\State $(\mathit{cred}_u, \bot) \gets \langle \mathsf{Obtain}(\pk_I, \sk_u, X), \mathsf{Issue}(\sk_I, \pk_u, X) \rangle$
\Return $\pk_u$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{Show}}(j, D)$}
\begin{algorithmic}
\If{$j \notin [u] \lor \mathit{cred}_j = \bot \lor D \not\subseteq X_j$}
\Return $\bot$
\EndIf
\State run $\mathsf{Show}(\pk_I, \sk_j, \mathit{cred}_j, X_j, D)$ with $\calA$ as the verifier
\end{algorithmic}
\end{algorithm}
```

An anonymous credential system $\Pi$ is **unforgeable** if for all polynomials $t = t(\secpar)$ and all efficient $\calA$,

$$
\Adv^{\mathrm{uf}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{uf}}_{\Pi,\calA}(\secpar) = 1\right]
$$

is negligible.

### Anonymity

The adversary receives the issuer's key pair and plays the issuer whenever an honest user obtains a credential; it plays the verifier in honest users' showings and may corrupt honest users, learning their keys and credentials. It names two honest users $j_0, j_1$ and a set $D$ that both credentials certify, plays the verifier in a showing of $D$ by user $j_b$, and must guess $b$. A showing thus reveals nothing beyond $D$ even to an issuer colluding with verifiers, and the adversary's showings by $j_0$ and $j_1$ before and after the challenge make unlinkability of repeated showings part of the notion. The challenge users may not be corrupted, before or after the challenge, since the adversary would otherwise hold the key and credential the challenge showing uses. Here the issuer's key pair is generated honestly; letting the adversary choose $\pk_I$ gives a stronger notion — standard.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{anon}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk_I, \pk_I) \gets \KeyGen(1^\secpar, 1^{t})$; $b \getsr \bits$; $\calC \gets \{\}$; $u \gets 0$
\State $(j_0, j_1, D, \stA) \gets \calA^{\calO_{\mathrm{Obt}}, \calO_{\mathrm{Show}}, \calO_{\mathrm{Corr}}}(1^\secpar, \sk_I, \pk_I)$
\If{$\{j_0, j_1\} \not\subseteq [u] \lor \mathit{cred}_{j_0} = \bot \lor \mathit{cred}_{j_1} = \bot \lor D \not\subseteq X_{j_0} \cap X_{j_1}$}
\State $b' \getsr \bits$
\Comment{an invalid challenge earns no advantage}
\Return $[b' = b]$
\EndIf
\State $(\bot, \stA') \gets \langle \mathsf{Show}(\pk_I, \sk_{j_b}, \mathit{cred}_{j_b}, X_{j_b}, D), \calA(\stA) \rangle$
\State $b' \gets \calA^{\calO_{\mathrm{Obt}}, \calO_{\mathrm{Show}}, \calO_{\mathrm{Corr}}}(\stA')$
\If{$j_0 \in \calC \lor j_1 \in \calC$}
\State $b' \getsr \bits$
\Comment{the challenge users may not be corrupted}
\EndIf
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{Obt}}(X)$}
\begin{algorithmic}
\If{$|X| > t$}
\Return $\bot$
\EndIf
\State $u \gets u + 1$; $X_u \gets X$
\State $(\sk_u, \pk_u) \gets \mathsf{UKeyGen}(1^\secpar)$; send $\pk_u$ to $\calA$
\State $\mathit{cred}_u \gets$ output of $\mathsf{Obtain}(\pk_I, \sk_u, X)$ run with $\calA$ as the issuer
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{Corr}}(j)$}
\begin{algorithmic}
\State $\calC \gets \calC \cup \{j\}$
\Return $(\sk_j, \mathit{cred}_j)$
\end{algorithmic}
\end{algorithm}
```

$\calO_{\mathrm{Show}}$ is as in the unforgeability game. An anonymous credential system $\Pi$ is **anonymous** if for all polynomials $t = t(\secpar)$ and all efficient $\calA$,

$$
\Adv^{\mathrm{anon}}_{\Pi,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{anon}}_{\Pi,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. As an object, anonymous credentials denote perfectly correct systems that are unforgeable and anonymous.

# Variations

## Keyed-verification anonymous credentials

The issuer is also the verifier: $\Vrfy$ takes the issuer's secret key, and credentials can be [[message-authentication-code|MACs]] rather than [[digital-signature|signatures]]. Algebraic MACs in prime-order groups give such credentials — [[CMZ14 - Algebraic MACs and Keyed-Verification Anonymous Credentials|CMZ14]].

## Delegatable anonymous credentials

A credential holder can delegate the credential to another user, who can delegate it further, and a showing proves possession of a credential $L$ levels away from the issuer, for a public $L$, without revealing the identities along the delegation chain. Randomizable [[non-interactive-zero-knowledge|non-interactive zero-knowledge proofs of knowledge]], combined with an authentication scheme for users' secret keys, give delegatable anonymous credentials — [[BCC+09 - Randomizable Proofs and Delegatable Anonymous Credentials|BCC+09]].

# Other results

- Credential systems in which a user deals with each organization under a different pseudonym, unlinkable to the others, and transfers credentials between pseudonyms were introduced by [[Cha85 - Security Without Identification Transaction Systems to Make Big Brother Obsolete|Cha85]]. [[LRSW99 - Pseudonym Systems|LRSW99]] formalize such pseudonym systems.
- The first practical system in which a user can show a credential unlinkably any number of times without involving the issuer, with optional anonymity revocation, is secure under the [[rsa-assumption#strong-rsa|strong RSA assumption]] and [[decisional-diffie-hellman|DDH]] modulo a safe-prime product — [[CL01 - An Efficient System for Non-transferable Anonymous Credentials with Optional Anonymity Revocation|CL01]].
- With a [[zero-knowledge-proof|zero-knowledge proof]] that a committed value is accumulated, a [[accumulator#dynamic-accumulators|dynamic accumulator]] revokes anonymous credentials, with proving and verifying non-revocation at a cost independent of the number of credentials issued or revoked, while each holder updates its witness after every change; the RSA accumulator is a collision-free dynamic accumulator under the [[rsa-assumption#strong-rsa|strong RSA assumption]] ([[strong-rsa-to-dynamic-accumulator-cl02|Strong RSA ⇒ dynamic accumulator]]) — [[CL02 - Dynamic Accumulators and Application to Efficient Revocation of Anonymous Credentials|CL02]].
- In [[pairings#type-1|symmetric bilinear groups]], Camenisch–Lysyanskaya signatures, secure under the interactive [[lrsw-assumption|LRSW assumption]] ([[type-1-pairing-and-lrsw-to-ds-cl04|Type 1 pairing + LRSW ⇒ DS]]), come with efficient protocols for obtaining a signature on a committed message and proving knowledge of a signature, and so give anonymous credentials — [[CL04 - Signature Schemes and Anonymous Credentials from Bilinear Maps|CL04]].
- Structure-preserving signatures on equivalence classes together with set commitments give multi-show credentials with selective disclosure of attribute subsets whose showings have size independent of the numbers of certified and disclosed attributes — [[FHS19 - Structure-Preserving Signatures on Equivalence Classes and Constant-Size Anonymous Credentials|FHS19]].
