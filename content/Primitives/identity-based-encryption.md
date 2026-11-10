---
type: primitive
status: draft
aliases:
  - IBE
  - Identity-based encryption
title: Identity-based encryption
id: ibe
variants:
  ind-id-cpa: "#ind-id-cpa-security"
  ind-sid-cpa: "#ind-sid-cpa-security-selective"
  subexp-ind-sid-cpa: "#sub-exponential-ind-sid-cpa-security"
  anonymous-ibe: "#anonymous-ibe"
---

# Identity-based encryption

An **identity-based encryption (IBE)** scheme is a form of [[public-key-encryption|public-key encryption]] in which any identity string $\mathit{id}$ serves as a public key: anyone encrypts to $\mathit{id}$ under public parameters $\pp$, and the holder of the master secret key $\msk$ extracts a decryption key $\sk_{\mathit{id}}$. No efficient adversary that obtains keys for identities of its choice can distinguish encryptions of two messages under an identity of its choice whose key it has not obtained.

## Syntax

An IBE scheme is a tuple of efficient algorithms $\IBE = (\Setup, \Extract, \Enc, \Dec)$ with respect to identity space $\calI$, message space $\calM$, and ciphertext space $\calC$:

- $\Setup(1^\secpar) \to (\pp, \msk),$ is a randomized algorithm that outputs public parameters $\pp$ and a master secret key $\msk$,
- $\Extract(\msk, \mathit{id}) \to \sk_{\mathit{id}},$ is a (possibly randomized) algorithm that takes the master secret key $\msk$ and an identity $\mathit{id} \in \calI$, outputting a per-identity secret key $\sk_{\mathit{id}}$,
- $\Enc(\pp, \mathit{id}, m) \to c,$ is a randomized algorithm that takes $\pp$, an identity $\mathit{id} \in \calI$, and a message $m \in \calM$, outputting a ciphertext $c \in \calC$,
- $\Dec(\sk_{\mathit{id}}, c) \to m,$ is a deterministic algorithm that takes a secret key $\sk_{\mathit{id}}$ and ciphertext $c \in \calC$, outputting a message $m \in \calM$ or $\bot$ to indicate failure.

The identity space contains $\bits^{\secpar}$. With polynomially many identities the notion is trivial: one [[public-key-encryption|PKE]] key pair per identity, published together, is an IBE scheme — standard.

## Properties

### Correctness

An IBE scheme $\IBE$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, $\mathit{id} \in \calI$, and $m \in \calM$,

$$
\Pr\!\left[\Dec(\Extract(\msk, \mathit{id}),\, \Enc(\pp, \mathit{id}, m)) = m\right] \ge 1 - \varepsilon,
$$

over $(\pp, \msk) \gets \Setup(1^\secpar)$ and the randomness of $\Extract$ and $\Enc$. When $\varepsilon = 0$, we say $\IBE$ is **perfectly correct**.

### IND-ID-CPA Security

