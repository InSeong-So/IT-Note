import { Student, StudentController, StudentView, DBManager } from './mvc';

//fetch student record based on his roll no from the database
const db = new DBManager();
const model = db.retriveStudentFromDatabase();

//Create a view : to write student details on console
const view = new StudentView();

const controller = new StudentController(model, view);
controller.updateView();

//update model data
controller._studentName = 'John';
controller._studentNo = '15';

controller.updateView();
