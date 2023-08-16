import Character from './character';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }

  get type() {
    return this.type;
  }

  set type(value) {
    if (value === 'Daemon') {
      this.type = value;
      return;
    }
    throw new Error('wrong type');
  }
}
