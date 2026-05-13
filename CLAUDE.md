# CLAUDE.md — AI Assistant Guide for Cryptology City

This file provides guidance for AI assistants (Claude and others) working on the [Cryptology City](https://cryptology.city) repository — a wiki of cryptographic primitives, hardness assumptions, and reductions between them.

---

## Project Overview

Cryptology City is a static wiki built with a modified [Quartz v4](https://quartz.jzhao.xyz) static site generator. It is a Complexity Zoo–style reference for cryptographers, documenting primitives and assumptions with formal, game-based security definitions rendered via custom pseudocode blocks.

- **Live site:** https://cryptology.city
- **Stack:** Node.js ≥ 22, TypeScript, Preact, KaTeX, Quartz SSG
- **Hosting:** Cloudflare Pages
- **Content format:** Markdown with KaTeX math and pseudocode blocks

---

## Writing Style

These pages are reference material for working cryptographers and graduate students. Write accordingly.

**Audience.** The reader has already taken a graduate cryptography course or is actively using one of these primitives in research. Do not restate fundamentals. Do not motivate the topic at the top of the page — the reader would not be here otherwise.

**Definition-first.** State the formal object before discussing properties, history, applications, or constructions. The intro paragraph should be an informal version of the definition that follows in the next section, not a motivation or hook.

**Voice.** Use active voice for actors (the adversary, simulator, challenger, scheme). Use impersonal voice for properties: *"A PRF is secure if…"*, not *"We say a PRF is secure if…"*. Reserve *we* for theorem and proof prose where it tracks a specific argument.

**Quantifiers and probability.** Match the formal definition. *For all efficient $\calA$* — not *for any adversary*. *$\Pr[E]$ is negligible* — not *$E$ is unlikely* or *$E$ rarely happens*. When the formal statement uses $\forall$, the surrounding prose should too.

**Hedging.** Hedge only when the hedge carries information. *It is widely believed that LWE is hard* is fine — the belief is the point. *It seems that LWE is hard* is not. *Conjecturally* beats *possibly*. When in doubt, drop the hedge.

**Brevity.** Prefer a sentence to a paragraph, a phrase to a sentence, a symbol to a phrase. Do not summarize or recap.

### Anti-patterns

These show up in AI-written prose and should be removed on sight:

- Closing recap paragraphs (*In summary…*, *To recap…*, *Putting it all together…*).
- Marketing adjectives: *powerful*, *elegant*, *celebrated*, *fundamental*, *important*.
- Throat-clearing: *It is important to note that…*, *Interestingly…*, *Note that…*, *Crucially…*.
- Bulleted lists where two semicolons would do.
- Restating a definition at the end of a section.
- *This means that…* or *In other words…* introducing a rephrase that adds no precision.
- *Recall that…* before a definition the reader does not need reminding of.
- Filler conjunctions (*Furthermore*, *Moreover*, *Additionally*) at the start of paragraphs. Just start the next sentence.
- Reaching for a calligraphic letter or macro for emphasis rather than to denote a specific named object.

---

## Repository Structure

```
content/             # All wiki pages (Markdown)
  Primitives/        # Cryptographic primitive definitions
  Assumptions/       # Hardness assumptions
  Complexity/        # Complexity classes
  Glossary/          # Notation, terminology, and macro reference
  Folklore/          # Well-known results without a canonical citation
  References/        # One file per cited paper
  Templates/         # Templates for new Primitive/Assumption/etc. pages
  index.md           # Homepage
macros.ts            # Custom LaTeX macro definitions (shared site-wide)
quartz.config.ts     # Site-wide Quartz settings (title, theme, plugins)
quartz.layout.ts     # UI layout component definitions
quartz/              # Quartz framework — modify with care
  plugins/transformers/pseudocode.ts   # Core pseudocode rendering engine
scripts/             # Utility scripts (rename-slugs.mjs, etc.)
.github/workflows/   # CI: build, deploy, weekly orchestrator
.orchestrator/       # Weekly orchestrator: decide.mjs, bot prompts, state
.fact-check/         # Skeptical-checker queue state (queue.json)
TODO_SUMMARY.md      # Bot-flagged work for humans to triage
CLAUDE.md            # This file
```

---

## Development Workflow

### Running locally

```bash
npm install
git submodule update --init --recursive   # Fetches vendor/cryptobib for BibTeX lookups
npx quartz build --serve                  # Builds and serves at http://localhost:8080
```

Changes to `content/` rebuild automatically (hot-reload via WebSocket).

### Validation

```bash
npm run check           # TypeScript type-check + Prettier formatting validation
npm run format          # Auto-format source files with Prettier
npm run test            # Run unit tests
npm run sync-cryptobib  # Validate references against vendor/cryptobib (check mode)
```

### Build output

The site builds to `public/` (git-ignored). Never commit this directory.

---

## Bots & Automation

The repository is maintained by both humans and automated bots. The weekly orchestrator (`.github/workflows/weekly-orchestrator.yml`, schedule defined inside) decides each run which bots to invoke based on what has changed since its previous run. Interactive edits should respect the same lane boundaries the bots use.

### The four bot lanes

| Bot                   | Owns                                                                                                       | Does not touch                          |
| --------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `editor`              | typos, grammar, KaTeX syntax, markdown formatting                                                          | math claims, references, page structure |
| `reference-fixer`     | wikilinks, external URLs, citation keys, eprint/arXiv canonicalization, link rot                           | prose, math claims                      |
| `skeptical-checker`   | correctness of claims, theorem statements, and definitions in `Primitives` / `Complexity` / `Assumptions` / `Glossary` | typos, links, structure                 |
| `refactor-simplifier` | issue-only suggestions for structural changes to old pages                                                 | direct edits to content                 |

Prompts for each bot live in `.orchestrator/prompts/`. When making a manual edit that overlaps with a bot's lane, finish the bot's job in the same commit — do not leave half-fixed state behind for the next weekly run to chase.

### State files

- **`.fact-check/queue.json`** — skeptical-checker state. Each entry tracks a page's review status: `unreviewed`, `bot_verified`, `human_verified`, `stale`, or `bot_flagged`. Entries marked `human_verified` are not re-touched by automation. If a manual edit changes a claim on a `human_verified` page, set its queue entry to `stale` so the skeptical-checker re-reviews it.
- **`.orchestrator/state/`** — orchestrator bookkeeping (`last_run.json`, `plan.json`, `WEEKLY_REPORT.md`). Committed automatically each run; do not edit by hand.
- **`TODO_SUMMARY.md`** — where bots flag work they could not safely do themselves (dead links they could not fix, claims they could not verify, references missing from `content/References/`, etc.). When editing a page that has open TODOs against it, resolve them in the same commit when possible.

### Off-cycle invocation

The weekly cadence is the right default. To invoke bots off-cycle (e.g. before publishing a large content drop), use `workflow_dispatch` on the orchestrator workflow rather than running individual bot prompts directly — this keeps the state machine consistent.

---

## Content Conventions

### Page structure

All primitive pages must follow this section order:

1. **YAML frontmatter** — `title` and `aliases`.
2. **Intro paragraph** — one or two sentences stating *what the object is*, in informal language matching the formal definition that follows. Not a motivation, not an application sketch, not a history note.
3. **## Syntax** — the tuple of algorithms with typed signatures.
4. **## Properties** — correctness + one subsection per security notion.
5. **# Variations** — stronger/weaker variants of the primitive.
6. **# Other results** — known constructions, separations, and implications (each with a citation).

Assumption pages follow:

1. **YAML frontmatter**
2. **## Assumption** — informal description + parameterization, then formal game(s).
3. **## Known Results** — search–decision equivalences, reductions.
4. **# Variations** — structured variants (Ring, Module, etc.).
5. **# Attacks**

### Frontmatter

Every content page must include a YAML frontmatter block:

```yaml
---
aliases:
  - ABBREV
  - Full name variant
title: Full primitive name
---
```

Use the canonical abbreviation (e.g. `PRF`, `SKE`, `LWE`) as the primary alias. This enables wiki links like `[[pseudorandom-function|PRF]]` to resolve correctly.

### Cross-linking

Use Obsidian-style wiki links throughout:

```
[[page-slug]]                        # Link to page
[[page-slug|Display text]]           # Link with custom display text
[[page-slug#Section heading]]        # Link to a specific section
```

Slugs are kebab-case filenames without `.md`. Always link primitives and assumptions to their canonical pages on first mention.

### Math

- **Inline math:** `$...$`
- **Display math:** `$$...$$` on its own paragraph, with blank lines around it.
- **Always use defined macros** from `macros.ts` rather than raw LaTeX commands.

---

## LaTeX Macros

All macros are defined in `macros.ts`. The macros below are available site-wide. Some are **required**: using a raw LaTeX equivalent will fail review. The rest are **available**: use when applicable but do not force them. For example, write `\calA` only when you mean *the adversary*; do not introduce a fresh calligraphic letter just because the macro exists.

**Required in their domains:**

- `\PRF`, `\PRG`, `\PRP`, `\PKE`, `\SKE`, `\DS`, `\MAC`, `\OT`, `\RO`, `\hash`, `\PIR` for primitives.
- `\Gen`, `\KeyGen`, `\Enc`, `\Dec`, `\Setup`, `\Eval`, `\Sign`, `\Vrfy`, `\Tag`, `\Invert`, `\Query`, `\Answer`, `\Decode`, `\GrGen` for algorithm names.
- `\pp`, `\crs`, `\sk`, `\pk`, `\vk`, `\td` for standard variables.
- `\calA` (adversary), `\calO` (oracle), `\calM` (message space), `\calC` (ciphertext space), `\calK` (key space) when those roles appear.
- `\Adv`, `\Expt`, `\Game` for advantage / experiment / game.
- `\negl`, `\poly`, `\polylog`, `\PPT`, `\secpar`, `\bits`, `\getsr`, `\Funcs`, `\Perms` for standard cryptographic shorthand.
- `\indcpa`, `\indcca`, `\ufcma`, `\eufcma`, `\sufcma` for standard game-name labels.

**Available:**

- Other calligraphic letters: `\calB`–`\calZ` (excluding the required ones above).
- Complexity classes: `\classP`, `\classNP`, `\classcoNP`, `\classBPP`, `\classRP`, `\classZPP`, `\classPSPACE`, `\classSZK`, `\classCZK`, `\classIP`, `\classAM`, `\classMA`.
- Number sets: `\NN`, `\ZZ`, `\FF`, `\GG`.
- Simulators and state: `\Sim`, `\st`, `\stA`, `\stB`, `\stS`, `\View`.

The full reference also lives in `content/Glossary/latex-macros.md`. **Do not add a new macro** to `macros.ts` without also updating that page.

---

## Pseudocode Blocks

Security games and oracles are written in fenced ` ```pseudocode ``` ` blocks using a custom fork of [pseudocode.js](https://github.com/SaswatPadhi/pseudocode.js). The pseudocode plugin automatically groups consecutive `Game` + `Oracle` blocks side-by-side.

### Standard game block structure

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{name}}_{\Primitive,\calA}(\secpar)$}
\begin{algorithmic}
\State ...initialization...
\State $b' \gets \calA^{\calO}(...)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

### Standard oracle block structure

Oracles immediately follow the game block they belong to:

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO(\mathit{input})$}
\begin{algorithmic}
\State ...
\Return ...
\end{algorithmic}
\end{algorithm}
```

### Pseudocode commands

| Command                 | Usage                                        |
| ----------------------- | -------------------------------------------- |
| `\State`                | A statement line                             |
| `\Return`               | Return statement                             |
| `\If{cond}` / `\EndIf`  | Conditional                                  |
| `\For{...}` / `\EndFor` | Loop                                         |
| `\Comment{text}`        | Right-aligned comment (rendered with ▸)      |
| `:=`                    | Oracle/function definition                   |
| `\getsr`                | Uniform random sampling                      |
| `;`                     | Separate two statements on one `\State` line |

### Custom features

- **`% oracle-split: N`** — place this comment in the game block to set the column split ratio (integer, default auto).
- Comments float right and appear with a ▸ delimiter.
- Copy buttons: *Copy LaTeX (macros)* preserves macro names; *Copy LaTeX (no macros)* expands them.

---

## Security Definition Conventions

These conventions are drawn from the fleshed-out primitive files (`public-key-encryption.md`, `pseudorandom-function.md`, `digital-signature.md`, `symmetric-key-encryption.md`, `pseudorandom-permutation.md`, `oblivious-transfer.md`).

### Game naming

Caption format: `$\Game^{\mathrm{shortname}}_{\Primitive,\calA}(\secpar)$`

- Use `\mathrm{...}` for the game name superscript (e.g. `\mathrm{cpa}`, `\mathrm{prp}`).
- Use the primitive macro as the subscript (e.g. `\PKE`, `\PRF`, `\DS`).
- Use `\calA` for the adversary subscript.
- Use `(\secpar)` as the argument.

For games with explicit parameters (e.g. LWE): `$\Game^{\text{lwe}}_{n,q,\chi,m,\calA}(\secpar)$`.

### Advantage definition

**Indistinguishability games** (bit-guessing, adversary wins by guessing $b$):

$$
\Adv^{\mathrm{name}}_{\Primitive,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{name}}_{\Primitive,\calA}(\secpar) = 1\right] - 1\right|
$$

**Search / unforgeability games** (adversary wins by finding a valid solution):

$$
\Adv^{\mathrm{name}}_{\Primitive,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{name}}_{\Primitive,\calA}(\secpar) = 1\right]
$$

Use `\Pr\!\left[...\right]` (with `\!` for tight spacing) consistently.

### Security statement template

After the advantage definition, end with: *"is negligible."*

For primitives: `A $\Primitive$ scheme $\Primitive$ is **Security-Name-secure** if for all efficient $\calA$,`

For assumptions: `**[Assumption] is hard** for [parameters] if for all efficient $\calA$,`

### Correctness statement template

```
A $\Primitive$ scheme $\Primitive = (\KeyGen, ...)$ is $(1-\varepsilon)$-**correct**
if for all $\secpar \in \mathbb{N}$ and $m \in \calM$,

