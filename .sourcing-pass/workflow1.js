export const meta = {
  name: 'source-reductions-research',
  description: 'Research sources, classes, models, and sketches for all 380 reduction/barrier pages, then adversarially verify each batch',
  phases: [
    { title: 'Research', detail: 'one agent per ~10-page batch: find and verify sources, determine class/model, draft statements and sketches' },
    { title: 'Verify', detail: 'adversarial verifier per batch: refute citations, classes, sketches; emit corrected JSON' },
  ],
}

const SCRATCH = '/tmp/claude-0/-home-user-cryptology-city/33793fd8-0862-5ee6-a62f-c68f25db1bbd/scratchpad'

const ids = []
for (let i = 0; i < 35; i++) ids.push(`red-${String(i).padStart(2, '0')}`)
for (let i = 0; i < 4; i++) ids.push(`bar-${String(i).padStart(2, '0')}`)

const RESEARCH_SUMMARY = {
  type: 'object',
  properties: {
    batch: { type: 'string' },
    sourced: { type: 'number' },
    folklore: { type: 'number' },
    wrong_claim: { type: 'number' },
    undetermined: { type: 'number' },
    flags: { type: 'array', items: { type: 'string' } },
  },
  required: ['batch', 'sourced', 'folklore', 'wrong_claim', 'undetermined', 'flags'],
}

const VERIFY_SUMMARY = {
  type: 'object',
  properties: {
    batch: { type: 'string' },
    approved: { type: 'number' },
    amended: { type: 'number' },
    downgraded: { type: 'number' },
    flags: { type: 'array', items: { type: 'string' } },
  },
  required: ['batch', 'approved', 'amended', 'downgraded', 'flags'],
}

const results = await pipeline(
  ids,
  (id) =>
    agent(
      `You are a cryptography researcher working on the cryptology.city wiki (repo at /home/user/cryptology.city).

Read ${SCRATCH}/RESEARCH_INSTRUCTIONS.md FIRST and follow it exactly.

Your batch id: ${id}. Find your list of page paths in ${SCRATCH}/batches.json (the entry with "id": "${id}"); paths are relative to the repo root. Research every page in the batch.

The list of existing reference pages is ${SCRATCH}/existing-refs.txt.

Write your output JSON to ${SCRATCH}/research/${id}.json. Do NOT modify any file in the repo. Return only the structured summary (counts per disposition + high-priority flags, each flag prefixed with the page slug).`,
      { label: `research:${id}`, phase: 'Research', schema: RESEARCH_SUMMARY },
    ),
  (researchSummary, id) =>
    agent(
      `You are an adversarial verifier for the cryptology.city wiki (repo at /home/user/cryptology.city).

Read ${SCRATCH}/VERIFY_INSTRUCTIONS.md FIRST and follow it exactly (it points at RESEARCH_INSTRUCTIONS.md in the same directory for the schema and rules).

Your batch id: ${id}. The research file to verify: ${SCRATCH}/research/${id}.json. The batch's page list (ground truth for coverage): the entry with "id": "${id}" in ${SCRATCH}/batches.json. Existing references: ${SCRATCH}/existing-refs.txt.

If the research file is missing or unreadable, do the research yourself per RESEARCH_INSTRUCTIONS.md, conservatively, and verify your own work.

Write the verified JSON to ${SCRATCH}/verified/${id}.json. Do NOT modify any file in the repo. Return only the structured summary.`,
      { label: `verify:${id}`, phase: 'Verify', schema: VERIFY_SUMMARY },
    ).then((v) => ({ id, research: researchSummary, verify: v })),
)

const ok = results.filter(Boolean)
log(`${ok.length}/${ids.length} batches completed both stages`)
return { batches: ok, missing: ids.filter((id) => !ok.some((r) => r && r.id === id)) }