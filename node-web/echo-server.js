const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url == "/echo") {
        let body = [];
        req.on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/plain'});

            body = Buffer.concat(body).toString();
            //Hay que incluir el uso horario, en mi caso para México -6hrs desde UTC
            fechaEntrada = body + 'T12:00:00-06:00';

            let fechaCumple = new Date(fechaEntrada);
            if (fechaCumple instanceof Date && !isNaN(fechaCumple.valueOf())) {
                console.log(`\nFecha válida: ${body} `);
                console.log(`Fecha de nacimiento en horario local: ${fechaCumple}`);

                //Obtenemos el día de la semana
                let dayOfWeek = 
                    ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
                let message = dayOfWeek[fechaCumple.getDay()];
                console.log(`El día de tu nacimiento fue: ${message}`);

                res.end(message);
            } else {
                console.log(`\nFecha inválida: ${body}. Por favor usa formato 'YYYY-MM-DD'`);
                res.statusCode = 404;
                res.end('FECHA INVÁLIDA');
            }
        })
    } else {
        res.statusCode = 404;
        res.end();
    }

});

server.listen(8001);
console.log('Servidor en la url http://localhost:8001');
