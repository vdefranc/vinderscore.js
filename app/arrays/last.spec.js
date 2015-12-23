describe('vs.last', function () {
  it('should be complete', function () {
    expect(true).toEqual(true);
  });

  describe('if called with only an array', function () {
    it('should return the last value of the array', function () {
      var result = vs.last([1, 2, 3, 4]),
          expected = 4;

      expect(result).toEqual(expected);
    });
  });

  describe('if called with two arguments', function () {
    it('should return an array', function () {
      var result = Array.isArray( vs.last([1,2], 2) ),
          expected = true;

      expect(result).toEqual(expected);
    });

    it('should return the last n cells of the argument', function () {
      var arg = [5,4,3,2,1],
          result = vs.last(arg, 3),
          expected = [3,2,1];

      expect(result).toEqual(expected);
    });
  });
});