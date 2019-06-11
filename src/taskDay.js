const { extractHourAndMinFromCurrentTime, extractHourAndMinFromCronTab } = require('./extractHourAndMinutes');

const toInt = value => parseInt(value, 10);

const isEveryValueTime = (time) => {
  return time.indexOf('*') !== -1;
};

const isForToday = (currentTime, cronTab) => {
  const { currentHour, currentMin } = extractHourAndMinFromCurrentTime(currentTime);
  const { cronTabHour, cronTabMin } = extractHourAndMinFromCronTab(cronTab);

  const isEveryHour = isEveryValueTime(cronTabHour);
  const isEveryMinute = isEveryValueTime(cronTabMin);

  let isToday;

  if (!isEveryHour && !isEveryMinute) {
    const isSameHour = toInt(currentHour) === toInt(cronTabHour);
    const isSameMinutes = toInt(currentMin) === toInt(cronTabMin);
    const isSameTime = isSameHour && isSameMinutes;

    isToday = isSameTime || toInt(currentHour) < toInt(cronTabHour);
  } else if (isEveryHour && !isEveryMinute) {
    isToday = toInt(currentMin) < toInt(cronTabMin);
  } else if (!isEveryHour && isEveryMinute) {
    isToday = toInt(currentHour) < toInt(cronTabHour);
  } else if (isEveryHour && isEveryHour) {
    isToday = true;
  }

  return isToday;
};

const getTaskDay = (currentTime, cronTab) => {
  return isForToday(currentTime, cronTab) ? 'today' : 'tomorrow';
};

module.exports = { isForToday, getTaskDay };
