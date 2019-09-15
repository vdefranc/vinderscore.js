/**
 * Intended to match: http://underscorejs.org/#map
 * @param  {Array} list
 * @param  {Function} callback
 * @param  {Any} initial
 * @param  {Object} context
 * @returns {Array} "Returns the list for chaining"

 *
 *
 * 1. Iterates over a list of elements, yielding each in turn to an iteratee function. DONE
 * 2. The iteratee is bound to the context object, if one is passed. DONE
 * 3. Each invocation of iteratee is called with three arguments: (element, index, list). DONE
 * 4. If list is a JavaScript object, iteratee's arguments will be (value, key, list).
 *
 * From the note:
 *    reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.

 If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.

 var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
 => 6
 */

function reduce(list, callback, initial) {
  return list.reduce(callback, initial);
}

module.exports = { reduce };
