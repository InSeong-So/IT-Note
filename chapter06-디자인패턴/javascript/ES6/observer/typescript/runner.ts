import { ConcreteSubject, ConcreteObserver } from './observer';

const sub = new ConcreteSubject();

sub.register(new ConcreteObserver(sub, 'Aaron'));
sub.register(new ConcreteObserver(sub, 'Swartz'));
sub.register(new ConcreteObserver(sub, 'Reddit'));

sub.SubjectState = 123;
sub.notify();
