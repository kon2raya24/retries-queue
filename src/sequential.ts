export async function sequential<T>(fns: (() => Promise<T>)[]): Promise<T[]> {
  const results: T[] = [];
  for (const fn of fns) results.push(await fn());
  return results;
}
