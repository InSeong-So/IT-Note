//Director
export class Director {
  builder: Builder;
  construct(builder: Builder) {
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
  building: Building;

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
  floor: null | string;
  size: null | string;
  constructor() {
    this.floor = null;
    this.size = null;
  }

  toString(): string {
    return 'Floor: ' + this.floor + ' | Size: ' + this.size;
  }
}
