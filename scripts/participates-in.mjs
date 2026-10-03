// The "Participates in" section of an object page, as a pure function of the
// hypergraph. Shared by scripts/generate-relations.mjs and
// test/participates-in.test.ts.
//
// An edge is listed on a page when the page is one of its endpoints, either by
// the page's own `id` or by one of the `variants` the page declares; a line
// reached through a variant names it, so a reader sees which section of the
// page the edge is about. Two further headings list the edges that use the page
// without having it as an endpoint: reductions proved in the idealised model
// the page defines (`model`), and reductions whose `via` links to the page.

/**
 * The object page each idealised `model` value is defined on. A model with no
 * entry here, or whose id has no page, gets no "Proved in" heading anywhere.
 */
export const MODEL_PAGES = {
  rom: "rom",
  "generic-group": "ggm",
  "algebraic-group": "agm",
};

const byId = (xs) => [...xs].sort((a, b) => a.id.localeCompare(b.id));

/** The page part of a wikilink, `[[slug#anchor|text]]` -> `slug`. */
const wikilinkTarget = (s) =>
  /\[\[([^\]|#]*)/.exec(String(s))?.[1]?.trim() ?? null;

/**
 * Builds the section renderer once for a whole graph.
 *
 *   objects     Map id -> { id, kind: "object" | "variant", slug, title,
 *               aliases?, anchor? (variants), of? (variants: the page's id) }
 *   reductions  [{ id, slug, title, hypotheses, conclusion, model?, via? }]
 *   barriers    [{ id, slug, title, hypotheses, conclusion, circumventedBy? }]
 *
 * Returns `(id) => string | null`: the section body for the page whose `id` is
 * `id`, or null when nothing relates to it. Lines within a heading are sorted
 * by edge id, so the output is a function of the graph alone.
 */
export function makeParticipatesIn({ objects, reductions, barriers }) {
  const variantsOf = new Map(); // page id -> its variant ids
  const bySlug = new Map(); // lower-cased slug or alias -> page id
  for (const o of objects.values()) {
    if (o.kind === "variant") {
      if (!o.of) continue;
      if (!variantsOf.has(o.of)) variantsOf.set(o.of, []);
      variantsOf.get(o.of).push(o.id);
    } else {
      bySlug.set(String(o.slug).toLowerCase(), o.id);
    }
  }
  // Aliases only where no slug claims the name; the lint keeps both unique.
  for (const o of objects.values())
    if (o.kind !== "variant")
      for (const a of o.aliases ?? []) {
        const k = String(a).toLowerCase();
        if (!bySlug.has(k)) bySlug.set(k, o.id);
      }
  const pageOfLink = (s) => {
    const t = wikilinkTarget(s);
    return t ? (bySlug.get(t.split("/").pop().toLowerCase()) ?? null) : null;
  };

  const linkTo = (id) => {
    const o = objects.get(id);
    if (!o) return `\`${id}\``;
    return o.kind === "variant"
      ? `[[${o.slug}${o.anchor}|${o.title}]]`
      : `[[${o.slug}|${o.title}]]`;
  };
  const edgeLink = (e) => `[[${e.slug}|${e.title}]]`;
  const reductionById = new Map(reductions.map((r) => [r.id, r]));
  // A barrier line names the reductions that get around it, so a reader of the
  // object page does not take the barrier for the last word.
  const circumvention = (b) => {
    const around = (b.circumventedBy ?? [])
      .map((id) => reductionById.get(id))
      .filter(Boolean)
      .map(edgeLink);
    return around.length ? ` — circumvented by ${around.join(", ")}` : "";
  };

  return function participatesIn(id) {
    const variants = new Set(variantsOf.get(id) ?? []);
    // How an edge meets the page through `ends`: null when it does not, "" when
    // the page's own id is an endpoint, and otherwise the variants it meets.
    const meet = (ends) => {
      if (ends.includes(id)) return "";
      const vs = [...new Set(ends.filter((x) => variants.has(x)))].sort();
      return vs.length ? ` (via ${vs.map(linkTo).join(", ")})` : null;
    };
    const matching = (edges, ends) =>
      byId(edges)
        .map((e) => ({ e, note: meet(ends(e)) }))
        .filter((m) => m.note !== null);

    const asHyp = matching(reductions, (r) => r.hypotheses ?? []);
    const asConcl = matching(reductions, (r) => [r.conclusion]);
    const bars = matching(barriers, (b) => [
      ...(b.hypotheses ?? []),
      b.conclusion,
    ]);
    // No reduction is listed twice in one region: Proved in skips what Builds
    // on or Produces lists, and Used via skips all three.
    const listed = new Set([...asHyp, ...asConcl].map((m) => m.e.id));
    const unlisted = (r) => !listed.has(r.id);
    const inModel = byId(
      reductions.filter((r) => MODEL_PAGES[r.model] === id && unlisted(r)),
    );
    for (const r of inModel) listed.add(r.id);
    const usedVia = byId(
      reductions.filter(
        (r) => unlisted(r) && (r.via ?? []).some((v) => pageOfLink(v) === id),
      ),
    );
    if (
      !asHyp.length &&
      !asConcl.length &&
      !bars.length &&
      !inModel.length &&
      !usedVia.length
    )
      return null;

    const title = objects.get(id)?.title ?? id;
    const lines = ["## Participates in", ""];
    const section = (heading, rows) => {
      if (!rows.length) return;
      lines.push(`**${heading}**`, "");
      for (const row of rows) lines.push(`- ${row}`);
      lines.push("");
    };
    section(
      `Builds on ${title}`,
      asHyp.map((m) => edgeLink(m.e) + m.note),
    );
    section(
      `Produces ${title}`,
      asConcl.map((m) => edgeLink(m.e) + m.note),
    );
    section(
      "Barriers",
      bars.map((m) => edgeLink(m.e) + m.note + circumvention(m.e)),
    );
    section(`Proved in the ${title}`, inModel.map(edgeLink));
    section(`Used via ${title}`, usedVia.map(edgeLink));
    return lines.join("\n").trimEnd();
  };
}
