const test = require('tape');
const { isForToday } = require('../src/taskDay');

test('it should check if task will run today', (t) => {
  const currentTime = '00:15';
  const cronTabConfig = ['0 15', '15 15', '0 0', '15 0', '* 10', '* *', '33 *', '10 *'];
  const results = [true, true, false, true, true, true, true, false];

  for (let i = 0; i < cronTabConfig.length; i++) {
    const isToday = isForToday(currentTime, cronTabConfig[i]);
    t.equal(
      isToday, results[i],
      `Time: ${currentTime} - Cron: ${cronTabConfig[i]} -
      This task will run ${isToday ? 'today' : 'tomorrow'}`,
    );
  }

  t.end();
});
