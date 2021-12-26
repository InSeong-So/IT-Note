import { Receiver, ConcreteCommand1, ConcreteCommand2, Invoker } from './command';

const receiver = new Receiver();
const command1 = new ConcreteCommand1(receiver);
const command2 = new ConcreteCommand2(receiver);
const invoker = new Invoker();

invoker.storeAndExecute(command1);
invoker.storeAndExecute(command2);
