//define function and simply return zero
export function stringCalculator(input: string): number {

    //check for empty string and retun zero
    if (input === "") return 0;

    let delimiters = /,|\n/; // Match commas or newlines

    // Check for custom delimiter syntax: "//<delimiter>\n<number sequence>"
    if (input.startsWith("//")) {
        const delimiterMatch = input.match(/^\/\/(\[.*?\]|.)\n/);

        if (delimiterMatch) {
            const rawDelimiters = delimiterMatch[1];

            if (rawDelimiters.startsWith("[") && rawDelimiters.endsWith("]")) {
                // Multiple or long delimiters (e.g., //[***][%%])
                delimiters = new RegExp(
                    rawDelimiters
                        .slice(1, -1) // Remove enclosing brackets
                        .split("][") // Split multiple delimiters
                        .map((delim) => escapeRegex(delim)) // Escape regex special characters
                        .join("|") // Combine delimiters into a single regex
                );
            } else {
                // Single character delimiter (e.g., //;\n)
                delimiters = new RegExp(escapeRegex(rawDelimiters));
            }

            // Remove the delimiter declaration from the input
            input = input.split("\n").slice(1).join("\n");
        }
    }

    const numbers = input.split(delimiters).map(Number);


    //validate the number array to ensure all elements are numeric
    if (numbers.some(isNaN)) {
        throw new Error("Invalid number in input");
    }


    return numbers.reduce((sum, num) => sum + num, 0);
}

// Helper function to escape special regex characters
function escapeRegex(delimiter: string): string {
    return delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}