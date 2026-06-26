import { describe, it, expect } from "vitest";
import { raceWithFallback } from "../racewithfallback";

describe("raceWithFallback", () => {
  it("should be a function", () => {
    expect(typeof raceWithFallback).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => raceWithFallback(null as any)).toThrow();
  });
});
