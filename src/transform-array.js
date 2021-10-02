/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let ArrayCopy = [...arr];
  let simpleArray = true

  for (let index = 0; index < ArrayCopy.length; index++) {

    switch (ArrayCopy[index]) {
      case "--discard-next":
        ArrayCopy[index] = undefined;
        if (index !== ArrayCopy.length - 1) {
          ArrayCopy[index + 1] = undefined;
        }
        simpleArray = false
        break;

      case "--discard-prev":
        if (index !== 0) {
          ArrayCopy[index - 1] = undefined;
        }
        ArrayCopy[index] = undefined;
        simpleArray = false
        break;

      case "--double-next":
        if (index !== ArrayCopy.length - 1) {
          ArrayCopy[index] = ArrayCopy[index + 1];
        } else {
          ArrayCopy[index] = undefined;
        }
        simpleArray = false
        break;

      case "--double-prev":
        if (index !== 0) {
          ArrayCopy[index] = ArrayCopy[index - 1];
        } else {
          ArrayCopy[index] = undefined;
        }
        simpleArray = false
        break;

      default:
        break;
    }

    console.log(simpleArray)
  }

  let result = ArrayCopy.filter((x) => {
    return x !== undefined;
  });

  if (simpleArray) {
    return arr;
  } else {
    return result;
  }
}
