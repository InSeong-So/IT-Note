export class Employee {
  subordinates;
  name;
  dept;
  sal;
  constructor(name, dept, sal) {
    this.subordinates = [];
    this.name = name;
    this.dept = dept;
    this.sal = sal;
  }
  add(e) {
    this.subordinates.push(e);
  }
  remove(e) {
    const index = this.subordinates.indexOf(e);
    if (index > -1) {
      this.subordinates.splice(index, 1);
    }
  }
  get Subordinates() {
    return this.subordinates;
  }
}
