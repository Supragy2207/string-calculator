import { add } from "../src/stringCalculator";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns number itself for single input", () => {
  expect(add("5")).toBe(5);
});

test('adds two comma-separated numbers', () => {
  expect(add('1,2')).toBe(3);
});

test('handles multiple numbers and newlines too', () => {
  expect(add('1\n2,3')).toBe(6);
  expect(add('4,5,6')).toBe(15);
  expect(add('4,5,6,7')).toBe(22);
});

test('supports custom single-character delimiter', () => {
  expect(add('//;\n1;2')).toBe(3);
  expect(add('//;\n1;2;3;\n3')).toBe(9);
});

test('throws error with all negatives listed', () => {
  expect(() => add('1,-2,3,-4')).toThrow('Negatives numbers not allowed: -2, -4');
});
