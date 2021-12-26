import { Logger } from '../logger.js';
export class Originator {
  logger;
  state;
  constructor() {
    this.logger = new Logger();
  }
  set State(_state) {
    this.state = _state;
  }
  get State() {
    return this.state;
  }
  set stateFromMemento(memento) {
    this.state = memento.MementoState;
  }
  get stateToBeSavedMemento() {
    return new Memento(this.state);
  }
}
export class Memento {
  mementoState;
  constructor(_state) {
    this.mementoState = _state;
  }
  get MementoState() {
    return this.mementoState;
  }
}
export class CareTaker {
  mementoList;
  constructor() {
    this.mementoList = [];
  }
  addStateToMementoList(_state) {
    this.mementoList.push(_state);
  }
  getStateFromMementoList(index) {
    return this.mementoList[index];
  }
}
