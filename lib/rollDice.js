// rollAttack.js checks to see if an attack is successful. If an attack is successful, then it returns damage.

// const Monster = require('../lib/monster');

// simple attack example

// dice roll functions
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const rollD20 = () => getRandomNumber(1, 20);

// check to see if attack roll succeeds
function attackRoll(attacker_name, attack_bonus, ac) {

    let rollToAttack = rollD20() + attack_bonus;
        console.log(`Attack roll is: ${rollToAttack}`);

        // if attackRoll is higher than armor class...
        if (rollToAttack >= ac) {
            // ... then the attack roll succeeds
            console.log(`${attacker_name}'s attack hits!`);
            return true;

        // otherwise, the attack misses
        } else {
            console.log(`${attacker_name}'s attack misses!`);
            return false;
        }
}

// gets damage done
function damageRoll(name, actions, damage) {
    let damageDone = [];
    let totalDamage;
    // console.log(actions);
    // for each damage type within the action...
    // console.log(damage[0]);
    for (let i = 0; i < damage.length; i++) {
        // ... calculate damage
        // console.log(damage[i].damage_dice);
        damageDone.push(calculateDamage(damage[i].damage_dice));
        totalDamage = damageDone.reduce((partialSum, a) => partialSum + a, 0);
        // console.log(damageDone);
        // console.log(totalDamage);
    
        // ... and let the player know the damage done
        console.log(`${name}'s ${actions.name} does ${damageDone[i]} ${actions.damage[i].damage_type.index} damage!`);
    }
    // totalDamage = damageDone.reduce((partialSum, a) => partialSum + a, 0);
    console.log(`Total Damage is: ${totalDamage}`);
    return totalDamage;
}

// calculates attack damage based on damage_dice string
function calculateDamage(str) {
    let damage = 0;
    let diceAmount;
    let diceRoll;
    let damageModifier;
    let matches = str.match(/\d+/g);

    // console.log(matches);
    damageModifier = parseInt(matches[2]);

    // [ ] NOT SURE WHY matches.length KEEPS RETURNING 3
    if (Number.isFinite(damageModifier)) {

        // diceAmount tells us how many dice to roll
        diceAmount = parseInt(matches[0]);
        console.log(`diceAmount is: ${matches[0]}`);
        // diceRoll tells us what type of dice to roll
        diceRoll = parseInt(matches[1]);
        console.log(`diceRoll is: ${matches[1]}`);
        // damageModifier tells us how much damage to add to the roll
        damageModifier = parseInt(matches[2]);
        console.log(`damage modifier is: ${matches[2]}`);
    } else {
        console.log(matches.length);
        diceAmount = parseInt(matches[0]);
        console.log(`diceAmount is: ${matches[0]}`);
        diceRoll = parseInt(matches[1]);
        console.log(`diceRoll is: ${matches[1]}`);
    }

    // for each number of dice, roll a specific type of dice
    for (let d = 0; d < diceAmount; d++) {
        damage += getRandomNumber(1, diceRoll);
    }

    if (Number.isFinite(damageModifier)) {
        damage += damageModifier;
    }
    console.log(`Damage is: ${damage}!`);

    return damage;
}

module.exports = { attackRoll, damageRoll, calculateDamage };