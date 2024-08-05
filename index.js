// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter');

const Heracles = new Fighter("Heracles",20,6);
const Nemean = new Fighter("Nemean Lion", 11, 13);

let round = 1;

while (Heracles.isAlive() && Nemean.isAlive()) {
    console.log(`Round #${round}`);
    Heracles.fight(Nemean);
    if (Nemean.isAlive()) {
        Nemean.fight(Heracles);
    }
    round ++;
}

if (Heracles.life === 0 ) {
    console.log(`💀 Heracles is dead`);
    console.log(`🏆 Nemean win ! (♥ ${Nemean.life})`)
} else if (Nemean.life === 0 ) {
    console.log(`💀 Nemean is dead`);
    console.log(`🏆 Heracles win ! (♥ ${Heracles.life})`)
}