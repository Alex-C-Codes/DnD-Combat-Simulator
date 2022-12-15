const express = require('express'); // express tells when, where, and how to express the information
const path = require('path'); // lets us make pathing in our file system
const character = require('./routes/characterCreation.js');
const api = require('./routes/index.js');

const { v4: uuidv4 } = require('uuid');
const { readFromFile, writeToFile, readAndAppend } = require('./helpers/fsUtils');

const PORT = process.env.PORT || 3001; // indicate what port we want to run on
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public')); // serves static assets like HTML or CSS. Lets us have routes that are created for us because they're in the public folder

// GET Route for saved characters json page
// app.get('/savedFighters', (req, res) => {
//   // console.info('hi');
//   res.sendFile(path.join(__dirname, '/public/pages/savedCharacters.html'));
// });

// GET Route for saved monsters json page
app.get('/monsters', (req, res) => 
    res.sendFile(path.join(__dirname, '/db/monsters.json'))
);

// POST Route for characters json
app.post('/savedFighters', (req, res) => {
  console.log(`${req.method} request received to add a character`)
  // var name = req.body.name;
  // var characterType = req.body.characterType
  // console.log(res);

  const { name, type } = req.body;

  if (req.body) {
    if (req.body.type === 'Fighter') {
      const newCharacter = {
        name,
        type,
        level: 1,
        xp: 0,
        ac: 15,
        hp: 18,
        actions: [
          {
            name: 'Short Sword',
            desc: 'Melee Weapon Attack',
            attack_bonus: 10,
            damage: [
              {
                damage_type: {
                  index: 'piercing',
                  name: 'Piercing'
                },
                damage_dice: '1d6+0'
              }
            ],
          }
        ],
        inventory: '',
        user_id: uuidv4()
      };
      readAndAppend(newCharacter, './db/characters.json');
      // res.json(`Character added successfully`);
      res.sendFile(path.join(__dirname, '/public/pages/savedFighters.html'))
      
    } else if (req.body.type === 'Ranger') {
        const newCharacter = {
          name,
          type,
          level: 1,
          xp: 0,
          ac: 13,
          hp: 12,
          actions: [
            {
              name: 'Long Bow',
              desc: 'Ranged Weapon Attack',
              attack_bonus: 15,
              damage: [
                {
                  damage_type: {
                    index: 'piercing',
                    name: 'Piercing'
                  },
                  damage_dice: '1d8+0'
                }
              ],
            }
          ],
          inventory: '',
          user_id: uuidv4()
        };
        readAndAppend(newCharacter, './db/characters.json');
        res.sendFile(path.join(__dirname, '/public/pages/savedFighters.html'))
    }
  } else {
    res.error('Error in adding character');
  }
});

// // POST Route for monsters json
// app.post('/monsters', (req, res) =>
//   res.sendFile(path.join(__dirname, '/db/monster.json'))
// );

// GET Route for players to access their savedFighters page
app.get('/savedFighters', (req, res) => {
  // console.log('hello');
  res.sendFile(path.join(__dirname, '/public/pages/savedFighters.html'));
});

// const saveCharacter = (character) =>
//     fetch('/characters', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(character),
//     });

// GET Route for getting characters.json
app.get('/charactersList', (req, res) =>
  // res.sendFile(path.join(__dirname, '/db/characters'))
  // console.log(res)
  res.sendFile(path.join(__dirname, '/db/characters.json'))
);

// GET Route for combat page
app.get('/warRoom', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/warRoom.html'))
);

// need to get id from characters.json
app.get('/:user_id', (req, res) => {
  // res.send(path.join(req.params))
  console.log(res);
});

// delete character from character.json
app.delete('/:user_id', (req, res) => {

});

// Wildcard GET Route for homepage. Gets any route that isn't /notes
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/pages/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);