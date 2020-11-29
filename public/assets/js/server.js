// We require/import the HTTP module
var http = require("http");

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
    response.end("You got it!")
}