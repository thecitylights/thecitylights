var http = require('http');
var path = require('path');
var connect = require('connect');
var port = Number(process.env.PORT || 5000);
var env = process.env.NODE_ENV;
console.log('node: environment: ' + env);
var root = (env==='production' ? 'client/build' : 'client');
console.log('node: root: ' + root);
var app = connect()
    .use(connect.logger())
    .use(connect.static(root));
http.createServer(app).listen(port, function () {
    console.log('node: server started succesfully.');
});
