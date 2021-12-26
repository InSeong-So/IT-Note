import { Logger } from '../logger.js';
export class Strategy {
  logger;
  constructor() {
    this.logger = new Logger();
  }
  doOperation(num1, num2) {
    throw new Error('Abstract method!');
  }
}
export class Context {
  strategy;
  constructor(strategy) {
    this.strategy = strategy;
  }
  executeStrategy(num1, num2) {
    return this.strategy.doOperation(num1, num2);
  }
}
export class OperationAdd extends Strategy {
  doOperation(num1, num2) {
    this.logger.log('add of operation' + ':' + (num1 + num2).toString());
  }
}
export class OperationSubstract extends Strategy {
  doOperation(num1, num2) {
    this.logger.log('sub of operation' + ':' + (num1 - num2).toString());
  }
}
export class OperationMultiply extends Strategy {
  doOperation(num1, num2) {
    this.logger.log('multiply of operation' + ':' + (num1 * num2).toString());
  }
}
