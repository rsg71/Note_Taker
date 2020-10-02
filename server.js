// // Dependencies
// // =============================================================
var express = require("express");
const path = require("path");


// // Sets up the Express server
// =============================================================
var app = express();
var PORT = 6000;


// // Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/api_routes")(app);
require("./routes/html_routes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});