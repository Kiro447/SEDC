let arrayOne = [];
let arrayTwo = [];
let arrayThree = [];

for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0) {
    arrayOne.push(i);
  } else if (i % 4 === 0) {
    arrayTwo.push(i);
  } else if (i % 10 === 1) {
    arrayThree.push(i);
  }
}
console.log(arrayOne, arrayTwo, arrayThree);

// excercise 2
const isBoolean = (val) => "boolean" === typeof val;

let test = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];
let numberArr = [];
let stringArr = [];
function stringSaver(arr, number, string) {
  for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] === "string") {
      // console.log(arr[i]);
      string.push(arr[i]);
    } else if (typeof arr[i] === "number") {
      number.push(arr[i]);
    }
  }
  console.log(number);
  console.log(string);
}

stringSaver(test, stringArr, numberArr);

// excercise 3

class Student {
  constructor(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;
    this.age = this.getAge(birthYear)
    this.info = this.getInfo();
    this.average = this.getGradesAverage(grades)
  }
  getAge = function() {
    return new Date().getFullYear() - this.birthYear;
  };
  getInfo = function() {
    return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
  };
  getGradesAverage = function() {
    let total = 0;
    for (let i = 0; i < this.grades.length; i++) {
      total += this.grades[i];
    }
    return total / this.grades.length;
  };
}

let Ivan = new Student("Kiril", "Jordanov", "1998", "sedc", [10, 9, 9, 9, 9]);
console.log(Ivan);


let userName = document.getElementById('firstName')
let userLastName = document.getElementById('lastName')
let userAge = document.getElementById('age')
let userEmail = document.getElementById('email')
let btn = document.querySelector('button')

function Studenti (studentName,studentLast,studentAge,studentEmail){
    this.studentName = userName;
    this.studentLast = userLastName;
    this.studentAge = userAge;
    this.studentEmail = userEmail;
}
btn.addEventListener('click',()=>{

    let userName = new Student(userName,userLastName,userAge,userEmail)
    
})
console.log(userName);