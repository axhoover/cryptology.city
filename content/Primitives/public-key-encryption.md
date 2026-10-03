---
type: primitive
status: draft
aliases:
  - PKE
  - Public key encryption
title: Public key encryption
id: pke
variants:
  pke-cca1-security: "#cca1-security"
  anonymous-public-key-encryption: "#key-hiding"
  pke-cca2-security: "#cca-security"
  pke-cpa-security: "#cpa-security"
  semantic-security: "#semantic-security"
---

# Public key encryption

A **public key encryption (PKE)** scheme allows anyone to encrypt a message to a receiver using a public key, while only the holder of the corresponding secret key can decrypt. This enables secure communication over untrusted channels without a pre-shared secret, unlike [[symmetric-key-encryption|SKE]].

## Syntax

A PKE scheme is a tuple of efficient algorithms $\PKE = (\KeyGen, \Enc, \Dec)$ with respect to secret keyspace $\calK_{\mathrm{sk}}$, public keyspace $\calK_{\mathrm{pk}}$, message space $\calM$, and ciphertext space $\calC$:

- $\KeyGen(1^\secpar) \to (\sk, \pk),$ is a randomized algorithm which samples a secret key $\sk \in \calK_{\mathrm{sk}}$ and public key $\pk \in \calK_{\mathrm{pk}}$,
- $\Enc(\pk, m) \to c,$ is a randomized algorithm which takes a public key $\pk \in \calK_{\mathrm{pk}}$ and message $m \in \calM$, outputting a ciphertext $c \in \calC$,
- $\Dec(\sk, c) \to m,$ is a deterministic algorithm which takes a secret key $\sk \in \calK_{\mathrm{sk}}$ and ciphertext $c \in \calC$, outputting a message $m \in \calM$ or $\bot$ to indicate an invalid ciphertext.

## Properties

### Correctness

A PKE scheme $\PKE = (\KeyGen, \Enc, \Dec)$ is $(1-\varepsilon)$-**correct**
if for all $\secpar \in \NN$ and $m \in \calM$,

$$
\Pr\!\left[\Dec(\sk, \Enc(\pk, m)) = m\right] \ge 1 - \varepsilon,
$$

over the choice of $(\sk, \pk) \gets \KeyGen(1^\secpar)$ and randomness of $\Enc.$ When $\varepsilon = 0$, we say $\PKE$ is perfectly correct.

### CPA Security

The CPA game therefore takes the form of a single challenge:
the adversary receives $\pk$, submits two messages, and tries to determine
which was encrypted. Note that the adversary themselves can encrypt messages
with $\pk.$

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cpa}}_{\PKE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \pk) \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $(m_0, m_1, \stA) \gets \calA(1^\secpar, \pk)$
\State $c^* \gets \Enc(\pk, m_b)$
\State $b' \gets \calA(c^*, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PKE scheme $\PKE$ is **CPA-secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{cpa}}_{\PKE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cpa}}_{\PKE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### Semantic security

A PKE scheme $\PKE$ is **semantically secure** if for all efficient $\calA$ there is an efficient $\Sim$ such that for every distribution $\mu$ on $\calM$ and every function $f$,

$$
\left|\Pr\!\left[\calA(1^\secpar, \pk, \Enc(\pk, m)) = f(m)\right] - \Pr\!\left[\Sim(1^\secpar, \pk, |m|) = f(m)\right]\right|
$$

is negligible, over $(\sk, \pk) \gets \KeyGen(1^\secpar)$, $m \gets \mu$, and the coins of $\Enc$, $\calA$ and $\Sim$ — [[GM84 - Probabilistic encryption|GM84]].

### CCA Security

In the **chosen-ciphertext attack (CCA, or IND-CCA2)** game, the adversary additionally has access to a decryption oracle $\calD$ in two phases: before submitting $(m_0, m_1)$, and after receiving the challenge $c^*$. To avoid a trivial win, $\calA$ is **admissible**: it may not query $\calD$ on $c^*$ itself.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cca}}_{\PKE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \pk) \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\calD(c) := \Dec(\sk, c)$
\State $(m_0, m_1, \stA) \gets \calA^{\calD}(1^\secpar, \pk)$
\Comment{Phase 1: $\calA$ may query $\calD$ freely}
\State $c^* \gets \Enc(\pk, m_b)$
\State $b' \gets \calA^{\calD}(c^*, \stA)$
\Comment{Phase 2: $\calA$ may not query $\calD$ on $c^*$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PKE scheme $\PKE$ is **CCA-secure** if for all admissible efficient $\calA$,

$$
\Adv^{\mathrm{cca}}_{\PKE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cca}}_{\PKE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The admissibility restriction is necessary: without it, $\calA$ trivially wins by querying $\calD(c^*)$ to learn $m_b$.

# Variations

## CCA1 Security

**CCA1** (also called the _lunchtime attack_) is an intermediate notion between CPA and CCA2. The adversary has access to the decryption oracle only in Phase 1, before seeing the challenge ciphertext; no decryption queries are permitted after $c^*$ is revealed. CCA1 is strictly weaker than CCA2 and strictly stronger than CPA, assuming CCA2-secure schemes exist — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].

## Key-hiding

TODO

# Other results

