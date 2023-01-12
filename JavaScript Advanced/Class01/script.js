let arrayOne = [];
let arrayTwo = [];
let arrayThree = [];


for(let i = 1 ; i<= 1000; i++){
    if( i % 3 === 0 ){
        arrayOne.push(i)
    } else if( i % 4 === 0){
        arrayTwo.push(i)
    } else if ( i % 10 === 1){
        arrayThree.push(i)
    }
}
console.log(arrayOne,arrayTwo,arrayThree);


// excercise 2
const isBoolean = val => 'boolean' === typeof val;

let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
let numberArr = [];
let stringArr = [];
function stringSaver(arr,number,string){
    for( let i = 0 ; i <= arr.length; i++){
        if (typeof(arr[i]) === 'string'){
            // console.log(arr[i]);
            string.push(arr[i])
        } else if (typeof (arr[i]) === 'number'){
            number.push(arr[i])
        }
    }
    console.log(number);
    console.log(string);
}

stringSaver(test,stringArr,numberArr)


// excercise 3



class Student{
    constructor(firstName,lastName,birthYear,academy,grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;
}
getAge(){
    console.log(this.birthYear);
}
getInfo(){
    console.log(`This is student ${this.academy} ${this.lastName} from the academy ${academy}`);
}
getGradesAverage = function() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  }
}



let Ivan = new Student ('Kiril','Jordanov','1998','sedc',[10,9,9,9,9])
// console.log(this.getGradesAverage(Ivan)); 
console.log(Ivan);




