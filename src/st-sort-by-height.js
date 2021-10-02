import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let newArr = arr.filter(x => x !== -1).sort((a, b) => a - b )
  let result = [], j = 0

  console.log(newArr)
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] == -1) {
      result.push(-1)

    } else {
      result.push(newArr[j])
      j++
    }
    
  }
  return result
}


console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))