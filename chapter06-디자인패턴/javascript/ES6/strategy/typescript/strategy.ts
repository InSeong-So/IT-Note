import { Logger } from '../logger';

export class Strategy {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  doOperation(num1: number, num2: number) {
    throw new Error('Abstract method!');
  }
}
export class Context {
  strategy: Strategy;
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy(num1: number, num2: number) {
    return this.strategy.doOperation(num1, num2);
  }
}
export class OperationAdd extends Strategy {
  doOperation(num1: number, num2: number) {
    this.logger.log('add of operation' + ':' + (num1 + num2).toString());
  }
}

export class OperationSubstract extends Strategy {
  doOperation(num1: number, num2: number) {
    this.logger.log('sub of operation' + ':' + (num1 - num2).toString());
  }
}

export class OperationMultiply extends Strategy {
  doOperation(num1: number, num2: number) {
    this.logger.log('multiply of operation' + ':' + (num1 * num2).toString());
  }
}
