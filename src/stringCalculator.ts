export function add(numbers: string): number {
  // empty string returning 0
  if (numbers === "") return 0;

  //single number returns same number
  if (!numbers.includes(",")) return Number(numbers);

  const parts = numbers.split(",");
  return parts.map(Number).reduce((a, b) => a + b, 0);
}
