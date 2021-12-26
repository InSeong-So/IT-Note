import { Director, Builder, HouseBuilder, FlatBuilder, Building } from './builder';
import { Logger } from '../logger';

const logger = new Logger();

const director = new Director();

director.construct(new HouseBuilder());
director.constructBuilding();
const building1 = director.getBuilding();
logger.log(building1.toString());

director.construct(new FlatBuilder());
director.constructBuilding();
const building2 = director.getBuilding();
logger.log(building2.toString());
