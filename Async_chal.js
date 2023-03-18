// Challange using Asyn  


// 1: Create a folder named Thapa
// 2: Create a file in it named bio.txt and data into it
// 3: Add more data into the file at the end of the existing data.
// 4: Read data without getting buffer data at first.
// 5: Rename the file name to mybio.txt
// 6: Delete both the file and folder


const { Console } = require('console');
const fs = require('fs');

//Creating new Folder
/*
fs.mkdir('Thapa', (err) => {
   console.log('New Folder is Created!');
   console.log(err); 
});
*/

// Creating and Writing in new file.
/*
fs.writeFile('Thapa/Bio.txt','I am a Destroyer', (err) => {
    console.log('New File is Created!');
    console.log(err); 
})
*/

// Adding new data to existing file
/*
fs.appendFile('Thapa/Bio.txt','. I am a God Of War', (err) => {
    console.log('File is updated');
    console.log(err);
})
*/

// Reading the file
/*
fs.readFile('Thapa/Bio.txt','utf8', (err, data) => {
  console.log(data);
  console.log(err);
})
*/

// Renaming the file
/*
fs.rename('Thapa/Bio.txt','Thapa/MyBio.txt',(err) => {
    console.log('File has Renamed !');
    console.log(err);
});
*/

//Deleting File MyBio.txt
/*
fs.rm('Thapa/MyBio.txt',(err) => {
    console.log('MyBio.txt has been deleted !');
    console.log(err);
})
*/

// Removing the folder
/*
fs.rmdir('Thapa',(err) => {
    console.log('Thapa Folder has been deleted !');
    console.log(err);
})
*/
