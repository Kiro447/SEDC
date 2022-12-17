// let myButton = document.getElementById("myButton")
// // let mySecondButton = document.getElementById("muSecondButton")
// // let myDiv = document.getElementById("myDiv")

// // function btnClick (){
// //     alert('You clicked on this button')
// // }
// // function greeting (){
// //     alert('Welcome')
// // }
// // function goodbye (){
// //     alert('GoodBye')
// // }
// // function helloGood (){
// //     alert('Hello')
// // }
// // myButton.onclick = btnClick;
// // mySecondButton.onclick = btnClick;
// // // myDiv.onmouseover = greeting;
// // myDiv.onmouseout = helloGood;


// let myInputElement = document.getElementById("myInput");
// function focusGreeting(){
//     alert("focus on input")
// };
// function blurGreeting(){
//     alert("input lost focus")
// };
// function buttonClicked (){
//     alert("Button clicked")
// };
// // myInputElement.addEventListener("blur",function(event){
// //     console.log(event.target.value);
// // })
// // myButton.addEventListener("click",buttonClicked);
// // myButton.addEventListener("click",function(event){
// //     alert("hello from event listener");
// // })
// myButton.addEventListener("click",function(event){
// console.log(event);
// console.log(event.target.value);
// })

// let myBtn = document.getElementById("myButton")
// let myInputElement = document.getElementById("myInput");
// function btnClick(){
//     alert("Hello Kiril")
// };
// myBtn.addEventListener("click",btnClick);

let myBtn = document.getElementById("myButton")
let firstPara = document.getElementById("para");
function changeStyles(element){
    element.styles.color = "red"
    element.styles.backgroundColor = "blue";
    element.style.fontSize = "34px";
}
myBtn.addEventListener("click",function(){
    changeElement(firstPara);
})
