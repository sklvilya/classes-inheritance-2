/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import Character from '../app/Character';
// eslint-disable-next-line import/no-unresolved
import Daemon from '../app/daemon';
// eslint-disable-next-line import/no-unresolved
import Undead from '../app/undead';

describe('Check field name in class Character', () => {
  test('Check empty name in class Character', () => {
    expect(() => new Character('', 'Bowman')).toThrow();
  });

  test('Check long name in class Character', () => {
    expect(() => new Character('Super long name', 'Bowman')).toThrow();
  });

  test('Check correct name in class Character', () => {
    const expextedHero = {
      health: 100,
      level: 1,
      name: 'Monster',
      type: 'Bowerman',
      attack: 0,
      defence: 0,
    };
    expect(new Character('Monster', 'Bowerman')).toEqual(expextedHero);
  });
});

describe('Check field type in class Character', () => {
  test('Check wrong value in type', () => {
    expect(() => new Character('Monster', '')).toThrow();
  });
});

describe('Check function levelUp', () => {
  const hero = new Character('hero', 'Swordsman');

  test('Check throw in zero health', () => {
    hero.health = 0;
    expect(() => hero.levelUp()).toThrow();
  });

  test('Check change skills ', () => {
    const demon = new Daemon('Demon', 'Daemon');
    const expextedHero = {
      health: 100,
      level: 2,
      name: 'Demon',
      type: 'Daemon',
      attack: 12,
      defence: 48,
    };
    demon.levelUp();
    expect(demon).toEqual(expextedHero);
  });
});

describe('Check function damage', () => {
  const undead = new Undead('MrDead', 'Undead');

  test('Check the correct argument', () => {
    const expextedHero = {
      health: 62.5,
      level: 1,
      name: 'MrDead',
      type: 'Undead',
      attack: 25,
      defence: 25,
    };
    undead.damage(50);
    expect(undead).toEqual(expextedHero);
  });
});
