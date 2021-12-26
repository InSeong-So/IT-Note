/* Generic adapter class */
export class Dog {
  name;
  constructor() {
    this.name = 'Dog';
  }
  bark() {
    return 'woof!';
  }
}
export class Cat {
  name;
  constructor() {
    this.name = 'Cat';
  }
  meow() {
    return 'meow!';
  }
}
export class Human {
  name;
  constructor() {
    this.name = 'Human';
  }
  speak() {
    return "'hello'";
  }
}
export class Car {
  name;
  constructor() {
    this.name = 'Car';
  }
  makeNoise(octaneLevel) {
    return 'vroom ' + octaneLevel;
  }
}
export class Adapter {
  name;
  adaptedMethod;
  args;
  constructor(obj, adaptedMethod, ...args) {
    this.name = obj.name;
    this.adaptedMethod = obj[adaptedMethod];
    this.args = args;
  }
  makeNoise() {
    return this.adaptedMethod(this.args);
  }
}
