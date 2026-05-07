import fs from "node:fs";
import path from "node:path";
import { QuartzTransformerPlugin } from "../types";
import { BibDatabase, formatBibtex, parseBib } from "../../util/cryptobib";

export interface Options {
  // Path (repo-relative) to the cryptobib export submodule.
  cryptobibDir: string;
  // Restrict the transformer to pages whose source path contains any of these
  // segments. Defaults to "/References/".
  pathFilters: string[];
}

const defaultOptions: Options = {
  cryptobibDir: "vendor/cryptobib",
  pathFilters: ["/References/"],
};

// Module-level cache: parsing 40MB of BibTeX takes ~3s, so we do it once per
// process and reuse across pages.
let cachedDb: BibDatabase | null = null;
let cachedDbDir: string | null = null;
let cachedDbWarned = false;
let unknownKeysWarned = new Set<string>();

function loadDatabase(cryptobibDir: string): BibDatabase | null {
  if (cachedDb && cachedDbDir === cryptobibDir) return cachedDb;
  const abbrevPath = path.join(cryptobibDir, "abbrev0.bib");
  const cryptoPath = path.join(cryptobibDir, "crypto.bib");
  if (!fs.existsSync(cryptoPath)) {
    if (!cachedDbWarned) {
      console.warn(
        `\n[Bibtex] ⚠  cryptobib not found at ${cryptoPath}.\n` +
          `[Bibtex]    cryptobib_key lookups will be skipped on this build.\n` +
          `[Bibtex]    Run \`git submodule update --init --recursive\` (locally)\n` +
          `[Bibtex]    or ensure submodules init in your CI/CD build (Cloudflare Pages\n` +
          `[Bibtex]    auto-inits submodules; verify in build logs if you don't see\n` +
          `[Bibtex]    them).\n`,
      );
      cachedDbWarned = true;
    }
    return null;
  }
  const db = fs.existsSync(abbrevPath)
    ? parseBib(fs.readFileSync(abbrevPath, "utf8"))
    : undefined;
  cachedDb = parseBib(fs.readFileSync(cryptoPath, "utf8"), db);
  cachedDbDir = cryptobibDir;
  return cachedDb;
}

function pageMatchesFilter(filePath: string | undefined, filters: string[]) {
  if (!filePath) return false;
  return filters.some((f) => filePath.includes(f));
}

// Build a HAST tree for a section like:
//   <section class="bibtex-section">
//     <div class="bibtex-section-header">
//       <h2 id="bibtex">BibTeX</h2>
//       <button class="bibtex-copy-btn" data-bibtex="...">Copy</button>
//     </div>
//     <pre class="bibtex-block"><code>...</code></pre>
//   </section>
function makeSection(bibtex: string, source: "cryptobib" | "inline") {
  return {
    type: "element",
    tagName: "section",
    properties: { className: ["bibtex-section"] },
    children: [
      {
        type: "element",
        tagName: "div",
        properties: { className: ["bibtex-section-header"] },
        children: [
          {
            type: "element",
            tagName: "h2",
            properties: { id: "bibtex" },
            children: [{ type: "text", value: "BibTeX" }],
          },
          {
            type: "element",
            tagName: "button",
            properties: {
              className: ["bibtex-copy-btn"],
              type: "button",
              "data-bibtex": bibtex,
              "data-bibtex-source": source,
              "aria-label": "Copy BibTeX entry to clipboard",
            },
            children: [{ type: "text", value: "Copy" }],
          },
        ],
      },
      {
        type: "element",
        tagName: "pre",
        properties: { className: ["bibtex-block"] },
        children: [
          {
            type: "element",
            tagName: "code",
            properties: { className: ["language-bibtex"] },
            children: [{ type: "text", value: bibtex }],
          },
        ],
      },
    ],
  };
}

