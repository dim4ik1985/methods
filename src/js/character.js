export default class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(value) {
    if (value.length >= 2 && value.length <= 10) {
      // eslint-disable-next-line no-underscore-dangle
      this._name = value;
      return;
    }
    throw new Error('Short name');
  }
}
