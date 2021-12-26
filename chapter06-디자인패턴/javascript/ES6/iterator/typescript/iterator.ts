import { Logger } from '../../logger';

export class Aggregate {
  items: any[];
  constructor() {
    this.items = [];
  }

  get Count() {
    return this.items.length;
  }
}
//Abstract class
export class Iterator {
  firstObject(): any {
    throw new Error('Abstract method!');
  }

  nextObject(): any {
    throw new Error('Abstract method!');
  }

  currentObject(): any {
    throw new Error('Abstract method!');
  }

  isDone(): boolean {
    throw new Error('Abstract method!');
  }
}
//Concrete of Iterator
export class ConcreteIterator extends Iterator {
  _aggregate: Aggregate;
  _items: any[];
  index: number;
  constructor(aggregate: Aggregate) {
    super();
    this._aggregate = aggregate;
    this._items = this._aggregate.items;
    this.index = 0;
  }

  firstObject(): any {
    return this._items[0];
  }

  nextObject(): any {
    let retVal = null;
    if (this.index < this._aggregate.Count - 1) retVal = this._items[++this.index];
    else retVal = 'There is no more item in the list!';
    return retVal;
  }

  isDone(): boolean {
    return this.index >= this._aggregate.Count - 1;
  }

  currentObject() {
    return this._items[this.index];
  }
}
