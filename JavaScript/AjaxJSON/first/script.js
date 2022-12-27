// console.log('Class,10,AJAX');

// let objekt = {
//     name: "stevo",
//     lastname: "stefanovski"
// }
// console.log(objekt);
// let parsedToJson = JSON.stringify(objekt);
// console.log(parsedToJson);

// let obratno = JSON.parse(parsedToJson);
// console.log(obratno);
const nameSpan = $('#fullName');
const height = $('#height');
const mass = $('#mass');


$.ajax({
    url:"https://swapi.dev/api/people/1",
    success: function(data){
        nameSpan.text(data.name)
        height.text(data.height)
        mass.text(data.mass)
        // console.log(data);
    }
});



// name.text('asdasd')