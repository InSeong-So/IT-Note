import { Computer, ComputerPartDisplayVisitor } from './visitor.js';
const computerPart = new Computer();
computerPart.accept(new ComputerPartDisplayVisitor());
