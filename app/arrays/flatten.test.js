const { flatten } = require('./flatten');

describe('flatten', function () {
  var oneLevel = [1],
      twoLevels = [3, [4, 5]],
      threeLevels = [6, [7, [8, 9]]];

  it('should be complete', function () {
    expect(false).toEqual(true);
  });

  describe('when called with one param (that has a length greater than 0)', function () {
    var input = [oneLevel, twoLevels, threeLevels],
          result = flatten(input);

    it('should return an array', function () {
      expect(Array.isArray(result)).toEqual(true);
    });

    it('have a length equal to the cululative length of the array contents', function () {
      expect(result.length).toEqual(8);
    });

    // it('should flatten all array cells so that no cell is an array', function () {
    //   result.forEach(function(cell) {
    //     expect(Array.isArray(result)).toEqual(false);
    //   });
      
    // });
  });

  xdescribe('when it is called with [shallow] === true', function () {
    it('flattens each child array only one degree', function () {
      var input = [oneLevel, twoLevels, threeLevels],
          result = flatten(input, true),
          expected = [1, 3, [4, 5], 6, [7, [8, 9]]];

      expect(result).toEqual(expected);
    });
  });
  
});