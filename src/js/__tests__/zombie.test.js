import Zombie from '../zombie';

test('name does not match the requirements', () => {
  expect(() => new Zombie('Viviana', 'Zom')).toThrow('wrong type');
});

test('Correct Structure', () => {
  const hero = new Zombie('Viviana', 'Zombie');
  const correct = {
    _name: 'Viviana',
    _type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(hero).toEqual(correct);
});

test('check level up', () => {
  const pers = new Zombie('Viviana', 'Zombie');
  pers.levelUp();
  expect(pers.level).toBe(2);
});

test('level up with health less 0', () => {
  const pers = new Zombie('Viviana', 'Zombie');
  pers.health = 0;
  expect(() => { pers.levelUp(); }).toThrow(Error);
});

test('method damage with health less 0', () => {
  const pers = new Zombie('Viviana', 'Zombie');
  pers.health = 0;
  expect(() => { pers.damage(2); }).toThrow(Error);
});

test('check damage', () => {
  const pers = new Zombie('Viviana', 'Zombie');
  pers.health = 100;
  pers.damage(50);
  expect(pers.health).toBe(55);
});
