import { Logger } from '../../logger';

export class Originator {
  logger: Logger;
  state: string;
  constructor() {
    this.logger = new Logger();
  }

  set State(_state: string) {
    this.state = _state;
  }

  get State(): string {
    return this.state;
  }

  set stateFromMemento(memento: Memento) {
    this.state = memento.MementoState;
  }

  get stateToBeSavedMemento(): Memento {
    return new Memento(this.state);
  }
}
export class Memento {
  mementoState: string;
  constructor(_state: string) {
    this.mementoState = _state;
  }

  get MementoState(): string {
    return this.mementoState;
  }
}
export class CareTaker {
  mementoList: Memento[];
  constructor() {
    this.mementoList = [];
  }

  addStateToMementoList(_state: Memento) {
    this.mementoList.push(_state);
  }

  getStateFromMementoList(index: number): Memento {
    return this.mementoList[index];
  }
}