$$
\Pr\!\left[... \right] \ge 1 - \varepsilon,
$$

over [randomness description]. When $\varepsilon = 0$, we say $\Primitive$ is **perfectly correct**.
```

### Admissibility constraints

When a game has a constraint that makes the adversary non-trivial (e.g. a CCA adversary cannot query decryption on the challenge ciphertext):

1. State the constraint in prose before or after the game block.
2. Include a `\Comment{...}` annotation on the relevant line in the pseudocode.
3. Explain *why* the constraint is necessary in one sentence.

**Example (CCA):**

```
\Comment{Phase 2: $\calA$ may not query $\calD$ on $c^*$}
```

### Oracle definitions within game blocks

Define oracles inline using `:=` assignment on a `\State` line:

```
\State $\calO_b(m_0, m_1) := \Enc(k, m_b)$
\State $\calD(c) := \Dec(k, c)$
```

For games where the oracle is complex enough to warrant its own block, place a separate `\algname{Oracle}` block immediately after the game block.

### World 0 / World 1 convention

For indistinguishability games: $b=0$ is the *real* world, $b=1$ is the *ideal* (random/simulated) world. Define oracles as:

```
\State $\calO_0(...) := \text{real operation}$
\State $\calO_1(...) := \text{ideal/random operation}$
\State $b' \gets \calA^{\calO_b}(...)$
```

### Protocol / two-party game conventions

For two-party protocols, use the `\OT`, `\Setup`, `\langle S, R \rangle` syntax following `content/Glossary/interactive-protocol.md`:

- Execution: `$\langle S(\pp, x_0, x_1), R(\pp, c) \rangle \to (\bot, x_c)$`
- Views: `\View_R`, `\View_S` (use `\View` macro).
- State across rounds: `\stA`, `\stB`.

---

## Reference Pages

Reference files live in `content/References/` and are named `CITATIONKEY - Full Title.md`.

Citation key format: `[AUTHOR(S)][YEAR]` — e.g. `BGI15`, `IKNP03`, `AMR25`. Multi-author keys use initials of up to ~4 authors, then the year. Papers are cited inline as `[[CITATIONKEY - Full Title|CITATIONKEY]]`.

### BibTeX integration (cryptobib)

Each reference page can opt into a *Copy BibTeX* button by setting one of two optional frontmatter fields:

- **`cryptobib_key`** — the paper's [cryptobib](https://cryptobib.di.ens.fr/) citation key, e.g. `C:BonFra01`, `EC:Couteau19`, `EPRINT:BBBPR23`. The build looks up this key in `vendor/cryptobib/crypto.bib` and emits a self-contained BibTeX block (with `@string` macros expanded). **Prefer this** when the paper is in cryptobib.
- **`bibtex`** — inline BibTeX (YAML block scalar). Use for theses, blog posts, or papers cryptobib has not yet imported. Ignored if `cryptobib_key` is also set.

Pages with neither field render no button. Adoption is incremental — add `cryptobib_key` to pages as you edit them.

**Validation:** `npm run sync-cryptobib` reports references whose local frontmatter (`title`, `authors`, `venue`, `published`) drifts from the cryptobib entry, plus references whose `cryptobib_key` does not resolve. A `rewrite` mode is stubbed for future use (`npm run sync-cryptobib rewrite`).

**Bumping cryptobib:** `cd vendor/cryptobib && git pull origin master && cd - && git add vendor/cryptobib && git commit`. Re-run `npm run sync-cryptobib` afterwards to pick up any new keys or drift.

---

## Citations

Every factual claim about a construction, implication, separation, application, parameter regime, or attack must be followed by a citation:

```markdown
[[CITATIONKEY - Full Title|CITATIONKEY]]
```

Citations are required in (non-exhaustive):

- *Other results* bullets on primitive and assumption pages.
- Statements of theorems, lemmas, or propositions not originally proved in this wiki.
- Concrete efficiency or parameter claims (e.g. *"…has ciphertext length $O(\secpar^2)$"*).
- Any application of a primitive to a named use case.
- Known attacks and the regimes in which they apply.

### Folklore exception

A claim that is genuinely folklore — known and used routinely but without an attributable origin — may be left uncited, but must be explicitly flagged. End the sentence with *— standard* or *— folklore*; the label is the citation. *Obvious to a working cryptographer* is **not** a folklore claim and still needs a reference.

### Missing references

If the right citation is not yet a page in `content/References/`, create the stub before writing the claim. A reference page needs only the title, authors, year, venue, and either `cryptobib_key` or inline `bibtex`. Adding the reference page is faster than leaving the claim unsourced for the reference-fixer bot to flag later.

### Canonical URLs

When linking externally to a paper inline (rare — prefer the wiki reference), use the canonical form:

- `https://eprint.iacr.org/<year>/<num>` (no `.pdf` suffix unless explicitly linking the PDF).
- `https://arxiv.org/abs/<id>` (not the `pdf/` form).
- `https://doi.org/<doi>` for DOIs.

