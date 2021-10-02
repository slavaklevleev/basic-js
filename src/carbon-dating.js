const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

export default function dateSample(sampleActivity) {
  if (isNaN(Number(sampleActivity)) || typeof sampleActivity !== "string") {
    return false;
  } else if (
    Number(sampleActivity) <= 0 ||
    Number(sampleActivity) > MODERN_ACTIVITY
  ) {
    return false;
  } else {
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / Number(sampleActivity)) /
        (0.693 / HALF_LIFE_PERIOD)
    );
  }
}