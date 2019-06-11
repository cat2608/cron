const test = require('tape');

const { getScheduleTimeWithDay } = require('../src/cron');

test('it should return schedule time with day', (t) => {
  const cronTab = '30 1';
  const currentTime = '16:30';
  const schedule = getScheduleTimeWithDay(currentTime, cronTab);
  t.equal(schedule, '01:30 tomorrow');
  t.end();
});
