import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"

export interface Options {
  lineNumber?: boolean
  noEnd?: boolean
  commentDelimiter?: string
  macros?: Record<string, string>
}

export const Pseudocode: QuartzTransformerPlugin<Partial<Options>> = (opts) => {
  const lineNumber = opts?.lineNumber ?? true
  const noEnd = opts?.noEnd ?? false
  const commentDelimiter = opts?.commentDelimiter ?? "▸"
  const macros = opts?.macros ?? {}

  return {
    name: "Pseudocode",
    htmlPlugins() {
      return [
        () => (tree: any) => {
          visit(tree, "element", (node: any) => {
            if (
              node.tagName === "pre" &&
              node.children?.length === 1 &&
              node.children[0].tagName === "code"
            ) {
              const codeNode = node.children[0]
              const classes: string[] = codeNode.properties?.className ?? []
              if (classes.includes("language-pseudocode")) {
                const content: string = codeNode.children?.[0]?.value ?? ""
                node.properties = { className: ["pseudocode"] }
                node.children = [{ type: "text", value: content }]
              }
            }
          })
        },
      ]
    },
    externalResources() {
      const cdnUrl = "/static/pseudocode.js"
      const renderOpts = `{ lineNumber: ${lineNumber}, noEnd: ${noEnd}, commentDelimiter: ${JSON.stringify(commentDelimiter)} }`
      const macrosJson = JSON.stringify(macros)
      return {
        css: [
          {
            content: "https://cdn.jsdelivr.net/npm/pseudocode@2.4.1/build/pseudocode.min.css",
            spaPreserve: true,
          },
          {
            content: `
              .pseudocode-container {
                width: 80%;
                margin: 0 auto;
              }
              .ps-root .ps-algorithm {
                background-color: var(--lightgray);
                padding: 0.5rem 1em;
                border-top-color: var(--dark) !important;
                border-bottom-color: var(--dark) !important;
              }
              .ps-root .ps-algorithm.with-caption > .ps-line:first-child {
                border-bottom-color: var(--dark) !important;
              }
              .ps-root .ps-algorithmic.with-scopelines div.ps-block {
                border-left-color: var(--dark) !important;
              }
              .ps-comment {
                float: right;
                padding-left: 2em;
              }
              .pseudocode-copy-btns {
                display: flex;
                justify-content: flex-end;
                gap: 0.35rem;
                margin-top: 0.2rem;
              }
              .pseudocode-copy-btn {
                font-size: 0.72rem;
                padding: 0.1rem 0.45rem;
                border: 1px solid var(--gray);
                border-radius: 3px;
                background: transparent;
                color: var(--gray);
                cursor: pointer;
                font-family: var(--codeFont);
                opacity: 0;
                transition: opacity 0.15s, color 0.15s, border-color 0.15s;
              }
              .pseudocode-container:hover .pseudocode-copy-btn {
                opacity: 1;
              }
              .pseudocode-copy-btn:hover {
                color: var(--dark);
                border-color: var(--darkgray);
              }
              #macros-copy-area {
                margin: 1rem 0;
              }
              #macros-copy-area .pseudocode-copy-btn {
                opacity: 1;
              }
            `,
            inline: true,
          },
        ],
        js: [
          {
            src: "https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.js",
            loadTime: "beforeDOMReady" as const,
            contentType: "external" as const,
            spaPreserve: true,
          },
          {
            src: cdnUrl,
            loadTime: "beforeDOMReady" as const,
            contentType: "external" as const,
            spaPreserve: true,
          },
          {
            script: `
              window._siteCustomMacros = ${macrosJson};

              (function() {
                var _macros = ${macrosJson};

                var _orig = window.katex.renderToString.bind(window.katex);
                window.katex.renderToString = function(expr, opts) {
                  return _orig(expr, Object.assign({ macros: _macros }, opts || {}));
                };

                function _stripAlgname(source) {
                  return source.replace(/\\\\algname\\{[^}]*\\}/g, '');
                }

                function _expandMacros(source) {
                  var result = _stripAlgname(source);
                  for (var macro in _macros) {
                    var escaped = macro.replace(/\\\\/g, '\\\\\\\\');
                    var re = new RegExp(escaped + '(?![a-zA-Z@*])', 'g');
                    result = result.replace(re, _macros[macro]);
                  }
                  return result;
                }

                function _makeBtn(label, getText) {
                  var btn = document.createElement("button");
                  btn.className = "pseudocode-copy-btn";
                  btn.textContent = label;
                  btn.addEventListener("click", function() {
                    navigator.clipboard.writeText(getText()).then(function() {
                      btn.textContent = "Copied!";
                      setTimeout(function() { btn.textContent = label; }, 2000);
                    });
                  });
                  return btn;
                }

                function _addCopyButtons(container, source) {
                  var wrap = document.createElement("div");
                  wrap.className = "pseudocode-copy-btns";
                  wrap.appendChild(_makeBtn("Copy LaTeX (macros)", function() { return _stripAlgname(source); }));
                  wrap.appendChild(_makeBtn("Copy LaTeX (no macros)", function() { return _expandMacros(source); }));
                  container.appendChild(wrap);
                }

                document.addEventListener("nav", function() {
                  var blocks = Array.from(document.querySelectorAll("pre.pseudocode"));
                  var sources = blocks.map(function(el) { return el.textContent || ""; });

                  blocks.forEach(function(el) {
                    window.pseudocode.renderElement(el, ${renderOpts});
                  });

                  Array.from(document.querySelectorAll(".ps-root")).forEach(function(psRoot, i) {
                    var container = document.createElement("div");
                    container.className = "pseudocode-container";
                    psRoot.parentNode.insertBefore(container, psRoot);
                    container.appendChild(psRoot);
                    if (i < sources.length) _addCopyButtons(container, sources[i]);
                  });

                  var macrosArea = document.getElementById("macros-copy-area");
                  if (macrosArea) {
                    macrosArea.innerHTML = "";
                    var latexText = Object.keys(_macros).map(function(k) {
                      return "\\\\newcommand{" + k + "}{" + _macros[k] + "}";
                    }).join("\\n");
                    var jsonText = JSON.stringify(_macros, null, 2);
                    macrosArea.appendChild(_makeBtn("Copy LaTeX preamble", function() { return latexText; }));
                    macrosArea.appendChild(_makeBtn("Copy KaTeX/MathJax JSON", function() { return jsonText; }));
                  }
                });
              })();
            `,
            loadTime: "afterDOMReady" as const,
            contentType: "inline" as const,
          },
        ],
      }
    },
  }
}
