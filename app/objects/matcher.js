/**
 * vs.isMatch
 *
 * http://underscorejs.org/#ismatch
 *
 * Tells you if the keys and values in properties are contained in object.
 * 
 *
 * @param { object } [obj] [an object to test against param props]
 * @param { object } [props] [a set of key/val pairs to check for]
 */

vs.isMatch = function (obj, props) {
  var result = true, prop;

  for (prop in props) {
    if ( props.hasOwnProperty(prop) ) {
      if (!obj.hasOwnProperty(prop) || obj[prop] !== props[prop]) {
        result = false;
      }
    }
  }

  return result;
};


/**
 * vs.matcher
 *
 * http://underscorejs.org/#matcher
 *
 * Returns a predicate function that will tell you if a passed in object 
 * contains all of the key/value properties present in attrs.
 *
 * @param { object } [attrs] [a set of set of key-value pairs to be checked for]
 * 
 */

vs.matcher = function (attrs) {
  return function () {};
};