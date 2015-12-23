/**
 * vs.last
 *
 * http://underscorejs.org/#last
 * 
 * @param  {Array} array  
 * @param  {Number} n - The number of items to return from the end of 
 *                      the array
 * @return {Array || number}} If an n param is passed, function returns
 *                            an array. Otherwise returns the last array 
 *                            cell
 */

vs.last = function (array, n) {
  var result;

  if (n) {
    result = [];

    var length = array.length,
        i = n - 1;

    for (i; i < length; i++) {
      result.push(array[i]);
    }
  } else {
    result = array[array.length - 1];
  }

  return result;
};