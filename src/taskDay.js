const { extractHourAndMinFromCurrentTime, extractHourAndMinFromCronTab } = require('./extractHourAndMinutes');

const isForToday = (currentTime, cronTab) => {
  const { currentHour } = extractHourAndMinFromCurrentTime(currentTime);
  const { cronTabHour } = extractHourAndMinFromCronTab(cronTab);
  return currentHour < cronTabHour;
};

const getTaskDay = (currentTime, cronTab) => {
  return isForToday(currentTime, cronTab) ? 'today' : 'tomorrow';
};

module.exports = { isForToday, getTaskDay };
