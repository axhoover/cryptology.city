# cryptology.city — TODO Summary
_Last updated: 2026-04-15_

---

## Critical

- [ ] [Content] `[[Mer78]]` wikilink references a Merkle 1978 paper ("Secure Communications Over Insecure Channels", CACM 1978) for which no reference file exists — appears in two files; need to create `Mer78 - Secure Communications Over Insecure Channels.md` or add `Mer78` as an alias to a related file — _source: content/Glossary/black-box-separations.md:69, content/References/BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle.md:19_
- [ ] [Content] `[[boneh-lynn-shacham-signature|BLS]]` wikilink references a non-existent primitive page — either create `content/Primitives/boneh-lynn-shacham-signature.md` or update the link to an anchor in `digital-signature.md` — _source: content/Glossary/algebraic-group-model.md:30_
- [ ] [Content] `content/Primitives/trapdoor-hash-function.md` is a severe stub (18 lines): only a two-sentence intro and bare `TODO` — missing Syntax, Properties, Variations, and Other results sections entirely — _source: content/Primitives/trapdoor-hash-function.md:11_
- [ ] [Content] `content/Primitives/oblivious-ram.md` is a near-complete stub (47 lines): Syntax, Correctness, Security, and Variations sections are all `TODO` — _source: content/Primitives/oblivious-ram.md:24,31,35,40_
- [ ] [Content] `content/Glossary/universal-composability-framework.md` is a 6-line stub: entire body is `TODO — describe the UC framework…` — _source: content/Glossary/universal-composability-framework.md:10_

---

## High Priority

- [ ] [Content] Missing reference pages for citations used in `content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md`: `[[CDV21 - Learning a mixture of two subspaces over finite fields|CDV21]]` (line 67) and `[[DKL09 - On cryptography with auxiliary input|DKL09]]` (line 52) — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md_
- [ ] [Content] `content/Primitives/public-key-encryption.md` has an empty `## Key-hiding` section under Variations — either complete with a definition and game or remove the header — _source: content/Primitives/public-key-encryption.md:99_
- [ ] [Content] `content/Primitives/pseudorandom-function.md` has incomplete `## Pseudorandom Injective Functions` section: `TODO: define these and say how they relate to PRPs` — _source: content/Primitives/pseudorandom-function.md:107_
- [ ] [Content] `content/Primitives/multi-server-private-information-retrieval.md` ends abruptly at line 48 with an orphaned `-`; the `## Doubly-efficient Multi-server PIR` subsection is a bare `TODO` — _source: content/Primitives/multi-server-private-information-retrieval.md:43,48_
- [ ] [Content] `content/Assumptions/learning-parity-with-noise.md` has an empty `## Attacks` section — _source: content/Assumptions/learning-parity-with-noise.md:47_
- [ ] [Content] `content/Primitives/doubly-efficient-pir.md` has a bare `TODO` under `## Multi-server DEPIR` in Variations — _source: content/Primitives/doubly-efficient-pir.md:51_

---

## Medium Priority

- [ ] [Math] 20 `TODO citation` markers across Complexity class pages — content is present but references are missing:
  - `content/Complexity/quantum-statistical-zero-knowledge.md:16,21`
  - `content/Complexity/total-function-np.md:23,24,25`
  - `content/Complexity/randomized-polynomial-time.md:24,29`
  - `content/Complexity/p-poly.md:23,24`
  - `content/Complexity/interactive-proof-systems.md:19`
  - `content/Complexity/exponential-time.md:19`
  - `content/Complexity/quantum-interactive-proofs.md:20,21,26`
  - `content/Complexity/merlin-arthur.md:22`
  - `content/Complexity/sharp-p.md:20,22,26`
  - `content/Complexity/bounded-error-probabilistic-polynomial-time.md:23,25`
  - `content/Complexity/probabilistic-polynomial-time.md:18,19`
  - `content/Complexity/co-arthur-merlin.md:17,19`
  - `content/Complexity/nondeterministic-polynomial-time.md:22`
  - `content/Complexity/quantum-merlin-arthur.md:21,27`
  - `content/Complexity/co-nondeterministic-polynomial-time.md:26`
- [ ] [Content] `content/Complexity/polynomial-time.md` is a stub (15 lines) — has a definition and Complexity Zoo link but `Known relationships` header has no content — _source: content/Complexity/polynomial-time.md_
- [ ] [External] 6 reference files in `content/References/` are missing an external URL for the source paper: `BBHR18`, `Grover96`, `KZG10`, `LPR10`, `LS15`, `Sch91` — _source: content/References/ (various)_
- [ ] [Math] 10 caligraphic letter macros in `macros.ts` are defined but never used in any content file: `\calG`, `\calH`, `\calJ`, `\calL`, `\calN`, `\calP`, `\calV`, `\calW`, `\calX`, `\calY` — _source: macros.ts_
- [ ] [Content] `content/Primitives/multi-server-private-information-retrieval.md` uses `\mathsf{Compute}` for a function that does not appear in macros.ts; the Syntax section is informal and inconsistent with single-server PIR's `(\Setup, \Query, \Answer, \Decode)` tuple — _source: content/Primitives/multi-server-private-information-retrieval.md:15_
- [ ] [Content] `content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md` mixes informal research notes (first-person commentary, speculative questions) into a reference page — consider separating notes from bibliographic content — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md_
- [ ] [Content] `content/Primitives/single-server-private-information-retrieval.md:73` — advantage definition uses `$\Game^{\mathrm{pir}}$` but the game caption above (line 57) uses `$\Game^{\mathrm{priv}}$` — naming mismatch — _source: content/Primitives/single-server-private-information-retrieval.md:57,73_

