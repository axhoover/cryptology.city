import { Root as HTMLRoot, Nodes as HTMLNodes } from "hast";
import { toString } from "hast-util-to-string";
import { QuartzTransformerPlugin } from "../types";
import { escapeHTML } from "../../util/escape";

export interface Options {
  descriptionLength: number;
  maxDescriptionLength: number;
  replaceExternalLinks: boolean;
  // Elements with any of these classes are left out of the description (not of
  // the search text). RelationMeta marks the metadata line under the H1 of
  // reduction and barrier pages, and their title and Statement heading, so the
  // description starts with the Statement itself.
  excludeClasses: string[];
}

/** Elements carrying this class are left out of the page description. */
export const NO_DESCRIPTION_CLASS = "no-description";

const defaultOptions: Options = {
  descriptionLength: 150,
  maxDescriptionLength: 300,
  replaceExternalLinks: true,
  excludeClasses: [NO_DESCRIPTION_CLASS],
};

// hast-util-to-string, skipping excluded elements.
function textExcluding(node: HTMLNodes, exclude: Set<string>): string {
  if (node.type === "text") return node.value;
  if (node.type === "element") {
    const cls = node.properties?.className;
    const classes = Array.isArray(cls) ? cls : cls ? [cls] : [];
    if (classes.some((c) => exclude.has(String(c)))) return "";
  }
  return "children" in node
    ? node.children.map((c) => textExcluding(c, exclude)).join("")
    : "";
}

const urlRegex = new RegExp(
  /(https?:\/\/)?(?<domain>([\da-z\.-]+)\.([a-z\.]{2,6})(:\d+)?)(?<path>[\/\w\.-]*)(\?[\/\w\.=&;-]*)?/,
  "g",
);

export const Description: QuartzTransformerPlugin<Partial<Options>> = (
  userOpts,
) => {
  const opts = { ...defaultOptions, ...userOpts };
  return {
    name: "Description",
    htmlPlugins() {
      return [
        () => {
          return async (tree: HTMLRoot, file) => {
            let frontMatterDescription = file.data.frontmatter?.description;
            let text = escapeHTML(toString(tree));
            const exclude = new Set(opts.excludeClasses);
            let descSource = exclude.size
              ? escapeHTML(textExcluding(tree, exclude))
              : text;
            // A page that is all excluded text still gets a description.
            if (!descSource.trim()) descSource = text;

            if (opts.replaceExternalLinks) {
              frontMatterDescription = frontMatterDescription?.replace(
                urlRegex,
                "$<domain>" + "$<path>",
              );
              text = text.replace(urlRegex, "$<domain>" + "$<path>");
              descSource = descSource.replace(
                urlRegex,
                "$<domain>" + "$<path>",
              );
            }

            if (frontMatterDescription) {
              file.data.description = frontMatterDescription;
              file.data.text = text;
              return;
            }

            // otherwise, use the text content
            const desc = descSource;
            const sentences = desc.replace(/\s+/g, " ").trim().split(/\.\s/);
            let finalDesc = "";
            let sentenceIdx = 0;

            // Add full sentences until we exceed the guideline length
            while (sentenceIdx < sentences.length) {
              const sentence = sentences[sentenceIdx];
              if (!sentence) break;

              const currentSentence = sentence.endsWith(".")
                ? sentence
                : sentence + ".";
              const nextLength =
                finalDesc.length + currentSentence.length + (finalDesc ? 1 : 0);

              // Add the sentence if we're under the guideline length
              // or if this is the first sentence (always include at least one)
              if (nextLength <= opts.descriptionLength || sentenceIdx === 0) {
                finalDesc += (finalDesc ? " " : "") + currentSentence;
                sentenceIdx++;
              } else {
                break;
              }
            }

            // truncate to max length if necessary
            file.data.description =
              finalDesc.length > opts.maxDescriptionLength
                ? finalDesc.slice(0, opts.maxDescriptionLength) + "..."
                : finalDesc;
            file.data.text = text;
          };
        },
      ];
    },
  };
};

declare module "vfile" {
  interface DataMap {
    description: string;
    text: string;
  }
}
