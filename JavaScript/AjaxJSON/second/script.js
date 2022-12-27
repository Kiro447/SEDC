import card from "./src/card.js";

const cardsContainer = document.getElementById("cardsContainer");









fetch("https://swapi.dev/api/starships")
.then((response)=>{
    response.json()
        .then((data)=> {
            for(let i = 0 ; i < data.results.length; i++){
                const element = data.results[i];
                cardsContainer.innerHTML += card(element);
            }
            
    
})
})