import { Logger } from '../logger.js';
export class Provider {
  msgQueue;
  subscribers;
  constructor() {
    this.msgQueue = [];
    this.subscribers = {};
  }
  notify(msg) {
    this.msgQueue.push(msg);
  }
  subscribe(msg, subscriber) {
    if (!(msg in this.subscribers)) {
      this.subscribers[msg] = [];
    }
    this.subscribers[msg].push(subscriber);
  }
  unsubscribe(msg, subscriber) {
    const subscribers = this.subscribers[msg];
    const index = subscribers.indexOf(subscriber);
    if (index > -1) {
      subscribers.splice(index, 1);
    }
  }
  update() {
    this.msgQueue.forEach(msg => {
      if (msg in this.subscribers) {
        this.subscribers[msg].forEach(sub => {
          sub.run(msg);
        });
      }
    });
    this.msgQueue = [];
  }
}
export class Publisher {
  provider;
  constructor(msgCenter) {
    this.provider = msgCenter;
  }
  publish(msg) {
    this.provider.notify(msg);
  }
}
export class Subscriber {
  name;
  provider;
  logger;
  constructor(name, msgCenter) {
    this.name = name;
    this.provider = msgCenter;
    this.logger = new Logger();
  }
  subscribe(msg) {
    this.provider.subscribe(msg, this);
  }
  run(msg) {
    this.logger.log(this.name + ' & ' + msg);
  }
}
