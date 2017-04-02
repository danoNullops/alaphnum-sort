
/**
 * sortAlphaNumeric
 *
 * Sort device names alphabetically and numerically
 *
 * @param {array} deviceNames
 * @return {array} sorted device names
 */
module.exports = function sortAlphaNumeric(devices) {

  // if devices is not an array return empty array
  if (typeof devices !== 'object' || !Array.isArray(devices)) {
    return [];
  }

  // make copy of device names so original array aint mutated
  const devicesCopy = devices.slice();

  // call native sort method on deviceNames and pass in
  // comparator function
  return devicesCopy.sort((a, b) => {

    // only proceed to compare numbers if both
    // a and b contain numbers and either a
    // or b has a number with 2 or more digits
    // if both contained single digit numbers
    // they would sort properly with the default
    // alphabetic sort
    if (
      /\d/.test(a) && /\d/.test(b) &&
      (/\d{2}/.test(a) || /\d{2}/.test(b))
    ) {

      // regexasaurus to match all whole numbers in string
      const re = new RegExp(/\d+/g);

      // a and b without numbers
      const aAlpha = a.replace(re, '');
      const bAlpha = b.replace(re, '');

      // if comparison of a & b with numbers if diff
      // from a & b without numbers proceed to
      // compare the numbers
      if (
        (a > b && bAlpha >= aAlpha) ||
        (b > a && aAlpha >= bAlpha)
      ) {

        // get array of numbers for a and b
        // set n to whichever one is smaller
        // since the other number/s on the longer
        // one won't matter
        const aNums = a.match(re);
        const bNums = b.match(re);
        const n = aNums.length < bNums.length
          ? aNums.length
          : bNums.length;

        // iterate over numbers and check number
        // at each a and b index starting from left
        // if a number > b number return 1 else if
        // b > a return -1, otherwise if equal go to next
        // index or exit loop, if numbers are unequal,
        // they will be swapped appropriately as needed
        for (let i = 0; i < n; i++) {
          if (+aNums[i] !== +bNums[i]) {
            return +aNums[i] > +bNums[i] ? 1 : -1;
          }
        }
      }
    }

    // sort normal (alphabetically)
    return a > b ? 1 : -1;
  });
}
