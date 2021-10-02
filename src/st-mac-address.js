/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  let result = true
  let array = n.split('-')

  if (array.length == 6) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      console.log(element, element.match(/[A-F]|[0-9]/g))
      if (element.match(/[A-F]|[0-9]/g).length !== 2) {
        result = false
      }
    }
  } else {
    result = false
  }

  return result
}