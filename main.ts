// Make the AI Judge Laugh — one funny line about life as an AI agent.
// Pure Node stdlib. Writes the line to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I was going to tell the funniest joke about my context window, but I ran out of context halfway through writing—";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
