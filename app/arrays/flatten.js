/**
 * vs.flatten
 *
 * http://underscorejs.org/#flatten
 *
 * @param {Array} array - the array to be flattened
 * @param {Boolean} [shallow] - if a true value is passed, the fn only flattens the array param by one level.
 * @returns {Array} the flattened array
 */

function flatten (array, shallow) {
  var result = [],
      numRuns = 0;

  array.forEach((help) => unpackItem(help));
  

  return result;

  function unpackItem(item) {
    if (Array.isArray(item)) {
      item.forEach(function(child) {
        if (!shallow) {
          unpackItem(child);
        } else if (numRuns === 0) {
          // item.forEach(function (thing) {
          //   result.push(thing);
          // });
          
          child.forEach(function(doubleChild) {
            unpackItem(doubleChild);
          });
          

          numRuns++;
        } else {
          result.push(child);
        }
      });
    } else {
      result.push(item);
    }
  }

}

module.exports = { flatten };