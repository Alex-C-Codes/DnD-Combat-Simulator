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
}

module.exports = Monster;