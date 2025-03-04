import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let nCopy = n
  let nCopy = n,
    result = 0;

  do {
    if (result != 0) {
      nCopy = result;
      result = 0;
    }

    while (nCopy > 0) {
      result += nCopy % 10;
      nCopy = Math.floor(nCopy / 10);
      console.log(result, nCopy);
    }
  } while (result > 9);

  return result;
}

console.log(getSumOfDigits(91));
