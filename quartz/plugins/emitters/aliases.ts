import {
  FullSlug,
  isRelativeURL,
  resolveRelative,
  simplifySlug,
} from "../../util/path";
import { QuartzEmitterPlugin } from "../types";
import { write } from "./helpers";
import { BuildCtx } from "../../util/ctx";
import { VFile } from "vfile";
import path from "path";

export interface AliasSource {
  slug: FullSlug;
  aliases: FullSlug[];
}

export interface AliasRedirect {
  // where the redirect page is written
  slug: FullSlug;
  // the page it points to
  target: FullSlug;
}

function aliasTargetSlugs(file: AliasSource): FullSlug[] {
  const ogSlug = simplifySlug(file.slug);
  return file.aliases.map(
    (aliasTarget) =>
      (isRelativeURL(aliasTarget)
        ? path.normalize(path.join(ogSlug, "..", aliasTarget))
        : aliasTarget) as FullSlug,
  );
}

// Alias shortcuts are case-insensitive. Every alias is written at its own slug
// and again at its lowercase slug, unless that slug is a page, another alias,
// or the lowercase form of an alias on a different page (then neither page
// gets it). The 404 page retries mixed-case misses at the lowercase path.
export function aliasRedirects(
  files: AliasSource[],
  allSlugs: Iterable<FullSlug>,
): AliasRedirect[] {
  const taken = new Set<string>(allSlugs);
  const out: AliasRedirect[] = [];
  const lowerOwners = new Map<string, Set<FullSlug>>();
  for (const file of files) {
    for (const slug of aliasTargetSlugs(file)) {
      out.push({ slug, target: file.slug });
      const lower = slug.toLowerCase();
      if (lower === slug || taken.has(lower)) continue;
      if (!lowerOwners.has(lower)) lowerOwners.set(lower, new Set());
      lowerOwners.get(lower)!.add(file.slug);
    }
  }
  for (const [lower, owners] of lowerOwners) {
    if (owners.size !== 1) continue;
    out.push({ slug: lower as FullSlug, target: [...owners][0] });
  }
  return out;
}

function redirectPage(ctx: BuildCtx, { slug, target }: AliasRedirect) {
  const ogSlug = simplifySlug(target);
  const redirUrl = resolveRelative(slug, ogSlug);
  return write({
    ctx,
    content: `
        <!DOCTYPE html>
        <html lang="en-us">
        <head>
        <title>${ogSlug}</title>
        <link rel="canonical" href="${redirUrl}">
        <meta name="robots" content="noindex">
        <meta charset="utf-8">
        <meta http-equiv="refresh" content="0; url=${redirUrl}">
        </head>
        </html>
        `,
    slug,
    ext: ".html",
  });
}

const aliasSource = (file: VFile): AliasSource => ({
  slug: file.data.slug!,
  aliases: file.data.aliases ?? [],
});

export const AliasRedirects: QuartzEmitterPlugin = () => ({
  name: "AliasRedirects",
  async *emit(ctx, content) {
    const files = content.map(([_tree, file]) => aliasSource(file));
    for (const redirect of aliasRedirects(files, ctx.allSlugs)) {
      yield redirectPage(ctx, redirect);
    }
  },
  async *partialEmit(ctx, _content, _resources, changeEvents) {
    for (const changeEvent of changeEvents) {
      if (!changeEvent.file) continue;
      if (changeEvent.type === "add" || changeEvent.type === "change") {
        // add new ones if this file still exists
        const files = [aliasSource(changeEvent.file)];
        for (const redirect of aliasRedirects(files, ctx.allSlugs)) {
          yield redirectPage(ctx, redirect);
        }
      }
    }
  },
});
