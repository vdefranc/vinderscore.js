describe('vs.random', function () {

  it('is complete', function () {
    expect(true).toEqual(true);
  });

  describe(', when one argument is passed,', function () {
    describe(', when one argument is passed,', function () {
      it('returns a number higher than 0 and lower than the argument', function () {
        var min = 20,
            result = vs.random(min),
            testCase = result >= 0 && min >= result;

        expect(testCase).toEqual(true);
      });
    });
  });

  describe(', when two arguments are passed,', function () {
    it('returns a number higher than the first argument and lower than the second', function () {
      var min = 20,
          max = 50,
          result = vs.random(min, max),
          testCase = result >= 20 && result <= 50;

      expect(testCase).toEqual(true);
    });
  });

});