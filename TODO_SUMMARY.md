# cryptology.city — TODO Summary
_Last updated: 2026-04-01_

## Critical

- [ ] [Navigation] `[[boneh-lynn-shacham-signature|BLS]]` links to a non-existent page — _source: content/Glossary/algebraic-group-model.md:30_
- [ ] [Navigation] `[[symmetric-private-information-retrieval-single-server|Single-server Symmetric PIR (SPIR)]]` links to a non-existent page — _source: content/Primitives/single-server-private-information-retrieval.md:80_
- [ ] [Navigation] `[[Mer78]]` links to a missing Reference file (Merkle 1978 key-exchange paper) — _source: content/Glossary/black-box-separations.md:69, content/References/BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle.md_

## High Priority

- [ ] [Content] `universal-composability-framework.md` is an empty stub — only contains a TODO marker — _source: content/Glossary/universal-composability-framework.md:10_
- [ ] [Content] `trapdoor-hash-function.md` is an empty stub — syntax section is empty, definition missing — _source: content/Primitives/trapdoor-hash-function.md:11_
- [ ] [Content] `symmetric-private-information-retrieval-multi-server.md` has empty `## Syntax`, `## Properties`, and `# Known results` sections — _source: content/Primitives/symmetric-private-information-retrieval-multi-server.md_
- [ ] [Content] `oblivious-ram.md` has multiple TODO placeholders throughout its definition sections — _source: content/Primitives/oblivious-ram.md:24,31,35,40_
- [ ] [Content] Reference file for CDV21 ("Learning a mixture of two subspaces over finite fields") is missing but cited — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:67_
- [ ] [Content] Reference file for DKL09 ("On cryptography with auxiliary input") is missing but cited — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:52, content/References/YZ16 - Cryptography with Auxiliary Input and Trapdoor from Constant-Noise LPN.md_

## Medium Priority

- [ ] [Content] `public-key-encryption.md` has a TODO placeholder in "Other results" section — _source: content/Primitives/public-key-encryption.md:99_
- [ ] [Content] `pseudorandom-function.md` has a TODO for Pseudorandom Injective Functions — "TODO: define these and say how they relate to PRPs" — _source: content/Primitives/pseudorandom-function.md:107_
- [ ] [Content] `multi-server-private-information-retrieval.md` has a TODO placeholder in a section — _source: content/Primitives/multi-server-private-information-retrieval.md:43_
- [ ] [Content] `doubly-efficient-pir.md` has a TODO placeholder — _source: content/Primitives/doubly-efficient-pir.md:51_
- [ ] [Content] `learning-parity-with-noise.md` has a TODO placeholder — _source: content/Assumptions/learning-parity-with-noise.md:47_
- [ ] [Content] 35 missing citations in Complexity pages (marked "TODO citation"):
  - `interactive-proof-systems.md:19` — $\classIP = \classPSPACE$
  - `merlin-arthur.md:22` — $\classMA \subseteq \classPP$
  - `sharp-p.md:20` — Toda's theorem (Toda 1991)
  - `sharp-p.md:22` — Jerrum-Valiant-Vazirani approximate counting
  - `sharp-p.md:26` — Valiant 1979 permanent result
  - `co-nondeterministic-polynomial-time.md:26` — AKS primality in P
  - `nondeterministic-polynomial-time.md:22` — Cook-Levin SAT completeness
  - `exponential-time.md:19` — PSPACE/EXP separation
  - `probabilistic-polynomial-time.md:18` — BQP ⊆ PP (Adleman et al. 1997)
  - `probabilistic-polynomial-time.md:19` — Toda's theorem
  - `probabilistic-polynomial-time.md:20` — PP closed under complement (Beigel et al. 1995)
  - `total-function-np.md:23,24,25` — PPAD/PPP/PPA citations
  - `co-arthur-merlin.md:17,19` — SZK ⊆ AM∩coAM; Karp-Lipton/GI collapse
  - `quantum-merlin-arthur.md:21,22,27` — Local Hamiltonian QMA-completeness; PP containment
  - `randomized-polynomial-time.md:24,29` — Derandomization; Miller-Rabin
  - `bounded-error-probabilistic-polynomial-time.md:23,25` — BPP ⊆ P/poly; derandomization conjecture
  - `quantum-interactive-proofs.md:20,21,26` — QIP=PSPACE; MIP*=RE
  - `p-poly.md:23,24` — BPP ⊆ P/poly; Karp-Lipton
  - `quantum-statistical-zero-knowledge.md:16,21` — QSD completeness; coQSZK=QSZK
- [ ] [Navigation] `[[GKM+00.pdf]]` in Reference file points to a PDF not tracked in the repository — _source: content/References/GKM+00 - The relationship between public key encryption and oblivious transfer.md:17_
- [ ] [Math] `macros.ts` defines `\classFP` (newly added this run) but the `latex-macros.md` documentation page should verify the render is correct — _source: content/Glossary/latex-macros.md_ (Verifiable: No — needs build to confirm)

