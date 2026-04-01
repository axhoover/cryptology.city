import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../types";

import style from "../styles/listPage.scss";
import {
  PageList,
  SortFn,
  byDateAndAlphabeticalFolderFirst,
} from "../PageList";
import { Root } from "hast";
import { htmlToJsx } from "../../util/jsx";
import { i18n } from "../../i18n";
import { QuartzPluginData } from "../../plugins/vfile";
import { ComponentChildren } from "preact";
import { concatenateResources } from "../../util/resources";
import { trieFromAllFiles } from "../../util/ctx";
import { FullSlug, resolveRelative } from "../../util/path";

interface FolderContentOptions {
  /**
   * Whether to display number of folders
   */
  showFolderCount: boolean;
  showSubfolders: boolean;
  sort?: SortFn;
}

const defaultOptions: FolderContentOptions = {
  showFolderCount: true,
  showSubfolders: true,
};

export default ((opts?: Partial<FolderContentOptions>) => {
  const options: FolderContentOptions = { ...defaultOptions, ...opts };

  const FolderContent: QuartzComponent = (props: QuartzComponentProps) => {
    const { tree, fileData, allFiles, cfg } = props;

    const trie = (props.ctx.trie ??= trieFromAllFiles(allFiles));
    const folder = trie.findNode(fileData.slug!.split("/"));
    if (!folder) {
      return null;
    }

    const allPagesInFolder: QuartzPluginData[] =
      folder.children
        .map((node) => {
          // regular file, proceed
          if (node.data) {
            return node.data;
          }

          if (node.isFolder && options.showSubfolders) {
            // folders that dont have data need synthetic files
            const getMostRecentDates = (): QuartzPluginData["dates"] => {
              let maybeDates: QuartzPluginData["dates"] | undefined = undefined;
              for (const child of node.children) {
                if (child.data?.dates) {
                  // compare all dates and assign to maybeDates if its more recent or its not set
                  if (!maybeDates) {
                    maybeDates = { ...child.data.dates };
                  } else {
                    if (child.data.dates.created > maybeDates.created) {
                      maybeDates.created = child.data.dates.created;
                    }

                    if (child.data.dates.modified > maybeDates.modified) {
                      maybeDates.modified = child.data.dates.modified;
                    }

                    if (child.data.dates.published > maybeDates.published) {
                      maybeDates.published = child.data.dates.published;
                    }
                  }
                }
              }
              return (
                maybeDates ?? {
                  created: new Date(),
                  modified: new Date(),
                  published: new Date(),
                }
              );
            };

            return {
              slug: node.slug,
              dates: getMostRecentDates(),
              frontmatter: {
                title: node.displayName,
                tags: [],
              },
            };
          }
        })
        .filter((page) => page !== undefined) ?? [];
    const cssClasses: string[] = fileData.frontmatter?.cssclasses ?? [];
    const classes = cssClasses.join(" ");

    const content = (
      (tree as Root).children.length === 0
        ? fileData.description
        : htmlToJsx(fileData.filePath!, tree)
    ) as ComponentChildren;

    // Sort and group by first letter
    const sorter = options.sort ?? byDateAndAlphabeticalFolderFirst(cfg);
    const sorted = [...allPagesInFolder].sort(sorter);

    const groups = new Map<string, QuartzPluginData[]>();
    for (const page of sorted) {
      const firstChar = (page.frontmatter?.title ?? "")[0]?.toUpperCase() ?? "";
      const letter = /[A-Z]/.test(firstChar) ? firstChar : "#";
      if (!groups.has(letter)) groups.set(letter, []);
      groups.get(letter)!.push(page);
    }

    const letters = [...groups.keys()];

    return (
      <div class="popover-hint">
        <article class={classes}>{content}</article>
        <div class="page-listing">
          {options.showFolderCount && (
            <p>
              {i18n(cfg.locale).pages.folderContent.itemsUnderFolder({
                count: allPagesInFolder.length,
              })}
            </p>
          )}
          <div class="folder-toc">
            {letters.map((letter) => (
              <a href={`#alpha-${letter}`} class="folder-toc-letter">
                {letter}
              </a>
            ))}
          </div>
          <div>
            {[...groups.entries()].map(([letter, pages]) => (
              <div class="folder-letter-group">
                <h2 id={`alpha-${letter}`} class="folder-letter-heading">
                  {letter}
                </h2>
                <ul class="section-ul">
                  {pages.map((page) => {
                    const title = page.frontmatter?.title;
                    const tags = page.frontmatter?.tags ?? [];
                    return (
                      <li class="section-li">
                        <div class="section">
                          <div class="desc">
                            <h3>
                              <a
                                href={resolveRelative(
                                  fileData.slug!,
                                  page.slug!,
                                )}
                                class="internal"
                              >
                                {title}
                              </a>
                            </h3>
                          </div>
                          <ul class="tags">
                            {tags.map((tag) => (
                              <li>
                                <a
                                  class="internal tag-link"
                                  href={resolveRelative(
                                    fileData.slug!,
                                    `tags/${tag}` as FullSlug,
                                  )}
                                >
                                  {tag}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  FolderContent.css = concatenateResources(style, PageList.css);
  return FolderContent;
}) satisfies QuartzComponentConstructor;
