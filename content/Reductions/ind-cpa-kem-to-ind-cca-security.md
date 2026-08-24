---
type: reduction
status: stub
title: "IND-CPA KEM ⇒ IND-CCA security"
aliases: []
id: red-ind-cpa-kem-to-ind-cca-security
kind: implication
hypotheses: [ind-cpa-kem]
conclusion: ind-cca-kem
class: unstated
model: rom
source: folklore
security-loss: ""
---

# IND-CPA KEM ⇒ IND-CCA security

[[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]] implies [[key-encapsulation-mechanism#ind-cca-security|IND-CCA security]].

## Statement

Migrated verbatim from [[key-encapsulation-mechanism]]:

> Kyber is an IND-CCA KEM based on [[learning-with-errors|Module LWE]] (rank-3 module over a polynomial ring). Standardized by NIST as ML-KEM (FIPS 203). Uses the Fujisaki-Okamoto transform to achieve IND-CCA security from an IND-CPA base scheme.

Migrated verbatim from [[key-encapsulation-mechanism]] § Other results:

> - The Fujisaki-Okamoto (FO) transform converts any IND-CPA KEM to an IND-CCA KEM in the random oracle model; used in all NIST PQC KEM standards (Kyber, NTRU) — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- MODEL IS LOAD-BEARING: the ROM requirement is not stated on this line at all (only at line 82); dropping model:'rom' would assert a standard-model IND-CCA lift that is not known.
- Uncited (no FO99 reference page).
- ind-cpa-kem and ind-cca-kem are security levels of the same page, so both endpoints collapse to key-encapsulation-mechanism.
- Composite: Module-LWE => IND-CPA base scheme, then Fujisaki-Okamoto => IND-CCA KEM in the ROM. Must be split.
- Wikilink `[[learning-with-errors|Module LWE]]` points Module-LWE at the plain LWE page; the LWE page's aliases cover LWE/RLWE but not MLWE, so a distinct assumption is silently conflated.
- No citation for either link (no FO99 or Kyber reference page).
- The ROM requirement of the FO transform is not stated on this line.
- Labelled '- standard' but the FO transform is attributable (FO99 / Hofheinz-Hoevelmanns-Kiltz 2017); folklore exception misused.
- SUSPECT: the FO transform is normally stated as converting a OW-CPA / IND-CPA _PKE_ into an IND-CCA _KEM_; 'converts any IND-CPA KEM to an IND-CCA KEM' is a non-standard statement of it. Report only.
- 'used in all NIST PQC KEM standards (Kyber, NTRU)' - NTRU was not standardized by NIST; only ML-KEM (Kyber) was. Factual slip, report only.
