const nameSpan = $('#fullName');
const height = $('#height');

for (let i = 1; i < 4 ; i++){

$.ajax({
    url:`https://swapi.dev/api/people/${i}`,
    success: function(data){
        nameSpan.after(`<p>${data.name}</p>`)
        height.after(`<p>${data.height}</p>`)
        
    }
})};
