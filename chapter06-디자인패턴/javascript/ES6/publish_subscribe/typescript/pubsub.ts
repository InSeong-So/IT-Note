import { Logger } from '../../logger';

export class Provider {
  msgQueue: any[];
  subscribers: { [key: string]: Subscriber[] };
  constructor() {
    this.msgQueue = [];
    this.subscribers = {};
  }

  notify(msg: string) {
    this.msgQueue.push(msg);
  }

  subscribe(msg: string, subscriber: Subscriber) {
    if (!(msg in this.subscribers)) {
      this.subscribers[msg] = [];
    }

    this.subscribers[msg].push(subscriber);
  }

  unsubscribe(msg: string, subscriber: Subscriber) {
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
  provider: Provider;
  constructor(msgCenter: Provider) {
    this.provider = msgCenter;
  }

  publish(msg: string) {
    this.provider.notify(msg);
  }
}

export class Subscriber {
  name: string;
  provider: Provider;
  logger: Logger;
  constructor(name: string, msgCenter: Provider) {
    this.name = name;
    this.provider = msgCenter;
    this.logger = new Logger();
  }

  subscribe(msg: string) {
    this.provider.subscribe(msg, this);
  }

  run(msg: string) {
    this.logger.log(this.name + ' & ' + msg);
  }
}
