import { PageLayout, SharedLayout } from "./quartz/cfg";
import * as Component from "./quartz/components";
import { FileTrieNode } from "./quartz/util/fileTrie";

// What the explorer tree leaves out. Two suppressions, and they are not the
// same thing.
//
//   `unlisted: true`  hides a page from the explorer AND from folder listings.
//                     It is for the long tail of object pages that exist only
//                     so a hyperedge endpoint resolves.
//
//   Reductions/       hide their *leaves* from the explorer only. They
//   Barriers/         outnumber the object pages several times over, so
//                     expanding them into the sidebar buries the wiki proper.
//                     The folder nodes stay, and folderClickBehavior is "link",
//                     so clicking one still opens its folder page, which lists
//                     everything. Reductions are otherwise reached from the
//                     "Participates in" section of the objects they relate.
//
// Serialized with .toString() and re-evaluated client-side, so this must stay
// self-contained: no imports, no closure over module scope.
const explorerFilter = (node: FileTrieNode) => {
  if (node.slugSegment === "tags") return false;
  if ((node.data as { unlisted?: boolean } | null)?.unlisted === true)
    return false;
  if (!node.isFolder && /^(Reductions|Barriers)\//.test(String(node.slug))) {
    return false;
  }
  return true;
};

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/axhoover/cryptology.city",
      Bluesky: "https://bsky.app/profile/cryptology.city",
    },
  }),
};

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.TagList(),
    Component.ConditionalRender({
      component: Component.ContentMeta({ showReadingTime: false }),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({ filterFn: explorerFilter }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
};

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({ filterFn: explorerFilter }),
  ],
  right: [],
};
