// // Dependencies
// // =============================================================
var express = require("express");
// const path = require("path");


// // Sets up the Express server
// =============================================================
var app = express();
var PORT = process.env.PORT || 7070;



// // Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); //************/



// ================================================================================
// ROUTER
// The below points the server to a series of "route" files.
// These routes give the server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/api_routes")(app);
require("./routes/html_routes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" the server
// =============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});