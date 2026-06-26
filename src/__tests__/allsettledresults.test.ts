import { describe, it, expect } from "vitest";
import { allSettledResults } from "../allsettledresults";

describe("allSettledResults", () => {
  it("should be a function", () => {
    expect(typeof allSettledResults).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => allSettledResults(null as any)).toThrow();
  });
});
