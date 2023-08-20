import Character from './character';

export default class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }

  set type(value) {
    if (value === 'Undead') {
      // eslint-disable-next-line no-underscore-dangle
      this._type = value;
      return;
    }
    throw new Error('wrong type');
  }
}
