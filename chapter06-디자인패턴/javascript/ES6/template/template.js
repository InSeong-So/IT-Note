import { Logger } from '../logger.js';
export class HouseTemplate {
  logger;
  constructor() {
    this.logger = new Logger();
  }
  //Template method, final so subclasses can't override
  buildHouse() {
    this.buildFoundation();
    this.buildPillars();
    this.buildWalls();
    this.buildWindows();
    this.logger.log('House is built.');
    this.logger.log('***************');
  }
  //Always same for all kinds of concrete classes so it is implemented in base.
  buildFoundation() {
    this.logger.log('Building foundation with cement,iron rods and sand');
  }
  //Always same for all kinds of concrete classes so it is implemented in base.
  buildWindows() {
    this.logger.log('Building glass windows');
  }
  //Abstract method which is to be implemented in concrete classes
  buildPillars() {
    throw new Error('Abstract Method!');
  }
  //Abstract method which is to be implemented in concrete classes
  buildWalls() {
    throw new Error('Abstract Method!');
  }
}
//Concrete implementor 1/2
export class WoodenHouse extends HouseTemplate {
  buildWalls() {
    this.logger.log('Building wooden walls.');
  }
  buildPillars() {
    this.logger.log('Building pillars with wooden coating.');
  }
}
//Concrete implementor 2/2
export class GlassHouse extends HouseTemplate {
  buildWalls() {
    this.logger.log('Building glass walls.');
  }
  buildPillars() {
    this.logger.log('Building pillars with glass coating.');
  }
}
