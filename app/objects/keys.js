/**
 * vs.keys
 *
 * http://underscorejs.org/#keys
 *
 * Retrieve an array of the names of the object's own enumerable properties.
 *
 * @param { Object } obj - an object to be parsed
 * @returns { Array } the array will contain the names of all the objects's keys
 *
 */

function keys(obj) {
  var result = [],
    prop;

  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop);
      result.push(prop);
    }
  }

  return result;
}

module.exports = { keys };
