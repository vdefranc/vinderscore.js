var vs = {};

/**
 * Intended to match: http://underscorejs.org/#each
 * @param  {Array} array 
 * @param  {Function} iteratee 
 * @param  {Object} context 
 * @returns {Array} "Returns the list for chaining"
 *
 *
 * 1. Iterates over a list of elements, yielding each in turn to an iteratee function.
 * 2. The iteratee is bound to the context object, if one is passed.
 * 3. Each invocation of iteratee is called with three arguments: (element, index, list).
 * 4. If list is a JavaScript object, iteratee's arguments will be (value, key, list).
 *
 * From the note: 
 *   Collection functions work on arrays, objects, 
 *   and array-like objects such as arguments, NodeList and similar. 
 *   But it works by duck-typing, so avoid passing objects with a numeric length property.
 */

vs.each = function (array, iteratee, context) {

  return array;
};


