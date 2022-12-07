// allows us to use fetch
const fetch = require('node-fetch');
// connects with the api url
var dndApiURL = 'https://www.dnd5eapi.co/api/monsters/adult-red-dragon/';

// create class variable
const Monster = require('../lib/monster');

// gets monster stats
function getMonster() {
    fetch(dndApiURL)
        .then((response) => response.json())
        .then((data) => {

            // show basic monster stats
            // console.log(data);
            // console.log(`Name: ${data.name}`);
            // console.log(`CR: ${data.challenge_rating}`);
            // console.log(`XP: ${data.xp}`);
            // console.log(`AC: ${data.armor_class}`);
            // console.log(`HP: ${data.hit_points}`);

            // create new Monster
            var monster = new Monster(data.name, data.challenge_rating, data.xp, data.armor_class, data.hit_points, data.actions);

            console.log(monster);

            return monster;

            // // check to see if monster has multiattack.
            // if (data.actions[0].name === 'Multiattack') {
            //     console.log('Multiattack is true');
            // } else {
            //     console.log('Multiattack is false');
            // }

            // // for each action, show list of actions
            // for (let i = 0; i < data.actions.length; i++) {
            //     console.log(`Action ${i}: ${data.actions[i].name}`);
            // }



            // // simple attack example

            // function containsNumber(str) {
            //     return /\d/.test(str);
            // }

            // // calculates attack damage based on damage_dice
            // function calculateDamage(str) {
            //     let damage = 0;
            //     let diceAmount;
            //     let diceRoll;
            //     let damageModifier;
            //     let matches = str.match(/\d+/g);

            //     console.log(matches);
            //     damageModifier = parseInt(matches[2]);

            //     // [ ] NOT SURE WHY matches.length KEEPS RETURNING 3
            //     if (Number.isFinite(damageModifier)) {
            //         // console.log(matches.length);

            //         // diceAmount tells us how many dice to roll
            //         diceAmount = parseInt(matches[0]);
            //         console.log(`diceAmount is: ${matches[0]}`);
            //         // diceRoll tells us what type of dice to roll
            //         diceRoll = parseInt(matches[1]);
            //         console.log(`diceRoll is: ${matches[1]}`);
            //         // damageModifier tells us how much damage to add to the roll
            //         damageModifier = parseInt(matches[2]);
            //         console.log(`damage modifier is: ${matches[2]}`);
            //     } else {
            //         console.log(matches.length);
            //         diceAmount = parseInt(matches[0]);
            //         console.log(`diceAmount is: ${matches[0]}`);
            //         diceRoll = parseInt(matches[1]);
            //         console.log(`diceRoll is: ${matches[1]}`);
            //     }

            //     // for each number of dice, roll a specific type of dice
            //     for (let d = 0; d < diceAmount; d++) {
            //         damage += getRandomNumber(1, diceRoll);
            //     }

            //     if (Number.isFinite(damageModifier)) {
            //         damage += damageModifier;
            //     }
            //     console.log(`Damage is: ${damage}!`);

            //     return damage;
            // }

            // // calculate to see if monster hits player
            // const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
            // const rollD20 = () => getRandomNumber(1, 20);

            // let attackRoll = rollD20() + data.actions[1].attack_bonus;
            // console.log(attackRoll);

            // // if the monsterAttackRoll is greater than or equal to player's armor class...
            // if (attackRoll >= 10) {
            //     // ... then the monster's attack hits
            //     console.log(`${data.name}'s attack hits!`);

            //     // for each damage type within the action...
            //     for (let i = 0; i < data.actions[1].damage.length; i++) {
            //         // ... calculate damage
            //         let damageDone = calculateDamage(data.actions[1].damage[i].damage_dice);

            //         // ... and let the player know the damage done
            //         console.log(`${data.name}'s ${data.actions[1].name} does ${damageDone} ${data.actions[1].damage[i].damage_type.index} damage!`);

            //         // then deduct hit points from player


            //     }
            // // otherwise, the attack misses
            // } else {
            //     console.log(`${data.name}'s attack misses!`);
            // }

        });
}

module.exports = getMonster;