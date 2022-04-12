const app = require('../app');
const http = require('http');
const serverHttp = http.createServer(app);
const PORT = 3000;

serverHttp.on('error', onError);
serverHttp.listen(PORT, onListening);


/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const address = serverHttp.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + address.port;
    console.log('Listening on ' + bind);
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}