import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const resultObj = {};
  const arr = domains.map((domain) => domain.split("."));

  for (let i = 0; i < arr.length; i++) {
    let property = `.${arr[i][arr[i].length - 1]}`;
    
    for (let j = 1; j < arr[i].length + 1; j++) {
      if (resultObj[property] != undefined) {
        resultObj[property] += 1;
      } else {
        resultObj[property] = 1;
      }
      property += `.${arr[i][arr[i].length - 1 - j]}`;
    }
  }

  return resultObj;
}