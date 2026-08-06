#!/usr/bin/env python3
"""Download the Launchpad Sandbox Curriculum tree (267 files) into the site's
download library under docs/.vitepress/public/downloads/, preserving the
SharePoint folder structure.

Reads the enumerated manifest (or re-enumerates), then for each file fetches
the binary content from Graph's /content endpoint and writes it to disk under
downloads/<curriculum-relative-path>.

Only touches the curriculum paths; never the legacy app/entity libraries.
"""
import json
import os
import subprocess
import sys
from urllib.parse import quote

DRIVE_ID = "b!PFUKVQIofkC3MWy-8GTb4OCBoZQDErlBiuAtzRpxn8Cfk3aHEVd-S4YZ7x1gNbjl"
SITE_ID = "focushive.sharepoint.com,550a553c-2802-407e-b731-6cbef064dbe0,94a181e0-1203-41b9-8ae0-2dcd1a719fc0"
CUR = "General/Launchpad Sandbox/Curriculum"
OUT_ROOT = os.path.join(os.path.dirname(__file__), "..", "docs", ".vitepress", "public", "downloads")


def get_token() -> str:
    out = subprocess.run(
        ["m365", "util", "accesstoken", "get",
         "--resource", "https://graph.microsoft.com", "--new", "-o", "json"],
        capture_output=True, text=True, timeout=30)
    # Output is a JSON-encoded string (a quoted JWT); unquote it.
    return json.loads(out.stdout)


def graph_children(parent_path: str) -> list:
    url = (f"https://graph.microsoft.com/v1.0/sites/{SITE_ID}/drives/{DRIVE_ID}"
           f"/root:/{parent_path}:/children")
    out = subprocess.run(["m365", "request", "--url", url, "--output", "json"],
                         capture_output=True, text=True, timeout=90)
    return json.loads(out.stdout).get("value", [])


def walk(parent_path: str, files: list):
    for it in graph_children(parent_path):
        name = it.get("name", "")
        rel = f"{parent_path}/{name}" if parent_path else name
        if it.get("folder"):
            walk(rel, files)
            continue
        files.append({"name": name, "path": rel})


def fetch_content(token: str, rel_path: str, dest: str) -> bool:
    # Rel path is 'General/Launchpad Sandbox/Curriculum/<cur-rel>'. We need the
    # item path for /content. URL-encode each segment.
    encoded = "/".join(quote(seg) for seg in rel_path.split("/"))
    url = (f"https://graph.microsoft.com/v1.0/sites/{SITE_ID}/drives/{DRIVE_ID}"
           f"/root:/{encoded}:/content")
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    r = subprocess.run(
        ["curl", "-s", "-L", "-H", f"Authorization: Bearer {token}",
         "-o", dest, "-w", "%{http_code}", url],
        capture_output=True, text=True, timeout=180,
    )
    return r.stdout.strip() == "200"


def main():
    token = get_token()
    files = []
    walk(CUR, files)
    out_root = os.path.abspath(OUT_ROOT)
    ok = fail = 0
    for f in files:
        # path is 'General/Launchpad Sandbox/Curriculum/<rel>'
        rel = f["path"].split("Curriculum", 1)[-1].lstrip("/")
        dest = os.path.join(out_root, rel)
        if fetch_content(token, f["path"], dest):
            ok += 1
        else:
            fail += 1
            print(f"FAIL: {rel}", file=sys.stderr)
    print(f"DOWNLOADS ok={ok} fail={fail} of {len(files)}")


if __name__ == "__main__":
    main()