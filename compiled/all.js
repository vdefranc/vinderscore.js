'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var vs = {};

// PhantomJS doesn't support bind yet
Function.prototype.bind = Function.prototype.bind || function (thisp) {
  var fn = this;
  return function () {
    return fn.apply(thisp, arguments);
  };
};

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
  if (!list.length) {
    target = [];

    for (var prop in list) {
      if (list.hasOwnProperty(prop)) {
        target.push(list[prop]);
      }
    }
  } else {
    target = list;
  }

  if ((typeof context === 'undefined' ? 'undefined' : _typeof(context)) === 'object') {
    fn = iteratee.bind(context);
  }

  target.forEach(function (item) {
    fn(item);
  });

  return list;
};

/**
 * vs.compact
 *
 * Returns a copy of the array with all falsy values removed.
 * In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
 *
 * http://underscorejs.org/#compact
 * 
 * @return {[type]} [description]
 */

vs.compact = function (array) {
  var result = [];

  array.forEach(function (item) {
    if (item) result.push(item);
  });

  return result;
};

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
    result = array.slice(0, 1)[0];
  }

  return result;
};
/**
 * vs.flatten
 *
 * http://underscorejs.org/#flatten
 *
 * @param {Array} array - the array to be flattened
 * @param {Boolean} [shallow] - if a true value is passed, the fn only flattens the array param by one level.
 * @returns {Array} the flattened array
 */

vs.flatten = function (array, shallow) {
  var result = [],
      numRuns = 0;

  array.forEach(function (help) {
    return unpackItem(help);
  });

  return result;

  function unpackItem(item) {
    if (Array.isArray(item)) {
      item.forEach(function (child) {
        if (!shallow) {
          unpackItem(child);
        } else if (numRuns === 0) {
          // item.forEach(function (thing) {
          //   result.push(thing);
          // });

          child.forEach(function (doubleChild) {
            unpackItem(doubleChild);
          });

          numRuns++;
        } else {
          result.push(child);
        }
      });
    } else {
      result.push(item);
    }
  }
};
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
/**
 * Creates a function that returns the same value that is used as the argument
 * http://underscorejs.org/#constant
 * 
 * @param  {Any} value This can be a value of any type
 * @return {Function}  The returned function returns the original value
 */

vs.constant = function (value) {
  return function () {
    return value;
  };
};

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

vs.identity = function (value) {
  return value;
};

/**
 * vs.mixin
 * 
 * http://underscorejs.org/#mixin
 * 
 * Allows you to extend Underscore with your own utility functions.
 * Pass a hash of {name: function} definitions to have your functions 
 * added to the Underscore object, as well as the OOP wrapper.
 * 
 * @param  {object} object [a hash of keys and functions]
 * 
 */

vs.mixin = function (object) {

  for (var prop in object) {
    if (object.hasOwnProperty(prop)) {
      vs[prop] = object[prop];
    }
  }
};
/**
 * Returns a random integer between min and max, inclusive. 
 * If you only pass one argument, it will return a number between 0 and that number.
 * 
 * http://underscorejs.org/#random
 * 
 * @param  {Number} min 
 * @param  {Number} max
 * @return {Number} 
 */

// got two-argument scenario from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

vs.random = function (min, max) {
  var result = max ? twoArgs() : oneArg();

  function oneArg() {
    return Math.random() * min;
  }

  function twoArgs() {
    return Math.random() * (max - min) + min;
  }

  return result;
};
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

vs.keys = function (obj) {
  var result = [],
      prop;

  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop);
      result.push(prop);
    }
  }

  return result;
};
/**
 * vs.isMatch
 *
 * http://underscorejs.org/#ismatch
 *
 * Tells you if the keys and values in properties are contained in object.
 * 
 * @param { object } [obj] [an object to test against param props]
 * @param { object } [props] [a set of key/val pairs to check for]
 */

vs.isMatch = function (obj, props) {
  var result = true,
      prop;

  for (prop in props) {
    if (props.hasOwnProperty(prop)) {
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
  return function (obj) {
    return vs.isMatch(obj, attrs);
  };
};