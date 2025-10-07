export function add(numbers: string): number {
  // empty string returning 0
  if (numbers === "") return 0;

  //single number returns same number
  // handled comma separated 2 numbers
  // handled newlines as delimiters too
  const tokens = numbers.split(/,|\n/);
  return tokens.map(Number).reduce((a, b) => a + b, 0);
}
