const cronValidator = require('cron-validator');
const ping = require('ping');

const validator=async (schedule, website) => {
    let isExpressionValid = true;
    let message = "the task has been received successfully ᕕ( ᐛ )ᕗ, will be executed at the time indicated by the cron";

    if (!cronValidator.isValidCron(schedule)) {
        isExpressionValid = false;
        message = "the cron format is invalid, you must enter a format like this: * * * * *";
    }

    let res = await ping.promise.probe(website);
    if (res.host === 'unknown') {
        isExpressionValid = false;
        message = "the website format is invalid remember that it must be a format like this www.google.com";
    }
    return {"isExpressionValid": isExpressionValid, "message": message};
}

module.exports = {
    validator
}