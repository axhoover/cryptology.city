# CS 579 coverage audit (Phase 1)

Date: 2026-11-21. Starting commit: `305cf1d05724c9ea2c9944e8a5dc7e0f1052fa93`
on `main`; this report is on `claude/busy-bell-iq147v`. Read-only: no page under
`content/` was changed.

**Scope.** One row per topic of the 2027 CS 579 lectures (L01, L02, L14 and L23
skipped), 99 rows in all. Each row gives the page, section or reduction that
covers the topic, its status, whether the definition is in the course's
game-based form, and the gap. Then follow the errors found, a check of the
maintainer's own observations, candidate Lean targets, and the peripheral stubs
to leave for students. Paths are relative to `content/`.

**Method.** Twelve auditors, one per lecture group, read every page, reduction
and barrier on their topics and checked the definitions and arguments. Each
auditor's report went to an independent verifier, who re-read the cited lines,
tried to refute every error, rechecked every coverage pointer, anchor, `id` and
status against the frontmatter, and checked each finding against the open
`TODO_SUMMARY.md` items and `.fact-check/queue.json`. Of 27 reported errors, 26
were judged real and one uncertain; two pairs were duplicates, leaving the 25
below. A further agent drafted the Lean list and another inventoried the stubs
and TODO sections near course topics. I then rechecked every error location
against `305cf1d` (all still match) and redid two arguments by hand (ElGamal's
factor 2, DDH in $\mathbb{Z}_P^*$).

**Evidence labels** follow [README.md](README.md). _Direct check_: verified by
argument or counterexample, attribution not verified. _Source checked_: the
named passage of the named version was read. For most papers that means only the
eprint or arXiv abstract page, which supports metadata and abstract-level
claims, not theorem statements. _Pending_: not settled here.

**Network limits (tested 2026-11-21).** The following hosts are reachable:
eprint abstract pages, arXiv abstract pages and PDFs, GitHub, and the local
`vendor/cryptobib/crypto.bib`. eprint PDFs return a Cloudflare challenge. The
proxy refuses (403) doi.org, link.springer.com, dl.acm.org, ieeexplore,
epubs.siam.org, dblp.org, crossref, csrc.nist.gov and nvlpubs.nist.gov,
datatracker.ietf.org and rfc-editor.org, cryptobib.di.ens.fr, and authors'
university pages. Consequently, papers that exist only at a publisher (BM84,
Sha49, BL95, Mer89, most 1980s–90s CRYPTO/EUROCRYPT papers), the NIST FIPS
documents and the IETF drafts cannot be read here.

## Summary

| Status  | Rows | Meaning                                                                            |
| ------- | ---: | ---------------------------------------------------------------------------------- |
| covered |   59 | Stated on a draft page; a definition has its game. The gap may still be non-empty. |
| thin    |   16 | Mentioned (a clause, a Notes bullet or prose), but no statement, game or page.     |
| missing |   22 | Not on the wiki at all.                                                            |
| stub    |    2 | Covered only on a page marked `stub` (switching lemma, trapdoor permutation).      |

These areas are entirely missing:

- perfect secrecy and Shannon's bound;
- MITM on double encryption;
- CBC and ECB modes, malleability, deterministic encryption;
- second-preimage resistance, the birthday bound, Floyd, length extension, and H(k‖m) as a PRF in the ROM;
- DDH in $\mathbb{Z}_P^*$;
- hashed ElGamal;
- normal-form LWE, Lindner–Peikert, Arora–Ge;
- standard-model hash-and-sign, and textbook RSA signatures;
- generic attacks and key lengths;
- KEM combiners and X25519MLKEM768.

## Table 1: coverage by topic

