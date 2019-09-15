const { constant } = require("./constant");

describe("constant", function() {
  it("is complete", function() {
    expect(true).toEqual(true);
  });

  describe("returns a function that returns the original argument:", function() {
    it("number", function() {
      var argument = 6,
        result = constant(argument)(),
        expected = argument;

      expect(result).toEqual(argument);
    });

    it("object", function() {
      var argument = { name: "vin" },
        result = constant(argument)(),
        expected = argument;

      expect(result).toEqual(argument);
    });

    it("array", function() {
      var argument = [1, 2, 3, 4],
        result = constant(argument)(),
        expected = argument;

      expect(result).toEqual(argument);
    });

    it("function", function() {
      var argument = testAdd,
        result = constant(argument)(),
        expected = argument;

      expect(result).toEqual(argument);

      function testAdd() {}
    });
  });
});
