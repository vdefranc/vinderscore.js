/**
 * [first description]
 * @param  {Array} array  
 * @param  {Number} n [The number of items to return from the begining of the array]
 * @return {Array || number}} If an n param is passed, function returns an array. Otherwise returns a number
 */

vs.first = function (array, n) {
  var result;

  if (n) {
    result = [];

    for (var i = 0; i < n; i++) {
      result.push(array[i]);
    }
  } else {
    result = array.slice(0,1)[0];
  }

  return result;
};