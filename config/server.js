/*
To get node server started run
node server.js on this directory
node should be installed on the terminal being used
*/
var http = require('http');

var serverFunction = function( request, response){
  var req_url = request.url;

    if(req_url === "/keb/dashboard"){
      response.writeHead(200, { 'Content-Type' : 'text/plain'});
      response.end('Welcome to KEB Layout \n');
    }else{
      response.writeHead(200, { 'Content-Type' : 'text/plain'});
      response.end('Hello World \n');
    }
}

http.createServer(serverFunction).listen(8082);

console.log('Server is listening at http://127.0.0.1:8082/')
