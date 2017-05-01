const express = require('express')
  , app = express()
  , port = 3000;

var routes = require('../routes');

routes(app);

app.listen(port, (err)=>{
  if(err){
    console.log('Error starting the server !!!!');
  }
  console.log('Server listening at port: ' + port);
});
