const os = require ("os");

console.log("Architecture", os.arch());
console.log("----------");

console.log("Platform", os.platform());
console.log("----------");

// For Mac, use:
//console.log("IP address", os.networkInterfaces().en0.map(i => i.address));
//console.log("----------");
// End for Mac instructions

console.log("Type", os.type());
console.log("----------");

console.log("SO version", os.release());
console.log("----------");

console.log("User info", os.userInfo());
console.log("----------");

console.log("CPU info", os.cpus());
console.log("----------");

console.log("Hostname", os.hostname());
console.log("----------");

console.log("Temp Dirs", os.tmpdir())
console.log("----------");

console.log("Home Dir", os.homedir())
console.log("----------");

// Memory
const SIZE = 1024;

function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

console.log("Free memory", os.freemem());
console.log(kb(os.freemem()) + "Kb");
console.log(mb(os.freemem()) + "Mb");
console.log(gb(os.freemem()) + "Gb");
console.log("----------");

console.log("Mem available", gb(os.totalmem()));
console.log("----------");

console.log("IP address", os.networkInterfaces());
console.log("----------");

console.log("System Errors", os.constants);
console.log("----------");

// From https://stackoverflow.com/questions/3653065/get-local-ip-address-in-node-js/43491534
const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }

            results[name].push(net.address);
        }
    }
}
console.log(results);
console.log("----------");
