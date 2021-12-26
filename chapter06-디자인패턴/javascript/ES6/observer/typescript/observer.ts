import { Logger } from '../../logger';

export class Subject {
  observers: Observer[];
  logger: Logger;
  constructor() {
    this.observers = [];
    this.logger = new Logger();
  }

  register(observer: Observer) {
    this.logger.log(observer.toString() + ' is pushed!');
    this.observers.push(observer);
  }

  unregister(observer: Observer) {
    const n: number = this.observers.indexOf(observer);
    this.logger.log(observer.toString() + ' is removed');
    this.observers.splice(n, 1);
  }

  notify() {
    this.logger.log('notify all the observers');

    for (let i = 0, max = this.observers.length; i < max; i += 1) {
      this.observers[i].notify();
    }
  }
}

export class ConcreteSubject extends Subject {
  subjectState: number;
  get SubjectState(): number {
    return this.subjectState;
  }

  set SubjectState(subjectState: number) {
    this.subjectState = subjectState;
  }
}

export class Observer {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  notify() {
    throw new Error('Abstract Method!');
  }

  toString(): string {
    return '';
  }
}

export class ConcreteObserver extends Observer {
  subject: ConcreteSubject;
  name: string;
  state: any;
  constructor(subject: ConcreteSubject, name: string) {
    super();
    this.logger.log('ConcreteObserver ' + name + ' is created!');
    this.subject = subject;
    this.name = name;
  }

  notify() {
    this.logger.log("ConcreteObserver's notify method");
    this.logger.log(this.name, this.state);
    this.state = this.subject.SubjectState;
  }

  get Subject(): ConcreteSubject {
    return this.subject;
  }

  set Subject(subject: ConcreteSubject) {
    this.subject = subject;
  }

  toString(): string {
    return this.name;
  }
}