## Low Priority / Inferred

- [ ] [Content] 48 Reference files exist in `content/References/` but are never linked from any non-Reference content page. These may be pre-loaded references awaiting use. — _source: content/References/_ (AHY25, AIK06, AKS83, AMYY25, BBB+18, CCGH25, CG97, CGN98, CGZ24, CHS25, CK20, CNC+23, Cha82, Cle86, DPPY25, DT24, Dac14, Din24, Din25, FGJ+25, FIPR05, GG00, GG21, GG24, GJL+25, GM24, GR13, GZS24, GZSP25, Gol00, HKKS19, HS25, HV16, ISW24, JKX18, KL21, KM19, LLM22, LNO13, MMP+10, PPY22, Rabin81, SW25, SZZ18, Wil25, Wul07, Wul09, Yeo23, vAH04)
- [ ] [Content] `switching-lemma.md` is very short (13 lines) — could benefit from more context, references, and a formal game definition — _source: content/Folklore/switching-lemma.md_
- [ ] [Content] `polynomial-time.md`, `polynomial-time-hierarchy.md`, `polynomial-space.md` are short (14–17 lines) — may benefit from more content — _source: content/Complexity/_
- [ ] [Content] Several primitive pages in `Primitives/` (e.g., `attribute-based-encryption.md`, `broadcast-encryption.md`) should be checked for completeness of security definitions
- [ ] [Math] `macros.ts` defines `\classIP` and `\classAM` — previously missing from `latex-macros.md`, now added this run. Verify renders correctly after build.

## Cannot Verify (needs human review)

- [ ] [External] All external URLs (arxiv.org, eprint.iacr.org, dl.acm.org, ieeexplore.ieee.org, link.springer.com) were not verified by HEAD requests in this run due to network access limitations. A full link-checker pass is recommended. — _source: ~170 URLs across content/References/_
- [ ] [Navigation] `[[Rab81]]` in `content/Primitives/oblivious-transfer.md:104` — the file is `Rabin81 - How to Exchange Secrets with Oblivious Transfer.md` with alias `Rab81`; should resolve correctly in Quartz but should be confirmed in a build.
- [ ] [Navigation] `[[IT-SPIR]]` in `content/Primitives/single-server-private-information-retrieval.md:86` — resolves via alias in `symmetric-private-information-retrieval-multi-server.md`; confirm this cross-directory alias resolution works in Quartz.
- [ ] [Navigation] `[[OT]]` and `[[Oblivious transfer]]` — resolve via aliases in `oblivious-transfer.md`; confirm case-insensitive alias matching is active in Quartz.
- [ ] [Math] Newly added macros (`\Prove`, `\Com`, `\Open`, `\Share`, `\Recon`, `\classFP`) should be verified by running `npm run check` and doing a test build.
- [ ] [Content] `content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:52` contains a draft/review comment ("**Wait** actually is this just taken from [[DKL09...]]?") that should be resolved or removed before publication.

---

## Changes Made This Run

| File | Change | Confidence |
|------|--------|-----------|
| `content/Primitives/oblivious-transfer.md:125` | Fixed broken wikilink: `[[multi-party-computation\|secure computation]]` → `[[secure-multi-party-computation\|secure computation]]` | High |
| `content/Primitives/hash-function.md:33` | Fixed broken wikilink: `[[random oracle]]` → `[[random-oracle-model\|random oracle]]` | High |
| `content/Primitives/digital-signature.md:140` | Fixed broken wikilink: short `[[FS86 - How to Prove Yourself\|FS86]]` → full title | High |
| `content/Primitives/succinct-argument.md:91` | Fixed broken wikilink: short `[[FS86 - How to Prove Yourself\|FS86]]` → full title | High |
| `macros.ts` | Added 5 undefined macros: `\Prove` (`\mathsf{Prove}`), `\Com` (`\mathsf{Com}`), `\Open` (`\mathsf{Open}`), `\Share` (`\mathsf{Share}`), `\Recon` (`\mathsf{Recon}`) — all used in content but previously undefined | High |
| `macros.ts` | Added `\classFP` (`\mathbf{FP}`) — used in `sharp-p.md` and `probabilistic-polynomial-time.md` but previously undefined | High |
| `content/Glossary/latex-macros.md` | Added 22 previously undocumented macros to the macro reference tables: `\GrGen`, `\Sign`, `\Vrfy`, `\Prove`, `\Com`, `\Open`, `\Share`, `\Recon`, `\Tag`, `\Answer`, `\Decode`; `\pp`, `\crs`, `\td`; `\polylog`, `\Perms`; `\ufcma`; `\DS`, `\MAC`, `\PIR`, `\hash`; `\classIP`, `\classAM`, `\classFP` | High |
