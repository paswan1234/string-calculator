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

    //test for custom delimeters
    it("sholud support custom delimeters", () => {
        expect(stringCalculator("//;\n1;2")).toBe(3);
    });
    //test for custom multi character delimeters
    it("should handle multi-character custom delimiter", () => {
        expect(stringCalculator("//[***]\n1***2***3")).toBe(6);
    });
    //test for custom multiple character delimeters
    it("should handle multiple custom delimiters", () => {
        expect(stringCalculator("//[*][%]\n1*2%3")).toBe(6);
    });
    //test for custom multiple character delimeters
    it("should handle mixed multi-character custom delimiters", () => {
        expect(stringCalculator("//[*][%%]\n1*2%%3")).toBe(6);
    });

    //test for negative number
    it("sholud throw error for negative number", () => {
        expect(() => stringCalculator("//;\n1;-2;3;-4")).toThrow("Negative not allowed : -2,-4");
    });


});