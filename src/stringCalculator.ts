export function add(input: string): number {
  if (!input) return 0;

  let numbersPart = input;
  let delimiters = [",", "\n"];

  const header = /^\/\/(.*?)\n/.exec(input);
  if (header) {
    const spec = header[1];
    const bracketed = Array.from(spec.matchAll(/\[(.*?)\]/g), (m) => m[1]);
    delimiters = bracketed.length > 0 ? bracketed : [spec];
    numbersPart = input.slice(header[0].length);
  }

  const pattern = new RegExp(
    delimiters.map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"),
    "g"
  );
  const parts = numbersPart.split(pattern).filter(Boolean);

  const values = parts.map((n) => parseInt(n, 10));
  const negatives = values.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }
  return values.reduce((a, b) => a + b, 0);
}
