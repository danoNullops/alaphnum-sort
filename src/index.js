
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const sortAlphaNumeric = require('./sort-alphanum');

/**
 * Get devices from file at devices.txt and sort
 * them with the sortAlphaNumeric function
 */
fs.readFileAsync('devices.txt', 'utf8')
  .then(contents => {

    // set contents of file to an array
    const devices = contents.split('\n');

    // get index of blank line, will probably be one
    // if file is edited in text editor, a lot of
    // them add a new line at bottom when file is saved
    let blankLineIdx = devices.indexOf('');

    // if there is a blank line, remove it from array
    if (blankLineIdx > -1) {
      devices.splice(blankLineIdx, 1);
    }

    // sort devices and set to var
    const sortedDevices = sortAlphaNumeric(devices);

    // print unsorted, alpha sort, and alphanumeric sorted devices
    console.log('UNSORTED DEVICES');
    console.log('================');
    devices.forEach(device => console.log(device));
    console.log('\nDEFAULT ALPHABETIC SORT');
    console.log('=======================');
    const devicesAlpha = devices.slice();
    devicesAlpha.sort();
    devicesAlpha.forEach(device => console.log(device));
    console.log('\nSORTED DEVICES');
    console.log('==============');
    sortedDevices.forEach(device => console.log(device));
  })
  .catch(e => {
    // if error print out the stack trace
    console.error(e.stack);
  });
