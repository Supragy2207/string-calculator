export function add(numbers: string): number {
  if (numbers === "") return 0; // empty string returning 0

  const num = Number(numbers);
  return isNaN(num) ? 0 : num; //single number returns same number
}
