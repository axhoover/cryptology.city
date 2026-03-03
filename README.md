# Cryptology City

A wiki of cryptographic primitives, assumptions, and the reductions between them — live at **[cryptology.city](https://cryptology.city)**.

The goal is to serve as a centralized, readable reference for new and experienced cryptographers alike. Think [Complexity Zoo](https://complexityzoo.net/), but for cryptographic primitives and assumptions.

Built with [Quartz v4](https://quartz.jzhao.xyz) and hosted on [Cloudflare Pages](https://pages.cloudflare.com).

---

## Running locally

**Requirements:** Node.js ≥ 22, npm ≥ 10.9

```bash
npm install
npx quartz build --serve
```

Then open [http://localhost:8080](http://localhost:8080). Changes to `content/` rebuild automatically.

---

## Project structure

| Path | Purpose |
|---|---|
| `content/` | All wiki pages (Markdown) |
| `content/Primitives/` | Cryptographic primitive definitions |
| `content/Assumptions/` | Hardness assumptions |
| `content/Glossary/` | Notation, terminology, and LaTeX macros reference |
| `content/Folklore/` | Well-known results not in formal literature |
| `content/Complexity/` | Complexity classes relevant to cryptography |
| `content/References/` | Cited papers |
| `macros.ts` | Custom LaTeX macro definitions (shared across the site) |
| `quartz.config.ts` | Site-wide settings |
| `quartz/` | Quartz framework — modified with care |

---

## Contributing

Contributions are welcome — corrections, new primitives, missing reductions, better explanations. Submit a pull request on [GitHub](https://github.com/axhoover/cryptology.city).

### Content format

Pages are standard Markdown with:
- **Math**: KaTeX via `$...$` (inline) and `$$...$$` (display)
- **Custom macros**: defined in `macros.ts` — see the [LaTeX macros](https://cryptology.city/Glossary/LaTeX-macros) page for the full list
- **Pseudocode**: fenced ` ```pseudocode ``` ` blocks using a custom fork of [pseudocode.js](https://github.com/SaswatPadhi/pseudocode.js)
- **Cross-links**: standard Obsidian `[[Page name]]` wiki links

### New primitive pages

Follow the structure in an existing file such as `content/Primitives/Pseudorandom function.md`:
1. **Syntax** — define the algorithms and their types
2. **Properties** — correctness condition
3. **Security** — game-based security definitions with pseudocode blocks
4. **Other results** — known constructions, separations, or implications

### Questions or suggestions

Reach out via [Bluesky](https://bsky.app/profile/cryptology.city), [Twitter/X](https://twitter.com/cryptologycity), or [email](mailto:cryptologycity@gmail.com).
