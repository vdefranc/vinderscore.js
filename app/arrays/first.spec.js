describe('vs.first', function () {

  describe('if called with one argument', function () {
    it('should return an number', function () {
      var result = typeof vs.first([1]),
          expected = 'number';

      expect(result).toEqual(expected);
    });

    it('should return the first number in the argument', function () {
      var arg = [5,4,3,2,1],
          result = vs.first(arg);

      expect(result).toEqual(arg[0]);
    });
  });

  describe('if called with two arguments', function () {
    it('should return an array', function () {
      var result = Array.isArray( vs.first([1,2], 2) ),
          expected = true;

      expect(result).toEqual(expected);
    });

    it('should return the first n cells of the argument', function () {
      var arg = [5,4,3,2,1],
          result = vs.first(arg, 3),
          expected = [5,4,3];

      expect(result).toEqual(expected);
    });
  });
});