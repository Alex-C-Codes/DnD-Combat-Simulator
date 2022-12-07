// create class variable
const getMonster = require('../src/getMonster');
const Monster = require('../lib/monster');
const Character = require('../lib/character');

// 
console.log('This is combat.js:');

var newMonster = new Monster('name', 'cr');



// combat needs to be able to pull a monster object with stats

// function starts combat
function startCombat() {
    let arr = getMonster();
    // console.log(arr.);
}

startCombat();