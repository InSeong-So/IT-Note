//Director
export class Director {
  builder;
  construct(builder) {
    this.builder = builder;
  }
  constructBuilding() {
    this.builder.newBuilding();
    this.builder.buildFloor();
    this.builder.buildSize();
  }
  getBuilding() {
    return this.builder.building;
  }
}
//Abstract Builder
export class Builder {
  building;
  buildFloor() {
    throw new Error('Abstract method!');
  }
  buildSize() {
    throw new Error('Abstract method!');
  }
  newBuilding() {
    this.building = new Building();
  }
}
// Concrete Builder
export class HouseBuilder extends Builder {
  buildFloor() {
    this.building.floor = 'One';
  }
  buildSize() {
    this.building.size = 'Big';
  }
}
export class FlatBuilder extends Builder {
  buildFloor() {
    this.building.floor = 'More than One';
  }
  buildSize() {
    this.building.size = 'Small';
  }
}
//Product
export class Building {
  floor;
  size;
  constructor() {
    this.floor = null;
    this.size = null;
  }
  toString() {
    return 'Floor: ' + this.floor + ' | Size: ' + this.size;
  }
}
