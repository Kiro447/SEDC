function reverseNumber(number) {
  let countNumber = 0;
  let result = 0;

  while (number) {
    countNumber = number % 10; // countNumber = 12.3 result = 12.3
    result = result * 10 + countNumber;
    number = (number / 10) | 0;
  }

  return result;
}
let toReverseNumber = prompt("Enter a number");
let testing = reverseNumber(toReverseNumber);
console.log(testing);

// 2. write a function that returns how many letters of a string
function checkSentance(sentance, letter) {
  let counter = 0;
  for (let i = 0; i < sentance.length; i++) {
    if (sentance[i] !== letter) {
      continue;
    }

    counter++;
  }
  return counter;
}
let recenica = prompt("Enter a sentance");
let bukva = prompt("Enter a letter");
let test = checkSentance(recenica, bukva);
console.log(test);

// 4. write a function that accepts 1 argument an arr of nums and returns an obj with the smallest and largest num

function minMaxSum(inputArray) {
  let counter = 0;
  let max = -Infinity;
  let min = Infinity;
  while (counter < inpsutArray.length) {
    if (inputArray[counter] > max) {
      max = inputArray[counter];
    }
    if (inputArray[counter] < min) {
      min = inputArray[counter];
    }
    counter++;
  }
  return (kingObject = {
    minNumber: min,
    maxNumber: max,
  });
}
let testArray = [1, 2, 3, 4, 5, 22, 33, 54, -1];
let checkArray = minMaxSum(testArray);
console.log(checkArray);

// PRINTANJE

let newDiv = document.getElementById("newDiv");
let firstPara = newDiv.appendChild(document.createElement("p"));
firstPara.textContent = `You entered ${toReverseNumber} and the reverse number is ${testing} `;
let secondPara = newDiv.appendChild(document.createElement("p"));
secondPara.textContent = `The letter you enteret "${bukva}" occurs ${test} times in this sentance "${recenica}"`;

let list = newDiv.appendChild(document.createElement("ul"));

for (i = 1; i <= 100; i++) {
  let li = document.createElement("li");
  li.innerHTML = [i];
  list.appendChild(li);
}
let forthPara = newDiv.appendChild(document.createElement("p"));

for (const arratChecker in checkArray) {
  forthPara.innerText += `${arratChecker}: ${checkArray[arratChecker]}\n`;
}

//
// 3. 1 do 100
let thirdPara = newDiv.appendChild();
thirdPara.id = "thirdPara";
