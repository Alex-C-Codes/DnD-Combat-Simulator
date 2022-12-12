const express = require('express'); // express tells when, where, and how to express the information
const path = require('path'); // lets us make pathing in our file system

const PORT = process.env.PORT || 3001; // indicate what port we want to run on
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public')); // serves static assets like HTML or CSS. Lets us have routes that are created for us because they're in the public folder

// GET Route for saved characters list page
app.get('/characters', (req, res) => 
    res.sendFile(path.join(__dirname, '/db/characters.json')) // Tyler needs to add html path here
);

// GET Route for combat page
app.get('/combat', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Wildcard GET Route for homepage. Gets any route that isn't /notes
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);