const test = require('tape');

const { getCronOutput } = require('../src/cron');

test('it should return cron output', (t) => {
  const cronTab = '30 1';
  const currentTime = '16:30';
  const task = '/bin/run_me_daily';
  const schedule = getCronOutput(currentTime, cronTab, task);
  t.equal(schedule, '01:30 tomorrow - /bin/run_me_daily');
  t.end();
});
