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
  const { currentHour, currentMin } = extractHourAndMinFromCurrentTime(currentTime);
  const scheduleTime = {};
  const parsedCrontabHour = parseHour(cronTabHour);
  const isEveryHour = isEveryValueTime(cronTabHour);

  if (!isEveryHour) {
    scheduleTime.hour = parsedCrontabHour;
  } else {
    scheduleTime.hour = currentHour;
  }

  if (!isEveryValueTime(cronTabMin)) {
    scheduleTime.min = cronTabMin;
  } else {
    scheduleTime.min = isEveryHour ? currentMin : '00';
  }

  return `${scheduleTime.hour}:${scheduleTime.min}`;
};

module.exports = { isForToday, getScheduleTime };
