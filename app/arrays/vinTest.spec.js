describe('add function', function () {

  it('should add numbers together', function () {
    var result = vs.add(4,5),
        expected = 9;

    expect(result).toEqual(expected);
  });

});