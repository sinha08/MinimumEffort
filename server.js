/*
To get node server started run
node server.js on this directory
node should be installed on the terminal being used
*/
var http = require('http');

http.createServer(function( request, response){
  response.writeHead(200, { 'Content-Type' : 'text/plain'});
  response.end('Hello World \n');
}).listen(8082);

console.log('Server is listening at http://127.0.0.1:8081/')
