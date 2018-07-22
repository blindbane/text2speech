import init from "../index.js";

describe("init", () => {
  test(`should return a string of 'hello world'`, () => {
    expect(init()).toBe("hello world");
  });
});
