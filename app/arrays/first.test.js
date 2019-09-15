const { first } = require("./first");

describe("first", function() {
  it("should be complete", function() {
    expect(false).toEqual(true);
    // the function does not necessarily return a number.
    // can return any value.
    // it returns the value from the first cell.
  });

  describe("if called with one argument", function() {
    it("should return an number", function() {
      var result = typeof first([1]),
        expected = "number";

      expect(result).toEqual(expected);
    });

    it("should return the first number in the argument", function() {
      var arg = [5, 4, 3, 2, 1],
        result = first(arg);

      expect(result).toEqual(arg[0]);
    });
  });

  describe("if called with two arguments", function() {
    it("should return an array", function() {
      var result = Array.isArray(first([1, 2], 2)),
        expected = true;

      expect(result).toEqual(expected);
    });

    it("should return the first n cells of the argument", function() {
      var arg = [5, 4, 3, 2, 1],
        result = first(arg, 3),
        expected = [5, 4, 3];

      expect(result).toEqual(expected);
    });
  });
});
