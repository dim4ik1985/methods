import Character from '../character';

test('error in name', () => {
  expect(() => new Character('F', 'Zombie')).toThrow('Short name');
});

test('неверный тип персонажа', () => {
  expect(() => new Character('Vestele', 'Zomb')).toThrow('There is no such type');
});

test('Correct Structure', () => {
  const hero = new Character('Ragriel', 'Daemon');
  const correct = {
    _name: 'Ragriel',
    _type: 'Daemon',
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
  };
  expect(hero).toEqual(correct);
});
