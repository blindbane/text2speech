import getVoices from "../getVoices";

describe("getVoices", () => {
  test("is a function", () => {
    expect(getVoices).toEqual(expect.any(Function));
    expect(getVoices).not.toBeNull();
    expect(getVoices).not.toBeFalsy();
    expect(getVoices).not.toBeNaN();
  });
});
