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
//Concrete Implementor 1/2
export class Circle extends Shape {
  draw() {
    this.logger.log('Shape:Circle');
  }
}
//Concrete Implementor 2/2
export class Rectangle extends Shape {
  draw() {
    this.logger.log('Shape:Rectangle');
  }
}
//Abstract class
export class ShapeDecorator extends Shape {
  decoratedShape: Shape;
  constructor(_decoratedShape: Shape) {
    super();
    this.decoratedShape = _decoratedShape;
    this.logger = new Logger();
  }

  draw() {
    this.decoratedShape.draw();
  }
}
//Concrete implementor of abstract class
export class RedShapeDecorator extends ShapeDecorator {
  redDecoratedShape: Shape;
  constructor(_decoratedShape: Shape) {
    super(_decoratedShape);
    this.redDecoratedShape = _decoratedShape;
  }

  setRedBorder(redDecoratedShape: Shape) {
    this.logger.log('Border color: Red.');
  }

  draw() {
    this.redDecoratedShape.draw();
    this.setRedBorder(this.redDecoratedShape);
  }
}
