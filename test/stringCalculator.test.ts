import { stringCalculator } from "../src/stringCalculator";

describe("String Calculator", () => {
    it("sholud return 0 for empty string", () => {
        expect(stringCalculator("")).toBe(0);
    });
});