- [[pke-to-hash-function|PKE ⇒ OWF]]
- [[tdp-to-pke|TDP ⇒ PKE]]
- [[ddh-to-pke-elgamal85|DDH ⇒ PKE]]
- [[lwe-to-pke-reg05|LWE ⇒ PKE]]
- [[noise-level-to-pke-ale03|Mid-noise LPN ⇒ PKE]]
- [[noisy-k-lin-and-pc-to-pke-ghjs25|Noisy k-LIN + PC ⇒ PKE]]

<!-- BEGIN GENERATED participates-in 2ba70d57cf34 -->

## Participates in

**Builds on Public key encryption**

- [[cca-security-to-cca1-security|CCA Security ⇒ CCA1 Security]] (via [[public-key-encryption#cca-security|pke-cca2-security]])
- [[cca1-security-to-cpa-security|CCA1 Security ⇒ CPA Security]] (via [[public-key-encryption#cca1-security|pke-cca1-security]])
- [[cpa-security-to-cpa-security|IND-CPA ⇔ Semantic security]] (via [[public-key-encryption#cpa-security|pke-cpa-security]])
- [[ind-cpa-kem-to-ind-cca-security|IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)]] (via [[public-key-encryption#cpa-security|pke-cpa-security]])
- [[pke-to-com|PKE ⇒ COM]]
- [[pke-to-hash-function|PKE ⇒ OWF]]
- [[pke-to-ke|PKE ⇒ KE]]
- [[pke-to-kem|PKE ⇒ KEM]]

**Produces Public key encryption**

- [[cca-security-to-cca1-security|CCA Security ⇒ CCA1 Security]] (via [[public-key-encryption#cca1-security|pke-cca1-security]])
- [[cca1-security-to-cpa-security|CCA1 Security ⇒ CPA Security]] (via [[public-key-encryption#cpa-security|pke-cpa-security]])
- [[cpa-security-to-cpa-security|IND-CPA ⇔ Semantic security]] (via [[public-key-encryption#semantic-security|semantic-security]])
- [[dcr-to-pke-pai99|DCR ⇒ PKE]]
- [[ddh-to-pke-elgamal85|DDH ⇒ PKE]]
- [[hash-function-and-io-to-pke-sw14|OWF + iO ⇒ PKE]]
- [[higher-residuosity-to-pke|Higher residuosity ⇒ PKE]]
- [[ibe-to-pke|IBE ⇒ PKE]]
- [[ke-to-pke-dh76|NIKE ⇒ PKE]]
- [[kem-and-ske-to-pke|KEM + SKE ⇒ PKE]]
- [[lossy-trapdoor-functions-to-pke|Lossy trapdoor functions ⇒ IND-CCA PKE]] (via [[public-key-encryption#cca-security|pke-cca2-security]])
- [[lwe-to-pke-reg05|LWE ⇒ PKE]]
- [[noise-level-to-pke-ale03|Mid-noise LPN ⇒ PKE]]
- [[noisy-k-lin-and-pc-to-pke-ghjs25|Noisy k-LIN + PC ⇒ PKE]]
- [[ntru-to-pke-hps98|NTRU ⇒ PKE]]
- [[pc-and-search-noisy-k-lin-to-pke-ghjs25|PC + Search noisy $k$-LIN ⇒ PKE]]
- [[qr-to-pke-gm84|QR ⇒ PKE]]
- [[ring-lwe-to-ntru-ss11|Ring LWE ⇒ PKE (NTRUEncrypt with Gaussian keys)]]
- [[rsa-to-ind-cca-pke-oaep-fops01|RSA ⇒ IND-CCA PKE (RSA-OAEP)]] (via [[public-key-encryption#cca-security|pke-cca2-security]])
- [[rsa-to-pke-rsa78|RSA ⇒ PKE]]
- [[subexponential-lpn-to-pke-yz16|Subexponential LPN ⇒ IND-CCA PKE]] (via [[public-key-encryption#cca-security|pke-cca2-security]])
- [[tdp-to-pke|TDP ⇒ PKE]]

**Barriers**

- [[no-hash-function-to-pke-gkm-00|No relativizing reduction from OWF to PKE]]
- [[no-he-to-cca-security|No fixed-construction reduction from HE to IND-CCA2 Security]] (via [[public-key-encryption#cca-security|pke-cca2-security]])
- [[no-ot-to-pke-gkm-00|No fully-black-box reduction from OT to PKE]]
- [[no-pke-cca1-security-to-pke-cca2-security-bdpr98|No fixed-construction reduction from CCA1 security to CCA2 security]] (via [[public-key-encryption#cca1-security|pke-cca1-security]], [[public-key-encryption#cca-security|pke-cca2-security]])
- [[no-pke-cpa-security-to-pke-cca1-security-bdpr98|No fixed-construction reduction from CPA security to CCA1 security]] (via [[public-key-encryption#cca1-security|pke-cca1-security]], [[public-key-encryption#cpa-security|pke-cpa-security]])
- [[no-pke-to-ot-gkm-00|No fully-black-box reduction from PKE to OT]]
- [[no-pke-to-tdp-gkm-00|No fully-black-box reduction from PKE to TDP]]

<!-- END GENERATED participates-in -->
