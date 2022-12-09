class Monster {
    constructor(name, cr, xp, ac, hp, actions) {
        this.name = name;
        this.cr = cr;
        this.xp = xp;
        this.ac = ac;
        this.hp = hp;
        this.actions = actions;
    }

    // create methods for Monster class
    getName() {
        return this.name;
    }

    getCr() {
        return this.cr;
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

    getStats() {
        console.log(
            `Name: ${this.name}
            \nCR: ${this.cr}
            \nXP: ${this.xp}
            \nAC: ${this.ac}
            \nHP: ${this.hp}
            \nActions: ${this.actions}\n`
        );
        console.log('\n-------------\n');
    }

    // attack method returns a damage roll based on monster action
    attack(playerAC) {
        console.log('this is attack method:');
        // console.log(playerAC);
        // console.log(this.actions[1]);
        let i = 0;

        // check to see if action has damage_dice. If not, go to next action
        if (this.actions[i].name === 'Multiattack') {
            console.log('Multiattack is true');
            i++;
        } else {
            console.log('Multiattack is false');
        }

        // // check to see if attack hits
        const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        const rollD20 = () => getRandomNumber(1, 20);

        let attackRoll = rollD20() + this.actions[i].attack_bonus;
        console.log(attackRoll);

        // if (attackRoll >= 10) {
        //     // ... then the monster's attack hits
        //     console.log(`${this.name}'s attack hits!`);
        
        //     // for each damage type within the action...
        //     for (let i = 0; i < this.actions[1].damage.length; i++) {
        //         // ... calculate damage
        //         let damageDone = calculateDamage(this.actions[1].damage[i].damage_dice);
        
        //         // ... and let the player know the damage done
        //         console.log(`${this.name}'s ${this.actions[1].name} does ${damageDone} ${this.actions[1].damage[i].damage_type.index} damage!`);
        
        //         // then deduct hit points from player
        
        
        //     }
        // // otherwise, the attack misses
        // } else {
        //     console.log(`${this.name}'s attack misses!`);
        // }

        // // get damage dice from the monster action

        // // for each damage_dice within an action's damage, roll damage
        // for (let y = 0; y < this.actions[i].damage.length; y++) {
        //     console.log(this.actions[i].damage[y].damage_dice);

        // }

    }
}

module.exports = Monster;