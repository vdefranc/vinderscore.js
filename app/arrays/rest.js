/**
 * vs.rest
 *
 * http://underscorejs.org/#rest
 *
 * @param {Array} array
 * @param {Number} index - Pass an index to return the values of the array from that index onward.
 */

vs.rest = function (array, index) {
  var sliceIndex = index ? index : 1;

  return array.slice(sliceIndex, array.length);
};