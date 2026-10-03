# cryptology.city — TODO Changelog

_Bot edit history, split from TODO_SUMMARY.md._

## Changes Made This Run

_Run date: 2026-05-06_

| File                                                                        | Change                    | Confidence |
| --------------------------------------------------------------------------- | ------------------------- | ---------- |
| `content/References/CIMR25 - Secret-Key PIR from Random Linear Codes.md:67` | Fixed typo: "teh" → "the" | High       |

---

## Changes Made — Previous Run (2026-04-29)

| File                                                                                               | Change                                                                                                                                                                                  | Confidence |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `macros.ts`                                                                                        | Added `\QR` → `\mathrm{QR}` (set of quadratic residues) and `\J` → `\mathrm{J}` (Jacobi set); both were used in `quadratic-residuosity.md` but undefined, causing KaTeX render failures | High       |
| `content/Glossary/latex-macros.md`                                                                 | Added "Named sets" section documenting the new `\QR` and `\J` macros per site convention (new macros must also be documented here)                                                      | High       |
| `content/References/NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions.md` | Replaced `\mathbb{G}` → `\GG` and `\mathbb{Z}` → `\ZZ` in the abstract to use site-standard macros                                                                                      | High       |

---

## Changes Made — Previous Run (2026-04-22)

| File                                                                | Change                                                                                                                                                                                                                                                    | Confidence |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `content/Primitives/single-server-private-information-retrieval.md` | Fixed game name mismatch in advantage definition: `\Game^{\mathrm{pir}}` → `\Game^{\mathrm{priv}}`                                                                                                                                                        | High       |
| `content/Primitives/identity-based-encryption.md`                   | `\secpar \in \mathbb{N}` → `\secpar \in \NN`                                                                                                                                                                                                              | High       |
| `content/Primitives/hierarchical-identity-based-encryption.md`      | `\secpar \in \mathbb{N}` → `\secpar \in \NN`                                                                                                                                                                                                              | High       |
| `content/Primitives/broadcast-encryption.md`                        | `\secpar \in \mathbb{N}` → `\secpar \in \NN`                                                                                                                                                                                                              | High       |
| `content/Primitives/attribute-based-encryption.md`                  | `\secpar \in \mathbb{N}` → `\secpar \in \NN`                                                                                                                                                                                                              | High       |
| `content/Primitives/hidden-vector-encryption.md`                    | `\secpar \in \mathbb{N}` → `\secpar \in \NN`                                                                                                                                                                                                              | High       |
| `content/Primitives/public-key-encryption.md`                       | `\secpar \in \mathbb{N}` → `\secpar \in \NN`                                                                                                                                                                                                              | High       |
| `content/Primitives/inner-product-predicate-encryption.md`          | `\secpar \in \mathbb{N}` → `\secpar \in \NN`                                                                                                                                                                                                              | High       |
| `content/Primitives/one-way-permutation.md`                         | `\mathbb{N}` → `\NN`                                                                                                                                                                                                                                      | High       |
| `content/Primitives/symmetric-key-encryption.md`                    | `\secpar \in \mathbb{N}` → `\secpar \in \NN`                                                                                                                                                                                                              | High       |
| `content/Primitives/fuzzy-identity-based-encryption.md`             | `\mathbb{N}` → `\NN` (×2)                                                                                                                                                                                                                                 | High       |
| `content/Complexity/sharp-p.md`                                     | `\mathbb{N}` → `\NN` in function codomain                                                                                                                                                                                                                 | High       |
| `content/Primitives/doubly-efficient-pir.md`                        | Comprehensive macro fixes: `\mathcal{K}` → `\calK`, `\mathcal{A}` → `\calA`, `\mathsf{Setup}` → `\Setup`, `\text{Adv}` → `\Adv`, `1^{\lambda}` → `1^\secpar`, `\lambda \in \mathbb{N}` → `\secpar \in \NN`, `\{0,1\}` → `\bits` (×10), and prose typo fix | High       |
| `content/Primitives/pseudorandom-error-correcting-code.md`          | Comprehensive macro fixes: `\mathsf{Gen}` → `\Gen`, `\mathsf{Enc}` → `\Enc`, `\mathsf{Dec}` → `\Dec`, `\mathcal{K}` → `\calK`, `\mathcal{E}` → `\calE`, `\lambda` → `\secpar`, `\text{Adv}` → `\Adv`, `\{0,1\}` → `\bits` (×6)                            | High       |
| `content/Primitives/pseudorandom-generator.md`                      | `$b \getsr \{0,1\}$` → `$b \getsr \bits$`                                                                                                                                                                                                                 | High       |
| `content/Primitives/pseudorandom-function.md`                       | `$b \getsr \{0,1\}$` → `$b \getsr \bits$` (×2); `\{0,1\}^n` → `\bits^n` (×2)                                                                                                                                                                              | High       |
| `content/Primitives/distributed-point-function.md`                  | `$b \in \{0,1\}$` → `$b \in \bits$`                                                                                                                                                                                                                       | High       |
| `content/Glossary/random-oracle-model.md`                           | `\mathsf{IP}` → `\classIP`, `\mathsf{PSPACE}` → `\classPSPACE` (×2)                                                                                                                                                                                       | High       |
