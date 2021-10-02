import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let numString = n.toString()
  let maximum = 0

  console.log(numString)
  for (let i = 0; i < numString.length; i++) {
    let newNumber = numString.split('')
    newNumber.splice(i, 1)

    if (maximum < Number(newNumber.join(''))) {
      maximum = Number(newNumber.join(''))
    }
  }

  return maximum
}

console.log(deleteDigit(152))
