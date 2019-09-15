const { each } = require('./each');

describe('each', function () {
  it('should be complete', function () {
    expect(false).toEqual(true);
  });

  it('should return an array', function () {
    var result = Array.isArray(each([])),
        expected = true;

    expect(result).toEqual(expected);
  });

  it('calls the iteratee function with each of the cells in the list', function () {
    var payload = [1,2,3,4],
        spy = jasmine.createSpy('help');

    each(payload, spy);

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

    each([1], car.howManyWheels, tricycle);

    expect(result).toEqual(expected);
  });

  it('should work with objects', function () {
    var spy = jasmine.createSpy(),
        funct = each({vin: 'lol'}, spy);

    expect(spy).toHaveBeenCalled();
  });
});