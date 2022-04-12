const CronJob = require('cron').CronJob;
const axios = require('axios');
const LIMIT_AMOUNT = 1000;

/**
 *
 * @param schedule
 * @param website
 */
const executeTask = (schedule,website) => {

    let job = new CronJob(schedule, function() {
        //execute http request to get the first LIMIT_AMOUNT headers
        axios
            .get(website)
            .then(res => {
                let firstheaders = JSON.stringify(res.headers).substring(0, LIMIT_AMOUNT);
                console.log(firstheaders);
            })
            .catch(error => {
                console.error(error)
            })
    }, null, true, 'America/Los_Angeles');
    job.start();
}

module.exports = {
    executeTask
}