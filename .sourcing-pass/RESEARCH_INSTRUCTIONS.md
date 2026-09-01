# Research instructions — sourcing pass over cryptology.city reduction/barrier pages

You are researching a batch of reduction/barrier pages in the repo at
`/home/user/cryptology.city`. Each page is a hyperedge: a set of hypothesis
objects implying one conclusion object, of some reduction class. The pages were
mechanically migrated from prose and are underdetermined: most have
`class: unstated`, many have `source: folklore` (meaning "the prose carried no
citation"), and bodies consist of "Migrated verbatim" quotes.

Your job, per page: determine the real source(s), the reduction class and
model where the source makes them clear, and (for famous or straightforward
reductions) a sketch of how the reduction works. You produce a JSON research
file; a later stage verifies and applies it. **You must not edit any repo
file.** Write only your output JSON in the scratchpad.

## Read first (in the repo)

- `schema/reduction-classes.yaml` — the class vocabulary, its partial order,
  and the ORIENTATION note (hypotheses = primitive USED, conclusion =
  primitive BUILT). This file is the single source of truth. `black-box` and
  `non-black-box` are rejected values.
- The pages in your batch, fully, including their Notes sections.
- `.reductions/suspected-errors.json` — check whether any entry's
  `affectsEdges` contains your page's frontmatter `id`.

## Per-page procedure

### 1. Sanity-check the claim itself

Before sourcing, decide whether the stated edge is true as stated. The
migration recorded several inverted edges (e.g. a page claiming CDH ⇒ DDH).
Check the page's own Notes for `SUSPECTED` flags and the suspected-errors
file. Reason about direction yourself: for assumptions, "A ⇒ B" means "if A
is hard then B is hard". For primitives, "A ⇒ B" means "B can be built from
A". `kind: inclusion` means conclusion ⊇ hypothesis (e.g. `bpp-to-pspace`
with kind inclusion = BPP ⊆ PSPACE). `kind: equivalence` is both directions.

- If the claim is **false or inverted as stated** → `disposition: "wrong_claim"`,
  explain in `wrong_reason`, name the correct edge if obvious, and stop (no
  sources, no class). Do not source a false claim.
- If the claim is ambiguous/underspecified beyond repair (hypothesis not a
  well-defined object, qualifier undefined) → also `wrong_claim` with reason.

### 2. Provenance

Decide one of:

- **`folklore`** — the claim is genuinely folklore: routinely used, immediate,
  no attributable origin. Examples: DDH ⇒ CDH (a CDH solver breaks DDH by
  comparing), PRP ⇒ PRF up to birthday bound... careful — that one is
  attributable (PRP/PRF switching lemma, e.g. BR06 or IR88). The test: would a
  careful paper cite a specific work for this, or write "folklore"/"standard"?
  A named theorem (GGM, HILL, Impagliazzo–Rudich, Goldreich–Levin) is NEVER
  folklore. Trivial complexity containments (BPP ⊆ PSPACE) are folklore/
  textbook; named theorems (IP = PSPACE, Toda) are not.
- **`sourced`** — you found the canonical original paper. Also list papers
  that later improved or made the reduction concrete (tighter loss, simpler
  proof, remove a hypothesis), as `role: "improvement"` entries — at most 3,
  only genuinely notable ones.
- **`undetermined`** — you looked and cannot confidently attribute it. Honest
  and acceptable. Say what you tried in `flags`.

Rules for sources:

- **Never invent a citation.** Every source entry must be verified: either it
  already has a page in `content/References/` (the list of existing reference
  files is in `existing-refs.txt` next to this file — reuse the exact key), or
  you verified the paper's existence and bibliographic data on the web
  (eprint.iacr.org, DBLP, arXiv, publisher DOI). Record the URL you verified
  at. Use WebSearch/WebFetch. If you cannot verify it online, do not propose it.
- Citation keys: author-initial(s) + 2-digit year, e.g. `GGM86`, `HILL99`,
  `IR89`, `BCP14`. One author: first 3 letters of surname (`Sho97`, `Reg05`).
  Check `existing-refs.txt` for collisions; on a genuine collision with a
  different paper add a letter suffix (`SW25a`).
