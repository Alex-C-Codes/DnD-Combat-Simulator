const character = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');

// console.log('thhis is character');
// console.log(character);

// GET Route for retrieving all the characters
character.get('/', (req, res) => {
    console.info(`${req.method} request recieved for characters`);
    readFromFile('./db/characters.json').then((data) => res.json(JSON.parse(data)));
});

// GET Route for a specific character
//character.get('/:user_id', (req, res) => {
    character.get= require("dotenv").config();
    console.log(process.env.user_id);
    const userId = req.params.user_id;
    readFromFile('./db/notes.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => character.user_id === userId);
            return result.length > 0
                ? res.json(result)
                : res.json('No character with that ID');
        });
});

// DELETE Route for a specific character
character.delete('/:user_id', (req, res) => {
    console.info(`${req.method} request achieved for characters`);
    const userId = req.params.user_id;
    readFromFile('./db/notes.json')
        .then(() => res.json({ok: true}))
        .then((json) => {
            const result = json.filter((character) => character.user_id !== userId);
            writeToFile('./db/notes.json', result);
            res.json(`Item ${userId} has been deleted`);
        });
});

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