| Topic                                                  | Covering page, section or reduction                                                                                                              | Status  | Game form | Gap                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **L03.1** Perfect secrecy (definition)                 | —                                                                                                                                                | missing | no        | No definition, either as Shannon secrecy or as perfect indistinguishability. The term is used undefined on `ske-to-owf-il89`, `cpa-security-to-ske` and `hybrid-argument`. `Sha49` exists as a stub but is not cited for secrecy.                                                            |
| **L03.2** One-time pad and its perfect secrecy         | `Primitives/symmetric-key-encryption.md#one-time-security` (line 83)                                                                             | thin    | n/a       | One sentence ("advantage 0 — folklore"). The scheme is not written out and perfect secrecy is not stated as a theorem. Incidental uses: `ind-cpa-kem-to-pke-cpa-security`, `kem-and-ske-to-pke` Notes.                                                                                       |
| **L03.3** Shannon's bound \|K\| ≥ \|M\|                | —                                                                                                                                                | missing | n/a       | Not stated. The counting step appears, used computationally, in the `ske-to-owf-il89` Sketch.                                                                                                                                                                                                |
| **L04.1** PRG: syntax, stretch, game                   | `Primitives/pseudorandom-generator.md#syntax`, `#pseudorandomness`, `#next-bit-unpredictability`                                                 | covered | yes       | None. Optional: cite BM84/Yao82a at the definition.                                                                                                                                                                                                                                          |
| **L04.2** One-time (EAV) security; PRG cipher G(k) ⊕ m | `Primitives/symmetric-key-encryption.md#one-time-security`; `pseudorandom-generator.md` line 125                                                 | thin    | yes       | The notion is covered; the one-query limit is prose, not a `\Comment`. The PRG cipher is one prose bullet with no reduction page. The `ske` node (one-time SKE) already holds unconditionally via the OTP, so the edge needs a new variant for \|m\| > \|k\| to say anything.                |
| **L04.3** One-way function                             | `Primitives/hash-function.md#preimage-resistance-one-wayness` (variant `owf`)                                                                    | covered | yes       | None. OWF is a keyed family; the unkeyed textbook OWF is the singleton-key case. The OWF/CRHF page conflation is already in `TODO_SUMMARY.md`.                                                                                                                                               |
| **L04.4** OWF ⇒ PRG (HILL99)                           | `Reductions/owf-to-prg-hill99.md`                                                                                                                | covered | n/a       | None. The Statement says "unkeyed" while `owf` is keyed (same issue as TODO 604(b)).                                                                                                                                                                                                         |
| **L04.5** OWP ⇒ PRG via Goldreich–Levin                | `Reductions/owp-to-prg-yao82a-gl89.md`                                                                                                           | covered | n/a       | Construction and hybrid correct (direct check). BM84 is missing from `source` (E1). `one-way-permutation.md` is a stub.                                                                                                                                                                      |
| **L04.6** Goldreich–Levin, hardcore predicates         | `Glossary/hardcore-predicate.md#goldreichlevin-theorem`                                                                                          | covered | partial   | GL is named, and it is the `via` of six reductions. The hardcore-predicate definition is prose with no game.                                                                                                                                                                                 |
| **L04.7** Weak ⇒ strong OWF (Yao)                      | `Reductions/weak-owf-to-owf-yao82a.md`; `hash-function.md#weak-one-wayness`                                                                      | covered | n/a       | None (argument checked).                                                                                                                                                                                                                                                                     |
| **L05.1** Stream ciphers as PRGs; length extension     | `pseudorandom-generator.md#pseudorandomness`; `leakage-resilient-stream-cipher.md#syntax`; `Folklore/hybrid-argument.md`                         | thin    | partial   | The stateful (KeyGen, Next) syntax exists only on the leakage-resilient page. There is no stream-cipher node or variant, PRG stretch extension is prose ("— standard") with no page, and no IV-based form is given.                                                                          |
| **L05.2** Block ciphers as PRPs and strong PRPs        | `Primitives/pseudorandom-permutation.md#syntax`, `#security`, `#strong-security`                                                                 | covered | yes       | The PRP page never says "block cipher" (no alias, no sentence). Domain size is unquantified, as for the PRF (open TODO).                                                                                                                                                                     |
| **L05.3** Feistel; Luby–Rackoff (LR88)                 | `Reductions/prf-to-prp-lr88.md`; `Reductions/prf-to-strong-pseudorandom-permutation-lr88.md`                                                     | covered | n/a       | The Feistel map is defined only inside these pages. There are no attacks on 1–2 rounds, and none on 3 rounds as a strong PRP (the PRP page asserts it, citing LR88; there is no barrier). There is no proof idea; the bad event must cover collisions among both round-2 and round-3 inputs. |
| **L05.4** MITM on double encryption                    | —                                                                                                                                                | missing | n/a       | No double or triple encryption anywhere. MH81, DH77 and vOW90 have no reference pages.                                                                                                                                                                                                       |
| **L07.1** PRF: definition and game                     | `Primitives/pseudorandom-function.md#security`                                                                                                   | covered | yes       | Open Syntax TODO: D and R are unquantified, so a polynomial-size domain meets the definition unconditionally. No GGM86 citation at the definition.                                                                                                                                           |
| **L07.2** GGM (PRG ⇒ PRF)                              | `Reductions/prg-to-prf-ggm86.md`; `hybrid-argument.md#standard-applications`                                                                     | covered | n/a       | The Sketch is two sentences; the inner per-level hybrid appears only in `security-loss`; ℓ(λ) ≤ poly(λ) is not stated. The GGM86 hybrid check is already open in TODO_SUMMARY.                                                                                                               |
| **L07.3** PRP/PRF switching lemma                      | `Folklore/switching-lemma.md`; `Reductions/prp-to-prf.md`                                                                                        | stub    | n/a       | Statement and coupling proof are correct (direct check), so the page is mislabelled stub. The Statement says "— standard"; BR06 is cited only for "a game-playing treatment", and IR89 is not cited on this page.                                                                            |
| **L08.1** CPA security for SKE                         | `symmetric-key-encryption.md#cpa-security`, `#ind-cpa-security` (IND$); `Disambiguation/cpa-security.md`                                         | covered | yes       | Real-or-random and find-then-guess CPA are absent, and BDJR97's equivalences are not recorded.                                                                                                                                                                                               |
| **L08.2** Deterministic encryption is not CPA-secure   | —                                                                                                                                                | missing | n/a       | There is no general statement or attack. Only special cases exist: the OTP (`cpa-security-to-ske` Notes), PRG(k) ⊕ m (PRG page, line 125) and nonce reuse (AE page, line 153).                                                                                                               |
| **L08.3** Randomized CTR from a PRF                    | `Reductions/prf-to-ske.md`                                                                                                                       | covered | n/a       | None (BDJR97). Minor: the single-block scheme (r, F_k(r) ⊕ m) appears only as the ℓ = 1 case, and there is no malleability remark.                                                                                                                                                           |
| **L08.4** CBC (random IV); predictable IV; ECB         | —                                                                                                                                                | missing | n/a       | No CBC encryption, no ECB, no IV discussion, and no PRP ⇒ CPA edge.                                                                                                                                                                                                                          |
| **L10.1** CCA security for SKE                         | `symmetric-key-encryption.md#cca-security`                                                                                                       | covered | yes       | The game and admissibility are correct; the triviality example is imprecise (E3).                                                                                                                                                                                                            |
| **L10.2** Malleability; CTR is not CCA-secure          | —                                                                                                                                                | missing | no        | No SKE malleability notion and no barrier CPA ⇏ CCA. The CTR bit-flip appears only in the KEM/DEM sentence (`key-encapsulation-mechanism.md` line 74), uncited (E21).                                                                                                                        |
| **L10.3** Authenticated encryption                     | `Primitives/authenticated-encryption.md`                                                                                                         | covered | yes       | A usable draft, not a stub. Missing are the all-in-one game (Shr04/RS06) and its equivalence to IND-CPA + INT-CTXT. INT-PTXT and INT-CTXT have no variant ids. The line 27 counterexample is imprecise (E2).                                                                                 |
| **L10.4** Encrypt-then-MAC ⇒ AE, CCA (BN00)            | `Reductions/cpa-security-and-suf-cma-mac-to-authenticated-encryption-bn00.md`; `Reductions/mac-and-ske-to-cca-security.md`                       | covered | n/a       | Correct, and the losses compose. The MtE and E&M caveats are prose only, with no barrier pages. Kra01 is absent.                                                                                                                                                                             |
| **L10.5** AE ⇒ CCA-secure SKE                          | `Reductions/authenticated-encryption-to-cca-secure-symmetric-key-encryption-bn00.md`                                                             | covered | n/a       | None.                                                                                                                                                                                                                                                                                        |
| **L11.1** MAC syntax; EUF-CMA and SUF-CMA              | `Primitives/message-authentication-code.md#unforgeability`, `#strong-unforgeability`                                                             | covered | yes       | The name "EUF-CMA" is absent (the site says UF-CMA). Verification queries (BGM04) are not discussed, and there is no UF ⇏ SUF barrier. The message-space TODO is open (same issue as the PRF).                                                                                               |
| **L11.2** PRF ⇒ MAC                                    | `Reductions/prf-to-mac.md`                                                                                                                       | covered | n/a       | None.                                                                                                                                                                                                                                                                                        |
| **L11.3** CBC-MAC, fixed length (BKR94)                | `Reductions/prf-to-mac-bkr94.md`                                                                                                                 | covered | n/a       | Correct. The BKR00 journal reference and the exact constant are open (TODO_SUMMARY line 268).                                                                                                                                                                                                |
| **L11.4** CBC-MAC variable-length forgery; fixes       | `prf-to-mac-bkr94.md#notes`                                                                                                                      | thin    | n/a       | The forgery x‖(x ⊕ t) is one Notes bullet, not a barrier. None of the fixes appears: ECBC/EMAC, CMAC/OMAC, XCBC, length-prepending. PR00, BR00 and IK03 have no pages.                                                                                                                       |
| **L11.5** HMAC and NMAC (BCK96)                        | `message-authentication-code.md#other-results`; `Reductions/prf-to-mac-bel06.md`; `Reductions/prf-to-mac-gpr14.md`                               | covered | n/a       | HMAC is prose only, with no BCK96 page (the form of BCK96's theorem is open at TODO line 85). The Bel06 and GPR14 pages conclude `mac` although they prove a variable-length PRF. The GPR14 page has an NMAC key-order clash (E4).                                                           |
| **L11.6** Domain extension for MACs                    | `message-authentication-code.md#strongly-unforgeable-macs-for-arbitrary-length-messages`                                                         | thin    | partial   | The variant exists, but only a trivial edge produces it. No generic construction (block tagging with a random identifier, hash-and-MAC).                                                                                                                                                     |
| **L12.1** Collision resistance                         | `hash-function.md#collision-resistance` (variant `crhf`)                                                                                         | covered | yes       | No Dam87 citation. The reason for keying is not linked, and the necessity of m = ω(log λ) is not stated.                                                                                                                                                                                     |
| **L12.2** Preimage and second-preimage resistance      | `hash-function.md#preimage-resistance-one-wayness`                                                                                               | thin    | partial   | Second-preimage resistance has no section, game or id. The RS04 implications are one sentence, with no edges for CR ⇒ 2PR, 2PR ⇒ PR or CR ⇒ TCR. CR ⇒ OWF is stated inside `crhf-to-weak-owf`.                                                                                               |
| **L12.3** Birthday bound and generic collision attack  | `switching-lemma.md` (proof, upper bound only)                                                                                                   | missing | n/a       | No lemma, so the lower bound 1 − e^{−q(q−1)/2N} is absent. No generic attack either. The two-list form is used uncited in `rom-to-merkle-puzzles-mer78`.                                                                                                                                     |
| **L12.4** Floyd's cycle finding                        | `discrete-logarithm.md#attacks`, `factoring.md#attacks` (rho bullets)                                                                            | missing | n/a       | Floyd is never named, and there is no small-space collision search or parallel (vOW) search.                                                                                                                                                                                                 |
| **L12.5** Merkle–Damgård                               | `hash-function.md#collision-resistance` (one sentence, Dam89)                                                                                    | thin    | n/a       | The construction, padding and proof are absent, as are a reduction page and an arbitrary-length CRHF node. Merkle's "One Way Hash Functions and DES" has no page; the existing `Mer89` is the signature paper.                                                                               |
| **L12.6** Length extension on H(k‖m)                   | `Glossary/indifferentiability.md#constructions` (one clause)                                                                                     | missing | n/a       | The attack on the secret-prefix MAC is never stated. Tsu92 and PvO95 are absent.                                                                                                                                                                                                             |
| **L12.7** Random oracle model                          | `Glossary/random-oracle-model.md`                                                                                                                | covered | partial   | The definition is prose, with no lazy-sampling oracle block. Programmability and observability are used across about ten pages but defined nowhere, and there is no non-programmable or global ROM.                                                                                          |
| **L12.8** ROM uninstantiability (CGH98)                | `random-oracle-model.md#known-results` (one bullet)                                                                                              | thin    | n/a       | The bullet is accurate (Source checked: arXiv cs/0010019, Thm 4.4) but omits the PKE case's condition. There is no barrier page and no sketch. The GK03 reference misstates the related result (E5).                                                                                         |
| **L12.9** H(k‖m) is a PRF in the ROM                   | —                                                                                                                                                | missing | n/a       | No page.                                                                                                                                                                                                                                                                                     |
| **L13.1** Groups, GrGen, elliptic curves               | `discrete-logarithm.md#assumption` (and the CDH/DDH Assumption sections)                                                                         | thin    | partial   | GrGen is one informal sentence. The base notion requires no efficient operations or membership tests on unique encodings (some variants do). Elliptic curves are never defined.                                                                                                              |
| **L13.2** Discrete-log game                            | `discrete-logarithm.md#assumption` (`dlog`, `prime-order-dlog`)                                                                                  | covered | yes       | None.                                                                                                                                                                                                                                                                                        |
| **L13.3** Generic groups; Shoup's bound                | `Glossary/generic-group-model.md`; `Reductions/ggm-to-dlog-sho97.md` (also CDH, DDH)                                                             | covered | partial   | The Sho97 Statements are correct. The model is prose with no game. Line 67 states as fact an inclusion that KZ22 refute (E6), and two reference "abstracts" assert an unverified separation (E7).                                                                                            |
| **L13.4** Baby-step giant-step                         | `discrete-logarithm.md#attacks`; `decisional-diffie-hellman.md#attacks`                                                                          | covered | n/a       | Adequate (one cited bullet). TODO_SUMMARY line 26 is stale: the Sha71 stub exists.                                                                                                                                                                                                           |
| **L13.5** Pohlig–Hellman                               | `discrete-logarithm.md#attacks`; `decisional-diffie-hellman.md` line 75                                                                          | thin    | n/a       | One bullet, with no prime-power step and no cost. The DDH copy is uncited and gives the wrong reason why DDH needs prime order (E13).                                                                                                                                                        |
| **L15.1** Key exchange: syntax, eavesdropper game      | `Primitives/key-exchange.md#syntax`, `#security-indistinguishability-from-random`                                                                | covered | yes       | A usable draft, not a stub. It never links Merkle puzzles. The key-space modelling TODOs are open.                                                                                                                                                                                           |
| **L15.2** NIKE                                         | `key-exchange.md#non-interactive-key-exchange-nike`                                                                                              | covered | yes       | CKS-light and CKS-heavy are prose only (the FHKP13 check is open).                                                                                                                                                                                                                           |
| **L15.3** Merkle puzzles                               | `Primitives/merkle-puzzles.md`; `Reductions/rom-to-merkle-puzzles-mer78.md`                                                                      | covered | partial   | A usable draft. Its query-bounded (q, ε) form is right for the ROM, and its BM09 statement matches arXiv 0801.3669v4 Thm 1.2. The IR89 and BM09 bounds are misstated on two barrier pages and a glossary page (E11, E12).                                                                    |
| **L16.1** DH key exchange under DDH / CDH              | `Reductions/ddh-to-non-interactive-key-exchange-nike.md`; `non-interactive-key-exchange-to-ke.md`; `cdh-to-non-interactive-key-exchange-dh76.md` | thin    | n/a       | The DDH half is covered. No one-way (key-recovery) KE notion exists, so "CDH ⇒ the key is unpredictable" has no edge. Plain hashed DH is absent. The GL-bit protocol is misattributed to DH76 (E14).                                                                                         |
| **L16.2** CDH                                          | `Assumptions/computational-diffie-hellman.md#assumption`                                                                                         | covered | yes       | No `# Attacks` section, and no remark that CDH is believed hard in $\mathbb{Z}_P^*$ while DDH is not.                                                                                                                                                                                        |
| **L16.3** DDH                                          | `Assumptions/decisional-diffie-hellman.md#assumption`                                                                                            | covered | yes       | Lines 57 and 59 give the same argument twice.                                                                                                                                                                                                                                                |
| **L16.4** DDH fails in all of $\mathbb{Z}_P^*$         | —                                                                                                                                                | missing | n/a       | **Not stated.** "Legendre" appears only on the QR pages. The DDH page's only explanation, line 75, attributes the prime-order requirement to smoothness, which is wrong (E13).                                                                                                               |
| **L16.5** DDH ⇒ CDH ⇒ DL; separations                  | `Reductions/ddh-to-cdh.md`, `cdh-to-dlog.md` (and prime-order versions), `dlog-to-cdh-fkl18.md`; `Barriers/no-cdh-to-ddh-jn03.md`                | covered | n/a       | Correct (DDH ⇒ CDH loses 1/p). The classical converses (dB88, Mau94, MW96) are absent, and so is the $\mathbb{Z}_P^*$ separation.                                                                                                                                                            |
| **L17.1** PKE syntax, IND-CPA                          | `Primitives/public-key-encryption.md#syntax`, `#cpa-security`                                                                                    | covered | yes       | None. The syntax requires a randomized Enc, but no sentence says why.                                                                                                                                                                                                                        |
| **L17.2** Textbook RSA is not CPA-secure               | `Assumptions/rsa-assumption.md#attacks`; `Reductions/rsa-to-pke-rsa78.md`                                                                        | thin    | n/a       | Asserted, never shown. The general fact (deterministic PKE is never IND-CPA) is not stated anywhere.                                                                                                                                                                                         |
| **L17.3** ElGamal from DDH (ElG85, TY98)               | `Reductions/ddh-to-pke-elgamal85.md`                                                                                                             | covered | n/a       | Scheme and sketch correct. `security-loss` is off by a factor 2 (E15). The edge concludes bare `pke` (TODO line 519). TY98 is a stub.                                                                                                                                                        |
| **L17.4** KEM syntax, KEM-CPA                          | `Primitives/key-encapsulation-mechanism.md#syntax`, `#ind-cpa-kem`                                                                               | covered | partial   | IND-CPA has no game block: one sentence says "the CCA game without Decap". The key space {0,1}^ℓ excludes the unhashed DH KEM.                                                                                                                                                               |
| **L17.5** PKE ⇒ KEM                                    | `Reductions/pke-to-kem.md`                                                                                                                       | covered | n/a       | None for CPA. The CCA case is stated without its own edge.                                                                                                                                                                                                                                   |
| **L17.6** Hashed ElGamal: CPA KEM under CDH in the ROM | —                                                                                                                                                | missing | n/a       | Nothing. The closest coverage is CKS08's twin-DH NIKE on `key-exchange.md#cks-models`.                                                                                                                                                                                                       |
| **L17.7** CPA KEM + one-time SKE ⇒ CPA PKE             | `Reductions/ind-cpa-kem-and-ske-to-pke-cpa-security.md`; `ind-cpa-kem-to-pke-cpa-security.md`                                                    | covered | n/a       | Losses correct. TODO line 641 is open: Dec is not written out, and λ′ in the Sketch should be λ.                                                                                                                                                                                             |
| **L18.1** LWE: search and decision                     | `Assumptions/learning-with-errors.md#decision-lwe`, `#search-lwe`                                                                                | covered | yes       | Both games correct. Line 104 omits q ≥ 8 (E16). e ← χ^m is written with `\getsr`.                                                                                                                                                                                                            |
| **L18.2** Normal-form LWE (ACPS09)                     | `learning-with-errors.md#modulus-switching` (one clause)                                                                                         | missing | no        | No section, game or variant. ACPS09 has no page.                                                                                                                                                                                                                                             |
| **L18.3** Search-to-decision                           | `Reductions/search-lwe-to-decision-lwe.md`; `decision-lwe-to-search-lwe.md`                                                                      | covered | n/a       | Reg05's prime-q case is correct (Source checked: arXiv 2401.03703v1, Lemmas 4.1–4.2). General moduli are thin: MM11b is vague, and Pei09 and MP12 Thm 3.1 are absent.                                                                                                                        |
| **L18.4** Regev05 worst-case connection                | `Reductions/gapsvp-to-lwe-reg05.md`, `sivp-to-lwe-reg05.md`; Pei09 and BLPRS13 pages                                                             | covered | n/a       | Correct (Source checked: Thm 3.1, Lemmas 3.17 and 3.20). The LWE page, line 126, drops the prime-q condition for decision LWE (E17). The GapSVP and SIVP pages are stubs.                                                                                                                    |
| **L18.5** Regev encryption                             | `Reductions/lwe-to-pke-reg05.md`                                                                                                                 | covered | n/a       | Correct (Source checked: §5). The construction and both hops exist only as Sketch prose, and the LHL term is not explicit.                                                                                                                                                                   |
| **L18.6** Lindner–Peikert (ePrint 2010/613)            | —                                                                                                                                                | missing | n/a       | No page or reference. Source checked (eprint abstract): Lindner and Peikert, CT-RSA 2011. **"LPR11" is the wrong key**, since there is no third author. LP11 and LP11a are taken, so the key is LP11b (cryptobib `RSA:LinPei11`).                                                            |
| **L18.7** Module-LWE ⇒ KEM; ML-KEM                     | `learning-with-errors.md#module-lwe`; `Reductions/module-lwe-to-kem.md`; `key-encapsulation-mechanism.md#lattice-based-kem-kyber--ml-kem`        | covered | yes       | The game samples a uniform secret, not Kyber's CBD secret (open TODO). The K-PKE and FO algorithms are a two-sentence Sketch. FIPS 203 is uncited on four pages (E19).                                                                                                                       |
| **L18.8** Arora–Ge                                     | —                                                                                                                                                | missing | n/a       | `# Attacks` has no attack on plain LWE at all.                                                                                                                                                                                                                                               |
| **L19.1** KEM-DEM (CS03)                               | `Reductions/kem-and-ske-to-pke.md`; `ind-cpa-kem-and-ske-to-pke-cpa-security.md`                                                                 | covered | n/a       | The CCA edge assumes many-time CCA SKE, which is weaker than CS03's one-time DEM, because no one-time-CCA variant exists. CS03's theorem numbers are unchecked.                                                                                                                              |
| **L19.2** IND-CCA1/2 for PKE                           | `public-key-encryption.md#cca-security`, `#cca1-security`                                                                                        | covered | partial   | CCA1 is prose with no game. NY90 and RS91 are not cited, and RS91 has no page.                                                                                                                                                                                                               |
| **L19.3** IND-CCA for KEMs                             | `key-encapsulation-mechanism.md#ind-cca-security`                                                                                                | covered | yes       | No CS03 citation for the notion.                                                                                                                                                                                                                                                             |
| **L19.4** FO with implicit rejection (HHK17)           | `Reductions/ind-cpa-kem-to-ind-cca-security.md`                                                                                                  | covered | n/a       | One composite edge, which `schema/README.md` allows as a sourced direct result. HHK17's T and U^⊥̸ steps are not recorded. There are no OW-CPA or OW-PCA variants, and no generic QROM statement.                                                                                             |
| **L19.5** RSA-OAEP (FOPS01)                            | `Reductions/rsa-to-ind-cca-pke-oaep-fops01.md`; `key-encapsulation-mechanism.md#rsa-kem--rsaes-oaep`                                             | covered | n/a       | The partial-domain/full-domain equivalence lacks its parameter condition (E20). OAEP is defined only in the Sketch, and the Sho01a separation is a Note, not a barrier.                                                                                                                      |
| **L19.6** Bleichenbacher (Ble98)                       | `rsa-assumption.md#attacks`                                                                                                                      | thin    | n/a       | One correct, cited sentence. PKCS #1 v1.5 padding and the attack mechanism are absent, and the Ble98 abstract is TODO.                                                                                                                                                                       |
| **L20.1** Signatures; EUF-CMA, SUF-CMA                 | `Primitives/digital-signature.md#existential-unforgeability`, `#strong-unforgeability`                                                           | covered | yes       | SUF-CMA has no variant id, yet `sis-to-ds` and `module-lwe-and-module-sis-to-ds` prove SUF while concluding `ds`. There is no GMR88 citation at the definition.                                                                                                                              |
| **L20.2** Hash-and-sign (standard model)               | `digital-signature.md#arbitrary-length-messages`                                                                                                 | missing | n/a       | No {CRHF, fixed-length DS} ⇒ `ds-arbitrary-length` edge, and nothing produces that variant (open TODO). The `## Hash-and-sign signatures` section covers the ROM FDH pattern instead.                                                                                                        |
| **L20.3** Lamport OTS                                  | `Reductions/hash-function-to-hash-based-signatures-lam79.md`; `digital-signature.md#one-time-signatures`                                         | covered | partial   | The construction and its 2ℓ loss are correct. One-time security is prose with no game, and there is no strong-OTS variant, although CHK04 links one.                                                                                                                                         |
| **L20.4** Merkle-tree signatures (Mer89)               | `Reductions/hash-function-and-hash-based-signatures-to-ds-mer89.md`                                                                              | covered | n/a       | **The conclusion is wrong** (E22): a static 2^h tree with an efficient KeyGen is a 2^h-time scheme. XMSS has the same problem (E23).                                                                                                                                                         |
| **L20.5** Naor–Yung (NY89)                             | `Reductions/uowhf-and-ots-to-ds-ny89.md`; `owp-to-uowhf-ny89.md`                                                                                 | covered | yes       | Correct. NY89's 1-1 OWF ⇒ UOWHF is not recorded, and the NY89 abstract is TODO.                                                                                                                                                                                                              |
| **L20.6** Rompel (OWF ⇒ UOWHF ⇒ DS)                    | `Reductions/owf-to-uowhf-rom90.md`; `hash-function-to-ds.md`                                                                                     | covered | n/a       | No sketch. Two Notes do not match the papers' abstracts (E25).                                                                                                                                                                                                                               |
| **L20.7** SLH-DSA (idea level)                         | `digital-signature.md#hash-based-signatures` (one sentence)                                                                                      | thin    | no        | FIPS 205 is never named. No few-time-signature notion, WOTS+ is not described, and statelessness is not explained.                                                                                                                                                                           |
| **L21.1** Textbook RSA signature forgeries             | —                                                                                                                                                | missing | n/a       | Neither the scheme nor its forgeries are given, so the FDH section has no stated motivation.                                                                                                                                                                                                 |
| **L21.2** FDH: TDP ⇒ DS in the ROM (BR93)              | `Reductions/tdp-to-ds-br93.md`                                                                                                                   | covered | n/a       | Correct. Cor00's q_S-loss bound is only a Note, and BR96 has no page. The Cor00 Note on `phi-hiding-to-ds-kk12` links the generic edge.                                                                                                                                                      |
| **L21.3** Trapdoor permutations; RSA as a TDP          | `Primitives/trapdoor-permutation.md`; `Reductions/rsa-to-tdp-rsa78.md`                                                                           | stub    | partial   | One-wayness is a displayed probability with no game and no `\Adv`. The "Easy inversion" section repeats Correctness, the intro is uncited, and `\mathsf{TDP}`/`\mathsf{Samp}` are raw. Correctness quantifies x before f. The RSA and Rabin edges state no domain sampler.                   |
| **L21.4** Schnorr identification                       | `Primitives/identification-scheme.md#schnorr-identification-protocol`; `Glossary/sigma-protocol.md`                                              | covered | partial   | None. Special soundness and HVZK are prose, which is adequate for perfect properties.                                                                                                                                                                                                        |
| **L21.5** Fiat–Shamir (FS86, AABN02)                   | `Reductions/id-and-rom-to-ds.md`; `Glossary/fiat-shamir-heuristic.md`                                                                            | covered | n/a       | AABN02's iff theorem is correct (Source checked: eprint 2002/022 abstract). The FS signature is never written as Sign/Vrfy.                                                                                                                                                                  |
| **L21.6** Schnorr signatures (PS96)                    | `digital-signature.md#schnorr-signatures`; `Reductions/dlog-and-rom-to-schnorr-signatures-sch91.md`; Seu12/FJS19/PV05/FF13 barriers              | covered | n/a       | None.                                                                                                                                                                                                                                                                                        |
| **L21.7** Forking lemma (PS96, BN06)                   | `Folklore/forking-lemma.md`                                                                                                                      | covered | n/a       | Proofs correct (direct check). Line 62 mislinks ID ⇒ DS as an instance of the forking proof (E24). The PS00 constants are open (TODO 184).                                                                                                                                                   |
| **L21.8** EdDSA deterministic nonces                   | `digital-signature.md#eddsa`; `Reductions/prime-order-dlog-to-eddsa-bcjz21.md`                                                                   | covered | n/a       | The scheme is correct. Nothing says why the nonces are deterministic: no nonce-reuse key recovery, no derandomization argument. BCJZ21's `security-loss` is empty.                                                                                                                           |
| **L21.9** ML-DSA as Fiat–Shamir with aborts            | `Reductions/module-lwe-and-module-sis-to-ds.md`                                                                                                  | thin    | n/a       | No FS-with-aborts section and no ML-DSA node. FIPS 204, Lyu09 and DFPS23 have no pages.                                                                                                                                                                                                      |
| **L22.1** Shor                                         | `Reductions/bqp-to-dlog-shor97.md` (id `red-dlog-to-bqp-shor97`), `fac-to-bqp-shor97.md`                                                         | covered | n/a       | Correct. The FOCS 1994 version has no page (cryptobib `FOCS:Shor94`). BQP page line 24 cites BL95 for RSA (E10, uncertain).                                                                                                                                                                  |
| **L22.2** Grover                                       | `Complexity/bounded-error-quantum-polynomial-time.md`                                                                                            | thin    | n/a       | Neither the algorithm nor the Ω(√N) bound is stated, and BBBV97 has no page. "Cannot be parallelized" is wrong (E8). The `Zal97` frontmatter venue disagrees with its own bibtex.                                                                                                            |
| **L22.3** Generic attacks, key lengths                 | scattered                                                                                                                                        | missing | n/a       | No exhaustive key search, birthday attack, quantum collision search, or key-size guidance.                                                                                                                                                                                                   |
| **L24.1** Authenticated key exchange                   | `key-exchange.md#authenticated-key-exchange-ake`                                                                                                 | covered | partial   | The BR93a game is complete. CK01 and eCK are prose with no variant ids. No reduction concludes `authenticated-key-exchange` (TODO line 284).                                                                                                                                                 |
| **L24.2** KEM combiners (GHP18)                        | —                                                                                                                                                | missing | no        | Nothing. Source checked (eprint 2018/024 abstract): "KEM Combiners", Giacon, Heuer and Poettering, PKC 2018, cryptobib `PKC:GiaHeuPoe18`.                                                                                                                                                    |
| **L24.3** XOR combiner: CPA- but not CCA-preserving    | —                                                                                                                                                | missing | n/a       | Neither half is stated. Both were checked directly: the CPA reduction generates the other KEM itself, and the CCA attack mixes ciphertexts using two Decap queries.                                                                                                                          |
| **L24.4** Hashed combiners                             | —                                                                                                                                                | missing | n/a       | Absent.                                                                                                                                                                                                                                                                                      |
| **L24.5** X25519MLKEM768                               | —                                                                                                                                                | missing | n/a       | Absent. No X25519, RFC 7748 or IETF-draft reference. Standards need author-year keys to pass lint (e.g. NIST24, LHT16).                                                                                                                                                                      |

## Errors found

Twenty-five findings. Each was re-read at `305cf1d` and verified
adversarially; all are real except E10, which is uncertain. Severity:
_wrong_ (a false claim), _imprecise_ (true under a missing condition, or
misleading), _misattributed_, _unsourced_.

1. **E1** `Reductions/owp-to-prg-yao82a-gl89.md:28`. Misattributed. The page is
   titled Blum–Micali–Yao and `hardcore-predicate.md:48` and
   `pseudorandom-generator.md:76` credit BM84, but `source` and the Statement
   cite only Yao82a and GL89. The fix is to add BM84, credited for iterating a
   OWP and outputting a hard-core bit of each iterate. Evidence: direct check of
   the wiki's consistency; BM84 itself was not read (SIAM is blocked).
2. **E2** `Primitives/authenticated-encryption.md:27`. Imprecise. The
   counterexample Enc(k, m₀) := k is INT-CTXT-secure only if k is
   unpredictable, and the syntax allows any KeyGen. The fix is to say
   k ←$ {0,1}^λ. Direct check.
3. **E3** `Primitives/symmetric-key-encryption.md:138`. Imprecise. The CCA
   triviality example queries O_b(0, 1), but 0 and 1 need not be in M, and the
   two messages must have equal length. The fix is to use any two distinct
   equal-length messages. Direct check.
4. **E4** `Reductions/prf-to-mac-gpr14.md:27`. Imprecise. The page displays NMAC
   with k₂ as the outer key, then writes NMAC\_{k₁,k₂}, which elsewhere on the
   site (MAC page:159, `prf-to-mac-bel06.md:25`) means k₁ is the outer key. The
   fix is to write NMAC_f((k₁, k₂), m). Direct check.
5. **E5** `References/GK03 - On the (In)security of the Fiat-Shamir Paradigm.md:20`.
   Wrong. The "Abstract" is a paraphrase, and it calls the identification
   scheme secure in the ROM. The ID scheme is secure in the standard sense; it
   is its Fiat–Shamir signature that is insecure for every instantiation. The
   fix is the verbatim abstract. Source checked: eprint 2003/034 abstract.
6. **E6** `Glossary/generic-group-model.md:67`. Wrong. The line states as fact
   that every generic algorithm is algebraic, so the AGM is "strictly weaker".
   That is FKL18's claim, and KZ22 refute it under the standard formalizations.
   The line also contradicts the next sentence and
   `Barriers/no-agm-to-ggm-kz22.md`. Source checked: eprint abstracts 2022/210
   (KZ22) and JM24.
7. **E7** `References/MPZ20 - Unifying Generic Group Models.md:20`,
   `References/JS08 - On the Equivalence of Generic Group Models.md:20`, and
   `generic-group-model.md:39`. Imprecise. Both "abstracts" are paraphrases
   asserting a Shoup/Maurer separation that is not in the MPZ20 abstract, and a
   2008 abstract cannot cite MPZ20. Zha22's abstract presents the separation as
   its own new result. Line 39 relies on these paraphrases. Source checked:
   eprint 2020/996 and 2022/226 abstracts; MPZ20's body was not read.
8. **E8** `Complexity/bounded-error-quantum-polynomial-time.md:38`. Imprecise.
   "Grover's algorithm cannot be parallelized" is false. Zalka shows that K
   machines need about (π/4)√(N/K) sequential queries each, which is no better
   than splitting the search space. Source checked: arXiv quant-ph/9711070
   abstract.
9. **E9** `Assumptions/discrete-logarithm.md:93`. Unsourced. Polynomial-time
   elliptic-curve point counting is flagged "— standard", but it is Schoof's
   algorithm (1985). cryptobib has no entry for it, so the reference needs
   inline bibtex. Direct check against the folklore rule.
10. **E10** (uncertain) `bounded-error-quantum-polynomial-time.md:24`. Possibly
    misattributed. BL95 is cited for breaking RSA, but RSA falls to Shor97's
    factoring algorithm, and BL95 is needed only for elliptic-curve groups.
    Whether BL95's hidden-linear-function theorem also covers order finding is
    pending (BL95 is unreachable).
11. **E11** `Barriers/no-owp-to-ke-ir89.md:33`. Wrong. The page says "BM09
    reduce both to O(ℓ²)". BM09 prove O(ℓ²) only for random oracles. Their
    random-permutation claim (v1–v2) was replaced in v3 by O(ℓ⁴), obtained
    through IR89's translation of m queries into O(m²). Source checked: arXiv
    0801.3669 v1–v4, including the v3 "Correction of error".
12. **E12** `Barriers/no-rom-to-ke-hmo-19.md:26` and
    `Glossary/black-box-separations.md:68, 72`. Imprecise. IR89's bound is
    O(m⁶ log m), with m the larger of ℓ and the number of rounds, not Õ(ℓ⁶).
    The Õ(ℓ¹²) random-permutation figure carries the same m. Source checked:
    BM09 footnote 3 (v3, v4).
13. **E13** `Assumptions/decisional-diffie-hellman.md:75`. Imprecise and
    unsourced; this is the L16.4 answer. The bullet makes Pohlig–Hellman on
    smooth-order groups the reason DDH is assumed only in prime-order groups,
    and it is uncited (PH78 exists). DDH fails whenever the group order p has a
    prime factor r ≤ poly(λ), smooth or not, and even when DLOG is hard. Raise
    the tuple to the power p/r, recover x, y, z mod r by exhaustive search, and
    test z ≡ xy (mod r); the advantage is 1 − 1/r. For every odd prime P and
    generator g of $\mathbb{Z}_P^*$, (g^x / P) = (−1)^x, so the Legendre symbols
    of the tuple give x, y, z mod 2. Real tuples always pass and random ones pass
    with probability 1/2, so the advantage is 1/2. This holds for safe primes
    too, whose order 2q is not smooth. "prime-order subgroups" in the bullet
    should be "prime-power subgroups". `ggm-to-ddh-sho97.md:32` links here for
    this distinguisher. The remedy is to use groups whose order has no small
    prime factor, typically a prime-order subgroup such as QR_P for P = 2q + 1.
    Direct check (redone by hand).
14. **E14** `Reductions/cdh-to-non-interactive-key-exchange-dh76.md:26`.
    Misattributed. The protocol whose key is the Goldreich–Levin bit of g^{ab}
    is cited to DH76 (1976), but the GL bit is from 1989, and DH76 uses g^{ab}
    itself as the key. The fix is "the DH76 protocol with its key replaced by a
    GL bit — folklore". Direct check (chronology).
15. **E15** `Reductions/ddh-to-pke-elgamal85.md:15` and
    `Reductions/ddh-to-partially-homomorphic-encryption-phe-elgamal85.md:15`.
    Imprecise. `security-loss` says "advantage-preserving", but under the site's
    |2Pr − 1| normalization the sketched reduction gives
    Adv^ddh = Adv^cpa / 2, so the loss is a factor 2. Direct check (redone by
    hand). Other pages carrying the same string were not checked.
16. **E16** `Assumptions/learning-with-errors.md:104`. Imprecise. The
    easy-direction bound needs q ≥ 8: at q = 4, uniform u passes the interval
    test with probability about 1/2 for every m. The reduction page states the
    condition. Direct check.
17. **E17** `learning-with-errors.md:126`. Imprecise. The bullet attributes to
    Reg05 the worst-case hardness of decision LWE at any modulus. Reg05 reaches
    decision only for prime q ≤ poly(n) (Lemmas 4.2 and 4.4); search holds for
    any q. Source checked: arXiv 2401.03703v1 §2, Lemma 4.2, §5.
18. **E18** `References/Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography.md:20`.
    Misattributed. The "Abstract" is not Regev's: it adds a retrospective
    sentence on LWE's later role. The fix is the verbatim abstract. Source
    checked: arXiv 2401.03703 abstract.
19. **E19** `Primitives/key-encapsulation-mechanism.md:84`,
    `Reductions/module-lwe-to-kem.md:24`, `learning-with-errors.md:251`, and
    `References/LS15 - …md:18`. Unsourced. The standardization claim (ML-KEM,
    FIPS 203) is uncited, and no reference page exists. The key must match the
    lint pattern `^[A-Za-z][A-Za-z+]*\d{2}[a-z]?$`, so NIST24, not FIPS203.
    Direct check; FIPS 203 could not be read here.
20. **E20** `Reductions/rsa-to-ind-cca-pke-oaep-fops01.md:24` and
    `key-encapsulation-mechanism.md:88`. Imprecise. The equivalence of
    partial-domain and full one-wayness for RSA is stated without condition. It
    is false when k − k₀ = O(log k), where partial-domain inversion succeeds by
    guessing, and the lattice step needs roughly k > 2k₀. Direct check. The
    FOPS01 abstract states the equivalence unconditionally, so the exact
    condition is pending a read of FOPS01's lemma.
21. **E21** `key-encapsulation-mechanism.md:74`. Unsourced. The
    CTR-as-DEM bit-flip counterexample has no citation and no "— standard";
    HHK10 attaches only to the next clause. Direct check.
22. **E22** `Reductions/hash-function-and-hash-based-signatures-to-ds-mer89.md:23`.
    Wrong. A static Merkle tree over 2^h one-time keys, computed by an efficient
    KeyGen, forces 2^h ≤ poly(λ). The result is a stateful 2^h-time scheme,
    while the edge concludes unbounded `ds`. Direct check. Whether Mer89 itself
    builds the tree on demand, which would give `ds`, is pending. Review round 2
    (`.review/rounds/2.json`) deliberately retargeted XMSS to `ds`, so this needs
    your decision (see below).
23. **E23** `Reductions/hash-function-to-hash-based-signatures.md:23`. Wrong.
    XMSS with height H signs at most 2^H messages, yet the Statement claims
    EUF-CMA with no query bound and the edge concludes `ds`. Direct check; the
    BDH11 abstract states no bound.
24. **E24** `Folklore/forking-lemma.md:62`. Imprecise. The line presents ID ⇒ DS
    as an instance of the PS96 forking proof. That edge is AABN02's, whose proof
    is a straight-line reduction to passive impersonation without forking.
    Direct check.
25. **E25** `Reductions/owf-to-uowhf-rom90.md:28` and
    `Reductions/hash-function-to-ds.md:33`. Imprecise. The first says HHR+10 has
    "substantially shorter keys and output", but its abstract says only "better
    efficiency and security". The second says Rompel gives the proof "only in
    outline", but KK05's abstract says the STOC paper contains errors and no
    complete proof. Source checked: abstracts only.

Smaller items for the editor and reference-fixer lanes:

- The `Zal97` frontmatter has venue arXiv and date 1997-11-26, but its own bibtex says Phys. Rev. A 60 (1999).
- `decisional-diffie-hellman.md:57` and `:59` repeat one argument.
- `TODO_SUMMARY.md` line 26 is stale: the Sha71, Adl79 and Sch93 stubs exist.
- `generic-group-model.md:39` calls Zha22's model "a type-safe variant of Maurer's", but Maurer's model is the type-safe one.
- `.fact-check/queue.json` was last updated 2026-08-21. Its bot-flagged findings on OWP, TDP, GGM and KEM describe text that has since been fixed.

## Your observations, checked

| Observation                                                                         | Verdict                      | Evidence                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authenticated-encryption, key-exchange, merkle-puzzles, commitment-scheme are stubs | Outdated                     | All four are `status: draft`, filled in Nov 17–20. AE, KE and Merkle puzzles are usable drafts with games (rows L10.3, L15.1, L15.3).                                                         |
| one-way-permutation, trapdoor-permutation are stubs                                 | Confirmed                    | OWP already meets the lint primitive contract and lacks only `# Variations`. TDP lacks a one-wayness game (row L21.3).                                                                        |
| switching-lemma is marked stub but has a proof                                      | Confirmed                    | The statement and coupling proof are correct (row L07.3). The `folklore` type has no required sections, so the page can be draft.                                                             |
| No page mentions HMAC                                                               | Refuted                      | `message-authentication-code.md:159–160` (NMAC/HMAC), `prf-to-mac-bel06`, `prf-to-mac-gpr14`, `indifferentiability.md:49`. The coverage is thin (row L11.5).                                  |
| … length extension                                                                  | Partly true                  | Mentioned only as the reason MD is not indifferentiable (`indifferentiability.md:49`). The attack on H(k‖m) is absent.                                                                        |
| … hashed ElGamal                                                                    | Confirmed                    | The term appears only in the FPS20 reference abstract.                                                                                                                                        |
| … KEM combiners, Floyd, Arora–Ge                                                    | Confirmed                    | Zero occurrences.                                                                                                                                                                             |
| … Bleichenbacher                                                                    | Partly true                  | One cited sentence in `rsa-assumption.md#attacks` (Ble98).                                                                                                                                    |
| CBC-MAC, block-cipher modes, perfect secrecy are thin                               | Confirmed, and worse for two | CBC-MAC is covered for fixed length but thin on its fixes. CBC encryption and ECB are missing, and only CTR is covered. Perfect secrecy and Shannon's bound are missing.                      |
| Goldreich–Levin is not named on any page                                            | Refuted                      | It is named on 15 pages outside `References/`, including `Glossary/hardcore-predicate.md` § Goldreich–Levin theorem (alias "Goldreich-Levin theorem"), and it is the `via` of six reductions. |
| DDH page says DDH fails in $\mathbb{Z}_P^*$ (Legendre)                              | It does not                  | See E13 and row L16.4.                                                                                                                                                                        |
| LPR11, ePrint 2010/613                                                              | Key wrong                    | The paper is Lindner–Peikert, so the key is LP11b (row L18.6).                                                                                                                                |
| GHP18, ePrint 2018/024                                                              | Confirmed                    | Row L24.2.                                                                                                                                                                                    |
| HHK17, ePrint 2017/604                                                              | Consistent                   | `HHK17` exists with cryptobib `TCC:HofHovKil17`. The eprint number was not rechecked this round.                                                                                              |

No `.fact-check/queue.json` entry is `human_verified` (59 `bot_flagged`, 30
`unreviewed`), so no edit in Phase 2 needs a `stale` flip unless that changes.

## Table 2: candidate Lean targets

The join keys are the page `id` and, where one exists, the variant id. None of
these needs a new id. The last column lists what to settle before formalizing,
with line numbers at `305cf1d`. Formalizing a concrete version first is easiest:
a fixed group, or a fixed λ with Adv ≤ ε.

| Target                                 | Page § (anchor)                                    | `id`             | Variant id                                             | Settle first                                                                                                                                                                                                |
| -------------------------------------- | -------------------------------------------------- | ---------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PRG                                    | `pseudorandom-generator.md#pseudorandomness`       | `prg`            | — (page id)                                            | S and R are not indexed by λ (:21); fix S*λ = {0,1}^λ, R*λ = {0,1}^{m(λ)}, m > λ. The next-bit game's [m] = {1..m} clashes with [p] = {0..p−1} elsewhere.                                                   |
| PRF                                    | `pseudorandom-function.md#security`                | `prf`            | — (page id)                                            | The Syntax TODO (:33): D and R are unquantified, so a polynomial-size \|D\| makes the notion unconditional. Proposal: D_λ = {0,1}^{ℓ(λ)} with ℓ = ω(log λ), and \|R\| ≥ 2. Funcs(D,R) needs finite D and R. |
| PRP / strong PRP                       | `pseudorandom-permutation.md#security`             | `prp`            | `strong-pseudorandom-permutation` (`#strong-security`) | Same domain issue as the PRF, with no TODO on this page (:20, :100). The PRP ⇒ PRF switching bound is a good concrete exercise.                                                                             |
| CPA security, SKE                      | `symmetric-key-encryption.md#cpa-security`         | `ske`            | `cpa-security`                                         | M ⊆ {0,1}\* is only implicit (:24). The correctness and message-pair conditions (:35) belong in the structure. The IND$ variant `ind-dollar-cpa-security` sits at anchor `#ind-cpa-security`.               |
| CCA security, SKE                      | `symmetric-key-encryption.md#cca-security`         | `ske`            | `cca-secure-symmetric-key-encryption`                  | The challenge restriction is admissibility only, not enforced by the game (:121–127); choose a restricted adversary or ⊥ answers. E3 is at :138.                                                            |
| CPA security, PKE                      | `public-key-encryption.md#cpa-security`            | `pke`            | `pke-cpa-security`                                     | M may depend on pk (:32): use a dependent type or restrict to M_λ. KeyGen outputs (sk, pk) here but (pk, sk) on the KEM page. ElGamal concludes `pke`, not `pke-cpa-security` (TODO 519).                   |
| CCA security, PKE                      | `public-key-encryption.md#cca-security`            | `pke`            | `pke-cca2-security`                                    | The phase-2 restriction is admissibility only. CCA1 (`pke-cca1-security`) has no game.                                                                                                                      |
| EUF-CMA, MAC                           | `message-authentication-code.md#unforgeability`    | `mac`            | — (page id; strong: `suf-cma-mac`)                     | The message-space TODO (:32) has the same flaw as the PRF. The site calls the notion UF-CMA (`\ufcma`).                                                                                                     |
| EUF-CMA, signatures                    | `digital-signature.md#existential-unforgeability`  | `ds`             | — (page id)                                            | Correctness quantifies over m before the keys, although M may depend on vk (:57 vs :156); restrict to M_λ.                                                                                                  |
| KEM-CPA                                | `key-encapsulation-mechanism.md#ind-cpa-kem`       | `kem`            | `ind-cpa-kem`                                          | It has no game of its own (it reuses Game^cca, :80), so define one. There is no `\KEM` macro (:48).                                                                                                         |
| DL                                     | `discrete-logarithm.md#assumption`                 | `dlog`           | `prime-order-dlog`                                     | GrGen is informal (:30–34). [p] is used before it is defined (:42 vs :119). Most edges consume `prime-order-dlog`.                                                                                          |
| CDH                                    | `computational-diffie-hellman.md#assumption`       | `cdh`            | `prime-order-cdh`                                      | GrGen as for DL. [p] is undefined on this page. Random vs fixed generator is left open (:55–57). CDH ⇒ DL and DDH ⇒ CDH make good first exercises.                                                          |
| DDH                                    | `decisional-diffie-hellman.md#assumption`          | `ddh`            | `prime-order-ddh`                                      | GrGen as for DL; p ≥ 2 is needed. ElGamal is the natural capstone (after E15 and TODO 519).                                                                                                                 |
| decision-LWE                           | `learning-with-errors.md#decision-lwe`             | `lwe`            | `decision-lwe`                                         | e ← χ^m is written with `\getsr` (:53). The object's quantifiers (:70: prime q ≤ poly(n), αq ≥ 2√n, every m = poly) must be encoded exactly. χ is not indexed by λ. Most edges use the page id `lwe`.       |
| _Extra:_ one-time SKE / OTP            | `symmetric-key-encryption.md#one-time-security`    | `ske`            | — (page id)                                            | The OTP is not written out, and perfect secrecy is undefined (L03).                                                                                                                                         |
| _Extra:_ OWF                           | `hash-function.md#preimage-resistance-one-wayness` | `hash-function`  | `owf`                                                  | Keyed family; the textbook OWF is the singleton-key case.                                                                                                                                                   |
| _Extra:_ CRHF                          | `hash-function.md#collision-resistance`            | `hash-function`  | `crhf`                                                 | None. Keep it keyed.                                                                                                                                                                                        |
| _Extra:_ one-time signatures (Lamport) | `digital-signature.md#one-time-signatures`         | `ds`             | `one-time-signature`                                   | It has no game (L20.3). The order is "for every polynomial ℓ, there is a scheme".                                                                                                                           |
| _Extra:_ Schnorr special soundness     | `Glossary/sigma-protocol.md#examples`              | `sigma-protocol` | — (page id)                                            | State it group-theoretically: C ⊆ ℤ_p makes e − e′ invertible.                                                                                                                                              |
| _Extra:_ search LWE                    | `learning-with-errors.md#search-lwe`               | `lwe`            | `search-lwe`                                           | Same `\getsr` issue (:81).                                                                                                                                                                                  |

## List 3: peripheral stubs to leave for students

These are adjacent to course topics and self-contained. Phase 2 will not touch
them; each would make a well-defined extra-credit task.

Stub pages:

- `Assumptions/shortest-vector-problem.md` (`gapsvp`), next to the Regev05 connection. Move the definition under `## Assumption`, then add `## Known Results` (NP-hardness: Ajt98, Mic01, Kho05) and `# Attacks` (LLL, BKZ, enumeration, sieving).
- `Assumptions/shortest-independent-vectors-problem.md` (`sivp`), the same exercise for SIVP. The Blömer–Seifert key needs a suffix, since BS99 is taken.
- `Assumptions/module-lattice-problems.md` (`worst-case-module-lattice-problems`), next to ML-KEM. Define Module-SVP (TODO), add the `## Assumption` heading and an Attacks section.
- `Primitives/zero-knowledge-proof.md` (`zkp`), next to Schnorr and Fiat–Shamir. Write the soundness and ZK games.
- `Primitives/non-interactive-zero-knowledge.md` (`nizk`), next to Fiat–Shamir in the ROM. Resolve the zero-knowledge TODO; then it can be draft.
- `Primitives/secret-sharing.md` (`ss`), next to the OTP and Shannon's bound. Write the perfect-privacy game, Shamir's proof and the KGH83 share-size bound.
- `Glossary/random-oracle-hypothesis.md`, next to the ROM and CGH. State BG81 precisely and contrast it with CGH98.

TODO sections on draft pages:

- `hash-function.md#distributional-collision-resistance`: definition and game (KY18).
- `digital-signature.md#edl-signatures`: GJ03 salt length and tight loss.
- `generic-group-model.md` (variant `structured-generic-group-model`): CHW26 structure oracle. Research-level.
- `Assumptions/ntru.md` (variant `ntru-ow-cpa`): HRSS17 scheme and OW-CPA game, then retarget `ntru-to-kem`.
- `Primitives/password-authenticated-key-exchange.md#asymmetric-pake`: GMR06 aPAKE functionality.
- `Complexity/randomized-polynomial-time.md`: two TODO citations (IW97, Miller and Rabin, AKS04). Light; `bounded-error-probabilistic-polynomial-time.md` can be bundled with it.
- `Primitives/distributed-key-generation.md`: GJKR07 secrecy game. It is draft without a game, so it is currently mislabelled.
- `Primitives/hash-proof-system.md`: GL03 smooth projective hashing variant.

Not on this list because Phase 2 needs them:

- the switching lemma;
- one-way permutations;
- trapdoor permutations;
- the PRF and MAC domain TODOs;
- the `ds-arbitrary-length` producer.

`Primitives/homomorphic-encryption.md` is marked stub but meets the draft
contract. It is peripheral, so I leave it unless you want it relabelled.

## Phase 2 plan (for review)

One commit series per area, in the order you gave. L22 (Shor, Grover, generic
attacks) is not in your area list; I put it with groups and DH. Proposed new
variant ids are in backticks. No existing `id` or variant name changes.

1. **Symmetric (L03–L11).**
   - Write `### Perfect secrecy` (`perfectly-secret-ske`): Shannon secrecy ⇔ perfect indistinguishability, the OTP, and Shannon's bound (Sha49).
   - Add the deterministic-Enc attack, and real-or-random CPA (`ror-cpa-security`) with its BDJR97 edges.
   - Add a variant for one-time SKE with \|m\| > \|k\| and the PRG-cipher edge into it.
   - On the PRP page: the "block cipher" alias and sentence, a Feistel section with the 1-, 2- and 3-round attacks, and a 3-round-is-not-strong barrier.
   - Add MITM on double encryption as cited prose.
   - Add CBC, with an edge from PRP, and barriers for a predictable IV and for ECB.
   - Add barriers for CPA ⇏ CCA, CTR malleability, MtE and E&M, plus the AE all-in-one game.
   - On the MAC page: the EUF-CMA naming, BGM04, a UF ⇏ SUF barrier, the CBC-MAC variable-length barrier, and ECBC/CMAC.
   - Fix the switching lemma's citations and make it draft; add `# Variations` to OWP and make it draft.
   - Fix E1–E4 and the PRF/PRP/MAC domain TODOs.
2. **Hashing and ROM (L12).**
   - Add second-preimage resistance (`second-preimage-resistance`) with its RS04 edges.
   - Write `Folklore/birthday-bound.md`, covering the lemma, the generic attack, Floyd and vOW.
   - Add Merkle–Damgård, `arbitrary-length-crhf` and a Dam89 edge (plus Merkle's paper).
   - Add the secret-prefix forgery to MAC `# Other results`.
   - Add a ROM ⇒ PRF page for H(k‖m).
   - On the ROM page: an oracle block and programmability/observability sections.
   - Add CGH98 barrier pages and fix E5.
3. **Groups and DH (L13–L17, L22).**
   - Write a glossary page for group generators and elliptic curves at definition level.
   - Add a GGM game, and expand BSGS and Pohlig–Hellman.
   - Rewrite DDH `# Attacks` (E13), and add CDH `# Attacks`.
   - Add a one-way KE variant (`one-way-key-exchange`) with CDH ⇒ it, and hashed DH in the ROM.
   - Add textbook RSA and the deterministic-PKE sentence.
   - Add a KEM-CPA game and hashed ElGamal (CDH ⇒ `ind-cpa-kem`, ROM).
   - For L22: a Shor94 reference, a Grover section with BBBV97, and a generic-attacks page.
   - Fix E6–E10 and E13–E15.
4. **Lattices (L18).**
   - Add `normal-form-lwe` with the ACPS09 edge, and notes on general-modulus search-to-decision.
   - Add the Regev scheme in pseudocode, then `LP11b` with Lindner–Peikert encryption and its correctness bound.
   - Add a `NIST24` (FIPS 203) reference, and Arora–Ge in `# Attacks`.
   - Fix E16–E19.
5. **CCA and KEMs (L19, L24).**
   - Add a one-time CCA DEM variant with the CS03 edge, a CCA1 game, and the NY90/RS91 citations.
   - Add the HHK17 T and U^⊥̸ steps (`pke-ow-cpa`, `pke-ow-pca`).
   - Write an OAEP section (E20), a Sho01a barrier and a Bleichenbacher paragraph.
   - Write a KEM-combiners section: XOR is CPA-preserving (edge) but not CCA-preserving (barrier), hashed combiners (GHP18), and X25519MLKEM768.
   - Fix E21.
6. **Signatures (L20–L21).**
   - Add `suf-cma-ds`, a `ds-fixed-length` variant with the hash-and-sign edge, and an OTS game.
   - Add a bounded stateful node and retarget Mer89 and XMSS (E22, E23).
   - Add the NY89 1-1 OWF edge, fix the Rompel notes (E25), and write an SLH-DSA subsection.
   - Add textbook RSA signatures and Cor00.
   - Fill the TDP page and make it draft.
   - Write Fiat–Shamir signatures as Sign/Vrfy, add EdDSA nonces and an FS-with-aborts section.
   - Fix E24.

Every new claim will cite a reference page that has a cryptobib key or bibtex.
Anything I cannot check against the paper goes to `TODO_SUMMARY.md` rather than
the page.
