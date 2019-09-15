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