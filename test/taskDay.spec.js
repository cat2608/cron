const test = require('tape');
const { isForToday } = require('../src/taskDay');

const cronTab = '30 1';

test('it should check if task is for today', (t) => {
  const currentTime = '00:10';
  t.equal(isForToday(currentTime, cronTab), true);
  t.end();
});

test('it should check if task will run tomorrow', (t) => {
  const currentTime = '16:10';
  t.equal(isForToday(currentTime, cronTab), false);
  t.end();
});
