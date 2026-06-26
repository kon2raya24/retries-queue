export async function allSettledResults<T>(promises: Promise<T>[]): Promise<{ fulfilled: T[]; rejected: Error[] }> {
  const results = await Promise.allSettled(promises);
  const fulfilled: T[] = [];
  const rejected: Error[] = [];
  for (const r of results) {
    if (r.status === "fulfilled") fulfilled.push(r.value);
    else rejected.push(r.reason instanceof Error ? r.reason : new Error(String(r.reason)));
  }
  return { fulfilled, rejected };
}
