import { Logger } from '../logger.js';
export class Student {
  studentNo;
  studentName;
  constructor() {
    this.studentNo = '';
    this.studentName = '';
  }
  get rollNo() {
    return this.studentNo;
  }
  get rollName() {
    return this.studentName;
  }
  set _rollNo(number) {
    this.studentNo = number;
  }
  set _rollName(name) {
    this.studentName = name;
  }
}
export class StudentView {
  logger;
  constructor() {
    this.logger = new Logger();
  }
  printStudentDetails(name, number) {
    this.logger.log('Student:');
    this.logger.log('rollName:' + name);
    this.logger.log('Roll no:' + number);
  }
}
export class StudentController {
  studentModel;
  studentView;
  constructor(model, view) {
    this.studentModel = model;
    this.studentView = view;
  }
  get studentName() {
    return this.studentModel.rollName;
  }
  get studentNo() {
    return this.studentModel.rollNo;
  }
  set _studentName(name) {
    this.studentModel._rollName = name;
  }
  set _studentNo(number) {
    this.studentModel._rollNo = number;
  }
  updateView() {
    this.studentView.printStudentDetails(this.studentModel.rollName, this.studentModel.rollNo);
  }
}
export class DBManager {
  retriveStudentFromDatabase() {
    const student = new Student();
    student._rollName = 'Robert';
    student._rollNo = '10';
    return student;
  }
}
