// Require os module

const os = require('os');
// checking Articture
console.log(os.arch());

// Checking Free Memory
const freememory = os.freemem();
console.log(freememory/1024/1024/1024);

// Checking total memory
const totalmemory = os.totalmem();
console.log(totalmemory/1024/1024/1024);

// Checking Host name
console.log(os.hostname());

// Checking platform
console.log(os.platform());

//Checking Os

console.log(os.type())