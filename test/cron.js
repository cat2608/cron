const extractHourAndMinFromCurrentTime = (currentTime) => {
  const [currentHour, currentMin] = currentTime.split(':');
  return { currentHour, currentMin };
};

const extractHourAndMinFromCronTab = (cronTab) => {
  const [cronTabMin, cronTabHour] = cronTab.split(' ');
  return { cronTabHour, cronTabMin };
};

const isForToday = (currentTime, cronTab) => {
  const { currentHour } = extractHourAndMinFromCurrentTime(currentTime);
  const { cronTabHour } = extractHourAndMinFromCronTab(cronTab);
  return currentHour < cronTabHour;
};

const parseHour = (hour) => {
  if (hour.split('').length === 1) {
    return `0${hour}`;
  }
  return hour;
};

const isEveryValueTime = (time) => {
  return time.indexOf('*') !== -1;
};

const getScheduleTime = (currentTime, cronTab) => {
  const { cronTabHour, cronTabMin } = extractHourAndMinFromCronTab(cronTab);
  const scheduleTime = {};
  const parsedCrontabHour = parseHour(cronTabHour);

  if (!isEveryValueTime(cronTabHour)) {
    scheduleTime.hour = parsedCrontabHour;
  }

  if (!isEveryValueTime(cronTabMin)) {
    scheduleTime.min = cronTabMin;
  }

  return `${scheduleTime.hour}:${scheduleTime.min}`;
};

module.exports = { isForToday, getScheduleTime };
