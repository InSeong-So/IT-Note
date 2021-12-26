import { Logger } from '../../logger';

//Defined Interface
export class Shape {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  draw() {
    throw new Error('Interface!');
  }
}
//Concrete implementor 1/3
export class Square extends Shape {
  draw() {
    this.logger.log('Square is created!');
  }
}
//Concrete implementor 2/3}
export class Rectangle extends Shape {
  draw() {
    this.logger.log('Rectangle is created!');
  }
}
//Concrete implementor 3/3
export class Circle extends Shape {
  draw() {
    this.logger.log('Circle is created!');
  }
}
export class ShapeFactory {
  //use getShape method to get object of type shape
  getShape(shapeType: string): Shape {
    if (shapeType == null) throw new Error('Error');
    else if (shapeType === 'CIRCLE') return new Circle();
    else if (shapeType === 'RECTANGLE') return new Rectangle();
    else if (shapeType === 'SQUARE') return new Square();
    else throw new Error('Error');
  }
}
