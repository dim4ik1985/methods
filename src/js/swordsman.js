import Character from './character';

// eslint-disable-next-line no-unused-vars
export default class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }

  set type(value) {
    if (value === 'Swordsman') {
      // eslint-disable-next-line no-underscore-dangle
      this._type = value;
      return;
    }
    throw new Error('wrong type');
  }
}
