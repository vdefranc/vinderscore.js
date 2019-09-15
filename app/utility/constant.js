/**
 * Creates a function that returns the same value that is used as the argument
 * http://underscorejs.org/#constant
 *
 * @param  {Any} value This can be a value of any type
 * @return {Function}  The returned function returns the original value
 */

function constant(value) {
  return function() {
    return value;
  };
}

module.exports = { constant };
