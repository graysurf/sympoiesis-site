// generate-modules-static-paths.ts
// Output TypeScript snippet for use in getStaticPaths() from files in modules/

import fs from 'fs';
import path from 'path';

const baseDir = path.resolve('modules');
const files = fs.readdirSync(baseDir)
  .filter((f) => f.endsWith('.mdx'))
  .map((f) => f.replace(/\.mdx$/, ''));

const staticPaths = files.map(id => `    { params: { id: '${id}' } },`).join('\n');

console.log(`export async function getStaticPaths() {
  return [
${staticPaths}
  ];
}`);
