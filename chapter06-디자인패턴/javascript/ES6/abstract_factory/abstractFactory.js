import { Logger } from '../logger.js';
export class PetShop {
  petFactory;
  logger;
  constructor(petFactory) {
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
  speak() {
    throw new Error('Abstract method!');
  }
  toString() {
    throw new Error('Abstract method!');
  }
}
export class Dog extends Animal {
  speak() {
    return 'woof';
  }
  toString() {
    return 'Dog';
  }
}
export class Cat extends Animal {
  speak() {
    return 'meow';
  }
  toString() {
    return 'Cat';
  }
}
/* Factory classes */
export class AbstractFactory {
  getPet() {
    throw new Error('Abstract method!');
  }
  getFood() {
    throw new Error('Abstract method!');
  }
}
export class DogFactory extends AbstractFactory {
  getPet() {
    return new Dog();
  }
  getFood() {
    return 'dog food';
  }
}
export class CatFactory extends AbstractFactory {
  getPet() {
    return new Cat();
  }
  getFood() {
    return 'cat food';
  }
}
