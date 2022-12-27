function card(data){
    return `
    <div class="cardsContainer">

    <div class="cardsContainer_card_left">
    <h3>ShipName: ${data.name}</h3>
    <h3>Ship Model: ${data.model}</h3>
    <h3>Hyperdrive: ${data.hyperdrive_rating}</h3>
    <h3>Passangers capacity: ${data.passangers}</h3>
    </div>

    <div class="cardsContainer_card_right">
    <h3>Cost: ${data.cost_in_credits}</h3>
    <h3>Cargo: ${data.cargo_capacity}</h3>
    <h3>Class:: ${data.starship_class}</h3>
    <h3>Crew:: ${data.crew}</h3>
    </div>

    </div>
    `
}

export default card;