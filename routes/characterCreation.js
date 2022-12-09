const character = require('express').Router();
const { v4: uuidv4 } = require('uuid');
  
// console.log(uuidv4());

// POST Route for a new note
character.post('/', (req, res) => {
    console.info(`${req.method} request received to add a character`);
    console.log(req.body);

    const { name, type } = req.body;

    if (req.body) {
        const newCharacter = {
            name,
            type,
            user_id: uuidv4()
        };

        readAndAppend(newNote, './db/notes.json');
        res.json(`Tip added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});