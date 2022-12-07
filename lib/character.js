class Character {
    constructor(name, type, level, xp, ac, hp, actions, inventory) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.xp = xp;
        this.ac = ac;
        this.hp = hp;
        this.actions = actions;
        this.inventory = inventory;
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
}

module.exports = Character;