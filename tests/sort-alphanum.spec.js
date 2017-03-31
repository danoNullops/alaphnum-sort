
const test = require('tape');
const sortAlphaNumeric = require('../src/sort-alphanum');

// function devicesNotArray(devices) {
//   let typeOfDevices = devices === null ? 'null' : typeof devices;
//   test('should return empty array if devices is ' + typeOfDevices, function(t) {
//     const expected = [];
//     const result = sortAlphaNumeric(devices);
//
//     t.same(result, expected);
//     t.end();
//   });
// }
//
// const invalidInputs = [ undefined, null, {}, 'device123', true, 10 ];
//
// invalidInputs.forEach(devices => devicesNotArray(devices));

test('should return empty array if devices is undefined', function(t) {
  const devices = undefined;
  const expected = [];
  const result = sortAlphaNumeric(devices);

  t.same(result, expected);
  t.end();
});

test('should return empty array if devices is null', function(t) {
  const devices = null;
  const expected = [];
  const result = sortAlphaNumeric(devices);

  t.same(result, expected);
  t.end();
});

test('should return empty array if devices is an object', function(t) {
  const devices = {};
  const expected = [];
  const result = sortAlphaNumeric(devices);

  t.same(result, expected);
  t.end();
});

test('should return empty array if devices is a string', function(t) {
  const devices = 'device123';
  const expected = [];
  const result = sortAlphaNumeric(devices);

  t.same(result, expected);
  t.end();
});

test('should return empty array if devices is a number', function(t) {
  const devices = 10;
  const expected = [];
  const result = sortAlphaNumeric(devices);

  t.same(result, expected);
  t.end();
});

test('should return an empty array if devices is an empty array', function(t) {
  const devices = [];
  const expected = [];
  const result = sortAlphaNumeric(devices);

  t.same(result, expected);
  t.end();
});

test('should return array with devices sorted alphanumerically', function(t) {
  const devices = [
    'router-4',
    'random-t10-r2',
    'switch-t2-r22',
    'router-10',
    'dev-f2c1-t22',
    'router-2',
    'random-t1-r44',
    'someRandom.Name',
    'dev-f1a2-t45',
    'random-t3-r2',
    'someRandom.Something',
    'router-1',
    'random-t2-r11',
    'switch-t1-r1',
    'switch-t10-r5',
    'switch-t12-r34',
    'dev-f1a10-t44',
    'random-t2-r2',
    'random-t20-t3',
    'switch-t5-r15',
    'dev-f1a1-t46',
    'switch-t22-r1',
    'switch-t4-r2',
    'switch-t11-r1'
  ];
  const expected = [
    'dev-f1a1-t46',
    'dev-f1a2-t45',
    'dev-f1a10-t44',
    'dev-f2c1-t22',
    'random-t1-r44',
    'random-t2-r2',
    'random-t2-r11',
    'random-t3-r2',
    'random-t10-r2',
    'random-t20-t3',
    'router-1',
    'router-2',
    'router-4',
    'router-10',
    'someRandom.Name',
    'someRandom.Something',
    'switch-t1-r1',
    'switch-t2-r22',
    'switch-t4-r2',
    'switch-t5-r15',
    'switch-t10-r5',
    'switch-t11-r1',
    'switch-t12-r34',
    'switch-t22-r1'
  ];
  const result = sortAlphaNumeric(devices);

  t.same(result, expected);
  t.end();
});
