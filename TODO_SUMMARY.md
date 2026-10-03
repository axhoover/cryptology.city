<!--
  Grammar for the orchestrator's todo-triage parser. Keep this format:
  ## <Section>   -> Critical | High Priority | Medium Priority |
                    Low Priority | Cannot Verify (needs human review)
  - [ ] [Category] description — _source: path[:line][, more]_
  Category: Navigation | Content | Math | External | FactCheck
  Only `- [ ]` items count; `- [x]` or deleted lines clear automatically.
  Changelog goes in TODO_CHANGELOG.md, not here.
-->

# cryptology.city — TODO Summary

_Last updated: 2026-10-03_

---

## Critical

- [x] [Math] **9 inverted reduction directions across the assumption-page intros** — fixed 2026-09-26 by the verified object-page pass; the ambiguous rsa-assumption.md 'Factoring reduces to RSA' bullet is in the maintainer review queue —, mutually reinforcing across 4 pages: `computational-diffie-hellman.md:12`, `decisional-diffie-hellman.md:12`, `discrete-logarithm.md:12`, `decisional-composite-residuosity.md:30,31`, `quadratic-residuosity.md`, `factoring.md`, `rsa-assumption.md`. Each calls one assumption a "natural strengthening" of another in the wrong direction (DDH hardness implies CDH hardness, not the reverse). Because they agree with each other, a reader checking one against another finds no discrepancy — _source: .reductions/suspected-errors.json_
- [ ] [Math] 80 suspected mathematical and attribution errors recorded while auditing the prose relations (38 high, 32 medium, 10 low). Recorded, never fixed — the reduction migration moved claims, it did not change them. Full list with file:line and reasoning — _source: .reductions/suspected-errors.json_
- [ ] [Content] `hash-function.md` covers BOTH one-way functions and collision-resistant hashing under one page and one alias set. The `owf` / `crhf` variant ids now separate them for the graph, but 49 hyperedges still rest on the ambiguous page-level `hash-function` endpoint and need disambiguating one by one — _source: .reductions/migration-report.json_
- [ ] [Content] 228 audited relationships were NOT migrated to pages, 210 of them because an endpoint does not resolve to any object (`PostBQP`, `NEXP`, `MIP*`, `Sigma_2^P`, and the barriers whose conclusion slot held a consequence rather than an object). Each is listed with its reason — _source: .reductions/not-migrated.json_
- [ ] [Content] 3 relation bullets arrived on `main` after the reductions audit ran and are still prose: YYS25 on `homomorphic-encryption.md` and two Kha26 bullets on `secret-sharing.md`. They need reduction or barrier pages like the rest (the Sho97 bullets became `ggm-to-{cdh,ddh,dlog}-sho97` and CCG+94 became `random-oracle-hypothesis#refutation`) — _source: git log 75f2542..043f406_
- [ ] [Content] 155 relation statements are prose sentences inside a paragraph rather than bullets, so the migration left them in place rather than mangling the surrounding text. They now duplicate a reduction page and should be rewritten as pointers by hand — _source: .reductions/migration-report.json_

- [x] [Navigation] Dead wikilink `[[boneh-lynn-shacham-signature|BLS]]` — no page exists for BLS signatures; the link appears in the AGM Key Results section and renders as a broken link on the live site — _source: content/Glossary/algebraic-group-model.md:30_
- [x] [Navigation] Dead wikilink `[[Mer78]]` — no reference page exists for Merkle's 1978 paper "Secure Communications Over Insecure Channels" (CACM 1978); referenced when crediting Merkle Puzzles as query-complexity optimal — _source: content/Glossary/black-box-separations.md:69, content/References/BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle.md:19_
- [ ] [Content] Stub page — `trapdoor-hash-function.md` contains only "Introduced by DGI+19. TODO" with empty Definition, Variations, and Other Results sections — _source: content/Primitives/trapdoor-hash-function.md:11_
- [ ] [Content] Stub page — `oblivious-ram.md` has four bare TODO placeholders with no content in the security definition, ORAM types, and offline ORAM sections — _source: content/Primitives/oblivious-ram.md:24,31,35,40_
- [ ] [Content] Stub page — `universal-composability-framework.md` has a single `TODO — describe the UC framework…` as its entire body — _source: content/Glossary/universal-composability-framework.md:10_

---

## High Priority