In the **adaptive** IND-ID-CPA game, the adversary may query the key extraction oracle $\calO_{\mathrm{ext}}$ for any identity of its choice throughout both phases. An **admissible** adversary outputs $m_0, m_1 \in \calM$ with $|m_0| = |m_1|$, since otherwise ciphertext length may reveal $b$, and never extracts a key for the challenge identity $\mathit{id}^*$; the selective game below has the same admissibility conditions.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{id\text{-}cpa}}_{\IBE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar)$; $b \getsr \bits$
\State $\calO_{\mathrm{ext}}(\mathit{id}) := \Extract(\msk, \mathit{id})$
\State $(\mathit{id}^*, m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{ext}}}(1^\secpar, \pp)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}(\mathit{id}^*)$; $m_0, m_1 \in \calM$, $|m_0| = |m_1|$}
\State $c^* \gets \Enc(\pp, \mathit{id}^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{ext}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}(\mathit{id}^*)$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An IBE scheme $\IBE$ is **IND-ID-CPA-secure** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{id\text{-}cpa}}_{\IBE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{id\text{-}cpa}}_{\IBE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The identity constraint is necessary: without it, $\calA$ trivially wins by extracting $\sk_{\mathit{id}^*}$ and decrypting.

### IND-sID-CPA Security (Selective)

In the **selective** variant, the adversary must commit to the challenge identity $\mathit{id}^*$ before the public parameters are generated. If an IND-sID-CPA-secure IBE exists, then some IND-sID-CPA-secure IBE is not IND-ID-CPA-secure — folklore.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sid\text{-}cpa}}_{\IBE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\mathit{id}^*, \stA) \gets \calA(1^\secpar)$
\Comment{$\calA$ commits to challenge identity before seeing $\pp$}
\State $(\pp, \msk) \gets \Setup(1^\secpar)$; $b \getsr \bits$
\State $\calO_{\mathrm{ext}}(\mathit{id}) := \Extract(\msk, \mathit{id})$
\State $(m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{ext}}}(\pp, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}(\mathit{id}^*)$; $m_0, m_1 \in \calM$, $|m_0| = |m_1|$}
\State $c^* \gets \Enc(\pp, \mathit{id}^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{ext}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}(\mathit{id}^*)$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An IBE scheme $\IBE$ is **IND-sID-CPA-secure** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{sid\text{-}cpa}}_{\IBE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sid\text{-}cpa}}_{\IBE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. Any IND-ID-CPA-secure scheme is also IND-sID-CPA-secure ([[ind-id-cpa-security-to-ind-sid-cpa-security-selective|IND-ID-CPA Security ⇒ IND-sID-CPA Security (Selective)]]) — folklore. Conversely, guessing $\mathit{id}^*$ (complexity leveraging) turns an adaptive adversary into a selective one at a loss factor of $|\calI| \ge 2^{\secpar}$ in advantage — [[BB04 - Efficient Selective-ID Secure Identity Based Encryption Without Random Oracles|BB04b]]; a merely negligible selective advantage therefore does not suffice, and the argument gives IND-ID-CPA security from [[#Sub-exponential IND-sID-CPA Security|sub-exponential]] IND-sID-CPA security after rescaling $\secpar$ ([[ind-sid-cpa-security-selective-to-ind-id-cpa-security|Sub-exponential IND-sID-CPA Security ⇒ IND-ID-CPA Security]]) — folklore. A different, generic construction turns any IND-sID-CPA-secure IBE into an IND-ID-CPA-secure one — [[DG17b - From Selective IBE to Full IBE and Selective HIBE|DG17b]].

#### Sub-exponential IND-sID-CPA Security

An IBE scheme $\IBE$ is **sub-exponentially IND-sID-CPA-secure** if there is a constant $\epsilon > 0$ such that for all sufficiently large $\secpar$, every admissible $\calA$ of size at most $2^{\secpar^{\epsilon}}$ has $\Adv^{\mathrm{sid\text{-}cpa}}_{\IBE,\calA}(\secpar) \le 2^{-\secpar^{\epsilon}}$.

# Variations

## IND-ID-CCA Security

Analogously to [[public-key-encryption|PKE]], the CCA variant additionally provides the adversary with a decryption oracle $\calD(\mathit{id}, c) := \Dec(\Extract(\msk, \mathit{id}), c)$ for every identity in both phases. The admissibility condition extends to: the adversary may not query $\calO_{\mathrm{ext}}(\mathit{id}^*)$, and may not query $\calD(\mathit{id}^*, c^*)$ after the challenge is issued — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]].

## Anonymous IBE

A ciphertext hides the identity it was encrypted to: given two identities of its choice and a message, no efficient adversary can tell to which identity the challenge ciphertext was encrypted, even with secret keys for all other identities. [[ABC+05 - Searchable Encryption Revisited Consistency Properties, Relation to Anonymous IBE, and Extensions|ABC+05]] define this notion, IBE-ANO-CPA, and relate it to [[public-key-encryption-with-keyword-search|PEKS]] ([[anonymous-ibe-to-consistent-peks-abc05|Anonymous IBE ⇒ PEKS (ABC+05)]]).

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ano\text{-}id\text{-}cpa}}_{\IBE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar)$; $b \getsr \bits$
\State $\calO_{\mathrm{ext}}(\mathit{id}) := \Extract(\msk, \mathit{id})$
\State $(\mathit{id}_0, \mathit{id}_1, m, \stA) \gets \calA^{\calO_{\mathrm{ext}}}(1^\secpar, \pp)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}$ on $\mathit{id}_0$ or $\mathit{id}_1$; $m \in \calM$}
\State $c^* \gets \Enc(\pp, \mathit{id}_b, m)$
\State $b' \gets \calA^{\calO_{\mathrm{ext}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}$ on $\mathit{id}_0$ or $\mathit{id}_1$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An IBE scheme $\IBE$ is **ANO-ID-CPA-secure** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{ano\text{-}id\text{-}cpa}}_{\IBE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ano\text{-}id\text{-}cpa}}_{\IBE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The restriction is necessary: with $\sk_{\mathit{id}_0}$, $\calA$ wins against every scheme in which decrypting a ciphertext for $\mathit{id}_1$ under $\sk_{\mathit{id}_0}$ does not return $m$. As an object, anonymous IBE denotes a scheme that is both IND-ID-CPA-secure and ANO-ID-CPA-secure.

# Other results

