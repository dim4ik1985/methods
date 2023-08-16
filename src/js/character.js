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

  levelUp() {
    if (this.health <= 0) {
      throw new Error("Can't level up a dead person");
    }
    this.level += 1;
    this.attack += (this.attack * 0.2);
    this.defence += (this.defence * 0.2);
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Person is dead');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
