//define function and simply return zero
export function stringCalculator(input: string): number {

    //check for empty string and retun zero
    if (input === "") return 0;

    //split and add input numbers
    return input
        .split("/,|\n/") //RegEx to accept commas and newlines
        .map(Number)
        .reduce((sum, num) => sum + num, 0);
}