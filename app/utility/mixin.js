
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
    if(object.hasOwnProperty(prop)) {
      vs[prop] = object[prop];
    }
  }

};