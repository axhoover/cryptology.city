# Content review batches

Each batch covers a small, named group of pages and the directly related
definitions or proofs needed to check them. Its report records the starting
commit, sections examined, evidence, corrections, and unresolved questions.
Passing lint or a build is not evidence that a mathematical claim is correct.

Evidence labels:

- **Direct check:** the definition or argument was checked by constructing a
  reduction, counterexample, or proof. This does not verify its attribution.
- **Source checked:** the relevant primary-source passage was actually read;
  the report identifies the version and section or theorem. This is not a
  claim to have verified the entire paper.
- **Pending:** missing content, uncertain claims, or unavailable sources remain.

No automated review marks a page `complete` or `human_verified`. These reports
are separate from the monthly pipeline: they do not consume maintainer
decisions, advance `.review/state.json`, or archive inbox items. A later round
can use the reports to reconcile duplicate findings.

| Batch                                     | Scope                                                                                                            | Status                                                      |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [1](2026-10-15-encryption-and-hybrids.md) | Public-key encryption, symmetric-key encryption, hybrid argument, switching lemma; semantic-security equivalence | Direct checks recorded; primary-source verification blocked |

## Next batches

Finish batch 1's pending source checks before calling it source reviewed.
Then take four to six core pages at a time, including their relevant reduction
pages and reference passages:

1. Pseudorandom generators, functions, permutations, and one-way functions.
2. Digital signatures, MACs, commitments, and oblivious transfer.
3. Discrete logarithms, CDH/DDH, RSA, factoring, and quadratic residuosity.
4. LWE/LPN and their principal encryption reductions.

Split a batch further when a theorem or proof needs more work. These are
proposed scopes, not scheduled jobs or a claim of coverage of the rest of the
repository. Reference abstracts and newer constructions need their own source
checks; verifying a citation's metadata does not verify its abstract or the
theorem attributed to it.
