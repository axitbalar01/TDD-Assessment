export function add(input: string): number {
  if (!input) return 0;
  const parts = input.split(",");
  return parts.map((n) => parseInt(n, 10)).reduce((a, b) => a + b, 0);
}
