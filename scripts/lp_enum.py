#!/usr/bin/env python3
"""Enumerate the Launchpad Sandbox Curriculum tree via Graph (read-only).

Walks every folder under Shared Documents/General/Launchpad Sandbox/Curriculum,
emitting a JSON manifest of all files with their SharePoint-relative paths,
sizes, and last-modified so the site download library can be built from the
live authoritative source (never the legacy local mirror).
"""
import json
import subprocess
import sys

DRIVE_ID = "b!PFUKVQIofkC3MWy-8GTb4OCBoZQDErlBiuAtzRpxn8Cfk3aHEVd-S4YZ7x1gNbjl"
SITE_ID = "focushive.sharepoint.com,550a553c-2802-407e-b731-6cbef064dbe0,94a181e0-1203-41b9-8ae0-2dcd1a719fc0"
CUR = "General/Launchpad%20Sandbox/Curriculum"


def graph(url: str) -> dict:
    out = subprocess.run(
        ["m365", "request", "--url", url, "--output", "json"],
        capture_output=True, text=True, timeout=90,
    )
    if out.returncode != 0:
        raise RuntimeError(f"m365 request failed: {out.stderr[:300]}")
    return json.loads(out.stdout)


def walk_folder(parent_path: str, out: list):
    url = (f"https://graph.microsoft.com/v1.0/sites/{SITE_ID}/drives/{DRIVE_ID}"
           f"/root:/{parent_path}:/children")
    items = graph(url).get("value", [])
    for it in items:
        name = it.get("name", "")
        rel = (parent_path or "") + "/" + name if parent_path else name
        if it.get("folder"):
            walk_folder(rel, out)
            continue
        out.append({
            "name": name,
            "path": rel,          # SharePoint path relative to Curriculum/
            "size": it.get("size"),
            "lastModified": it.get("lastModifiedDateTime"),
            "downloadUrl": it.get("@microsoft.graph.downloadUrl"),
        })


def main():
    files = []
    walk_folder(CUR, files)
    print(json.dumps({"total": len(files), "files": files}, indent=2))


if __name__ == "__main__":
    main()