---

## Low Priority / Inferred

- [ ] [Content] Most Complexity class pages (14+ of 24) are stubs with only a definition and a citation gap — systematically filling these would significantly improve the wiki
- [ ] [Math] `content/Glossary/random-oracle-model.md:17` uses `\mathsf{IP}^A` and `\mathsf{PSPACE}^A` directly instead of `\classIP` / `\classPSPACE` macros — _source: content/Glossary/random-oracle-model.md:17_
- [ ] [External] `content/References/Rabin81 - How to Exchange Secrets with Oblivious Transfer.md` source URL has `.pdf` extension (`https://eprint.iacr.org/2005/187.pdf`) — canonical eprint URL without `.pdf` is preferred style — _source: content/References/Rabin81 - How to Exchange Secrets with Oblivious Transfer.md:3_
- [ ] [Content] `content/Glossary/fiat-shamir-heuristic.md:14` uses `\Pi_\mathsf{FS}` as a subscript for the Fiat-Shamir transform — no macro; acceptable one-off but worth noting — _source: content/Glossary/fiat-shamir-heuristic.md:14_
- [ ] [Math] `content/Glossary/generic-group-model.md:16,17` uses `\calO_{\mathsf{op}}` and `\calO_{\mathsf{inv}}` with `\mathsf` subscripts for oracle labels — style is reasonable but not covered by macros — _source: content/Glossary/generic-group-model.md:16,17_

---

## Cannot Verify (needs human review)

- [ ] [Navigation] Wikilinks `[[Primitives]]`, `[[Assumptions]]`, `[[References]]`, `[[Folklore]]`, `[[Complexity]]`, `[[Glossary]]` in `content/index.md:24–29` — Quartz v4 generates folder index pages automatically; these likely resolve at build time but cannot be confirmed without running the build — _source: content/index.md:24–29_
- [ ] [External] 77 eprint.iacr.org URLs and 14 arxiv.org URLs across `content/References/` — not fetched (network not available); all follow correct format patterns; spot-check recommended — _source: content/References/ (various)_
- [ ] [External] dl.acm.org (29 URLs), link.springer.com (25 URLs), ieeexplore.ieee.org (12 URLs) reference links — format appears correct; liveness not verified — _source: content/References/ (various)_
- [ ] [Content] `[[CDV21 - Learning a mixture of two subspaces over finite fields|CDV21]]` — referenced in CIMR25 research notes alongside a parenthetical questioning the attribution ("Wait actually is this just taken from DKL09?") — may be a misattribution; requires author review — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:52,67_

---

## Changes Made This Run

| File | Change | Confidence |
|------|--------|------------|
| `content/Assumptions/learning-parity-with-noise.md` | Replaced `\mathcal{A}` → `\calA` (×2), `\text{Adv}` → `\Adv` (×2), `\lambda` → `\secpar` (×4), `\mathbb{N}` → `\NN`, `\mathbb{F}_2` → `\FF_2` (×3) | High |
| `content/Folklore/switching-lemma.md` | Replaced `\mathcal{D}` → `\calD` (×4) | High |
| `content/Primitives/indistinguishability-obfuscation.md` | Replaced `i\mathcal{O}` → `i\calO` (×4) | High |
| `content/Primitives/multi-server-private-information-retrieval.md` | Replaced `\mathsf{Query}` → `\Query`, `\mathsf{Answer}` → `\Answer`, `\mathsf{Recon}` → `\Recon` (all have macros) | High |
| `content/Primitives/succinct-argument.md` | Replaced `\mathcal{R}` → `\calR` (×4), `\mathsf{crs}` → `\crs` (×6) | High |
| `content/Primitives/fingerprinting-code.md` | Replaced `\mathcal{K}` → `\calK`, `\mathcal{C}` → `\calC` (×2); fixed malformed `\mathsf{G}_\mathsf{en}` → `\Gen`; replaced `\mathsf{Gen}` → `\Gen`; replaced `\mathcal{O}(\log n)` → `O(\log n)` for big-O | High |
| `content/Assumptions/discrete-logarithm.md` | Replaced `\mathcal{A}` → `\calA` in GGM bound statement | High |
| `content/Primitives/homomorphic-encryption.md` | Replaced `\mathcal{F}` → `\calF` (×2) | High |
| `content/Primitives/single-server-private-information-retrieval.md` | Fixed broken wikilink `[[symmetric-private-information-retrieval-single-server\|…]]` → self-page anchor `[[single-server-private-information-retrieval#Symmetric private information retrieval (Single-server)\|…]]` | High |
| `content/References/GKM+00 - The relationship between public key encryption and oblivious transfer.md` | Removed broken `PDF: [[GKM+00.pdf]]` line (no PDF asset exists; paper already linked via ieeexplore source URL) | High |
