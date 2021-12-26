import { Logger } from '../../logger';

//Refined Abstraction
export class CircleShape {
  x: number;
  y: number;
  radius: number;
  drawingApi: DrawingAPI;
  constructor(x: number, y: number, radius: number, drawingApi: DrawingAPI) {
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
  scale(pct: number) {
    this.radius *= pct;
  }
}

export class DrawingAPI {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  drawCircle(...args: any[]) {
    throw new Error('Abstract method!');
  }
}

//ConcreteImplementor 1/2
export class DrawingAPI1 extends DrawingAPI {
  drawCircle(x: number, y: number, radius: number) {
    this.logger.log('API1.circle at ' + x + ':' + y + ' radius ' + radius);
  }
}

// ConcreteImplementor 2/2
export class DrawingAPI2 extends DrawingAPI {
  drawCircle(x: number, y: number, radius: number) {
    this.logger.log('API2.circle at ' + x + ':' + y + ' radius ' + radius);
  }
}