- [[ibe-to-pke|IBE ⇒ PKE]]
- [[hibe-to-ibe|HIBE ⇒ IBE]]
- [[fuzzy-ibe-to-ibe|Fuzzy IBE ⇒ IBE]]
- [[abe-to-ibe|ABE ⇒ IBE]]
- The Boneh–Franklin scheme FullIdent, built from the Weil pairing, is [[#IND-ID-CCA Security|IND-ID-CCA]]-secure in the random oracle model under computational [[bilinear-map-assumptions|BDH]] — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]]
- Dual system encryption gives an adaptively secure ([[#IND-ID-CPA Security|IND-ID-CPA]]) IBE in the standard model whose public parameters, keys and ciphertexts each consist of a constant number of group elements, under [[bilinear-map-assumptions#decisional-bdh|DBDH]] and [[decisional-diffie-hellman#dlin|DLIN]] — [[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]]

<!-- BEGIN GENERATED participates-in 257535b63f4d -->

## Participates in

**Builds on Identity-based encryption**

- [[anonymous-ibe-to-consistent-peks-abc05|Anonymous IBE ⇒ PEKS (ABC+05)]] (via [[identity-based-encryption#anonymous-ibe|Anonymous IBE]])
- [[anonymous-ibe-to-ind-id-cpa|Anonymous IBE ⇒ IND-ID-CPA IBE]] (via [[identity-based-encryption#anonymous-ibe|Anonymous IBE]])
- [[ibe-to-garbled-ram-ghl-14|IBE ⇒ garbled RAM]]
- [[ibe-to-pke|IBE ⇒ PKE]]
- [[ind-id-cpa-security-to-ind-sid-cpa-security-selective|IND-ID-CPA Security ⇒ IND-sID-CPA Security (Selective)]] (via [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA Security]])
- [[ind-id-cpa-to-ibe|IND-ID-CPA IBE ⇒ IBE]] (via [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA Security]])
- [[ind-sid-cpa-security-selective-to-hibe-gkr25|IND-sID-CPA Security (Selective) ⇒ HIBE]] (via [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA Security (Selective)]])
- [[ind-sid-cpa-security-selective-to-ind-id-cpa-security|Sub-exponential IND-sID-CPA Security ⇒ IND-ID-CPA Security]] (via [[identity-based-encryption#sub-exponential-ind-sid-cpa-security|Sub-exponential IND-sID-CPA Security]])
- [[ind-sid-cpa-to-pke-cca2-security-chk04|Selective-ID IBE ⇒ CCA-secure PKE (CHK)]] (via [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA Security (Selective)]])

**Produces Identity-based encryption**

- [[abe-to-ibe|ABE ⇒ IBE]]
- [[anonymous-ibe-to-ind-id-cpa|Anonymous IBE ⇒ IND-ID-CPA IBE]] (via [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA Security]])
- [[bdh-to-ibe-bf01|BDH ⇒ IBE (random oracle model)]]
- [[bdh-to-ibe-wat09|DBDH + DLIN ⇒ IBE]]
- [[cdh-to-ind-id-cpa-dg17a|CDH ⇒ IBE (Döttling–Garg)]] (via [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA Security]])
- [[consistent-peks-to-ind-id-cpa-bdop04|Perfectly consistent PEKS ⇒ IBE (BDOP04)]] (via [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA Security]])
- [[dbdh-to-ibe-wat05|DBDH ⇒ IBE (Waters, standard model)]] (via [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA Security]])
- [[dbdh-to-ind-sid-cpa-bb04|DBDH ⇒ Selectively secure IBE (Boneh–Boyen)]] (via [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA Security (Selective)]])
- [[fuzzy-ibe-to-ibe|Fuzzy IBE ⇒ IBE]]
- [[hibe-selective-security-to-ind-sid-cpa|Selectively secure HIBE ⇒ Selectively secure IBE]] (via [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA Security (Selective)]])
- [[hibe-to-ibe|HIBE ⇒ IBE]]
- [[ind-id-cpa-security-to-ind-sid-cpa-security-selective|IND-ID-CPA Security ⇒ IND-sID-CPA Security (Selective)]] (via [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA Security (Selective)]])
- [[ind-id-cpa-to-ibe|IND-ID-CPA IBE ⇒ IBE]]
- [[ind-sid-cpa-security-selective-to-ind-id-cpa-security|Sub-exponential IND-sID-CPA Security ⇒ IND-ID-CPA Security]] (via [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA Security]])
- [[lwe-to-ibe-gpv08|LWE ⇒ IBE (Gentry–Peikert–Vaikuntanathan, random oracle model)]] (via [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA Security]])
- [[qr-to-ind-id-cpa-coc01|QR ⇒ IBE (Cocks, random oracle model)]] (via [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA Security]])

**Barriers**

- [[no-ddh-to-ibe-prv12|No fully-black-box reduction from DDH to IBE]] — circumvented by [[cdh-to-ind-id-cpa-dg17a|CDH ⇒ IBE (Döttling–Garg)]]
- [[no-pke-cca2-security-to-ibe-bprvw08|No fully-black-box reduction from CCA-secure PKE to IBE]]
- [[no-tdp-to-ibe-bprvw08|No fully-black-box reduction from TDP to IBE]]

<!-- END GENERATED participates-in -->
