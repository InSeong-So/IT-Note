import { Logger } from '../../logger';

export class Command {
  logger: Logger;
  receiver: Receiver;
  constructor(receiver: Receiver) {
    this.logger = new Logger();
    this.receiver = receiver;
  }

  execute() {
    throw new Error('Abstract method!');
  }
}

export class ConcreteCommand1 extends Command {
  constructor(receiver: Receiver) {
    super(receiver);
  }

  execute() {
    this.logger.log('`execute` method of ConcreteCommand1 is being called!');
    this.receiver.action();
  }
}

export class ConcreteCommand2 extends Command {
  constructor(receiver: Receiver) {
    super(receiver);
  }

  execute() {
    this.logger.log('`execute` method of ConcreteCommand2 is being called!');
    this.receiver.action();
  }
}

export class Invoker {
  commands: Command[];
  constructor() {
    this.commands = [];
  }

  storeAndExecute(cmd: Command) {
    this.commands.push(cmd);
    cmd.execute();
  }
}

export class Receiver {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  action() {
    this.logger.log('action is being called!');
  }
}
