// The path module provides utilities for working with files and directory paths. It can be accessed using:

const path = require('path');

// In order to find the current dir name
//console.log(path.dirname('C:/Users/areeb/OneDrive/Desktop/Node.js/path_module.js'));

// In order to find file extension name
//console.log(path.extname('C:/Users/areeb/OneDrive/Desktop/Node.js/path_module.js'));

// In order to find current file name
//console.log(path.basename('C:/Users/areeb/OneDrive/Desktop/Node.js/path_module.js'));

// In order to find full info about the file
//console.log(path.parse('C:/Users/areeb/OneDrive/Desktop/Node.js/path_module.js'));

const mypath = path.parse('C:/Users/areeb/OneDrive/Desktop/Node.js/path_module.js');
console.log(mypath.root);
console.log(mypath.dir);