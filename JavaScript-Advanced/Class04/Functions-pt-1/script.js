function sumOfTwoNumbers(numberone, numbertwo) {
  let result = numberone + numbertwo;
  console.log(result);
}

sumOfTwoNumbers(3, 5);

let greeting = "blabla";

function sumOfTwoNumbersNew(numberone, numbertwo) {
  let result = numberone + numbertwo;
  console.log(greeting);
  greeting = "king";
  console.log(greeting);
  function sayHello(helloWorld) {
    let greetingInsideSecondFunction = helloWorld;
    return greetingInsideSecondFunction;
  }
  let hello = sayHello(greeting);
  console.log(hello);

  return result;
}
let resultOfSecondFunction = sumOfTwoNumbersNew(2, 3);
console.log(resultOfSecondFunction);

console.log(greeting);

class Person {
  constructor(firstName, lastName) {
    this.personFirstName = firstName;
    this.personlastName = lastName;
  }
  info() {
    console.log(`${this.personFirstName} ${this.personlastName}`);
  }
}

let boki = new Person("Boki", "Brate");
boki.info();

//Anonymous Functions

let func1 = function (name) {
  console.log(`Hello from an anonymous function from ${name}`);
};
func1("Ivan");

let myArr = [
  "test",
  2,
  5,
  3,
  function () {
    return 2 + 3 + 5;
  },
];

console.log(myArr[4]());


let ifElseFunc = function(n1,n2){
    if(n1>n2){
        return n1;
    } else if (n1 < n2){
        return n2;
    }
    return 0;
}

console.log(ifElseFunc(1,2)); 
console.log(ifElseFunc(3,2)); 
console.log(ifElseFunc(1,1)); 



// ARROW FUNCTIONS

function someFuncWithABasicFunction (num){
    return num+10
}

const someResult  = (num) => num+10  // skoro sekad so const
console.log(someResult(10));
console.log(someFuncWithABasicFunction(10)); 

const sayHelloArrowFunc = () => console.log('Hello from SEDC');
sayHelloArrowFunc();

const arrowFuncWithMoreParas = (n1,n2) => n1+n2;
console.log(arrowFuncWithMoreParas(12,21));

const arrowFuncComplicated = (num1,num2)=>{
    let result = num1+num2
    return result;
}
console.log(arrowFuncComplicated(4,6));


// self invoked function

(()=>{
    let result = 5;
    console.log( result +25);
}
)();


let selfInvokedFunc = ((num1,num2) => {
    return num1+num2
})(100,60);

console.log(selfInvokedFunc);