- [x] [FactCheck] **Maintainer review queue, round 1 (reductions sourcing pass)** — all 790 items decided and applied 2026-09-27 (331 actions; 16 paper checks carried to round 2) — _source: .reductions/REVIEW.md_
- [ ] [FactCheck] **Maintainer review queue, round 2**: https://claude.ai/artifact/HnCB6oD1FDbTLG1NjxeQfh — 31 follow-ups applied 2026-10-03 on the maintainer's go-ahead, listed under Applied for Keep / Amend / Revert; 14 new paper checks join the 16 below under Needs the paper. Mark items there, then ask Claude to `apply review decisions` — _source: .reductions/REVIEW.md_
- [ ] [External] **16 approved checks need the paper** (CIMR25, DMO00, SW14, BCMS20, BW07, BB04, KSW08, DGI+19, Gil77, OW93, Wee25, DF02, Wee24, YZ16, BH26, and eprint 2025/1501): eprint.iacr.org, arxiv.org, doi.org, link.springer.com and dblp.org are blocked from the cloud environment. Allowing them (environment settings → Network access) lets Claude finish them; they are listed in the round-2 queue — _source: .reductions/REVIEW.md_

- [x] [Math] **84 reduction/barrier pages state a claim that is incorrect as written** — resolved 2026-09-27 by review round 1 (deleted, replaced, merged or re-typed as the maintainer approved) (inverted edges, definitions recorded as theorems, structures used as assumptions, application notes typed as existence implications). Each carries a `Sourcing pass (2026-09-26), not fixed` bullet in its Notes with the reason; none was sourced, re-typed, or deleted — a human should delete, redirect, or re-type them — _source: .reductions/sourcing-pass.json_
- [x] [Content] 5 reduction pages remain `undetermined` — resolved 2026-09-27 by review round 1: no attributable source was found after research and verification; they still carry their migration scaffolding — _source: .reductions/sourcing-pass.json_
- [ ] [External] 234 reference pages carry `TODO — abstract.`; 141 are stubs the sourcing pass created while eprint/arXiv/DOI hosts were unreachable, with bibliographic data from vendor/cryptobib — _source: .reductions/sourcing-pass.json_
- [ ] [External] Four reference stubs lack a journal DOI because doi.org and Crossref were unreachable: `BHZ87` and `KGH83` have a dblp search link as `source`, and `Tod91` and `BRS95` link their conference versions (FOCS 1989, STOC 1991). Replace each `source` with the journal DOI, add it to the inline bibtex, and give `KGH83`'s second author in full (now `J. W. Greene`) — _source: content/References/_
- [x] [FactCheck] 159 verifier flags and 664 editor/reviewer notes — consolidated into the round-1 follow-ups (137) and applied; notes raised while applying them are the round-2 follow-ups (many informational) record follow-ups for a human, chiefly assumption-page definitions found vacuous, reference pages with wrong filenames or abstracts, duplicate edges to merge, hypothesis nodes too coarse for the source's actual assumption — _source: .reductions/sourcing-pass.json_

