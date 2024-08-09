const os = require('os');

console.log(os.arch());

const freemem = os.freemem();

console.log(`${freemem/1024/1024/1024}`);

const totalmem = os.totalmem();

console.log(`${totalmem/1024/1024/1024}`);

console.log(os.type());