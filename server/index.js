var http = require('http');
var connect = require('connect');
var app = connect()
    .use(connect.logger())
    .use(connect.static('client'));
var port = Number(process.env.PORT || 8000);
http.createServer(app).listen(port);
