import { Originator, CareTaker } from './memento';
import { Logger } from '../logger';

const originator = new Originator();
const careTaker = new CareTaker();
const logger = new Logger();
originator.State = 'State #1';
originator.State = 'State #2';
careTaker.addStateToMementoList(originator.stateToBeSavedMemento);

originator.State = 'State #3';
careTaker.addStateToMementoList(originator.stateToBeSavedMemento);
originator.State = 'State #4';
logger.log('Current state is: ' + originator.State);
originator.stateFromMemento = careTaker.getStateFromMementoList(0);
logger.log('First saved state is: ' + originator.State);
originator.stateFromMemento = careTaker.getStateFromMementoList(1);
logger.log('Second saved state is: ' + originator.State);
