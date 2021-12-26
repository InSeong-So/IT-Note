import { Logger } from '../logger.js';
//Refined Abstraction
export class CircleShape {
  x;
  y;
  radius;
  drawingApi;
  constructor(x, y, radius, drawingApi) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.drawingApi = drawingApi;
  }
  //low-level i.e. Implementation specific
  draw() {
    this.drawingApi.drawCircle(this.x, this.y, this.radius);
  }
  //high-level i.e. Abstraction specific
  scale(pct) {
    this.radius *= pct;
  }
}
export class DrawingAPI {
  logger;
  constructor() {
    this.logger = new Logger();
  }
  drawCircle(...args) {
    throw new Error('Abstract method!');
  }
}
//ConcreteImplementor 1/2
export class DrawingAPI1 extends DrawingAPI {
  drawCircle(x, y, radius) {
    this.logger.log('API1.circle at ' + x + ':' + y + ' radius ' + radius);
  }
}
// ConcreteImplementor 2/2
export class DrawingAPI2 extends DrawingAPI {
  drawCircle(x, y, radius) {
    this.logger.log('API2.circle at ' + x + ':' + y + ' radius ' + radius);
  }
}
