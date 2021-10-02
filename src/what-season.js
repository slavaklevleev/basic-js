/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  console.log(date instanceof Date, date);

  if (date == undefined) {
    console.log("hey")
    
    return "Unable to determine the time of year!"

  } else if (!(date instanceof Date) || (Object.keys(date).length !== 0)) {
    throw new Error("Invalid date!") 
  }

  switch (date.getMonth()) {
    case 0:
    case 1:
    case 11:
      return "winter";

    case 2:
    case 3:
    case 4:
      return "spring";

    case 5:
    case 6:
    case 7:
      return "summer";

    case 8:
    case 9:
    case 10:
      return "autumn";
    default:
      break;
  }
}
