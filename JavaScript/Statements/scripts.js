// let firstName = prompt ('Enter your name');
// let lastName = prompt('Enter your last name');
// alert(`Hello, i am ${firstName} ${lastName}`);

// let userBirthYear = prompt("Enter your birth year to find your zodiac sign");
// let birthYear = parseInt(userBirthYear);

// while (isNaN(birthYear)) {
//   alert("Please enter a valid number");
//   birthYear = prompt("Enter your birth year to find your zodiac sign");

//   if (birthYear !== NaN) {
//     let zodiacCalculator = (birthYear - 4) % 12;
//     if (zodiacCalculator === 0) {
//       alert("Your zodiac sign is Rat");
//     } else if (zodiacCalculator === 1) {
//       alert("Your zodiac sign is OX");
//     } else if (zodiacCalculator === 2) {
//       alert("Your zodiac sign is Tiger");
//     } else if (zodiacCalculator === 3) {
//       alert("Your zodiac sign is Rabbit");
//     } else if (zodiacCalculator === 4) {
//       alert("Your zodiac sign is Dragon");
//     } else if (zodiacCalculator === 5) {
//       alert("Your zodiac sign is Snake ");
//     } else if (zodiacCalculator === 6) {
//       alert("Your zodiac sign is Horse");
//     } else if (zodiacCalculator === 7) {
//       alert("Your zodiac sign is Goat");
//     } else if (zodiacCalculator === 8) {
//       alert("Your zodiac sign is Monkey");
//     } else if (zodiacCalculator === 9) {
//       alert("Your zodiac sign is Rooster");
//     } else if (zodiacCalculator === 10) {
//       alert("Your zodiac sign is Dog");
//     } else if (zodiacCalculator === 11) {
//       alert("Your zodiac sign is Pig");
//     }
//   }
//   else {
//     alert('You have quitted')
//   }
// }

let userInput = prompt('How much money you have')


if (userInput !== null){
    if (isNaN(userInput)){
        alert ('enter a valid number');
        let userCash = parseInt(userInput);
    } 

    
} else {
    alert('You have exited');
}