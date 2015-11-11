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