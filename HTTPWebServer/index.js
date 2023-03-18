/*
*> A web server is a softare program which serves web pagesto web users (browsers).
*> To access web pages of any web application, we need a web server. The web server will handel all the http requests for the web application
eg., IIS is a web server for ASP.NET web applications and Apache is web server for PHP or JAVA applications.

*> Node.js provides capabilities to create your own web server which will handle HTTP requests asynchronously. we can use IIS or Apache to run Node.js web applications but it recommended to use Node.js web server.
*/



// The http.createServer() method includes request and response parameters which is supplied by Node.js

// The request object can be used to get information about the current http requestd.
// eg., url, request header, and data.

// The response object can be used to send a response for the current HTTP requests.

// If the response from the HTTP server is supposed to be displayed  as HTML, we should include an HTTP header with the current type:

const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    //console.log(req.url);
    if(req.url == '/')
      res.end('Hellow from Home');
    else if(req.url =='/about')
      res.end('Hellow my name is Areeb')  
    else if(req.url == ' '){
      res.write('Please contact us on gmail') // ---------------------->> Another way to give response but it should be executed before res.end() method
      res.end();   
    }
    else if(req.url == '/userapi'){
       fs.readFile('./API.js/userAPI.json','utf8',(err, data) =>{
        const objData = JSON.parse(data)
       res.end(objData.lastname)
       })
       res.writeHead(200, {"Content-type" :"application/json"})
      }                           
    else{ 
        res.writeHead(404, {"Content-type": "text/html"});                  // ---------------------->> It indicate the HTTP response status code of the page i., If it ment to run successfully or not
      res.end("<h1> 404 error. Page does'nt exists </h1>"); 
    }  
});

server.listen(8000, '127.0.0.1', () =>{
    console.log('listning to the port no. 8000')
});

// HTTP response status code indicate wether a specific HTTP request has been successfully completed. Response group in 5 classes:
// 1- Information responses (100 - 199)
// 2- Successful response (200 - 299)
// 3- Redirect (300 - 399)
// 4- Client Error (400 - 499)
// 5- Server Error (500 - 599)

