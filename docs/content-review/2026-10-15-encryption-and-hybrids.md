# Batch 1: encryption definitions and hybrid arguments

Date: 2026-10-15. Starting commit:
`ccb229bb56aee3ab480f0ab7a11c8caa4d576a44` on `fix/site-review`.
This batch follows [PR #41](https://github.com/axhoover/cryptology.city/pull/41),
which merged during the review. The patch is based on its merge commit
`272b7d2ac7c4c9eb11b04e8be97f8e56eefb818b`, on `review/content-batch-1`.

**Status: direct mathematical checks recorded; primary-source verification
blocked.** None of the source texts below was retrieved or read in this batch.
This is a bounded review of four core pages and one associated equivalence
proof, not a completed cryptographic audit.

## Coverage

| Page                                                 | Sections examined                                                                                                      | Result and evidence                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content/Primitives/public-key-encryption.md`        | Syntax, correctness, CPA, semantic security, CCA, CCA1; identified the key-hiding TODO                                 | Direct check: CPA/CCA message admissibility and challenge restrictions match their games. Corrected the key-independent semantic-security formulation. CCA1 strictness attribution and the missing key-hiding definition remain pending.                                                           |
| `content/Primitives/symmetric-key-encryption.md`     | Syntax, correctness, CPA, IND$-CPA, CCA                                                                                | Direct check: a fixed hidden bit and fresh encryption coins are needed across oracle calls; made them explicit. Made the IND$ query domain and ciphertext-length assumptions explicit. Checked the IND$ ⇒ CPA reduction and constant-bit counterexample below.                                     |
| `content/Folklore/hybrid-argument.md`                | Template, all four applications, statistical/computational distinction, limitations                                    | Direct check: triangle inequality for a fixed distinguisher, common negligible bound, PRG output hybrids, GGM prefix consistency, adaptive encryption challenges, and efficiently samplable independent instances. Clarified endpoints, parameters, and notation. GGM attribution remains pending. |
| `content/Folklore/switching-lemma.md`                | Ordinary switching bound and its oracle model; streaming paragraph compared with the existing inbox and reduction page | Direct check: added the exact birthday upper bound and a coupling proof for adaptive forward queries. The streaming theorem and Din20 abstract remain pending and unchanged.                                                                                                                       |
| `content/Reductions/cpa-security-to-cpa-security.md` | Statement, both proof directions, reduction interface                                                                  | Direct check: updated both directions to the revised semantic-security definition, including valid-message sampling and equal-message branches. Historical source verification remains pending.                                                                                                    |

The “Other results” lists and generated “Participates in” sections are navigation
to further theorems. Their presence on a reviewed page does **not** mean all
linked constructions, parameters, or separations were reviewed. No generated
relation region was edited.

## Corrections and direct evidence

### Key-dependent semantic security

The old distribution was fixed independently of the public key, but the IND-CPA
adversary chooses messages after seeing the key. These are different models.
To see the gap, augment a secure bitstring-message scheme's public key with an
independent uniform lambda-bit string `s`. Reveal the plaintext, with a
distinguishable tag, only when it equals `s`; encrypt all other messages normally.
For a message distribution independent of the key, the exceptional event has
probability at most `2^-lambda`. The old semantic experiment changes negligibly,
yet an IND-CPA adversary can choose `s` and a distinct same-length message and
distinguish the tag.

The revised definition lets the adversary choose an efficient message sampler,
an efficient target function, and auxiliary state after seeing the public key.
Both the adversary and simulator receive the descriptions and state, but not
the fresh coins selecting the target plaintext. Each sampler has a fixed
message length within an experiment; that length may depend on the first stage.

For IND-CPA ⇒ semantic security, the simulator encrypts an independent sample
from the same sampler. A reduction samples the real target and independent
replacement, requests their left/right challenge, and tests the adversary's
prediction of the real target's function value. In the replacement world,
the challenge ciphertext is independent of the target given the shared state.
The two message lengths match, and the distinguishing gap is exactly the
semantic gap. This also avoids assuming `0^length` or `1^length` belongs to an
arbitrary message space: for example, neither belongs to `{01, 10}`.

For the converse, use a uniform draw from the IND-CPA adversary's chosen pair.
With distinct messages, the target predicate is balanced even conditioned on
the shared state. Any simulator succeeds with probability at most one half.
With equal messages the predicate is constant, so the semantic adversary
returns that constant directly; those branches have zero IND advantage. After
choosing the output orientation with positive advantage, the semantic
adversary's excess over the simulator is at least half the IND advantage.
The factor is due to the site's normalized `|2 Pr[win] - 1|` convention.

This is the key-dependent **efficient-sampler/efficient-target** formulation.
The report does not claim that it reproduces GM84 or MRS88's exact definitions,
quantifiers, or treatment of auxiliary information. Their attribution is
retained; checking their text remains pending. The proof replaces the old
key-independent formulation rather than asserting the two formulations are
equivalent.

This addresses the mathematical issue in inbox item
`ffr:content-error-15`; its monthly-pipeline disposition remains untouched.

### Symmetric encryption games

The CPA and CCA games use one hidden bit for the entire interaction. The
encryption oracle draws fresh coins on each call. In CCA, decrypting any
ciphertext already returned by the challenge oracle is forbidden; a query
before a future matching encryption output is not retroactively forbidden.
Correctness remains an explicitly parameterized probability over key
generation and encryption coins; it is not silently strengthened to hold for
every key.

The IND$ ideal oracle samples from all bitstrings of the specified ciphertext
length, not just valid ciphertexts. Its length is a deterministic function of
the security parameter and message length, and its query must be a valid
message. In the linked IND$ ⇒ CPA proof, replacing either side of an equal-length
challenge by this same ideal oracle gives the sum of two IND$ advantages.
Appending a fixed bit to a CPA-secure ciphertext preserves CPA security but
gives an IND$ distinguisher normalized advantage `1/2` from one query. These
checks support the existing reduction and counterexample; those pages were
read and needed no edit.

A browser assertion on the visible IND$ paragraph caught an unescaped dollar
sign in its opening label. The Markdown math parser paired it with later math
delimiters, turning ordinary prose into math and exposing raw TeX. KaTeX reported
no error because the accidental math was syntactically accepted. Escaped the
literal dollar sign in the heading and opening label; checked the visible
paragraph text as well as the absence of renderer errors.

### Hybrid arguments

The triangle inequality is applied to one fixed distinguisher's acceptance
probabilities. A polynomial number of transitions requires a common
negligible bound and efficient simulations; a separate claim about each fixed
index does not establish a uniform bound over a growing family.

In the PRG expansion, the seed at the changed step is uniform and hidden in
both adjacent hybrids. The challenge's seed half permits the reduction to
compute the suffix without knowing the challenge's input seed. The final
hybrid has independent uniform output blocks. For GGM, hybrids proceed from
the root downward, record nodes by input prefix, and use at most `q` expansions
at each of polynomially many levels. Repeated inputs must reuse the recorded
output. These observations check the outlined proof structure and `q * depth`
loss; they do not certify the full original GGM proof.

The multiple-encryption-challenge example requires a simulation of adaptive
queries: a reduction locally encrypts all but its selected challenge. In the
symmetric setting, single-challenge CPA must include an ordinary encryption
oracle; one-time security without that oracle is insufficient. The page's
example refers to IND-CPA, not one-time secrecy. For independent instances,
efficient sampling of the other real/ideal instances is explicitly required.

### Ordinary switching lemma

Couple the two forward oracles until a random-function output repeats on a
new input. On the jth distinct input this probability is `(j-1)/N`; unused
function outputs are also valid uniform unused permutation outputs. A union
bound gives `q(q-1)/(2N)`, capped at one. Repeated input queries create no new
collision opportunity, and the proof remains valid for adaptive inputs and
shared adversary coins. No inverse oracle is present.

A finite sanity check enumerated all 512 deterministic output rules on two
distinct-query transcripts over a three-element domain. The exact total
variation distance is `1/3`, attaining the birthday bound. This finite check
supports the small example only; the coupling argument proves the general case.

## Pending source and content checks

All attempted downloads returned proxy `403 Forbidden`, including an approved
execution attempt. No TLS checks were disabled. These URLs are retrieval
candidates, not verified mirrors or citations to passages actually read:

| Source | Attempted location                                          | Work still required                                                                                                                                       |
| ------ | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Din20  | <https://eprint.iacr.org/2019/413.pdf>                      | Read the theorem's memory/stream model and parameter restrictions; resolve the missing `log q` factor and restore abstract formulas from the actual text. |
| BDPR98 | <https://eprint.iacr.org/1998/021.pdf>                      | Check CPA/CCA1/CCA2 definitions and the strictness constructions and assumptions.                                                                         |
| BR06   | <https://eprint.iacr.org/2004/331.pdf>                      | Compare the switching proof with the paper's game-playing argument and conditioning caveat.                                                               |
| BDJR97 | <https://cseweb.ucsd.edu/~mihir/papers/sym-enc.pdf>         | Confirm author-hosted version and compare the symmetric-encryption game conventions.                                                                      |
| GGM86  | <https://www.wisdom.weizmann.ac.il/~oded/PSX/ggm.pdf>       | Confirm author-hosted version and check the full adaptive hybrid proof and parameters.                                                                    |
| Gol04  | <https://www.wisdom.weizmann.ac.il/~oded/PSBookFrag/enc.ps> | Locate the actual encryption chapter and check the key-dependent formulation; also obtain GM84/MRS88 for historical attribution.                          |

The streaming paragraph still claims `O(mq/N)`, whereas
`content/Reductions/prp-to-prf.md` and inbox item `ffr:content-error-17` give
`O(mq log(q)/N)`. Its reference abstract also has missing formulas. This is an
unresolved source-dependent finding, **not a passed check**. Do not close that
inbox item based on this batch. The key-hiding subsection remains a TODO.

Network-draft additions for these retrievals are `eprint.iacr.org`,
`cseweb.ucsd.edu`, and `www.wisdom.weizmann.ac.il`; they require the user to
review/save settings and publish the environment before activation.

## Mechanical validation

- Content lint: 877 pages, no errors or warnings; generated relations current.
- Unit tests: 269 passed; TypeScript and repository formatting checks passed.
- Production build: 877 input pages, 1,700 emitted files.
- Generated HTML audit: 1,682 HTML files, no broken internal links/anchors,
  missing local script/image assets, or KaTeX error nodes.
- Browser checks on all five edited pages: expected visible prose, rendered
  encryption games, and no JavaScript or KaTeX errors. All 75 published
  pseudocode blocks also passed the actual browser renderer.

Optional Google Fonts, cdnjs styles, and analytics requests were blocked in
browser checks. The IND$ paragraph was also inspected visually. These checks
detect repository and rendering failures, not mathematical correctness; the
dollar-sign error demonstrates why an empty renderer-error list alone is
insufficient.
