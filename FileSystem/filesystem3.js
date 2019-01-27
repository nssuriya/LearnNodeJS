
var http = require('http');
var fs = require('fs');

// try uncommenting line 6 and 12 and run the file. It renders the html file.
// access http://localhost:8080
// http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
// }).listen(8080);



