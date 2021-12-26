import { Logger } from '../logger.js';
export class Command {
  logger;
  receiver;
  constructor(receiver) {
    this.logger = new Logger();
    this.receiver = receiver;
  }
  execute() {
    throw new Error('Abstract method!');
  }
}
export class ConcreteCommand1 extends Command {
  constructor(receiver) {
    super(receiver);
  }
  execute() {
    this.logger.log('`execute` method of ConcreteCommand1 is being called!');
    this.receiver.action();
  }
}
export class ConcreteCommand2 extends Command {
  constructor(receiver) {
    super(receiver);
  }
  execute() {
    this.logger.log('`execute` method of ConcreteCommand2 is being called!');
    this.receiver.action();
  }
}
export class Invoker {
  commands;
  constructor() {
    this.commands = [];
  }
  storeAndExecute(cmd) {
    this.commands.push(cmd);
    cmd.execute();
  }
}
export class Receiver {
  logger;
  constructor() {
    this.logger = new Logger();
  }
  action() {
    this.logger.log('action is being called!');
  }
}
