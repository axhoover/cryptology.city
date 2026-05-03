# cryptology.city — TODO Summary
_Last updated: 2026-04-29_

---

## Critical

- [ ] [Navigation] Dead wikilink `[[boneh-lynn-shacham-signature|BLS]]` — no page exists for BLS signatures; the link appears in the AGM Key Results section and renders as a broken link on the live site — _source: content/Glossary/algebraic-group-model.md:30_
- [ ] [Navigation] Dead wikilink `[[Mer78]]` — no reference page exists for Merkle's 1978 paper "Secure Communications Over Insecure Channels" (CACM 1978); referenced when crediting Merkle Puzzles as query-complexity optimal — _source: content/Glossary/black-box-separations.md:69, content/References/BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle.md:19_
- [ ] [Content] Stub page — `trapdoor-hash-function.md` contains only "Introduced by DGI+19. TODO" with empty Definition, Variations, and Other Results sections — _source: content/Primitives/trapdoor-hash-function.md:11_
- [ ] [Content] Stub page — `oblivious-ram.md` has four bare TODO placeholders with no content in the security definition, ORAM types, and offline ORAM sections — _source: content/Primitives/oblivious-ram.md:24,31,35,40_
- [ ] [Content] Stub page — `universal-composability-framework.md` has a single `TODO — describe the UC framework…` as its entire body — _source: content/Glossary/universal-composability-framework.md:10_

---

## High Priority

- [ ] [Navigation] Dead wikilink `[[DKL09 - On cryptography with auxiliary input|DKL09]]` — no reference page exists; the link resolves to nothing in production — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:52_
- [ ] [Navigation] Dead wikilink `[[CDV21 - Learning a mixture of two subspaces over finite fields|CDV21]]` — no reference page exists for CDV21; used as a citation in CIMR25's LSN facts section — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:67_
- [ ] [Content] `public-key-encryption.md` — Variations section has a bare `TODO` with no content — _source: content/Primitives/public-key-encryption.md:99_
- [ ] [Content] `pseudorandom-function.md` — Variations section says "TODO: define these and say how they relate to PRPs" — _source: content/Primitives/pseudorandom-function.md:107_
- [ ] [Content] `multi-server-private-information-retrieval.md` — Other Results section has a bare `TODO`; Doubly-efficient subsection is empty — _source: content/Primitives/multi-server-private-information-retrieval.md:43_
- [ ] [Content] `learning-parity-with-noise.md` — Known Results section ends with a bare `TODO` (Known Attacks / further results absent) — _source: content/Assumptions/learning-parity-with-noise.md:47_
- [ ] [Content] `doubly-efficient-pir.md` — Variations section has a bare `TODO` under Multi-server DEPIR — _source: content/Primitives/doubly-efficient-pir.md:51_

---

## Medium Priority

- [ ] [Math] 30+ `TODO citation` entries across Complexity class pages — content is present but references are missing:
  - `content/Complexity/interactive-proof-systems.md:19` — $\classIP = \classPSPACE$
  - `content/Complexity/sharp-p.md:20,22,26` — Toda's theorem, approximate counting, Valiant's permanent
  - `content/Complexity/probabilistic-polynomial-time.md:18,19,20` — BQP⊆PP, Toda, BRS95 closure
  - `content/Complexity/quantum-interactive-proofs.md:20,21,26` — QIP=PSPACE, QIP(2), MIP\*=RE
  - `content/Complexity/quantum-merlin-arthur.md:21,22,27` — Local Hamiltonian, local density matrices, QMA⊆PP
  - `content/Complexity/quantum-statistical-zero-knowledge.md:16,21` — QSD completeness, QSZK closure
  - `content/Complexity/co-arthur-merlin.md:17,19` — SZK⊆AM∩coAM, GI→PH collapse
  - `content/Complexity/bounded-error-probabilistic-polynomial-time.md:23,25` — BPP⊆P/poly, derandomization
  - `content/Complexity/p-poly.md:23,24` — BPP⊆P/poly, Karp-Lipton
  - `content/Complexity/total-function-np.md:23,24,25` — PPAD, PPP, PPA results
  - `content/Complexity/merlin-arthur.md:22` — MA⊆PP
  - `content/Complexity/nondeterministic-polynomial-time.md:22` — Cook-Levin / SAT completeness
  - `content/Complexity/randomized-polynomial-time.md:24,29` — RP derandomization, Miller-Rabin
  - `content/Complexity/exponential-time.md:19` — PSPACE=EXP implication
  - `content/Complexity/co-nondeterministic-polynomial-time.md:26` — AKS primality
