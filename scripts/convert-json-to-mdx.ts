// Convert all JSON files under publications/medium/*.json into content/articles/*.mdx

import fs from "fs";
import path from "path";
import { glob } from "glob";

const files = glob.sync("publications/*.json");

for (const file of files) {
  const json = JSON.parse(fs.readFileSync(file, "utf-8"));
  const filename = path.basename(file).replace(".json", ".mdx");
  const mdxPath = path.join("content/articles", filename);
  const content = `---
title: "${json.title}"
date: "${json.date}"
tags: [${(json.tags || []).map((t) => `"${t}"`).join(", ")}]
semantic_field: "${json.semantic_field || ""}"
id: "${json.id}"
---

${json.content}
`;

  fs.mkdirSync(path.dirname(mdxPath), { recursive: true });
  fs.writeFileSync(mdxPath, content, "utf-8");
}
