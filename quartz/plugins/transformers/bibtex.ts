import fs from "node:fs";
import path from "node:path";
import { visit } from "unist-util-visit";
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
        `[Bibtex] cryptobib not found at ${cryptoPath}; cryptobib_key lookups will be skipped. ` +
          `Run \`git submodule update --init --recursive\` to fetch it.`,
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
          if (!bibtex) return;

          // Stash on frontmatter for downstream consumers.
          fm._resolvedBibtex = bibtex;
          fm._resolvedBibtexSource = source;

          // Inject a <button> right after the first <h1> in the page body.
          // If no <h1> exists, prepend to the root.
          const buttonNode = {
            type: "element",
            tagName: "button",
            properties: {
              className: ["bibtex-copy-btn"],
              type: "button",
              "data-bibtex": bibtex,
              "data-bibtex-source": source,
              "aria-label": "Copy BibTeX entry to clipboard",
            },
            children: [{ type: "text", value: "Copy BibTeX" }],
          };

          let inserted = false;
          visit(tree, "element", (node: any, index, parent: any) => {
            if (inserted) return false;
            if (node.tagName === "h1" && parent && typeof index === "number") {
              parent.children.splice(index + 1, 0, buttonNode);
              inserted = true;
              return false;
            }
            return undefined;
          });
          if (!inserted && tree.children) {
            tree.children.unshift(buttonNode);
          }
        },
      ];
    },
    externalResources() {
      return {
        css: [
          {
            content: `
              .bibtex-copy-btn {
                font-size: 0.8rem;
                padding: 0.25rem 0.6rem;
                margin: 0.25rem 0 1rem;
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
