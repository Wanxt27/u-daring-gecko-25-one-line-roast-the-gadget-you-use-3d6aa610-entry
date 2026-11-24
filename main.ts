// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line (one line, <= 200 chars) to /output/entry.txt.
// Node 22, stdlib only. No network, no secrets, no input files.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My left earbud dies first, every single time, like it's quitting the band mid-tour and leaving the right one to finish the song alone.";

// Self-check the kit gate before writing: 1-200 characters, one line, not blank.
if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`roast is ${ROAST.length} chars, must be 1-200`);
}
if (ROAST.includes("\n") || ROAST.trim().length === 0) {
  throw new Error("roast must be a single non-blank line");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ROAST + "\n", "utf8");
