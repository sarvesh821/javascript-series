// class School {
//     constructor(name) {
//         this.schoolName = name;
//     }
//     getSchoolName() {
//         return this.schoolName;
//     }
// }

// class Employee extends School {
//     constructor(name, schoolName) {
//         super(schoolName);
//         this.employeeName = name;
//     }
//     getEmployeeName() {
//         return this.employeeName;
//     }
// }
// class Teacher extends Employee{
//     constructor(name,schoolName,desigination){
//         super(name,schoolName)
//         this.desigination=desigination
//     }
//     getDesigination(){
//         return this.desigination
//     }
// }
// let school = new School("St.Xavier's High School");
// let employee = new Employee("Sarvesh", "St.Xavier's High School");
// let teacher=new Teacher("John","St.Xavier's High School","Math teacher")

// console.log(school.getSchoolName());

// console.log(employee.getEmployeeName());
// console.log(employee.getSchoolName());

// console.log(teacher.getEmployeeName());
// console.log(teacher.getSchoolName());
// console.log(teacher.getDesigination());

//============================================================================================================

// function School(name) {
//     this.name = name;
// }

// School.prototype.getName = function() {
//     return this.name;
// };

// function Employee(name, schoolName) {
//     School.call(this, schoolName);
//     this.employeeName = name;
// }

// Employee.prototype = Object.create(School.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.getEmployeeName = function() {
//     return this.employeeName;
// };

// function Teacher(name, schoolName, designation) {
//     Employee.call(this, name, schoolName);
//     this.designation = designation;
// }

// //inherit prototype of employee obj
// Teacher.prototype=Object.create(Employee.prototype)
// Teacher.prototype.constructor=Teacher

// Teacher.prototype.getDesignation = function() {
//     return this.designation;
// };

// const mySchool = new School("St.Xaviers High School");
// console.log(mySchool.getName());

// const employee = new Employee("Sarvesh Goyal", "Springfield Elementary");
// console.log(employee.getEmployeeName());
// console.log(employee.getName());

// const teacher = new Teacher("Jane ", "Olive Elementary Education", "Math Teacher");
// console.log(teacher.getEmployeeName());
// console.log(teacher.getName());
// console.log(teacher.getDesignation());

//===============================================================================================

function School(schoolName) {
  this._schoolName = schoolName;

  Object.defineProperty(this, "schoolName", {
    get: function () {
      return this._schoolName;
    },
    set: function (val) {
      this._schoolName = val;
    },
  });
}

function Employee(employeeName, schoolName) {
  School.call(this, schoolName);
  this._employeeName = employeeName;
  Object.defineProperty(this, "employeeName", {
    get: function () {
      return this._employeeName;
    },
    set: function (val) {
      this._employeeName = val;
    },
  });
}

Employee.prototype = Object.create(School.prototype);
Employee.prototype.constructor = Employee;

function Teacher(name, schoolName, designation) {
  Employee.call(this, name, schoolName);

  this._designation = designation;

  Object.defineProperty(this, "designation", {
    get: function () {
      return this._designation;
    },
    set: function (val) {
      this._designation = val;
    },
  });
}

Teacher.prototype = Object.create(Employee.prototype);
Teacher.prototype.constructor = Teacher;

const school = new School("st.Xavier's High School");
console.log(school.schoolName);

const employee = new Employee("John Doe", "Greenwood High");
console.log(employee.employeeName);
console.log(employee.schoolName);

const teacher = new Teacher(
  "Jane",
  "Thomas Elementary High School",
  "Math Teacher"
);
console.log(teacher.employeeName); 
console.log(teacher.schoolName); 
console.log(teacher.designation); 
