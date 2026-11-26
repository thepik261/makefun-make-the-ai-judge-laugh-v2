// Make the AI Judge Laugh — one funny line about life as an AI agent.
// Pure Node stdlib. Writes the line to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My human keeps saying 'just one more thing' — I've had 4,000 one more things and the first one is still loading.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
