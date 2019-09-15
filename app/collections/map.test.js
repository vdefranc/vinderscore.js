const { map } = require("./map");

describe("map:", () => {
  it("yields a value after passing it through a transform function", () => {
    const list = [2];

    const result = map(list, val => val * 2);

    expect(result[0]).toEqual(4);
  });

  it("passes the iteratee three arguments: (element, index and list)", () => {
    const list = [5, 7];

    const result = map(list, (element, index, list) => [
      element * 2,
      index,
      list
    ]);

    expect(result).toEqual([[10, 0, list], [14, 1, list]]);
  });

  it("binds the iteratee to a context object, if one is passed", () => {
    const list = ["thing1", "thing2"];

    function iteratee(value) {
      return `${value} ${this.lastName}`;
    }

    const result = map(list, iteratee, { lastName: "Smith" });

    expect(result).toEqual(["thing1 Smith", "thing2 Smith"]);
  });

  it("passes to iteratee the arguments (value, key, list).", () => {
    const collection = {
      a: 1,
      b: 44
    };

    const result = map(collection, (value, key, collection) => {
      return `${value} ${key} ${Object.keys(collection).length}`;
    });

    const expected = ["1 a 2", "44 b 2"];

    expect(result).toEqual(expected);
  });
});
