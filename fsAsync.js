const fs = require('fs');

// Create and Write a file
/*
fs.writeFile('myfile.txt','I am good', (err) => {
console.log('File is created');
console.log(err);
});
*/

/*
We pass them a function as an argument - a callback - that gets called when that task completed.
The callback has an argument that tells you whether the operatin completed successfully.
Now we need to say what to do when fs.writeFile has completed (even if it's nothing ), and start checking for errors.
*/

// Appending a data
/*
fs.appendFile('myfile.txt','. My name is Areeb.', (err) => {
console.log('Yeah it has worked!');
console.log(err);    
});
*/

//Read file
/*
fs.readFile('myfile.txt','utf8',(err, data) => {
    console.log(data);
    console.log(err);
});
*/

// Deleting the file
/*
fs.unlink('myfile.txt',(err) => {
    console.log("It's Deletd");
    console.log(err);
})
*/

