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
    expect(false).toEqual(true);
  });

  beforeEach(function () {
    
  });

  it('returns a function', function () {
    expect(vs.matcher()).toEqual(jasmine.any(Function));
  });



});