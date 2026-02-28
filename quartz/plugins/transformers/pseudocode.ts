import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"

export interface Options {
  lineNumber?: boolean
  noEnd?: boolean
  macros?: Record<string, string>
}

export const Pseudocode: QuartzTransformerPlugin<Partial<Options>> = (opts) => {
  const lineNumber = opts?.lineNumber ?? true
  const noEnd = opts?.noEnd ?? false
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
      const cdnUrl = "https://cdn.jsdelivr.net/npm/pseudocode@2.4.1/build/pseudocode.min.js"
      const renderOpts = `{ lineNumber: ${lineNumber}, noEnd: ${noEnd} }`
      const macrosJson = JSON.stringify(macros)
      return {
        css: [
          {
            content: "https://cdn.jsdelivr.net/npm/pseudocode@2.4.1/build/pseudocode.min.css",
            spaPreserve: true,
          },
          {
            content: `
              .ps-root {
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
              (function() {
                var _macros = ${macrosJson};
                var _orig = window.katex.renderToString.bind(window.katex);
                window.katex.renderToString = function(expr, opts) {
                  return _orig(expr, Object.assign({ macros: _macros }, opts || {}));
                };
              })();
              document.addEventListener("nav", function() {
                document.querySelectorAll("pre.pseudocode").forEach(function(el) {
                  window.pseudocode.renderElement(el, ${renderOpts});
                });
              });
            `,
            loadTime: "afterDOMReady" as const,
            contentType: "inline" as const,
          },
        ],
      }
    },
  }
}
