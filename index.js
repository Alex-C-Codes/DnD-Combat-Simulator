// this index.js starts the app
// include packages needed for this application
// const getMonster = require('./src/getMonster');
const characterCreation = require('./routes/characterCreation');
const combat = require('./lib/combat');

// import {v4 as uuidv4} from 'uuid';


// let myuuid = uuidv4();

// console.out('Your UUID is: ' + myuuid);

function init() {
    // console.log(characterCreation);
    combat;
    // getMonster();
}

init();