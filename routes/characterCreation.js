const character = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
  
// console.log(uuidv4());

// GET Route for retrieving all the characters
notes.get('/', (req, res) => {
    console.info(`${req.method} request recieved for characters`);
    readFromFile('./db/characters.json').then((data) => res.json(JSON.parse(data)));
});

// GET Route for a specific character
//
//
//
//

// DELETE Route for a specific character
//
//
//
//

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

        readAndAppend(newCharacter, './db/characters.json');
        res.json(`Character added successfully 🚀`);
    } else {
        res.error('Error in adding character');
    }
});

module.exports = character;