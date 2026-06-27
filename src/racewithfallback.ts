
// Type exports for consumers
// Add specific types as needed
export async function raceWithFallback<T>(promises: Promise<T>[], fallback: T): Promise<T> {
  try { return await Promise.race(promises); } catch { return fallback; }
}
