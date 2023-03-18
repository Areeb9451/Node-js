// JSON stands for JavaScript Object Notation.
// JSON is a lightweight formate used for storing and transporting data.
// JSON is often used when data is sent from a server to a web page. In past we use XML file in place of JSON file for this purpose.

const fs = require('fs');

const bioData ={
    name : 'Areeb',
    age  : 23,
    channel : "thapa technical"
}

//console.log(bioData.name);

// In ored to convert into JSON we use following we use stringify()
//const jsonData = JSON.stringify(bioData);
//console.log(jsonData)


// Note in object the properties are never in double cotes(""), But in JSON the properties are in double cotes("")
//JSON formate == {"name":"Areeb","age":23,"channel":"thapa technical"}
// Object formate == { name: 'Areeb', age: 23, channel: 'thapa technical' }
//console.log(jsonData.channel); ----------------->> we can'nt access the properties though this method as in object


// In order to convert the JSON into object we use parse() method
//const objData = JSON.parse(jsonData);
//console.log(objData);




// Quiz :
//1 - Convert object to JSON 
//2 - Add it to anoter file
//3 - readFile
//4 - again convert back to object and print on console

const jsonData = JSON.stringify(bioData);
//fs.writeFile('jons1.json',jsonData,(err) =>{
//   console.log('done');
//    console.log(err);
//})



//fs.readFile('jons1.JSON', 'utf8', (err, data) =>{
//    console.log(data);
//});


fs.readFile('jons1.JSON', 'utf8', (err, data) =>{
    const orgData = JSON.parse(data)
    console.log(data);
    console.log(orgData);
})
