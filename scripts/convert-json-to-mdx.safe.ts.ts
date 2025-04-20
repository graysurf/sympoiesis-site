// convert-json-to-mdx.safe.ts
// Converts delivery-point JSON files into MDX, replacing `#` with `-` for filesystem safety

import fs from "fs";
import path from "path";
import { glob } from "glob";

const inputFiles = glob.sync("publications/*.json");

inputFiles.forEach((file) => {
  const json = JSON.parse(fs.readFileSync(file, "utf8"));
  const baseName = path.basename(file, ".json").replace(/#/g, "-");
  const outputPath = path.join("content/articles", baseName + ".mdx");

  const mdx = `---
title: "${json.title}"
date: "${json.date}"
tags: [${(json.tags || []).map((t) => `"${t}"`).join(", ")}]
semantic_field: "${json.semantic_field || ""}"
id: "${json.id}"
---

${json.content}
`;

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, mdx, "utf8");
  console.log(`✓ Converted: ${outputPath}`);
});
