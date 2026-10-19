import test, { describe } from "node:test";
import assert from "node:assert";
import vm from "node:vm";
import { lowercaseRetry } from "./lowercaseRetry";

const ORIGIN = "https://cryptology.city";

// Runs the inline script on a 404 for `href`. `exists` decides what the mocked
// HEAD answers, so a test can make every request succeed.
async function run(href: string, exists: (url: URL) => boolean) {
  const location = new URL(href);
  const fetched: URL[] = [];
  const navigated: URL[] = [];
  const context = {
    URL,
    location: {
      get pathname() {
        return location.pathname;
      },
      get search() {
        return location.search;
      },
      get hash() {
        return location.hash;
      },
      get origin() {
        return location.origin;
      },
      replace: (to: string) => navigated.push(new URL(to, location)),
    },
    fetch: (to: string) => {
      const url = new URL(to, location);
      fetched.push(url);
      return Promise.resolve({ ok: exists(url) });
    },
  };
  vm.runInNewContext(lowercaseRetry, context);
  await new Promise((r) => setImmediate(r));
  return { fetched, navigated };
}

const aliases = new Set(["/prf", "/pir"]);
const isAlias = (url: URL) => aliases.has(url.pathname);

describe("404 lowercase retry", () => {
  test("a mixed-case alias redirects to its lowercase slug", async () => {
    const { navigated } = await run(`${ORIGIN}/Prf`, isAlias);
    assert.deepStrictEqual(
      navigated.map((u) => u.href),
      [`${ORIGIN}/prf`],
    );
  });

  test("query and fragment are kept", async () => {
    const { navigated } = await run(`${ORIGIN}/PiR?x=1#top`, isAlias);
    assert.deepStrictEqual(
      navigated.map((u) => u.href),
      [`${ORIGIN}/pir?x=1#top`],
    );
  });

  test("an already-lowercase miss makes no request", async () => {
    const { fetched, navigated } = await run(`${ORIGIN}/nope`, isAlias);
    assert.strictEqual(fetched.length, 0);
    assert.strictEqual(navigated.length, 0);
  });

  test("a missing mixed-case path stays on the 404", async () => {
    const { navigated } = await run(`${ORIGIN}/NotAnAlias`, isAlias);
    assert.strictEqual(navigated.length, 0);
  });

  test("a double-slash path never leaves the origin", async () => {
    for (const href of [
      `${ORIGIN}//AtTaCkEr.example/review`,
      `${ORIGIN}//AtTaCkEr.example/review?q=1#f`,
      `${ORIGIN}///AtTaCkEr.example/review`,
    ]) {
      const { fetched, navigated } = await run(href, () => true);
      for (const u of [...fetched, ...navigated]) {
        assert.strictEqual(u.origin, ORIGIN, `${href} reached ${u.href}`);
      }
    }
  });
});
