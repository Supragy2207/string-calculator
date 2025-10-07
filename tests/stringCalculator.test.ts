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

test('handles newlines as delimiters too', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('supports custom single-character delimiter', () => {
  expect(add('//;\n1;2')).toBe(3);
});

