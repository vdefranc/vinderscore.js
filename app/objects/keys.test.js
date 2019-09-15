const { keys } = require('./keys');

describe('keys:', function () {

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

  result = keys(testObj);

  it('returns an array', function () {
    var blankResult = keys();
    expect(Array.isArray( result )).toEqual(true);
  });


  describe('the returned array', function () {
    it('contains all the test object\'s own properties', function () {
      expect(propsToAdd).toEqual(result);
    });
  });

});