- [ ] [Math] `\calJ` is defined in `macros.ts` but is never used in any content file; either use it or remove the definition — _source: macros.ts_
- [ ] [Math] 9 other caligraphic letter macros defined but apparently unused: `\calG`, `\calH`, `\calL`, `\calN`, `\calP`, `\calV`, `\calW`, `\calX`, `\calY` — audit usage before removing any of these — _source: macros.ts_
- [ ] [Math] `\mathbb{F}` used directly in CIMR25 reference (3 occurrences) instead of `\FF`; violates site convention — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:25,54,67_
- [ ] [Math] `\mathbf{F}^n` at line 54 of CIMR25 is likely a typo for `\mathbb{F}^n` (= `\FF^n`); adjacent lines use `\mathbb{F}` — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:54_
- [ ] [Math] Multiple `\mathsf{...}` usages for primitive-specific names that lack macros — violates "do not use `\mathsf{...}` directly" convention; each needs a macro added to `macros.ts` and `content/Glossary/latex-macros.md`:
  - `\mathsf{BE}` — `content/Primitives/broadcast-encryption.md` (needs `\BE`)
  - `\mathsf{HVE}` — `content/Primitives/hidden-vector-encryption.md` (needs `\HVE`)
  - `\mathsf{IPPE}` — `content/Primitives/inner-product-predicate-encryption.md` (needs `\IPPE`)
  - `\mathsf{FIBE}` — `content/Primitives/fuzzy-identity-based-encryption.md` (needs `\FIBE`)
  - `\mathsf{TDP}` — `content/Primitives/trapdoor-permutation.md` (needs `\TDP`)
  - `\mathsf{COM}` — `content/Primitives/commitment-scheme.md` (needs `\COM`)
  - `\mathsf{KE}`, `\mathsf{Combine}` — `content/Primitives/key-exchange.md` (needs `\KE`)
  - `\mathsf{Encap}`, `\mathsf{Decap}` — `content/Primitives/key-encapsulation-mechanism.md`
  - `\mathsf{Qry}`, `\mathsf{Rsp}`, `\mathsf{Fin}` — `content/Primitives/doubly-efficient-pir.md`
  - `\mathsf{Compute}` — `content/Primitives/multi-server-private-information-retrieval.md`
  - `\mathsf{KSp}`, `\mathsf{StSp}`, `\mathsf{RdOps}`, `\mathsf{WrOps}`, `\mathsf{Ops}`, `\mathsf{Acc}`, `\mathsf{Out}` — `content/Primitives/oblivious-ram.md`
- [ ] [Content] `symmetric-private-information-retrieval-multi-server.md` — Syntax section has no content and Properties/Known Results sections are empty — _source: content/Primitives/symmetric-private-information-retrieval-multi-server.md_
- [ ] [Content] `one-way-permutation.md` — missing required `## Syntax` section; skips directly to Properties — _source: content/Primitives/one-way-permutation.md_
- [ ] [Content] CIMR25 reference contains uncommitted editorial/draft notes: "I guess secret-key PIR that is not doubly efficient could be interesting...?" (l.32) and "**Wait** actually is this just taken from DKL09?" (l.52) — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:32,52_
- [ ] [Content] CIMR25 reference contains typos: "teh" (l.67), "fo" (l.56), "dimentional" (l.56), "som eof" (l.45), "prepreprocessing" (l.34), and an empty bullet point (l.46) — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md_
- [ ] [External] 6 reference files are missing a source URL: `BBHR18`, `Grover96`, `KZG10`, `LPR10`, `LS15`, `Sch91` — _source: content/References/ (various)_
- [ ] [Content] `content/Complexity/polynomial-time.md` stub — has a definition but the `Known relationships` heading has no content — _source: content/Complexity/polynomial-time.md_
- [ ] [Math] `\mathbf{PH}` used directly in complexity files (no `\classPH` macro exists) — consider adding `\classPH` → `\mathbf{PH}` to macros.ts and latex-macros.md — _source: content/Complexity/probabilistic-polynomial-time.md:19, co-arthur-merlin.md:19, p-poly.md:24, merlin-arthur.md:23_

---

## Low Priority / Inferred

- [ ] [Content] `index.md` contains a user-facing disclaimer "there are a lot of stubs and TODOs" — should be removed once major stubs are filled — _source: content/index.md:7_
- [ ] [Navigation] Twitter link `https://twitter.com/cryptologycity` — Twitter rebranded to X.com; consider updating to the canonical URL — _source: content/index.md:18_
- [ ] [External] `content/References/Rabin81 - How to Exchange Secrets with Oblivious Transfer.md` source URL uses `.pdf` extension — canonical ePrint URL (without `.pdf`) is preferred style — _source: content/References/Rabin81 - How to Exchange Secrets with Oblivious Transfer.md:3_
- [ ] [Math] Remaining `\{0,1\}` usages (should be `\bits`) in Complexity/Glossary/Assumptions files — minor style inconsistency:
  - `content/Complexity/p-poly.md:10,13`
  - `content/Complexity/total-function-np.md:24`
  - `content/Complexity/quantum-classical-merlin-arthur.md:13,14`
  - `content/Glossary/arithmetization.md:53`
  - `content/Glossary/generic-group-model.md:14`
  - `content/Assumptions/decisional-diffie-hellman.md:49`
  - `content/Assumptions/alternating-moduli.md`
  - `content/Complexity/sharp-p.md:11`

---

## Cannot Verify (needs human review)

