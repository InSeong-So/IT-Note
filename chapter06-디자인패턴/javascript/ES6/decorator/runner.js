import { Circle, Rectangle, RedShapeDecorator } from './decorator.js';
const circle = new Circle();
const redCircle = new RedShapeDecorator(new Circle());
const redRectangle = new RedShapeDecorator(new Rectangle());
circle.draw();
redCircle.draw();
redRectangle.draw();
