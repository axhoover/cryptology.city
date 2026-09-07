export const meta = {
  name: 'source-reductions-apply',
  description: 'Create missing reference stubs, apply verified research to every reduction/barrier page, then Fable-vet each batch for precision and brevity',
  phases: [
    { title: 'RefStubs', detail: 'reference pages that the verified sources need, from cryptobib data', model: 'opus' },
    { title: 'Edit', detail: 'one editor per batch applies the verified JSON', model: 'opus' },
    { title: 'Vet', detail: 'Fable pass per batch: fidelity, precision, brevity, lint' },
  ],
}

const SCRATCH = '/tmp/claude-0/-home-user-cryptology-city/33793fd8-0862-5ee6-a62f-c68f25db1bbd/scratchpad'
const REFMAP = `${SCRATCH}/final-refmap.json`

function limiter(n) {
  let active = 0
  const queue = []
  const pump = () => {
    while (active < n && queue.length) {
      active++
      const { fn, resolve } = queue.shift()
      fn().then(
        (r) => { active--; resolve(r); pump() },
        () => { active--; resolve(null); pump() },
      )
    }
  }
  return (fn) => new Promise((resolve) => { queue.push({ fn, resolve }); pump() })
}
const run = limiter(6)
let halted = false
async function guarded(label, thunk) {
  if (halted) { log(`skipping ${label}: halted after a failed agent`); return null }
  const r = await run(thunk)
  if (r === null && !halted) { halted = true; log(`agent ${label} failed — halting further launches`) }
  return r
}

const STUB_SUMMARY = {
  type: 'object',
  properties: {
    chunk: { type: 'string' },
    created: { type: 'array', items: { type: 'string' } },
    skipped_existing: { type: 'array', items: { type: 'string' } },
    problems: { type: 'array', items: { type: 'string' } },
  },
  required: ['chunk', 'created', 'skipped_existing', 'problems'],
}
const EDIT_SUMMARY = {
  type: 'object',
  properties: {
    batch: { type: 'string' },
    edited: { type: 'number' },
    annotated_wrong_claim: { type: 'number' },
    skipped: { type: 'number' },
    lint_clean: { type: 'boolean' },
    flags: { type: 'array', items: { type: 'string' } },
  },
  required: ['batch', 'edited', 'annotated_wrong_claim', 'skipped', 'lint_clean', 'flags'],
}
const VET_SUMMARY = {
  type: 'object',
  properties: {
    batch: { type: 'string' },
    vetted: { type: 'number' },
    changed: { type: 'array', items: { type: 'string' } },
    lint_clean: { type: 'boolean' },
    unresolved: { type: 'array', items: { type: 'string' } },
  },
  required: ['batch', 'vetted', 'changed', 'lint_clean', 'unresolved'],
}

// ---- Phase 1: reference stubs (barrier: edits need the files on disk for lint)
phase('RefStubs')
const stubResults = await parallel(args.chunks.map((chunk) => () =>
  guarded(`stubs:${chunk}`, () =>
    agent(
      `You create reference stub pages for the cryptology.city wiki (repo at /home/user/cryptology.city).

Read ${SCRATCH}/REFSTUB_INSTRUCTIONS.md FIRST and follow it exactly.

Your list of papers is ${SCRATCH}/refchunks/${chunk}.json (fields: key, ref_file_title, authors, venue, year, url, note — the note often records the cryptobib key the verifier found; confirm it in vendor/cryptobib/crypto.bib). Create one page per entry at content/References/<ref_file_title>.md, skipping any that already exist. Do not touch any other file. Return the structured summary.`,
      { label: `stubs:${chunk}`, phase: 'RefStubs', schema: STUB_SUMMARY, model: 'opus' },
    ))))
const stubsOk = stubResults.filter(Boolean)
log(`reference stubs: ${stubsOk.length}/${args.chunks.length} chunks done${halted ? ' — HALTED, skipping edits' : ''}`)
if (halted) return { halted, stubs: stubsOk, edits: [] }

// ---- Phase 2+3: edit then vet, pipelined per batch
const results = await pipeline(
  args.batches,
  (id) =>
    guarded(`edit:${id}`, () =>
      agent(
        `You apply verified research to wiki pages in the cryptology.city repo (/home/user/cryptology.city).

Read ${SCRATCH}/EDIT_INSTRUCTIONS.md FIRST and follow it exactly (it points at RESEARCH_INSTRUCTIONS.md in the same directory for field meanings). Read content/Reductions/prg-to-prf-ggm86.md as the house exemplar of a finished reduction page's Notes style.

Batch id: ${id}. Verified file: ${SCRATCH}/verified/${id}.json. Page list (ground truth): the entry with "id": "${id}" in ${SCRATCH}/batches.json. Reference filename map: ${REFMAP}.

Edit ONLY the pages in your batch. Run node scripts/lint.mjs on them when done and fix errors in your files. Do not commit. Return the structured summary.`,
        { label: `edit:${id}`, phase: 'Edit', schema: EDIT_SUMMARY, model: 'opus' },
      )),
  (editSummary, id) => {
    if (editSummary === null) return null
    return guarded(`vet:${id}`, () =>
      agent(
        `You are the final precision-and-brevity reviewer for edited pages in the cryptology.city repo (/home/user/cryptology.city).

Read ${SCRATCH}/VET_INSTRUCTIONS.md FIRST and follow it exactly.

Batch id: ${id}. Page list: the entry with "id": "${id}" in ${SCRATCH}/batches.json. The verified JSON the editor applied: ${SCRATCH}/verified/${id}.json. Reference filename map: ${REFMAP}. The editor's own summary of what it did: ${JSON.stringify(editSummary)}.

Edit ONLY the pages in your batch. Run node scripts/lint.mjs on them and fix every error in those files. Do not commit. Return the structured summary.`,
        { label: `vet:${id}`, phase: 'Vet', schema: VET_SUMMARY },
      )).then((v) => ({ id, edit: editSummary, vet: v }))
  },
)

const done = results.filter((r) => r && r.vet)
log(`${done.length}/${args.batches.length} batches edited and vetted${halted ? ' (halted early)' : ''}`)
return {
  halted,
  stubs: stubsOk,
  done: done.map((r) => r.id),
  notDone: args.batches.filter((id) => !done.some((r) => r.id === id)),
  summaries: done,
}