The reference-fixer bot will normalize anything else and may revert non-canonical forms in PRs.

---

## What Not to Do

- **Do not commit `public/`** — it is the build output and is git-ignored.
- **Do not commit `.obsidian/`** or `workspace.json` — these are personal editor settings.
- **Do not modify `quartz/`** without a clear reason — it is the SSG engine and changes can break the build.
- **Do not use raw LaTeX** when a macro in `macros.ts` exists for the symbol.
- **Do not add a new macro** to `macros.ts` without also updating `content/Glossary/latex-macros.md`.
- **Do not create a new primitive page** without a `## Syntax` and at least one security game — stub pages should use `TODO` placeholders rather than omitting these sections entirely.
- **Do not use `\mathsf{...}` directly** for primitives or algorithms — use the defined macros.
- **Do not hand-edit `.orchestrator/state/` or `.fact-check/queue.json`** outside of the rules described in *Bots & Automation*.

---

## Example: Complete Primitive Page (Annotated)

Below is a minimal but complete example following all conventions, based on the real `pseudorandom-function.md`:

````markdown
---
aliases:
  - PRF
  - Pseudorandom function
title: Pseudorandom function
---

# Pseudorandom function

A pseudorandom function is a keyed family of functions
$\{\Eval(k, \cdot)\}_{k \in \calK}$ that no efficient adversary can distinguish from
a uniformly random function $\calD \to \calR$ given oracle access.

