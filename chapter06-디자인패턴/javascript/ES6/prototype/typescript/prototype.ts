import { Logger } from '../../logger';

export class Prototype {
  doClone(): Prototype {
    throw new Error('Abstract method!');
  }
}

export class Person extends Prototype {
  logger: Logger;
  surname: string;
  constructor(surname: string) {
    super();
    this.logger = new Logger();
    this.surname = surname;
  }

  doClone(): Prototype {
    return new Person(this.surname);
  }

  toString() {
    return this.logger.log('This person is named ' + this.surname);
  }
}

export class Dog extends Prototype {
  logger: Logger;
  sound: string;
  constructor(sound: string) {
    super();
    this.logger = new Logger();
    this.sound = sound;
  }

  doClone(): Prototype {
    return new Dog(this.sound);
  }

  toString() {
    return this.logger.log('This dog says ' + this.sound);
  }
}
