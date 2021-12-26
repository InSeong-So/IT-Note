import { CircleShape, DrawingAPI1, DrawingAPI2 } from './bridge.js';
const shapes = [
  new CircleShape(1, 2, 3, new DrawingAPI1()),
  new CircleShape(5, 7, 11, new DrawingAPI2()),
];
shapes.forEach(shape => {
  shape.scale(2.5);
  shape.draw();
});
