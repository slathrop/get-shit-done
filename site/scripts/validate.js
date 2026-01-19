/* eslint-disable no-console */

// Minimal sanity checks for the site folder.
// This is intentionally lightweight: CI builds are the real validator.

const fs = require("fs")
const path = require("path")

const required = [
  "src/index.md",
  "src/docs.md",
  "src/commands.md",
  "src/support.md",
  "src/_includes/layouts/base.hbs",
  "src/_includes/layouts/page.hbs",
  "src/_includes/layouts/home.hbs"
]

const missing = required.filter((p) => !fs.existsSync(path.join(__dirname, "..", p)))
if (missing.length) {
  console.error("Missing required site files:\n" + missing.map((m) => `- ${m}`).join("\n"))
  process.exit(1)
}

console.log("ok")
