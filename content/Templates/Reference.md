---
type: reference
status: stub
# title is the CITATION KEY (e.g. "AMR25"), NOT the paper title. The paper
# title lives in the filename ("KEY - Full Title.md") and in the H1 below.
title: "KEY"
source: https://eprint.iacr.org/YYYY/NNN
authors: First Author, Second Author
venue: Venue YYYY
published: YYYY-MM-DD
aliases:
  - KEY
# Exactly one of cryptobib_key / bibtex.
# cryptobib_key: the paper's cryptobib key, e.g. C:BonFra01, EC:Couteau19,
# EPRINT:BBBPR23. The build looks it up in vendor/cryptobib/crypto.bib and
# renders a "Copy BibTeX" button. Find keys at https://cryptobib.di.ens.fr/
# or via `git grep "title.*<paper title>" vendor/cryptobib/crypto.bib`.
cryptobib_key:
# bibtex: inline BibTeX (YAML block scalar), for theses, blog posts, or papers
# cryptobib has not yet imported. Add `cryptobib_pending: true` if cryptobib is
# expected to pick the paper up eventually.
# bibtex: |
#   @misc{Foo24,
#     author = {Some Author},
#     title  = {...},
#     year   = {2024},
#     url    = {https://...},
#   }
---

# [KEY] Full Paper Title

**Authors:** First Author, Second Author | **Venue:** Venue YYYY | [Source](https://eprint.iacr.org/YYYY/NNN)

## Abstract

The paper's verbatim abstract. Editorial commentary goes under a separate `# Notes` heading, never here.
