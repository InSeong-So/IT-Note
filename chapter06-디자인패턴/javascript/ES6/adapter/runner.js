import { Dog, Cat, Human, Car, Adapter } from './adapter.js';
import { Logger } from '../logger.js';
const logger = new Logger();
const objects = [];
const dog = new Dog();
objects.push(new Adapter(dog, 'bark'));
const cat = new Cat();
objects.push(new Adapter(cat, 'meow'));
const human = new Human();
objects.push(new Adapter(human, 'speak'));
const car = new Car();
objects.push(new Adapter(car, 'makeNoise', 3));
objects.forEach(adapter => {
  logger.log('A ' + adapter.name + ' goes ' + adapter.makeNoise());
});
