const test = require('tape');

const { isForToday, getScheduleTime } = require('./cron');

const cronTab = '30 1';
const cronTabEveryHour = '30 *';
const cronTabEveryMinute = '* 1';

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

test('it should return scheduled hour as same as crontab hour when is defined', (t) => {
  const currentTime = '16:30';
  const scheduleTime = getScheduleTime(currentTime, cronTab);
  t.equal(scheduleTime, '01:30');
  t.end();
});

test('it should return scheduled minutes as same as crontab minutes when is defined', (t) => {
  const currentTime = '16:10';
  const scheduleTime = getScheduleTime(currentTime, cronTab);
  t.equal(scheduleTime, '01:30');
  t.end();
});

test('it should return scheduled hour as same as current hour when crontab hour is * and minute is defined', (t) => {
  const currentTime = '16:10';
  const scheduleTime = getScheduleTime(currentTime, cronTabEveryHour);
  t.equal(scheduleTime, '16:30');
  t.end();
});

test('it should return scheduled minutes equal to 00 when crontab minutes is * and hour is defined', (t) => {
  const currentTime = '16:10';
  const scheduleTime = getScheduleTime(currentTime, cronTabEveryMinute);
  t.equal(scheduleTime, '01:00');
  t.end();
});
