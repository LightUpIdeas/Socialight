'use strict';
var express = require('express');
var path = require('path');
var http = require('http');

var app = express();
app.use(express.static(path.join(__dirname, "dist")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
})

var port = process.env.PORT || 6013;
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => console.log("running"));
