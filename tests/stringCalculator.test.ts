import { describe, test, expect } from "vitest";
import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
  test("empty string returns 0", () => {
    expect(add("")).toBe(0);
  });

  test("single number returns same number", () => {
    expect(add("1")).toBe(1);
  });

  test("two numbers comma separated", () => {
    expect(add("1,5")).toBe(6);
  });

  test("handles many numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("allows newlines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
