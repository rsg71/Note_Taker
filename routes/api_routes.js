//use fs module to read and write to and from the db.json file

const fs = require("fs");
const path = require("path");



module.exports = function (app) {

    fs.readFile("Develop/db/db.json", "utf8", function (err, data) {
        if (err) throw err;

        //making the contents of the file (the data) into json format
        const notes = JSON.parse(data)
        console.log(notes);



        //API get requests
        app.get("/api/notes", function(req,res) {  
            res.json(notes);
        })

        


        //API post request
        //allowing user to create a note; this posts the note
        app.post("/api/notes", function (req, res) {
            let newNote = req.body;

            console.log(newNote);

            notes.push(newNote);

            console.log("newNote added");
            
        });


        //notes with id
        app.get("/api/notes/:id", function (req, res) {
            res.json(notes[req.params.id]);
        });


        // app.delete("/api/notes/:id", function (req, res) {
        // still working on this    
        // })

    });



}




