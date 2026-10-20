import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";
describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "  HELLO  WORLD  ",
    expected: ["hello", "world"],
  },
  {
    input: "  hello   world   ",
    expected: ["hello", "world"],
  },
  {
    input: "hell00          world",
    expected: ["hell00", "world"],
  },
  // TODO: more test cases here
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    // TODO: call cleanInput with the input here
    const actual = cleanInput(input);
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});