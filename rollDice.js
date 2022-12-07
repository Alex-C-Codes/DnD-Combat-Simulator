// check to see if monster has multiattack.
if (data.actions[0].name === 'Multiattack') {
    console.log('Multiattack is true');
} else {
    console.log('Multiattack is false');
}

// for each action, show list of actions
for (let i = 0; i < data.actions.length; i++) {
    console.log(`Action ${i}: ${data.actions[i].name}`);
}

// simple attack example

// calculates attack damage based on damage_dice
function calculateDamage(str) {
    let damage = 0;
    let diceAmount;
    let diceRoll;
    let damageModifier;
    let matches = str.match(/\d+/g);

    console.log(matches);
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

// returns a list of numbers if any are contained with a string
function containsNumber(str) {
    return /\d/.test(str);
}

// calculate to see if monster hits player
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const rollD20 = () => getRandomNumber(1, 20);

let attackRoll = rollD20() + data.actions[1].attack_bonus;
console.log(attackRoll);

// if the monsterAttackRoll is greater than or equal to player's armor class...
if (attackRoll >= 10) {
    // ... then the monster's attack hits
    console.log(`${data.name}'s attack hits!`);

    // for each damage type within the action...
    for (let i = 0; i < data.actions[1].damage.length; i++) {
        // ... calculate damage
        let damageDone = calculateDamage(data.actions[1].damage[i].damage_dice);

        // ... and let the player know the damage done
        console.log(`${data.name}'s ${data.actions[1].name} does ${damageDone} ${data.actions[1].damage[i].damage_type.index} damage!`);

        // then deduct hit points from player


    }
// otherwise, the attack misses
} else {
    console.log(`${data.name}'s attack misses!`);
}