const extractHourAndMinFromCurrentTime = (currentTime) => {
  const [currentHour, currentMin] = currentTime.split(':');
  return { currentHour, currentMin };
};

const extractHourAndMinFromCronTab = (cronTab) => {
  const [cronTabMin, cronTabHour] = cronTab.split(' ');
  return { cronTabHour, cronTabMin };
};

module.exports = { extractHourAndMinFromCurrentTime, extractHourAndMinFromCronTab };
