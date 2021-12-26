import { Logger } from '../logger.js';
export class Subject {
  observers;
  logger;
  constructor() {
    this.observers = [];
    this.logger = new Logger();
  }
  register(observer) {
    this.logger.log(observer.toString() + ' is pushed!');
    this.observers.push(observer);
  }
  unregister(observer) {
    const n = this.observers.indexOf(observer);
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
  subjectState;
  get SubjectState() {
    return this.subjectState;
  }
  set SubjectState(subjectState) {
    this.subjectState = subjectState;
  }
}
export class Observer {
  logger;
  constructor() {
    this.logger = new Logger();
  }
  notify() {
    throw new Error('Abstract Method!');
  }
  toString() {
    return '';
  }
}
export class ConcreteObserver extends Observer {
  subject;
  name;
  state;
  constructor(subject, name) {
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
  get Subject() {
    return this.subject;
  }
  set Subject(subject) {
    this.subject = subject;
  }
  toString() {
    return this.name;
  }
}
