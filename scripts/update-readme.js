#!/usr/bin/env node
// Auto-updates the README.md "Turinys" table and total count based on
// what's actually in the repo. Run manually with `node scripts/update-readme.js`,
// or automatically via the pre-commit hook in githooks/pre-commit.

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const README_PATH = path.join(ROOT, "README.md");
const TOPICS_PATH = path.join(__dirname, "topics.json");

const TABLE_START = "<!-- AUTO-TABLE:START -->";
const TABLE_END = "<!-- AUTO-TABLE:END -->";
const TOTAL_START = "<!-- AUTO-TOTAL:START -->";
const TOTAL_END = "<!-- AUTO-TOTAL:END -->";

const FOLDER_PATTERN = /^(assignment\d+_[a-z0-9]+|pasikartojimas\d+|additional_tasks_[a-z0-9]+)$/i;

// "js" topics are counted by task*.js files, "html" topics (HTML/CSS) by task folders / index.html.
const kindOf = (folder) => (/html|css/i.test(folder) ? "html" : "js");

function loadTopics() {
  return JSON.parse(fs.readFileSync(TOPICS_PATH, "utf8"));
}

function saveTopics(topics) {
  fs.writeFileSync(TOPICS_PATH, JSON.stringify(topics, null, 2) + "\n");
}

function discoverFolders() {
  return fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && FOLDER_PATTERN.test(d.name))
    .map((d) => d.name);
}

function countTaskFiles(folder, kind = kindOf(folder)) {
  const base = path.join(ROOT, folder);
  if (!fs.existsSync(base)) return 0;

  if (kind === "html") {
    // Each task<N>/ subfolder with an html file is one task; otherwise a single index.html is one task.
    const subTasks = fs
      .readdirSync(base, { withFileTypes: true })
      .filter(
        (d) =>
          d.isDirectory() &&
          /^task\d+/i.test(d.name) &&
          fs.readdirSync(path.join(base, d.name)).some((f) => f.endsWith(".html"))
      );
    if (subTasks.length) return subTasks.length;
    return fs.existsSync(path.join(base, "index.html")) ? 1 : 0;
  }

  const tasksSubdir = path.join(base, "tasks");
  const dir = fs.existsSync(tasksSubdir) ? tasksSubdir : base;
  return fs.readdirSync(dir).filter((f) => /^task[\d_]*\.js$/i.test(f)).length;
}

function nextNum(topics) {
  const nums = topics
    .map((t) => parseInt(t.num, 10))
    .filter((n) => !Number.isNaN(n));
  const max = nums.length ? Math.max(...nums) : 0;
  return String(max + 1).padStart(2, "0");
}

function syncTopics(topics) {
  const known = new Set(topics.map((t) => t.folder));
  const found = discoverFolders();
  let changed = false;

  for (const folder of found) {
    if (!known.has(folder)) {
      const num = /^(pasikartojimas|additional_)/i.test(folder) ? "—" : nextNum(topics);
      topics.push({ num, folder, title: "(TODO: pavadinimas)", kind: kindOf(folder) });
      known.add(folder);
      changed = true;
      console.log(`+ nauja tema aptikta: ${folder} (papildyk pavadinimą scripts/topics.json)`);
    }
  }

  // Drop topics whose folder no longer exists.
  const before = topics.length;
  topics = topics.filter((t) => fs.existsSync(path.join(ROOT, t.folder)));
  if (topics.length !== before) changed = true;

  return { topics, changed };
}

function buildTable(topics) {
  const rows = topics.map((t) => {
    const count = countTaskFiles(t.folder, t.kind);
    let label = String(count);
    if (count === 0) {
      // JS folders without task*.js are DOM mini-projects; external-task folders only have a task.txt link.
      if (fs.existsSync(path.join(ROOT, t.folder, "index.html"))) label = "mini projektas";
      else if (fs.existsSync(path.join(ROOT, t.folder, "task.txt"))) label = "išorinė užduotis";
    }
    return `| ${t.num.padEnd(3)} | [\`${t.folder}\`](./${t.folder}) | ${t.title} | ${label} |`;
  });

  const header =
    "| #   | Aplankas                                               | Tema                              | Užduočių kiekis |\n" +
    "| --- | ------------------------------------------------------ | --------------------------------- | --------------- |";

  const sumKind = (kind) =>
    topics.filter((t) => t.kind === kind).reduce((sum, t) => sum + countTaskFiles(t.folder, t.kind), 0);

  return {
    table: [header, ...rows].join("\n"),
    jsTasks: sumKind("js"),
    htmlTasks: sumKind("html"),
    totalTopics: topics.length,
  };
}

function replaceBetween(content, startMarker, endMarker, replacement) {
  const start = content.indexOf(startMarker);
  const end = content.indexOf(endMarker);
  if (start === -1 || end === -1) {
    throw new Error(`Markers ${startMarker} / ${endMarker} not found in README.md`);
  }
  return (
    content.slice(0, start + startMarker.length) +
    "\n" +
    replacement +
    "\n" +
    content.slice(end)
  );
}

function main() {
  let topics = loadTopics();
  const { topics: syncedTopics, changed } = syncTopics(topics);
  topics = syncedTopics;
  if (changed) saveTopics(topics);

  const { table, jsTasks, htmlTasks, totalTopics } = buildTable(topics);

  let readme = fs.readFileSync(README_PATH, "utf8");
  readme = replaceBetween(readme, TABLE_START, TABLE_END, table);
  readme = replaceBetween(
    readme,
    TOTAL_START,
    TOTAL_END,
    `**Iš viso:** ${totalTopics} temos, ${jsTasks + htmlTasks} užduotys (${jsTasks} JavaScript, ${htmlTasks} HTML / CSS).`
  );

  fs.writeFileSync(README_PATH, readme);
  console.log(`README.md atnaujintas: ${totalTopics} temos, ${jsTasks} JS + ${htmlTasks} HTML/CSS užduočių.`);
}

main();
