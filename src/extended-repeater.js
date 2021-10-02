/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 *
 */
export default function repeater(str, options) {
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;

  str = str === undefined ? "" : String(str)

  repeatTimes = repeatTimes || 1;
  separator = separator || "+";
  addition = addition === undefined ? "" : String(addition);
  additionRepeatTimes = additionRepeatTimes || 1;
  additionSeparator = additionSeparator || "|";

  let result = "";
  let additionResult = addition;

  for (let i = 1; i < additionRepeatTimes; i++) {
    additionResult += additionSeparator + addition;
  }

  for (let i = 0; i < repeatTimes; i++) {
    if (i < repeatTimes - 1) {
      result += str + additionResult + separator;
    } else {
      result += str + additionResult;
    }
  }

  return result || str;
}