export const Bibtex: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts: Options = { ...defaultOptions, ...userOpts };
  return {
    name: "Bibtex",
    htmlPlugins() {
      return [
        () => (tree: any, file: any) => {
          const filePath: string | undefined =
            file?.data?.filePath ?? file?.path;
          if (!pageMatchesFilter(filePath, opts.pathFilters)) return;

          const fm = file?.data?.frontmatter ?? {};
          const cryptobibKey: string | undefined =
            fm.cryptobib_key ?? fm.cryptobibKey;
          const inlineBibtex: string | undefined = fm.bibtex;

          let bibtex: string | undefined;
          let source: "cryptobib" | "inline" | undefined;

          if (cryptobibKey) {
            const db = loadDatabase(opts.cryptobibDir);
            if (db) {
              const entry = db.entries.get(cryptobibKey);
              if (entry) {
                bibtex = formatBibtex(entry);
                source = "cryptobib";
              } else if (!unknownKeysWarned.has(cryptobibKey)) {
                console.warn(
                  `[Bibtex] ${filePath}: cryptobib_key "${cryptobibKey}" not found in ${opts.cryptobibDir}/crypto.bib`,
                );
                unknownKeysWarned.add(cryptobibKey);
              }
            }
          }
          if (
            !bibtex &&
            typeof inlineBibtex === "string" &&
            inlineBibtex.trim()
          ) {
            bibtex = inlineBibtex.trim();
            source = "inline";
          }
          if (!bibtex || !source) return;

          // Stash on frontmatter for downstream consumers.
          fm._resolvedBibtex = bibtex;
          fm._resolvedBibtexSource = source;

          // Append the BibTeX section at the end of the page body so it sits
          // below the abstract / body content (eprint-style).
          if (Array.isArray(tree.children)) {
            tree.children.push(makeSection(bibtex, source));
          }
        },
      ];
    },
    externalResources() {
      return {
        css: [
          {
            content: `
              .bibtex-section {
                margin-top: 2.5rem;
                padding-top: 1.25rem;
                border-top: 1px solid var(--lightgray);
              }
              .bibtex-section-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                margin: 0 0 0.5rem;
              }
              .bibtex-section-header h2 {
                margin: 0;
              }
              .bibtex-copy-btn {
                font-size: 0.8rem;
                padding: 0.25rem 0.7rem;
                border: 1px solid var(--gray);
                border-radius: 3px;
                background: transparent;
                color: var(--darkgray);
                cursor: pointer;
                font-family: var(--codeFont);
                transition: color 0.15s, border-color 0.15s, background 0.15s;
              }
              .bibtex-copy-btn:hover {
                color: var(--dark);
                border-color: var(--darkgray);
                background: var(--lightgray);
              }
              pre.bibtex-block {
                margin: 0;
                padding: 0.85rem 1rem;
                background: var(--lightgray);
                border: 1px solid var(--lightgray);
                border-radius: 4px;
                overflow-x: auto;
                font-family: var(--codeFont);
                font-size: 0.82rem;
                line-height: 1.45;
                color: var(--dark);
                white-space: pre;
              }
              pre.bibtex-block code {
                background: none;
                padding: 0;
                border: 0;
                font-family: inherit;
                font-size: inherit;
                color: inherit;
                white-space: inherit;
              }
            `,
            inline: true,
          },
        ],
        js: [
          {
            script: `
              document.addEventListener("nav", function() {
                Array.from(document.querySelectorAll(".bibtex-copy-btn")).forEach(function(btn) {
                  if (btn.dataset.bibtexBound) return;
                  btn.dataset.bibtexBound = "1";
                  var label = btn.textContent;
                  btn.addEventListener("click", function() {
                    var text = btn.getAttribute("data-bibtex") || "";
                    if (!text) {
                      // Fallback: copy the visible <pre> text in our section
                      var section = btn.closest(".bibtex-section");
                      var pre = section ? section.querySelector("pre.bibtex-block") : null;
                      if (pre) text = pre.textContent || "";
                    }
                    if (!text) return;
                    navigator.clipboard.writeText(text).then(function() {
                      btn.textContent = "Copied!";
                      setTimeout(function() { btn.textContent = label; }, 2000);
                    }).catch(function() {
                      btn.textContent = "Copy failed";
                      setTimeout(function() { btn.textContent = label; }, 2000);
                    });
                  });
                });
              });
            `,
            loadTime: "afterDOMReady" as const,
            contentType: "inline" as const,
          },
        ],
      };
    },
  };
};
