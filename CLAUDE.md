# CLAUDE.md — AI Assistant Guide for Cryptology City

This file provides guidance for AI assistants (Claude and others) working on the [Cryptology City](https://cryptology.city) repository — a wiki of cryptographic primitives, hardness assumptions, and reductions between them.

---

## Project Overview

Cryptology City is a static wiki built with a modified [Quartz v4](https://quartz.jzhao.xyz) static site generator. It serves as a Complexity Zoo–style reference for cryptographers, documenting primitives and assumptions with formal, game-based security definitions rendered via custom pseudocode blocks.

- **Live site:** https://cryptology.city
- **Stack:** Node.js ≥ 22, TypeScript, Preact, KaTeX, Quartz SSG
- **Hosting:** Cloudflare Pages
- **Content format:** Markdown with KaTeX math and pseudocode blocks

---

## Repository Structure

```
content/             # All wiki pages (Markdown)
  Primitives/        # Cryptographic primitive definitions (22 files)
  Assumptions/       # Hardness assumptions (9 files)
  Complexity/        # Complexity classes (10 files)
  Glossary/          # Notation, terminology, and macro reference (6 files)
  Folklore/          # Well-known results without a canonical citation
  References/        # One file per cited paper (80+ files)
  Templates/         # Templates for new Primitive/Assumption/etc. pages
  index.md           # Homepage
macros.ts            # Custom LaTeX macro definitions (shared site-wide)
quartz.config.ts     # Site-wide Quartz settings (title, theme, plugins)
quartz.layout.ts     # UI layout component definitions
quartz/              # Quartz framework — modify with care
  plugins/transformers/pseudocode.ts   # Core pseudocode rendering engine
scripts/             # Utility scripts (rename-slugs.mjs)
```

---

## Development Workflow

### Running locally

```bash
npm install
npx quartz build --serve   # Builds and serves at http://localhost:8080
```

Changes to `content/` rebuild automatically (hot-reload via WebSocket).

### Validation

```bash
npm run check    # TypeScript type-check + Prettier formatting validation
npm run format   # Auto-format source files with Prettier
npm run test     # Run unit tests
```

### Build output

The site is built to `public/` (git-ignored). Never commit this directory.

---

## Content Conventions

### Page structure

All primitive pages must follow this section order:

1. **YAML frontmatter** — `title` and `aliases`
2. **Intro paragraph** — one or two sentences defining the primitive at a high level
3. **## Syntax** — the tuple of algorithms with typed signatures
4. **## Properties** — correctness + one subsection per security notion
5. **# Variations** — stronger/weaker variants of the primitive
6. **# Other results** — known constructions, separations, and implications

Assumption pages follow:

1. **YAML frontmatter**
2. **## Assumption** — informal description + parameterization, then formal game(s)
3. **## Known Results** — search–decision equivalences, reductions
4. **# Variations** — structured variants (Ring, Module, etc.)
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
- **Display math:** `$$...$$` (on its own paragraph, with blank lines around it)
- **Always use defined macros** from `macros.ts` rather than raw LaTeX commands

---

## LaTeX Macros

All macros are defined in `macros.ts`. Always prefer macros over raw LaTeX — this ensures consistent rendering and enables the "Copy LaTeX (macros)" button on pseudocode blocks.

### Key macros by category

**Caligraphic sets/spaces:**
`\calA`, `\calB`, `\calC`, `\calD`, `\calE`, `\calF`, `\calG`, `\calH`, `\calI`, `\calJ`, `\calK`, `\calL`, `\calM`, `\calN`, `\calO`, `\calP`, `\calQ`, `\calR`, `\calS`, `\calT`, `\calU`, `\calV`, `\calW`, `\calX`, `\calY`, `\calZ`

**Complexity classes:**
`\classP`, `\classNP`, `\classcoNP`, `\classBPP`, `\classRP`, `\classZPP`, `\classPSPACE`, `\classSZK`, `\classCZK`, `\classIP`, `\classAM`, `\classMA`

**Algorithm names:**
`\Gen`, `\GrGen`, `\KeyGen`, `\Enc`, `\Dec`, `\Setup`, `\Query`, `\Eval`, `\Invert`, `\Sign`, `\Vrfy`, `\Tag`, `\Answer`, `\Decode`

**Variable names:**
`\pp` (public parameters), `\crs`, `\sk`, `\pk`, `\vk`, `\td` (trapdoor)

**Number sets:**
`\NN`, `\ZZ`, `\FF`, `\GG`

**Simulators and state:**
`\Sim` (simulator $\mathcal{S}$), `\st`, `\stA`, `\stB`, `\stS`, `\View`

**Crypto shorthand:**
`\bits` ($\{0,1\}$), `\negl`, `\poly`, `\polylog`, `\PPT`, `\secpar` ($\lambda$), `\getsr` (uniform random sample $\overset{\$}{\gets}$), `\Funcs`, `\Perms`

**Experiment notation:**
`\Adv` (bold **Adv**), `\Expt` (bold **Expt**), `\Game` (bold **G**)

**Standard game name macros:**
`\indcpa`, `\indcca`, `\ufcma`, `\eufcma`, `\sufcma`

**Primitive names:**
`\PRF`, `\PRG`, `\PRP`, `\OT`, `\SKE`, `\PKE`, `\DS`, `\MAC`, `\PIR`, `\RO`, `\hash`

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

| Command | Usage |
|---|---|
| `\State` | A statement line |
| `\Return` | Return statement |
| `\If{cond}` / `\EndIf` | Conditional |
| `\For{...}` / `\EndFor` | Loop |
| `\Comment{text}` | Right-aligned comment (rendered with ▸) |
| `:=` | Oracle/function definition |
| `\getsr` | Uniform random sampling |
| `;` | Separate two statements on one `\State` line |

### Custom features

- **`% oracle-split: N`** — place this comment in the game block to set the column split ratio to `N` (integer, default auto).
- Comments float right and appear with a ▸ delimiter.
- Copy buttons: "Copy LaTeX (macros)" preserves macro names; "Copy LaTeX (no macros)" expands them.

---

## Security Definition Conventions

These conventions are drawn from the fleshed-out primitive files (`public-key-encryption.md`, `pseudorandom-function.md`, `digital-signature.md`, `symmetric-key-encryption.md`, `pseudorandom-permutation.md`, `oblivious-transfer.md`).

### Game naming

Caption format: `$\Game^{\mathrm{shortname}}_{\Primitive,\calA}(\secpar)$`

- Use `\mathrm{...}` for the game name superscript (e.g., `\mathrm{cpa}`, `\mathrm{prp}`)
- Use the primitive macro as the subscript (e.g., `\PKE`, `\PRF`, `\DS`)
- Use `\calA` for the adversary subscript
- Use `(\secpar)` as the argument

For games with explicit parameters (e.g., LWE): `$\Game^{\text{lwe}}_{n,q,\chi,m,\calA}(\secpar)$`

### Advantage definition

**Indistinguishability games** (bit-guessing, adversary wins by guessing $b$):

$$
\Adv^{\mathrm{name}}_{\Primitive,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{name}}_{\Primitive,\calA}(\secpar) = 1\right] - 1\right|
$$

**Search/unforgeability games** (adversary wins by finding a valid solution):

$$
\Adv^{\mathrm{name}}_{\Primitive,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{name}}_{\Primitive,\calA}(\secpar) = 1\right]
$$

