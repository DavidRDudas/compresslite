import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "") {
  return readFile(new URL(`../out${path}/index.html`, import.meta.url), "utf8");
}

test("renders the support page", async () => {
  const html = await render();
  assert.match(html, /<title>Support<\/title>/);
  assert.match(html, /Your photos/);
  assert.match(html, /Send a support request/);
  assert.match(html, /formspree\.io\/f\/mwleopzr/);
  assert.match(html, /https:\/\/compresslite\.app/);
  assert.match(
    html,
    /https:\/\/apps\.apple\.com\/us\/app\/compresslite-photo-saver\/id6800169539/,
  );
  assert.match(html, /Download on the App Store/);
  assert.doesNotMatch(html, /["']\/compresslite\//);
});

test("renders the privacy policy", async () => {
  const html = await render("/privacy");
  assert.match(html, /Privacy Policy/);
  assert.match(html, /No app data collection/);
  assert.match(html, /Support messages/);
  assert.match(html, /Effective August 10, 2026/);
});