- [ ] [External] All external URLs (ePrint, arXiv, ACM DL, Springer, IEEE, etc.) — network access was unavailable during this audit; spot-check live links, especially recent 2025–2026 preprints — _source: content/References/ (various)_
- [ ] [External] NIST post-quantum standards URL contains a literal `(` in the path (`security-(evaluation-criteria)`); verify this renders as a working hyperlink — _source: content/Complexity/bounded-error-quantum-polynomial-time.md:35_
- [ ] [External] `https://eprint.iacr.org/2026/113` (BH26), `https://eprint.iacr.org/2026/384` (CHW26), and `https://arxiv.org/abs/2602.09385` (BHV26) — 2026 papers; verify identifiers are correct and live — _source: content/References/BH26 - ..., CHW26 - ..., BHV26 - ..._
- [ ] [Content] `[[CDV21 - Learning a mixture of two subspaces over finite fields|CDV21]]` — referenced alongside "Wait actually is this just taken from DKL09?" suggesting possible misattribution; requires author review — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:52,67_
- [ ] [Navigation] Wikilinks `[[Primitives]]`, `[[Assumptions]]`, `[[References]]`, `[[Folklore]]`, `[[Complexity]]`, `[[Glossary]]` — Quartz generates folder index pages automatically; resolve at build time but not verifiable without running the build — _source: content/index.md_

---

## Changes Made This Run

_Run date: 2026-04-29_

| File | Change | Confidence |
|------|--------|------------|
| `macros.ts` | Added `\QR` → `\mathrm{QR}` (set of quadratic residues) and `\J` → `\mathrm{J}` (Jacobi set); both were used in `quadratic-residuosity.md` but undefined, causing KaTeX render failures | High |
| `content/Glossary/latex-macros.md` | Added "Named sets" section documenting the new `\QR` and `\J` macros per site convention (new macros must also be documented here) | High |
| `content/References/NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions.md` | Replaced `\mathbb{G}` → `\GG` and `\mathbb{Z}` → `\ZZ` in the abstract to use site-standard macros | High |

---

## Changes Made — Previous Run (2026-04-22)

| File | Change | Confidence |
|------|--------|------------|
| `content/Primitives/single-server-private-information-retrieval.md` | Fixed game name mismatch in advantage definition: `\Game^{\mathrm{pir}}` → `\Game^{\mathrm{priv}}` | High |
| `content/Primitives/identity-based-encryption.md` | `\secpar \in \mathbb{N}` → `\secpar \in \NN` | High |
| `content/Primitives/hierarchical-identity-based-encryption.md` | `\secpar \in \mathbb{N}` → `\secpar \in \NN` | High |
| `content/Primitives/broadcast-encryption.md` | `\secpar \in \mathbb{N}` → `\secpar \in \NN` | High |
| `content/Primitives/attribute-based-encryption.md` | `\secpar \in \mathbb{N}` → `\secpar \in \NN` | High |
| `content/Primitives/hidden-vector-encryption.md` | `\secpar \in \mathbb{N}` → `\secpar \in \NN` | High |
| `content/Primitives/public-key-encryption.md` | `\secpar \in \mathbb{N}` → `\secpar \in \NN` | High |
| `content/Primitives/inner-product-predicate-encryption.md` | `\secpar \in \mathbb{N}` → `\secpar \in \NN` | High |
| `content/Primitives/one-way-permutation.md` | `\mathbb{N}` → `\NN` | High |
| `content/Primitives/symmetric-key-encryption.md` | `\secpar \in \mathbb{N}` → `\secpar \in \NN` | High |
| `content/Primitives/fuzzy-identity-based-encryption.md` | `\mathbb{N}` → `\NN` (×2) | High |
| `content/Complexity/sharp-p.md` | `\mathbb{N}` → `\NN` in function codomain | High |
| `content/Primitives/doubly-efficient-pir.md` | Comprehensive macro fixes: `\mathcal{K}` → `\calK`, `\mathcal{A}` → `\calA`, `\mathsf{Setup}` → `\Setup`, `\text{Adv}` → `\Adv`, `1^{\lambda}` → `1^\secpar`, `\lambda \in \mathbb{N}` → `\secpar \in \NN`, `\{0,1\}` → `\bits` (×10), and prose typo fix | High |
| `content/Primitives/pseudorandom-error-correcting-code.md` | Comprehensive macro fixes: `\mathsf{Gen}` → `\Gen`, `\mathsf{Enc}` → `\Enc`, `\mathsf{Dec}` → `\Dec`, `\mathcal{K}` → `\calK`, `\mathcal{E}` → `\calE`, `\lambda` → `\secpar`, `\text{Adv}` → `\Adv`, `\{0,1\}` → `\bits` (×6) | High |
| `content/Primitives/pseudorandom-generator.md` | `$b \getsr \{0,1\}$` → `$b \getsr \bits$` | High |
| `content/Primitives/pseudorandom-function.md` | `$b \getsr \{0,1\}$` → `$b \getsr \bits$` (×2); `\{0,1\}^n` → `\bits^n` (×2) | High |
| `content/Primitives/distributed-point-function.md` | `$b \in \{0,1\}$` → `$b \in \bits$` | High |
| `content/Glossary/random-oracle-model.md` | `\mathsf{IP}` → `\classIP`, `\mathsf{PSPACE}` → `\classPSPACE` (×2) | High |
