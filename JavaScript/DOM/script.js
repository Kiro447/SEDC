// let headlineElement = document.getElementById("zdravo");
// headlineElement.innerText = 'pozdrav';
// let paragraphElement = document.getElementById("para")
// paragraphElement.innerText = 'HelloW0rld';
// let dateElement = document.getElementById("date")

// // setInterval(() => { 
// let someText = getDate();
// console.log(someText)
// dateElement.innerText = someText;
// // },1000)

// let paragraphSelectorSingle = document.querySelector("p");
// console.log(paragraphSelectorSingle);
// let paragraphSelector = document.querySelectorAll("p");
// console.log(paragraphSelector);
// for ( let i = 0; i < paragraphSelector.length ; i++){
//     console.log(paragraphSelector[i])
// }
// byId go zima prviot ID;
let divRoditel = document.querySelector("#roditel");
console.log(divRoditel);
let firstChild = divRoditel.firstElementChild;
console.log(firstChild);
let secondChild = firstChild.nextElementSibling;
console.log(secondChild)
let thirdChild = divRoditel.children[2];
console.log(thirdChild)



let createNovElement = ` <span style = "color: red;">Crven tekst</span>`
divRoditel += createNovElement;