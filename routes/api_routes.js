let notes = require ("../db/db.json")
var fs = require("fs");
var path = require("path");


const OUTPUT_DIR = path.resolve(__dirname, "public");
const outputPath = path.join(OUTPUT_DIR, "notes.html");


console.log()

module.exports = function (app) {

        //API get requests
        app.get("/api/notes", function(req,res) {  
            res.json(notes);
        })


        //API post request
        app.post("/api/notes", function (req, res) {
            let newNote = req.body;
            newNote.id = notes.length;

            console.log(`the new note is : ${JSON.stringify(newNote)}`);

            console.log("notes: "+ JSON.stringify(notes));
            
            notes.push(newNote);            

            console.log("notes after push " + JSON.stringify(notes));

            res.json(notes);
        });

        //get notes by ID
        app.get("/api/notes/:id", function (req, res) {
            console.log(req.params.id);

            res.json(notes[req.params.id]);
        });


        //deletes the note
        app.delete("/api/notes/:id", function (req, res) {
            notes.splice(req.params.id,1);
            console.log("notes after splice: "+ JSON.stringify(notes))
            console.log(`note ${req.params.id} was deleted`)
            res.json(notes);
        })
}