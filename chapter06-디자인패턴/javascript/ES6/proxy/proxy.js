import { Logger } from '../logger.js';
//Real Class
export class Driving {
  logger;
  constructor() {
    this.logger = new Logger();
  }
  startEngine() {
    this.logger.log('Engine is started.');
  }
  hitGas() {
    this.logger.log('Car is accelerated.');
  }
  hitBrake() {
    this.logger.log('Car is stopped.');
  }
  parkCark() {
    this.logger.log('Car is parked.');
  }
  stopEngine() {
    this.logger.log('Engine is stopped.');
  }
}
//Proxy Class
export class ProxyDriving extends Driving {
  _driving;
  constructor() {
    super();
    this._driving = new Driving();
  }
  startEngine() {
    this._driving.startEngine();
  }
  hitGas() {
    this._driving.hitGas();
  }
  hitBrake() {
    this._driving.hitBrake();
  }
  parkCark() {
    this._driving.parkCark();
  }
  stopEngine() {
    this._driving.stopEngine();
  }
}
