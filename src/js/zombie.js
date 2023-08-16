import Character from './character';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }

  get type() {
    return this.type;
  }

  set type(value) {
    if (value === 'Zombie ') {
      this.type = value;
      return;
    }
    throw new Error('wrong type');
  }
}
