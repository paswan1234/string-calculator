import { stringCalculator } from "../src/stringCalculator";

describe("String Calculator", () => {

    //test for empty string
    it("sholud return 0 for empty string", () => {
        expect(stringCalculator("")).toBe(0);
    });

    //test for comma seperated numbers
    it("should retun the sum of comma-seperated number", () => {
        expect(stringCalculator("1,5")).toBe(6);
    });

    //test to newlines as delimeters
    it("sholud support newlines as delimeters", () => {
        expect(stringCalculator("1\n2,3")).toBe(6);
    });
});