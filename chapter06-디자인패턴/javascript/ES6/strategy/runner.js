import { Context, OperationAdd, OperationSubstract, OperationMultiply } from './strategy.js';
const contextAdd = new Context(new OperationAdd());
const contextSub = new Context(new OperationSubstract());
const contextMultiply = new Context(new OperationMultiply());
contextAdd.executeStrategy(1, 10);
contextSub.executeStrategy(12, 5);
contextMultiply.executeStrategy(5, 10);
