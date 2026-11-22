---
type: reference
status: stub
title: "BDK+20"
source: https://csrc.nist.gov/Projects/post-quantum-cryptography/post-quantum-cryptography-standardization/round-3-submissions
authors: Shi Bai, Léo Ducas, Eike Kiltz, Tancrède Lepoint, Vadim Lyubashevsky, Peter Schwabe, Gregor Seiler, Damien Stehlé
venue: NIST Post-Quantum Cryptography Standardization, Round 3 submission
published: 2020-10-01
aliases:
  - BDK+20
bibtex: |
  @misc{BDK+20,
    author       = {Shi Bai and L{\'e}o Ducas and Eike Kiltz and Tancr{\`e}de Lepoint and Vadim Lyubashevsky and Peter Schwabe and Gregor Seiler and Damien Stehl{\'e}},
    title        = {{CRYSTALS-Dilithium}: Algorithm Specifications and Supporting Documentation},
    howpublished = {Submission to the NIST Post-Quantum Cryptography Standardization Process, Round 3},
    year         = {2020},
    month        = oct,
    url          = {https://csrc.nist.gov/Projects/post-quantum-cryptography/post-quantum-cryptography-standardization/round-3-submissions},
  }
---

# [BDK+20] CRYSTALS-Dilithium: Algorithm Specifications and Supporting Documentation

**Authors:** Shi Bai, Léo Ducas, Eike Kiltz, Tancrède Lepoint, Vadim Lyubashevsky, Peter Schwabe, Gregor Seiler, Damien Stehlé | **Venue:** NIST Post-Quantum Cryptography Standardization, Round 3 submission | [Source](https://csrc.nist.gov/Projects/post-quantum-cryptography/post-quantum-cryptography-standardization/round-3-submissions)

# Notes

The Dilithium specification of 1 October 2020, file `Supporting_Documentation/dilithium_nist.pdf` of the Dilithium round-3 submission package; it has no abstract. FIPS 204 cites it as version 3 of CRYSTALS-Dilithium and derives ML-DSA from version 3.1 ([[NIST24b - Module-Lattice-Based Digital Signature Standard|NIST24b]], reference [5] and Appendix D). Section 6 states the security reductions: SUF-CMA security in the classical random-oracle model from Module LWE and Module-SIS, by a non-tight reduction that uses the forking lemma, and the quantum random-oracle bound of [[KLS18 - A Concrete Treatment of Fiat-Shamir Signatures in the Quantum Random-Oracle Model|KLS18]] in terms of Module LWE, SelfTargetMSIS and Module-SIS (Section 6.2, Eq. (6)).
