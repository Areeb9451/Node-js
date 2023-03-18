const fs = require('fs');

// Command run line by line in Syn, Afert completing first it moved to second.(Time taking process)

/*
const data = fs.readFileSync('first.txt','utf8');
console.log(data);
console.log('After the data');
*/

// Command run according to time consumption by the commands.(lesser time consuption occur)
/*
fs.readFile('first.txt','utf8', (err, data) => {
  console.log(data);
});
console.log("After the data");
*/

