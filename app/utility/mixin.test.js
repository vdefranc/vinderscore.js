const { mixin } = require("./mixin");

// mixin is all messed up because we are no longer writing to a window object.
// need to revisit
xdescribe("mixin", function() {
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
});
