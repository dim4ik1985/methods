import Daemon from '../daemon';

test('name does not match the requirements', () => {
  expect(() => new Daemon('Viviana', 'Undead')).toThrow('wrong type');
});

test('Correct Structure', () => {
  const pers = new Daemon('Alcaeos', 'Daemon');
  const correct = {
    _name: 'Alcaeos',
    _type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(pers).toEqual(correct);
});

test('check level up', () => {
  const pers = new Daemon('Alcaeos', 'Daemon');
  pers.levelUp();
  expect(pers.level).toBe(2);
});

test('level up with health less 0', () => {
  const pers = new Daemon('Alcaeos', 'Daemon');
  pers.health = 0;
  expect(() => { pers.levelUp(); }).toThrow(Error);
});

test('method damage with health less 0', () => {
  const pers = new Daemon('Alcaeos', 'Daemon');
  pers.health = 0;
  expect(() => { pers.damage(2); }).toThrow(Error);
});

test('check damage', () => {
  const pers = new Daemon('Alcaeos', 'Daemon');
  pers.health = 100;
  pers.damage(50);
  expect(pers.health).toBe(70);
});
