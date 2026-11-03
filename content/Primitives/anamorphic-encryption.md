---
type: primitive
status: draft
aliases:
  - AME
  - Anamorphic encryption
  - Receiver-anamorphic encryption
title: Anamorphic encryption
id: anamorphic-encryption
variants:
  robust-anamorphic-encryption: "#robustness"
  sender-anamorphic-encryption: "#sender-anamorphic-encryption"
  fully-asymmetric-anamorphic-encryption: "#fully-asymmetric-anamorphic-encryption"
  public-key-anamorphic-encryption: "#public-key-anamorphic-encryption"
  anamorphic-resistant-encryption: "#anamorphic-resistant-encryption"
---

# Anamorphic encryption

An _anamorphic extension_ of a [[public-key-encryption|PKE]] scheme lets a sender and a receiver who share a _double key_ embed a covert message in ciphertexts of that scheme, such that an adversary holding the receiver's secret key and choosing every message — the _dictator_ — cannot distinguish these ciphertexts from regular encryptions — [[PPY22 - Anamorphic Encryption Private Communication against a Dictator|PPY22]].

## Syntax

An anamorphic extension of $\PKE = (\KeyGen, \Enc, \Dec)$, with message space $\calM$ and covert message space $\hat\calM$, is a triple of efficient algorithms $(\mathsf{aGen}, \mathsf{aEnc}, \mathsf{aDec})$:

- $\mathsf{aGen}(1^\secpar) \to (\pk, \sk, \mathsf{dk})$, a randomized algorithm outputting a key pair for $\PKE$ and a double key $\mathsf{dk}$,
- $\mathsf{aEnc}(\pk, \mathsf{dk}, m, \hat m) \to c$, a randomized, possibly stateful, algorithm taking a regular message $m \in \calM$ and a covert message $\hat m \in \hat\calM$, outputting a ciphertext $c \in \calC$,
- $\mathsf{aDec}(\mathsf{dk}, c) \to \hat m$, a deterministic algorithm outputting a covert message.

$\PKE$ together with an anamorphic extension is an _anamorphic encryption scheme_ $\mathsf{AME}$; this is the receiver-anamorphic syntax of [[PPY22 - Anamorphic Encryption Private Communication against a Dictator|PPY22]]. Results below take $\PKE$ to be [[public-key-encryption#cpa-security|IND-CPA-secure]]; anamorphic security says nothing about that, since its adversary holds $\sk$.

## Properties

### Correctness

An anamorphic encryption scheme $\mathsf{AME}$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, $m \in \calM$, and $\hat m \in \hat\calM$,

$$
\Pr\!\left[\mathsf{aDec}(\mathsf{dk}, \mathsf{aEnc}(\pk, \mathsf{dk}, m, \hat m)) = \hat m\right] \ge 1 - \varepsilon,
$$

over $(\pk, \sk, \mathsf{dk}) \gets \mathsf{aGen}(1^\secpar)$ and the randomness of $\mathsf{aEnc}$.

### Security against the dictator

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{anam}}_{\mathsf{AME},\calA}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$
\State $(\pk_0, \sk_0) \gets \KeyGen(1^\secpar)$; $(\pk_1, \sk_1, \mathsf{dk}) \gets \mathsf{aGen}(1^\secpar)$
\State $\calO_0(m, \hat m) := \Enc(\pk_0, m)$ \Comment{Ignores $\hat m$}
\State $\calO_1(m, \hat m) := \mathsf{aEnc}(\pk_1, \mathsf{dk}, m, \hat m)$
\State $b' \gets \calA^{\calO_b}(\pk_b, \sk_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

The dictator receives the public and the secret key and chooses both messages of every query. In world 0 the key pair is regular and the oracle encrypts $m$; in world 1 the key pair comes from $\mathsf{aGen}$ and the oracle embeds $\hat m$. An anamorphic encryption scheme $\mathsf{AME}$ is **anamorphically secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{anam}}_{\mathsf{AME},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{anam}}_{\mathsf{AME},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[PPY22 - Anamorphic Encryption Private Communication against a Dictator|PPY22]].

The world-0 oracle ignores $\hat m$, so the dictator's view in world 1 is computationally independent of the covert messages. A dictator that checks $\Dec(\sk, c) = m$ on each answer shows that $\Dec(\sk, \cdot)$ recovers $m$ from anamorphic ciphertexts except with probability at most the decryption error of $\PKE$ plus $\Adv^{\mathrm{anam}}_{\mathsf{AME},\calA}(\secpar)$ — standard.

