const { reduce } = require("./reduce");

describe("reduce", () => {
  it("reduces three values into one", () => {
    const list = [1, 2, 3];

    const result = reduce(list, (memo, val) => memo + val, 0);

    expect(result).toEqual(6);
  });
});
