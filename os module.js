const os = require('os');
const dns = require('dns');

const servers = dns.getServers();
console.log(servers);
console.log(os.uptime())

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMemory: os.totalmem(),
	freeMemory: os.freemem(),
}
console.log(currentOS);

const user = os.userInfo();
const hostname = os.hostname();
const architecture = os.arch();
const IP = os.networkInterfaces();
// console.log(architecture);
// console.log(IP);
// console.log(user);
// console.log(hostname);