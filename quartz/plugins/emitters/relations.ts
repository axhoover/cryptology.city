import { FullSlug, joinSegments } from "../../util/path";
import { QuartzEmitterPlugin } from "../types";
import { write } from "./helpers";
import fs from "node:fs";
import path from "node:path";

// Serves the relationship manifest at /static/relations.json.
//
// The manifest is BUILT by scripts/generate-relations.mjs, not here: it is
// derived from frontmatter that the lint has already validated, and it is
// committed so that consumers can read it from the repo without running a
// build. This emitter only copies it into the site output, so the served copy
// and the committed copy can never disagree.
//
// Its shape is an interface — see docs/relations-json.md before changing it.
export const Relations: QuartzEmitterPlugin = () => ({
  name: "Relations",
  async *emit(ctx) {
    const src = path.join(
      ctx.argv.directory,
      "..",
      ".reductions",
      "relations.json",
    );
    if (!fs.existsSync(src)) {
      console.warn(
        "Relations: .reductions/relations.json is missing — run `node scripts/generate-relations.mjs`",
      );
      return;
    }
    yield write({
      ctx,
      content: fs.readFileSync(src, "utf8"),
      slug: joinSegments("static", "relations") as FullSlug,
      ext: ".json",
    });
  },
});
