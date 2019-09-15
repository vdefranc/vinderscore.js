/**
 * Intended to match: http://underscorejs.org/#map
 * @param  {Array} list
 * @param  {Function} iteratee
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
 *   Produces a new array of values by mapping each value in list through
 *   a transformation function (iteratee). The iteratee is passed three arguments:
 *   the value, then the index (or key) of the iteration, and finally a reference
 *   to the entire list.
 */

function map(collection, iteratee, context) {
  const isCollectionArray = Array.isArray(collection);
  const arrayToReduce = isCollectionArray
    ? collection
    : Object.entries(collection);

  // note: The reducer function isn't pure. this is a code smell. not happy about it...
  return arrayToReduce.reduce((acc, value, i) => {
    const middleArgs = isCollectionArray ? [value, i] : [value[1], value[0]];
    const result = iteratee.call(context, ...middleArgs, collection);
    acc.push(result);

    return acc;
  }, []);
}

module.exports = { map };
