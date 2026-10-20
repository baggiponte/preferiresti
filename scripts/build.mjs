// Prepara il sito statico distribuibile in dist/.
//
// index.html alla radice del progetto è l'unica sorgente dell'applicazione.
// dist/ viene ricostruita da zero a ogni esecuzione e vengono copiati SOLO
// index.html e FONT-LICENSE.txt, così nulla d'altro nel progetto (README,
// config, node_modules, bozze) può finire negli asset pubblicati. Usa solo
// fs di Node, quindi non ha dipendenze di build.
import { copyFile, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");

// Allowlist esplicita: il font incorporato è coperto dalla licenza, che deve
// accompagnare l'asset pubblicato.
const assets = ["index.html", "FONT-LICENSE.txt"];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await Promise.all(
  assets.map((name) => copyFile(join(root, name), join(dist, name))),
);

console.log(`Built dist/: ${assets.join(", ")}`);
