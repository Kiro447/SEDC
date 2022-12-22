// add 3 input fields who when where
// add button to generate a story
let mainNode = document.getElementById("main");
let whoNode = document.getElementById("who");
let whereNode = document.getElementById("where");
let whenNode = document.getElementById("when");
let buttonNode = document.getElementById("btn");

buttonNode.addEventListener('click',() =>{
    let storyNode = document.createElement("p");
    mainNode.append(storyNode);
    storyNode.textContent = `There was a hero named ${whoNode.value}. 
    He is ${whereNode.vlaue} In the times of ${whenNode.value}. It was great `

} )
