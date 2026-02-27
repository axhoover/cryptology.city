import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Cryptology City",
    pageTitleSuffix: " | Cryptology City",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      websiteId: "4b10a295-ff99-4236-9208-f1ae77c082bd",
      host: "https://analytics.axhoover.com",
    },
    locale: "en-US",
    baseUrl: "cryptology.city",
    ignorePatterns: ["private", "Templates", ".obsidian"],
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
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({
        renderEngine: "katex",
        customMacros: {
          // Caligraphic letters
          "\\calA": "\\mathcal{A}",
          "\\calB": "\\mathcal{B}",
          "\\calC": "\\mathcal{C}",
          "\\calD": "\\mathcal{D}",
          "\\calE": "\\mathcal{E}",
          "\\calF": "\\mathcal{F}",
          "\\calG": "\\mathcal{G}",
          "\\calH": "\\mathcal{H}",
          "\\calI": "\\mathcal{I}",
          "\\calJ": "\\mathcal{J}",
          "\\calK": "\\mathcal{K}",
          "\\calL": "\\mathcal{L}",
          "\\calM": "\\mathcal{M}",
          "\\calN": "\\mathcal{N}",
          "\\calO": "\\mathcal{O}",
          "\\calP": "\\mathcal{P}",
          "\\calQ": "\\mathcal{Q}",
          "\\calR": "\\mathcal{R}",
          "\\calS": "\\mathcal{S}",
          "\\calT": "\\mathcal{T}",
          "\\calU": "\\mathcal{U}",
          "\\calV": "\\mathcal{V}",
          "\\calW": "\\mathcal{W}",
          "\\calX": "\\mathcal{X}",
          "\\calY": "\\mathcal{Y}",
          "\\calZ": "\\mathcal{Z}",
          // Common algorithms
          "\\Gen": "\\mathsf{Gen}",
          "\\Enc": "\\mathsf{Enc}",
          "\\Dec": "\\mathsf{Dec}",
          "\\Setup": "\\mathsf{Setup}",
          "\\Query": "\\mathsf{Query}",
          // Number sets
          "\\NN": "\\mathbb{N}",
          "\\ZZ": "\\mathbb{Z}",
          "\\FF": "\\mathbb{F}",
          "\\GG": "\\mathbb{G}",
          // Crypto shorthand
          "\\bits": "\\{0,1\\}",
          "\\negl": "\\mathrf{negl}",
          "\\poly": "\\mathrf{poly}",
          "\\PPT": "\\mathrf{PPT}",
          "\\secpar": "\\lambda",
          // Advantages and experiments
          "\\Adv": "\\mathbf{Adv}",
          "\\Expt": "\\mathbf{Expt}",
          "\\Game": "\\mathbf{Game}",
          // Game names
          "\\indcpa": "\\mathrf{IND\\mbox{-}CPA}",
          "\\indcca": "\\mathrf{IND\\mbox{-}CCA}",
          "\\eucma": "\\mathrf{EU\\mbox{-}CMA}",
          "\\sufcma": "\\mathrf{SUF\\mbox{-}CMA}",
        },
      }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
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
}

export default config
