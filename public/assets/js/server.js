// We require/import the HTTP module
var http = require("http");

//Need fs
var fs = require("fs");

//Defining port
var PORT = 8080;

//Creating server 
var server = http.createServer(handleRequest);

//Start our server
server.listen(PORT, function() {
      console.log("Server listening on: http://localhost:" + PORT);
});

//function to handles incoming requests
function handleRequest(request, response){
    response.end("Welcome to my world!")
// Capture the url the request is made to 
 var path = request.url;

//// When we visit different urls, read and respond with different files
switch(path) {

case "/notes":
    return fs.readFile(__dirname + "./notes.html", function(err, data) {
        if(err) throw err;
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
    });



 }
}

