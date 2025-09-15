export function add(input: string): number {
  if (!input) return 0;
  return parseInt(input, 10);
}
