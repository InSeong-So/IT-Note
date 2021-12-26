import { Logger } from '../logger.js';
//Defined Interface
export class Shape {
  logger;
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
  decoratedShape;
  constructor(_decoratedShape) {
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
  redDecoratedShape;
  constructor(_decoratedShape) {
    super(_decoratedShape);
    this.redDecoratedShape = _decoratedShape;
  }
  setRedBorder(redDecoratedShape) {
    this.logger.log('Border color: Red.');
  }
  draw() {
    this.redDecoratedShape.draw();
    this.setRedBorder(this.redDecoratedShape);
  }
}
