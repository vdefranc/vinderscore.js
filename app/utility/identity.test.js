const { identity } = require('./identity');

describe('identity', function () {
  it('is complete', function () {
    expect(true).toEqual(true);
  });

  it('returns the argument: number', function () {
    var argument = 3,
        result = identity(argument);

    expect(result).toBe(argument);
  });

  it('returns the argument: object', function () {
    var argument = {name: 'vin'},
        result = identity(argument);

    expect(result).toBe(argument);
  });

});