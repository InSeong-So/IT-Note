export class Aggregate {
  items;
  constructor() {
    this.items = [];
  }
  get Count() {
    return this.items.length;
  }
}
//Abstract class
export class Iterator {
  firstObject() {
    throw new Error('Abstract method!');
  }
  nextObject() {
    throw new Error('Abstract method!');
  }
  currentObject() {
    throw new Error('Abstract method!');
  }
  isDone() {
    throw new Error('Abstract method!');
  }
}
//Concrete of Iterator
export class ConcreteIterator extends Iterator {
  _aggregate;
  _items;
  index;
  constructor(aggregate) {
    super();
    this._aggregate = aggregate;
    this._items = this._aggregate.items;
    this.index = 0;
  }
  firstObject() {
    return this._items[0];
  }
  nextObject() {
    let retVal = null;
    if (this.index < this._aggregate.Count - 1) retVal = this._items[++this.index];
    else retVal = 'There is no more item in the list!';
    return retVal;
  }
  isDone() {
    return this.index >= this._aggregate.Count - 1;
  }
  currentObject() {
    return this._items[this.index];
  }
}
