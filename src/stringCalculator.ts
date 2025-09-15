export function add(input: string): number {
  if (!input) return 0;

  let numbersPart = input;
  let delimiters = [",", "\n"];

  const header = /^\/\/(.*?)\n/.exec(input);
  if (header) {
    delimiters = [header[1]];
    numbersPart = input.slice(header[0].length);
  }

  const pattern = new RegExp(
    delimiters.map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"),
    "g"
  );
  const parts = numbersPart.split(pattern).filter(Boolean);

  return parts.map((n) => parseInt(n, 10)).reduce((a, b) => a + b, 0);
}
