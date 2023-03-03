/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Bowerman from './app/bowerman';
import Character from './app/Character';
import Daemon from './app/daemon';
import Magician from './app/magician';
import Swordsman from './app/swordsman';
import Undead from './app/undead';
import Zombie from './app/zombie';

const hero = new Character('hero', 'Swordsman');
console.log(hero);
const bowerman = new Bowerman('Bowerman', 'Bowman');
console.log(bowerman);
const daemon = new Daemon('Demon', 'Demon');
console.log(daemon);
const magician = new Magician('Mag', 'Magician');
console.log(magician);
const swordsman = new Swordsman('Swordsman', 'Swordsman');
console.log(swordsman);
const undead = new Undead('Dead', 'Undead');
console.log(undead);
const zombie = new Zombie('Zombie', 'Zombie');
console.log(zombie);
