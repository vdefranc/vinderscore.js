/**
 * vs.compact
 *
 * Returns a copy of the array with all falsy values removed.
 * In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
 *
 * http://underscorejs.org/#compact
 * 
 * @return {[type]} [description]
 */

function compact (array) {
  var result = [];

  array.forEach(function (item) {
    if (item) result.push(item);
  });

  return result;
}

module.exports = {
  compact
};
