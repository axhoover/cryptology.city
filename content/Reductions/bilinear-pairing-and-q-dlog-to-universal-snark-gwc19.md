---
type: reduction
status: draft
title: Bilinear pairing + q-DLOG ⇒ Universal SNARK (PLONK)
aliases:
  - PLONK
id: red-bilinear-pairing-and-q-dlog-to-universal-snark-gwc19
kind: implication
hypotheses: [bilinear-pairing, q-dlog]
conclusion: universal-snark
class: unstated
model: [algebraic-group, rom]
source:
  - "[[GWC19 - PLONK Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge|GWC19]]"
security-loss: ""
rationale:
  model: "GWC19 prove knowledge soundness for algebraic provers with Fiat–Shamir challenges from a random oracle, so the proof uses both idealised models."
---

# Bilinear pairing + q-DLOG ⇒ Universal SNARK (PLONK)

## Statement

In the [[algebraic-group-model|algebraic group model]], with the verifier's challenges derived from a [[random-oracle-model|random oracle]], PLONK is a knowledge-sound SNARK for PLONKish circuits under a [$q$-type discrete-logarithm assumption](discrete-logarithm#q-dlog) in an asymmetric [[pairings|bilinear group]]: gate constraints are checked over a multiplicative subgroup in the Lagrange basis, copy constraints are enforced by a permutation argument in the style of Bayer–Groth, and the resulting polynomial protocol is compiled with batched KZG commitments. Its structured reference string, powers of a secret $\tau$ up to a size bound $N$, is universal and updatable: the keys of every circuit of size at most $N$ are derived from it by a deterministic public preprocessing, so PLONK is a [[succinct-argument#universalupdatable-snarks|universal SNARK]]; proofs are a constant number of $\GG_1$ and field elements, and verification is fully succinct — [[GWC19 - PLONK Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge|GWC19]].

## Notes

- The SRS is linear in $N$, and with a fully succinct verifier the prover uses roughly 7.5 to 20 times fewer group exponentiations than Sonic in its fully succinct mode, depending on circuit structure — [[GWC19 - PLONK Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge|GWC19]].
- The original specification was not even statistically witness-indistinguishable; the scheme as patched in 2022 is statistically zero-knowledge — [[Sef24 - How (Not) to Simulate PLONK|Sef24]].
- Without random oracles, PLONK is knowledge-sound in the algebraic group model and computationally zero-knowledge in the standard model under a falsifiable zero-testing assumption — [[FS26 - Plonk Without Random Oracles|FS26]]; in the random-oracle model without the algebraic group model it is knowledge-sound from falsifiable assumptions — [[LPS25 - On Knowledge-Soundness of Plonk in ROM from Falsifiable Assumptions|LPS25]].
- PLONK compiles a polynomial IOP with a polynomial commitment scheme, an instance of [[pcs-to-snark|Extractable PCS ⇒ SNARK]] — [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]].
