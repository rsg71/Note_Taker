
// // Dependencies
// // =============================================================
var express = require("express");
var path = require("path");
const path = require("path");



// // Sets up the Express App
// =============================================================
var app = express();
var PORT = 6000;

// // Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// const db = require("../db/db.json")



// // // taking user to the notes page once they click get started
app.get("/api/notes", function (req, res) {

    res.json(notes);
});

// console.log("***were here**")









// // Starts the server to begin listening
// // =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
