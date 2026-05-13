declare module "*.scss" {
  const content: string
  export default content
}

declare module "micromorph" {
  export default function micromorph(from: Node, to: Node): Promise<void>
  export function diff(from: Node | undefined, to: Node | undefined): unknown
  export function patch(container: Node, patch: unknown): Promise<void>
}

type ContentIndex = Record<string, import("./plugins/emitters/contentIndex").ContentDetails>

declare const fetchData: Promise<ContentIndex>

interface CustomEventMap {
  nav: CustomEvent<{ url: import("./util/path").FullSlug }>
  prenav: CustomEvent<Record<string, never>>
  themechange: CustomEvent<{ theme: "light" | "dark" }>
  readermodechange: CustomEvent<{ mode: "on" | "off" }>
}

interface DocumentEventMap {
  nav: CustomEvent<{ url: import("./util/path").FullSlug }>
  prenav: CustomEvent<Record<string, never>>
  themechange: CustomEvent<{ theme: "light" | "dark" }>
  readermodechange: CustomEvent<{ mode: "on" | "off" }>
}

interface Window {
  addCleanup(fn: (...args: unknown[]) => void): void
  spaNavigate(url: URL, isBack?: boolean): void
}
