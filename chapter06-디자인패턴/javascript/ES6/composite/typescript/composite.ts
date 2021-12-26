import { Logger } from '../../logger';

export class Employee {
  subordinates: Employee[];
  name: string;
  dept: string;
  sal: number;
  constructor(name: string, dept: string, sal: number) {
    this.subordinates = [];
    this.name = name;
    this.dept = dept;
    this.sal = sal;
  }
  add(e: Employee) {
    this.subordinates.push(e);
  }
  remove(e: Employee) {
    const index = this.subordinates.indexOf(e);
    if (index > -1) {
      this.subordinates.splice(index, 1);
    }
  }

  get Subordinates() {
    return this.subordinates;
  }
}
