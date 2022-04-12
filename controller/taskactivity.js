var cron = require('node-cron');
var exec = require('child_process').exec;

/**
 * Funcion para recibir el mensaje entrante de whatsapp a venom y enviarlo al crm
 * @param {json} message
 */
const executeTask = (parameters) => {

    console.log('entro a la funcion');

    var task = cron.schedule(parameters.schedule, () =>  {
        console.log('ejecuto la tareosa');
        exec("ping -c 3 "+parameters.website, puts);
    }, {
        scheduled: false
    });

    task.start();
}

function puts(error, stdout, stderr) { console.log("hizo ping") }

module.exports = {
    executeTask
}