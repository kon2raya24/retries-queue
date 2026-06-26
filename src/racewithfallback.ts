export async function raceWithFallback<T>(promises: Promise<T>[], fallback: T): Promise<T> {
  try { return await Promise.race(promises); } catch { return fallback; }
}
