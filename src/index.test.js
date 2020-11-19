import {isPrimeNumber} from "./index.js";

describe("Testing isPrimeNumber function", () => {
  const simple = 13;
  const complex = 24;
  it("testing isPrimeNumber with simple, complex and invalid number", () => {
    expect(isPrimeNumber(simple)).toBe(`${simple} is a prime number`);
    expect(isPrimeNumber(complex)).toBe(`${complex} is not a prime number`);
    expect(isPrimeNumber(1001)).toBe("invalid number");
    expect(isPrimeNumber(0)).toBe(`0 is not a prime number`);
    expect(isPrimeNumber(1)).toBe(`1 is not a prime number`);
  })
})
