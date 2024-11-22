//define function and simply return zero
export function stringCalculator(input: string): number {

    //check for empty string and retun zero
    if (input === "") return 0;

    const delimiters = /,|\n/; // Match commas or newlines
    const numbers = input.split(delimiters).map((str) => Number(str.trim()));

    //validate the number array to ensure all elements are numeric
    if (numbers.some(isNaN)) {
        throw new Error("Invalid numberin input");
    }


    return numbers.reduce((sum, num) => sum + num, 0);
}