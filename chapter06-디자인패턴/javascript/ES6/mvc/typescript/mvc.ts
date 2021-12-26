import { Logger } from '../../logger';

export class Student {
  studentNo: string;
  studentName: string;
  constructor() {
    this.studentNo = '';
    this.studentName = '';
  }

  get rollNo(): string {
    return this.rollNo;
  }

  get rollName(): string {
    return this.studentName;
  }

  set _rollNo(number: string) {
    this.studentNo = number;
  }

  set _rollName(name: string) {
    this.studentName = name;
  }
}
export class StudentView {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  printStudentDetails(name: string, number: string) {
    this.logger.log('Student:');
    this.logger.log('rollName:' + name);
    this.logger.log('Roll no:' + number);
  }
}
export class StudentController {
  studentModel: Student;
  studentView: StudentView;
  constructor(model: Student, view: StudentView) {
    this.studentModel = model;
    this.studentView = view;
  }

  get studentName(): string {
    return this.studentModel.rollName;
  }

  get studentNo(): string {
    return this.studentModel.rollNo;
  }

  set _studentName(name: string) {
    this.studentModel._rollName = name;
  }

  set _studentNo(number: string) {
    this.studentModel._rollNo = number;
  }

  updateView() {
    this.studentView.printStudentDetails(this.studentModel.rollName, this.studentModel.rollNo);
  }
}
export class DBManager {
  retriveStudentFromDatabase(): Student {
    const student = new Student();
    student._rollName = 'Robert';
    student._rollNo = '10';
    return student;
  }
}