- [ ] [Math] Suspected error (audit 2026-08-21, medium, review-only): '**PRF security via lazy sampling**: The hybrid argument replaces a PRF $F_k$ with a truly random function $R$ one input at a time, using the fact that the PRF and a random oracle are indistinguishable on any polynomial number of queries.' This is circular — PRF/random-function indistinguishability is the statement being proven, and lazy sampling is not an input-by-input hybrid over a PRF (input-b — _source: content/Folklore/hybrid-argument.md_
- [x] [Math] Suspected error (audit 2026-08-21; fixed by 2026-10-03, high, review-only): Paraphrased text presented under '## Abstract' contains claims that are likely false: Yao82's 'abstract' says 'The paper also introduces the technique of garbled circuits' — garbled circuits are attributed to Yao's 1986 FOCS paper ('How to Generate and Exchange Secrets') and oral tradition, not the 1982 paper. Wat11's 'abstract' claims the scheme 'achieves selective security under the Decisional B — _source: content/References/Wat11 - Ciphertext-Policy Attribute-Based Encryption from Subset Cover.md_
- [x] [Math] Suspected error (audit 2026-08-21; fixed by 2026-10-03, high, review-only): Paraphrased text presented under '## Abstract' contains claims that are likely false: Yao82's 'abstract' says 'The paper also introduces the technique of garbled circuits' — garbled circuits are attributed to Yao's 1986 FOCS paper ('How to Generate and Exchange Secrets') and oral tradition, not the 1982 paper. Wat11's 'abstract' claims the scheme 'achieves selective security under the Decisional B — _source: content/References/Yao82 - Protocols for secure computations.md_
- [x] [Math] Suspected error (audit 2026-08-21; fixed by 2026-09-27, high, review-only): Pessiland is mischaracterized. The world list defines "**Pessiland**: $\classP\neq \classNP$ but OWFs do not exist" (overlapping Heuristica), and the '## A note on hardness' section says: "This gap explains why Pessiland exists: a world where NP is hard in the worst case (so $\classP \neq \classNP$) but NP is easy on average — meaning random instances of NP problems are tractable — so OWFs cannot — _source: content/impagliazzos-five-worlds.md_
- [x] [Math] Suspected error (audit 2026-08-21; fixed by 2026-09-27, high, review-only): In '## Breaking up Cryptomania': "TDPs (equivalently, the existence of PKE or OT) unlock the full power of asymmetric cryptography." TDP, PKE, and OT are not known to be equivalent — TDP implies PKE and OT, but not conversely, and the GKM+00 paper cited in the same paragraph proves black-box separations among exactly these primitives. 'equivalently' is wrong as stated. — _source: content/impagliazzos-five-worlds.md_
- [x] [Math] Suspected error (audit 2026-08-21; fixed by 2026-09-27, medium, review-only): In '## Obfustopia': "iO ... can exist even in a world where $\classP = \classNP$: the definition of iO does not require any computational hardness beyond the existence of OWFs." Self-contradictory as written — if P = NP then OWFs do not exist, so 'beyond the existence of OWFs' cannot be the reason iO survives P = NP. The standard statement is that iO _by itself_ (without OWFs) implies no hardness — _source: content/impagliazzos-five-worlds.md_

- [x] [Navigation] Dead wikilink `[[DKL09 - On cryptography with auxiliary input|DKL09]]` — no reference page exists; the link resolves to nothing in production — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:52_
- [x] [Navigation] Dead wikilink `[[CDV21 - Learning a mixture of two subspaces over finite fields|CDV21]]` — no reference page exists for CDV21; used as a citation in CIMR25's LSN facts section — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:67_
- [ ] [Content] `public-key-encryption.md` — Key-hiding security notion section has a bare `TODO` with no content — _source: content/Primitives/public-key-encryption.md:99_
- [ ] [Content] `pseudorandom-function.md` — Pseudorandom injective functions subsection says "TODO: define these and say how they relate to PRPs" — _source: content/Primitives/pseudorandom-function.md:107_
- [ ] [Content] `multi-server-private-information-retrieval.md` — Doubly-efficient multi-server PIR subsection is empty — _source: content/Primitives/multi-server-private-information-retrieval.md:43_
- [ ] [Content] `learning-parity-with-noise.md` — Attacks section is a bare `TODO` — _source: content/Assumptions/learning-parity-with-noise.md:72_
- [ ] [Content] `doubly-efficient-pir.md` — Multi-server DEPIR variation section is a bare `TODO` — _source: content/Primitives/doubly-efficient-pir.md:51_

---

## Medium Priority

- [ ] [Math] 30+ `TODO citation` entries across Complexity class pages — content is present but references are missing:
  - `content/Complexity/interactive-proof-systems.md:19` — $\classIP = \classPSPACE$
  - `content/Complexity/sharp-p.md:25,29` — approximate counting, Valiant's permanent
  - `content/Complexity/quantum-merlin-arthur.md:21,22,27` — Local Hamiltonian, local density matrices, QMA⊆PP
  - `content/Complexity/quantum-statistical-zero-knowledge.md:16,21` — QSD completeness, QSZK closure
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
- [x] [Math] `\mathbb{F}` used directly in CIMR25 reference instead of `\FF`; violates site convention — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:25,54,67_
- [x] [Math] `\mathbf{F}^n` at line 54 of CIMR25 is likely a typo for `\mathbb{F}^n` (= `\FF^n`); adjacent lines use `\mathbb{F}` — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:54_
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
- [x] [Content] CIMR25 reference contains uncommitted editorial/draft notes: "I guess secret-key PIR that is not doubly efficient could be interesting...?" (l.32) and "**Wait** actually is this just taken from DKL09?" (l.52) — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:32,52_
- [x] [Content] CIMR25 reference contains remaining typos/issues: "fo" (l.56), "dimentional" (l.56), "som eof" (l.45), "prepreprocessing" (l.34), and an empty bullet point (l.46); also uses `\mathbb{F}` and `\mathbf{F}` rather than `\FF` — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md_ (see Math entries above)
- [x] [External] 6 reference files are missing a source URL: `BBHR18`, `Grover96`, `KZG10`, `LPR10`, `LS15`, `Sch91` — fixed 2026-10-03: all six carry a `source`, and `BBHR18` is now labelled `BBHR18a` — _source: content/References/ (various)_
- [ ] [Content] `content/Complexity/polynomial-time.md` stub — has a definition but the `Known relationships` heading has no content — _source: content/Complexity/polynomial-time.md_
- [ ] [Math] `\mathbf{PH}` used directly in complexity files (no `\classPH` macro exists) — consider adding `\classPH` → `\mathbf{PH}` to macros.ts and latex-macros.md — _source: content/Complexity/probabilistic-polynomial-time.md:19, co-arthur-merlin.md:19, p-poly.md:24, merlin-arthur.md:23_
- [ ] [Content] DDH assumption page: empty variation section Matrix Diffie-Hellman — _source: content/Assumptions/decisional-diffie-hellman.md:80_
- [x] [Navigation] Citation link `[[CIMR25 - Secret-Key PIR from Random Linear Codes]]` is missing the display-text suffix `|CIMR25` per site convention — _source: content/Assumptions/learning-parity-with-noise.md:66_

- [ ] [Content] **Recurring review pipeline** (maintainer request 2026-09-27; set up after the current cleanup): a scheduled pass that audits recently changed reduction, barrier and object pages, verifies its findings, and adds them as a new round on the review page, keeping the history of rounds and past decisions, so each round stays small enough to read in detail — _source: .reductions/REVIEW.md_
- [ ] [Content] `lwe-to-zero-bit-prc-cg24.md` keeps id `red-lwe-to-zero-bit-prc-cg24`, but the page now states {subexponential-lpn} ⇒ zero-bit-prc (hypothesis rewritten from LWE). Its Notes still say "ids are stable". Under the one-theorem id rule (docs/relations-json.md § Stability contract), decide: re-id it to `red-subexponential-lpn-to-zero-bit-prc-cg24` and change the sentence to "The slug keeps `lwe` because filenames are live URLs.", or keep the id and drop ", and ids are stable" — _source: content/Reductions/lwe-to-zero-bit-prc-cg24.md:30_

---

## Low Priority / Inferred

- [ ] [Content] `index.md` contains a user-facing disclaimer "there are a lot of stubs and TODOs" — should be removed once major stubs are filled — _source: content/index.md:7_
- [ ] [Navigation] Twitter/X link in index — consider updating to current canonical URL format — _source: content/index.md_
- [ ] [External] `content/References/Rabin81 - How to Exchange Secrets with Oblivious Transfer.md` source URL uses `.pdf` extension — canonical ePrint URL (without `.pdf`) is preferred style — _source: content/References/Rabin81 - How to Exchange Secrets with Oblivious Transfer.md:3_
- [ ] [Math] Remaining `\{0,1\}` usages (should be `\bits`) in Complexity/Glossary/Assumptions files — minor style inconsistency:
  - `content/Complexity/p-poly.md:10,13`
  - `content/Complexity/total-function-np.md:24`
  - `content/Complexity/quantum-classical-merlin-arthur.md:13,14`
  - `content/Glossary/arithmetization.md:53`
  - `content/Glossary/generic-group-model.md:14`
  - `content/Complexity/sharp-p.md:11`
- [ ] [External] cryptobib drift where the page data is wrong: IKNP03 lists author "Eyal Petrank" but C:IKNP03 has Erez Petrank. MMP+10 has venue "STOC 2010" but its key is FOCS:MMPRTV10. Sha79's cryptobib*key EC:Mignotte82 is Mignotte's "How to Share a Secret?" (EUROCRYPT '82); Shamir's CACM paper is cryptobib `Shamir79`. DH76, HS25 and Yeo23 have venue "preprint" while their keys name IEEE Trans. Inf. Theory, IACR CiC 2025 and EUROCRYPT 2023. BGG+90 has `published: 2000-01-01` for a CRYPTO '88 paper (cryptobib year 1990) — \_source: scripts/sync-cryptobib.ts, content/References/ (various)*
- [ ] [External] cryptobib drift where the key names a different version of the paper than `venue`/`published` do. For four, cryptobib also has the cited version: BM84 (key FOCS:BluMic82; SICOMP version is `BluMic84`), ElGamal85 (key C:ElGamal84; IEEE TIT version is `ElGamal85`), GKR15 (key STOC:GolKalRot08, published 2015; JACM version is `JACM:GolKalRot15`) and GMR85 (key GolMicRac89, SICOMP 1989, published 1985; STOC version is `STOC:GolMicRac85`). For the rest, cryptobib has no other entry with the same title: Tar08 (STOC:Tardos03 vs JACM 2008), Vad06 (FOCS:Vadhan04 vs SICOMP 2006), CGKS98 (FOCS:CGKS95 vs JACM 1998), SV03 (EPRINT:SahVad00 vs JACM 2003) and Rabin81 (EPRINT:Rabin05 vs the 1981 TR). Either switch the key, align venue/published with it, or move to inline bibtex — _source: scripts/sync-cryptobib.ts, content/References/ (various)_
- [ ] [External] cryptobib year drift where `published` is the ePrint/arXiv posting date and the key names the later venue: AKL+20, BBB+18, BFM24, BLVW19, BN16, CD22, CHS25, CK20, DT24, Din25, GZS24, HMST22, HPPY25, KL21, LMW23, LNO13, SW14, SW25a, Wul09, YZW+19, Yeo23, vAH04. LMW24's ePrint 2025/235 is dated after CRYPTO 2024, and GR13 uses the Springer online-first date. CONTRIBUTING.md's example (`published: 2025-02-09`, ePrint 2025/190, EC:SilWic25) uses the posting date. Decide what `published` means: if it is the posting date, make sync-cryptobib accept the year in `source`; if it is the venue year, fix these pages — _source: scripts/sync-cryptobib.ts, CONTRIBUTING.md, content/References/ (various)_
- [ ] [External] cryptobib author drift from `authors` not in house form ("First Last, First Last"): FKL18, JS08, MPZ20 and Sho97 use "Last, First". BMZ19, DGI+19 and FIPR05 put "and" before the last author — _source: scripts/sync-cryptobib.ts, content/References/ (various)_
- [ ] [External] cryptobib drift to check against the paper: BBS86 "Michael Shub" vs cryptobib "Mike Shub". RSA78 "Ron Rivest" vs "Ronald L. Rivest". CDH+19's title and author order differ from NISTPQC-R2:NTRU19 ("{NTRUEncrypt}", Zhang first). The HLL23 H1 carries the ePrint subtitle; FOCS:HsiLinLuo23 is "Attribute-Based Encryption for Circuits of Unbounded Depth from Lattices". The RW13 H1 "New Constructions and Proof Methods for Large Universe Attribute-Based Encryption" vs CCS:RouWat13 "Practical constructions and new proof methods for large universe attribute-based encryption". FGJ+25 venue "CiC Vol 1, No 4 (2025)" and `published: 2023-10-27` vs CiC:FGJMMW24 (2024). Cha82 `published` 1983 for CRYPTO '82 (cryptobib 1982) — _source: scripts/sync-cryptobib.ts, content/References/ (various)_

---

## Cannot Verify (needs human review)

- [ ] [External] All external URLs (ePrint, arXiv, ACM DL, Springer, IEEE, etc.) — network access was unavailable during this audit; spot-check live links, especially recent 2025–2026 preprints — _source: content/References/ (various)_
- [ ] [External] NIST post-quantum standards URL contains a literal `(` in the path (`security-(evaluation-criteria)`); verify this renders as a working hyperlink — _source: content/Assumptions/supersingular-isogeny-diffie-hellman.md_
- [ ] [External] `https://eprint.iacr.org/2026/113` (BH26), `https://eprint.iacr.org/2026/384` (CHW26), and `https://arxiv.org/abs/2602.09385` (BHV26) — 2026 papers; verify identifiers are correct and live — _source: content/References/BH26 - ..., CHW26 - ..., BHV26 - ..._
- [ ] [Content] `[[CDV21 - Learning a mixture of two subspaces over finite fields|CDV21]]` — referenced alongside "Wait actually is this just taken from DKL09?" suggesting possible misattribution; requires author review — _source: content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:52,67_
- [ ] [Navigation] Wikilinks `[[Primitives]]`, `[[Assumptions]]`, `[[References]]`, `[[Folklore]]`, `[[Complexity]]`, `[[Glossary]]` — Quartz generates folder index pages automatically; resolve at build time but not verifiable without running the build — _source: content/index.md_
- [ ] [Navigation] `[[Oblivious transfer|OT]]` — uses lowercase "t" alias while the registered alias is "Oblivious Transfer" (capital T); verify Quartz alias resolution is case-insensitive in this deployment — _source: content/impagliazzos-five-worlds.md:61_
- [ ] [FactCheck] Bar01: check whether Barak's constant-round ZK argument assumes collision resistance against polynomial-size circuits or against some superpolynomial size; the paper (FOCS 2001) is unreachable from the cloud environment, so the reduction page records `crhf` and flags the question in its Notes — _source: content/Reductions/crhf-to-constant-round-zk-argument-bar01.md_
