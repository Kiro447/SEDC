// let days = [1, 2, 33, 24, 55, 65, 127, 8, 9];
// let i = 0;
// while ( i < days.length){
//     console.log(`Index ${i} : ${days[i]}`);
//     let maxNum = Math.max(days[i]);
//     console.log(maxNum);
//     i++;
// }

// function findLargestNum(inputArray) {
//   let counter = 0;
//   let max = -Infinity;
//   while (counter < inputArray.length) {
//     if (inputArray[counter] > max) {
//       max = inputArray[counter];
//     }
//     console.log("max:" + max);
//     counter++;
//   }
//   return max;
// }
// // findLargestNum(days)
// let maxOfNums = findLargestNum(days);
// console.log(maxOfNums);

//continue - go skoka momentot od ifot ( exclude na toj element)
// break - sopira do momentot i ne go printa breakot pointot
// null go bruse
let numbers = [1,2,2,2,1,1,2];

// filter na site broevi 





function numberCount(number, array) {
    let occurences = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === number){
            occurences++;
        }
    }
    return occurences;
}
let input = parseInt(prompt("Enter a number:"));
let testArray = [2, 5, 6, 3, 5, 5, 2, 5, 7, 8, 2];
console.log(`There are ${numberCount(input, testArray)} occurences of ${input} in the array!`);