import Undead from '../undead';

test('name does not match the requirements', () => {
  expect(() => new Undead('Herakles', 'Bower')).toThrow('wrong type');
});

test('Correct Structure', () => {
  const hero = new Undead('Herakles', 'Undead');
  const correct = {
    _name: 'Herakles',
    _type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(hero).toEqual(correct);
});

test('check level up', () => {
  const pers = new Undead('Herakles', 'Undead');
  pers.levelUp();
  expect(pers.level).toBe(2);
});

test('level up with health less 0', () => {
  const pers = new Undead('Herakles', 'Undead');
  pers.health = 0;
  expect(() => { pers.levelUp(); }).toThrow(Error);
});

test('method damage with health less 0', () => {
  const pers = new Undead('Herakles', 'Undead');
  pers.health = 0;
  expect(() => { pers.damage(2); }).toThrow(Error);
});

test('check damage', () => {
  const pers = new Undead('Herakles', 'Undead');
  pers.health = 100;
  pers.damage(50);
  expect(pers.health).toBe(62.5);
});
