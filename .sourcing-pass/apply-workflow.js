export const meta = {
  name: 'source-reductions-apply',
  description: 'Apply verified research to reduction/barrier pages (Opus editors), then an Opus precision-and-brevity vet per batch',
  phases: [
    { title: 'RefStubs', detail: 'reference pages that the verified sources need, from cryptobib data', model: 'opus' },
    { title: 'Edit', detail: 'one editor per batch applies the verified JSON', model: 'opus' },
    { title: 'Vet', detail: 'one reviewer per batch: fidelity, precision, brevity, lint', model: 'opus' },
  ],
}

// args: { chunks: [], batches: [...], vetOnly: [...], limit: 3 }
//   chunks   reference-stub chunk ids to create first (may be empty)
//   batches  batch ids to edit then vet
//   vetOnly  batch ids already edited: vet only
//   limit    max concurrent agents
const SCRATCH = '/tmp/claude-0/-home-user-cryptology-city/33793fd8-0862-5ee6-a62f-c68f25db1bbd/scratchpad'
const REFMAP = `${SCRATCH}/final-refmap.json`
const MODEL = 'opus'
const chunks = args.chunks || []
const batches = args.batches || []
const vetOnly = new Set(args.vetOnly || [])
const LIMIT = args.limit || 3

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
const run = limiter(LIMIT)

// One retry absorbs a transient 529; a second failure (usage limit) halts all new launches.
let halted = false
async function guarded(label, thunk) {
  for (let attempt = 1; attempt <= 2; attempt++) {
    if (halted) { log(`skipping ${label}: halted`); return null }
    const r = await run(thunk)
    if (r !== null) return r
    log(`${label} failed (attempt ${attempt})`)
  }
  if (!halted) { halted = true; log(`halting further launches after ${label} failed twice`) }
  return null
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
let stubsOk = []
if (chunks.length) {
  phase('RefStubs')
  const stubResults = await parallel(chunks.map((chunk) => () =>
    guarded(`stubs:${chunk}`, () =>
      agent(
        `You create reference stub pages for the cryptology.city wiki (repo at /home/user/cryptology.city).

Read ${SCRATCH}/REFSTUB_INSTRUCTIONS.md FIRST and follow it exactly.

Your list of papers is ${SCRATCH}/refchunks/${chunk}.json. Create one page per entry at content/References/<ref_file_title>.md, skipping any that already exist. Do not touch any other file. Return the structured summary.`,
        { label: `stubs:${chunk}`, phase: 'RefStubs', schema: STUB_SUMMARY, model: MODEL },
      ))))
  stubsOk = stubResults.filter(Boolean)
  log(`reference stubs: ${stubsOk.length}/${chunks.length} chunks done`)
  if (halted) return { halted, stubs: stubsOk, done: [], notDone: [...vetOnly, ...batches] }
}

const vetPrompt = (id, editSummary) => `You are the final precision-and-brevity reviewer for edited pages in the cryptology.city repo (/home/user/cryptology.city).

Read ${SCRATCH}/VET_INSTRUCTIONS.md FIRST and follow it exactly.

Batch id: ${id}. Page list: the entry with "id": "${id}" in ${SCRATCH}/batches.json. The verified JSON the editor applied: ${SCRATCH}/verified/${id}.json. Reference filename map: ${REFMAP}. Explicit overrides: ${SCRATCH}/overrides.json. The editor's summary: ${editSummary ? JSON.stringify(editSummary) : 'not available (the editor ran in an earlier session; read the pages as they are)'}.

Edit ONLY the pages in your batch. Run node scripts/lint.mjs on them and fix every error in those files. Do not commit. Return the structured summary.`

const editPrompt = (id) => `You apply verified research to wiki pages in the cryptology.city repo (/home/user/cryptology.city).

Read ${SCRATCH}/EDIT_INSTRUCTIONS.md FIRST and follow it exactly (it points at RESEARCH_INSTRUCTIONS.md in the same directory for field meanings). Read content/Reductions/prg-to-prf-ggm86.md as the house exemplar of a finished reduction page's Notes style.

Batch id: ${id}. Verified file: ${SCRATCH}/verified/${id}.json. Page list (ground truth): the entry with "id": "${id}" in ${SCRATCH}/batches.json. Reference filename map: ${REFMAP}. Explicit overrides: ${SCRATCH}/overrides.json.

Edit ONLY the pages in your batch. Run node scripts/lint.mjs on them when done and fix errors in your files. Do not commit. Return the structured summary.`

// ---- Phase 2+3: (edit →) vet, pipelined per batch
const all = [...vetOnly, ...batches.filter((b) => !vetOnly.has(b))]
const results = await pipeline(
  all,
  (id) => vetOnly.has(id)
    ? Promise.resolve({ skippedEdit: true })
    : guarded(`edit:${id}`, () => agent(editPrompt(id), { label: `edit:${id}`, phase: 'Edit', schema: EDIT_SUMMARY, model: MODEL })),
  (editSummary, id) => {
    if (editSummary === null) return null
    return guarded(`vet:${id}`, () =>
      agent(vetPrompt(id, editSummary.skippedEdit ? null : editSummary),
        { label: `vet:${id}`, phase: 'Vet', schema: VET_SUMMARY, model: MODEL }))
      .then((v) => ({ id, edit: editSummary, vet: v }))
  },
)

const done = results.filter((r) => r && r.vet)
const edited = results.filter((r) => r && r.edit && !r.edit.skippedEdit)
log(`${done.length}/${all.length} batches vetted${halted ? ' (halted early)' : ''}`)
return {
  halted,
  stubs: stubsOk,
  done: done.map((r) => r.id),
  editedNotVetted: edited.filter((r) => !r.vet).map((r) => r.id),
  notDone: all.filter((id) => !done.some((r) => r.id === id) && !edited.some((r) => r.id === id)),
  summaries: results.filter(Boolean),
}
