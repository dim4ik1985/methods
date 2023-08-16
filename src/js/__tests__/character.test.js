import Character from '../character';

const hero = new Character('Shilla', 'Bowman');

test('Check heroes name', () => {
  expect(hero.name).toBe('Shilla');
});

test('name does not match the requirements', () => {
  expect(() => { hero.name = 's'; }).toThrow('Short name');
});
