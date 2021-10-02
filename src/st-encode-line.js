import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  var array = str.split("")
  var result = ""
  
  for (var i = 0; i < array.length; i++) {
    var count = 0
    for (var j = i; j < array.length; j++) {
      if (array[i] == array[j]) {
        count++;
      } else {
        break;
      }
    }
    
    result += (count > 1 ? count : '') + array[i]
    i = i + count - 1
  }
  
  return result
}