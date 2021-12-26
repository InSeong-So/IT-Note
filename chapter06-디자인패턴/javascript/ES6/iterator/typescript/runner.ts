import { ConcreteIterator, Aggregate } from './iterator';
import { Logger } from '../logger';
const logger = new Logger();
const aggregate = new Aggregate();
aggregate.items[0] = 'ITEM 1';
aggregate.items[1] = 'ITEM 2';
aggregate.items[2] = 'ITEM 3';
aggregate.items[3] = 'ITEM 4';

const iterator = new ConcreteIterator(aggregate);

logger.log('Next object: ' + iterator.nextObject());
logger.log('Current object: ' + iterator.currentObject());
logger.log('Next object: ' + iterator.nextObject());
logger.log('First object: ' + iterator.firstObject());
logger.log('Next object: ' + iterator.nextObject());
if (iterator.isDone()) logger.log('Iterator is done!');
else {
  logger.log('Not yet!');
}
logger.log('Next object: ' + iterator.nextObject());
