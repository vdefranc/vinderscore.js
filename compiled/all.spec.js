describe('vs.each', function () {
  it('should be complete', function () {
    expect(false).toEqual(true);
  });

  it('should return an array', function () {
    var result = Array.isArray(vs.each([])),
        expected = true;

    expect(result).toEqual(expected);
  });

  it('calls the iteratee function with each of the cells in the list', function () {
    var payload = [1,2,3,4],
        spy = jasmine.createSpy('help');

    vs.each(payload, spy);

    var test = spy.calls.count(),
        expected = payload.length;

    expect(test).toEqual(expected);
  });

  it('binds the iteratee to the context, if one is passed', function () {
    var result = '',
        expected = 'There are 3 wheels.',
        tricycle = {
          wheels: 3
        },
        car = {
          wheels: 4,
          howManyWheels: function () {
            result = 'There are ' + this.wheels + ' wheels.';
          }
        };

    vs.each([1], car.howManyWheels, tricycle);

    expect(result).toEqual(expected);
  });

  it('should work with objects', function () {
    var spy = jasmine.createSpy(),
        funct = vs.each({vin: 'lol'}, spy);

    expect(spy).toHaveBeenCalled();
  });

});
describe('vs.compact', function () {
  it('is complete', function () {
    expect(true).toEqual(true);
  });

  it('returns an array', function () {
    var result = Array.isArray( vs.compact([]) );

    expect(result).toEqual(true);
  });

  it('returns the argument with all falsy values removed', function () {
    var argument = [0, 1, -1, '', true, false, null, 5, undefined, 'hello', NaN, []],
        result = vs.compact(argument),
        expected = [1, -1, true, 5, 'hello', []];

    expect(result).toEqual(expected);
  });
});
describe('vs.first', function () {
  it('should be complete', function () {
    expect(false).toEqual(true);
    // the function does not necessarily return a number.
    // can return any value.
    // it returns the value from the first cell.
  });

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
/*jshint esversion: 6 */

describe('vs.flatten', function () {
  var oneLevel = [1],
      twoLevels = [3, [4, 5]],
      threeLevels = [6, [7, [8, 9]]];

  it('should be complete', function () {
    expect(false).toEqual(true);
  });

  describe('when called with one param (that has a length greater than 0)', function () {
    var input = [oneLevel, twoLevels, threeLevels],
          result = vs.flatten(input);

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
          result = vs.flatten(input, true),
          expected = [1, 3, [4, 5], 6, [7, [8, 9]]];

      expect(result).toEqual(expected);
    });
  });
  
});
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
describe('vs.rest', function () {
  it('should be complete', function () {
      expect(true).toEqual(true);
  });

  it('if called with one argument, it should return the array minus the 0th cell', function () {
    var input = [1,2,3,4,5],
        result = vs.rest(input),
        expected = [2,3,4,5];

      expect(result).toEqual(expected);
  });

  it('if called with the index argument included, it should return the array cells that are after the index-th cell', function () {
    var input = [1,2,3,4,5],
        result = vs.rest(input,2),
        expected = [3, 4,5];

      expect(result).toEqual(expected);
  });

  
});
describe('vs.keys:', function () {

  it('is compete', function () {
    expect(true).toEqual(true);
  });
  
  var propsToAdd, testObj = {}, result;

  propsToAdd = [
   'name', 'age' 
  ];

  propsToAdd.forEach(function(prop) {
    testObj[prop] = 1;
  });

  result = vs.keys(testObj);

  it('returns an array', function () {
    var blankResult = vs.keys();
    expect(Array.isArray( result )).toEqual(true);
  });


  describe('the returned array', function () {
    it('contains all the test object\'s own properties', function () {
      expect(propsToAdd).toEqual(result);
    });
  });

});
describe('vs.isMatch', function () {

  it('is compete', function () {
    expect(true).toEqual(true);
  });

  var vin, youngVin, bigVin, frank, result;

  vin = {
    name: 'vin',
    age: 90
  };

  youngVin = {
    name: 'vin',
    age: 50
  };

  bigVin = {
    name: 'vin',
    age: 90,
    weight: '400lb'
  };

  frank = {
    name: 'frank',
    age: 90
  };

  beforeEach(function () {
    
  });

  it('returns a boolean', function () {
    expect(vs.isMatch(vin, frank)).toEqual(jasmine.any(Boolean));
  });

  it('returns true if an object is an exact match', function () {
    result = vs.isMatch(vin, vin);

    expect(result).toEqual(true);
  });

  it('returns true if any object is tested against an empty object', function () {
    result = vs.isMatch(vin, {});

    expect(result).toEqual(true);
  });

  it('returns false if a tested obj\'s key has a differnt value that the reference obj\'s key', function () {
    result = vs.isMatch(youngVin, vin);

    expect(result).toEqual(false);
  });

  it('returns false if the tested object doesn\'t contain ALL key/val pairs of the reference obj', function () {
    result = vs.isMatch({name: 'vin'}, vin);

    expect(result).toEqual(false);
  });

  it('returns false if the tested object doesn\'t contain ALL key/val pairs of the reference obj', function () {
    result = vs.isMatch({name: 'vin'}, vin);

    expect(result).toEqual(false);
  });

  it('returns true if the tested object has all key/val pairs but extra ones as well', function () {
    result = vs.isMatch(bigVin, vin);

    expect(result).toEqual(true);
  });
  

});

