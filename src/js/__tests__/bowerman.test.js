import Bowman from '../bowerman';

const heroBowerman = new Bowman('Хогфач', 'Bowerman');

test('character type check', () => {
  expect(heroBowerman.type).toBe('Bowerman');
});

test('name does not match the requirements', () => {
  expect(() => { heroBowerman.type = 'Zombie'; }).toThrow(Error);
});
