describe('vs.first', function () {

  it('should return an array', function () {
    var result = Array.isArray(vs.first([1,2])),
        expected = true;

    expect(result).toEqual(expected);
  });
  
});