describe('vs.matcher', function () {

  it('is compete', function () {
    expect(true).toEqual(true);
  });

  beforeEach(function () {
    
  });

  it('returns a function', function () {
    expect(vs.matcher()).toEqual(jasmine.any(Function));
  });

  it('invoking the returned function also invokes vs.isMatch', function () {
    var matchSpy = spyOn(vs, 'isMatch').and.callThrough();

    vs.matcher({name: 'vin'})({name: 'frank'});

    expect(matchSpy).toHaveBeenCalled();
  });



});
describe('vs.constant', function () {
  it('is complete', function () {
    expect(true).toEqual(true);
  });

  describe('returns a function that returns the original argument:', function () {

    it('number', function () {
      var argument = 6,
          result = vs.constant(argument)(),
          expected = argument;

      expect(result).toEqual(argument);
    });

    it('object', function () {
      var argument = {name: 'vin'},
          result = vs.constant(argument)(),
          expected = argument;

      expect(result).toEqual(argument);
    });

    it('array', function () {
      var argument = [1, 2, 3, 4],
          result = vs.constant(argument)(),
          expected = argument;

      expect(result).toEqual(argument);
    });

    it('function', function () {
      var argument = testAdd,
          result = vs.constant(argument)(),
          expected = argument;

      expect(result).toEqual(argument);

      function testAdd () {}
    });

  });
});
describe('vs.identity', function () {

  it('is complete', function () {
    expect(true).toEqual(true);
  });

  it('returns the argument: number', function () {
    var argument = 3,
        result = vs.identity(argument);

    expect(result).toBe(argument);
  });

  it('returns the argument: object', function () {
    var argument = {name: 'vin'},
        result = vs.identity(argument);

    expect(result).toBe(argument);
  });

});
describe('vs.mixin', function () {

  it('is compete', function () {
    expect(false).toEqual(true);
  });

  beforeEach(function () {
    function add (a, b) {
      return a+ b;
    }

    var payload = {
      mixinTest: add
    };

    vs.mixin(payload);
  });

  it('adds each argument property to the vs object', function () {
    expect(vs.mixinTest).toBeDefined();
  });

  it(': the added functions work as expected', function () {
    expect(vs.mixinTest(2,3)).toEqual(5);
  });

  xit('makes the functions available for chaining', function () {
    expect(vs(2,3).mixinTest()).toEqual(5);
  });

  afterEach(function () {
    delete vs.mixinTest;
  });

});
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