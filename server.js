// Node.js notation for importing packages
var express = require('express');

// Spin up a server
var app = express();

// Serve static files from the main build directory
app.use(express.static(__dirname + '/build/bundled'));

// Render index.html on the main page, specify the root
app.get('/', function (req, res) {
    res.sendFile("index.html", { root: '.' });
});
app.get('/view1/', function (req, res) {
    res.sendFile("index.html", { root: '.' });
    res.sendFile("src/my-view1.html", { root: '.' });
});
app.get('/view2/', function (req, res) {
    res.sendFile("index.html", { root: '.' });
});
app.get('/view3/', function (req, res) {
    res.sendFile("index.html", { root: '.' });
});
app.get('/view4/', function (req, res) {
    res.sendFile("index.html", { root: '.' });
});
app.get('/view5/', function (req, res) {
    res.sendFile("index.html", { root: '.' });
});
app.get('/view6/', function (req, res) {
    res.sendFile("index.html", { root: '.' });
});
app.get('/single-project/', function (req, res) {
    res.sendFile("index.html", { root: '.' });
});

// Tell the app to listen for requests on port 3000
app.listen(80, function () {
    console.log('Portfolio app listening on port 80!');
});