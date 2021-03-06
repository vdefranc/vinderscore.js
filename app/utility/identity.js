/**
 * vs.identity
 *
 * Returns the same value that is used as the argument.
 * In math: f(x) = x
 * This function looks useless,
 * but is used throughout Underscore as a default iteratee.
 *
 * @param {Any} value
 * @return {Any}
 */

function identity(value) {
  return value;
}

module.exports = { identity };