### Robustness

An anamorphic encryption scheme is **robust** if for all $\secpar \in \NN$ and $m \in \calM$,

$$
\Pr\!\left[\mathsf{aDec}(\mathsf{dk}, \Enc(\pk, m)) = \bot\right] \ge 1 - \negl(\secpar),
$$

over $(\pk, \sk, \mathsf{dk}) \gets \mathsf{aGen}(1^\secpar)$ and the randomness of $\Enc$: covert decryption of a regular ciphertext reports that it carries no covert message — [[BGHMR24 - Anamorphic Encryption, Revisited|BGHMR24]]. In the model of [[PPY22 - Anamorphic Encryption Private Communication against a Dictator|PPY22]] a receiver cannot tell whether a ciphertext carries a covert message — [[BGHMR24 - Anamorphic Encryption, Revisited|BGHMR24]]. [[BGHMR24 - Anamorphic Encryption, Revisited|BGHMR24]] also generate double keys for a key pair after it is deployed, possibly several per key pair; when a double key depends only on the public key, the receiver can deny that it exists.

# Variations

## Sender-anamorphic encryption

In _sender-anamorphic encryption_ the dictator determines the regular message the sender encrypts, removing the sender's freedom to choose it; the sender still embeds a covert message the dictator cannot detect — [[PPY22 - Anamorphic Encryption Private Communication against a Dictator|PPY22]]. [[WCHY23 - Sender-Anamorphic Encryption Reformulated Achieving Robust and Generic Constructions|WCHY23]] reformulate the notion as $\ell$-sender-anamorphic encryption with (strong) security and robustness, and show that a strongly secure $\ell$-sender-anamorphic scheme implies a reformulated receiver-anamorphic scheme, a [[vAH04 - Public Key Steganography|public-key stegosystem]], and a generalized algorithm-substitution attack on PKE.

## Fully asymmetric anamorphic encryption

[[CGM24a - Anamorphic Encryption New Constructions and Homomorphic Realizations|CGM24a]] split the double key into an encryption component, which $\mathsf{aEnc}$ uses, and a decryption component, which $\mathsf{aDec}$ uses, so that the ability to send covert messages and the ability to read them are separate. The setting is studied as _fully asymmetric_ anamorphic encryption in [[CGM24b - Limits of Black-Box Anamorphic Encryption|CGM24b]] and [[CGM25 - Generic Anamorphic Encryption, Revisited New Limitations and Constructions|CGM25]].

## Public-key anamorphic encryption

In _public-key anamorphic encryption_ a sender that has not coordinated with the receiver in any way can still embed a covert message for it — [[PPY24 - Public-Key Anamorphism in (CCA-Secure) Public-Key Encryption and Beyond|PPY24]].

## Anamorphic-resistant encryption

An _anamorphic-resistant_ PKE scheme is one over which any attempt to communicate covertly is impossible or prohibitively slow, depending on the definitional details — [[DG25 - Anamorphic-Resistant Encryption Or Why the Encryption Debate is Still Alive|DG25]]; [[CCGM25 - Anamorphic Resistant Encryption the Good, the Bad and the Ugly|CCGM25]] give IND-CPA-secure schemes that provably cannot be turned anamorphic. [[DG25 - Anamorphic-Resistant Encryption Or Why the Encryption Debate is Still Alive|DG25]] thereby challenge the folklore belief that semantic security always permits some form of steganography.

## Anamorphic signatures

In an _anamorphic signature_ scheme a signer embeds a covert message in signatures for a party holding a double key, against a dictator that holds the signing key — [[KPPYZ23a - Anamorphic Signatures Secrecy from a Dictator Who Only Permits Authentication!|KPPYZ23a]]. [[JS24 - Dictators Friends Forgers. Breaking and Fixing Unforgeability Definitions for Anamorphic Signature Schemes|JS24]] break and repair the unforgeability definitions of the anamorphic signature literature.

# Other results

## Constructions

