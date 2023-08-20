import Swordsman from '../swordsman';

test('name does not match the requirements', () => {
  expect(() => new Swordsman('Filvendor', 'Filvendor')).toThrow('wrong type');
});

test('Correct Structure', () => {
  const hero = new Swordsman('Filvendor', 'Swordsman');
  const correct = {
    _name: 'Filvendor',
    _type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(hero).toEqual(correct);
});

test('check level up', () => {
  const pers = new Swordsman('Filvendor', 'Swordsman');
  pers.levelUp();
  expect(pers.level).toBe(2);
});

test('level up with health less 0', () => {
  const pers = new Swordsman('Filvendor', 'Swordsman');
  pers.health = 0;
  expect(() => { pers.levelUp(); }).toThrow(Error);
});

test('method damage with health less 0', () => {
  const pers = new Swordsman('Filvendor', 'Swordsman');
  pers.health = 0;
  expect(() => { pers.damage(2); }).toThrow(Error);
});

test('check damage', () => {
  const pers = new Swordsman('Filvendor', 'Swordsman');
  pers.health = 100;
  pers.damage(50);
  expect(pers.health).toBe(55);
});
