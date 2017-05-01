var path = require('path');

function routes (app){
  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views/dashboard.html'));
  });

  app.get('/dashboard', function(req, res){
    res.sendFile(path.join(__dirname, 'views/dashboard.html'));
  });
}

module.exports = routes;
