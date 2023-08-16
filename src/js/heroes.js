// eslint-disable-next-line max-classes-per-file
import Character from './character';

class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }

  get type() {
    return this.type;
  }

  set type(value) {
    if (value === 'Swordsman') {
      this.type = value;
      return;
    }
    throw new Error('wrong type');
  }
}

class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }

  get type() {
    return this.type;
  }

  set type(value) {
    if (value === 'Magician') {
      this.type = value;
      return;
    }
    throw new Error('wrong type');
  }
}

class Daemon extends Character {
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

class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }

  get type() {
    return this.type;
  }

  set type(value) {
    if (value === 'Undead') {
      this.type = value;
      return;
    }
    throw new Error('wrong type');
  }
}

class Zombie extends Character {
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
