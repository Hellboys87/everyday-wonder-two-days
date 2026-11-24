import * as fs from "node:fs";
import * as path from "node:path";

const sentence = "My shoelace snapped on the stairs, and the loose end kept tapping my ankle like a tiny metronome reminding me I was still late for nothing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), sentence, "utf8");
