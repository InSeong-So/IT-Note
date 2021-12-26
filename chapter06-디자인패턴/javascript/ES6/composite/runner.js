import { Employee } from './composite.js';
import { Logger } from '../logger.js';
const logger = new Logger();
const ceo = new Employee('John', 'CEO', 30000);
const headSales = new Employee('Robert', 'Head Sales', 20000);
const headMarketing = new Employee('Michel', 'Head Marketing', 20000);
const clerk1 = new Employee('Laura', 'Marketing', 10000);
const clerk2 = new Employee('Bob', 'Marketing', 10000);
const salesExecutive1 = new Employee('Richard', 'Sales', 10000);
const salesExecutive2 = new Employee('Rob', 'Sales', 10000);
ceo.add(headSales);
ceo.add(headMarketing);
headSales.add(salesExecutive1);
headSales.add(salesExecutive2);
headMarketing.add(clerk1);
headMarketing.add(clerk2);
logger.log(JSON.stringify(ceo));
logger.log(JSON.stringify(headSales));
//Refactor code. For loop
ceo.subordinates.forEach(_ceo => {
  logger.log(JSON.stringify(_ceo));
});
