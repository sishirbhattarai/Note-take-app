// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const  app = express();
const  PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//css file to use it on public
app.use(express.static('public'))

// Basic route that sends the user first to the AJAX Page
app.get("/notes", function(req, res) {
	res.sendFile(path.join(__dirname, "../../notes.html"));
});
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "../../index.html"));
});

app.get("/api/notes", function(req, res) {
	res.sendFile(path.join(__dirname, "../db.json"));
});




app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
  });

