import { Logger } from '../logger';

export class ComputerPart {
  accept(computerPartVisitor: ComputerPartVisitor) {
    throw new Error('Abstract Method!');
  }
}

export class Keyboard extends ComputerPart {
  accept(computerPartVisitor: ComputerPartVisitor) {
    computerPartVisitor.visitKeyboard(this);
  }
}

export class Monitor extends ComputerPart {
  accept(computerPartVisitor: ComputerPartVisitor) {
    computerPartVisitor.visitMonitor(this);
  }
}

export class Mouse extends ComputerPart {
  accept(computerPartVisitor: ComputerPartVisitor) {
    computerPartVisitor.visitMouse(this);
  }
}

export class Computer extends ComputerPart {
  parts: [Mouse, Keyboard, Monitor];
  constructor() {
    super();
    this.parts = [new Mouse(), new Keyboard(), new Monitor()];
  }

  accept(computerPartVisitor: ComputerPartVisitor) {
    this.parts.forEach(part => {
      part.accept(computerPartVisitor);
    });
    computerPartVisitor.visitComputer(this);
  }
}

export class ComputerPartVisitor {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  visitComputer(computer: Computer) {
    throw new Error('Abstract Method!');
  }

  visitMouse(mouse: Mouse) {
    throw new Error('Abstract Method!');
  }

  visitKeyboard(keyboard: Keyboard) {
    throw new Error('Abstract Method!');
  }

  visitMonitor(monitor: Monitor) {
    throw new Error('Abstract Method!');
  }
}

export class ComputerPartDisplayVisitor extends ComputerPartVisitor {
  visitComputer(computer: Computer) {
    this.logger.log('Displaying Computer.');
  }

  visitMouse(mouse: Mouse) {
    this.logger.log('Displaying Mouse.');
  }

  visitKeyboard(keyboard: Keyboard) {
    this.logger.log('Displaying Keyboard.');
  }

  visitMonitor(monitor: Monitor) {
    this.logger.log('Displaying Monitor.');
  }
}
