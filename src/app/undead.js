// eslint-disable-next-line import/no-unresolved
import Character from './Character';

export default class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
