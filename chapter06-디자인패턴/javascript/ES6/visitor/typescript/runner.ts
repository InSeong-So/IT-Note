import {
  ComputerPart,
  Computer,
  ComputerPartVisitor,
  ComputerPartDisplayVisitor,
  Mouse,
  Keyboard,
  Monitor,
} from './visitor';

const computerPart = new Computer();
computerPart.accept(new ComputerPartDisplayVisitor());
