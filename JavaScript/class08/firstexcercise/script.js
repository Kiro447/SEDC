//EXERCISE 1

// let newArr = [1,2,3,4,5,6,7,8,9,19,22,45,44];
// for ( let i = 0 ; i < newArr.length ; i++){
//     if(newArr[i] % 2 === 0 ){
//         console.log(newArr[i]);
//     } else{
//         console.log('odd numb');
//     }
// }

// EXERCISE 2
// let newNumber = Infinity;

// function deleteNumber(number, array) {
//     let occurences = 0;
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === number){
//             occurences++;
//             while(occurences >= 1){
//                 array.shift(i);
//                 console.log(array[i]);
//                 occurences--
//             }
//         }
//     }
//     return occurences;
// }
// let input = parseInt(prompt("Enter a number:"));
// let array = [2,2,2,3,44,45,44]
// deleteNumber(input,array)




// function deleteNumber(arr,element){
//     for (let i = 0 ; i<arr.length;i++){
//         while(arr[i] == element){
//             arr.splice(i,1)
//         }
//     }
//     return arr;
// }
// let newArr= [1,1,1,2,3,4,4,4,5]
// var goodArr = deleteNumber(newArr,4)
// console.log(goodArr);



// EXERCISE 3
let number = 150;
function checkDigits (element){
    let counter = 0;
while(element != 0 ){
    element = Math.floor(element/10);
    counter++
}
return counter;
}
let checkNew = checkDigits(number);
console.log(checkNew);