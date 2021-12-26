import { Logger } from '../../logger.js';

export class PetShop {
  petFactory: AbstractFactory;
  logger: Logger;
  constructor(petFactory: AbstractFactory) {
    this.petFactory = petFactory;
    this.logger = new Logger();
  }

  showPet() {
    const pet = this.petFactory.getPet();
    this.logger.log('We have a lovely ' + pet.toString());
    this.logger.log('It says ' + pet.speak());
    this.logger.log('We also have ' + this.petFactory.getFood());
  }
}
/* Stuff that our factory makes */

export class Animal {
  speak(): string {
    throw new Error('Abstract method!');
  }

  toString(): string {
    throw new Error('Abstract method!');
  }
}

export class Dog extends Animal {
  speak(): string {
    return 'woof';
  }

  toString(): string {
    return 'Dog';
  }
}

export class Cat extends Animal {
  speak(): string {
    return 'meow';
  }

  toString(): string {
    return 'Cat';
  }
}

/* Factory classes */

export class AbstractFactory {
  getPet(): Animal {
    throw new Error('Abstract method!');
  }

  getFood(): string {
    throw new Error('Abstract method!');
  }
}

export class DogFactory extends AbstractFactory {
  getPet(): Animal {
    return new Dog();
  }

  getFood(): string {
    return 'dog food';
  }
}

export class CatFactory extends AbstractFactory {
  getPet(): Animal {
    return new Cat();
  }

  getFood(): string {
    return 'cat food';
  }
}
