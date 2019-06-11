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

module.exports = { isForToday };
