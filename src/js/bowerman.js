import Character from './character';

// eslint-disable-next-line no-unused-vars
export default class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }

  set type(value) {
    if (value === 'Bowerman') {
      // eslint-disable-next-line no-underscore-dangle
      this._type = value;
      return;
    }
    throw new Error('wrong type');
  }
}
