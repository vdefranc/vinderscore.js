/**
 * Intended to match: http://underscorejs.org/#each
 * @param  {Array} array 
 * @param  {Function} iteratee 
 * @param  {Object} context 
 * @returns {Array} "Returns the list for chaining"
 *
 *
 * 1. Iterates over a list of elements, yielding each in turn to an iteratee function.
 *     DONE
 * 2. The iteratee is bound to the context object, if one is passed.
 *     DONE
 * 3. Each invocation of iteratee is called with three arguments: (element, index, list).
 * 4. If list is a JavaScript object, iteratee's arguments will be (value, key, list).
 *
 * From the note: 
 *   Collection functions work on arrays, objects, 
 *   and array-like objects such as arguments, NodeList and similar. 
 *   But it works by duck-typing, so avoid passing objects with a numeric length property.
 */

vs.each = function (list, iteratee, context) {
  var fn = iteratee,
      target;

  // if an object is passed in as a collection, unpackage it in the target
  // otherwise set target to the list
  if (typeof list === 'object' && !Array.isArray(list)) {
    target = [];

    for (var prop in list) {
      if ( list.hasOwnProperty(prop) ) {
        target.push(list[prop]);
      }
    }
  } else {
    target = list;
  }

  if (typeof context === 'object') {
    fn = iteratee.bind(context);
  }

  target.forEach(function (item) {
    fn(item);
  });

  return list;
};


