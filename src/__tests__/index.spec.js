import init from "../index";

describe("init", () => {
  test("should return a string of 'hello world'", () => {
    expect(init()).toBe("hello world");
  });
});
