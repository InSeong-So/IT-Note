import { Logger } from '../logger.js';
export class ComputerPart {
  accept(computerPartVisitor) {
    throw new Error('Abstract Method!');
  }
}
export class Keyboard extends ComputerPart {
  accept(computerPartVisitor) {
    computerPartVisitor.visitKeyboard(this);
  }
}
export class Monitor extends ComputerPart {
  accept(computerPartVisitor) {
    computerPartVisitor.visitMonitor(this);
  }
}
export class Mouse extends ComputerPart {
  accept(computerPartVisitor) {
    computerPartVisitor.visitMouse(this);
  }
}
export class Computer extends ComputerPart {
  parts;
  constructor() {
    super();
    this.parts = [new Mouse(), new Keyboard(), new Monitor()];
  }
  accept(computerPartVisitor) {
    this.parts.forEach(part => {
      part.accept(computerPartVisitor);
    });
    computerPartVisitor.visitComputer(this);
  }
}
export class ComputerPartVisitor {
  logger;
  constructor() {
    this.logger = new Logger();
  }
  visitComputer(computer) {
    throw new Error('Abstract Method!');
  }
  visitMouse(mouse) {
    throw new Error('Abstract Method!');
  }
  visitKeyboard(keyboard) {
    throw new Error('Abstract Method!');
  }
  visitMonitor(monitor) {
    throw new Error('Abstract Method!');
  }
}
export class ComputerPartDisplayVisitor extends ComputerPartVisitor {
  visitComputer(computer) {
    this.logger.log('Displaying Computer.');
  }
  visitMouse(mouse) {
    this.logger.log('Displaying Mouse.');
  }
  visitKeyboard(keyboard) {
    this.logger.log('Displaying Keyboard.');
  }
  visitMonitor(monitor) {
    this.logger.log('Displaying Monitor.');
  }
}
