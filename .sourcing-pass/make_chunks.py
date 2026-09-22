#!/usr/bin/env python3
"""Split <prefix>-newrefs.json into refchunks/chunk-NN.json of ~N entries,
skipping any whose page already exists on disk. Prints the chunk ids as JSON.
Usage: make_chunks.py <prefix> <chunk_size>
"""
import json, os, sys, glob, shutil

S = "/tmp/claude-0/-home-user-cryptology-city/33793fd8-0862-5ee6-a62f-c68f25db1bbd/scratchpad"
REPO = "/home/user/cryptology.city"
prefix, n = sys.argv[1], int(sys.argv[2])
refs = json.load(open(f"{S}/{prefix}-newrefs.json"))
todo = [r for r in refs if not os.path.exists(f"{REPO}/content/References/{r['ref_file_title']}.md")]
todo.sort(key=lambda r: r["key"])
d = f"{S}/refchunks"
shutil.rmtree(d, ignore_errors=True)
os.makedirs(d)
ids = []
for i in range(0, len(todo), n):
    cid = f"chunk-{i // n:02d}"
    json.dump(todo[i:i + n], open(f"{d}/{cid}.json", "w"), indent=1, ensure_ascii=False)
    ids.append(cid)
print(json.dumps({"total": len(refs), "to_create": len(todo), "chunks": ids}))
