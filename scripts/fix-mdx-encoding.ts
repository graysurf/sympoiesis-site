// fix-mdx-encoding.ts
// Force all .mdx files in modules/ to be saved as UTF-8 (no BOM)

import fs from "fs";
import path from "path";
import { glob } from "glob";

const files = glob.sync("modules/*.mdx");

files.forEach((file) => {
  const content = fs.readFileSync(file, { encoding: "utf8" });
  fs.writeFileSync(file, content, { encoding: "utf8", flag: "w" });
  console.log(`✓ Fixed encoding: ${file}`);
});
