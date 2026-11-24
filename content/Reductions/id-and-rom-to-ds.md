---
type: reduction
status: draft
title: "ID ⇒ DS"
aliases: []
id: red-id-and-rom-to-ds
kind: implication
hypotheses: [non-trivial-canonical-identification-scheme]
conclusion: ds
class: fully-black-box
model: rom
source:
  - "[[AABN02 - From Identification to Signatures via the Fiat-Shamir Transform Minimizing Assumptions for Security and Forward-Security|AABN02]]"
via:
  - "[[fiat-shamir-heuristic|Fiat–Shamir]]"
security-loss: "a factor linear in the number of random-oracle queries"
rationale:
  class: "The transform uses the identification scheme's prover and verifier only as oracles, and the reduction runs the forger only as an oracle, programming the random oracle."
  model: "The reduction programs the random oracle that replaces the verifier's challenge."
  security-loss: "The impersonator guesses which of the forger's random-oracle queries fixes the challenge of the forgery."
---

# ID ⇒ DS

## Statement

Let $\Pi = (\KeyGen, P, V)$ be a canonical [[identification-scheme#non-trivial-canonical-identification-schemes|identification scheme]] with challenge space $C$, and $H : \bits^* \to C$ a [[random-oracle-model|random oracle]]. The [[fiat-shamir-heuristic#signatures-from-identification-schemes|Fiat–Shamir signature scheme]] $\Pi_{\mathrm{FS}}$ has the key generation of $\Pi$; it signs $m$ by running the prover on the challenge $e = H(a, m)$ for its commitment $a$ and outputting $\sigma = (a, z)$, and $\Vrfy(\pk, m, (a, z))$ outputs $V(\pk, a, H(a, m), z)$ — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]. If $\Pi$ is non-trivial (its commitments have super-logarithmic min-entropy) and secure against impersonation under passive attack, $\Pi_{\mathrm{FS}}$ is [[digital-signature#existential-unforgeability|EUF-CMA]]-unforgeable in the ROM; for non-trivial $\Pi$, passive-impersonation security is also necessary — [[AABN02 - From Identification to Signatures via the Fiat-Shamir Transform Minimizing Assumptions for Security and Forward-Security|AABN02]].

## Sketch

Transcripts depend on no message, so the reduction first draws one from the passive-attack oracle per signing query and answers the $i$th signing query, on $m$, with the $i$th transcript $(a, e, z)$, setting $H(a, m) := e$; this fails only if $(a, m)$ was queried before, an event non-triviality makes negligible. It then guesses which random-oracle query the forgery will use, sends that query's commitment to the honest verifier, and programs the oracle's answer to the verifier's challenge. A forgery then completes the impersonation, at a loss linear in the number of oracle queries.

## Notes

- The random oracle cannot be removed in general: some secure identification schemes yield signatures forgeable under every hash-function instantiation — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]].
- For a three-move public-coin [[zero-knowledge-proof#honest-verifier-zk-hvzk|honest-verifier zero-knowledge]] proof of knowledge for a hard relation, the scheme is EUF-CMA-unforgeable in the ROM: the forking lemma reruns the forger on the same coins, resampling the oracle answers from the forgery's query onward, to obtain two accepting transcripts sharing the commitment, from which special soundness extracts a witness — [[PS96 - Security Proofs for Signature Schemes|PS96]], [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]]. A forger with advantage $\varepsilon$ making $q$ random-oracle queries yields a witness with probability about $\varepsilon^2/q$ — [[PS96 - Security Proofs for Signature Schemes|PS96]].
- Schnorr's protocol for [[discrete-logarithm|discrete log]] instantiates the transform ([[fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91|Schnorr identification ⇒ Schnorr signatures]]): the signature on $m$ is $(c, z)$ with $a = g^r$, $c = \hash(a, m)$ and $z = r + c x$, and two accepting transcripts with the same $a$ and distinct challenges give $x = (z - z')/(c - c')$ — [[Sch91 - Efficient signature generation by smart cards|Sch91]].
- The same characterization holds for forward security — [[AABN02 - From Identification to Signatures via the Fiat-Shamir Transform Minimizing Assumptions for Security and Forward-Security|AABN02]].
