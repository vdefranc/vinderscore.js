const { compact } = require('./compact');

describe('compact', function () {
  it('is complete', function () {
    expect(true).toEqual(true);
  });

  it('returns an array', function () {
    var result = Array.isArray( compact([]) );

    expect(result).toEqual(true);
  });

  it('returns the argument with all falsy values removed', function () {
    var argument = [0, 1, -1, '', true, false, null, 5, undefined, 'hello', NaN, []],
        result = compact(argument),
        expected = [1, -1, true, 5, 'hello', []];

    expect(result).toEqual(expected);
  });
});