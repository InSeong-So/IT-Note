import { ShapeFactory } from './factorymethod.js';
const shapeFactory = new ShapeFactory();
//get an object of Circle and call its draw method.
const circleShape = shapeFactory.getShape('CIRCLE');
//call draw method of Circle
circleShape.draw();
//get an object of Rectangle and call its draw method.
const rectangleShape = shapeFactory.getShape('RECTANGLE');
//call draw method of Rectangle
rectangleShape.draw();
//get an object of Square and call its draw method.
const squareShape = shapeFactory.getShape('SQUARE');
//call draw method of circle
squareShape.draw();
