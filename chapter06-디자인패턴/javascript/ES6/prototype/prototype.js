import { Logger } from '../logger.js';
export class Prototype {
  doClone() {
    throw new Error('Abstract method!');
  }
}
export class Person extends Prototype {
  logger;
  surname;
  constructor(surname) {
    super();
    this.logger = new Logger();
    this.surname = surname;
  }
  doClone() {
    return new Person(this.surname);
  }
  toString() {
    return this.logger.log('This person is named ' + this.surname);
  }
}
export class Dog extends Prototype {
  logger;
  sound;
  constructor(sound) {
    super();
    this.logger = new Logger();
    this.sound = sound;
  }
  doClone() {
    return new Dog(this.sound);
  }
  toString() {
    return this.logger.log('This dog says ' + this.sound);
  }
}
