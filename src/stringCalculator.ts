export function add(numbers: string): number {
    // empty string returning 0
    if (numbers === "") return 0;

    //single number returns same number
    // handled comma separated 2 numbers
    // handled newlines as delimiters too
    // handled custom single-character delimiter
    let input = numbers;
    let delimiters = [",", "\n"];

    if (numbers.startsWith("//")) {
        const newlineIndex = numbers.indexOf("\n");
        const delimiter = numbers.substring(2, newlineIndex);
        delimiters = [delimiter];
        input = numbers.substring(newlineIndex + 1);
    }

    const regex = new RegExp(delimiters.map(d => escapeRegExp(d)).join('|'));
    const nums = input.split(regex).map(Number);

    const negatives = nums.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    return nums.reduce((a, b) => a + b, 0);

    function escapeRegExp(s: string): string {
        return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
}
