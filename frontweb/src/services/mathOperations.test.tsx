import { sum, multiply } from "./mathOperations";

describe("mathOperations", () => {
  it("should add 1 to the given number", () => {
    const value = sum(1);
    expect(value).toBe(2);
  });

  it("should multiply the number by two", () => {
    const value = multiply(2, 2);
    expect(value).toBe(4);
  });

  it("should multiply the number by 3", () => {
    const value = multiply(2, 3);
    expect(value).toBe(6);
  });

  it("should report a bug, with multiplier other than 2 or 3", () => {
    const value = multiply(2, 4);
    expect(value).toBe("Multiplier not accepted");
  });
});
