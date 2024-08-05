/* Fighter class definition */

const MAX_LIFE = 100;
class Fighter {
    constructor (name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }
    fight(enemy) {

        let damage = Math.floor(Math.random() * this.strength) + 1 ;

        damage -= enemy.dexterity;
        if (damage < 0) {
            damage = 0;
        }
         
        enemy.life -= damage;
        if (enemy.life < 0 ) {
            enemy.life = 0;
        }
        console.log(`${this.name} attacked ${enemy.name}, ${enemy.name} : ♥ ${enemy.life} left.`)
    }

    isAlive() {
        return this.life > 0;
    }
}

module.exports = Fighter