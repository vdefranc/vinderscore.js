/**
 * Returns a random integer between min and max, inclusive.
 * If you only pass one argument, it will return a number between 0 and that number.
 *
 * http://underscorejs.org/#random
 *
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */

// got two-argument scenario from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function random(min, max) {
  var result = max ? twoArgs() : oneArg();

  function oneArg() {
    return Math.random() * min;
  }

  function twoArgs() {
    return Math.random() * (max - min) + min;
  }

  return result;
}

module.exports = { random };
