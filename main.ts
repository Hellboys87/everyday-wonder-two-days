import * as fs from "node:fs";
import * as path from "node:path";

const sentence = "My shoelace snapped on the stairs, and the loose end tapped my ankle like a tiny metronome, keeping time for nowhere I had to be.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), sentence, "utf8");
