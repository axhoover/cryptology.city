/**
 * rename-slugs.mjs
 *
 * 1. Injects old display names into frontmatter `aliases:` of files being renamed.
 * 2. Uses `git mv` to rename each file.
 * 3. Updates all wiki-links in all content/*.md files to use the new slug.
 *
 * Run from repo root: node scripts/rename-slugs.mjs
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
const CONTENT = path.resolve("content");

// ---------------------------------------------------------------------------
// Rename map: { oldRel, newRel, oldSlug, newSlug, extraAliases? }
//   oldRel / newRel are relative to CONTENT
//   oldSlug = filename without .md (for wiki-link matching)
//   newSlug = filename without .md (new target for wiki-links)
//   extraAliases = additional strings to inject into aliases beyond oldSlug
// ---------------------------------------------------------------------------
const RENAMES = [
  // Root
  {
    oldRel: "(Beyond) Impagliazzo's Five Worlds.md",
    newRel: "impagliazzos-five-worlds.md",
  },

  // Glossary
  {
    oldRel: "Glossary/Fiat-Shamir Heuristic.md",
    newRel: "Glossary/fiat-shamir-heuristic.md",
  },
  {
    oldRel: "Glossary/Generic Group Model.md",
    newRel: "Glossary/generic-group-model.md",
  },
  { oldRel: "Glossary/LaTeX macros.md", newRel: "Glossary/latex-macros.md" },
  {
    oldRel: "Glossary/Random Oracle Model.md",
    newRel: "Glossary/random-oracle-model.md",
  },
  {
    oldRel: "Glossary/Universal Composability Framework.md",
    newRel: "Glossary/universal-composability-framework.md",
  },

  // Folklore
  {
    oldRel: "Folklore/Switching Lemma.md",
    newRel: "Folklore/switching-lemma.md",
  },

  // Assumptions
  {
    oldRel: "Assumptions/Computational Diffie-Hellman.md",
    newRel: "Assumptions/computational-diffie-hellman.md",
  },
  {
    oldRel: "Assumptions/Crypto Dark Matter.md",
    newRel: "Assumptions/alternating-moduli.md",
  },
  {
    oldRel: "Assumptions/Decisional Diffie-Hellman.md",
    newRel: "Assumptions/decisional-diffie-hellman.md",
  },
  {
    oldRel: "Assumptions/Discrete logarithm.md",
    newRel: "Assumptions/discrete-logarithm.md",
  },
  {
    oldRel: "Assumptions/Learning parity with noise.md",
    newRel: "Assumptions/learning-parity-with-noise.md",
  },
  {
    oldRel: "Assumptions/Learning with errors.md",
    newRel: "Assumptions/learning-with-errors.md",
  },
  { oldRel: "Assumptions/NTRU.md", newRel: "Assumptions/ntru.md" },
  {
    oldRel: "Assumptions/Ring Learning with Errors.md",
    newRel: "Assumptions/ring-learning-with-errors.md",
  },
  {
    oldRel: "Assumptions/Supersingular Isogeny Diffie-Hellman.md",
    newRel: "Assumptions/supersingular-isogeny-diffie-hellman.md",
  },

  // Complexity
  {
    oldRel: "Complexity/Arthur-Merlin.md",
    newRel: "Complexity/arthur-merlin.md",
  },
  {
    oldRel: "Complexity/Bounded-Error Probabilistic Polynomial-Time.md",
    newRel: "Complexity/bounded-error-probabilistic-polynomial-time.md",
  },
  {
    oldRel: "Complexity/Bounded-Error Quantum Polynomial-Time.md",
    newRel: "Complexity/bounded-error-quantum-polynomial-time.md",
  },
  {
    oldRel: "Complexity/Computational zero-knowledge.md",
    newRel: "Complexity/computational-zero-knowledge.md",
  },
  {
    oldRel: "Complexity/Interactive Proof Systems.md",
    newRel: "Complexity/interactive-proof-systems.md",
  },
  {
    oldRel: "Complexity/Nondeterministic Polynomial-Time.md",
    newRel: "Complexity/nondeterministic-polynomial-time.md",
  },
  {
    oldRel: "Complexity/Polynomial-Space.md",
    newRel: "Complexity/polynomial-space.md",
  },
  {
    oldRel: "Complexity/Polynomial-Time Hierarchy.md",
    newRel: "Complexity/polynomial-time-hierarchy.md",
    extraAliases: ["Polynomial Hierarchy"],
  },
  {
    oldRel: "Complexity/Polynomial-Time.md",
    newRel: "Complexity/polynomial-time.md",
  },
  {
    oldRel: "Complexity/Statistical zero-knowledge.md",
    newRel: "Complexity/statistical-zero-knowledge.md",
  },

  // Primitives
  {
    oldRel: "Primitives/Digital signature.md",
    newRel: "Primitives/digital-signature.md",
  },
  {
    oldRel: "Primitives/Distributed Point Functions.md",
    newRel: "Primitives/distributed-point-function.md",
    extraAliases: ["Distributed Point Functions", "DPFs"],
  },
  {
    oldRel: "Primitives/Doubly-efficient PIR.md",
    newRel: "Primitives/doubly-efficient-pir.md",
  },
  {
    oldRel: "Primitives/Fingerprinting Code.md",
    newRel: "Primitives/fingerprinting-code.md",
  },
  {
    oldRel: "Primitives/Homomorphic encryption.md",
    newRel: "Primitives/homomorphic-encryption.md",
  },
  {
    oldRel: "Primitives/Indistinguishability Obfuscation.md",
    newRel: "Primitives/indistinguishability-obfuscation.md",
  },
  {
    oldRel: "Primitives/Message authentication code.md",
    newRel: "Primitives/message-authentication-code.md",
  },
  {
    oldRel: "Primitives/Multi-server Private Information Retrieval.md",
    newRel: "Primitives/multi-server-private-information-retrieval.md",
  },
  {
    oldRel: "Primitives/Oblivious RAM.md",
    newRel: "Primitives/oblivious-ram.md",
  },
  {
    oldRel: "Primitives/Oblivious Transfer.md",
    newRel: "Primitives/oblivious-transfer.md",
  },
  {
    oldRel: "Primitives/One-way permutation.md",
    newRel: "Primitives/one-way-permutation.md",
    extraAliases: ["One-way permutations"],
  },
  {
    oldRel: "Primitives/Pseudorandom error-correcting code.md",
    newRel: "Primitives/pseudorandom-error-correcting-code.md",
  },
  {
    oldRel: "Primitives/Pseudorandom function.md",
    newRel: "Primitives/pseudorandom-function.md",
  },
  {
    oldRel: "Primitives/Pseudorandom generator.md",
    newRel: "Primitives/pseudorandom-generator.md",
  },
  {
    oldRel: "Primitives/Pseudorandom permutation.md",
    newRel: "Primitives/pseudorandom-permutation.md",
  },
  {
    oldRel: "Primitives/Public key encryption.md",
    newRel: "Primitives/public-key-encryption.md",
  },
  {
    oldRel: "Primitives/Single-Server Private Information Retrieval.md",
    newRel: "Primitives/single-server-private-information-retrieval.md",
    extraAliases: ["Single-server Private Information Retrieval"],
  },
  {
    oldRel: "Primitives/Symmetric key encryption.md",
    newRel: "Primitives/symmetric-key-encryption.md",
  },
  {
    oldRel:
      "Primitives/Symmetric private information retrieval (Multi-server).md",
    newRel:
      "Primitives/symmetric-private-information-retrieval-multi-server.md",
  },
  {
    oldRel:
      "Primitives/Symmetric private information retrieval (Single-server).md",
    newRel:
      "Primitives/symmetric-private-information-retrieval-single-server.md",
  },
  {
    oldRel: "Primitives/Trapdoor function.md",
    newRel: "Primitives/trapdoor-function.md",
  },
  {
    oldRel: "Primitives/Trapdoor hash functions.md",
    newRel: "Primitives/trapdoor-hash-function.md",
    extraAliases: ["Trapdoor hash functions"],
  },
];

// Derive slugs from filenames
for (const r of RENAMES) {
  r.oldSlug = path.basename(r.oldRel, ".md");
  r.newSlug = path.basename(r.newRel, ".md");
  if (!r.extraAliases) r.extraAliases = [];
}

// Special: One-way function → hash-function (merged file, no rename needed)
const LINK_ONLY_MAPS = [
  { oldSlug: "One-way function", newSlug: "hash-function" },
  { oldSlug: "Collision-resistant hash function", newSlug: "hash-function" },
  { oldSlug: "Polynomial Hierarchy", newSlug: "polynomial-time-hierarchy" },
  // Case variants that appear in links
  { oldSlug: "One-way permutations", newSlug: "one-way-permutation" },
  {
    oldSlug: "Distributed Point Functions",
    newSlug: "distributed-point-function",
  },
  { oldSlug: "Trapdoor hash functions", newSlug: "trapdoor-hash-function" },
  {
    oldSlug: "Single-server Private Information Retrieval",
    newSlug: "single-server-private-information-retrieval",
  },
  {
    oldSlug: "Symmetric private information retrieval (Single-server)",
    newSlug: "symmetric-private-information-retrieval-single-server",
  },
  {
    oldSlug: "Symmetric private information retrieval (Multi-server)",
    newSlug: "symmetric-private-information-retrieval-multi-server",
  },
];

// Build complete old→new slug map (case-insensitive keys)
const slugMap = new Map(); // lowercase(oldSlug) → newSlug
for (const r of RENAMES) {
  if (r.oldSlug !== r.newSlug) {
    slugMap.set(r.oldSlug.toLowerCase(), r.newSlug);
  }
  for (const alias of r.extraAliases) {
    slugMap.set(alias.toLowerCase(), r.newSlug);
  }
}
for (const m of LINK_ONLY_MAPS) {
  slugMap.set(m.oldSlug.toLowerCase(), m.newSlug);
}

// ---------------------------------------------------------------------------
// Step 1: Inject old names into aliases frontmatter
// ---------------------------------------------------------------------------
function injectAliases(filePath, aliasesToAdd) {
  let content = fs.readFileSync(filePath, "utf8").replace(/\r\n/g, "\n");

  // Find the aliases: block in frontmatter
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) {
    console.warn(`  No frontmatter found in ${filePath}`);
    return;
  }

  let fm = fmMatch[1];
  const fmStart = 4; // after "---\n"
  const fmEnd = fmStart + fmMatch[1].length;

  // Determine which aliases are already present
  const aliasesBlockMatch = fm.match(/^aliases:\n((?:  - .+\n?)*)/m);
  const alreadyPresent = new Set();

  if (aliasesBlockMatch) {
    const existing = aliasesBlockMatch[1];
    for (const line of existing.split("\n")) {
      const m = line.match(/^\s+-\s+(.+)$/);
      if (m) alreadyPresent.add(m[1].trim().replace(/^["']|["']$/g, ""));
    }
  }

  const toAdd = aliasesToAdd.filter((a) => !alreadyPresent.has(a));
  if (toAdd.length === 0) return;

  const newLines = toAdd.map((a) => `  - ${a}`).join("\n");

  let newFm;
  if (aliasesBlockMatch) {
    // Append to existing aliases block
    newFm = fm.replace(
      /^(aliases:\n(?:  - .+\n?)*)/m,
      (match) => match.trimEnd() + "\n" + newLines + "\n",
    );
  } else {
    // Insert aliases: block at start of frontmatter
    newFm = `aliases:\n${newLines}\n${fm}`;
  }

  content = content.slice(0, fmStart) + newFm + content.slice(fmEnd);
  fs.writeFileSync(filePath, content.replace(/\n/g, "\r\n"), "utf8");
}

console.log("=== Step 1: Injecting aliases ===");

// Also inject into hash-function.md for the merged files
const hashFunctionPath = path.join(CONTENT, "Primitives", "hash-function.md");
if (fs.existsSync(hashFunctionPath)) {
  injectAliases(hashFunctionPath, [
    "One-way function",
    "Collision-resistant hash function",
  ]);
  console.log(
    "  hash-function.md ← One-way function, Collision-resistant hash function",
  );
}

for (const r of RENAMES) {
  if (r.oldSlug === r.newSlug) continue;
  const filePath = path.join(CONTENT, r.oldRel);
  if (!fs.existsSync(filePath)) {
    console.warn(`  MISSING: ${r.oldRel}`);
    continue;
  }
  const aliasesToAdd = [r.oldSlug, ...r.extraAliases];
  injectAliases(filePath, aliasesToAdd);
  console.log(`  ${r.oldRel} ← ${aliasesToAdd.join(", ")}`);
}

// ---------------------------------------------------------------------------
// Step 2: git mv renames
// ---------------------------------------------------------------------------
console.log("\n=== Step 2: git mv renames ===");

for (const r of RENAMES) {
  if (r.oldSlug === r.newSlug) continue; // already correct filename
  const oldPath = path.join(CONTENT, r.oldRel);
  const newPath = path.join(CONTENT, r.newRel);
  if (!fs.existsSync(oldPath)) {
    console.warn(`  SKIP (missing): ${r.oldRel}`);
    continue;
  }
  try {
    execSync(`git mv "${oldPath}" "${newPath}"`, { stdio: "pipe" });
    console.log(`  ${r.oldRel} → ${r.newRel}`);
  } catch (e) {
    console.error(
      `  ERROR renaming ${r.oldRel}: ${e.stderr?.toString() || e.message}`,
    );
  }
}

// ---------------------------------------------------------------------------
// Step 3: Update wiki-links in all content .md files
// ---------------------------------------------------------------------------
console.log("\n=== Step 3: Updating wiki-links ===");

// Collect all .md files recursively under CONTENT
function walkMd(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkMd(full, results);
    } else if (entry.name.endsWith(".md")) {
      results.push(full);
    }
  }
  return results;
}

const allMdFiles = walkMd(CONTENT);

// Wiki-link regex: [[target]] [[target|label]] [[target#anchor]] [[target#anchor|label]]
// We capture: target (group 1), optional #anchor (group 2), optional |label (group 3)
const wikiLinkRe = /\[\[([^\]|#\n]+?)(#[^\]|\n]+?)?(\|[^\]\n]+?)?\]\]/g;

let totalFilesChanged = 0;
let totalLinksChanged = 0;

for (const filePath of allMdFiles) {
  let content = fs.readFileSync(filePath, "utf8").replace(/\r\n/g, "\n");
  let changed = false;
  let linksChangedInFile = 0;

  const newContent = content.replace(
    wikiLinkRe,
    (match, target, anchor, label) => {
      const trimmedTarget = target.trim();
      const key = trimmedTarget.toLowerCase();
      const newSlug = slugMap.get(key);
      if (newSlug && newSlug !== trimmedTarget) {
        linksChangedInFile++;
        changed = true;
        // Reconstruct: [[newSlug#anchor|label]]
        return `[[${newSlug}${anchor || ""}${label || ""}]]`;
      }
      return match;
    },
  );

  if (changed) {
    fs.writeFileSync(filePath, newContent.replace(/\n/g, "\r\n"), "utf8");
    totalFilesChanged++;
    totalLinksChanged += linksChangedInFile;
    console.log(
      `  ${path.relative(CONTENT, filePath)} (${linksChangedInFile} links)`,
    );
  }
}

console.log(
  `\nDone. ${totalFilesChanged} files updated, ${totalLinksChanged} links rewritten.`,
);
