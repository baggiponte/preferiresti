import assert from "node:assert/strict";
import { test } from "node:test";
import { destination } from "./index.ts";

test("keeps the path and the query under /preferiresti", () => {
  const at = (path: string) => destination(new URL(path, "https://preferiresti.baggiponte.com"));
  assert.equal(at("/"), "https://tools.baggiponte.com/preferiresti/");
  assert.equal(at("/?draft=1"), "https://tools.baggiponte.com/preferiresti/?draft=1");
  assert.equal(at("/index.html"), "https://tools.baggiponte.com/preferiresti/index.html");
});
