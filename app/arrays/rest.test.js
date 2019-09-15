const { rest } = require("./rest");

describe("rest", function() {
  it("should be complete", function() {
    expect(true).toEqual(true);
  });

  it("if called with one argument, it should return the array minus the 0th cell", function() {
    var input = [1, 2, 3, 4, 5],
      result = rest(input),
      expected = [2, 3, 4, 5];

    expect(result).toEqual(expected);
  });

  it("if called with the index argument included, it should return the array cells that are after the index-th cell", function() {
    var input = [1, 2, 3, 4, 5],
      result = rest(input, 2),
      expected = [3, 4, 5];

    expect(result).toEqual(expected);
  });
});
