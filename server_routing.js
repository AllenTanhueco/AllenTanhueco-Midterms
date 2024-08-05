var express = require('express');
var app = express();
// This responds a POST for the HomePage
app.post('/', function (req, res) {
    console.log("A POST request for the homepage is accessed.");
    res.send('Here is the POST Method');
})
// this responds a GET quest for the /list_user page
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('This is Page Listing');
})
// This responds a GET request for abcd,abxcd and so on
app.get('/ab*cd', function (req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Pattern Match Page');
})

var server = app.listen(4000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Examplle app listening at http://%s:%s", host, port)
})