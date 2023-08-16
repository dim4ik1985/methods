import Bowman from '../bowerman';

const heroBowerman = new Bowman('Хогфач', 'Bowerman');

test('character type check', () => {
  expect(heroBowerman.type).toBe('Bowerman');
});

test('name does not match the requirements', () => {
  expect(() => { heroBowerman.type = 'Zombie'; }).toThrow(Error);
});

test('level up', () => {
  heroBowerman.levelUp();
  expect(heroBowerman.level).toBe(2);
});

test('level up with health less 0', () => {
  heroBowerman.health = 0;
  expect(() => { heroBowerman.levelUp(); }).toThrow(Error);
});

test('method damage with health less 0', () => {
  expect(() => { heroBowerman.damage(2); }).toThrow(Error);
});

test('level up with health less 0', () => {
  heroBowerman.health = 100;
  heroBowerman.damage(50);
  expect(heroBowerman.health).toBe(65);
});
