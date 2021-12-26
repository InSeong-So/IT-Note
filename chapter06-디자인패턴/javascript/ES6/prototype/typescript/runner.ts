import { Prototype, Person, Dog } from './prototype';

const person1 = new Person('Fred');

const person2 = person1.doClone();
person1.toString();
person2.toString();

const dog1 = new Dog('Wooof!');
dog1.toString();

const dog2 = dog1.doClone();
dog2.toString();