- Receiver-anamorphic extensions exist for established schemes, among them the Naor–Yung CCA-secure construction ([[pke-cpa-security-and-nizk-to-pke-cca1-security-ny90|CPA-secure PKE + NIZK ⇒ CCA1-secure PKE]]), and a black-box rejection-sampling method embeds a small covert message in ciphertexts of a PKE scheme — [[PPY22 - Anamorphic Encryption Private Communication against a Dictator|PPY22]]. The rejection-sampling method is not secure for every IND-CPA-secure scheme (§ Limits).
- Many existing encryption schemes admit anamorphic extensions — [[KPPYZ23b - The Self-Anti-Censorship Nature of Encryption On the Prevalence of Anamorphic Cryptography|KPPYZ23b]].
- [[ddh-to-pke-elgamal85|ElGamal]] and [[ddh-and-uowhf-to-pke-cca2-security-cs98|Cramer–Shoup]] encryption satisfy _selective randomness recoverability_, which gives each a robust anamorphic extension, and [[rsa-to-ind-cca-pke-oaep-fops01|RSA-OAEP]] has a robust anamorphic extension — [[BGHMR24 - Anamorphic Encryption, Revisited|BGHMR24]].
- Hybrid encryption ([[kem-and-ske-to-pke|KEM + SKE ⇒ PKE]]) and the IBE-to-CCA transform of [[ind-sid-cpa-to-pke-cca2-security-chk04|CHK04]] admit anamorphic extensions; homomorphic schemes, among them the fully homomorphic scheme of [[GSW13 - Homomorphic Encryption from Learning with Errors Conceptually-Simpler, Asymptotically-Faster, Attribute-Based|GSW13]], can be made anamorphic while keeping their [[homomorphic-encryption|homomorphism]] — [[CGM24a - Anamorphic Encryption New Constructions and Homomorphic Realizations|CGM24a]].
- The CCA-secure scheme of [[KW19b - Realizing Chosen Ciphertext Security Generically in Attribute-Based Encryption and Predicate Encryption|KW19b]] is public-key anamorphic; more generally, a CPA-to-CCA transform whose security reduction produces non-ambiguous challenge ciphertexts yields a public-key anamorphic CCA-secure scheme — [[PPY24 - Public-Key Anamorphism in (CCA-Secure) Public-Key Encryption and Beyond|PPY24]].
- From [[indistinguishability-obfuscation|iO]], every IND-CPA-secure PKE scheme with sufficiently high min-entropy ciphertexts has a fully asymmetric anamorphic extension with a small covert message space — [[CGM25 - Generic Anamorphic Encryption, Revisited New Limitations and Constructions|CGM25]]. Fully asymmetric anamorphic homomorphic encryption exists under [[learning-with-errors|LWE]] — [[DL25 - Fully Asymmetric Anamorphic Homomorphic Encryption from LWE|DL25]].
- The Dual Regev scheme of [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]] has an anamorphic broadcast mode, in which one ciphertext for a single public key carries a separate covert message to each of several anonymous groups of receivers — [[DPPY25 - Anamorphism Beyond One-to-One Messaging Public-Key with Anamorphic Broadcast Mode|DPPY25]].

## Limits

- An anamorphic extension that uses $\PKE$ only as an oracle, and works for every IND-CPA-secure $\PKE$, has a covert message space of size at most $\poly(\secpar)$; no such black-box extension is fully asymmetric, whatever the size of its covert message space. With further assumptions on $\PKE$, generic extensions reach exponential-size covert message spaces — [[CGM24b - Limits of Black-Box Anamorphic Encryption|CGM24b]].
- Some contrived IND-CPA-secure scheme makes the rejection-sampling method of [[PPY22 - Anamorphic Encryption Private Communication against a Dictator|PPY22]] insecure, and stateless black-box anamorphic extensions of every IND-CPA-secure scheme do not exist unless the target notion is weakened or $\PKE$ satisfies further assumptions — [[CGM25 - Generic Anamorphic Encryption, Revisited New Limitations and Constructions|CGM25]].
- Under conditions identified by [[CCGM25 - Anamorphic Resistant Encryption the Good, the Bad and the Ugly|CCGM25]], anamorphic encryption is equivalent to an algorithm-substitution attack, so their anamorphic-resistant schemes are IND-CPA-secure schemes provably resistant to subversion — [[CCGM25 - Anamorphic Resistant Encryption the Good, the Bad and the Ugly|CCGM25]]. Anamorphic-resistant encryption follows from PKE and extremely lossy functions, without random oracles — [[ABGMM25 - The Malice of ELFs Practical Anamorphic-Resistant Encryption without Random Oracles|ABGMM25]].
