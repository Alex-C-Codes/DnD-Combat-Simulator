const fetch = require('node-fetch');
var charactersJSON = require('../db/characters.json');

// create class variables
const getMonster = require('../src/getMonster');
const Monster = require('./monster');
const Character = require('./character');

// variables for combat.js
let arr = [];

// variables for HTML interaction
// let attackButtonEl = document.getElementById('attack-button');
let attackButtonEl;

// if (window.location.pathname === '/combat') {
//     attackButtonEl = document.getElementById('attack-button');
// }

console.log(`This is combat.js:\n`);

// gets character data from the characters.json file
const getCharacter = () => {
    // console.log(charactersJSON);
    // return charactersJSON;
    // fetch('../db/characters.json', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // });

    // $.getJSON('test.json', function(json) {
    //     console.log(json);
    // });

    // create character object
    let characterData = charactersJSON;
    let character = new Character(characterData[0].name, characterData[0].type, characterData[0].level, characterData[0].xp, characterData[0].ac, characterData[0].hp, characterData[0].actions, characterData[0].inventory, characterData[0].user_id);

    return character;
    
}

// checks to see if character or monster is alive
const isAlive = (creature) => {
    if (creature.hp > 0) {
        console.log(`${creature.name} is still alive!`);
        return true;
    }
    console.log(`${creature.name} has died!`);
    return false;
}

// levels up character if total XP exceeds threshold
const levelUp = () => {

}

function attack(attacker, attacked) {
    // check to see if attack succeeds
    attacked.hp -= attacker.attack(attacked.ac, attacked.hp);
    // then update the json database file of the hp stat with a POST

    // then check to see if attacked is alive

    // then return the updated hp value
    // document.getElementById('attack-button').innerHTML = 'hello';
    // console.log('hello');
}

async function startCombat() {
    // create monster and character class objects
    let monster = await getMonster();
    // let character = new Character(JSON.stringify(getCharacter()));

    let character = getCharacter();
  
    // console.log(character);

    character.getStats();
    monster.getStats();
    console.log(monster.actions[1]);

    // player attacks monster example
    console.log(`${character.name} attacks monster!`);
    attack(character, monster);
    monster.getStats();

    // monster attacks 

    // console.log(character);

    // check to see if character is alive
}

// if (window.location.pathname === '/combat') {
//     attackButtonEl.addEventListener('click', attack);
// }

startCombat();