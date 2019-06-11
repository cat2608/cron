const { extractHourAndMinFromCurrentTime, extractHourAndMinFromCronTab } = require('./extractHourAndMinutes');

const isForToday = (currentTime, cronTab) => {
  const { currentHour } = extractHourAndMinFromCurrentTime(currentTime);
  const { cronTabHour } = extractHourAndMinFromCronTab(cronTab);
  return currentHour < cronTabHour;
};

module.exports = { isForToday };
