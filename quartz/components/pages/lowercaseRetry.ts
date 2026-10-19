// Alias shortcuts are case-insensitive: AliasRedirects also writes each alias
// at its lowercase slug, so the 404 page retries a mixed-case miss there.
//
// The candidate is resolved against the current origin, with leading slashes
// collapsed so that "//Host/x" cannot become a scheme-relative URL, and is
// dropped unless it stays on that origin. The HEAD request and the navigation
// both use the validated URL.
export const lowercaseRetry = `(() => {
  try {
    const path = decodeURI(location.pathname);
    const lower = path.toLowerCase();
    if (lower === path) return;
    const url = new URL(encodeURI(lower).replace(/^\\/+/, "/"), location.origin);
    if (url.origin !== location.origin) return;
    url.search = location.search;
    url.hash = location.hash;
    fetch(url.href, { method: "HEAD", mode: "same-origin" })
      .then((r) => {
        if (r.ok) location.replace(url.href);
      })
      .catch(() => {});
  } catch {}
})();`;
