import { mkdir, copyFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const routes = [
  "about",
  "journal",
  "journal/first-signal",
  "blog",
  "blog/first-signal",
  "notes",
];

for (const route of routes) {
  const dir = join("dist", route);
  await mkdir(dir, { recursive: true });
  await copyFile(join("dist", "index.html"), join(dir, "index.html"));
}

await copyFile(join("dist", "index.html"), join("dist", "404.html"));
await writeFile(join("dist", ".nojekyll"), "");
console.log(`Copied SPA entry to ${routes.length} route directories, 404.html, and .nojekyll.`);
