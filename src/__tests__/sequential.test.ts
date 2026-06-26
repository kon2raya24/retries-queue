import { describe, it, expect } from "vitest";
import { sequential } from "../sequential";

describe("sequential", () => {
  it("should be a function", () => {
    expect(typeof sequential).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => sequential(null as any)).toThrow();
  });
});
