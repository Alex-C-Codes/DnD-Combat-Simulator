// create class variable
const getMonster = require('../src/getMonster');
const Monster = require('../lib/monster');
const Character = require('../lib/character');

// 
console.log(`This is combat.js:\n`);

// var newMonster = new Monster('name', 'cr');

// Monster.prototype.attack = function (combatant2) {
//     combatant2.hp -= 5;
// }

let arr = [];

async function startCombat() {

    // create monster class
    let monster = await getMonster();
    // console.log(monster);

    // simple combat example
    monster.attack(10);
    // console.log(stat);
}

// // create monster
// async function generateMonster() {
//     // generate monster
//     let monster;
//     let newMonsterPromise = await getMonster();
//     return newMonsterPromise.then(monsterStats => (
//         monster = new Monster(
//             monsterStats.name,
//             monsterStats.cr,
//             monsterStats.xp,
//             monsterStats.ac,
//             monsterStats.hp,
//             monsterStats.actions
//     )));
// }

startCombat();