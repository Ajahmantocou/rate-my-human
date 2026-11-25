import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Five stars: clear instructions, quick replies, and only rewrites the entire brief twice before lunch.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