## Syntax

A PRF is a pair of efficient algorithms $\PRF = (\KeyGen, \Eval)$ with respect
to keyspace $\calK$, domain $\calD$, and range $\calR$:

- $\KeyGen(1^\secpar) \to k$, a randomized function sampling a key $k \in \calK$.
- $\Eval(k, x) \to y$, a deterministic function taking a key $k \in \calK$ and an
  input $x \in \calD$, outputting $y \in \calR$.

## Properties

### Security

\```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{prf}}_{\PRF,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \{0,1\}$
\State $R \getsr \Funcs(\calD,\calR)$
\Comment{Can be sampled lazily for efficiency}
\State $\calO_0(x) := \Eval(k,x)$
\State $\calO_1(x) := R(x)$
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
\```

A PRF $\PRF$ is **pseudorandom** if for all efficient $\calA$,

$$
\Adv^{\mathrm{prf}}_{\PRF,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{prf}}_{\PRF,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Variations

## [Variant name]

[Definition.]

# Other results

- [[primitive-slug|Primitive]] implies/is implied by [[other-primitive-slug|OtherPrimitive]] — [[CITATIONKEY - Title|CITATIONKEY]]
````

Note the intro paragraph: an informal version of the formal definition, not a motivation. No *"PRFs are a fundamental primitive in cryptography"* opener.

---

## Editing the Quartz Framework

The `quartz/` directory is a modified fork of Quartz v4.5.2. The most important custom file is:

- **`quartz/plugins/transformers/pseudocode.ts`** — renders ` ```pseudocode ``` ` blocks. Handles game–oracle grouping, copy buttons, macro expansion, and responsive layout. Edit with caution; changes affect all security game displays across the site.

When adding new Quartz features, follow the existing plugin transformer pattern in `quartz/plugins/transformers/` and export from `quartz/plugins/index.ts`.
