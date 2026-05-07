import { QuartzConfig } from "./quartz/cfg";
import * as Plugin from "./quartz/plugins";
import { customMacros } from "./macros";

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Cryptology City",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      websiteId: "4b10a295-ff99-4236-9208-f1ae77c082bd",
      host: "https://analytics.axhoover.com",
    },
    locale: "en-US",
    baseUrl: "cryptology.city",
    ignorePatterns: ["private", "Templates", ".obsidian", "vendor"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Source Serif 4",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f0edf7",
          gray: "#c0b0d5",
          darkgray: "#3a2d4a",
          dark: "#1a0a2e",
          secondary: "#5a1f8a",
          tertiary: "#7a30b8",
          highlight: "rgba(90, 31, 138, 0.08)",
          textHighlight: "#e0c8ff88",
        },
        darkMode: {
          light: "#141414",
          lightgray: "#242424",
          gray: "#4a4a4a",
          darkgray: "#d0d0d0",
          dark: "#f0f0f0",
          secondary: "#b07ad4",
          tertiary: "#c89af0",
          highlight: "rgba(176, 122, 212, 0.12)",
          textHighlight: "#7030a888",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.Pseudocode({ macros: customMacros }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.Bibtex(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex", customMacros }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage({
        sort: (f1, f2) => {
          const t1 = f1.frontmatter?.title?.toLowerCase() ?? "";
          const t2 = f2.frontmatter?.title?.toLowerCase() ?? "";
          return t1.localeCompare(t2);
        },
      }),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
};

export default config;
