/* Generic adapter class */

export class Dog {
  name: string;
  constructor() {
    this.name = 'Dog';
  }

  bark(): string {
    return 'woof!';
  }
}

export class Cat {
  name: string;
  constructor() {
    this.name = 'Cat';
  }

  meow(): string {
    return 'meow!';
  }
}

export class Human {
  name: string;
  constructor() {
    this.name = 'Human';
  }

  speak(): string {
    return "'hello'";
  }
}

export class Car {
  name: string;
  constructor() {
    this.name = 'Car';
  }

  makeNoise(octaneLevel: string): string {
    return 'vroom ' + octaneLevel;
  }
}

export class Adapter {
  name: string;
  adaptedMethod: (...args: any[]) => any;
  args: any[];
  constructor(obj: any, adaptedMethod: string, ...args: any[]) {
    this.name = obj.name;
    this.adaptedMethod = obj[adaptedMethod];
    this.args = args;
  }

  makeNoise() {
    return this.adaptedMethod(this.args);
  }
}
