// Imporing module in Node Environment, for this we use require() method.
const fs = require('fs');

// Creating A new File
fs.writeFileSync('read.txt','Welome');
// Writing A new Data
fs.writeFileSync('read.txt','Home');

// Appending data into existing file.
fs.appendFileSync('read.txt',' Happy');


// Reading the data in existing file
const buf_data = fs.readFileSync('read.txt');
console.log(buf_data);
// Note: Node.js includes an additional data type called Buffer(not available in browser's JavaScript).
// Buffer is mainly used to store binary data, while reading from a file or receiving packets over the network.
// <Buffer 48 6f 6d 65 20 48 61 70 70 79>


// Converting Buffer to String 
org_data = buf_data.toString();
console.log(org_data);

// To rename the file
fs.renameSync('read.txt','readWrite.txt');



