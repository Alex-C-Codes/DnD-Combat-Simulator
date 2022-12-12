const { attackRoll, damageRoll } = require('./rollDice');

class Character {
    constructor(name, type, level, xp, ac, hp, actions, inventory, user_id) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.xp = xp;
        this.ac = ac;
        this.hp = hp;
        this.actions = actions;
        this.inventory = inventory;
        this.user_id = user_id;
    }

    // create methods for Character class
    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }

    getLevel() {
        return this.level;
    }

    getXp() {
        return this.xp;
    }

    getAc() {
        return this.ac;
    }

    getHp() {
        return this.hp;
    }

    getActions() {
        return this.actions;
    }

    getInventory() {
        return this.inventory;
    }

    getStats() {
        console.log(
            `Name: ${this.name}
            \nType: ${this.type}
            \nLevel: ${this.level}
            \nXP: ${this.xp}
            \nAC: ${this.ac}
            \nHP: ${this.hp}
            \nActions: ${this.actions}
            \nInventory: ${this.inventory}`
        );
        console.log('\n-------------\n');
    }

    attack(monsterAc) {
        console.log('this is attack method:');
        // console.log(playerAc);
        // console.log(this.actions[1]);
        let z = 0;
        let totalDamage = 0;

        // console.log(this.actions.name);

        // check to see if action has damage_dice. If not, go to next action
        if (this.actions[z].name === 'Multiattack') {
            console.log('Multiattack is true');
            z++;
        } else {
            console.log('Multiattack is false');
        }

        // if attackRoll succeeds...
        if (attackRoll(this.name, this.actions[z].attack_bonus, monsterAc)) {
            // ... then roll for damage
            // console.log(`Damge Roll is: ${damageRoll(this.actions[z].damage.length)}`);
            // console.log(this.actions[1].damage);
            totalDamage = damageRoll(this.name, this.actions[z], this.actions[z].damage);
            // playerHp -= totalDamage;
            // console.log(playerHp);
            return totalDamage;
        } else {
            // console.log('bye');
            console.log(`${this.name}'s attack misses!`);
            return totalDamage;
        }
    }
}

module.exports = Character;