import { i18n } from "../../i18n";
import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../types";

// Alias shortcuts are case-insensitive: AliasRedirects also writes each alias
// at its lowercase slug, so a miss on a mixed-case path is retried there.
const lowercaseRetry = `(() => {
  try {
    const path = decodeURI(location.pathname);
    const lower = path.toLowerCase();
    if (lower === path) return;
    const url = encodeURI(lower);
    fetch(url, { method: "HEAD" })
      .then((r) => {
        if (r.ok) location.replace(url + location.search + location.hash);
      })
      .catch(() => {});
  } catch {}
})();`;

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`);
  const baseDir = url.pathname;

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
      <script dangerouslySetInnerHTML={{ __html: lowercaseRetry }} />
    </article>
  );
};

export default (() => NotFound) satisfies QuartzComponentConstructor;