- If the page slug carries a paper suffix (e.g. `...-ggm86`), the page is
  about that paper's reduction; that paper is the `original` source.
- Distinguish the paper that first PROVED the result from surveys/textbooks
  that state it. Cite the original. A textbook (e.g. Goldreich's Foundations)
  is acceptable as `original` only when the result genuinely first appears
  there, or as the standard citable form of a folklore result — in that case
  prefer `disposition: folklore` and mention the textbook in `improvements_text`.
- Conference vs eprint years can differ; use the venue year in the key
  matching how the literature usually cites it (e.g. HILL99 for the SICOMP
  version). If the wiki already has a page for the paper under some key, that
  key wins.

### 3. Class

`class` values (from `schema/reduction-classes.yaml`): `fully-black-box`,
`semi-black-box`, `weakly-black-box`, `forall-exists-semi-black-box`,
`forall-exists-weakly-black-box`, `relativizing`, `free`, or the sentinel
`unstated`.

- **fully-black-box**: one fixed construction using the hypothesis primitive
  only as an oracle, plus one fixed security reduction using any adversary
  only as an oracle. This is what essentially all standard constructive
  crypto reductions achieve. Claim it only when you can point at the
  construction/proof shape as evidence: say in `class_justification` how the
  construction treats the hypothesis and how the reduction treats the
  adversary. If you know the construction well enough to sketch it, you
  usually know whether it is fully black-box.
- **free**: an implication proved unconditionally with no technique
  restriction. Use for proven complexity-class inclusions/equalities
  (BPP ⊆ PSPACE, IP = PSPACE) — this is the established convention in this
  repo. Also the right value when a source explicitly gives a non-black-box
  construction without classifying it further.
- The ∀∃ / semi / weakly notions: only when the source (or a follow-up like
  RTV04/BBF13 that classified it) explicitly places the reduction there.
- **unstated**: when you cannot honestly justify a class. This is fine. Do
  not guess. Recording a class the source does not support adds a false
  mathematical claim to the wiki — worse than leaving it unstated.
- For **barriers**, `class` is the class of reduction being RULED OUT. An
  oracle separation rules out `relativizing` (which also kills
  fully-black-box, per the partial order). A fully-black-box-specific
  impossibility rules out `fully-black-box`. A meta-theorem against ALL
  proofs (e.g. "no reduction at all unless X") rules out `free`. A
  generic-group/ROM lower bound rules out `free` in that model
  (class: free is scoped by the model axis — note the model in
  `model_justification`; barrier frontmatter has no model field, so put it
  in the statement text).

### 4. Model (reductions only)

`standard | rom | crs | generic-group | algebraic-group | quantum | other`.
Verify the current value against the source: a construction proven in the
random-oracle model must say `rom`; a CRS-based NIZK says `crs`; Shor is
`quantum`. Idealized models NEVER go in `class`.

### 5. Kind

Check `kind` (`implication | inclusion | equivalence`) matches the claim.
`inclusion`/`equivalence` take exactly one hypothesis. If the source proves an
equivalence but the page says implication (or vice versa), set
`kind_correct` to the right value and explain in `flags`. NOTE: a second page
for the converse direction may already exist — check
`content/Reductions/` for the inverse slug before proposing `equivalence`;
if both directions exist as separate pages, leave each as `implication`.

### 6. Statement

Write `statement`: 1–3 sentences for the page's `## Statement` section. House
style: formal, definition-first, no motivation, no "Note that", active voice.
Use wikilinks `[[slug|Display]]` for the hypothesis/conclusion objects (copy
the link targets the page already uses) and end with the citation
`[[KEY - Full Title|KEY]]` or `— folklore`. Preserve load-bearing qualifiers
from the migrated quotes (e.g. "length-doubling PRG", "enhanced TDP",
non-uniform vs uniform, security loss conditions). State the actual theorem,
not a vague gloss: say what is built from what, in which model, with any key
parameter constraints. Inline math in `$...$` using ONLY macros that appear in
`content/Glossary/latex-macros.md` or plain KaTeX built-ins.

### 7. Sketch (optional, encouraged for famous/straightforward reductions)

`sketch`: 1–2 sentences saying HOW the reduction works — the construction
idea and/or the reduction's mechanism. Examples of the register expected:

> "The GGM construction defines $\Eval(k, x)$ by walking a binary tree: start
> from $k$ and, on bit $x_i$, keep the left or right half of $G$'s output. A
> hybrid over the tree levels reduces any distinguisher to a $\PRG$
> distinguisher."

Only write a sketch you are certain is correct. Omit for obscure results.

`pseudocode`: only for genuinely famous, self-contained constructions
(e.g. GGM, ElGamal, Naor–Reingold, Lamport, Goldreich–Levin) where the wiki's
primitive pages define the syntax. Before writing any, read the hypothesis and
conclusion primitive pages' `## Syntax` sections and reuse their algorithm
names and macros exactly. Format: a fenced block using the repo's pseudocode
conventions (see `CLAUDE.md` § Pseudocode Blocks):

```
\begin{algorithm}
\algname{Algorithm}
\caption{$\Eval(k, x)$}
\begin{algorithmic}
\State ...
\Return ...
\end{algorithmic}
\end{algorithm}
```

Set it as the raw string WITHOUT the ```pseudocode fence (the editor adds it).
If in any doubt, leave pseudocode empty — a wrong construction is far worse
than none.

### 8. Other fields

- `security_loss`: fill only when the source states it crisply (e.g.
  `"factor q·ℓ over the PRG advantage"`); else `""`.
- `improvements_text`: 0–3 bullet lines (markdown, `- ...`) citing follow-up
  works: tightness improvements, concrete versions, simplifications. Each
  bullet ends with its citation wikilink. Every paper mentioned must also be
  in `sources` with `role: "improvement"` so its reference page gets created.
- `notes_to_keep`: lines from the page's current Notes worth preserving
  (unresolved caveats that remain true after your work). Most migration
  boilerplate ("`class: unstated`: no citing page says...", "`source:
  folklore`: the claim carried no citation...", "Recorded during migration...")
  should NOT be kept once you determine the field — but keep flags on other
  pages' text if still relevant. Usually an empty list.
- `status_suggestion`: `"draft"` when the page now has a verified source (or
  honest folklore) AND a real statement; `"stub"` otherwise.
- `confidence`: your overall confidence: `high | medium | low`.
- `flags`: anything the verifier or a human should look at.

## Output

Write ONE file: `<OUTDIR>/<batch-id>.json` (paths given in your task prompt):

```json
{
  "batch": "red-07",
  "pages": [
    {
      "slug": "prg-to-prf-ggm86",
      "path": "content/Reductions/prg-to-prf-ggm86.md",
      "disposition": "sourced",
      "sources": [
        {
          "key": "GGM86",
          "role": "original",
          "exists_in_wiki": true,
          "ref_file_title": "GGM86 - How to construct random functions",
          "authors": "Oded Goldreich, Shafi Goldwasser, Silvio Micali",
          "venue": "JACM 1986",
          "year": "1986",
          "url": "https://doi.org/10.1145/6490.6503",
          "note": ""
        }
      ],
      "class": "fully-black-box",
      "class_justification": "The construction invokes the length-doubling PRG only as an oracle; the security proof is a single hybrid argument over tree levels whose reduction runs any PRF distinguisher as an oracle. This is the RTV04 fully-black-box shape.",
      "model": "standard",
      "model_justification": "",
      "kind_correct": "implication",
      "statement": "...",
      "sketch": "...",
      "pseudocode": "",
      "security_loss": "",
      "improvements_text": "",
      "notes_to_keep": [],
      "status_suggestion": "draft",
      "confidence": "high",
      "wrong_reason": "",
      "flags": []
    }
  ]
}
```

For `exists_in_wiki: false` sources, `ref_file_title` is the filename to
create (without `.md`): `KEY - Full Title` (no colons or slashes in the
title part; mirror how existing files sanitize titles).

Also RETURN (structured output) only a short summary: counts per disposition
and any high-priority flags. Do not return the full JSON.

## Web budget

Many of these are textbook results you already know; use the web to (a)
verify bibliographic data before proposing any citation, (b) confirm a paper
actually contains the claimed result when you are not certain (abstract is
often enough), (c) research obscure claims. Prefer eprint.iacr.org and DBLP.
Do not skip verification "to save time" — an invented citation is the single
worst failure mode of this task.
