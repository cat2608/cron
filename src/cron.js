const { extractHourAndMinFromCurrentTime, extractHourAndMinFromCronTab } = require('./extractHourAndMinutes');

const { getTaskDay } = require('./taskDay');

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

const getScheduleTimeWithDay = (currentTime, cronTab) => {
  return `${getScheduleTime(currentTime, cronTab)} ${getTaskDay(currentTime, cronTab)}`;
};

module.exports = { getScheduleTime, getScheduleTimeWithDay };
