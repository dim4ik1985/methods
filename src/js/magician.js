import Character from './character';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }

  set type(value) {
    if (value === 'Magician') {
      // eslint-disable-next-line no-underscore-dangle
      this._type = value;
      return;
    }
    throw new Error('wrong type');
  }
}
