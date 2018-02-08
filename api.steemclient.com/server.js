var app = require('./app');
var port = process.env.PORT || 3000;
var ip = '0.0.0.0';

var server = app.listen(port,ip, function() {
  console.log('Express server listening on port ' +ip+':'+ port);
});
