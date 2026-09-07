# Reference stub creation instructions

You create missing reference pages in `/home/user/cryptology.city/content/References/`
for a list of papers given in your task prompt (key, filename, authors, venue,
year, url). These were verified to exist by two prior passes; your job is to
create each page correctly per the repo's template.

Procedure per paper:

1. The file to create is `content/References/<ref_file_title>.md` where
   `ref_file_title` is given (format `KEY - Full Title`). If the file already
   exists, skip it (another process created it) — do not overwrite.
2. Start from `content/Templates/Reference.md`. Follow it exactly:
   - frontmatter `title` is the CITATION KEY in quotes (e.g. `"HILL99"`), NOT
     the paper title.
   - `type: reference`, `status: stub`.
   - `aliases`: the key.
   - `source`: canonical URL — eprint (`https://eprint.iacr.org/YYYY/NNN`, no
     .pdf) > arXiv abs > DOI. Verify the URL resolves (WebFetch).
   - `authors`: full names, one comma-separated string.
   - `venue`: e.g. `CRYPTO 1986`, `STOC 1989`, `JACM 1986`, `SICOMP 1999`.
   - `published`: `YYYY` or `YYYY-MM-DD`.
   - Exactly one of `cryptobib_key` / `bibtex`:
     - Search `vendor/cryptobib/crypto.bib` for the paper:
       `grep -in "<distinctive title words>" vendor/cryptobib/crypto.bib`
       then locate the entry key (forms like `C:GolGolMic84`, `STOC:ImpRud89`,
       `JC:HasImpLevLub99`, `EPRINT:...`). Use `cryptobib_key` when found.
     - Otherwise write an inline `bibtex` block scalar (well-formed BibTeX,
       correct venue/year/pages if you can verify them; a minimal @misc with
       author/title/year/url is acceptable).
3. H1: `# [KEY] Full Paper Title`, then the
   `**Authors:** ... | **Venue:** ... | [Source](URL)` line.
4. `## Abstract`: the paper's VERBATIM abstract. NOTE: this container's
   network policy blocks eprint.iacr.org, arXiv, DBLP, DOI resolvers,
   Springer, and Semantic Scholar (CONNECT 403) — do not spend effort
   retrying them. WebSearch works; if a search result snippet gives you the
   complete verbatim abstract, use it; otherwise write `TODO — abstract.`
   Never paraphrase or invent an abstract. Likewise for `source` URLs: you
   cannot resolve them, so construct them from cryptobib data (eprint entries
   carry the report number; DOIs appear in many cryptobib entries) and prefer
   an eprint URL when cryptobib lists one; otherwise a DOI URL; otherwise the
   URL given in your task list.
5. Editorial commentary: none. Do not add a Notes section.

House constraints: never rename existing files; if the exact key already
exists in `content/References/` for a DIFFERENT paper, STOP for that entry and
record it in your returned summary instead of creating anything (the
coordinator resolves collisions).

Return a structured summary: created files, skipped (already existed), and
collisions/problems.
