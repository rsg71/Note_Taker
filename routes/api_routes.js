//use fs module to read and write to and from the db.json file

let notes = require ("../db/db.json")//move to api routes 
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
        //allowing user to create a note; this posts the note
        app.post("/api/notes", function (req, res) {
            let newNote = req.body;
            newNote.id = notes.length;
            

            console.log(`the new note is : ${JSON.stringify(newNote)}`);



            console.log("notes: "+ JSON.stringify(notes));
            
            notes.push(newNote);

            

            console.log("==========");

            console.log("notes after push " + JSON.stringify(notes));


            res.json(notes);
            
        });


        //writing a new note file

        // fs.writeFile("../db/db.json", , function(err) {
        //     if (err) throw err;

        // })

        //notes with id
        app.get("/api/notes/:id", function (req, res) {
            console.log(req.params.id);


            res.json(notes[req.params.id]); // might need the -1 for the index value**********


        });


        // app.delete("/api/notes/:id", function (req, res) {
        // still working on this    
        // })




}




