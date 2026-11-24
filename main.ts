// Ridiculous at First Glance, Real by the Second — make.fun entry.
// One sentence pitching a bizarre startup idea that sounds absurd until
// you realise it would actually sell. The program writes the pitch to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch: professional mourners for hire. A real market — grieving
// families already pay for a full chapel — sold here with a straight face.
const pitch =
  "We hire out professional mourners — trained criers who weep at your funeral so your chapel looks packed, $99 per crier, because nobody wants to be buried unloved.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
console.log(`Wrote ${pitch.length} characters to ${join(outDir, "entry.txt")}`);
