express = require ('express');
var app = express ();

app-get('/', function (reg, res) {
res.send( 'You have successfully created your second app!');
})

var server = app.listen(2001, function () {
var host = server.address ().address
var port = server.address ().port

console.log("Example app listening at http://8s:&s", host, port)
})