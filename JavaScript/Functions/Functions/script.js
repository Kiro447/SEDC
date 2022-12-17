// function sums (x,y){
//   let sum = x + y;
//   console.log(sum)
// }
// function subtracts (x,y){
//   let sub = x - y;
//   console.log(sub)
// }
// function multiply (x,y){
//   let multiply = x * y;
//   console.log(multiply)
// }
// function divide (x,y){
//   let divide = x / y;
//   console.log(divide)
// }
// sums (6,4);
// subtracts(4,2);
// multiply(6,2);
// divide(100,20);
// // let grow = (sumz) => {
// //   let x = parseInt(prompt('Enter a number'));
// //   let y = parseInt(prompt('Enter second number'))
// //   let sum = x + y ;
// //   console.log(sum)
// //   return sum;
// // }
// // grow();
// let gorjan = 5000;
// let stevo = 10;

// let deli = divide (gorjan,stevo)

// let grow = function () {
//   let x = parseInt(prompt('Enter a number'));
//   let y = parseInt(prompt('Enter second number'))

//   if ( isNaN (x) || isNaN(y) ){
//   alert('Eden od broevite ne e broj')
//   return;
//   } else {
//     let sum = x * y ;
//     console.log(sum)
//   }
// }
// grow();

function convertor() {
  let userInput = prompt(
    "Enter F for Ferenheit to celsius , Enter C to convert to ferenheit"
  ).toLowerCase();
  if (userInput !== "c" && userInput !== "f") {
    alert("Enter a valid input");
  } else if (userInput === "f") {
    let ferenheit = parseInt(prompt("Enter the ferenheit to convert"));
    if (isNaN(ferenheit)) {
      alert("Enter a valid number");
    } else {
      let result = (5 / 9) * (ferenheit - 32);
      alert(`${ferenheit} to celsius is ${result}`);
    }
  } else if (userInput === "c") {
    let celsius = parseInt(prompt("Enter the celsius to convert"));
    if (isNaN(celsius)) {
      alert("Enter a valid number");
    } else {
      let resultCelsius = celsius * 1.8 + 32;
      alert(`${celsius} to ferenheit is ${resultCelsius}`);
    }
  } else alert("You have exited");
}
convertor();
