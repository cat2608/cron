const readline = require('readline');

const cron = require('./cron');

const currentTime = process.argv[2];

async function processLineByLine() {
  const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity,
  });

  rl.on('line', (line) => {
    const [minutes, hour, task] = line.split(' ');
    console.log(cron.getTaskSchedule(currentTime, `${minutes} ${hour}`, task));
  });
}

processLineByLine();
