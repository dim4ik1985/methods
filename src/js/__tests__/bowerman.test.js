import Bowman from '../bowerman';

test('name does not match the requirements', () => {
  expect(() => new Bowman('Viviana', 'Bower')).toThrow('wrong type');
});

test('Correct Structure', () => {
  const hero = new Bowman('Viviana', 'Bowerman');
  const correct = {
    _name: 'Viviana',
    _type: 'Bowerman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(hero).toEqual(correct);
});

test('check level up', () => {
  const heroBowerman = new Bowman('Viviana', 'Bowerman');
  heroBowerman.levelUp();
  expect(heroBowerman.level).toBe(2);
});

test('level up with health less 0', () => {
  const heroBowerman = new Bowman('Viviana', 'Bowerman');
  heroBowerman.health = 0;
  expect(() => { heroBowerman.levelUp(); }).toThrow(Error);
});

test('method damage with health less 0', () => {
  const heroBowerman = new Bowman('Viviana', 'Bowerman');
  heroBowerman.health = 0;
  expect(() => { heroBowerman.damage(2); }).toThrow(Error);
});

test('check damage', () => {
  const heroBowerman = new Bowman('Viviana', 'Bowerman');
  heroBowerman.health = 100;
  heroBowerman.damage(50);
  expect(heroBowerman.health).toBe(62.5);
});