Use `\Pr\!\left[...\right]` (with `\!` for tight spacing) consistently.

### Security statement template

After the advantage definition, end with: "is negligible."

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

When a game has a constraint that makes the adversary non-trivial (e.g., CCA adversary cannot query decryption on the challenge ciphertext):

1. State the constraint in prose before or after the game block.
2. Include a `\Comment{...}` annotation on the relevant line in the pseudocode.
3. Explain *why* the constraint is necessary (one sentence).

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

For indistinguishability games: $b=0$ is the "real" world, $b=1$ is the "ideal" (random/simulated) world. Define oracles as:

```
\State $\calO_0(...) := \text{real operation}$
\State $\calO_1(...) := \text{ideal/random operation}$
\State $b' \gets \calA^{\calO_b}(...)$
```

### Protocol/two-party game conventions

For two-party protocols, use the `\OT`, `\Setup`, `\langle S, R \rangle` syntax following `content/Glossary/interactive-protocol.md`:

- Execution: `$\langle S(\pp, x_0, x_1), R(\pp, c) \rangle \to (\bot, x_c)$`
- Views: `\View_R`, `\View_S` (use `\View` macro)
- State across rounds: `\stA`, `\stB`

---

## Reference Pages

Reference files live in `content/References/` and are named `CITATIONKEY - Full Title.md`.

Citation key format: `[AUTHOR(S)][YEAR]` — e.g., `BGI15`, `IKNP03`, `AMR25`.

Multi-author keys use initials of up to ~4 authors, then the year. Papers are cited inline as `[[CITATIONKEY - Full Title|CITATIONKEY]]`.

---

## What Not to Do

- **Do not commit `public/`** — it is the build output and is git-ignored.
- **Do not commit `.obsidian/`** or `workspace.json` — these are personal editor settings.
- **Do not modify `quartz/`** without a clear reason — it is the SSG engine and changes can break the build.
- **Do not use raw LaTeX** when a macro in `macros.ts` exists for the symbol.
- **Do not add a new macro** to `macros.ts` without also updating `content/Glossary/latex-macros.md`.
- **Do not create a new primitive page** without a `## Syntax` and at least one security game — stub pages should use `TODO` placeholders rather than omitting these sections entirely.
- **Do not use `\mathsf{...}` directly** for primitives or algorithms — use the defined macros (`\PRF`, `\KeyGen`, etc.).

---

## Example: Complete Primitive Page (Annotated)

Below is a minimal but complete example following all conventions, based on the real `pseudorandom-function.md`:

```markdown
---
aliases:
  - PRF
  - Pseudorandom function
title: Pseudorandom function
---
# Pseudorandom function
[One-sentence definition accessible to a new reader.]

## Syntax
A PRF is a pair of efficient algorithms $\PRF = (\KeyGen, \Eval)$ with respect
to keyspace $\calK$, domain $\calD$, and range $\calR$:
- $\KeyGen(1^\secpar) \to k,$ is a randomized function that samples a key $k \in \calK,$
- $\Eval(k, x) \to y,$ is a deterministic function that takes a key $k \in \calK$
and an input $x \in \calD$, outputting $y \in \calR.$

## Properties

### Correctness
[If applicable.]

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
```

---

## Editing the Quartz Framework

The `quartz/` directory is a modified fork of Quartz v4.5.2. The most important custom file is:

- **`quartz/plugins/transformers/pseudocode.ts`** — Renders ` ```pseudocode ``` ` blocks. Handles game–oracle grouping, copy buttons, macro expansion, and responsive layout. Edit with caution; changes affect all security game displays across the site.

When adding new Quartz features, follow the existing plugin transformer pattern in `quartz/plugins/transformers/` and export from `quartz/plugins/index.ts`.
