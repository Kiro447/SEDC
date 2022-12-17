let myApp = document.getElementById("app");
let titleDiv = myApp.firstElementChild;
let contentDiv = myApp.children[1];

let students = ['Kiril','Marko','Stefan','Filip','Zoki','Ivan','Zarko'];
let subjects = ['HTML','CSS','JS BASIC','JS Advanced','C# Basic','C# Advanced','MySQL'];
let grades = [1,2,3,4,5,5,3];

// @param (Array) subjects;
// @param(Array) grades;
// @param(HTMLElement) element;
function printGrades(subjects,grades,element){
    // console.log(element);
    element.innerHTML = "";
    element.innerHTML += "<ul>";
    for (let i = 0 ; i <subjects.length ; i++){
        element.innerHTML += `<li>${subjects[i]} : ${grades[i]}</li>`
    }
    element.innerHTML += "</ul>";
}

function printStudents(students,element){
    element.innerHTML = "";
    element.innerHTML += "<ol>";
    for (let student of students){
        element.innerHTML += `<li>${student}</li>`;
    }
    element.innerHTML += "</ol>";
}
printGrades(subjects,grades,contentDiv);
printStudents(students,titleDiv);