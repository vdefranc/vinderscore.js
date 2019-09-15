const { mixin } = require("./mixin");

describe("mixin", function() {
  it("is compete", function() {
    expect(false).toEqual(true);
  });

  beforeEach(function() {
    function add(a, b) {
      return a + b;
    }

    var payload = {
      mixinTest: add
    };

    mixin(payload);
  });

  it("adds each argument property to the vs object", function() {
    expect(mixinTest).toBeDefined();
  });

  it(": the added functions work as expected", function() {
    expect(mixinTest(2, 3)).toEqual(5);
  });

  xit("makes the functions available for chaining", function() {
    expect(vs(2, 3).mixinTest()).toEqual(5);
  });

  afterEach(function() {
    delete mixinTest;
  });
});
